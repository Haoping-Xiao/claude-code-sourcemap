// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dBa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var dBa = Q(Z4n => {
  Object.defineProperty(Z4n, "__esModule", {
    value: true
  });
  Z4n.ViewRegistry = void 0;
  class uBa {
    _registeredViews = [];
    addView(e) {
      this._registeredViews.push(e);
    }
    findViews(e, t) {
      return this._registeredViews.filter(r => this._matchInstrument(r.instrumentSelector, e) && this._matchMeter(r.meterSelector, t));
    }
    _matchInstrument(e, t) {
      return (e.getType() === void 0 || t.type === e.getType()) && e.getNameFilter().match(t.name) && e.getUnitFilter().match(t.unit);
    }
    _matchMeter(e, t) {
      return e.getNameFilter().match(t.name) && (t.version === void 0 || e.getVersionFilter().match(t.version)) && (t.schemaUrl === void 0 || e.getSchemaUrlFilter().match(t.schemaUrl));
    }
  }
  Z4n.ViewRegistry = uBa;
});