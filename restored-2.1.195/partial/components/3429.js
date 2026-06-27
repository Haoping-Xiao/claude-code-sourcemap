// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Fy
// matched 2.1.88 source: src/components/design-system/Dialog.tsx
// class=partial  jaccard=0.0843  score=0.4879  fileCov=0.0925
// note: low-confidence suggestion: src/components/design-system/Dialog.tsx; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Fy] deps: hooks/useTerminalSize.ts, components/ClickableImageRef.tsx, keybindings/useShortcutDisplay.ts
D1a = R(lt(), 1), $ho = R(se(), 1);
function vb(e) {
  let t = P1a.c(2),
    {
      children: n
    } = e,
    {
      pending: r,
      keyName: o
    } = ig(),
    s = r ? `Press ${o} again to exit` : n,
    i;
  if (t[0] !== s) i = M1a.jsx(w, {
    dimColor: true,
    children: s
  }), t[0] = s, t[1] = i;else i = t[1];
  return i;
}
var P1a, M1a;