// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module M8
// matched 2.1.88 source: node_modules/zod/v4/core/util.js
// class=partial  jaccard=0.128  score=0.2132  fileCov=0.2428
// note: low-confidence suggestion: node_modules/zod/v4/core/util.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var M8 = E(() => {
  (function (e) {
    e[e.DOUBLE = 1] = "DOUBLE", e[e.FLOAT = 2] = "FLOAT", e[e.INT64 = 3] = "INT64", e[e.UINT64 = 4] = "UINT64", e[e.INT32 = 5] = "INT32", e[e.FIXED64 = 6] = "FIXED64", e[e.FIXED32 = 7] = "FIXED32", e[e.BOOL = 8] = "BOOL", e[e.STRING = 9] = "STRING", e[e.BYTES = 12] = "BYTES", e[e.UINT32 = 13] = "UINT32", e[e.SFIXED32 = 15] = "SFIXED32", e[e.SFIXED64 = 16] = "SFIXED64", e[e.SINT32 = 17] = "SINT32", e[e.SINT64 = 18] = "SINT64";
  })(pr || (pr = {}));
});
function _X(e, t) {
  if (!(e !== null && typeof e == "object" && "$typeName" in e && typeof e.$typeName == "string")) return !1;
  if (t === void 0) return !0;
  return t.typeName === e.$typeName;
}
function mQi() {
  let e = 0,
    t = 0;
  for (let r = 0; r < 28; r += 7) {
    let o = this.buf[this.pos++];
    if (e |= (o & 127) << r, (o & 128) == 0) return this.assertBounds(), [e, t];
  }
  let n = this.buf[this.pos++];
  if (e |= (n & 15) << 28, t = (n & 112) >> 4, (n & 128) == 0) return this.assertBounds(), [e, t];
  for (let r = 3; r <= 31; r += 7) {
    let o = this.buf[this.pos++];
    if (t |= (o & 127) << r, (o & 128) == 0) return this.assertBounds(), [e, t];
  }
  throw Error("invalid varint");
}
function c$n(e, t, n) {
  for (let s = 0; s < 28; s = s + 7) {
    let i = e >>> s,
      a = !(i >>> 7 == 0 && t == 0),
      l = (a ? i | 128 : i) & 255;
    if (n.push(l), !a) return;
  }
  let r = e >>> 28 & 15 | (t & 7) << 4,
    o = t >> 3 != 0;
  if (n.push((o ? r | 128 : r) & 255), !o) return;
  for (let s = 3; s < 31; s = s + 7) {
    let i = t >>> s,
      a = i >>> 7 != 0,
      l = (a ? i | 128 : i) & 255;
    if (n.push(l), !a) return;
  }
  n.push(t >>> 31 & 1);
}
function rno(e) {
  let t = e[0] === "-";
  if (t) e = e.slice(1);
  let n = 1e6,
    r = 0,
    o = 0;
  function s(i, a) {
    let l = Number(e.slice(i, a));
    if (o *= n, r = r * n + l, r >= l$n) o = o + (r / l$n | 0), r = r % l$n;
  }
  return s(-24, -18), s(-18, -12), s(-12, -6), s(-6), t ? hQi(r, o) : sno(r, o);
}
function gQi(e, t) {
  let n = sno(e, t),
    r = n.hi & 2147483648;
  if (r) n = hQi(n.lo, n.hi);
  let o = ono(n.lo, n.hi);
  return r ? "-" + o : o;
}
function ono(e, t) {
  if ({
    lo: e,
    hi: t
  } = gZd(e, t), t <= 2097151) return String(l$n * t + e);
  let n = e & 16777215,
    r = (e >>> 24 | t << 8) & 16777215,
    o = t >> 16 & 65535,
    s = n + r * 6777216 + o * 6710656,
    i = r + o * 8147497,
    a = o * 2,
    l = 1e7;
  if (s >= l) i += Math.floor(s / l), s %= l;
  if (i >= l) a += Math.floor(i / l), i %= l;
  return a.toString() + fQi(i) + fQi(s);
}
function gZd(e, t) {
  return {
    lo: e >>> 0,
    hi: t >>> 0
  };
}
function sno(e, t) {
  return {
    lo: e | 0,
    hi: t | 0
  };
}
function hQi(e, t) {
  if (t = ~t, e) e = ~e + 1;else t += 1;
  return sno(e, t);
}
function BFt(e, t) {
  if (e >= 0) {
    while (e > 127) t.push(e & 127 | 128), e = e >>> 7;
    t.push(e);
  } else {
    for (let n = 0; n < 9; n++) t.push(e & 127 | 128), e = e >> 7;
    t.push(1);
  }
}
function yQi() {
  let e = this.buf[this.pos++],
    t = e & 127;
  if ((e & 128) == 0) return this.assertBounds(), t;
  if (e = this.buf[this.pos++], t |= (e & 127) << 7, (e & 128) == 0) return this.assertBounds(), t;
  if (e = this.buf[this.pos++], t |= (e & 127) << 14, (e & 128) == 0) return this.assertBounds(), t;
  if (e = this.buf[this.pos++], t |= (e & 127) << 21, (e & 128) == 0) return this.assertBounds(), t;
  e = this.buf[this.pos++], t |= (e & 15) << 28;
  for (let n = 5; (e & 128) !== 0 && n < 10; n++) e = this.buf[this.pos++];
  if ((e & 128) != 0) throw Error("invalid varint");
  return this.assertBounds(), t >>> 0;
}
var l$n = 4294967296,
  fQi = e => {
    let t = String(e);
    return "0000000".slice(t.length) + t;
  };
