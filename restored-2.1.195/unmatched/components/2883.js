// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Q8
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Q8 = E(() => {
  iu();
  Ye();
  kne();
  N0e();
  Ko();
  d4t();
  Alo = R(lt(), 1), Fua = R(rt(), 1), Elo = R(rt(), 1), VNn = R(se(), 1), jua = Fua.createContext(!1);
});
function d$(e) {
  let t = Wua.c(8),
    {
      count: n,
      unit: r,
      expandable: o
    } = e,
    s = r === void 0 ? "line" : r,
    i = o === void 0 ? !1 : o;
  if (n <= 0) return null;
  let a;
  if (t[0] !== n || t[1] !== s) a = f4t(n, s), t[0] = n, t[1] = s, t[2] = a;else a = t[2];
  let l;
  if (t[3] !== i) l = i && D5e.jsxs(D5e.Fragment, {
    children: [" ", D5e.jsx(NI, {})]
  }), t[3] = i, t[4] = l;else l = t[4];
  let c;
  if (t[5] !== a || t[6] !== l) c = D5e.jsxs(w, {
    dimColor: !0,
    children: [a, l]
  }), t[5] = a, t[6] = l, t[7] = c;else c = t[7];
  return c;
}
function f4t(e, t = "line") {
  if (e <= 0) return "";
  return `\u2026 +${e} ${bn(e, t)}`;
}
var Wua, D5e;