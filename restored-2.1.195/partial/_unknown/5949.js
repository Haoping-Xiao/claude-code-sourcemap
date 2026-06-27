// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CJo
// matched 2.1.88 source: node_modules/extend/index.js
// class=partial  jaccard=0.1112  score=0.8091  fileCov=0.1142
// note: low-confidence suggestion: node_modules/extend/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module CJo] (exports=izH, module=wJo)
var izH = {};
var wJo = {
  exports: izH
};
var TJo = Dnn();
function vJo(e, t, ...n) {
  for (let r of n) {
    if (!TJo(r)) continue;
    for (let [o, s] of Object.entries(r)) {
      if (o === "__proto__" || o === "constructor") continue;
      if (typeof t[o] === "undefined" && typeof s !== "undefined") t[o] = s;
      if (e && TJo(t[o]) && TJo(s)) vJo(true, t[o], s);
    }
  }
  return t;
}
wJo.exports = vJo.bind(void 0, false);
wJo.exports.deep = vJo.bind(void 0, true);