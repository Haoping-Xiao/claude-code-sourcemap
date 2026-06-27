// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module A8a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var A8a = Q(jqn => {
  Object.defineProperty(jqn, "__esModule", {
    value: !0
  });
  jqn.AsyncMetricStorage = void 0;
  var r6p = UEo(),
    o6p = GEo(),
    s6p = WEo(),
    i6p = Nqt();
  class E8a extends r6p.MetricStorage {
    _aggregationCardinalityLimit;
    _deltaMetricStorage;
    _temporalMetricStorage;
    _attributesProcessor;
    constructor(e, t, n, r, o) {
      super(e);
      this._aggregationCardinalityLimit = o, this._deltaMetricStorage = new o6p.DeltaMetricProcessor(t, this._aggregationCardinalityLimit), this._temporalMetricStorage = new s6p.TemporalMetricProcessor(t, r), this._attributesProcessor = n;
    }
    record(e, t) {
      let n = new i6p.AttributeHashMap();
      for (let [r, o] of e.entries()) n.set(this._attributesProcessor.process(r), o);
      this._deltaMetricStorage.batchCumulate(n, t);
    }
    collect(e, t) {
      let n = this._deltaMetricStorage.collect();
      return this._temporalMetricStorage.buildMetrics(e, this._instrumentDescriptor, n, t);
    }
  }
  jqn.AsyncMetricStorage = E8a;
});