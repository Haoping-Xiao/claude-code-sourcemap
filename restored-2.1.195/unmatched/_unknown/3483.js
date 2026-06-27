// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CBa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var CBa = Q(s3n => {
  Object.defineProperty(s3n, "__esModule", {
    value: true
  });
  s3n.AsyncMetricStorage = void 0;
  var H$p = hyo(),
    T$p = byo(),
    v$p = Syo(),
    w$p = JWt();
  class wBa extends H$p.MetricStorage {
    _attributesProcessor;
    _aggregationCardinalityLimit;
    _deltaMetricStorage;
    _temporalMetricStorage;
    constructor(e, t, n, r, o) {
      super(e);
      this._attributesProcessor = n, this._aggregationCardinalityLimit = o, this._deltaMetricStorage = new T$p.DeltaMetricProcessor(t, this._aggregationCardinalityLimit), this._temporalMetricStorage = new v$p.TemporalMetricProcessor(t, r);
    }
    record(e, t) {
      let n = new w$p.AttributeHashMap();
      Array.from(e.entries()).forEach(([r, o]) => {
        n.set(this._attributesProcessor.process(r), o);
      }), this._deltaMetricStorage.batchCumulate(n, t);
    }
    collect(e, t) {
      let n = this._deltaMetricStorage.collect();
      return this._temporalMetricStorage.buildMetrics(e, this._instrumentDescriptor, n, t);
    }
  }
  s3n.AsyncMetricStorage = wBa;
});