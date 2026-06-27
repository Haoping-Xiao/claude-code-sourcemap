// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module D4l
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var D4l = Q(L4l => {
  var PUo = c1e(),
    R4l = PUo.getBCHDigit(1335);
  L4l.getEncodedBits = function (t, n) {
    let r = t.bit << 3 | n,
      o = r << 10;
    while (PUo.getBCHDigit(o) - R4l >= 0) o ^= 1335 << PUo.getBCHDigit(o) - R4l;
    return (r << 10 | o) ^ 21522;
  };
});