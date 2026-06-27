// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lbi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lbi = Q((Jkh, abi) => {
  var sAd = cU(),
    iAd = l7(),
    aAd = (e, t, n) => {
      let r = null,
        o = null,
        s = null;
      try {
        s = new iAd(t, n);
      } catch (i) {
        return null;
      }
      return e.forEach(i => {
        if (s.test(i)) {
          if (!r || o.compare(i) === -1) r = i, o = new sAd(r, n);
        }
      }), r;
    };
  abi.exports = aAd;
});