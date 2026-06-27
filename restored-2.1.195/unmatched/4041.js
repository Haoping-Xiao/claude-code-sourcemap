// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module AN
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var AN = E(() => {
  iu();
  Oct();
  w4();
  AW();
  Ye();
  eVe();
  e8t();
  co();
  Unl();
  E6n = R(lt(), 1), Fnl = R(rt(), 1), eQ = R(se(), 1), x8e = new Map(), ytf = /[#*`|[>\-_~]|\n\n|(?:^|\n) {0,3}\d+\. |https?:\/\/|www\./;
});
function A6n(e) {
  let t = Gnl.c(3),
    {
      plan: n
    } = e,
    r;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) r = k8e.jsx(w, {
    color: "subtle",
    children: "User rejected Claude's plan:"
  }), t[0] = r;else r = t[0];
  let o;
  if (t[1] !== n) o = k8e.jsx(qn, {
    children: k8e.jsxs(U, {
      flexDirection: "column",
      children: [r, k8e.jsx(U, {
        borderStyle: "round",
        borderColor: "planMode",
        paddingX: 1,
        overflow: "hidden",
        children: k8e.jsx(zg, {
          children: n
        })
      })]
    })
  }), t[1] = n, t[2] = o;else o = t[2];
  return o;
}
var Gnl, k8e;