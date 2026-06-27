// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module r6a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var r6a = Q(eVn => {
  Object.defineProperty(eVn, "__esModule", {
    value: true
  });
  eVn.MeterSelector = void 0;
  var KEo = Qqn();
  class n6a {
    _nameFilter;
    _versionFilter;
    _schemaUrlFilter;
    constructor(e) {
      this._nameFilter = new KEo.ExactPredicate(e?.name), this._versionFilter = new KEo.ExactPredicate(e?.version), this._schemaUrlFilter = new KEo.ExactPredicate(e?.schemaUrl);
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
  eVn.MeterSelector = n6a;
});