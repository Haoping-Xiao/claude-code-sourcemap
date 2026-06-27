// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module G3n
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var G3n = Q(xJ => {
  Object.defineProperty(xJ, "__esModule", {
    value: true
  });
  xJ.getOtlpEncoder = xJ.encodeAsString = xJ.encodeAsLongBits = xJ.toLongBits = xJ.hrTimeToNanos = void 0;
  var a1p = Nh(),
    i_o = s2a();
  function a_o(e) {
    let t = BigInt(1000000000 /* 1e9 */);
    return BigInt(Math.trunc(e[0])) * t + BigInt(Math.trunc(e[1]));
  }
  xJ.hrTimeToNanos = a_o;
  function a2a(e) {
    let t = Number(BigInt.asUintN(32, e)),
      n = Number(BigInt.asUintN(32, e >> BigInt(32)));
    return {
      low: t,
      high: n
    };
  }
  xJ.toLongBits = a2a;
  function l_o(e) {
    let t = a_o(e);
    return a2a(t);
  }
  xJ.encodeAsLongBits = l_o;
  function l2a(e) {
    return a_o(e).toString();
  }
  xJ.encodeAsString = l2a;
  var l1p = typeof BigInt !== "undefined" ? l2a : a1p.hrTimeToNanoseconds;
  function i2a(e) {
    return e;
  }
  function c2a(e) {
    if (e === void 0) return;
    return (0, i_o.hexToBinary)(e);
  }
  var c1p = {
    encodeHrTime: l_o,
    encodeSpanContext: i_o.hexToBinary,
    encodeOptionalSpanContext: c2a
  };
  function u1p(e) {
    if (e === void 0) return c1p;
    let t = e.useLongBits ?? true,
      n = e.useHex ?? false;
    return {
      encodeHrTime: t ? l_o : l1p,
      encodeSpanContext: n ? i2a : i_o.hexToBinary,
      encodeOptionalSpanContext: n ? i2a : c2a
    };
  }
  xJ.getOtlpEncoder = u1p;
});