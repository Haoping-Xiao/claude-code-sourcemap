// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zUo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var zUo = Q((Q6S, e3l) => {
  e3l.exports = function (t, n, r) {
    let o = t + n - r,
      s = Math.abs(o - t),
      i = Math.abs(o - n),
      a = Math.abs(o - r);
    if (s <= i && s <= a) return t;
    if (i <= a) return n;
    return r;
  };
});