// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Fwr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Fwr = Q(Dwe => {
  Object.defineProperty(Dwe, "__esModule", {
    value: true
  });
  Dwe.shouldUseRule = Dwe.shouldUseGroup = Dwe.schemaHasRulesForType = void 0;
  function Qtu({
    schema: e,
    self: t
  }, n) {
    let r = t.RULES.types[n];
    return r && r !== true && Gus(e, r);
  }
  Dwe.schemaHasRulesForType = Qtu;
  function Gus(e, t) {
    return t.rules.some(n => Wus(e, n));
  }
  Dwe.shouldUseGroup = Gus;
  function Wus(e, t) {
    var n;
    return e[t.keyword] !== void 0 || ((n = t.definition.implements) === null || n === void 0 ? void 0 : n.some(r => e[r] !== void 0));
  }
  Dwe.shouldUseRule = Wus;
});