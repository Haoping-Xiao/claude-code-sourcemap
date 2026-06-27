// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module A4l
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var A4l = Q(wXt => {
  var IUo = E4l();
  wXt.mul = function (t, n) {
    let r = new Uint8Array(t.length + n.length - 1);
    for (let o = 0; o < t.length; o++) for (let s = 0; s < n.length; s++) r[o + s] ^= IUo.mul(t[o], n[s]);
    return r;
  };
  wXt.mod = function (t, n) {
    let r = new Uint8Array(t);
    while (r.length - n.length >= 0) {
      let o = r[0];
      for (let i = 0; i < n.length; i++) r[i] ^= IUo.mul(n[i], o);
      let s = 0;
      while (s < r.length && r[s] === 0) s++;
      r = r.slice(s);
    }
    return r;
  };
  wXt.generateECPolynomial = function (t) {
    let n = new Uint8Array([1]);
    for (let r = 0; r < t; r++) n = wXt.mul(n, new Uint8Array([1, IUo.exp(r)]));
    return n;
  };
});