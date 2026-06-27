// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module XVo
// matched 2.1.88 source: src/main.tsx
// class=new  jaccard=0.0018  score=0.6938  fileCov=0.0018
// note: nearest: src/main.tsx (0.0018); dir inferred from dep-graph -> utils; 4 renamed
// ─────────────────────────────────────────────────────────────────────────
var XVo = E(() => {
  je();
  vn();
  dr();
  kcr = R(Uj(), 1), Wsm = new Set(["update", "install", "doctor"]);
});
var kTe = {};
_t(kTe, {
  runFastPathPolicyHelper: () => runFastPathPolicyHelper,
  resetFastPathPolicyForTesting: () => resetFastPathPolicyForTesting,
  loadFastPathPolicy: () => loadFastPathPolicy,
  ensureFastPathSettingsLoaded: () => ensureFastPathSettingsLoaded
});
async function ensureFastPathSettingsLoaded() {
  if (JVo) return;
  JVo = !0, eEe(), await Uet(), $Me();
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
  JVo = !1, aTt = null;
}
var JVo = !1,
  aTt = null;