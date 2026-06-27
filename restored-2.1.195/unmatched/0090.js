// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Non
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Non = E(() => {
  ins();
  Mie();
  eJe = ans;
});
function E6c(e, t, n, r) {
  var o = n.length,
    s = o,
    i = !r;
  if (e == null) return !s;
  e = Object(e);
  while (o--) {
    var a = n[o];
    if (i && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1;
  }
  while (++o < s) {
    a = n[o];
    var l = a[0],
      c = e[l],
      u = a[1];
    if (i && a[2]) {
      if (c === void 0 && !(l in e)) return !1;
    } else {
      var d = new Pie();
      if (r) var p = r(c, u, l, e, t, d);
      if (!(p === void 0 ? eJe(u, c, b6c | S6c, r, d) : p)) return !1;
    }
  }
  return !0;
}
var b6c = 1,
  S6c = 2,
  lns;