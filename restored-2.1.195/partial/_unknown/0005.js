// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Lwt
// matched 2.1.88 source: node_modules/lodash-es/_listCacheDelete.js
// class=partial  jaccard=0.1846  score=1  fileCov=0.1846
// note: low-confidence suggestion: node_modules/lodash-es/_listCacheDelete.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Lwt = E(() => {
  BXe();
  Dve = iVc;
});
function cVc(e) {
  var t = this.__data__,
    n = Dve(t, e);
  if (n < 0) return false;
  var r = t.length - 1;
  if (n == r) t.pop();else lVc.call(t, n, 1);
  return --this.size, true;
}
var aVc, lVc, hes;