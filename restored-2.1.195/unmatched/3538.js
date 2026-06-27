// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CFa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var CFa = Q((T__, wFa) => {
  wFa.exports = QOp;
  function QOp(e, t, n) {
    var r = n || 8192,
      o = r >>> 1,
      s = null,
      i = r;
    return function (l) {
      if (l < 1 || l > o) return e(l);
      if (i + l > r) s = e(r), i = 0;
      var c = t.call(s, i, i += l);
      if (i & 7) i = (i | 7) + 1;
      return c;
    };
  }
});