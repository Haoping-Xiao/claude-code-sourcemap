// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jyo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var jyo = Q((___, lFa) => {
  lFa.exports = XOp;
  function XOp(e, t) {
    var n = Array(arguments.length - 1),
      r = 0,
      o = 2,
      s = true;
    while (o < arguments.length) n[r++] = arguments[o++];
    return new Promise(function (a, l) {
      n[r] = function (u) {
        if (s) if (s = false, u) l(u);else {
          var d = Array(arguments.length - 1),
            p = 0;
          while (p < d.length) d[p++] = arguments[p];
          a.apply(null, d);
        }
      };
      try {
        e.apply(t || null, n);
      } catch (c) {
        if (s) s = false, l(c);
      }
    });
  }
});