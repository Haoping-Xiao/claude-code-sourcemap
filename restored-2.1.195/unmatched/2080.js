// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module s6r
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var s6r = Q(FIn => {
  Object.defineProperty(FIn, "__esModule", {
    value: !0
  });
  FIn.ProxyTracerProvider = void 0;
  var xLd = o6r(),
    kLd = bCi(),
    RLd = new kLd.NoopTracerProvider();
  class SCi {
    getTracer(e, t, n) {
      var r;
      return (r = this.getDelegateTracer(e, t, n)) !== null && r !== void 0 ? r : new xLd.ProxyTracer(this, e, t, n);
    }
    getDelegate() {
      var e;
      return (e = this._delegate) !== null && e !== void 0 ? e : RLd;
    }
    setDelegate(e) {
      this._delegate = e;
    }
    getDelegateTracer(e, t, n) {
      var r;
      return (r = this._delegate) === null || r === void 0 ? void 0 : r.getTracer(e, t, n);
    }
  }
  FIn.ProxyTracerProvider = SCi;
});