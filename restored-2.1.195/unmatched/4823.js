// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module E4l
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var E4l = Q($rr => {
  var vXt = new Uint8Array(512),
    Mrr = new Uint8Array(256);
  (function () {
    let t = 1;
    for (let n = 0; n < 255; n++) if (vXt[n] = t, Mrr[t] = n, t <<= 1, t & 256) t ^= 285;
    for (let n = 255; n < 512; n++) vXt[n] = vXt[n - 255];
  })();
  $rr.log = function (t) {
    if (t < 1) throw Error("log(" + t + ")");
    return Mrr[t];
  };
  $rr.exp = function (t) {
    return vXt[t];
  };
  $rr.mul = function (t, n) {
    if (t === 0 || n === 0) return 0;
    return vXt[Mrr[t] + Mrr[n]];
  };
});