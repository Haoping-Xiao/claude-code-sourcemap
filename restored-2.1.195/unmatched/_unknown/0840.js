// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NRs
// class=new  (no 2.1.88 match)
// note: 0 renamed
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