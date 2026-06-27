// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BPc
// matched 2.1.88 source: src/utils/settings/settings.ts
// class=new  jaccard=0.0207  score=0.4164  fileCov=0.0213
// note: nearest: src/utils/settings/settings.ts (0.0207); dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module BPc] deps: kt, O0, Ye, er, DE, dr, Vl, X0
$Pc = R(lt(), 1), OPc = R(rt(), 1), jNe = R(se(), 1);
var UPc = {};
_t(UPc, {
  shouldShowAutoDefaultNudge: () => shouldShowAutoDefaultNudge
});
function shouldShowAutoDefaultNudge() {
  {
    let e = Dt();
    if (!e.hasCompletedOnboarding || e.hasSeenAutoDefaultNudge || !at("tengu_maple_pier", false)) return null;
    let t = yn("userSettings")?.permissions?.defaultMode,
      n = ["projectSettings", "localSettings", "flagSettings", "policySettings"].some(r => yn(r)?.permissions?.defaultMode);
    if (t && t !== "auto" && !n && Zv()) return t;
  }
  return null;
}