// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HEo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var HEo = Q(F5 => {
  Object.defineProperty(F5, "__esModule", {
    value: !0
  });
  F5.getSignificand = F5.getNormalBase2 = F5.MIN_VALUE = F5.MAX_NORMAL_EXPONENT = F5.MIN_NORMAL_EXPONENT = F5.SIGNIFICAND_WIDTH = void 0;
  F5.SIGNIFICAND_WIDTH = 52;
  var E9p = 2146435072,
    A9p = 1048575,
    AEo = 1023;
  F5.MIN_NORMAL_EXPONENT = -AEo + 1;
  F5.MAX_NORMAL_EXPONENT = AEo;
  F5.MIN_VALUE = Math.pow(2, -1022);
  function H9p(e) {
    let t = new DataView(new ArrayBuffer(8));
    return t.setFloat64(0, e), ((t.getUint32(0) & E9p) >> 20) - AEo;
  }
  F5.getNormalBase2 = H9p;
  function T9p(e) {
    let t = new DataView(new ArrayBuffer(8));
    t.setFloat64(0, e);
    let n = t.getUint32(0),
      r = t.getUint32(4);
    return (n & A9p) * Math.pow(2, 32) + r;
  }
  F5.getSignificand = T9p;
});