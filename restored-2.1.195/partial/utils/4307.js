// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cAe
// matched 2.1.88 source: src/utils/swarm/teammateLayoutManager.ts
// class=partial  jaccard=0.2227  score=0.9289  fileCov=0.2265
// note: low-confidence suggestion: src/utils/swarm/teammateLayoutManager.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module cAe] deps: services/analytics/index.ts, dn, utils/debug.ts, utils/platform.ts, utils/plugins/installCounts.ts, utils/swarm/backends/it2Setup.ts, E0o, utils/swarm/backends/TmuxBackend.ts, utils/agentSwarmsEnabled.ts
vQ = Hhl();
async function R0o() {
  return (await A$e()).backend;
}
async function Chl() {
  let {
    isInsideTmux: e
  } = await Promise.resolve().then(() => (qJ(), AHo));
  return e();
}
async function Ihl(e, t) {
  return (await R0o()).createTeammatePaneInSwarmView(e, t);
}
async function xhl(e, t = false) {
  return (await R0o()).enablePaneBorderStatus(e, t);
}
async function khl(e, t, n = false) {
  return (await R0o()).sendCommandToPane(e, t, n);
}