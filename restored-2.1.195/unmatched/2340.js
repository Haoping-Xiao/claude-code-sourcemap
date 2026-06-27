// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wji
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var wji = Q((qKh, vji) => {
  var W2d = kU(),
    q2d = G7(),
    V2d = (e, t, n) => {
      let r = null,
        o = null,
        s = null;
      try {
        s = new q2d(t, n);
      } catch (i) {
        return null;
      }
      return e.forEach(i => {
        if (s.test(i)) {
          if (!r || o.compare(i) === -1) r = i, o = new W2d(r, n);
        }
      }), r;
    };
  vji.exports = V2d;
});