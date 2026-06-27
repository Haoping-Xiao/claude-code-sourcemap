// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module j3s
// matched 2.1.88 source: node_modules/@smithy/smithy-client/dist-cjs/index.js
// class=new  jaccard=0.0065  score=0.842  fileCov=0.0065
// note: nearest: node_modules/@smithy/smithy-client/dist-cjs/index.js (0.0065); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var j3s = E(() => {
  UOr();
});
var G3s = e => ({
    setRetryStrategy(t) {
      e.retryStrategy = t;
    },
    retryStrategy() {
      return e.retryStrategy;
    }
  }),
  W3s = e => {
    let t = {};
    return t.retryStrategy = e.retryStrategy(), t;
  };
var Oyn = e => Object.assign(U3s(e), G3s(e)),
  RKu,
  zOr = e => Object.assign(F3s(e), W3s(e));