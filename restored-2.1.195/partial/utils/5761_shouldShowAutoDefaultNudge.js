// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BPc
// matched 2.1.88 source: src/tools/AgentTool/agentDisplay.ts
// class=partial  jaccard=0.1861  score=0.7164  fileCov=0.2009
// note: low-confidence suggestion: src/tools/AgentTool/agentDisplay.ts; dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var BPc = E(() => {
  kt();
  O0();
  Ye();
  er();
  DE();
  dr();
  Vl();
  X0();
  $Pc = R(lt(), 1), OPc = R(rt(), 1), jNe = R(se(), 1);
});
var UPc = {};
_t(UPc, {
  shouldShowAutoDefaultNudge: () => shouldShowAutoDefaultNudge
});
function shouldShowAutoDefaultNudge() {
  {
    let e = Dt();
    if (!e.hasCompletedOnboarding || e.hasSeenAutoDefaultNudge || !at("tengu_maple_pier", !1)) return null;
    let t = yn("userSettings")?.permissions?.defaultMode,
      n = ["projectSettings", "localSettings", "flagSettings", "policySettings"].some(r => yn(r)?.permissions?.defaultMode);
    if (t && t !== "auto" && !n && Zv()) return t;
  }
  return null;
}