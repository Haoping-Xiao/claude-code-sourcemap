// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UIt
// matched 2.1.88 source: node_modules/lodash-es/_equalObjects.js
// class=partial  jaccard=0.1414  score=1  fileCov=0.1414
// note: low-confidence suggestion: node_modules/lodash-es/_equalObjects.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module UIt] deps: BIt, BXe
NKc = Object.prototype, BKc = NKc.hasOwnProperty;
pwe = UKc;
function FKc(e, t, n, r) {
  var o = !n;
  n || (n = {});
  var s = -1,
    i = t.length;
  while (++s < i) {
    var a = t[s],
      l = r ? r(n[a], e[a], a, n, e) : void 0;
    if (l === void 0) l = e[a];
    if (o) dwe(n, a, l);else pwe(n, a, l);
  }
  return n;
}
var UK;