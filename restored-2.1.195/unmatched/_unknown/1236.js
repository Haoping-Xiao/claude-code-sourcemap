// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jzs
// matched 2.1.88 source: node_modules/@smithy/smithy-client/dist-cjs/index.js
// class=new  jaccard=0.0065  score=0.842  fileCov=0.0065
// note: nearest: node_modules/@smithy/smithy-client/dist-cjs/index.js (0.0065); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var jzs = E(() => {
  dBr();
});
var Gzs = e => ({
    setRetryStrategy(t) {
      e.retryStrategy = t;
    },
    retryStrategy() {
      return e.retryStrategy;
    }
  }),
  Wzs = e => {
    let t = {};
    return t.retryStrategy = e.retryStrategy(), t;
  };
var eSn = e => Object.assign(Uzs(e), Gzs(e)),
  Sod,
  _Br = e => Object.assign(Fzs(e), Wzs(e));