// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WAt
// matched 2.1.88 source: src/utils/hooks/hooksConfigManager.ts
// class=partial  jaccard=0.2224  score=0.9044  fileCov=0.2278
// note: low-confidence suggestion: src/utils/hooks/hooksConfigManager.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module WAt] deps: ft, vf, dr, pQ
sKl = require("path");
function uKl(e, t) {
  let n = {
      PreToolUse: {},
      PostToolUse: {},
      PostToolUseFailure: {},
      PostToolBatch: {},
      PermissionDenied: {},
      Notification: {},
      UserPromptSubmit: {},
      UserPromptExpansion: {},
      SessionStart: {},
      SessionEnd: {},
      Stop: {},
      StopFailure: {},
      SubagentStart: {},
      SubagentStop: {},
      PreCompact: {},
      PostCompact: {},
      PermissionRequest: {},
      Setup: {},
      TeammateIdle: {},
      TaskCreated: {},
      TaskCompleted: {},
      Elicitation: {},
      ElicitationResult: {},
      ConfigChange: {},
      WorktreeCreate: {},
      WorktreeRemove: {},
      InstructionsLoaded: {},
      CwdChanged: {},
      FileChanged: {},
      MessageDisplay: {}
    },
    r = Dsr(t);
  iKl(e).forEach(s => {
    let i = n[s.event];
    if (i) {
      let a = r[s.event].matcherMetadata !== void 0 ? s.matcher || "" : "";
      if (!i[a]) i[a] = [];
      i[a].push(s);
    }
  });
  let o = U2();
  if (o) for (let [s, i] of Object.entries(o)) {
    let a = s,
      l = n[a];
    if (!l) continue;
    for (let c of i) {
      let u = c.matcher || "";
      if ("pluginRoot" in c) {
        l[u] ??= [];
        for (let d of c.hooks) l[u].push({
          event: a,
          config: d,
          matcher: c.matcher,
          source: "pluginHook",
          pluginName: c.pluginId
        });
      }
    }
  }
  return n;
}
function dKl(e, t) {
  let n = Object.keys(e[t] || {});
  return cKl(n, e, t);
}
function pKl(e, t, n) {
  let r = n ?? "";
  return e[t]?.[r] ?? [];
}
function HJt(e, t) {
  return Dsr(t)[e].matcherMetadata;
}
var Dsr;