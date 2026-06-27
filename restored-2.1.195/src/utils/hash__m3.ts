// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Neo
// matched 2.1.88 source: src/utils/hash.ts
// class=modified (alt of src/utils/hash.ts)  jaccard=0.4188  score=1  fileCov=0.4188
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Neo = Q((Wmy, RYi) => {
  var aue = hm();
  oue();
  m_();
  var IYi = (RYi.exports = aue.sha256 = aue.sha256 || {});
  aue.md.sha256 = aue.md.algorithms.sha256 = IYi;
  IYi.create = function () {
    if (!xYi) SYd();
    var e = null,
      t = aue.util.createBuffer(),
      n = Array(64),
      r = {
        algorithm: "sha256",
        blockLength: 64,
        digestLength: 32,
        messageLength: 0,
        fullMessageLength: null,
        messageLengthSize: 8,
      };
    return (
      (r.start = function () {
        ((r.messageLength = 0), (r.fullMessageLength = r.messageLength64 = []));
        var o = r.messageLengthSize / 4;
        for (var s = 0; s < o; ++s) r.fullMessageLength.push(0);
        return (
          (t = aue.util.createBuffer()),
          (e = {
            h0: 1779033703,
            h1: 3144134277,
            h2: 1013904242,
            h3: 2773480762,
            h4: 1359893119,
            h5: 2600822924,
            h6: 528734635,
            h7: 1541459225,
          }),
          r
        );
      }),
      r.start(),
      (r.update = function (o, s) {
        if (s === "utf8") o = aue.util.encodeUtf8(o);
        var i = o.length;
        ((r.messageLength += i), (i = [(i / 4294967296) >>> 0, i >>> 0]));
        for (var a = r.fullMessageLength.length - 1; a >= 0; --a)
          ((r.fullMessageLength[a] += i[1]),
            (i[1] = i[0] + ((r.fullMessageLength[a] / 4294967296) >>> 0)),
            (r.fullMessageLength[a] = r.fullMessageLength[a] >>> 0),
            (i[0] = (i[1] / 4294967296) >>> 0));
        if ((t.putBytes(o), CYi(e, n, t), t.read > 2048 || t.length() === 0)) t.compact();
        return r;
      }),
      (r.digest = function () {
        var o = aue.util.createBuffer();
        o.putBytes(t.bytes());
        var s = r.fullMessageLength[r.fullMessageLength.length - 1] + r.messageLengthSize,
          i = s & (r.blockLength - 1);
        o.putBytes(Oeo.substr(0, r.blockLength - i));
        var a,
          l,
          c = r.fullMessageLength[0] * 8;
        for (var u = 0; u < r.fullMessageLength.length - 1; ++u)
          ((a = r.fullMessageLength[u + 1] * 8),
            (l = (a / 4294967296) >>> 0),
            (c += l),
            o.putInt32(c >>> 0),
            (c = a >>> 0));
        o.putInt32(c);
        var d = {
          h0: e.h0,
          h1: e.h1,
          h2: e.h2,
          h3: e.h3,
          h4: e.h4,
          h5: e.h5,
          h6: e.h6,
          h7: e.h7,
        };
        CYi(d, n, o);
        var p = aue.util.createBuffer();
        return (
          p.putInt32(d.h0),
          p.putInt32(d.h1),
          p.putInt32(d.h2),
          p.putInt32(d.h3),
          p.putInt32(d.h4),
          p.putInt32(d.h5),
          p.putInt32(d.h6),
          p.putInt32(d.h7),
          p
        );
      }),
      r
    );
  };
  var Oeo = null,
    xYi = !1,
    kYi = null;
  function SYd() {
    ((Oeo = String.fromCharCode(128)),
      (Oeo += aue.util.fillString(String.fromCharCode(0), 64)),
      (kYi = [
        1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748,
        2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206,
        2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122,
        1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891,
        3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700,
        1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
        3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877,
        958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452,
        2361852424, 2428436474, 2756734187, 3204031479, 3329325298,
      ]),
      (xYi = !0));
  }
  function CYi(e, t, n) {
    var r,
      o,
      s,
      i,
      a,
      l,
      c,
      u,
      d,
      p,
      f,
      m,
      g,
      h,
      y,
      b = n.length();
    while (b >= 64) {
      for (c = 0; c < 16; ++c) t[c] = n.getInt32();
      for (; c < 64; ++c)
        ((r = t[c - 2]),
          (r = ((r >>> 17) | (r << 15)) ^ ((r >>> 19) | (r << 13)) ^ (r >>> 10)),
          (o = t[c - 15]),
          (o = ((o >>> 7) | (o << 25)) ^ ((o >>> 18) | (o << 14)) ^ (o >>> 3)),
          (t[c] = (r + t[c - 7] + o + t[c - 16]) | 0));
      ((u = e.h0),
        (d = e.h1),
        (p = e.h2),
        (f = e.h3),
        (m = e.h4),
        (g = e.h5),
        (h = e.h6),
        (y = e.h7));
      for (c = 0; c < 64; ++c)
        ((i = ((m >>> 6) | (m << 26)) ^ ((m >>> 11) | (m << 21)) ^ ((m >>> 25) | (m << 7))),
          (a = h ^ (m & (g ^ h))),
          (s = ((u >>> 2) | (u << 30)) ^ ((u >>> 13) | (u << 19)) ^ ((u >>> 22) | (u << 10))),
          (l = (u & d) | (p & (u ^ d))),
          (r = y + i + a + kYi[c] + t[c]),
          (o = s + l),
          (y = h),
          (h = g),
          (g = m),
          (m = (f + r) >>> 0),
          (f = p),
          (p = d),
          (d = u),
          (u = (r + o) >>> 0));
      ((e.h0 = (e.h0 + u) | 0),
        (e.h1 = (e.h1 + d) | 0),
        (e.h2 = (e.h2 + p) | 0),
        (e.h3 = (e.h3 + f) | 0),
        (e.h4 = (e.h4 + m) | 0),
        (e.h5 = (e.h5 + g) | 0),
        (e.h6 = (e.h6 + h) | 0),
        (e.h7 = (e.h7 + y) | 0),
        (b -= 64));
    }
  }
});
