// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xFa
// matched 2.1.88 source: node_modules/lodash-es/isLength.js
// class=partial  jaccard=0.2121  score=0.2121  fileCov=1
// note: low-confidence suggestion: node_modules/lodash-es/isLength.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xFa = Q((v__, IFa) => {
  IFa.exports = E$;
  var a5t = Ode();
  function E$(e, t) {
    this.lo = e >>> 0, this.hi = t >>> 0;
  }
  var OVe = E$.zero = new E$(0, 0);
  OVe.toNumber = function () {
    return 0;
  };
  OVe.zzEncode = OVe.zzDecode = function () {
    return this;
  };
  OVe.length = function () {
    return 1;
  };
  var ZOp = E$.zeroHash = "\x00\x00\x00\x00\x00\x00\x00\x00";
  E$.fromNumber = function (t) {
    if (t === 0) return OVe;
    var n = t < 0;
    if (n) t = -t;
    var r = t >>> 0,
      o = (t - r) / 4294967296 >>> 0;
    if (n) {
      if (o = ~o >>> 0, r = ~r >>> 0, ++r > 4294967295) {
        if (r = 0, ++o > 4294967295) o = 0;
      }
    }
    return new E$(r, o);
  };
  E$.from = function (t) {
    if (typeof t === "number") return E$.fromNumber(t);
    if (a5t.isString(t)) if (a5t.Long) t = a5t.Long.fromString(t);else return E$.fromNumber(parseInt(t, 10));
    return t.low || t.high ? new E$(t.low >>> 0, t.high >>> 0) : OVe;
  };
  E$.prototype.toNumber = function (t) {
    if (!t && this.hi >>> 31) {
      var n = ~this.lo + 1 >>> 0,
        r = ~this.hi >>> 0;
      if (!n) r = r + 1 >>> 0;
      return -(n + r * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  };
  E$.prototype.toLong = function (t) {
    return a5t.Long ? new a5t.Long(this.lo | 0, this.hi | 0, Boolean(t)) : {
      low: this.lo | 0,
      high: this.hi | 0,
      unsigned: Boolean(t)
    };
  };
  var sPe = String.prototype.charCodeAt;
  E$.fromHash = function (t) {
    if (t === ZOp) return OVe;
    return new E$((sPe.call(t, 0) | sPe.call(t, 1) << 8 | sPe.call(t, 2) << 16 | sPe.call(t, 3) << 24) >>> 0, (sPe.call(t, 4) | sPe.call(t, 5) << 8 | sPe.call(t, 6) << 16 | sPe.call(t, 7) << 24) >>> 0);
  };
  E$.prototype.toHash = function () {
    return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
  };
  E$.prototype.zzEncode = function () {
    var t = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ t) >>> 0, this.lo = (this.lo << 1 ^ t) >>> 0, this;
  };
  E$.prototype.zzDecode = function () {
    var t = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ t) >>> 0, this.hi = (this.hi >>> 1 ^ t) >>> 0, this;
  };
  E$.prototype.length = function () {
    var t = this.lo,
      n = (this.lo >>> 28 | this.hi << 4) >>> 0,
      r = this.hi >>> 24;
    return r === 0 ? n === 0 ? t < 16384 ? t < 128 ? 1 : 2 : t < 2097152 ? 3 : 4 : n < 16384 ? n < 128 ? 5 : 6 : n < 2097152 ? 7 : 8 : r < 128 ? 9 : 10;
  };
});