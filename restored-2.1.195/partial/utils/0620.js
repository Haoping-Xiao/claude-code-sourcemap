// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iEs
// matched 2.1.88 source: node_modules/lodash-es/isPlainObject.js
// class=partial  jaccard=0.2441  score=1  fileCov=0.2441
// note: low-confidence suggestion: node_modules/lodash-es/isPlainObject.js; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module iEs] deps: ZXe, lodash-es/_baseIsArguments.js
sEs = $Du;
function isPlainObject(value) {
  if (!hD(value) || LV(value) != objectTag) return false;
  var t = jJe(value);
  if (t === null) return true;
  var n = UDu.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && aEs.call(n) == FDu;
}
var objectTag = "[object Object]",
  NDu,
  BDu,
  aEs,
  UDu,
  FDu,
  VZe;