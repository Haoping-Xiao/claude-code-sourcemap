// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Gmc
// matched 2.1.88 source: src/ink/components/Box.tsx
// class=new  jaccard=0.0222  score=0.4592  fileCov=0.0228
// note: nearest: src/ink/components/Box.tsx (0.0222); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Gmc] deps: B8n, hNe, Ld
Fmc = R(rt(), 1);
function qmc(e) {
  let t = Wmc.c(8),
    {
      name: n,
      color: r
    } = e,
    o;
  if (t[0] !== r) o = V6(r), t[0] = r, t[1] = o;else o = t[1];
  let s = o,
    i = `@${n}`,
    a;
  if (t[2] !== n) a = ren.jsxs(w, {
    bold: true,
    children: ["@", n]
  }), t[2] = n, t[3] = a;else a = t[3];
  let l;
  if (t[4] !== s || t[5] !== i || t[6] !== a) l = ren.jsx(U, {
    flexDirection: "row",
    gap: 1,
    children: ren.jsxs(w, {
      "aria-label": i,
      color: s,
      children: [gc, " ", a]
    })
  }), t[4] = s, t[5] = i, t[6] = a, t[7] = l;else l = t[7];
  return l;
}
var Wmc, ren;