// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VIa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var VIa = E(() => {
  $Ia();
  jdo();
  WIa();
  qIa = rwp;
});
function owp(e) {
  return function (t) {
    t = Bie(t);
    var n = oFn(t) ? qIa(t) : void 0,
      r = n ? n[0] : t.charAt(0),
      o = n ? DIa(n, 1).join("") : t.slice(1);
    return r[e]() + o;
  };
}
var zIa;