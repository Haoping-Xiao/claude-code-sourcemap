// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OMc
// matched 2.1.88 source: src/components/ui/OrderedListItem.tsx
// class=modified  jaccard=0.362  score=0.5884  fileCov=0.4848
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module OMc] deps: Ye
((MMc = R(lt(), 1)), (omr = R(se(), 1)));
function imr(e) {
  let t = NMc.c(7),
    { children: n } = e,
    { marker: r } = smr.useContext(f7o),
    o;
  if (t[0] !== r)
    ((o = Xtn.jsx(w, {
      dimColor: true,
      children: r,
    })),
      (t[0] = r),
      (t[1] = o));
  else o = t[1];
  let s;
  if (t[2] !== n)
    ((s = Xtn.jsx(U, {
      flexDirection: "column",
      children: n,
    })),
      (t[2] = n),
      (t[3] = s));
  else s = t[3];
  let i;
  if (t[4] !== o || t[5] !== s)
    ((i = Xtn.jsxs(U, {
      gap: 1,
      children: [o, s],
    })),
      (t[4] = o),
      (t[5] = s),
      (t[6] = i));
  else i = t[6];
  return i;
}
var NMc, smr, Xtn, f7o;
