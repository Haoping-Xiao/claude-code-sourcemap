// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aBs
// matched 2.1.88 source: node_modules/@smithy/smithy-client/dist-cjs/index.js
// class=new  jaccard=0.0065  score=0.842  fileCov=0.0065
// note: nearest: node_modules/@smithy/smithy-client/dist-cjs/index.js (0.0065); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lBs = e => ({
    setRetryStrategy(t) {
      e.retryStrategy = t;
    },
    retryStrategy() {
      return e.retryStrategy;
    }
  }),
  cBs = e => {
    let t = {};
    return t.retryStrategy = e.retryStrategy(), t;
  };
var $hn = e => Object.assign(sBs(e), lBs(e)),
  g9u,
  C$r = e => Object.assign(iBs(e), cBs(e));