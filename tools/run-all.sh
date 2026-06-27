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

echo "==> [5.5/7] 跨版本命名对齐 (用 2.1.88 恢复声明原名)"
$NODE tools/09-align-names.mjs

echo "==> [6/7] 生成还原源码树 restored-$VERSION/"
$NODE tools/06-restore.mjs

echo "==> [7/7] 覆盖率报告 + 抽样验证"
$NODE tools/07-report.mjs

if command -v bun >/dev/null 2>&1; then
  echo "==> [extra] 功能性 round-trip: bun 运行提取的 cli.js --version"
  bun tools/08-roundtrip.mjs "$VERSION" --version || echo "  (round-trip 失败, 非致命)"
else
  echo "==> [extra] 跳过 round-trip (未安装 bun)"
fi

echo "==> 完成。产物: dist/$VERSION/cli.js , restored-$VERSION/"
