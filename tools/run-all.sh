#!/usr/bin/env bash
# 无人值守一键流水线: 下载 2.1.195 -> 提取 minified cli.js -> 拆分 -> 基于 2.1.88 匹配 -> 还原 -> 报告。
#
# 用法: tools/run-all.sh [version]
set -euo pipefail

VERSION="${1:-2.1.195}"
export VERSION
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

NODE="node --max-old-space-size=8192"
BIN="dist/$VERSION/npm/native/package/claude"

echo "==> [1/7] 下载 $VERSION"
bash tools/01-download.sh "$VERSION"

echo "==> [2/7] 从 bun 二进制提取 minified cli.js"
$NODE tools/02-extract-bun.mjs "$BIN" "dist/$VERSION"

echo "==> [3/7] 拆分为逐模块文件"
$NODE tools/bun-demincer/src/resplit.mjs "dist/$VERSION/cli.js" "work/$VERSION/modules"

echo "==> [4/7] 构建 2.1.88 参照指纹索引"
$NODE tools/04-build-ref-index.mjs restored-src "work/$VERSION/ref-2.1.88.index.json"

echo "==> [5/7] 跨版本模块匹配"
$NODE tools/05-match-modules.mjs "work/$VERSION/modules" "work/$VERSION/ref-2.1.88.index.json" "work/$VERSION/match-report.json"

echo "==> [5.4/7] 厂商指纹分类 (识别 2.1.88 未含的第三方模块)"
$NODE tools/bun-demincer/src/match-vendors.mjs "work/$VERSION/modules" --db tools/bun-demincer/data/vendor-fingerprints-1000.json --out "work/$VERSION/vendor-overrides.json" --no-move || echo "  (vendor 指纹分类失败, 非致命)"

echo "==> [5.5/7] 跨版本命名对齐 (用 2.1.88 恢复声明原名)"
$NODE tools/09-align-names.mjs

echo "==> [5.6/7] 函数级局部变量名对齐 (属性指纹 -> 2.1.88 真名)"
$NODE tools/11-align-locals.mjs

echo "==> [5.7/7] (可选) LLM 变量名还原 (需 GEMINI/OPENAI/ANTHROPIC API key)"
$NODE tools/12-llm-rename.mjs || echo "  (LLM 步骤跳过/失败, 非致命)"

echo "==> [6/7] 生成还原源码树 restored-$VERSION/"
$NODE tools/06-restore.mjs

echo "==> [7/7] 覆盖率报告 + 抽样验证"
$NODE tools/07-report.mjs

echo "==> [7.5/7] 全量语法验证 (所有还原文件)"
$NODE tools/10-validate-parse.mjs || echo "  (存在解析失败, 见上)"

if command -v bun >/dev/null 2>&1; then
  echo "==> [extra] 功能性 round-trip: bun 运行提取的 cli.js --version"
  bun tools/08-roundtrip.mjs "$VERSION" --version || echo "  (round-trip 失败, 非致命)"
else
  echo "==> [extra] 跳过 round-trip (未安装 bun)"
fi

echo "==> 完成。产物: dist/$VERSION/cli.js , restored-$VERSION/"
