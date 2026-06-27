// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module XVo
// matched 2.1.88 source: src/main.tsx
// class=new  jaccard=0.0023  score=0.3145  fileCov=0.0023
// note: nearest: src/main.tsx (0.0023); dir inferred from dep-graph -> utils; 4 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: runFastPathPolicyHelper, resetFastPathPolicyForTesting, loadFastPathPolicy, ensureFastPathSettingsLoaded
// [unwrapped __esm module XVo] deps: je, vn, dr
kcr = R(Uj(), 1), Wsm = new Set(["update", "install", "doctor"]);
var kTe = {};
async function ensureFastPathSettingsLoaded() {
  if (JVo) return;
  JVo = true, eEe(), await Uet(), $Me();
  let e = iuc();
  if (e) process.stderr.write(`${e}
`), process.exit(1);
}
async function runFastPathPolicyHelper() {
  if (aTt) return aTt.error;
  if (aTt = {
    error: null
  }, aTt.error = await Emn(pLt(), Wet()), Fae()) $Me();
  return aTt.error;
}
async function loadFastPathPolicy() {
  return await ensureFastPathSettingsLoaded(), runFastPathPolicyHelper();
}
function resetFastPathPolicyForTesting() {
  JVo = false, aTt = null;
}
var JVo = false,
  aTt = null;