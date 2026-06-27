// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Tms
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Tms = E(() => {
  Hms = $lu;
});
function Olu(e, t) {
  return function (n, r) {
    if (n == null) return n;
    if (!Nie(n)) return e(n, r);
    var o = n.length,
      s = t ? o : -1,
      i = Object(n);
    while (t ? s-- : ++s < o) if (r(i[s], s, i) === false) break;
    return n;
  };
}
var vms;