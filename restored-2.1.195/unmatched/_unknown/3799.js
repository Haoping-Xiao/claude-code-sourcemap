// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module y8a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var y8a = Q(Nqn => {
  Object.defineProperty(Nqn, "__esModule", {
    value: true
  });
  Nqn.Meter = void 0;
  var h9e = Oqt(),
    y9e = Oqn(),
    _9e = BEe();
  class h8a {
    _meterSharedState;
    constructor(e) {
      this._meterSharedState = e;
    }
    createGauge(e, t) {
      let n = (0, h9e.createInstrumentDescriptor)(e, _9e.InstrumentType.GAUGE, t),
        r = this._meterSharedState.registerMetricStorage(n);
      return new y9e.GaugeInstrument(r, n);
    }
    createHistogram(e, t) {
      let n = (0, h9e.createInstrumentDescriptor)(e, _9e.InstrumentType.HISTOGRAM, t),
        r = this._meterSharedState.registerMetricStorage(n);
      return new y9e.HistogramInstrument(r, n);
    }
    createCounter(e, t) {
      let n = (0, h9e.createInstrumentDescriptor)(e, _9e.InstrumentType.COUNTER, t),
        r = this._meterSharedState.registerMetricStorage(n);
      return new y9e.CounterInstrument(r, n);
    }
    createUpDownCounter(e, t) {
      let n = (0, h9e.createInstrumentDescriptor)(e, _9e.InstrumentType.UP_DOWN_COUNTER, t),
        r = this._meterSharedState.registerMetricStorage(n);
      return new y9e.UpDownCounterInstrument(r, n);
    }
    createObservableGauge(e, t) {
      let n = (0, h9e.createInstrumentDescriptor)(e, _9e.InstrumentType.OBSERVABLE_GAUGE, t),
        r = this._meterSharedState.registerAsyncMetricStorage(n);
      return new y9e.ObservableGaugeInstrument(n, r, this._meterSharedState.observableRegistry);
    }
    createObservableCounter(e, t) {
      let n = (0, h9e.createInstrumentDescriptor)(e, _9e.InstrumentType.OBSERVABLE_COUNTER, t),
        r = this._meterSharedState.registerAsyncMetricStorage(n);
      return new y9e.ObservableCounterInstrument(n, r, this._meterSharedState.observableRegistry);
    }
    createObservableUpDownCounter(e, t) {
      let n = (0, h9e.createInstrumentDescriptor)(e, _9e.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER, t),
        r = this._meterSharedState.registerAsyncMetricStorage(n);
      return new y9e.ObservableUpDownCounterInstrument(n, r, this._meterSharedState.observableRegistry);
    }
    addBatchObservableCallback(e, t) {
      this._meterSharedState.observableRegistry.addBatchCallback(e, t);
    }
    removeBatchObservableCallback(e, t) {
      this._meterSharedState.observableRegistry.removeBatchCallback(e, t);
    }
  }
  Nqn.Meter = h8a;
});