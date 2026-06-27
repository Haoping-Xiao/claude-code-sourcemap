// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Bi
// matched 2.1.88 source: src/constants/files.ts
// class=partial  jaccard=0.11  score=1  fileCov=0.11
// note: low-confidence suggestion: src/constants/files.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Bi = E(() => {
  N0r();
  Lo();
  je();
  At();
  vn();
  QZe();
  B0r();
});
function mRt(e) {
  let t = e.slice(e.lastIndexOf(".")).toLowerCase();
  return g$u.has(t);
}
function j0r(e) {
  let t = Math.min(e.length, h$u),
    n = 0;
  for (let r = 0; r < t; r++) {
    let o = e[r];
    if (o === 0) return true;
    if (o < 32 && o !== 9 && o !== 10 && o !== 13) n++;
  }
  return n / t > 0.1;
}
var g$u,
  h$u = 8192;