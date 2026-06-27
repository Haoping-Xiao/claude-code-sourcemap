// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hyo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var hyo = Q(n3n => {
  Object.defineProperty(n3n, "__esModule", {
    value: !0
  });
  n3n.MetricStorage = void 0;
  var y$p = XWt();
  class HBa {
    _instrumentDescriptor;
    constructor(e) {
      this._instrumentDescriptor = e;
    }
    getInstrumentDescriptor() {
      return this._instrumentDescriptor;
    }
    updateDescription(e) {
      this._instrumentDescriptor = (0, y$p.createInstrumentDescriptor)(this._instrumentDescriptor.name, this._instrumentDescriptor.type, {
        description: e,
        valueType: this._instrumentDescriptor.valueType,
        unit: this._instrumentDescriptor.unit,
        advice: this._instrumentDescriptor.advice
      });
    }
  }
  n3n.MetricStorage = HBa;
});