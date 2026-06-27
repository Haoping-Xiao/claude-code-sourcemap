// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ubi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ubi = Q((Qkh, cbi) => {
  var lAd = cU(),
    cAd = l7(),
    uAd = (e, t, n) => {
      let r = null,
        o = null,
        s = null;
      try {
        s = new cAd(t, n);
      } catch (i) {
        return null;
      }
      return e.forEach(i => {
        if (s.test(i)) {
          if (!r || o.compare(i) === 1) r = i, o = new lAd(r, n);
        }
      }), r;
    };
  cbi.exports = uAd;
});