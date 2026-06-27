// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module chs
// matched 2.1.88 source: node_modules/has-symbols/index.js
// class=partial  jaccard=0.2408  score=1  fileCov=0.2408
// note: low-confidence suggestion: node_modules/has-symbols/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module chs] (exports=Jtg, module=lhs)
var Jtg = {};
var lhs = {
  exports: Jtg
};
var ahs = typeof Symbol !== "undefined" && Symbol,
  t_u = QIr();
lhs.exports = function () {
  if (typeof ahs !== "function") return false;
  if (typeof Symbol !== "function") return false;
  if (typeof ahs("foo") !== "symbol") return false;
  if (typeof Symbol("bar") !== "symbol") return false;
  return t_u();
};