// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fkc
// matched 2.1.88 source: src/components/ui/OrderedListItem.tsx
// class=modified (alt of src/components/ui/OrderedListItem.tsx)  jaccard=0.3416  score=1  fileCov=0.3416
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var fkc = E(() => {
  Ye();
  ((ukc = R(lt(), 1)), (aO = R(se(), 1)));
});
function evt(e) {
  let t = mkc.c(7),
    { children: n, mouseTracking: r } = e,
    o = r === void 0 ? "full" : r,
    s = ytn.useContext(Dce),
    i = ytn.useContext(g8),
    a,
    l;
  if (t[0] !== o || t[1] !== i)
    ((a = () => {
      let d = Cu.get(process.stdout);
      if (!i) return;
      return (
        i(Xke() + Yke(o)),
        d?.setAltScreenActive(!0, o),
        () => {
          let p = d ? !d.isAltScreenActive : !1;
          if ((d?.setAltScreenActive(!1), d?.clearTextSelection(), p)) {
            i(o !== "off" ? kce : "");
            return;
          }
          i((o !== "off" ? kce : "") + H1() + (d?.hasUnmounted ? "" : gne()));
        }
      );
    }),
      (l = [i, o]),
      (t[0] = o),
      (t[1] = i),
      (t[2] = a),
      (t[3] = l));
  else ((a = t[2]), (l = t[3]));
  ytn.useInsertionEffect(a, l);
  let c = s?.rows ?? 24,
    u;
  if (t[4] !== n || t[5] !== c)
    ((u = gkc.jsx(Iy, {
      flexDirection: "column",
      height: c,
      width: "100%",
      flexShrink: 0,
      children: n,
    })),
      (t[4] = n),
      (t[5] = c),
      (t[6] = u));
  else u = t[6];
  return u;
}
var mkc, ytn, gkc;
