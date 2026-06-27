// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Kut
// matched 2.1.88 source: src/components/StructuredDiff.tsx
// class=modified  jaccard=0.2692  score=0.6429  fileCov=0.3166
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Kut] deps: iu, w4, Ye, uf, t0e, gBn, Xba
((Qba = R(lt(), 1)), (Zba = R(rt(), 1)), (Yue = R(se(), 1)), (Jba = new WeakMap()));
Xue = Zba.memo(function (t) {
  let n = Qba.c(26),
    {
      patch: r,
      dim: o,
      filePath: s,
      firstLine: i,
      fileContent: a,
      width: l,
      skipHighlighting: c,
    } = t,
    u = c === void 0 ? false : c,
    [d] = na(),
    f = G_().syntaxHighlightingDisabled ?? false,
    m = Math.max(1, Math.floor(l)),
    g;
  if (
    n[0] !== o ||
    n[1] !== a ||
    n[2] !== s ||
    n[3] !== i ||
    n[4] !== r ||
    n[5] !== m ||
    n[6] !== u ||
    n[7] !== f ||
    n[8] !== d
  ) {
    let v = Ns();
    ((g = u || f ? null : d_p(r, i, s, a ?? null, d, m, o, v)),
      (n[0] = o),
      (n[1] = a),
      (n[2] = s),
      (n[3] = i),
      (n[4] = r),
      (n[5] = m),
      (n[6] = u),
      (n[7] = f),
      (n[8] = d),
      (n[9] = g));
  } else g = n[9];
  let h = g;
  if (!h) {
    let v;
    if (n[10] !== o || n[11] !== r || n[12] !== l)
      ((v = Yue.jsx(U, {
        children: Yue.jsx(Yba, {
          patch: r,
          dim: o,
          width: l,
        }),
      })),
        (n[10] = o),
        (n[11] = r),
        (n[12] = l),
        (n[13] = v));
    else v = n[13];
    return v;
  }
  let { lines: y, gutterWidth: b, gutters: _, contents: S } = h;
  if (b > 0 && _ && S) {
    let v;
    if (n[14] !== b || n[15] !== _)
      ((v = Yue.jsx(wI, {
        fromLeftEdge: true,
        children: Yue.jsx(gat, {
          lines: _,
          width: b,
        }),
      })),
        (n[14] = b),
        (n[15] = _),
        (n[16] = v));
    else v = n[16];
    let C = m - b,
      x;
    if (n[17] !== S || n[18] !== C)
      ((x = Yue.jsx(gat, {
        lines: S,
        width: C,
      })),
        (n[17] = S),
        (n[18] = C),
        (n[19] = x));
    else x = n[19];
    let I;
    if (n[20] !== v || n[21] !== x)
      ((I = Yue.jsxs(U, {
        flexDirection: "row",
        children: [v, x],
      })),
        (n[20] = v),
        (n[21] = x),
        (n[22] = I));
    else I = n[22];
    return I;
  }
  let A;
  if (n[23] !== y || n[24] !== m)
    ((A = Yue.jsx(U, {
      children: Yue.jsx(gat, {
        lines: y,
        width: m,
      }),
    })),
      (n[23] = y),
      (n[24] = m),
      (n[25] = A));
  else A = n[25];
  return A;
});
function $5e({ hunks: e, dim: t, width: n, filePath: r, firstLine: o, fileContent: s }) {
  return Wwe(
    e.map((i) =>
      H4t.jsx(
        U,
        {
          flexDirection: "column",
          children: H4t.jsx(Xue, {
            patch: i,
            dim: t,
            width: n,
            filePath: r,
            firstLine: o,
            fileContent: s,
          }),
        },
        i.newStart,
      ),
    ),
    (i) =>
      H4t.jsx(
        wI,
        {
          fromLeftEdge: true,
          children: H4t.jsx(w, {
            dimColor: true,
            children: "...",
          }),
        },
        `ellipsis-${i}`,
      ),
  );
}
var H4t;
