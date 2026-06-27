// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module J8a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var J8a = Q(Jqn => {
  Object.defineProperty(Jqn, "__esModule", {
    value: !0
  });
  Jqn.MetricCollector = void 0;
  var L6p = soe();
  class X8a {
    _sharedState;
    _metricReader;
    constructor(e, t) {
      this._sharedState = e, this._metricReader = t;
    }
    async collect(e) {
      let t = (0, L6p.millisToHrTime)(Date.now()),
        n = [],
        r = [],
        o = Array.from(this._sharedState.meterSharedStates.values()).map(async s => {
          let i = await s.collect(this, t, e);
          if (i?.scopeMetrics != null) n.push(i.scopeMetrics);
          if (i?.errors != null) r.push(...i.errors);
        });
      return await Promise.all(o), {
        resourceMetrics: {
          resource: this._sharedState.resource,
          scopeMetrics: n
        },
        errors: r
      };
    }
    async forceFlush(e) {
      await this._metricReader.forceFlush(e);
    }
    async shutdown(e) {
      await this._metricReader.shutdown(e);
    }
    selectAggregationTemporality(e) {
      return this._metricReader.selectAggregationTemporality(e);
    }
    selectAggregation(e) {
      return this._metricReader.selectAggregation(e);
    }
    selectCardinalityLimit(e) {
      return this._metricReader.selectCardinalityLimit?.(e) ?? 2000;
    }
  }
  Jqn.MetricCollector = X8a;
});