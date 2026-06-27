// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Tvs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Tvs = E(() => {
  PBe();
  Nwt();
  P2();
  Avs = nM ? nM.isConcatSpreadable : void 0;
  Hvs = aOu;
});
function vvs(e, t, n, r, o) {
  var s = -1,
    i = e.length;
  n || (n = Hvs), o || (o = []);
  while (++s < i) {
    var a = e[s];
    if (t > 0 && n(a)) {
      if (t > 1) vvs(a, t - 1, n, r, o);else zXe(o, a);
    } else if (!r) o[o.length] = a;
  }
  return o;
}
var wvs;