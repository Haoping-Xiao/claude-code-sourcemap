// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _zl
// matched 2.1.88 source: src/components/permissions/rules/RemoveWorkspaceDirectory.tsx
// class=modified  jaccard=0.3698  score=0.7362  fileCov=0.4263
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var _zl = E(() => {
  EJt();
  Ye();
  Vl();
  gm();
  kP();
  ((hzl = R(lt(), 1)), (I1e = R(rt(), 1)), (ame = R(se(), 1)));
});
function Szl(e) {
  let t = bzl.c(15),
    {
      directoryPath: n,
      onRemove: r,
      onCancel: o,
      permissionContext: s,
      setPermissionContext: i,
    } = e,
    a;
  if (t[0] !== n || t[1] !== r || t[2] !== s || t[3] !== i)
    ((a = () => {
      let f = My(s, {
        type: "removeDirectories",
        directories: [n],
        destination: "session",
      });
      (i(f), r());
    }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = s),
      (t[3] = i),
      (t[4] = a));
  else a = t[4];
  let l = a,
    c;
  if (t[5] !== n)
    ((c = dYe.jsx(U, {
      marginX: 2,
      flexDirection: "column",
      children: dYe.jsx(w, {
        bold: true,
        children: n,
      }),
    })),
      (t[5] = n),
      (t[6] = c));
  else c = t[6];
  let u;
  if (t[7] === Symbol.for("react.memo_cache_sentinel"))
    ((u = dYe.jsx(w, {
      children: "Claude Code will no longer have access to files in this directory.",
    })),
      (t[7] = u));
  else u = t[7];
  let d;
  if (t[8] !== l || t[9] !== o)
    ((d = dYe.jsx(Kl, {
      onConfirm: l,
      onCancel: o,
    })),
      (t[8] = l),
      (t[9] = o),
      (t[10] = d));
  else d = t[10];
  let p;
  if (t[11] !== o || t[12] !== c || t[13] !== d)
    ((p = dYe.jsxs(zn, {
      title: "Remove directory from workspace?",
      onCancel: o,
      color: "error",
      children: [c, u, d],
    })),
      (t[11] = o),
      (t[12] = c),
      (t[13] = d),
      (t[14] = p));
  else p = t[14];
  return p;
}
var bzl, dYe;
