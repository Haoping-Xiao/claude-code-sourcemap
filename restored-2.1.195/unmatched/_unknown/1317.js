// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module AJs
// matched 2.1.88 source: node_modules/@smithy/smithy-client/dist-cjs/index.js
// class=new  jaccard=0.0065  score=0.842  fileCov=0.0065
// note: nearest: node_modules/@smithy/smithy-client/dist-cjs/index.js (0.0065); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var AJs = E(() => {
  IUr();
});
var HJs = e => ({
    setRetryStrategy(t) {
      e.retryStrategy = t;
    },
    retryStrategy() {
      return e.retryStrategy;
    }
  }),
  TJs = e => {
    let t = {};
    return t.retryStrategy = e.retryStrategy(), t;
  };
var tEn = e => Object.assign(SJs(e), HJs(e)),
  Nld,
  MUr = e => Object.assign(EJs(e), TJs(e));