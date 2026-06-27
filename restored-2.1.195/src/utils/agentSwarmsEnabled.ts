// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NDe
// matched 2.1.88 source: src/utils/agentSwarmsEnabled.ts
// class=modified  jaccard=0.6473  score=1  fileCov=0.6473
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var NDe = E(() => {
  je();
  vn();
  Fh();
});
var VMa = {};
_t(VMa, {
  isAgentSwarmsEnabled: () => isAgentSwarmsEnabled,
  captureTeammateModeSnapshotIfEnabled: () => captureTeammateModeSnapshotIfEnabled,
});
function RRp() {
  return process.argv.includes("--agent-teams");
}
function isAgentSwarmsEnabled() {
  if (!ut(process.env.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS) && !RRp()) return !1;
  if (!at("tengu_amber_flint", !0)) return !1;
  return !0;
}
async function captureTeammateModeSnapshotIfEnabled() {
  if (!isAgentSwarmsEnabled()) return;
  let { captureTeammateModeSnapshot: e } = await Promise.resolve().then(() => (NDe(), ago));
  e();
}
