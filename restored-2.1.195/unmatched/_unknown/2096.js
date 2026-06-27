// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KCi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var KCi = Q(QIn => {
  Object.defineProperty(QIn, "__esModule", {
    value: !0
  });
  QIn.TraceAPI = void 0;
  var h6r = r3e(),
    qCi = s6r(),
    VCi = OIn(),
    gst = e6r(),
    zCi = o3e(),
    y6r = "trace";
  class _6r {
    constructor() {
      this._proxyTracerProvider = new qCi.ProxyTracerProvider(), this.wrapSpanContext = VCi.wrapSpanContext, this.isSpanContextValid = VCi.isSpanContextValid, this.deleteSpan = gst.deleteSpan, this.getSpan = gst.getSpan, this.getActiveSpan = gst.getActiveSpan, this.getSpanContext = gst.getSpanContext, this.setSpan = gst.setSpan, this.setSpanContext = gst.setSpanContext;
    }
    static getInstance() {
      if (!this._instance) this._instance = new _6r();
      return this._instance;
    }
    setGlobalTracerProvider(e) {
      let t = (0, h6r.registerGlobal)(y6r, this._proxyTracerProvider, zCi.DiagAPI.instance());
      if (t) this._proxyTracerProvider.setDelegate(e);
      return t;
    }
    getTracerProvider() {
      return (0, h6r.getGlobal)(y6r) || this._proxyTracerProvider;
    }
    getTracer(e, t) {
      return this.getTracerProvider().getTracer(e, t);
    }
    disable() {
      (0, h6r.unregisterGlobal)(y6r, zCi.DiagAPI.instance()), this._proxyTracerProvider = new qCi.ProxyTracerProvider();
    }
  }
  QIn.TraceAPI = _6r;
});