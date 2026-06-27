// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _i
// matched 2.1.88 source: src/components/design-system/Ratchet.tsx
// class=modified  jaccard=0.2709  score=1  fileCov=0.2709
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var _i = E(() => {
  oat();
  K5i = R(rt(), 1);
});
function Eat(e) {
  let t = Y5i.c(10),
    { children: n, lock: r } = e,
    o = r === void 0 ? "always" : r,
    [s, i] = b0e(),
    { isVisible: a } = i,
    { rows: l } = br(),
    c = HGe.useRef(null),
    u = HGe.useRef(0),
    [d, p] = HGe.useState(0),
    f;
  if (t[0] !== s)
    ((f = (S) => {
      s(S);
    }),
      (t[0] = s),
      (t[1] = f));
  else f = t[1];
  let m = f,
    g = o === "always" || !a,
    h;
  if (t[2] !== l)
    ((h = () => {
      if (!c.current) return;
      let { height: S } = tX(c.current);
      if (S > u.current) ((u.current = Math.min(S, l)), p(u.current));
    }),
      (t[2] = l),
      (t[3] = h));
  else h = t[3];
  HGe.useLayoutEffect(h);
  let y = g ? d : void 0,
    b;
  if (t[4] !== n)
    ((b = WJr.jsx(U, {
      ref: c,
      flexDirection: "column",
      children: n,
    })),
      (t[4] = n),
      (t[5] = b));
  else b = t[5];
  let _;
  if (t[6] !== m || t[7] !== y || t[8] !== b)
    ((_ = WJr.jsx(U, {
      minHeight: y,
      ref: m,
      children: b,
    })),
      (t[6] = m),
      (t[7] = y),
      (t[8] = b),
      (t[9] = _));
  else _ = t[9];
  return _;
}
var Y5i, HGe, WJr;
