// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NTr
// matched 2.1.88 source: node_modules/zod/v4/core/util.js
// class=new  jaccard=0.0302  score=1  fileCov=0.0302
// note: nearest: node_modules/zod/v4/core/util.js (0.0302); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function BTr(e, t) {
  let n = {
    type: "object",
    get shape() {
      return Zi.assignProp(this, "shape", {
        ...e
      }), this.shape;
    },
    ...Zi.normalizeParams(t)
  };
  return new OQc(n);
}
var $Qc, OQc;