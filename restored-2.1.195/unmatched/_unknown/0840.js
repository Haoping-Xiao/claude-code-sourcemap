// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NRs
// matched 2.1.88 source: node_modules/@smithy/smithy-client/dist-cjs/index.js
// class=new  jaccard=0.0065  score=0.842  fileCov=0.0065
// note: nearest: node_modules/@smithy/smithy-client/dist-cjs/index.js (0.0065); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var NRs = E(() => {
  lDr();
});
var BRs = e => ({
    setRetryStrategy(t) {
      e.retryStrategy = t;
    },
    retryStrategy() {
      return e.retryStrategy;
    }
  }),
  URs = e => {
    let t = {};
    return t.retryStrategy = e.retryStrategy(), t;
  };
var FRs = e => Object.assign($Rs(e), BRs(e)),
  h2u,
  y2u = e => Object.assign(ORs(e), URs(e));