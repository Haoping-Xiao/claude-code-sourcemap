// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ERe
// matched 2.1.88 source: node_modules/zod/v4/core/util.js
// class=new  jaccard=0.0157  score=0.1391  fileCov=0.0173
// note: nearest: node_modules/zod/v4/core/util.js (0.0157); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ERe = E(() => {
  Gea = Symbol.for("@bufbuild/cel/uint");
  Wea = class Wea {
    _value;
    [Gea] = {};
    constructor(e) {
      this._value = e;
    }
    get value() {
      return this._value;
    }
  };
});
function JFt(e, t) {
  switch (e) {
    case pr.UINT32:
    case pr.UINT64:
    case pr.FIXED32:
    case pr.FIXED64:
      return Ube(BigInt(t));
    case pr.INT32:
    case pr.SINT32:
    case pr.SFIXED32:
      return BigInt(t);
    default:
      return t;
  }
}