// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lUa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lUa = Q(y3n => {
  Object.defineProperty(y3n, "__esModule", {
    value: true
  });
  y3n.MeterSelector = void 0;
  var Hyo = g3n();
  class aUa {
    _nameFilter;
    _versionFilter;
    _schemaUrlFilter;
    constructor(e) {
      this._nameFilter = new Hyo.ExactPredicate(e?.name), this._versionFilter = new Hyo.ExactPredicate(e?.version), this._schemaUrlFilter = new Hyo.ExactPredicate(e?.schemaUrl);
    }
    getNameFilter() {
      return this._nameFilter;
    }
    getVersionFilter() {
      return this._versionFilter;
    }
    getSchemaUrlFilter() {
      return this._schemaUrlFilter;
    }
  }
  y3n.MeterSelector = aUa;
});