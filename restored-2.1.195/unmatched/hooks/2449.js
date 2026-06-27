// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module R5i
// matched 2.1.88 source: src/ink/styles.ts
// class=new  jaccard=0.0249  score=1  fileCov=0.0249
// note: nearest: src/ink/styles.ts (0.0249); dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var R5i = E(() => {
  x5i = R(lt(), 1), k5i = R(se(), 1);
});
function wI(e) {
  let t = L5i.c(9),
    n,
    r,
    o;
  if (t[0] !== e) ({
    children: r,
    fromLeftEdge: o,
    ...n
  } = e), t[0] = e, t[1] = n, t[2] = r, t[3] = o;else n = t[1], r = t[2], o = t[3];
  let s = o ? "stretch" : void 0,
    i = o ? "from-left-edge" : !0,
    a;
  if (t[4] !== n || t[5] !== r || t[6] !== s || t[7] !== i) a = D5i.jsx(Iy, {
    alignSelf: s,
    ...n,
    noSelect: i,
    children: r
  }), t[4] = n, t[5] = r, t[6] = s, t[7] = i, t[8] = a;else a = t[8];
  return a;
}
var L5i, D5i;