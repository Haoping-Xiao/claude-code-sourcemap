// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dti
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var dti = E(() => {
  tFr();
});
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