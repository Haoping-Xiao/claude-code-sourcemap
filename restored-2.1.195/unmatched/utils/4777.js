// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PEt
// matched 2.1.88 source: src/native-ts/yoga-layout/index.ts
// class=new  jaccard=0.0116  score=0.6367  fileCov=0.0116
// note: nearest: src/native-ts/yoga-layout/index.ts (0.0116); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module PEt] deps: DBo, Lo, je, ik, sa
Qnr = require("fs/promises"), PBo = R(kso(), 1);
function qk(e) {
  let t = f2l.c(9),
    {
      status: n,
      children: r
    } = e,
    {
      color: o
    } = wZr[n],
    s;
  if (t[0] !== n) s = OKe.jsx(U, {
    width: 2,
    flexShrink: 0,
    children: OKe.jsx(Hs, {
      status: n
    })
  }), t[0] = n, t[1] = s;else s = t[1];
  let i = !o,
    a;
  if (t[2] !== r || t[3] !== o || t[4] !== i) a = OKe.jsx(U, {
    flexGrow: 1,
    flexShrink: 1,
    children: OKe.jsx(w, {
      color: o,
      dimColor: i,
      children: r
    })
  }), t[2] = r, t[3] = o, t[4] = i, t[5] = a;else a = t[5];
  let l;
  if (t[6] !== s || t[7] !== a) l = OKe.jsxs(U, {
    flexDirection: "row",
    children: [s, a]
  }), t[6] = s, t[7] = a, t[8] = l;else l = t[8];
  return l;
}
var f2l, OKe;