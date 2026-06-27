#!/usr/bin/env bash
# 下载 @anthropic-ai/claude-code@2.1.195 (主包 + linux-x64 原生包) 并解包出 claude 二进制。
# 用法: tools/01-download.sh [version]
set -euo pipefail

VERSION="${1:-2.1.195}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/dist/$VERSION/npm"
mkdir -p "$OUT"

WRAPPER_URL="https://registry.npmjs.org/@anthropic-ai/claude-code/-/claude-code-${VERSION}.tgz"
NATIVE_URL="https://registry.npmjs.org/@anthropic-ai/claude-code-linux-x64/-/claude-code-linux-x64-${VERSION}.tgz"

echo "[01] downloading wrapper package..."
[ -f "$OUT/claude-code-${VERSION}.tgz" ] || curl -fsSL "$WRAPPER_URL" -o "$OUT/claude-code-${VERSION}.tgz"

echo "[01] downloading linux-x64 native package (~77MB)..."
[ -f "$OUT/claude-code-linux-x64-${VERSION}.tgz" ] || curl -fsSL "$NATIVE_URL" -o "$OUT/claude-code-linux-x64-${VERSION}.tgz"

echo "[01] extracting native package..."
rm -rf "$OUT/native"
mkdir -p "$OUT/native"
tar xzf "$OUT/claude-code-linux-x64-${VERSION}.tgz" -C "$OUT/native"

BIN="$OUT/native/package/claude"
if [ ! -f "$BIN" ]; then
  echo "[01] ERROR: claude binary not found at $BIN" >&2
  exit 1
fi
echo "[01] claude binary: $(ls -la "$BIN" | awk '{print $5}') bytes"
echo "[01] sha256: $(sha256sum "$BIN" | awk '{print $1}')"
echo "[01] done. binary at: $BIN"
