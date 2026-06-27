// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module t6a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var t6a = Q(Zqn => {
  Object.defineProperty(Zqn, "__esModule", {
    value: true
  });
  Zqn.InstrumentSelector = void 0;
  var Z8a = Qqn();
  class e6a {
    _nameFilter;
    _type;
    _unitFilter;
    constructor(e) {
      this._nameFilter = new Z8a.PatternPredicate(e?.name ?? "*"), this._type = e?.type, this._unitFilter = new Z8a.ExactPredicate(e?.unit);
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
  Zqn.InstrumentSelector = e6a;
});