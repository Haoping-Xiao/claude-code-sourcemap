// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _gs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var _gs = Q((Ctg, ygs) => {
  var Wyu = VIr(),
    qyu = zIr(),
    Vyu = KIr();
  ygs.exports = zyu;
  function zyu(e, t, n) {
    var r = qyu(e);
    while (r.index < (r.keyedList || e).length) Wyu(e, t, r, function (o, s) {
      if (o) {
        n(o, s);
        return;
      }
      if (Object.keys(r.jobs).length === 0) {
        n(null, r.results);
        return;
      }
    }), r.index++;
    return Vyu.bind(r, n);
  }
});