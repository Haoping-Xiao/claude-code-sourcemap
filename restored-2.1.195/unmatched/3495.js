// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iUa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var iUa = Q(h3n => {
  Object.defineProperty(h3n, "__esModule", {
    value: !0
  });
  h3n.InstrumentSelector = void 0;
  var oUa = g3n();
  class sUa {
    _nameFilter;
    _type;
    _unitFilter;
    constructor(e) {
      this._nameFilter = new oUa.PatternPredicate(e?.name ?? "*"), this._type = e?.type, this._unitFilter = new oUa.ExactPredicate(e?.unit);
    }
    getType() {
      return this._type;
    }
    getNameFilter() {
      return this._nameFilter;
    }
    getUnitFilter() {
      return this._unitFilter;
    }
  }
  h3n.InstrumentSelector = sUa;
});