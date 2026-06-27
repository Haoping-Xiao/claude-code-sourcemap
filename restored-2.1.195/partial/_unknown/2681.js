// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nno
// matched 2.1.88 source: node_modules/eventsource-parser/dist/index.js
// class=partial  jaccard=0.0747  score=0.2871  fileCov=0.0917
// note: low-confidence suggestion: node_modules/eventsource-parser/dist/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var nno = E(() => {
  dQi = Symbol.for("@bufbuild/cel/error");
  s$n = class s$n extends Error {
    _cause;
    _exprId;
    [dQi] = {};
    constructor(e, t, n) {
      super(e);
      this._cause = t, this._exprId = n;
    }
    get exprId() {
      return this._exprId;
    }
    get cause() {
      return this._cause;
    }
  };
});
function pQi(e) {
  return e instanceof Error && fZd.includes(e.name) && "field" in e && typeof e.field == "function";
}
var fZd, D1;