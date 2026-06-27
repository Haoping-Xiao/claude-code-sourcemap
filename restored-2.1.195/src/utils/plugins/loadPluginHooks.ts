// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jjt
// matched 2.1.88 source: src/utils/plugins/loadPluginHooks.ts
// class=modified  jaccard=0.5719  score=0.8234  fileCov=0.6518
// note: deminified; 6 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var jjt = E(() => {
  Ece();
  ft();
  dn();
  Rm();
  fd();
  je();
  At();
  sp();
  E5e();
  PM();
  dNn = require("path");
  ((pNn = Icp()),
    (hca = pNn.initialize),
    (_ao = pNn.setEnvHookNotifier),
    (yca = pNn.updateWatchPaths),
    (_ca = pNn.onCwdChanged));
});
var Aao = {};
_t(Aao, {
  setupPluginHookHotReload: () => setupPluginHookHotReload,
  resetHotReloadState: () => resetHotReloadState,
  pruneRemovedPluginHooks: () => pruneRemovedPluginHooks,
  loadPluginHooks: () => loadPluginHooks,
  getPluginAffectingSettingsSnapshot: () => getPluginAffectingSettingsSnapshot,
  clearPluginHookCache: () => clearPluginHookCache,
});
function xcp(e) {
  let t = {
    PreToolUse: [],
    PostToolUse: [],
    PostToolUseFailure: [],
    PostToolBatch: [],
    PermissionDenied: [],
    Notification: [],
    UserPromptSubmit: [],
    UserPromptExpansion: [],
    SessionStart: [],
    SessionEnd: [],
    Stop: [],
    StopFailure: [],
    SubagentStart: [],
    SubagentStop: [],
    PreCompact: [],
    PostCompact: [],
    PermissionRequest: [],
    Setup: [],
    TeammateIdle: [],
    TaskCreated: [],
    TaskCompleted: [],
    Elicitation: [],
    ElicitationResult: [],
    ConfigChange: [],
    WorktreeCreate: [],
    WorktreeRemove: [],
    InstructionsLoaded: [],
    CwdChanged: [],
    FileChanged: [],
    MessageDisplay: [],
  };
  if (!e.hooksConfig) return t;
  for (let [n, r] of Object.entries(e.hooksConfig)) {
    let o = n;
    if (!t[o]) continue;
    for (let s of r)
      if (s.hooks.length > 0)
        t[o].push({
          matcher: s.matcher,
          hooks: s.hooks,
          pluginRoot: e.path,
          pluginName: e.name,
          pluginId: e.source,
        });
  }
  return t;
}
async function loadPluginHooks() {
  if (Tl()) {
    T("Safe mode: skipping plugin hook registration");
    return;
  }
  await bca();
}
function clearPluginHookCache() {
  bca.cache?.clear?.();
}
async function pruneRemovedPluginHooks() {
  if (!U2()) return;
  let { enabled: e } = await mp(),
    t = new Set(e.map((o) => o.path)),
    n = U2();
  if (!n) return;
  let r = {};
  for (let [o, s] of Object.entries(n)) {
    let i = s.filter((a) => "pluginRoot" in a && t.has(a.pluginRoot));
    if (i.length > 0) r[o] = i;
  }
  (vsn(), Dge(r));
}
function resetHotReloadState() {
  ((bao = false), (fNn = void 0));
}
function getPluginAffectingSettingsSnapshot() {
  let e = jo(),
    t = yn("policySettings"),
    n = (r) => (r ? Object.fromEntries(Object.entries(r).sort()) : {});
  return De({
    enabledPlugins: n(e.enabledPlugins),
    extraKnownMarketplaces: n(e.extraKnownMarketplaces),
    strictKnownMarketplaces: t?.strictKnownMarketplaces ?? [],
    blockedMarketplaces: t?.blockedMarketplaces ?? [],
    disableSideloadFlags: t?.disableSideloadFlags === true,
  });
}
function setupPluginHookHotReload() {
  if (bao) return;
  ((bao = true),
    (fNn = getPluginAffectingSettingsSnapshot()),
    n$.subscribe((e) => {
      if (e === "policySettings") {
        let t = getPluginAffectingSettingsSnapshot();
        if (t === fNn) {
          T("Plugin hooks: skipping reload, plugin-affecting settings unchanged");
          return;
        }
        ((fNn = t),
          T("Plugin hooks: reloading due to plugin-affecting settings change"),
          PI("loadPluginHooks: plugin-affecting settings changed"),
          clearPluginHookCache(),
          loadPluginHooks());
      }
    }));
}
var bao = false,
  fNn,
  bca;
