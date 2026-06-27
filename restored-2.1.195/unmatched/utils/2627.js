// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uMn
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var uMn = Q((Umy, EYi) => {
  var sue = hm();
  oue();
  m_();
  var bYi = EYi.exports = sue.md5 = sue.md5 || {};
  sue.md.md5 = sue.md.algorithms.md5 = bYi;
  bYi.create = function () {
    if (!SYi) lYd();
    var e = null,
      t = sue.util.createBuffer(),
      n = Array(16),
      r = {
        algorithm: "md5",
        blockLength: 64,
        digestLength: 16,
        messageLength: 0,
        fullMessageLength: null,
        messageLengthSize: 8
      };
    return r.start = function () {
      r.messageLength = 0, r.fullMessageLength = r.messageLength64 = [];
      var o = r.messageLengthSize / 4;
      for (var s = 0; s < o; ++s) r.fullMessageLength.push(0);
      return t = sue.util.createBuffer(), e = {
        h0: 1732584193,
        h1: 4023233417,
        h2: 2562383102,
        h3: 271733878
      }, r;
    }, r.start(), r.update = function (o, s) {
      if (s === "utf8") o = sue.util.encodeUtf8(o);
      var i = o.length;
      r.messageLength += i, i = [i / 4294967296 >>> 0, i >>> 0];
      for (var a = r.fullMessageLength.length - 1; a >= 0; --a) r.fullMessageLength[a] += i[1], i[1] = i[0] + (r.fullMessageLength[a] / 4294967296 >>> 0), r.fullMessageLength[a] = r.fullMessageLength[a] >>> 0, i[0] = i[1] / 4294967296 >>> 0;
      if (t.putBytes(o), _Yi(e, n, t), t.read > 2048 || t.length() === 0) t.compact();
      return r;
    }, r.digest = function () {
      var o = sue.util.createBuffer();
      o.putBytes(t.bytes());
      var s = r.fullMessageLength[r.fullMessageLength.length - 1] + r.messageLengthSize,
        i = s & r.blockLength - 1;
      o.putBytes($eo.substr(0, r.blockLength - i));
      var a,
        l = 0;
      for (var c = r.fullMessageLength.length - 1; c >= 0; --c) a = r.fullMessageLength[c] * 8 + l, l = a / 4294967296 >>> 0, o.putInt32Le(a >>> 0);
      var u = {
        h0: e.h0,
        h1: e.h1,
        h2: e.h2,
        h3: e.h3
      };
      _Yi(u, n, o);
      var d = sue.util.createBuffer();
      return d.putInt32Le(u.h0), d.putInt32Le(u.h1), d.putInt32Le(u.h2), d.putInt32Le(u.h3), d;
    }, r;
  };
  var $eo = null,
    cMn = null,
    hFt = null,
    wlt = null,
    SYi = false;
  function lYd() {
    $eo = String.fromCharCode(128), $eo += sue.util.fillString(String.fromCharCode(0), 64), cMn = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 6, 11, 0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 5, 8, 11, 14, 1, 4, 7, 10, 13, 0, 3, 6, 9, 12, 15, 2, 0, 7, 14, 5, 12, 3, 10, 1, 8, 15, 6, 13, 4, 11, 2, 9], hFt = [7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21], wlt = Array(64);
    for (var e = 0; e < 64; ++e) wlt[e] = Math.floor(Math.abs(Math.sin(e + 1)) * 4294967296);
    SYi = true;
  }
  function _Yi(e, t, n) {
    var r,
      o,
      s,
      i,
      a,
      l,
      c,
      u,
      d = n.length();
    while (d >= 64) {
      o = e.h0, s = e.h1, i = e.h2, a = e.h3;
      for (u = 0; u < 16; ++u) t[u] = n.getInt32Le(), l = a ^ s & (i ^ a), r = o + l + wlt[u] + t[u], c = hFt[u], o = a, a = i, i = s, s += r << c | r >>> 32 - c;
      for (; u < 32; ++u) l = i ^ a & (s ^ i), r = o + l + wlt[u] + t[cMn[u]], c = hFt[u], o = a, a = i, i = s, s += r << c | r >>> 32 - c;
      for (; u < 48; ++u) l = s ^ i ^ a, r = o + l + wlt[u] + t[cMn[u]], c = hFt[u], o = a, a = i, i = s, s += r << c | r >>> 32 - c;
      for (; u < 64; ++u) l = i ^ (s | ~a), r = o + l + wlt[u] + t[cMn[u]], c = hFt[u], o = a, a = i, i = s, s += r << c | r >>> 32 - c;
      e.h0 = e.h0 + o | 0, e.h1 = e.h1 + s | 0, e.h2 = e.h2 + i | 0, e.h3 = e.h3 + a | 0, d -= 64;
    }
  }
});