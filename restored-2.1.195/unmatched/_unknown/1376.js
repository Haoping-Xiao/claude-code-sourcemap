// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dti
// matched 2.1.88 source: node_modules/@smithy/smithy-client/dist-cjs/index.js
// class=new  jaccard=0.0065  score=0.842  fileCov=0.0065
// note: nearest: node_modules/@smithy/smithy-client/dist-cjs/index.js (0.0065); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var pti = e => ({
    setRetryStrategy(t) {
      e.retryStrategy = t;
    },
    retryStrategy() {
      return e.retryStrategy;
    }
  }),
  fti = e => {
    let t = {};
    return t.retryStrategy = e.retryStrategy(), t;
  };
var xEn = e => Object.assign(cti(e), pti(e)),
  Xcd,
  lFr = e => Object.assign(uti(e), fti(e));