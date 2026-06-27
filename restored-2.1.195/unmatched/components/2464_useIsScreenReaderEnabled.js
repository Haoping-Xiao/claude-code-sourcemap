// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GLn
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0045  score=0.1264  fileCov=0.0046
// note: nearest: src/screens/REPL.tsx (0.0045); dir inferred from dep-graph -> components; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: wrapText, useTimeout, useThemeSetting, useTheme, useTerminalViewport, useTerminalTitle, useTerminalFocus, useTabStatus, useStdin, useSelection, useResolvedTheme, usePreviewTheme, useIsScreenReaderEnabled, useInterval, useHasFocus, useFocus, useDebouncedCallback, useCustomThemes, useClock, useApp, useAnimationTimer, useAnimationFrame, supportsTabStatus, render, measureElement, createRoot, color, ThemeProvider, Text, TerminalFocusEvent, Spacer, RawAnsi, NoSelect, Newline, Link, Fo …
// [unwrapped __esm module GLn]
tX = VWd;
var wW = {};
function GJr(e) {
  return z5i.createElement(Z0n, null, e);
}
async function render(e, t) {
  if (t !== void 0 && "write" in t) return RJr(GJr(e), t);
  return RJr(GJr(e), {
    nativeCursor: wne(),
    ...t
  });
}
async function createRoot(e) {
  let t = await zWi({
    nativeCursor: wne(),
    ...e
  });
  return {
    ...t,
    render: n => t.render(GJr(n))
  };
}
var z5i;