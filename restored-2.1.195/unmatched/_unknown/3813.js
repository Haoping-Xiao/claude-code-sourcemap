// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Y8a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Y8a = Q(Xqn => {
  Object.defineProperty(Xqn, "__esModule", {
    value: true
  });
  Xqn.MeterProviderSharedState = void 0;
  var I6p = ipe(),
    x6p = i8a(),
    k6p = z8a(),
    R6p = kqt();
  class K8a {
    viewRegistry = new x6p.ViewRegistry();
    metricCollectors = [];
    meterSharedStates = new Map();
    resource;
    constructor(e) {
      this.resource = e;
    }
    getMeterSharedState(e) {
      let t = (0, I6p.instrumentationScopeId)(e),
        n = this.meterSharedStates.get(t);
      if (n == null) n = new k6p.MeterSharedState(this, e), this.meterSharedStates.set(t, n);
      return n;
    }
    selectAggregations(e) {
      let t = [];
      for (let n of this.metricCollectors) t.push([n, (0, R6p.toAggregation)(n.selectAggregation(e))]);
      return t;
    }
  }
  Xqn.MeterProviderSharedState = K8a;
});