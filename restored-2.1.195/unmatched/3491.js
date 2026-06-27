// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QBa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var QBa = Q(p3n => {
  Object.defineProperty(p3n, "__esModule", {
    value: !0
  });
  p3n.MeterSharedState = void 0;
  var U$p = XWt(),
    F$p = ABa(),
    j$p = Wre(),
    G$p = CBa(),
    W$p = PBa(),
    q$p = $Ba(),
    V$p = WBa(),
    z$p = VBa(),
    K$p = d3n();
  class JBa {
    _meterProviderSharedState;
    _instrumentationScope;
    metricStorageRegistry = new W$p.MetricStorageRegistry();
    observableRegistry = new V$p.ObservableRegistry();
    meter;
    constructor(e, t) {
      this._meterProviderSharedState = e, this._instrumentationScope = t, this.meter = new F$p.Meter(this);
    }
    registerMetricStorage(e) {
      let t = this._registerMetricStorage(e, z$p.SyncMetricStorage);
      if (t.length === 1) return t[0];
      return new q$p.MultiMetricStorage(t);
    }
    registerAsyncMetricStorage(e) {
      return this._registerMetricStorage(e, G$p.AsyncMetricStorage);
    }
    async collect(e, t, n) {
      let r = await this.observableRegistry.observe(t, n?.timeoutMillis),
        o = this.metricStorageRegistry.getStorages(e);
      if (o.length === 0) return null;
      let s = o.map(i => i.collect(e, t)).filter(j$p.isNotNullish);
      if (s.length === 0) return {
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
        let s = (0, U$p.createInstrumentDescriptorWithView)(o, e),
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
            d = new t(e, c, (0, K$p.createNoopAttributesProcessor)(), [i], u);
          return this.metricStorageRegistry.registerForCollector(i, d), d;
        });
        r = r.concat(s);
      }
      return r;
    }
  }
  p3n.MeterSharedState = JBa;
});