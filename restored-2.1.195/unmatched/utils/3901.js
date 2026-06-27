// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HVt
// matched 2.1.88 source: src/ink/styles.ts
// class=new  jaccard=0.0178  score=0.5491  fileCov=0.0181
// note: nearest: src/ink/styles.ts (0.0178); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var HVt = E(() => {
  ft();
  je();
  wr();
  Bi();
  sp();
  Fh();
  dn();
  kt();
});
function cA(e) {
  let t = Q7a.c(10),
    {
      children: n,
      color: r,
      title: o
    } = e,
    s = Sd(),
    i = s ? void 0 : "round",
    a = s ? 0 : 1,
    l = o ? 1 : 0,
    c;
  if (t[0] !== r || t[1] !== o) c = o && S9n.jsx(w, {
    bold: true,
    color: r,
    children: o
  }), t[0] = r, t[1] = o, t[2] = c;else c = t[2];
  let u;
  if (t[3] !== n || t[4] !== r || t[5] !== i || t[6] !== a || t[7] !== l || t[8] !== c) u = S9n.jsxs(U, {
    borderStyle: i,
    borderColor: r,
    flexDirection: "column",
    paddingX: a,
    gap: l,
    children: [c, n]
  }), t[3] = n, t[4] = r, t[5] = i, t[6] = a, t[7] = l, t[8] = c, t[9] = u;else u = t[9];
  return u;
}
var Q7a, S9n;