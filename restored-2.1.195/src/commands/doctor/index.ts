// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lBl
// matched 2.1.88 source: src/commands/doctor/index.ts
// class=modified  jaccard=0.5584  score=1  fileCov=0.5584
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var lBl = E(() => {
  wr();
  ((dOf = {
    name: "doctor",
    description: "Diagnose and verify your Claude Code installation and settings",
    isEnabled: () => !Oe.DISABLE_DOCTOR_COMMAND,
    type: "local-jsx",
    immediate: !0,
    requires: {
      ink: !0,
    },
    load: () => Promise.resolve().then(() => (aBl(), sBl)),
  }),
    (XNo = dOf));
});
function cBl(e) {
  return Tu(e) !== null;
}
