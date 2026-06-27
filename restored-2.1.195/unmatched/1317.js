// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module AJs
// class=new  (no 2.1.88 match)
// note: 0 renamed
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