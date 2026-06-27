// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lCi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lCi = Q(LIn => {
  Object.defineProperty(LIn, "__esModule", {
    value: !0
  });
  LIn.NoopContextManager = void 0;
  var sLd = x1t();
  class aCi {
    active() {
      return sLd.ROOT_CONTEXT;
    }
    with(e, t, n, ...r) {
      return t.call(n, ...r);
    }
    bind(e, t) {
      return t;
    }
    enable() {
      return this;
    }
    disable() {
      return this;
    }
  }
  LIn.NoopContextManager = aCi;
});