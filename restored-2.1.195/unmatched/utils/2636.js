// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xlt
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xlt = Q((Ymy, zYi) => {
  var cue = hm();
  oue();
  m_();
  var qYi = zYi.exports = cue.sha1 = cue.sha1 || {};
  cue.md.sha1 = cue.md.algorithms.sha1 = qYi;
  qYi.create = function () {
    if (!VYi) dXd();
    var e = null,
      t = cue.util.createBuffer(),
      n = Array(80),
      r = {
        algorithm: "sha1",
        blockLength: 64,
        digestLength: 20,
        messageLength: 0,
        fullMessageLength: null,
        messageLengthSize: 8
      };
    return r.start = function () {
      r.messageLength = 0, r.fullMessageLength = r.messageLength64 = [];
      var o = r.messageLengthSize / 4;
      for (var s = 0; s < o; ++s) r.fullMessageLength.push(0);
      return t = cue.util.createBuffer(), e = {
        h0: 1732584193,
        h1: 4023233417,
        h2: 2562383102,
        h3: 271733878,
        h4: 3285377520
      }, r;
    }, r.start(), r.update = function (o, s) {
      if (s === "utf8") o = cue.util.encodeUtf8(o);
      var i = o.length;
      r.messageLength += i, i = [i / 4294967296 >>> 0, i >>> 0];
      for (var a = r.fullMessageLength.length - 1; a >= 0; --a) r.fullMessageLength[a] += i[1], i[1] = i[0] + (r.fullMessageLength[a] / 4294967296 >>> 0), r.fullMessageLength[a] = r.fullMessageLength[a] >>> 0, i[0] = i[1] / 4294967296 >>> 0;
      if (t.putBytes(o), WYi(e, n, t), t.read > 2048 || t.length() === 0) t.compact();
      return r;
    }, r.digest = function () {
      var o = cue.util.createBuffer();
      o.putBytes(t.bytes());
      var s = r.fullMessageLength[r.fullMessageLength.length - 1] + r.messageLengthSize,
        i = s & r.blockLength - 1;
      o.putBytes(Veo.substr(0, r.blockLength - i));
      var a,
        l,
        c = r.fullMessageLength[0] * 8;
      for (var u = 0; u < r.fullMessageLength.length - 1; ++u) a = r.fullMessageLength[u + 1] * 8, l = a / 4294967296 >>> 0, c += l, o.putInt32(c >>> 0), c = a >>> 0;
      o.putInt32(c);
      var d = {
        h0: e.h0,
        h1: e.h1,
        h2: e.h2,
        h3: e.h3,
        h4: e.h4
      };
      WYi(d, n, o);
      var p = cue.util.createBuffer();
      return p.putInt32(d.h0), p.putInt32(d.h1), p.putInt32(d.h2), p.putInt32(d.h3), p.putInt32(d.h4), p;
    }, r;
  };
  var Veo = null,
    VYi = false;
  function dXd() {
    Veo = String.fromCharCode(128), Veo += cue.util.fillString(String.fromCharCode(0), 64), VYi = true;
  }
  function WYi(e, t, n) {
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
      o = e.h0, s = e.h1, i = e.h2, a = e.h3, l = e.h4;
      for (u = 0; u < 16; ++u) r = n.getInt32(), t[u] = r, c = a ^ s & (i ^ a), r = (o << 5 | o >>> 27) + c + l + 1518500249 + r, l = a, a = i, i = (s << 30 | s >>> 2) >>> 0, s = o, o = r;
      for (; u < 20; ++u) r = t[u - 3] ^ t[u - 8] ^ t[u - 14] ^ t[u - 16], r = r << 1 | r >>> 31, t[u] = r, c = a ^ s & (i ^ a), r = (o << 5 | o >>> 27) + c + l + 1518500249 + r, l = a, a = i, i = (s << 30 | s >>> 2) >>> 0, s = o, o = r;
      for (; u < 32; ++u) r = t[u - 3] ^ t[u - 8] ^ t[u - 14] ^ t[u - 16], r = r << 1 | r >>> 31, t[u] = r, c = s ^ i ^ a, r = (o << 5 | o >>> 27) + c + l + 1859775393 + r, l = a, a = i, i = (s << 30 | s >>> 2) >>> 0, s = o, o = r;
      for (; u < 40; ++u) r = t[u - 6] ^ t[u - 16] ^ t[u - 28] ^ t[u - 32], r = r << 2 | r >>> 30, t[u] = r, c = s ^ i ^ a, r = (o << 5 | o >>> 27) + c + l + 1859775393 + r, l = a, a = i, i = (s << 30 | s >>> 2) >>> 0, s = o, o = r;
      for (; u < 60; ++u) r = t[u - 6] ^ t[u - 16] ^ t[u - 28] ^ t[u - 32], r = r << 2 | r >>> 30, t[u] = r, c = s & i | a & (s ^ i), r = (o << 5 | o >>> 27) + c + l + 2400959708 + r, l = a, a = i, i = (s << 30 | s >>> 2) >>> 0, s = o, o = r;
      for (; u < 80; ++u) r = t[u - 6] ^ t[u - 16] ^ t[u - 28] ^ t[u - 32], r = r << 2 | r >>> 30, t[u] = r, c = s ^ i ^ a, r = (o << 5 | o >>> 27) + c + l + 3395469782 + r, l = a, a = i, i = (s << 30 | s >>> 2) >>> 0, s = o, o = r;
      e.h0 = e.h0 + o | 0, e.h1 = e.h1 + s | 0, e.h2 = e.h2 + i | 0, e.h3 = e.h3 + a | 0, e.h4 = e.h4 + l | 0, d -= 64;
    }
  }
});