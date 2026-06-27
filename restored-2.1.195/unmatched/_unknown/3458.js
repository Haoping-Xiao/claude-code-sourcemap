// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ayo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ayo = Q(I5 => {
  Object.defineProperty(I5, "__esModule", {
    value: true
  });
  I5.getSignificand = I5.getNormalBase2 = I5.MIN_VALUE = I5.MAX_NORMAL_EXPONENT = I5.MIN_NORMAL_EXPONENT = I5.SIGNIFICAND_WIDTH = void 0;
  I5.SIGNIFICAND_WIDTH = 52;
  var PMp = 2146435072,
    MMp = 1048575,
    iyo = 1023;
  I5.MIN_NORMAL_EXPONENT = -iyo + 1;
  I5.MAX_NORMAL_EXPONENT = iyo;
  I5.MIN_VALUE = Math.pow(2, -1022);
  function $Mp(e) {
    let t = new DataView(new ArrayBuffer(8));
    return t.setFloat64(0, e), ((t.getUint32(0) & PMp) >> 20) - iyo;
  }
  I5.getNormalBase2 = $Mp;
  function OMp(e) {
    let t = new DataView(new ArrayBuffer(8));
    t.setFloat64(0, e);
    let n = t.getUint32(0),
      r = t.getUint32(4);
    return (n & MMp) * Math.pow(2, 32) + r;
  }
  I5.getSignificand = OMp;
});