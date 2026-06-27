// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ryt
// matched 2.1.88 source: src/components/TagTabs.tsx
// class=partial  jaccard=0.1244  score=1  fileCov=0.1244
// note: low-confidence suggestion: src/components/TagTabs.tsx; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Ryt = E(() => {
  sr();
});
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