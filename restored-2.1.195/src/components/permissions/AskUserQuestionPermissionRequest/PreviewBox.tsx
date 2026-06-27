// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MAc
// matched 2.1.88 source: src/components/permissions/AskUserQuestionPermissionRequest/PreviewBox.tsx
// class=modified  jaccard=0.2955  score=1  fileCov=0.2955
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var MAc = E(() => {
  mE();
  v5();
  Ko();
  eE();
  gm();
  EC();
  Ye();
  ps();
  E0o();
  ((zTe = R(lt(), 1)), (YTt = R(rt(), 1)), (zu = R(se(), 1)));
});
function $Ac(e) {
  let t = Yzo.c(5),
    n = G_(),
    r;
  if (t[0] !== n.syntaxHighlightingDisabled)
    ((r = n.syntaxHighlightingDisabled ? null : GDe()),
      (t[0] = n.syntaxHighlightingDisabled),
      (t[1] = r));
  else r = t[1];
  let o = r,
    s;
  if (t[2] !== o || t[3] !== e)
    ((s = eie.jsx(Mym, {
      ...e,
      highlight: o,
    })),
      (t[2] = o),
      (t[3] = e),
      (t[4] = s));
  else s = t[4];
  return s;
}
function Mym(e) {
  let t = Yzo.c(37),
    { content: n, maxLines: r, minHeight: o, minWidth: s, maxWidth: i, highlight: a } = e,
    l = s === void 0 ? 40 : s,
    { columns: c } = br(),
    [u] = na(),
    d = i ?? c - 4,
    p = r ?? 20,
    f;
  if (t[0] !== n || t[1] !== a || t[2] !== u)
    ((f = S6n(n, u, a)), (t[0] = n), (t[1] = a), (t[2] = u), (t[3] = f));
  else f = t[3];
  let m = f,
    g = Math.max(1, d - 4),
    h,
    y,
    b,
    _,
    S,
    A;
  if (t[4] !== p || t[5] !== d || t[6] !== o || t[7] !== l || t[8] !== m || t[9] !== g) {
    let I;
    if (t[16] !== g)
      ((I = (Z) =>
        rn(Z) > g
          ? SB(Z, g, {
              hard: true,
              trim: false,
            }).split(`
`)
          : Z),
        (t[16] = g),
        (t[17] = I));
    else I = t[17];
    let k = m
        .split(
          `
`,
        )
        .flatMap(I),
      D = k.length > p,
      P = D ? k.slice(0, p) : k,
      O = Math.min(o ?? 0, p),
      L = Math.max(0, O - P.length - (D ? 1 : 0)),
      M = L > 0 ? [...P, ...Array(L).fill("")] : P,
      N = Math.max(l, ...M.map($ym)),
      B = Math.max(4, Math.min(N + 4, d)),
      $ = B - 4,
      q = B - 2,
      W;
    if (t[18] !== q) ((W = Ff(eK.horizontal, q)), (t[18] = q), (t[19] = W));
    else W = t[19];
    let V = `${eK.topLeft}${W}${eK.topRight}`,
      Y = B - 2,
      z;
    if (t[20] !== Y) ((z = Ff(eK.horizontal, Y)), (t[20] = Y), (t[21] = z));
    else z = t[21];
    if (
      ((y = `${eK.bottomLeft}${z}${eK.bottomRight}`),
      (A = D
        ? (() => {
            let Z = k.length - p,
              J = `${eK.horizontal.repeat(3)} \u2702 ${eK.horizontal.repeat(3)} ${Z} lines hidden `,
              ne = rn(J),
              oe = Math.max(0, B - 2 - ne);
            return `${eK.teeLeft}${J}${eK.horizontal.repeat(oe)}${eK.teeRight}`;
          })()
        : null),
      (h = U),
      (b = "column"),
      t[22] !== V)
    )
      ((_ = eie.jsx(w, {
        dimColor: true,
        children: V,
      })),
        (t[22] = V),
        (t[23] = _));
    else _ = t[23];
    let K;
    if (t[24] !== $)
      ((K = (Z, J) => {
        let oe = rn(Z) > $ ? w1(Z, 0, $) : Z,
          re = " ".repeat(Math.max(0, $ - rn(oe)));
        return eie.jsxs(
          U,
          {
            flexDirection: "row",
            children: [
              eie.jsxs(w, {
                dimColor: true,
                children: [eK.vertical, " "],
              }),
              eie.jsx(bd, {
                children: oe,
              }),
              eie.jsxs(w, {
                dimColor: true,
                children: [re, " ", eK.vertical],
              }),
            ],
          },
          J,
        );
      }),
        (t[24] = $),
        (t[25] = K));
    else K = t[25];
    ((S = M.map(K)),
      (t[4] = p),
      (t[5] = d),
      (t[6] = o),
      (t[7] = l),
      (t[8] = m),
      (t[9] = g),
      (t[10] = h),
      (t[11] = y),
      (t[12] = b),
      (t[13] = _),
      (t[14] = S),
      (t[15] = A));
  } else ((h = t[10]), (y = t[11]), (b = t[12]), (_ = t[13]), (S = t[14]), (A = t[15]));
  let v;
  if (t[26] !== A)
    ((v =
      A &&
      eie.jsx(w, {
        color: "warning",
        children: A,
      })),
      (t[26] = A),
      (t[27] = v));
  else v = t[27];
  let C;
  if (t[28] !== y)
    ((C = eie.jsx(w, {
      dimColor: true,
      children: y,
    })),
      (t[28] = y),
      (t[29] = C));
  else C = t[29];
  let x;
  if (t[30] !== h || t[31] !== b || t[32] !== _ || t[33] !== S || t[34] !== v || t[35] !== C)
    ((x = eie.jsxs(h, {
      flexDirection: b,
      children: [_, S, v, C],
    })),
      (t[30] = h),
      (t[31] = b),
      (t[32] = _),
      (t[33] = S),
      (t[34] = v),
      (t[35] = C),
      (t[36] = x));
  else x = t[36];
  return x;
}
function $ym(e) {
  return rn(e);
}
var Yzo, eie, eK;
