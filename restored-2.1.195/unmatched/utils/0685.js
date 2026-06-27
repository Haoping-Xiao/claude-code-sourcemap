// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module N0r
// matched 2.1.88 source: src/utils/auth.ts
// class=new  jaccard=0.0064  score=0.2997  fileCov=0.0065
// note: nearest: src/utils/auth.ts (0.0064); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module N0r] deps: QAs, nHs, fHs, gHs, wHs, kHs, ZHs, tTs, aTs, dTs
fTs = require("buffer"), mTs = R(require("path")), cfn = R(require("child_process")), pRt = R(require("process")), gTs = R(d0r(), 1);
Odg = yTs();
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