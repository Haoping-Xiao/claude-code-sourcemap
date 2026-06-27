// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eE
// matched 2.1.88 source: src/components/design-system/Dialog.tsx
// class=partial  jaccard=0.2053  score=0.4666  fileCov=0.2682
// note: low-confidence suggestion: src/components/design-system/Dialog.tsx; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var eE = E(() => {
  fH();
  Ye();
  LW();
  Lzi = R(lt(), 1), olt = R(se(), 1);
});
function zn(e) {
  let t = Pzi.c(43),
    {
      title: n,
      titleEnd: r,
      subtitle: o,
      children: s,
      onCancel: i,
      color: a,
      hideInputGuide: l,
      hideBorder: c,
      inputGuide: u,
      isCancelActive: d
    } = e,
    p = a === void 0 ? "permission" : a,
    f = d === void 0 ? true : d,
    m = hbe.useRef(null),
    {
      entries: g,
      exitState: h
    } = bzi(void 0, void 0, f),
    y;
  if (t[0] !== f || t[1] !== i) y = f ? [{
    action: "confirm:no",
    run: i,
    hint: "cancel"
  }] : [], t[0] = f, t[1] = i, t[2] = y;else y = t[2];
  let b = y,
    _;
  if (t[3] !== b || t[4] !== g) _ = [...b, ...g], t[3] = b, t[4] = g, t[5] = _;else _ = t[5];
  let S = _,
    A = hbe.useContext(Xj),
    v = hbe.useRef(null),
    [C, x] = hbe.useState(o ? 2 : 1),
    I;
  if (t[6] !== A || t[7] !== C) I = () => {
    if (!A || !v.current) return;
    let ne = tX(v.current).height;
    if (ne !== C) x(ne);
  }, t[6] = A, t[7] = C, t[8] = I;else I = t[8];
  hbe.useLayoutEffect(I);
  let k = C + 1 + (l ? 0 : 2),
    D;
  if (t[9] !== A || t[10] !== k) D = A ? {
    ...A,
    rows: Math.max(0, A.rows - k)
  } : null, t[9] = A, t[10] = k, t[11] = D;else D = t[11];
  let P = D,
    O;
  if (t[12] !== h || t[13] !== u) O = typeof u === "function" ? u(h) : h.pending ? N0.jsxs(w, {
    children: ["Press ", h.keyName, " again to exit"]
  }) : u != null ? u : void 0, t[12] = h, t[13] = u, t[14] = O;else O = t[14];
  let L = O,
    M = typeof u === "function" || h.pending || u != null,
    N;
  if (t[15] !== L || t[16] !== l || t[17] !== f || t[18] !== M) N = !l && N0.jsx(U, {
    marginTop: 1,
    children: M ? N0.jsx(w, {
      dimColor: true,
      italic: true,
      children: L
    }) : !f ? N0.jsx(w, {
      dimColor: true,
      italic: true,
      children: Dzi
    }) : N0.jsx(Hzi, {
      boundary: m,
      fallback: N0.jsx(w, {
        dimColor: true,
        italic: true,
        children: Dzi
      })
    })
  }), t[15] = L, t[16] = l, t[17] = f, t[18] = M, t[19] = N;else N = t[19];
  let B = N,
    $ = c ? 0 : 1,
    q;
  if (t[20] !== p || t[21] !== n || t[22] !== r) q = r ? N0.jsxs(U, {
    justifyContent: "space-between",
    gap: 2,
    children: [N0.jsx(w, {
      bold: true,
      color: p,
      children: n
    }), N0.jsx(w, {
      dimColor: true,
      wrap: "truncate-start",
      children: r
    })]
  }) : N0.jsx(w, {
    bold: true,
    color: p,
    children: n
  }), t[20] = p, t[21] = n, t[22] = r, t[23] = q;else q = t[23];
  let W;
  if (t[24] !== o) W = o && N0.jsx(w, {
    dimColor: true,
    children: o
  }), t[24] = o, t[25] = W;else W = t[25];
  let V;
  if (t[26] !== q || t[27] !== W) V = N0.jsxs(U, {
    ref: v,
    flexDirection: "column",
    children: [q, W]
  }), t[26] = q, t[27] = W, t[28] = V;else V = t[28];
  let Y;
  if (t[29] !== P || t[30] !== s) Y = N0.jsx(Xj, {
    value: P,
    children: s
  }), t[29] = P, t[30] = s, t[31] = Y;else Y = t[31];
  let z;
  if (t[32] !== V || t[33] !== Y) z = N0.jsxs(U, {
    flexDirection: "column",
    gap: 1,
    children: [V, Y]
  }), t[32] = V, t[33] = Y, t[34] = z;else z = t[34];
  let K;
  if (t[35] !== S || t[36] !== B || t[37] !== z || t[38] !== $) K = N0.jsxs(Izi, {
    ref: m,
    scope: "Confirmation",
    claimFocus: true,
    flexGrow: $,
    flexDirection: "column",
    bindings: S,
    children: [z, B]
  }), t[35] = S, t[36] = B, t[37] = z, t[38] = $, t[39] = K;else K = t[39];
  let Z = K;
  if (c) return Z;
  let J;
  if (t[40] !== p || t[41] !== Z) J = N0.jsx(Fu, {
    color: p,
    children: Z
  }), t[40] = p, t[41] = Z, t[42] = J;else J = t[42];
  return J;
}
var Pzi, hbe, N0, Dzi;