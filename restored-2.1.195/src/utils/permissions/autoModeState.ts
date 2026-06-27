// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module znl
// matched 2.1.88 source: src/utils/permissions/autoModeState.ts
// class=modified  jaccard=0.3708  score=0.3946  fileCov=0.8602
// note: deminified; 9 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: setAutoModeFromFallback, setAutoModeFlagCli, setAutoModeCircuitBroken, setAutoModeActive, isAutoModeFromFallback, isAutoModeCircuitBroken, isAutoModeActive, getAutoModeFlagCli, createAutoModeState, _setGlobalAutoModeStateForTesting
// [unwrapped __esm module znl] deps: ink/styles.ts, commands/add-dir/validation.ts, tools/ExitPlanModeTool/UI.tsx, @xmldom/xmldom/lib/entities.js, utils/permissions/PermissionMode.ts, hooks/useTerminalSize.ts, utils/nativeInstaller/download.ts, utils/permissions/filesystem.ts
HC = R(se(), 1);
function createAutoModeState() {
  return {
    active: false,
    flagCli: false,
    circuitBroken: false,
    fromFallback: false,
  };
}
function setAutoModeActive(e) {
  hAe.active = e;
}
function isAutoModeActive() {
  return hAe.active;
}
function setAutoModeFlagCli(e) {
  hAe.flagCli = e;
}
function getAutoModeFlagCli() {
  return hAe.flagCli;
}
function setAutoModeCircuitBroken(e) {
  hAe.circuitBroken = e;
}
function isAutoModeCircuitBroken() {
  return hAe.circuitBroken;
}
function setAutoModeFromFallback(e) {
  hAe.fromFallback = e;
}
function isAutoModeFromFallback() {
  return hAe.fromFallback;
}
function xtf(e) {
  hAe = e;
}
var hAe;
