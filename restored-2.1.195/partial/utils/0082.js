// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Pyr
// matched 2.1.88 source: node_modules/lodash-es/_equalObjects.js
// class=partial  jaccard=0.1875  score=0.8058  fileCov=0.1964
// note: low-confidence suggestion: node_modules/lodash-es/_equalObjects.js; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Pyr] deps: lodash-es/_arrayPush.js, tslib/tslib.js, OBe
Wwt = t6c;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var i = bitmask & n6c,
    a = Wwt(object),
    l = a.length,
    c = Wwt(other),
    u = c.length;
  if (l != u && !i) return false;
  var d = l;
  while (d--) {
    var p = a[d];
    if (!(i ? p in other : o6c.call(other, p))) return false;
  }
  var f = stack.get(object),
    m = stack.get(other);
  if (f && m) return f == other && m == object;
  var g = true;
  stack.set(object, other), stack.set(other, object);
  var h = i;
  while (++d < l) {
    p = a[d];
    var y = object[p],
      b = other[p];
    if (customizer) var _ = i ? customizer(b, y, p, other, object, stack) : customizer(y, b, p, object, other, stack);
    if (!(_ === void 0 ? y === b || equalFunc(y, b, bitmask, customizer, stack) : _)) {
      g = false;
      break;
    }
    h || (h = p == "constructor");
  }
  if (g && !h) {
    var S = object.constructor,
      A = other.constructor;
    if (S != A && "constructor" in object && "constructor" in other && !(typeof S == "function" && S instanceof S && typeof A == "function" && A instanceof A)) g = false;
  }
  return stack.delete(object), stack.delete(other), g;
}
var n6c = 1,
  r6c,
  o6c,
  Vts;