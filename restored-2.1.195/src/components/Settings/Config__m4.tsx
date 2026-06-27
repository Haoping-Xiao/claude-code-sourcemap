// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Fh
// matched 2.1.88 source: src/components/Settings/Config.tsx
// class=modified (alt of src/components/Settings/Config.tsx)  jaccard=0.0249  score=0.5494  fileCov=0.0254
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Fh] deps: er, vf, dr
Nst = [
  "theme",
  "editorMode",
  "verbose",
  "preferredNotifChannel",
  "autoCompactEnabled",
  "autoScrollEnabled",
  "fileCheckpointingEnabled",
  "showTurnDuration",
  "showMessageTimestamps",
  "terminalProgressBarEnabled",
  "todoFeatureEnabled",
  "teammateMode",
  "remoteControlAtStartup",
  "autoUploadSessions",
  "inputNeededNotifEnabled",
  "agentPushNotifEnabled",
];
function Bst() {
  return eKr() !== null;
}
function eKr() {
  if (ut(process.env.CLAUDE_CODE_DISABLE_AGENT_VIEW))
    return "is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";
  if (a0()?.settings.disableAgentView === true)
    return "is disabled by the 'disableAgentView' setting";
  return null;
}
