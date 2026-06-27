// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NDe
// matched 2.1.88 source: src/utils/agentSwarmsEnabled.ts
// class=modified  jaccard=0.4488  score=0.6265  fileCov=0.6128
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: isAgentSwarmsEnabled, captureTeammateModeSnapshotIfEnabled
function isAgentTeamsFlagSet() {
  return process.argv.includes("--agent-teams");
}
function isAgentSwarmsEnabled() {
  if (!ut(process.env.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS) && !isAgentTeamsFlagSet()) return false;
  if (!at("tengu_amber_flint", true)) return false;
  return true;
}
async function captureTeammateModeSnapshotIfEnabled() {
  if (!isAgentSwarmsEnabled()) return;
  let { captureTeammateModeSnapshot: e } = await Promise.resolve().then(() => (NDe(), ago));
  e();
}
