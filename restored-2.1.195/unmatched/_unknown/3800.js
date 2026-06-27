// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UEo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var UEo = Q(Bqn => {
  Object.defineProperty(Bqn, "__esModule", {
    value: true
  });
  Bqn.MetricStorage = void 0;
  var J8p = Oqt();
  class _8a {
    _instrumentDescriptor;
    constructor(e) {
      this._instrumentDescriptor = e;
    }
    getInstrumentDescriptor() {
      return this._instrumentDescriptor;
    }
    updateDescription(e) {
      this._instrumentDescriptor = (0, J8p.createInstrumentDescriptor)(this._instrumentDescriptor.name, this._instrumentDescriptor.type, {
        description: e,
        valueType: this._instrumentDescriptor.valueType,
        unit: this._instrumentDescriptor.unit,
        advice: this._instrumentDescriptor.advice
      });
    }
  }
  Bqn.MetricStorage = _8a;
});