// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module o6r
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var o6r = Q(BIn => {
  Object.defineProperty(BIn, "__esModule", {
    value: !0
  });
  BIn.ProxyTracer = void 0;
  var wLd = r6r(),
    CLd = new wLd.NoopTracer();
  class yCi {
    constructor(e, t, n, r) {
      this._provider = e, this.name = t, this.version = n, this.options = r;
    }
    startSpan(e, t, n) {
      return this._getTracer().startSpan(e, t, n);
    }
    startActiveSpan(e, t, n, r) {
      let o = this._getTracer();
      return Reflect.apply(o.startActiveSpan, o, arguments);
    }
    _getTracer() {
      if (this._delegate) return this._delegate;
      let e = this._provider.getDelegateTracer(this.name, this.version, this.options);
      if (!e) return CLd;
      return this._delegate = e, this._delegate;
    }
  }
  BIn.ProxyTracer = yCi;
});