// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module A6i
// matched 2.1.88 source: src/components/Spinner/ShimmerChar.tsx
// class=modified  jaccard=0.4805  score=0.757  fileCov=0.5681
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function OGe(e) {
  let t = H6i.c(3),
    { char: n, index: r, glimmerIndex: o, messageColor: s, shimmerColor: i } = e,
    a = r === o,
    l = Math.abs(r - o) === 1,
    u = a || l ? i : s,
    d;
  if (t[0] !== n || t[1] !== u)
    ((d = T6i.jsx(w, {
      color: u,
      children: n,
    })),
      (t[0] = n),
      (t[1] = u),
      (t[2] = d));
  else d = t[2];
  return d;
}
var H6i, T6i;
