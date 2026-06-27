// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PWt
// matched 2.1.88 source: src/components/permissions/PermissionDialog.tsx
// class=modified  jaccard=0.2774  score=0.5934  fileCov=0.3425
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var PWt = E(() => {
  Ye();
  g0();
  (($1a = R(lt(), 1)), (QDe = R(se(), 1)));
});
function Lf(e) {
  let t = O1a.c(15),
    {
      title: n,
      subtitle: r,
      color: o,
      titleColor: s,
      innerPaddingX: i,
      requestSource: a,
      titleRight: l,
      children: c,
    } = e,
    u = o === void 0 ? "permission" : o,
    d = i === void 0 ? 1 : i,
    p;
  if (t[0] !== a || t[1] !== r || t[2] !== n || t[3] !== s)
    ((p = hVe.jsx(ZDe, {
      title: n,
      subtitle: r,
      color: s,
      requestSource: a,
      srPrefix: "Permission Required:",
    })),
      (t[0] = a),
      (t[1] = r),
      (t[2] = n),
      (t[3] = s),
      (t[4] = p));
  else p = t[4];
  let f;
  if (t[5] !== p || t[6] !== l)
    ((f = hVe.jsx(U, {
      paddingX: 1,
      flexDirection: "column",
      children: hVe.jsxs(U, {
        justifyContent: "space-between",
        children: [p, l],
      }),
    })),
      (t[5] = p),
      (t[6] = l),
      (t[7] = f));
  else f = t[7];
  let m;
  if (t[8] !== c || t[9] !== d)
    ((m = hVe.jsx(U, {
      flexDirection: "column",
      paddingX: d,
      children: c,
    })),
      (t[8] = c),
      (t[9] = d),
      (t[10] = m));
  else m = t[10];
  let g;
  if (t[11] !== u || t[12] !== f || t[13] !== m)
    ((g = hVe.jsxs(U, {
      flexDirection: "column",
      borderStyle: "round",
      borderColor: u,
      borderLeft: !1,
      borderRight: !1,
      borderBottom: !1,
      marginTop: 1,
      children: [f, m],
    })),
      (t[11] = u),
      (t[12] = f),
      (t[13] = m),
      (t[14] = g));
  else g = t[14];
  return g;
}
var O1a, hVe;
