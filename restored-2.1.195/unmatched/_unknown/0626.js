// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hEs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var hEs = E(() => {
  gEs = VDu;
});
function zDu(e, t, n) {
  return t = yEs(t === void 0 ? e.length - 1 : t, 0), function () {
    var r = arguments,
      o = -1,
      s = yEs(r.length - t, 0),
      i = Array(s);
    while (++o < s) i[o] = r[t + o];
    o = -1;
    var a = Array(t + 1);
    while (++o < t) a[o] = r[o];
    return a[t] = n(i), gEs(e, this, a);
  };
}
var yEs, Cpn;