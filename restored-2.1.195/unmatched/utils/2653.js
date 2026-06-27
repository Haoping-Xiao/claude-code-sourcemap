// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Z7i
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Z7i = Q((pgy, Q7i) => {
  var D8 = hm();
  m_();
  uX();
  bFt();
  Q7i.exports = D8.kem = D8.kem || {};
  var X7i = D8.jsbn.BigInteger;
  D8.kem.rsa = {};
  D8.kem.rsa.create = function (e, t) {
    t = t || {};
    var n = t.prng || D8.random,
      r = {};
    return r.encrypt = function (o, s) {
      var i = Math.ceil(o.n.bitLength() / 8),
        a;
      do a = new X7i(D8.util.bytesToHex(n.getBytesSync(i)), 16).mod(o.n); while (a.compareTo(X7i.ONE) <= 0);
      a = D8.util.hexToBytes(a.toString(16));
      var l = i - a.length;
      if (l > 0) a = D8.util.fillString(String.fromCharCode(0), l) + a;
      var c = o.encrypt(a, "NONE"),
        u = e.generate(a, s);
      return {
        encapsulation: c,
        key: u
      };
    }, r.decrypt = function (o, s, i) {
      var a = o.decrypt(s, "NONE");
      return e.generate(a, i);
    }, r;
  };
  D8.kem.kdf1 = function (e, t) {
    J7i(this, e, 0, t || e.digestLength);
  };
  D8.kem.kdf2 = function (e, t) {
    J7i(this, e, 1, t || e.digestLength);
  };
  function J7i(e, t, n, r) {
    e.generate = function (o, s) {
      var i = new D8.util.ByteBuffer(),
        a = Math.ceil(s / r) + n,
        l = new D8.util.ByteBuffer();
      for (var c = n; c < a; ++c) {
        l.putInt32(c), t.start(), t.update(o + l.getBytes());
        var u = t.digest();
        i.putBytes(u.getBytes(r));
      }
      return i.truncate(i.length() - s), i.getBytes();
    };
  }
});