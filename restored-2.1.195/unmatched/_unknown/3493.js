// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nUa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var nUa = Q(m3n => {
  Object.defineProperty(m3n, "__esModule", {
    value: true
  });
  m3n.MetricCollector = void 0;
  var Z$p = Nh();
  class tUa {
    _sharedState;
    _metricReader;
    constructor(e, t) {
      this._sharedState = e, this._metricReader = t;
    }
    async collect(e) {
      let t = (0, Z$p.millisToHrTime)(Date.now()),
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
  m3n.MetricCollector = tUa;
});