// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module y4t
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0028  score=0.2419  fileCov=0.0028
// note: nearest: src/screens/REPL.tsx (0.0028); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var y4t = E(() => {
  Un();
  U1();
  q8();
  xW();
  vn();
  sr();
});
var fda = "",
  mda = "";
function ZW(e) {
  let t = gda.c(17),
    {
      ratio: n,
      width: r,
      fillColor: o,
      emptyColor: s,
      variant: i
    } = e,
    a = i === void 0 ? "block" : i,
    l,
    c,
    u,
    d,
    p,
    f;
  if (t[0] !== s || t[1] !== o || t[2] !== n || t[3] !== a || t[4] !== r) {
    f = Symbol.for("react.early_return_sentinel");
    e: {
      let g = Zup(n);
      if (a === "pill") {
        let {
            fill: h,
            empty: y
          } = Qup(),
          b = Math.round(g * r);
        f = Fut.jsxs(w, {
          children: [Fut.jsx(w, {
            color: o,
            children: Ff(h, b)
          }), Fut.jsx(w, {
            color: s,
            dimColor: s === void 0,
            children: Ff(y, r - b)
          })]
        });
        break e;
      }
      l = w, c = o, u = s, d = `${Math.round(g * 100)}%`, p = edp(g, r);
    }
    t[0] = s, t[1] = o, t[2] = n, t[3] = a, t[4] = r, t[5] = l, t[6] = c, t[7] = u, t[8] = d, t[9] = p, t[10] = f;
  } else l = t[5], c = t[6], u = t[7], d = t[8], p = t[9], f = t[10];
  if (f !== Symbol.for("react.early_return_sentinel")) return f;
  let m;
  if (t[11] !== l || t[12] !== c || t[13] !== u || t[14] !== d || t[15] !== p) m = Fut.jsx(l, {
    color: c,
    backgroundColor: u,
    "aria-label": d,
    children: p
  }), t[11] = l, t[12] = c, t[13] = u, t[14] = d, t[15] = p, t[16] = m;else m = t[16];
  return m;
}
var gda,
  Fut,
  JNn,
  Xup,
  Jup,
  Qup = () => E1.hasGeometricShapesInkBleedBug() ? Jup : Xup,
  Zup = e => Math.min(1, Math.max(0, e)),
  edp = (e, t) => {
    let n = Math.floor(e * t),
      r = [JNn.at(-1).repeat(n)];
    if (n < t) {
      let o = e * t - n,
        s = Math.floor(o * (JNn.length - 1));
      r.push(JNn[s]);
      let i = t - n - 1;
      if (i > 0) r.push(JNn[0].repeat(i));
    }
    return r.join("");
  };