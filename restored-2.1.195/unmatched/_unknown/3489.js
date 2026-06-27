// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VBa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var VBa = Q(u3n => {
  Object.defineProperty(u3n, "__esModule", {
    value: true
  });
  u3n.SyncMetricStorage = void 0;
  var L$p = hyo(),
    D$p = byo(),
    P$p = Syo();
  class qBa extends L$p.MetricStorage {
    _attributesProcessor;
    _aggregationCardinalityLimit;
    _deltaMetricStorage;
    _temporalMetricStorage;
    constructor(e, t, n, r, o) {
      super(e);
      this._attributesProcessor = n, this._aggregationCardinalityLimit = o, this._deltaMetricStorage = new D$p.DeltaMetricProcessor(t, this._aggregationCardinalityLimit), this._temporalMetricStorage = new P$p.TemporalMetricProcessor(t, r);
    }
    record(e, t, n, r) {
      t = this._attributesProcessor.process(t, n), this._deltaMetricStorage.record(e, t, n, r);
    }
    collect(e, t) {
      let n = this._deltaMetricStorage.collect();
      return this._temporalMetricStorage.buildMetrics(e, this._instrumentDescriptor, n, t);
    }
  }
  u3n.SyncMetricStorage = qBa;
});