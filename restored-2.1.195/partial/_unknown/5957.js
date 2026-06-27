// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module r4c
// matched 2.1.88 source: node_modules/has-symbols/shams.js
// class=partial  jaccard=0.1448  score=1  fileCov=0.1448
// note: low-confidence suggestion: node_modules/has-symbols/shams.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module r4c] (exports=mzH, module=n4c)
var mzH = {};
var n4c = {
  exports: mzH
};
n4c.exports = function (e) {
  e.prototype[Symbol.iterator] = function* () {
    for (let t = this.head; t; t = t.next) yield t.value;
  };
};