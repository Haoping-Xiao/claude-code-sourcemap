// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module z8a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var z8a = Q(Yqn => {
  Object.defineProperty(Yqn, "__esModule", {
    value: !0
  });
  Yqn.MeterSharedState = void 0;
  var S6p = Oqt(),
    E6p = y8a(),
    A6p = A8a(),
    H6p = x8a(),
    T6p = R8a(),
    v6p = B8a(),
    w6p = F8a(),
    C6p = Kqn();
  class V8a {
    metricStorageRegistry = new H6p.MetricStorageRegistry();
    observableRegistry = new v6p.ObservableRegistry();
    meter;
    _meterProviderSharedState;
    _instrumentationScope;
    constructor(e, t) {
      this.meter = new E6p.Meter(this), this._meterProviderSharedState = e, this._instrumentationScope = t;
    }
    registerMetricStorage(e) {
      let t = this._registerMetricStorage(e, w6p.SyncMetricStorage);
      if (t.length === 1) return t[0];
      return new T6p.MultiMetricStorage(t);
    }
    registerAsyncMetricStorage(e) {
      return this._registerMetricStorage(e, A6p.AsyncMetricStorage);
    }
    async collect(e, t, n) {
      let r = await this.observableRegistry.observe(t, n?.timeoutMillis),
        o = this.metricStorageRegistry.getStorages(e);
      if (o.length === 0) return null;
      let s = [];
      if (o.forEach(i => {
        let a = i.collect(e, t);
        if (a != null) s.push(a);
      }), s.length === 0) return {
        errors: r
      };
      return {
        scopeMetrics: {
          scope: this._instrumentationScope,
          metrics: s
        },
        errors: r
      };
    }
    _registerMetricStorage(e, t) {
      let r = this._meterProviderSharedState.viewRegistry.findViews(e, this._instrumentationScope).map(o => {
        let s = (0, S6p.createInstrumentDescriptorWithView)(o, e),
          i = this.metricStorageRegistry.findOrUpdateCompatibleStorage(s);
        if (i != null) return i;
        let a = o.aggregation.createAggregator(s),
          l = new t(s, a, o.attributesProcessor, this._meterProviderSharedState.metricCollectors, o.aggregationCardinalityLimit);
        return this.metricStorageRegistry.register(l), l;
      });
      if (r.length === 0) {
        let s = this._meterProviderSharedState.selectAggregations(e.type).map(([i, a]) => {
          let l = this.metricStorageRegistry.findOrUpdateCompatibleCollectorStorage(i, e);
          if (l != null) return l;
          let c = a.createAggregator(e),
            u = i.selectCardinalityLimit(e.type),
            d = new t(e, c, (0, C6p.createNoopAttributesProcessor)(), [i], u);
          return this.metricStorageRegistry.registerForCollector(i, d), d;
        });
        r = r.concat(s);
      }
      return r;
    }
  }
  Yqn.MeterSharedState = V8a;
});