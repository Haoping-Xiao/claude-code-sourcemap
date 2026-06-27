// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YIr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var YIr = Q((Itg, Hdn) => {
  var bgs = VIr(),
    Kyu = zIr(),
    Yyu = KIr();
  Hdn.exports = Xyu;
  Hdn.exports.ascending = Sgs;
  Hdn.exports.descending = Jyu;
  function Xyu(e, t, n, r) {
    var o = Kyu(e, n);
    return bgs(e, t, o, function s(i, a) {
      if (i) {
        r(i, a);
        return;
      }
      if (o.index++, o.index < (o.keyedList || e).length) {
        bgs(e, t, o, s);
        return;
      }
      r(null, o.results);
    }), Yyu.bind(o, r);
  }
  function Sgs(e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
  }
  function Jyu(e, t) {
    return -1 * Sgs(e, t);
  }
});