// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uQi
// matched 2.1.88 source: src/utils/cronTasks.ts
// class=partial  jaccard=0.1074  score=1  fileCov=0.1074
// note: low-confidence suggestion: src/utils/cronTasks.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var uQi = E(() => {
  IXi();
  $Xi();
  BXi();
  zXi();
  RFt();
  Oto();
  vJi();
  DJi();
  GJi();
  SWe();
  Xto();
  Blt();
  qJi();
  Jto = R(require("fs")), XJi = require("crypto"), t$n = require("os"), r$n = new PFt(), o$n = new $to();
  cS = {
    initialize: VQd,
    isSupportedPlatform: QJi,
    isSandboxingEnabled: zQd,
    checkDependencies: eQi,
    getFsReadConfig: KQd,
    getFsWriteConfig: YQd,
    getNetworkRestrictionConfig: XQd,
    getAllowUnixSockets: nQi,
    getAllowLocalBinding: rQi,
    getAllowMachLookup: oQi,
    getIgnoreViolations: sQi,
    getEnableWeakerNestedSandbox: iQi,
    getProxyPort: Qto,
    getProxyAuthToken: nZd,
    getSocksProxyPort: Zto,
    getLinuxHttpSocketPath: aQi,
    getLinuxSocksSocketPath: lQi,
    waitForNetworkInitialization: eno,
    wrapWithSandbox: cQi,
    wrapWithSandboxArgv: rZd,
    cleanupAfterCommand: iZd,
    reset: tno,
    getMitmCA: () => fue,
    getSentinelRegistry: () => o$n,
    getSandboxViolationStore: cZd,
    annotateStderrWithSandboxFailures: uZd,
    getLinuxGlobPatternWarnings: dZd,
    getConfig: oZd,
    updateConfig: sZd
  };
});
function EWe(e, t) {
  if (pZd(e)) return e;
  if (typeof t === "number") t = BigInt(t);
  if (e instanceof Error) return new s$n(e.message, e, t);
  if (typeof e === "string") return new s$n(e, void 0, t);
  return new s$n(`${e}`, e, t);
}
function pZd(e) {
  return typeof e === "object" && e !== null && dQi in e;
}
var dQi, s$n;