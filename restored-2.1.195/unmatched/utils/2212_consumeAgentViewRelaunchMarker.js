// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kkn
// matched 2.1.88 source: node_modules/@modelcontextprotocol/sdk/dist/esm/client/stdio.js
// class=new  jaccard=0.0205  score=0.0491  fileCov=0.0341
// note: nearest: node_modules/@modelcontextprotocol/sdk/dist/esm/client/stdio.js (0.0205); dir inferred from dep-graph -> utils; 15 renamed
// ─────────────────────────────────────────────────────────────────────────
var Rkn = {};
_t(Rkn, {
  shouldShowLaunchComposer: () => shouldShowLaunchComposer,
  isLaunchComposerEnabled: () => isLaunchComposerEnabled,
  isDaemonWorkerRegistryEnabled: () => isDaemonWorkerRegistryEnabled,
  isDaemonServiceRecalled: () => isDaemonServiceRecalled,
  isDaemonServiceInstallEnabled: () => isDaemonServiceInstallEnabled,
  isDaemonCliEnabled: () => isDaemonCliEnabled,
  isAgentsFleetEnabled: () => isAgentsFleetEnabled,
  fleetGateRejected: () => fleetGateRejected,
  ensureFleetGateHydrated: () => ensureFleetGateHydrated,
  daemonHint: () => daemonHint,
  daemonColdStartGbDefault: () => daemonColdStartGbDefault,
  consumeAgentViewRelaunchMarker: () => consumeAgentViewRelaunchMarker,
  bgSupervisorNounCap: () => bgSupervisorNounCap,
  bgSupervisorNoun: () => bgSupervisorNoun,
  AGENT_VIEW_RELAUNCH_ENV_KEY: () => AGENT_VIEW_RELAUNCH_ENV_KEY
});
function isAgentsFleetEnabled() {
  return !Bst();
}
async function ensureFleetGateHydrated(e = {}) {
  if (a0() === null) {
    let {
      getSettingsWithErrors: t
    } = await Promise.resolve().then(() => (dr(), EY));
    t();
  }
  if (e.kickGrowthBook !== false) iL().catch(() => {});
}
function isDaemonCliEnabled() {
  return isAgentsFleetEnabled();
}
function isDaemonWorkerRegistryEnabled() {
  return false;
}
function isDaemonServiceInstallEnabled() {
  return at("tengu_amber_anchor", false);
}
function isDaemonServiceRecalled() {
  return at("tengu_copper_lantern", false);
}
function daemonColdStartGbDefault() {
  return at("tengu_quiet_harbor", false) ? "ask" : "transient";
}
function bgSupervisorNoun() {
  return isDaemonServiceInstallEnabled() ? "daemon" : "background service";
}
function bgSupervisorNounCap() {
  return Cx(bgSupervisorNoun());
}
function daemonHint(e) {
  return isDaemonCliEnabled() ? ` \u2014 run 'claude daemon ${e}'` : "";
}
function fleetGateRejected(e, t) {
  let n = t ?? eKr() ?? "is not available in this environment";
  process.stderr.write(`'${e}' ${n}.
`), process.exit(1);
}
function isLaunchComposerEnabled() {
  return false;
}
function shouldShowLaunchComposer(e) {
  return false;
}
function consumeAgentViewRelaunchMarker() {
  let e = ut(process.env[AGENT_VIEW_RELAUNCH_ENV_KEY]);
  return delete process.env[AGENT_VIEW_RELAUNCH_ENV_KEY], e;
}
var AGENT_VIEW_RELAUNCH_ENV_KEY = "CLAUDE_CODE_AGENT_VIEW_RELAUNCH";