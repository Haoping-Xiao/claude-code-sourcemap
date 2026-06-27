// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BMc
// matched 2.1.88 source: src/components/ui/OrderedList.tsx
// class=modified  jaccard=0.5238  score=0.745  fileCov=0.6382
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module BMc] deps: Ye
((NMc = R(lt(), 1)),
  (smr = R(rt(), 1)),
  (Xtn = R(se(), 1)),
  (f7o = smr.createContext({
    marker: "",
  })));
function jMc(e) {
  let t = FMc.c(9),
    { children: n } = e,
    { marker: r } = U7e.useContext(UMc),
    o = 0;
  for (let l of m7o.Children.toArray(n)) {
    if (!U7e.isValidElement(l) || l.type !== imr) continue;
    o++;
  }
  let s = String(o).length,
    i;
  if (t[0] !== n || t[1] !== s || t[2] !== r) {
    let l;
    if (t[4] !== s || t[5] !== r)
      ((l = (c, u) => {
        if (!U7e.isValidElement(c) || c.type !== imr) return c;
        let d = `${String(u + 1).padStart(s)}.`,
          p = `${r}${d}`;
        return amr.jsx(UMc.Provider, {
          value: {
            marker: p,
          },
          children: amr.jsx(f7o.Provider, {
            value: {
              marker: p,
            },
            children: c,
          }),
        });
      }),
        (t[4] = s),
        (t[5] = r),
        (t[6] = l));
    else l = t[6];
    ((i = m7o.Children.map(n, l)), (t[0] = n), (t[1] = s), (t[2] = r), (t[3] = i));
  } else i = t[3];
  let a;
  if (t[7] !== i)
    ((a = amr.jsx(U, {
      flexDirection: "column",
      children: i,
    })),
      (t[7] = i),
      (t[8] = a));
  else a = t[8];
  return a;
}
var FMc, m7o, U7e, amr, UMc, lmr;
