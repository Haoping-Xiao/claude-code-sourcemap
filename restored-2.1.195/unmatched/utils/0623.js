// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cEs
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var cEs = E(() => {
  _Ue();
  FJe();
  lEs = WDu;
});
function qDu(e, t, n, r, o, s, i) {
  var a = nRt(e, n),
    l = nRt(t, n),
    c = i.get(l);
  if (c) {
    tRt(e, n, c);
    return;
  }
  var u = s ? s(a, l, n + "", e, t, i) : void 0,
    d = u === void 0;
  if (d) {
    var p = Ub(l),
      f = !p && $ie(l),
      m = !p && !f && JXe(l);
    if (u = l, p || f || m) {
      if (Ub(a)) u = a;else if (sEs(a)) u = win(a);else if (f) d = !1, u = jIt(l, !0);else if (m) d = !1, u = Rin(l, !0);else u = [];
    } else if (VZe(l) || Sge(l)) {
      if (u = a, Sge(a)) u = lEs(a);else if (!Bb(a) || FXe(a)) u = Lin(l);
    } else d = !1;
  }
  if (d) i.set(l, u), o(u, l, r, s, i), i.delete(l);
  tRt(e, n, u);
}
var uEs;