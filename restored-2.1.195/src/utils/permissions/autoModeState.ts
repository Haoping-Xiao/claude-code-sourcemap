// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module znl
// matched 2.1.88 source: src/utils/permissions/autoModeState.ts
// class=modified  jaccard=0.3708  score=0.3946  fileCov=0.8602
// note: deminified; 9 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var znl = E(() => {
  AN();
  ql();
  lwo();
  Xa();
  DE();
  Ye();
  oc();
  KI();
  HC = R(se(), 1);
});
var Ope = {};
_t(Ope, {
  setAutoModeFromFallback: () => setAutoModeFromFallback,
  setAutoModeFlagCli: () => setAutoModeFlagCli,
  setAutoModeCircuitBroken: () => setAutoModeCircuitBroken,
  setAutoModeActive: () => setAutoModeActive,
  isAutoModeFromFallback: () => isAutoModeFromFallback,
  isAutoModeCircuitBroken: () => isAutoModeCircuitBroken,
  isAutoModeActive: () => isAutoModeActive,
  getAutoModeFlagCli: () => getAutoModeFlagCli,
  createAutoModeState: () => createAutoModeState,
  _setGlobalAutoModeStateForTesting: () => xtf,
});
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
