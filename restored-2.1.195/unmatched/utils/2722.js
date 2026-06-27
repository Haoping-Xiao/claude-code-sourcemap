// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ERe
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
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