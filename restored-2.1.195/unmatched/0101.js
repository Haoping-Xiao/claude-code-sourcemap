// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zwt
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var zwt = E(() => {
  Fve = O6c;
});
function Sns(e) {
  if (typeof e == "string") return e;
  if (Ub(e)) return Fve(e, Sns) + "";
  if (Uve(e)) return bns ? bns.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -N6c ? "-0" : t;
}
var N6c = 1 / 0,
  _ns,
  bns,
  Ens;