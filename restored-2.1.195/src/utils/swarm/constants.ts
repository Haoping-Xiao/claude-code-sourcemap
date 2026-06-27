// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module loe
// matched 2.1.88 source: src/utils/swarm/constants.ts
// class=modified  jaccard=0.583  score=0.832  fileCov=0.6607
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function zPe(e) {
  if (!e?.excludeDefault) return false;
  return e.tips.length > 0;
}
function getSwarmSocketName() {
  return `claude-swarm-${process.pid}`;
}
var Hd = "team-lead",
  TXa,
  SWARM_SESSION_NAME = "claude-swarm",
  oht = "swarm-view",
  M6 = "tmux",
  HIDDEN_SESSION_NAME = "claude-hidden",
  KPe = "cat",
  TEAMMATE_COMMAND_ENV_VAR = "CLAUDE_CODE_TEAMMATE_COMMAND";
