// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module q0
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0099  score=0.3592  fileCov=0.01
// note: nearest: src/cli/print.ts (0.0099); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module q0] deps: services/analytics/index.ts, utils/telemetry/betaSessionTracing.ts, utils/debug.ts, fb, utils/shell/prefix.ts, services/api/logging.ts, tasks/LocalShellTask/killShellTasks.ts, utils/hooks/registerFrontmatterHooks.ts, screens/REPL.tsx, utils/debug.ts, utils/claudemd.ts, utils/messages.ts, utils/agentContext.ts, utils/forkedAgent.ts, utils/markdownConfigLoader.ts, utils/plans.ts, utils/mcpOutputStorage.ts, utils/sessionUrl.ts
hkl = require("crypto");
_kl = ["frameUrls"];
function Fr(e) {
  let t = e.getAppState().toolPermissionContext,
    n = e.permissionLayers;
  if (!n) return t;
  let r = n.findLast(o => o.kind === "working_directory");
  for (let o of n) switch (o.kind) {
    case "allowed_tools":
      t = sZn(t, [...o.allowedTools]);
      break;
    case "disallowed_tools":
      t = iZn(t, [...o.disallowedTools]);
      break;
    case "avoid_prompts":
      if (!t.shouldAvoidPermissionPrompts) t = {
        ...t,
        shouldAvoidPermissionPrompts: true
      };
      break;
    case "permission_mode":
      {
        if (o.mode === "bypassPermissions" && (wU() || !t.isBypassPermissionsModeAvailable)) break;
        t = {
          ...t,
          mode: o.mode
        };
        break;
      }
    case "working_directory":
      if (o === r && !t.additionalWorkingDirectories.has(o.directory)) t = {
        ...t,
        additionalWorkingDirectories: new Map([...t.additionalWorkingDirectories, [o.directory, {
          path: o.directory,
          source: "session"
        }]])
      };
      break;
    case "effort":
    case "model":
    case "max_thinking_tokens":
    case "flag_settings":
      break;
  }
  return t;
}
function gg(e) {
  let t = e.getAppState().effortValue,
    n = e.permissionLayers;
  if (!n) return t;
  for (let r of n) if (r.kind === "effort") t = r.effort;
  return t;
}
function nq(e) {
  let t = e.options.mainLoopModel;
  for (let n of e.permissionLayers ?? []) if (n.kind === "model") t = n.mainLoopModel;
  return t;
}
function Zxl(e) {
  let t = e.options.thinkingConfig;
  for (let n of e.permissionLayers ?? []) if (n.kind === "max_thinking_tokens") t = bkl(n.maxThinkingTokens);
  return t;
}
function bkl(e) {
  return e === 0 ? {
    type: "disabled"
  } : {
    type: "enabled",
    budgetTokens: e
  };
}
function g7n(e) {
  return e.getAppState().ultracode === true;
}
function nKt(e, t) {
  if (t.length === 0) return e;
  let n = e.permissionLayers ? [...e.permissionLayers, ...t] : [...t],
    r;
  for (let i = t.length - 1; i >= 0; i--) {
    let a = t[i];
    if (a.kind === "model") {
      r = a.mainLoopModel;
      break;
    }
  }
  let o;
  for (let i = t.length - 1; i >= 0; i--) {
    let a = t[i];
    if (a.kind === "max_thinking_tokens") {
      o = bkl(a.maxThinkingTokens);
      break;
    }
  }
  return {
    ...e,
    permissionLayers: n,
    ...((r !== void 0 || o !== void 0) && {
      options: {
        ...e.options,
        ...(r !== void 0 && {
          mainLoopModel: r
        }),
        ...(o !== void 0 && {
          thinkingConfig: o
        })
      }
    })
  };
}