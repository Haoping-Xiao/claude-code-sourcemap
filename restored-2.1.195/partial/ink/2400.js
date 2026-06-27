// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Tne
// matched 2.1.88 source: src/ink/Ansi.tsx
// class=partial  jaccard=0.0894  score=0.4309  fileCov=0.1014
// note: low-confidence suggestion: src/ink/Ansi.tsx; dir inferred from dep-graph -> ink; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Tne] deps: ink/screen.ts
OGi = R(se(), 1);
Iy = cGd;
function nS(e) {
  let t = NGi.c(35),
    {
      color: n,
      backgroundColor: r,
      bold: o,
      dim: s,
      italic: i,
      underline: a,
      strikethrough: l,
      inverse: c,
      wrap: u,
      children: d,
      "aria-hidden": p,
      "aria-label": f,
      "aria-role": m,
      "aria-state": g
    } = e,
    h = i === void 0 ? false : i,
    y = a === void 0 ? false : a,
    b = l === void 0 ? false : l,
    _ = c === void 0 ? false : c,
    S = u === void 0 ? "wrap" : u;
  if (d === void 0 || d === null) return null;
  let A;
  if (t[0] !== n) A = n && {
    color: n
  }, t[0] = n, t[1] = A;else A = t[1];
  let v;
  if (t[2] !== r) v = r && {
    backgroundColor: r
  }, t[2] = r, t[3] = v;else v = t[3];
  let C;
  if (t[4] !== s) C = s && {
    dim: s
  }, t[4] = s, t[5] = C;else C = t[5];
  let x;
  if (t[6] !== o) x = o && {
    bold: o
  }, t[6] = o, t[7] = x;else x = t[7];
  let I;
  if (t[8] !== h) I = h && {
    italic: h
  }, t[8] = h, t[9] = I;else I = t[9];
  let k;
  if (t[10] !== y) k = y && {
    underline: y
  }, t[10] = y, t[11] = k;else k = t[11];
  let D;
  if (t[12] !== b) D = b && {
    strikethrough: b
  }, t[12] = b, t[13] = D;else D = t[13];
  let P;
  if (t[14] !== _) P = _ && {
    inverse: _
  }, t[14] = _, t[15] = P;else P = t[15];
  let O;
  if (t[16] !== I || t[17] !== k || t[18] !== D || t[19] !== P || t[20] !== A || t[21] !== v || t[22] !== C || t[23] !== x) O = {
    ...A,
    ...v,
    ...C,
    ...x,
    ...I,
    ...k,
    ...D,
    ...P
  }, t[16] = I, t[17] = k, t[18] = D, t[19] = P, t[20] = A, t[21] = v, t[22] = C, t[23] = x, t[24] = O;else O = t[24];
  let L = O,
    M = uGd[S],
    N;
  if (t[25] !== p || t[26] !== f || t[27] !== m || t[28] !== g) N = hLn(p, f, m, g), t[25] = p, t[26] = f, t[27] = m, t[28] = g, t[29] = N;else N = t[29];
  let B;
  if (t[30] !== d || t[31] !== M || t[32] !== N || t[33] !== L) B = BGi.jsx("ink-text", {
    style: M,
    textStyles: L,
    accessibility: N,
    children: d
  }), t[30] = d, t[31] = M, t[32] = N, t[33] = L, t[34] = B;else B = t[34];
  return B;
}
var NGi, BGi, uGd;