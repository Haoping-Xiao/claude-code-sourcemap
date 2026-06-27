// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PEt
// matched 2.1.88 source: src/utils/readEditContext.ts
// class=modified (alt of src/utils/readEditContext.ts)  jaccard=0.4356  score=1  fileCov=0.4356
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var PEt = E(() => {
  DBo();
  Lo();
  je();
  ik();
  sa();
  ((Qnr = require("fs/promises")), (PBo = R(kso(), 1)));
});
function qk(e) {
  let t = f2l.c(9),
    { status: n, children: r } = e,
    { color: o } = wZr[n],
    s;
  if (t[0] !== n)
    ((s = OKe.jsx(U, {
      width: 2,
      flexShrink: 0,
      children: OKe.jsx(Hs, {
        status: n,
      }),
    })),
      (t[0] = n),
      (t[1] = s));
  else s = t[1];
  let i = !o,
    a;
  if (t[2] !== r || t[3] !== o || t[4] !== i)
    ((a = OKe.jsx(U, {
      flexGrow: 1,
      flexShrink: 1,
      children: OKe.jsx(w, {
        color: o,
        dimColor: i,
        children: r,
      }),
    })),
      (t[2] = r),
      (t[3] = o),
      (t[4] = i),
      (t[5] = a));
  else a = t[5];
  let l;
  if (t[6] !== s || t[7] !== a)
    ((l = OKe.jsxs(U, {
      flexDirection: "row",
      children: [s, a],
    })),
      (t[6] = s),
      (t[7] = a),
      (t[8] = l));
  else l = t[8];
  return l;
}
var f2l, OKe;
