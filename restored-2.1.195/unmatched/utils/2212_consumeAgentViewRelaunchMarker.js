// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kkn
// matched 2.1.88 source: src/utils/concurrentSessions.ts
// class=new  jaccard=0.0389  score=0.0983  fileCov=0.0606
// note: nearest: src/utils/concurrentSessions.ts (0.0389); dir inferred from dep-graph -> utils; 15 renamed
// ─────────────────────────────────────────────────────────────────────────
var kkn = E(() => {
  fn();
  Sx();
});
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
  if (e.kickGrowthBook !== !1) iL().catch(() => {});
}
function isDaemonCliEnabled() {
  return isAgentsFleetEnabled();
}
function isDaemonWorkerRegistryEnabled() {
  return !1;
}
function isDaemonServiceInstallEnabled() {
  return at("tengu_amber_anchor", !1);
}
function isDaemonServiceRecalled() {
  return at("tengu_copper_lantern", !1);
}
function daemonColdStartGbDefault() {
  return at("tengu_quiet_harbor", !1) ? "ask" : "transient";
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
  return !1;
}
function shouldShowLaunchComposer(e) {
  return !1;
}
function consumeAgentViewRelaunchMarker() {
  let e = ut(process.env[AGENT_VIEW_RELAUNCH_ENV_KEY]);
  return delete process.env[AGENT_VIEW_RELAUNCH_ENV_KEY], e;
}
var AGENT_VIEW_RELAUNCH_ENV_KEY = "CLAUDE_CODE_AGENT_VIEW_RELAUNCH";