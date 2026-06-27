// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module N0r
// matched 2.1.88 source: src/tools/PowerShellTool/modeValidation.ts
// class=new  jaccard=0.0248  score=0.2346  fileCov=0.027
// note: nearest: src/tools/PowerShellTool/modeValidation.ts (0.0248); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var N0r = E(() => {
  QAs();
  nHs();
  fHs();
  gHs();
  wHs();
  kHs();
  ZHs();
  tTs();
  aTs();
  dTs();
  fTs = require("buffer"), mTs = R(require("path")), cfn = R(require("child_process")), pRt = R(require("process")), gTs = R(d0r(), 1);
  Odg = yTs();
});
function p$u() {
  return false;
}
async function pv(e, t = [], n) {
  if (p$u()) {
    let r = JZe(e);
    if (r === null) throw Error(`Command '${e}' not found or is in an unsafe location (current directory)`);
    return GFe(r, t, n);
  }
  return GFe(e, t, n);
}
async function S0(e, t) {
  return GFe(e, {
    ...t,
    shell: true
  });
}
function _Ts(e, t) {
  return O0r(e, {
    ...t,
    shell: true
  });
}