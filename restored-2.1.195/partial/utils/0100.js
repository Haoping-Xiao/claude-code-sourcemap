// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yns
// matched 2.1.88 source: node_modules/lodash-es/_arrayPush.js
// class=partial  jaccard=0.0925  score=0.1136  fileCov=0.3326
// note: low-confidence suggestion: node_modules/lodash-es/_arrayPush.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var yns = E(() => {
  gns();
  P6c = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, M6c = /\\(\\)?/g, $6c = mns(function (e) {
    var t = [];
    if (e.charCodeAt(0) === 46) t.push("");
    return e.replace(P6c, function (n, r, o, s) {
      t.push(o ? s.replace(M6c, "$1") : r || n);
    }), t;
  }), hns = $6c;
});
function O6c(e, t) {
  var n = -1,
    r = e == null ? 0 : e.length,
    o = Array(r);
  while (++n < r) o[n] = t(e[n], n, e);
  return o;
}
var Fve;