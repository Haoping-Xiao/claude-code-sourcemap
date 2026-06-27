// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aBs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var aBs = E(() => {
  S$r();
});
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