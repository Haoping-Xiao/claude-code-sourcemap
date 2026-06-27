// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module j$c
// matched 2.1.88 source: src/components/design-system/Dialog.tsx
// class=partial  jaccard=0.0913  score=0.1702  fileCov=0.1646
// note: low-confidence suggestion: src/components/design-system/Dialog.tsx; dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: ThirdPartyModelUpgradeDialog
// [unwrapped __esm module j$c] deps: kt, Ye, dn, VM, er, Cc, Bs, Fy, vi, Ko
U$c = R(lt(), 1), pmr = R(rt(), 1), oie = R(se(), 1);
function ThirdPartyModelUpgradeDialog(e) {
  let t = G$c.c(27),
    {
      tierLabel: n,
      fromName: r,
      toName: o,
      toProviderId: s,
      onDone: i
    } = e,
    a = `Newer ${n} model available`,
    l;
  if (t[0] !== i) l = () => i(false), t[0] = i, t[1] = l;else l = t[1];
  let c;
  if (t[2] !== r) c = rK.jsxs(w, {
    children: ["Currently pinned: ", rK.jsx(w, {
      bold: true,
      children: r
    })]
  }), t[2] = r, t[3] = c;else c = t[3];
  let u;
  if (t[4] !== o) u = rK.jsx(w, {
    bold: true,
    children: o
  }), t[4] = o, t[5] = u;else u = t[5];
  let d;
  if (t[6] !== s) d = rK.jsxs(w, {
    dimColor: true,
    children: ["(", s, ")"]
  }), t[6] = s, t[7] = d;else d = t[7];
  let p;
  if (t[8] !== u || t[9] !== d) p = rK.jsxs(w, {
    children: ["Latest available: ", u, " ", d]
  }), t[8] = u, t[9] = d, t[10] = p;else p = t[10];
  let f;
  if (t[11] !== c || t[12] !== p) f = rK.jsxs(U, {
    flexDirection: "column",
    children: [c, p]
  }), t[11] = c, t[12] = p, t[13] = f;else f = t[13];
  let m;
  if (t[14] === Symbol.for("react.memo_cache_sentinel")) m = rK.jsx(w, {
    dimColor: true,
    children: "Claude Code will restart to apply."
  }), t[14] = m;else m = t[14];
  let g;
  if (t[15] !== o) g = rK.jsxs(w, {
    children: ["Update settings to use ", o, "?", " ", m]
  }), t[15] = o, t[16] = g;else g = t[16];
  let h;
  if (t[17] !== i) h = rK.jsx(Kl, {
    onConfirm: () => i(true),
    onCancel: () => i(false)
  }), t[17] = i, t[18] = h;else h = t[18];
  let y;
  if (t[19] !== h || t[20] !== f || t[21] !== g) y = rK.jsxs(U, {
    flexDirection: "column",
    gap: 1,
    children: [f, g, h]
  }), t[19] = h, t[20] = f, t[21] = g, t[22] = y;else y = t[22];
  let b;
  if (t[23] !== a || t[24] !== y || t[25] !== l) b = rK.jsx(zn, {
    title: a,
    color: "permission",
    onCancel: l,
    children: y
  }), t[23] = a, t[24] = y, t[25] = l, t[26] = b;else b = t[26];
  return b;
}
var G$c, rK;