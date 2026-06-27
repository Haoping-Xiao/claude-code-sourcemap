// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module H5r
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var H5r = Q((Ekh, Zyi) => {
  var Jyi = /^[0-9]+$/,
    Qyi = (e, t) => {
      let n = Jyi.test(e),
        r = Jyi.test(t);
      if (n && r) e = +e, t = +t;
      return e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1;
    },
    BSd = (e, t) => Qyi(t, e);
  Zyi.exports = {
    compareIdentifiers: Qyi,
    rcompareIdentifiers: BSd
  };
});