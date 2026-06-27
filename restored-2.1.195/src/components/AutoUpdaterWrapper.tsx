// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ghc
// matched 2.1.88 source: src/components/AutoUpdaterWrapper.tsx
// class=modified  jaccard=0.2573  score=1  fileCov=0.2573
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var ghc = E(() => {
  kt();
  Ye();
  uo();
  FEe();
  er();
  je();
  fn();
  Bi();
  IVn();
  LOe();
  ((dhc = R(lt(), 1)),
    (phc = require("os")),
    (fhc = require("path")),
    (IZ = R(rt(), 1)),
    (Wz = R(se(), 1)));
});
function zur(e) {
  let t = hhc.c(13),
    { isUpdating: n, onChangeIsUpdating: r, showSuccessMessage: o, verbose: s } = e,
    [i, a] = Ien.useState(null),
    [l, c] = Ien.useState(null),
    u,
    d;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((u = () => {
      (async function () {
        let h = await GEe();
        (T(`AutoUpdaterWrapper: Installation type: ${h}`),
          a(h === "native"),
          c(h === "package-manager"));
      })();
    }),
      (d = []),
      (t[0] = u),
      (t[1] = d));
  else ((u = t[0]), (d = t[1]));
  if ((Ien.useEffect(u, d), i === null || l === null)) return null;
  if (l) {
    let m;
    if (t[2] !== n || t[3] !== r || t[4] !== o || t[5] !== s)
      ((m = Z8o.jsx(mhc, {
        verbose: s,
        isUpdating: n,
        onChangeIsUpdating: r,
        showSuccessMessage: o,
      })),
        (t[2] = n),
        (t[3] = r),
        (t[4] = o),
        (t[5] = s),
        (t[6] = m));
    else m = t[6];
    return m;
  }
  let p = i ? ahc : shc,
    f;
  if (t[7] !== p || t[8] !== n || t[9] !== r || t[10] !== o || t[11] !== s)
    ((f = Z8o.jsx(p, {
      verbose: s,
      isUpdating: n,
      onChangeIsUpdating: r,
      showSuccessMessage: o,
    })),
      (t[7] = p),
      (t[8] = n),
      (t[9] = r),
      (t[10] = o),
      (t[11] = s),
      (t[12] = f));
  else f = t[12];
  return f;
}
var hhc, Ien, Z8o;
