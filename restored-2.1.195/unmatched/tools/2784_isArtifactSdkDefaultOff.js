// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZWe
// matched 2.1.88 source: src/main.tsx
// class=new  jaccard=0.0031  score=0.1823  fileCov=0.0031
// note: nearest: src/main.tsx (0.0031); dir inferred from dep-graph -> tools; 6 renamed
// ─────────────────────────────────────────────────────────────────────────
var ZWe = E(() => {
  fh();
  G1();
  wX();
  lf();
  Rct();
  lC();
  TX();
  EI();
  _m();
  u_();
  nC();
  LX();
  i$();
  jv();
  WW();
  tSe();
  RX();
  jRe = Jop("external"), aso = new Set([...jRe]);
  ejt = Qop("external"), Doa = new Set([cC, kX, yL, ZD, Ly, DI, m4, X2t]), lso = new Set([ss, QD, Ly, Ip, uC]);
});
var KOn = {};
_t(KOn, {
  isPublishToolEnabled: () => isPublishToolEnabled,
  isArtifactToolEnabled: () => isArtifactToolEnabled,
  isArtifactToolEligible: () => isArtifactToolEligible,
  isArtifactSdkDefaultOff: () => isArtifactSdkDefaultOff,
  isArtifactHardDisabled: () => isArtifactHardDisabled,
  isArtifactAdminAllowed: () => isArtifactAdminAllowed
});
function isArtifactHardDisabled() {
  return Oe.CLAUDE_CODE_DISABLE_ARTIFACT || a0()?.settings.disableArtifact === true;
}
function isArtifactSdkDefaultOff() {
  let e = Oe.CLAUDE_CODE_ENTRYPOINT;
  return RZe() || e === "claude-code-github-action" || e === "mcp" || q0t() || spn();
}
function isArtifactToolEligible() {
  if (isArtifactHardDisabled()) return false;
  if (!bo()) return false;
  if (fr() !== "firstParty") return false;
  let e = Oe.CLAUDE_CODE_ENTRYPOINT;
  if (e === "local-agent" || e?.startsWith("claude-coworker")) return false;
  if (Vi()) return false;
  if (ml(Oe.CLAUDE_CODE_ARTIFACT)) return false;
  if (!ut(Oe.CLAUDE_CODE_ARTIFACT) && isArtifactSdkDefaultOff()) return false;
  return true;
}
function isArtifactToolEnabled() {
  if (!isArtifactToolEligible()) return false;
  if (!at("tengu_cobalt_plinth", false)) return false;
  return isArtifactAdminAllowed();
}
function isArtifactAdminAllowed() {
  let e = Di();
  if (e !== "team" && e !== "enterprise" && e != null) return false;
  return Us("allow_cobalt_plinth");
}
function isPublishToolEnabled() {
  return isArtifactToolEnabled();
}