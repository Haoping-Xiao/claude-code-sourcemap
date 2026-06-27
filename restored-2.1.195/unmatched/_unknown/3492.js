// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eUa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var eUa = Q(f3n => {
  Object.defineProperty(f3n, "__esModule", {
    value: true
  });
  f3n.MeterProviderSharedState = void 0;
  var Y$p = Wre(),
    X$p = dBa(),
    J$p = QBa(),
    Q$p = YWt();
  class ZBa {
    resource;
    viewRegistry = new X$p.ViewRegistry();
    metricCollectors = [];
    meterSharedStates = new Map();
    constructor(e) {
      this.resource = e;
    }
    getMeterSharedState(e) {
      let t = (0, Y$p.instrumentationScopeId)(e),
        n = this.meterSharedStates.get(t);
      if (n == null) n = new J$p.MeterSharedState(this, e), this.meterSharedStates.set(t, n);
      return n;
    }
    selectAggregations(e) {
      let t = [];
      for (let n of this.metricCollectors) t.push([n, (0, Q$p.toAggregation)(n.selectAggregation(e))]);
      return t;
    }
  }
  f3n.MeterProviderSharedState = ZBa;
});