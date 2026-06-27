// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module JBc
// matched 2.1.88 source: src/utils/permissions/PermissionPromptToolResultSchema.ts
// class=modified (alt of src/utils/permissions/PermissionPromptToolResultSchema.ts)  jaccard=0.1804  score=0.4216  fileCov=0.2398
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module JBc] deps: ft
((XRm = new Set([
  "interrupt",
  "set_permission_mode",
  "set_model",
  "set_max_thinking_tokens",
  "set_color",
  "mcp_toggle",
  "message_rated",
])),
  (JRm = new Set(["can_use_tool", "request_user_dialog", "elicitation"])));
function permissionPromptToolResultToPermissionDecision(e, t, n, r) {
  let o = {
    type: "permissionPromptTool",
    permissionPromptToolName: t.name,
    toolResult: e,
  };
  if (e.behavior === "allow") {
    let s = e.updatedPermissions;
    if (s) (r.setToolPermissionContext((a) => T4(a, s)), Y8(s));
    let i = Object.keys(e.updatedInput).length > 0 ? e.updatedInput : n;
    return {
      ...e,
      updatedInput: i,
      decisionReason: o,
    };
  } else if (e.behavior === "deny" && e.interrupt)
    (T(`SDK permission prompt deny+interrupt: tool=${t.name} message=${e.message}`),
      r.abortController.abort());
  return {
    ...e,
    decisionReason: o,
    decideLocation: "ask-path",
  };
}
var SNH, QBc, QRm, ZRm, unn;
