// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module XHi
// matched 2.1.88 source: node_modules/gtoken/build/src/index.js
// class=new  jaccard=0.0311  score=1  fileCov=0.0311
// note: nearest: node_modules/gtoken/build/src/index.js (0.0311); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var XHi = Q(Vwn => {
  Object.defineProperty(Vwn, "__esModule", {
    value: true
  });
  Vwn.ErrorWithCode = void 0;
  class YHi extends Error {
    code;
    constructor(e, t) {
      super(e);
      this.code = t;
    }
  }
  Vwn.ErrorWithCode = YHi;
});