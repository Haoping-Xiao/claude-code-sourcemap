// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Iji
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Iji = Q((VKh, Cji) => {
  var z2d = kU(),
    K2d = G7(),
    Y2d = (e, t, n) => {
      let r = null,
        o = null,
        s = null;
      try {
        s = new K2d(t, n);
      } catch (i) {
        return null;
      }
      return e.forEach(i => {
        if (s.test(i)) {
          if (!r || o.compare(i) === 1) r = i, o = new z2d(r, n);
        }
      }), r;
    };
  Cji.exports = Y2d;
});