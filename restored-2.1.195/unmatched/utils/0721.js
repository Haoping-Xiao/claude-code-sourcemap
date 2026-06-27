// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qfn
// matched 2.1.88 source: src/entrypoints/sdk/coreSchemas.ts
// class=new  jaccard=0.0558  score=0.7196  fileCov=0.057
// note: nearest: src/entrypoints/sdk/coreSchemas.ts (0.0558); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module qfn]
GO = ["PreToolUse", "PostToolUse", "PostToolUseFailure", "PostToolBatch", "Notification", "UserPromptSubmit", "UserPromptExpansion", "SessionStart", "SessionEnd", "Stop", "StopFailure", "SubagentStart", "SubagentStop", "PreCompact", "PostCompact", "PermissionRequest", "PermissionDenied", "Setup", "TeammateIdle", "TaskCreated", "TaskCompleted", "Elicitation", "ElicitationResult", "ConfigChange", "WorktreeCreate", "WorktreeRemove", "InstructionsLoaded", "CwdChanged", "FileChanged", "MessageDisplay"], nws = ["clear", "resume", "logout", "prompt_input_exit", "other", "bypass_permissions_disabled"];
function VRt(e, t, n, r) {
  let o = r?.mtime ?? e?.mtime ?? 0,
    s = e !== void 0 ? {
      sessionId: e.sessionId,
      mtime: o,
      data: {
        ...e.data
      }
    } : {
      sessionId: t.sessionId,
      mtime: o,
      data: {}
    },
    i = s.data;
  for (let a of n) {
    let l = bOu(a.timestamp);
    if (i.isSidechain === void 0) i.isSidechain = a.isSidechain === true;
    if (i.createdAt === void 0 && l !== void 0) i.createdAt = l;
    if (i.cwd === void 0) {
      let c = a.cwd;
      if (typeof c === "string" && c) i.cwd = c;
    }
    SOu(i, a);
    for (let [c, u] of Object.entries(yOu)) {
      let d = a[c];
      if (typeof d === "string") i[u] = d;
    }
    if (a.type === "tag") {
      let c = a.tag;
      if (typeof c === "string" && c) i.tag = c;else delete i.tag;
    }
  }
  return s;
}
function rws(e, t) {
  let n = e.data;
  if (n.isSidechain === true) return null;
  let r = yCe(n.firstPromptLocked === true ? n.firstPrompt : n.commandFallback) || void 0,
    o = yCe(n.customTitle) || yCe(n.aiTitle) || void 0,
    s = o || yCe(n.lastPrompt) || yCe(n.summaryHint) || r;
  if (!s) return null;
  return {
    sessionId: e.sessionId,
    summary: s,
    lastModified: e.mtime,
    fileSize: void 0,
    customTitle: o,
    firstPrompt: r,
    gitBranch: yCe(n.gitBranch) || void 0,
    cwd: yCe(n.cwd) || t || void 0,
    tag: yCe(n.tag) || void 0,
    createdAt: _Ou(n.createdAt)
  };
}
function yCe(e) {
  return typeof e === "string" ? e : void 0;
}
function _Ou(e) {
  return typeof e === "number" ? e : void 0;
}
function bOu(e) {
  if (typeof e !== "string") return;
  let t = Date.parse(e);
  return Number.isNaN(t) ? void 0 : t;
}
function SOu(e, t) {
  if (e.firstPromptLocked) return;
  let n = {
      commandFallback: e.commandFallback ?? ""
    },
    r = sRt(t, n);
  if (n.commandFallback && !e.commandFallback) e.commandFallback = n.commandFallback;
  if (r !== void 0) e.firstPrompt = r, e.firstPromptLocked = true;
}
var yOu;