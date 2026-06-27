// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hmc
// matched 2.1.88 source: src/commands/plugin/PluginOptionsDialog.tsx
// class=new  jaccard=0.0459  score=0.1699  fileCov=0.0591
// note: nearest: src/commands/plugin/PluginOptionsDialog.tsx (0.0459); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module hmc] deps: qNt, HI
vur = R(rt(), 1);
function _mc(e) {
  let t = ymc.c(7),
    {
      summary: n,
      carryOverCount: r,
      onConfirm: o,
      onCancel: s
    } = e,
    i = r > 0 ? ` ${r} ${r === 1 ? "task carries" : "tasks carry"} over to the background session.` : "",
    a = `${n} running \u2014 they will be stopped.${i}`,
    l;
  if (t[0] !== s || t[1] !== o) l = A8o.jsx(Kl, {
    confirmLabel: "Background anyway (tasks will be stopped)",
    cancelLabel: "Stay",
    onConfirm: o,
    onCancel: s
  }), t[0] = s, t[1] = o, t[2] = l;else l = t[2];
  let c;
  if (t[3] !== s || t[4] !== a || t[5] !== l) c = A8o.jsx(zn, {
    title: "Background this session?",
    subtitle: a,
    onCancel: s,
    children: l
  }), t[3] = s, t[4] = a, t[5] = l, t[6] = c;else c = t[6];
  return c;
}
var ymc, A8o;