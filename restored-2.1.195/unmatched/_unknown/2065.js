// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module x1t
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var x1t = Q(ust => {
  Object.defineProperty(ust, "__esModule", {
    value: !0
  });
  ust.ROOT_CONTEXT = ust.createContextKey = void 0;
  function nLd(e) {
    return Symbol.for(e);
  }
  ust.createContextKey = nLd;
  class kIn {
    constructor(e) {
      let t = this;
      t._currentContext = e ? new Map(e) : new Map(), t.getValue = n => t._currentContext.get(n), t.setValue = (n, r) => {
        let o = new kIn(t._currentContext);
        return o._currentContext.set(n, r), o;
      }, t.deleteValue = n => {
        let r = new kIn(t._currentContext);
        return r._currentContext.delete(n), r;
      };
    }
  }
  ust.ROOT_CONTEXT = new kIn();
});