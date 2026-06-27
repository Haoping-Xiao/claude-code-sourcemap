// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module l8o
// matched 2.1.88 source: src/utils/messages/systemInit.ts
// class=partial  jaccard=0.2222  score=0.4187  fileCov=0.3212
// note: low-confidence suggestion: src/utils/messages/systemInit.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module l8o] deps: ft, Xbt
Rfc = require("crypto");
function KZt(e) {
  return e === ss ? r8 : e;
}
function mTt() {
  let e = jo(),
    t;
  if (lu()) {
    if (t = {
      auto: mm()
    }, cL()) t.team = cT();
  }
  let n;
  return {
    cwd: $t(),
    sessionId: Rt(),
    apiKeySource: Ty().source,
    betas: OS(),
    outputStyle: e?.outputStyle ?? uP,
    analyticsDisabled: Rj(),
    productFeedbackDisabled: !Us("allow_product_feedback"),
    memoryPaths: t,
    messagingSocketPath: n
  };
}
function gTt(e) {
  let t = {
    type: "system",
    subtype: "init",
    cwd: e.cwd,
    session_id: e.sessionId,
    tools: e.tools.map(n => KZt(n.name)),
    mcp_servers: e.mcpClients.map(n => ({
      name: n.name,
      status: n.type
    })),
    model: e.model,
    permissionMode: e.permissionMode,
    slash_commands: e.commands.filter(n => n.userInvocable !== false).map(n => n.name),
    apiKeySource: e.apiKeySource,
    betas: e.betas,
    claude_code_version: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
    }.VERSION,
    output_style: e.outputStyle,
    agents: e.agents.map(n => n.agentType),
    skills: e.skills.filter(n => n.userInvocable !== false).map(n => n.name),
    plugins: e.plugins.map(n => ({
      name: n.name,
      path: n.path,
      source: n.source
    })),
    ...(e.pluginErrors.length > 0 && {
      plugin_errors: e.pluginErrors.map(n => ({
        ...n
      }))
    }),
    ...(e.pluginWarnings.length > 0 && {
      plugin_warnings: e.pluginWarnings.map(n => ({
        ...n
      }))
    }),
    analytics_disabled: e.analyticsDisabled,
    product_feedback_disabled: e.productFeedbackDisabled,
    uuid: Lfc.randomUUID()
  };
  if (e.memoryPaths) t.memory_paths = {
    ...e.memoryPaths
  };
  return t.fast_mode_state = e.fastModeState, t;
}
function pur(e, t) {
  Zc("init_emit_ms", performance.now() - t, t);
  let n = dZa();
  if (n) e.startup_timing = n;
}
var Lfc;