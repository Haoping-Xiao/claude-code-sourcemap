// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uIo
// matched 2.1.88 source: src/utils/ghPrStatus.ts
// class=partial  jaccard=0.145  score=0.3361  fileCov=0.2031
// note: low-confidence suggestion: src/utils/ghPrStatus.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var uIo = E(() => {
  AW();
  dn();
  je();
  wr();
  bal = R(rt(), 1);
});
function u6e(e) {
  let t = Aal.c(37),
    {
      number: n,
      url: r,
      reviewState: o,
      bold: s,
      color: i,
      dimColor: a,
      inverse: l,
      underline: c,
      hidePrefix: u,
      kind: d
    } = e,
    p = c === void 0 ? true : c,
    f = d === "cr" && false,
    m = Ht(xsf),
    g;
  if (t[0] !== f || t[1] !== m || t[2] !== r) g = f ? r : sWt(r, m), t[0] = f, t[1] = m, t[2] = r, t[3] = g;else g = t[3];
  let h = g,
    y,
    b;
  if (t[4] !== f || t[5] !== r || t[6] !== h) y = () => {
    cIo(h, r, f);
  }, b = [h, r, f], t[4] = f, t[5] = r, t[6] = h, t[7] = y, t[8] = b;else y = t[7], b = t[8];
  Hal.useEffect(y, b);
  let _;
  if (t[9] !== i || t[10] !== o) _ = i ?? ksf(o), t[9] = i, t[10] = o, t[11] = _;else _ = t[11];
  let S = _,
    A = !l && (a || !S && !s),
    v;
  if (t[12] !== s || t[13] !== A || t[14] !== l || t[15] !== n || t[16] !== S) v = zpe.jsxs(w, {
    color: S,
    dimColor: A,
    bold: s,
    inverse: l,
    children: ["#", n]
  }), t[12] = s, t[13] = A, t[14] = l, t[15] = n, t[16] = S, t[17] = v;else v = t[17];
  let C = v,
    x;
  if (t[18] !== s || t[19] !== a || t[20] !== u || t[21] !== f) x = !u && zpe.jsxs(zpe.Fragment, {
    children: [zpe.jsx(w, {
      dimColor: a || !s,
      children: "PR"
    }), " "]
  }), t[18] = s, t[19] = a, t[20] = u, t[21] = f, t[22] = x;else x = t[22];
  let I = !l && p,
    k;
  if (t[23] !== s || t[24] !== A || t[25] !== l || t[26] !== n || t[27] !== S || t[28] !== I) k = zpe.jsxs(w, {
    color: S,
    dimColor: A,
    underline: I,
    bold: s,
    inverse: l,
    children: ["#", n]
  }), t[23] = s, t[24] = A, t[25] = l, t[26] = n, t[27] = S, t[28] = I, t[29] = k;else k = t[29];
  let D;
  if (t[30] !== C || t[31] !== k || t[32] !== h) D = zpe.jsx(xs, {
    url: h,
    fallback: C,
    assumeSupport: false,
    children: k
  }), t[30] = C, t[31] = k, t[32] = h, t[33] = D;else D = t[33];
  let P;
  if (t[34] !== D || t[35] !== x) P = zpe.jsxs(w, {
    children: [x, D]
  }), t[34] = D, t[35] = x, t[36] = P;else P = t[36];
  return P;
}
function xsf(e) {
  return e.settings?.prUrlTemplate;
}
function ksf(e) {
  switch (e) {
    case "approved":
      return "success";
    case "changes_requested":
      return "error";
    case "pending":
      return "warning";
    case "merged":
      return "merged";
    default:
      return;
  }
}
var Aal, Hal, zpe;