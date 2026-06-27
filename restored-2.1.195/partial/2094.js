// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GCi
// matched 2.1.88 source: node_modules/@opentelemetry/api/build/src/api/propagation.js
// class=partial  jaccard=0.1656  score=1  fileCov=0.1656
// note: low-confidence suggestion: node_modules/@opentelemetry/api/build/src/api/propagation.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var GCi = Q(XIn => {
  Object.defineProperty(XIn, "__esModule", {
    value: !0
  });
  XIn.PropagationAPI = void 0;
  var f6r = r3e(),
    tDd = NCi(),
    FCi = z8r(),
    YIn = UCi(),
    nDd = $8r(),
    jCi = o3e(),
    m6r = "propagation",
    rDd = new tDd.NoopTextMapPropagator();
  class g6r {
    constructor() {
      this.createBaggage = nDd.createBaggage, this.getBaggage = YIn.getBaggage, this.getActiveBaggage = YIn.getActiveBaggage, this.setBaggage = YIn.setBaggage, this.deleteBaggage = YIn.deleteBaggage;
    }
    static getInstance() {
      if (!this._instance) this._instance = new g6r();
      return this._instance;
    }
    setGlobalPropagator(e) {
      return (0, f6r.registerGlobal)(m6r, e, jCi.DiagAPI.instance());
    }
    inject(e, t, n = FCi.defaultTextMapSetter) {
      return this._getGlobalPropagator().inject(e, t, n);
    }
    extract(e, t, n = FCi.defaultTextMapGetter) {
      return this._getGlobalPropagator().extract(e, t, n);
    }
    fields() {
      return this._getGlobalPropagator().fields();
    }
    disable() {
      (0, f6r.unregisterGlobal)(m6r, jCi.DiagAPI.instance());
    }
    _getGlobalPropagator() {
      return (0, f6r.getGlobal)(m6r) || rDd;
    }
  }
  XIn.PropagationAPI = g6r;
});