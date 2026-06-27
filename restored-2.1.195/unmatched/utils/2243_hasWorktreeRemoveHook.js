// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PM
// matched 2.1.88 source: src/utils/plugins/loadPluginHooks.ts
// class=new  jaccard=0.0491  score=0.631  fileCov=0.0505
// note: nearest: src/utils/plugins/loadPluginHooks.ts (0.0491); dir inferred from dep-graph -> utils; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var PM = E(() => {
  fn();
  L7();
  dr();
  Sx();
  _Ni = new Map();
});
var jKr = {};
_t(jKr, {
  hasWorktreeRemoveHook: () => hasWorktreeRemoveHook,
  hasWorktreeCreateHook: () => hasWorktreeCreateHook
});
function hasWorktreeCreateHook() {
  if (lc("hooks")) return false;
  let e = CU()?.WorktreeCreate;
  if (e && e.length > 0) return true;
  if (!N_()) {
    let o = eG()?.WorktreeCreate;
    if (o && o.length > 0) return true;
  }
  let t = U2()?.WorktreeCreate;
  if (!t || t.length === 0) return false;
  let n = N_(),
    r = n && !Tl() ? R7() : null;
  return t.some(o => !(n && "pluginRoot" in o && !r?.has(o.pluginId)));
}
function hasWorktreeRemoveHook() {
  if (lc("hooks")) return false;
  let e = CU()?.WorktreeRemove;
  if (e && e.length > 0) return true;
  if (!N_()) {
    let o = eG()?.WorktreeRemove;
    if (o && o.length > 0) return true;
  }
  let t = U2()?.WorktreeRemove;
  if (!t || t.length === 0) return false;
  let n = N_(),
    r = n && !Tl() ? R7() : null;
  return t.some(o => !(n && "pluginRoot" in o && !r?.has(o.pluginId)));
}