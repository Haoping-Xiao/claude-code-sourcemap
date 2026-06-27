// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vEs
// matched 2.1.88 source: node_modules/@smithy/util-body-length-browser/dist-cjs/index.js
// class=partial  jaccard=0.125  score=1  fileCov=0.125
// note: low-confidence suggestion: node_modules/@smithy/util-body-length-browser/dist-cjs/index.js; dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var vEs = E(() => {
  Gon();
  Gkr();
  Wkr();
  TEs = tPu;
});
function nPu(e, t, n) {
  if (!Bb(n)) return false;
  var r = typeof t;
  if (r == "number" ? Nie(n) && Nve(t, n.length) : r == "string" && t in n) return Die(n[t], e);
  return false;
}
var wEs;