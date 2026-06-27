// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module A5e
// matched 2.1.88 source: src/utils/plugins/loadPluginHooks.ts
// class=partial  jaccard=0.1946  score=0.4585  fileCov=0.2527
// note: low-confidence suggestion: src/utils/plugins/loadPluginHooks.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var A5e = E(() => {
  Qi();
  ft();
  dn();
  je();
  fn();
  Eue();
  dr();
  Jt();
  o8();
  Xh();
  bca = Cn(async () => {
    let {
        enabled: e
      } = await mp(),
      t = {
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
        MessageDisplay: []
      },
      n = R7(),
      r = n === null ? e : [...e.filter(i => n.has(i.source)), ...e.filter(i => !n.has(i.source))],
      o = new Set();
    for (let i of r) {
      if (!i.hooksConfig) continue;
      if (o.has(i.name)) {
        T(`Skipping duplicate hook registration for plugin "${i.name}" from ${i.source} - already registered from another source`);
        continue;
      }
      o.add(i.name), T(`Loading hooks from plugin: ${i.name}`);
      let a = xcp(i);
      for (let l of Object.keys(a)) t[l].push(...a[l]);
    }
    vsn(), Dge(t);
    let s = Object.values(t).reduce((i, a) => i + a.reduce((l, c) => l + c.hooks.length, 0), 0);
    T(`Registered ${s} hooks from ${e.length} plugins`), xe("plugin_load_hooks");
  });
});
var rF;