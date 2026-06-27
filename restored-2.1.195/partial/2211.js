// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Fh
// matched 2.1.88 source: src/utils/config.ts
// class=partial  jaccard=0.0808  score=0.6066  fileCov=0.0852
// note: low-confidence suggestion: src/utils/config.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Fh = E(() => {
  er();
  vf();
  dr();
  Nst = ["theme", "editorMode", "verbose", "preferredNotifChannel", "autoCompactEnabled", "autoScrollEnabled", "fileCheckpointingEnabled", "showTurnDuration", "showMessageTimestamps", "terminalProgressBarEnabled", "todoFeatureEnabled", "teammateMode", "remoteControlAtStartup", "autoUploadSessions", "inputNeededNotifEnabled", "agentPushNotifEnabled"];
});
function Bst() {
  return eKr() !== null;
}
function eKr() {
  if (ut(process.env.CLAUDE_CODE_DISABLE_AGENT_VIEW)) return "is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";
  if (a0()?.settings.disableAgentView === !0) return "is disabled by the 'disableAgentView' setting";
  return null;
}