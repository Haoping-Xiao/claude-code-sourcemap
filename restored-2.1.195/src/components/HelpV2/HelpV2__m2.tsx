// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module l8o
// matched 2.1.88 source: src/components/HelpV2/HelpV2.tsx
// class=modified (alt of src/components/HelpV2/HelpV2.tsx)  jaccard=0.0393  score=0.0838  fileCov=0.0691
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
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
    if (
      ((t = {
        auto: mm(),
      }),
      cL())
    )
      t.team = cT();
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
    messagingSocketPath: n,
  };
}
function HelpV2(t0) {
  let t = {
    type: "system",
    subtype: "init",
    cwd: t0.cwd,
    session_id: t0.sessionId,
    tools: t0.tools.map((n) => KZt(n.name)),
    mcp_servers: t0.mcpClients.map((n) => ({
      name: n.name,
      status: n.type,
    })),
    model: t0.model,
    permissionMode: t0.permissionMode,
    slash_commands: t0.commands.filter((n) => n.userInvocable !== false).map((n) => n.name),
    apiKeySource: t0.apiKeySource,
    betas: t0.betas,
    claude_code_version: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
    }.VERSION,
    output_style: t0.outputStyle,
    agents: t0.agents.map((n) => n.agentType),
    skills: t0.skills.filter((n) => n.userInvocable !== false).map((n) => n.name),
    plugins: t0.plugins.map((n) => ({
      name: n.name,
      path: n.path,
      source: n.source,
    })),
    ...(t0.pluginErrors.length > 0 && {
      plugin_errors: t0.pluginErrors.map((n) => ({
        ...n,
      })),
    }),
    ...(t0.pluginWarnings.length > 0 && {
      plugin_warnings: t0.pluginWarnings.map((n) => ({
        ...n,
      })),
    }),
    analytics_disabled: t0.analyticsDisabled,
    product_feedback_disabled: t0.productFeedbackDisabled,
    uuid: Lfc.randomUUID(),
  };
  if (t0.memoryPaths)
    t.memory_paths = {
      ...t0.memoryPaths,
    };
  return ((t.fast_mode_state = t0.fastModeState), t);
}
function pur(e, t) {
  Zc("init_emit_ms", performance.now() - t, t);
  let n = dZa();
  if (n) e.startup_timing = n;
}
var Lfc;
