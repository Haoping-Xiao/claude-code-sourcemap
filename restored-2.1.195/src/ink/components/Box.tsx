// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SGe
// matched 2.1.88 source: src/ink/components/Box.tsx
// class=modified  jaccard=0.1244  score=0.5272  fileCov=0.14
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var SGe = E(() => {
  l0e();
  H5i = R(rt(), 1);
});
function NWd(e) {
  let t = T5i.c(31),
    n,
    r,
    o,
    s,
    i,
    a;
  if (t[0] !== e)
    (({ onAction: o, tabIndex: a, autoFocus: n, children: r, ref: s, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = o),
      (t[4] = s),
      (t[5] = i),
      (t[6] = a));
  else ((n = t[1]), (r = t[2]), (o = t[3]), (s = t[4]), (i = t[5]), (a = t[6]));
  let l = a === void 0 ? 0 : a,
    [c, u] = h0e.useState(false),
    [d, p] = h0e.useState(false),
    [f, m] = h0e.useState(false),
    g = ks(),
    h = h0e.useRef(null),
    y,
    b;
  if (t[7] === Symbol.for("react.memo_cache_sentinel"))
    ((y = () => () => {
      h.current?.();
    }),
      (b = []),
      (t[7] = y),
      (t[8] = b));
  else ((y = t[7]), (b = t[8]));
  h0e.useEffect(y, b);
  let _;
  if (t[9] !== g || t[10] !== o)
    ((_ = ($) => {
      if ($.key === "return" || $.key === " ")
        ($.preventDefault(),
          m(true),
          o(),
          h.current?.(),
          (h.current = g.setTimeout(() => m(false), 100)));
    }),
      (t[9] = g),
      (t[10] = o),
      (t[11] = _));
  else _ = t[11];
  let S = _,
    A;
  if (t[12] !== o)
    ((A = ($) => {
      o();
    }),
      (t[12] = o),
      (t[13] = A));
  else A = t[13];
  let v = A,
    C;
  if (t[14] === Symbol.for("react.memo_cache_sentinel")) ((C = ($) => u(true)), (t[14] = C));
  else C = t[14];
  let x = C,
    I;
  if (t[15] === Symbol.for("react.memo_cache_sentinel")) ((I = ($) => u(false)), (t[15] = I));
  else I = t[15];
  let k = I,
    D;
  if (t[16] === Symbol.for("react.memo_cache_sentinel")) ((D = () => p(true)), (t[16] = D));
  else D = t[16];
  let P = D,
    O;
  if (t[17] === Symbol.for("react.memo_cache_sentinel")) ((O = () => p(false)), (t[17] = O));
  else O = t[17];
  let L = O,
    M;
  if (t[18] !== r || t[19] !== f || t[20] !== c || t[21] !== d)
    ((M =
      typeof r === "function"
        ? r({
            focused: c,
            hovered: d,
            active: f,
          })
        : r),
      (t[18] = r),
      (t[19] = f),
      (t[20] = c),
      (t[21] = d),
      (t[22] = M));
  else M = t[22];
  let N = M,
    B;
  if (
    t[23] !== n ||
    t[24] !== N ||
    t[25] !== v ||
    t[26] !== S ||
    t[27] !== s ||
    t[28] !== i ||
    t[29] !== l
  )
    ((B = v5i.jsx(Iy, {
      ref: s,
      tabIndex: l,
      autoFocus: n,
      onKeyDown: S,
      onClick: v,
      onFocus: x,
      onBlur: k,
      onMouseEnter: P,
      onMouseLeave: L,
      ...i,
      children: N,
    })),
      (t[23] = n),
      (t[24] = N),
      (t[25] = v),
      (t[26] = S),
      (t[27] = s),
      (t[28] = i),
      (t[29] = l),
      (t[30] = B));
  else B = t[30];
  return B;
}
var T5i, h0e, v5i, mat;
