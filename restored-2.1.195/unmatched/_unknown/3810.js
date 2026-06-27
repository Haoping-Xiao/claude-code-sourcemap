// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module F8a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var F8a = Q(zqn => {
  Object.defineProperty(zqn, "__esModule", {
    value: !0
  });
  zqn.SyncMetricStorage = void 0;
  var p6p = UEo(),
    f6p = GEo(),
    m6p = WEo();
  class U8a extends p6p.MetricStorage {
    _aggregationCardinalityLimit;
    _deltaMetricStorage;
    _temporalMetricStorage;
    _attributesProcessor;
    constructor(e, t, n, r, o) {
      super(e);
      this._aggregationCardinalityLimit = o, this._deltaMetricStorage = new f6p.DeltaMetricProcessor(t, this._aggregationCardinalityLimit), this._temporalMetricStorage = new m6p.TemporalMetricProcessor(t, r), this._attributesProcessor = n;
    }
    record(e, t, n, r) {
      t = this._attributesProcessor.process(t, n), this._deltaMetricStorage.record(e, t, n, r);
    }
    collect(e, t) {
      let n = this._deltaMetricStorage.collect();
      return this._temporalMetricStorage.buildMetrics(e, this._instrumentDescriptor, n, t);
    }
  }
  zqn.SyncMetricStorage = U8a;
});