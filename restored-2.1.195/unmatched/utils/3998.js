// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module X8n
// matched 2.1.88 source: src/components/permissions/ExitPlanModePermissionRequest/ExitPlanModePermissionRequest.tsx
// class=new  jaccard=0.0275  score=0.8539  fileCov=0.0276
// note: nearest: src/components/permissions/ExitPlanModePermissionRequest/ExitPlanModePermissionRequest.tsx (0.0275); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var X8n = E(() => {
  Rm();
  At();
  $el = require("fs/promises");
});
function Q4(e) {
  let t = Bel.c(6),
    {
      children: n,
      paddingX: r,
      marginTop: o,
      marginBottom: s
    } = e,
    i = r === void 0 ? 1 : r,
    l = Sd() ? void 0 : "dashed",
    c;
  if (t[0] !== n || t[1] !== s || t[2] !== o || t[3] !== i || t[4] !== l) c = Uel.jsx(U, {
    borderStyle: l,
    borderColor: "subtle",
    borderLeft: false,
    borderRight: false,
    flexDirection: "column",
    overflow: "hidden",
    paddingX: i,
    marginTop: o,
    marginBottom: s,
    children: n
  }), t[0] = n, t[1] = s, t[2] = o, t[3] = i, t[4] = l, t[5] = c;else c = t[5];
  return c;
}
var Bel, Uel;