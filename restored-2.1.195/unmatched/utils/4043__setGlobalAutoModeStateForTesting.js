// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module znl
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 9 renamed
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
  _setGlobalAutoModeStateForTesting: () => xtf
});
function createAutoModeState() {
  return {
    active: !1,
    flagCli: !1,
    circuitBroken: !1,
    fromFallback: !1
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