function hZd() {
  let e = new DataView(new ArrayBuffer(8));
  if (typeof BigInt === "function" && typeof e.getBigInt64 === "function" && typeof e.getBigUint64 === "function" && typeof e.setBigInt64 === "function" && typeof e.setBigUint64 === "function" && (!!globalThis.Deno || typeof process != "object" || typeof process.env != "object" || process.env.BUF_BIGINT_DISABLE !== "1")) {
    let n = BigInt("-9223372036854775808"),
      r = BigInt("9223372036854775807"),
      o = BigInt("0"),
      s = BigInt("18446744073709551615");
    return {
      zero: BigInt(0),
      supported: !0,
      parse(i) {
        let a = typeof i == "bigint" ? i : BigInt(i);
        if (a > r || a < n) throw Error(`invalid int64: ${i}`);
        return a;
      },
      uParse(i) {
        let a = typeof i == "bigint" ? i : BigInt(i);
        if (a > s || a < o) throw Error(`invalid uint64: ${i}`);
        return a;
      },
      enc(i) {
        return e.setBigInt64(0, this.parse(i), !0), {
          lo: e.getInt32(0, !0),
          hi: e.getInt32(4, !0)
        };
      },
      uEnc(i) {
        return e.setBigInt64(0, this.uParse(i), !0), {
          lo: e.getInt32(0, !0),
          hi: e.getInt32(4, !0)
        };
      },
      dec(i, a) {
        return e.setInt32(0, i, !0), e.setInt32(4, a, !0), e.getBigInt64(0, !0);
      },
      uDec(i, a) {
        return e.setInt32(0, i, !0), e.setInt32(4, a, !0), e.getBigUint64(0, !0);
      }
    };
  }
  return {
    zero: "0",
    supported: !1,
    parse(n) {
      if (typeof n != "string") n = n.toString();
      return _Qi(n), n;
    },
    uParse(n) {
      if (typeof n != "string") n = n.toString();
      return bQi(n), n;
    },
    enc(n) {
      if (typeof n != "string") n = n.toString();
      return _Qi(n), rno(n);
    },
    uEnc(n) {
      if (typeof n != "string") n = n.toString();
      return bQi(n), rno(n);
    },
    dec(n, r) {
      return gQi(n, r);
    },
    uDec(n, r) {
      return ono(n, r);
    }
  };
}
function _Qi(e) {
  if (!/^-?[0-9]+$/.test(e)) throw Error("invalid int64: " + e);
}
function bQi(e) {
  if (!/^[0-9]+$/.test(e)) throw Error("invalid uint64: " + e);
}
var U_;