// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VIr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var VIr = Q((Ttg, mgs) => {
  var fgs = WIr(),
    Oyu = qIr();
  mgs.exports = Nyu;
  function Nyu(e, t, n, r) {
    var o = n.keyedList ? n.keyedList[n.index] : n.index;
    n.jobs[o] = Byu(t, o, e[o], function (s, i) {
      if (!(o in n.jobs)) return;
      if (delete n.jobs[o], s) Oyu(n);else n.results[o] = i;
      r(s, n.results);
    });
  }
  function Byu(e, t, n, r) {
    var o;
    if (e.length == 2) o = e(n, fgs(r));else o = e(n, t, fgs(r));
    return o;
  }
});