// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lBl
// matched 2.1.88 source: src/commands/doctor/index.ts
// class=modified  jaccard=0.4453  score=0.681  fileCov=0.5626
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module lBl] deps: wr
((dOf = {
  name: "doctor",
  description: "Diagnose and verify your Claude Code installation and settings",
  isEnabled: () => !Oe.DISABLE_DOCTOR_COMMAND,
  type: "local-jsx",
  immediate: true,
  requires: {
    ink: true,
  },
  load: () => Promise.resolve().then(() => (aBl(), sBl)),
}),
  (XNo = dOf));
function cBl(e) {
  return Tu(e) !== null;
}
