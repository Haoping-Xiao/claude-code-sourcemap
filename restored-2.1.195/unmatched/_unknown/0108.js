// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wns
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var wns = E(() => {
  vns = q6c;
});
function V6c(e, t, n) {
  t = wK(t, e);
  var r = -1,
    o = t.length,
    s = !1;
  while (++r < o) {
    var i = DV(t[r]);
    if (!(s = e != null && n(e, i))) break;
    e = e[i];
  }
  if (s || ++r != o) return s;
  return o = e == null ? 0 : e.length, !!o && YXe(o) && Nve(i, o) && (Ub(e) || Sge(e));
}
var Cns;