// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Pyr
// matched 2.1.88 source: node_modules/lodash-es/_equalObjects.js
// class=partial  jaccard=0.1875  score=0.8058  fileCov=0.1964
// note: low-confidence suggestion: node_modules/lodash-es/_equalObjects.js; dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Pyr] deps: Cyr, Ton, OBe
Wwt = t6c;
function equalObjects(e, t, n, r, o, s) {
  var i = n & n6c,
    a = Wwt(e),
    l = a.length,
    c = Wwt(t),
    u = c.length;
  if (l != u && !i) return false;
  var d = l;
  while (d--) {
    var p = a[d];
    if (!(i ? p in t : o6c.call(t, p))) return false;
  }
  var f = s.get(e),
    m = s.get(t);
  if (f && m) return f == t && m == e;
  var g = true;
  s.set(e, t), s.set(t, e);
  var h = i;
  while (++d < l) {
    p = a[d];
    var y = e[p],
      b = t[p];
    if (r) var _ = i ? r(b, y, p, t, e, s) : r(y, b, p, e, t, s);
    if (!(_ === void 0 ? y === b || o(y, b, n, r, s) : _)) {
      g = false;
      break;
    }
    h || (h = p == "constructor");
  }
  if (g && !h) {
    var S = e.constructor,
      A = t.constructor;
    if (S != A && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof A == "function" && A instanceof A)) g = false;
  }
  return s.delete(e), s.delete(t), g;
}
var n6c = 1,
  r6c,
  o6c,
  Vts;