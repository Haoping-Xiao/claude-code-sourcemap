// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ABa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ABa = Q(t3n => {
  Object.defineProperty(t3n, "__esModule", {
    value: true
  });
  t3n.Meter = void 0;
  var IVe = XWt(),
    xVe = e3n(),
    kVe = oPe();
  class EBa {
    _meterSharedState;
    constructor(e) {
      this._meterSharedState = e;
    }
    createGauge(e, t) {
      let n = (0, IVe.createInstrumentDescriptor)(e, kVe.InstrumentType.GAUGE, t),
        r = this._meterSharedState.registerMetricStorage(n);
      return new xVe.GaugeInstrument(r, n);
    }
    createHistogram(e, t) {
      let n = (0, IVe.createInstrumentDescriptor)(e, kVe.InstrumentType.HISTOGRAM, t),
        r = this._meterSharedState.registerMetricStorage(n);
      return new xVe.HistogramInstrument(r, n);
    }
    createCounter(e, t) {
      let n = (0, IVe.createInstrumentDescriptor)(e, kVe.InstrumentType.COUNTER, t),
        r = this._meterSharedState.registerMetricStorage(n);
      return new xVe.CounterInstrument(r, n);
    }
    createUpDownCounter(e, t) {
      let n = (0, IVe.createInstrumentDescriptor)(e, kVe.InstrumentType.UP_DOWN_COUNTER, t),
        r = this._meterSharedState.registerMetricStorage(n);
      return new xVe.UpDownCounterInstrument(r, n);
    }
    createObservableGauge(e, t) {
      let n = (0, IVe.createInstrumentDescriptor)(e, kVe.InstrumentType.OBSERVABLE_GAUGE, t),
        r = this._meterSharedState.registerAsyncMetricStorage(n);
      return new xVe.ObservableGaugeInstrument(n, r, this._meterSharedState.observableRegistry);
    }
    createObservableCounter(e, t) {
      let n = (0, IVe.createInstrumentDescriptor)(e, kVe.InstrumentType.OBSERVABLE_COUNTER, t),
        r = this._meterSharedState.registerAsyncMetricStorage(n);
      return new xVe.ObservableCounterInstrument(n, r, this._meterSharedState.observableRegistry);
    }
    createObservableUpDownCounter(e, t) {
      let n = (0, IVe.createInstrumentDescriptor)(e, kVe.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER, t),
        r = this._meterSharedState.registerAsyncMetricStorage(n);
      return new xVe.ObservableUpDownCounterInstrument(n, r, this._meterSharedState.observableRegistry);
    }
    addBatchObservableCallback(e, t) {
      this._meterSharedState.observableRegistry.addBatchCallback(e, t);
    }
    removeBatchObservableCallback(e, t) {
      this._meterSharedState.observableRegistry.removeBatchCallback(e, t);
    }
  }
  t3n.Meter = EBa;
});