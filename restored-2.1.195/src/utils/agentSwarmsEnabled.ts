// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NDe
// matched 2.1.88 source: src/utils/agentSwarmsEnabled.ts
// class=modified  jaccard=0.4488  score=0.6265  fileCov=0.6128
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var VMa = {};
_t(VMa, {
  isAgentSwarmsEnabled: () => isAgentSwarmsEnabled,
  captureTeammateModeSnapshotIfEnabled: () => captureTeammateModeSnapshotIfEnabled,
});
function RRp() {
  return process.argv.includes("--agent-teams");
}
function isAgentSwarmsEnabled() {
  if (!ut(process.env.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS) && !RRp()) return false;
  if (!at("tengu_amber_flint", true)) return false;
  return true;
}
async function captureTeammateModeSnapshotIfEnabled() {
  if (!isAgentSwarmsEnabled()) return;
  let { captureTeammateModeSnapshot: e } = await Promise.resolve().then(() => (NDe(), ago));
  e();
}
