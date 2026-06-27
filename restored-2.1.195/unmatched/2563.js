// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PUt
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var PUt = E(() => {
  W6i = R(rt(), 1);
});
function Hs(e) {
  let t = q6i.c(8),
    {
      status: n,
      withSpace: r
    } = e,
    o = r === void 0 ? !1 : r,
    s = wZr[n],
    i = !s.color,
    a;
  if (t[0] !== s.ariaLabel || t[1] !== s.icon) a = SPn.jsx(w, {
    "aria-label": s.ariaLabel,
    children: s.icon
  }), t[0] = s.ariaLabel, t[1] = s.icon, t[2] = a;else a = t[2];
  let l = o && " ",
    c;
  if (t[3] !== s.color || t[4] !== i || t[5] !== a || t[6] !== l) c = SPn.jsxs(w, {
    color: s.color,
    dimColor: i,
    children: [a, l]
  }), t[3] = s.color, t[4] = i, t[5] = a, t[6] = l, t[7] = c;else c = t[7];
  return c;
}
var q6i, SPn, wZr;