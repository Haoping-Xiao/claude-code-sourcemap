// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jzs
// class=new  (no 2.1.88 match)
// note: 0 renamed
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