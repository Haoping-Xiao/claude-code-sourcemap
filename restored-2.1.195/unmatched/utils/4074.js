// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ryt
// matched 2.1.88 source: src/ink/Ansi.tsx
// class=new  jaccard=0.0331  score=0.3828  fileCov=0.0349
// note: nearest: src/ink/Ansi.tsx (0.0331); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function pE(e) {
  let t = $ol.c(7),
    {
      children: n,
      color: r,
      textColor: o,
      padded: s,
      bold: i,
      wrap: a
    } = e,
    l = s ? " " : "",
    c = o ?? (r ? "inverseText" : void 0),
    u;
  if (t[0] !== i || t[1] !== n || t[2] !== r || t[3] !== l || t[4] !== c || t[5] !== a) u = Ool.jsxs(w, {
    backgroundColor: r,
    color: c,
    bold: i,
    wrap: a,
    children: [l, n, l]
  }), t[0] = i, t[1] = n, t[2] = r, t[3] = l, t[4] = c, t[5] = a, t[6] = u;else u = t[6];
  return u;
}
var $ol, Ool;