// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $vt
// matched 2.1.88 source: node_modules/lodash.isplainobject/index.js
// class=partial  jaccard=0.2337  score=0.8779  fileCov=0.2415
// note: low-confidence suggestion: node_modules/lodash.isplainobject/index.js; dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module $vt]
Jme = dDm;
function pDm(e) {
  return typeof e === "object" && e !== null;
}
function eb(e) {
  if (!pDm(e) || Object.prototype.toString.call(e) !== "[object Object]") return false;
  if (Object.getPrototypeOf(e) === null) return true;
  let t = e;
  while (Object.getPrototypeOf(t) !== null) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
var fDm, Ovt;