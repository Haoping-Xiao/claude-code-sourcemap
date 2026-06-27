// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Tms
// matched 2.1.88 source: node_modules/lodash-es/_createBaseFor.js
// class=partial  jaccard=0.2233  score=1  fileCov=0.2233
// note: low-confidence suggestion: node_modules/lodash-es/_createBaseFor.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Tms = E(() => {
  Hms = $lu;
});
function Olu(e, t) {
  return function (n, r) {
    if (n == null) return n;
    if (!Nie(n)) return e(n, r);
    var o = n.length,
      s = t ? o : -1,
      i = Object(n);
    while (t ? s-- : ++s < o) if (r(i[s], s, i) === false) break;
    return n;
  };
}
var vms;