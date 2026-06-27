// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WGe
// matched 2.1.88 source: src/utils/managedEnvConstants.ts
// class=modified  jaccard=0.6377  score=0.6465  fileCov=0.9791
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var WGe = E(() => {
  ((UUt = [
    "CLAUDE_CODE_USE_BEDROCK",
    "CLAUDE_CODE_USE_VERTEX",
    "CLAUDE_CODE_USE_FOUNDRY",
    "CLAUDE_CODE_USE_ANTHROPIC_AWS",
    "CLAUDE_CODE_USE_MANTLE",
    "CLAUDE_CODE_USE_GATEWAY",
    "ANTHROPIC_FOUNDRY_RESOURCE",
    "ANTHROPIC_VERTEX_PROJECT_ID",
    "ANTHROPIC_AWS_WORKSPACE_ID",
    "CLOUD_ML_REGION",
  ]),
    (UZr = [
      "ANTHROPIC_BASE_URL",
      "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL",
      "ANTHROPIC_BEDROCK_BASE_URL",
      "ANTHROPIC_VERTEX_BASE_URL",
      "ANTHROPIC_FOUNDRY_BASE_URL",
      "ANTHROPIC_AWS_BASE_URL",
      "ANTHROPIC_BEDROCK_MANTLE_BASE_URL",
      "CLAUDE_CODE_ARTIFACTS_API_BASE_URL",
    ]),
    (FUt = [
      "ANTHROPIC_API_KEY",
      "ANTHROPIC_AUTH_TOKEN",
      "CLAUDE_CODE_OAUTH_TOKEN",
      "AWS_BEARER_TOKEN_BEDROCK",
      "ANTHROPIC_FOUNDRY_API_KEY",
      "ANTHROPIC_AWS_API_KEY",
      "ANTHROPIC_BEDROCK_MANTLE_API_KEY",
    ]),
    (FZr = [
      "CLAUDE_CODE_SKIP_BEDROCK_AUTH",
      "CLAUDE_CODE_SKIP_VERTEX_AUTH",
      "CLAUDE_CODE_SKIP_FOUNDRY_AUTH",
      "CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH",
      "CLAUDE_CODE_SKIP_MANTLE_AUTH",
    ]),
    (jZr = [
      "ANTHROPIC_MODEL",
      "ANTHROPIC_DEFAULT_FABLE_MODEL",
      "ANTHROPIC_DEFAULT_FABLE_MODEL_DESCRIPTION",
      "ANTHROPIC_DEFAULT_FABLE_MODEL_NAME",
      "ANTHROPIC_DEFAULT_FABLE_MODEL_SUPPORTED_CAPABILITIES",
      "ANTHROPIC_DEFAULT_HAIKU_MODEL",
      "ANTHROPIC_DEFAULT_HAIKU_MODEL_DESCRIPTION",
      "ANTHROPIC_DEFAULT_HAIKU_MODEL_NAME",
      "ANTHROPIC_DEFAULT_HAIKU_MODEL_SUPPORTED_CAPABILITIES",
      "ANTHROPIC_DEFAULT_OPUS_MODEL",
      "ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION",
      "ANTHROPIC_DEFAULT_OPUS_MODEL_NAME",
      "ANTHROPIC_DEFAULT_OPUS_MODEL_SUPPORTED_CAPABILITIES",
      "ANTHROPIC_DEFAULT_SONNET_MODEL",
      "ANTHROPIC_DEFAULT_SONNET_MODEL_DESCRIPTION",
      "ANTHROPIC_DEFAULT_SONNET_MODEL_NAME",
      "ANTHROPIC_DEFAULT_SONNET_MODEL_SUPPORTED_CAPABILITIES",
      "ANTHROPIC_SMALL_FAST_MODEL",
      "ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION",
      "CLAUDE_CODE_SUBAGENT_MODEL",
    ]),
    (jzi = [
      "ANTHROPIC_CUSTOM_MODEL_OPTION",
      "ANTHROPIC_CUSTOM_MODEL_OPTION_DESCRIPTION",
      "ANTHROPIC_CUSTOM_MODEL_OPTION_NAME",
      "ANTHROPIC_CUSTOM_MODEL_OPTION_SUPPORTED_CAPABILITIES",
    ]),
    (cKd = new Set([
      "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST",
      ...UUt,
      ...UZr,
      ...FUt,
      ...FZr,
      "CLAUDE_CODE_HOST_AUTH_ENV_VAR",
      "CLAUDE_CODE_SDK_HAS_HOST_AUTH_REFRESH",
      "CLAUDE_CODE_HOST_AUTH_REFRESH_TIMEOUT_MS",
      ...jZr,
      "ANTHROPIC_BEDROCK_SERVICE_TIER",
      "CLAUDE_CODE_CERT_STORE",
      "DISABLE_GROWTHBOOK",
    ])),
    (jUt = ["VERTEX_REGION_CLAUDE_"]));
  uKd = new Set(["HTTP_PROXY", "HTTPS_PROXY", "NO_PROXY"]);
  ((qzi = [
    "apiKeyHelper",
    "awsAuthRefresh",
    "awsCredentialExport",
    "fileSuggestion",
    "gcpAuthRefresh",
    "otelHeadersHelper",
    "proxyAuthHelper",
    "statusLine",
    "subagentStatusLine",
  ]),
    (ilt = new Set([
      "ANTHROPIC_BEDROCK_SERVICE_TIER",
      "ANTHROPIC_CUSTOM_HEADERS",
      "ANTHROPIC_CUSTOM_MODEL_OPTION",
      "ANTHROPIC_CUSTOM_MODEL_OPTION_DESCRIPTION",
      "ANTHROPIC_CUSTOM_MODEL_OPTION_NAME",
      "ANTHROPIC_CUSTOM_MODEL_OPTION_SUPPORTED_CAPABILITIES",
      "ANTHROPIC_DEFAULT_FABLE_MODEL",
      "ANTHROPIC_DEFAULT_FABLE_MODEL_DESCRIPTION",
      "ANTHROPIC_DEFAULT_FABLE_MODEL_NAME",
      "ANTHROPIC_DEFAULT_FABLE_MODEL_SUPPORTED_CAPABILITIES",
      "ANTHROPIC_DEFAULT_HAIKU_MODEL",
      "ANTHROPIC_DEFAULT_HAIKU_MODEL_DESCRIPTION",
      "ANTHROPIC_DEFAULT_HAIKU_MODEL_NAME",
      "ANTHROPIC_DEFAULT_HAIKU_MODEL_SUPPORTED_CAPABILITIES",
      "ANTHROPIC_DEFAULT_OPUS_MODEL",
      "ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION",
      "ANTHROPIC_DEFAULT_OPUS_MODEL_NAME",
      "ANTHROPIC_DEFAULT_OPUS_MODEL_SUPPORTED_CAPABILITIES",
      "ANTHROPIC_DEFAULT_SONNET_MODEL",
      "ANTHROPIC_DEFAULT_SONNET_MODEL_DESCRIPTION",
      "ANTHROPIC_DEFAULT_SONNET_MODEL_NAME",
      "ANTHROPIC_DEFAULT_SONNET_MODEL_SUPPORTED_CAPABILITIES",
      "ANTHROPIC_FOUNDRY_API_KEY",
      "ANTHROPIC_MODEL",
      "ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION",
      "ANTHROPIC_SMALL_FAST_MODEL",
      "AWS_DEFAULT_REGION",
      "AWS_PROFILE",
      "AWS_REGION",
      "BASH_DEFAULT_TIMEOUT_MS",
      "BASH_MAX_OUTPUT_LENGTH",
      "BASH_MAX_TIMEOUT_MS",
      "CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR",
      "CLAUDE_CODE_API_KEY_HELPER_TTL_MS",
      "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS",
      "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC",
      "CLAUDE_CODE_DISABLE_TERMINAL_TITLE",
      "CLAUDE_CODE_ENABLE_AUTO_MODE",
      "CLAUDE_CODE_ENABLE_DESIGN_SYNC",
      "CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL",
      "CLAUDE_CODE_ENABLE_TELEMETRY",
      "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS",
      "CLAUDE_CODE_IDE_SKIP_AUTO_INSTALL",
      "CLAUDE_CODE_MAX_OUTPUT_TOKENS",
      "CLAUDE_CODE_SKIP_BEDROCK_AUTH",
      "CLAUDE_CODE_SKIP_FOUNDRY_AUTH",
      "CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH",
      "CLAUDE_CODE_SKIP_MANTLE_AUTH",
      "CLAUDE_CODE_SKIP_VERTEX_AUTH",
      "CLAUDE_CODE_SUBAGENT_MODEL",
      "CLAUDE_CODE_USE_BEDROCK",
      "CLAUDE_CODE_USE_FOUNDRY",
      "CLAUDE_CODE_USE_ANTHROPIC_AWS",
      "CLAUDE_CODE_USE_GATEWAY",
      "CLAUDE_CODE_USE_MANTLE",
      "CLAUDE_CODE_USE_POWERSHELL_TOOL",
      "CLAUDE_CODE_USE_VERTEX",
      "DISABLE_AUTOUPDATER",
      "DISABLE_BUG_COMMAND",
      "DISABLE_COST_WARNINGS",
      "DISABLE_ERROR_REPORTING",
      "DISABLE_FEEDBACK_COMMAND",
      "DISABLE_GROWTHBOOK",
      "DISABLE_INSTALLATION_CHECKS",
      "DISABLE_TELEMETRY",
      "DISABLE_UPDATES",
      "ENABLE_TOOL_SEARCH",
      "MAX_MCP_OUTPUT_TOKENS",
      "MAX_THINKING_TOKENS",
      "MCP_CONNECT_TIMEOUT_MS",
      "MCP_TIMEOUT",
      "MCP_TOOL_TIMEOUT",
      "OTEL_EXPORTER_OTLP_HEADERS",
      "OTEL_EXPORTER_OTLP_LOGS_HEADERS",
      "OTEL_EXPORTER_OTLP_LOGS_PROTOCOL",
      "OTEL_EXPORTER_OTLP_METRICS_HEADERS",
      "OTEL_EXPORTER_OTLP_METRICS_PROTOCOL",
      "OTEL_EXPORTER_OTLP_PROTOCOL",
      "OTEL_EXPORTER_OTLP_TRACES_HEADERS",
      "OTEL_LOG_ASSISTANT_RESPONSES",
      "OTEL_LOG_TOOL_CONTENT",
      "OTEL_LOG_TOOL_DETAILS",
      "OTEL_LOG_USER_PROMPTS",
      "OTEL_LOGS_EXPORT_INTERVAL",
      "OTEL_LOGS_EXPORTER",
      "OTEL_METRIC_EXPORT_INTERVAL",
      "OTEL_METRICS_EXPORTER",
      "OTEL_METRICS_INCLUDE_ACCOUNT_UUID",
      "OTEL_METRICS_INCLUDE_ENTRYPOINT",
      "OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES",
      "OTEL_METRICS_INCLUDE_SESSION_ID",
      "OTEL_METRICS_INCLUDE_VERSION",
      "OTEL_RESOURCE_ATTRIBUTES",
      "OTEL_TRACES_EXPORTER",
      "USE_BUILTIN_RIPGREP",
      "VERTEX_REGION_CLAUDE_3_5_HAIKU",
      "VERTEX_REGION_CLAUDE_3_5_SONNET",
      "VERTEX_REGION_CLAUDE_3_7_SONNET",
      "VERTEX_REGION_CLAUDE_4_0_OPUS",
      "VERTEX_REGION_CLAUDE_4_0_SONNET",
      "VERTEX_REGION_CLAUDE_4_1_OPUS",
      "VERTEX_REGION_CLAUDE_4_5_OPUS",
      "VERTEX_REGION_CLAUDE_4_6_OPUS",
      "VERTEX_REGION_CLAUDE_4_7_OPUS",
      "VERTEX_REGION_CLAUDE_4_8_OPUS",
      "VERTEX_REGION_CLAUDE_FABLE_5",
      "VERTEX_REGION_CLAUDE_4_5_SONNET",
      "VERTEX_REGION_CLAUDE_4_6_SONNET",
      "VERTEX_REGION_CLAUDE_HAIKU_4_5",
    ])));
});
function Vzi(e) {
  let t = Object.keys(e).filter((r) => !RPn.has(r));
  if (t.length === 0) return e;
  T(
    `[jobs] stripped non-allowlisted providerEnv key(s) from persisted job state: ${t.join(", ")}`,
    {
      level: "warn",
    },
  );
  let n = cv(e, (r, o) => RPn.has(o));
  return Object.keys(n).length > 0 ? n : void 0;
}
function j0e(e) {
  let t = [],
    n = [];
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    if (!o.startsWith("-")) {
      n.push(o);
      continue;
    }
    let s = o.indexOf("="),
      i = s === -1 ? o : o.slice(0, s);
    if (s !== -1 && !DW.has(i) && WUt.has(i)) {
      (t.push(i), n.push(o));
      continue;
    }
    let a = s === -1 && DW.has(i),
      l = s === -1 ? WUt.has(i) || (a && e[r + 1] !== void 0) : DW.has(i),
      c = l ? t : n;
    if ((c.push(o), a && e[r + 1] !== void 0)) c.push(e[++r]);
    if (!l || (a && qGe.has(i)))
      while (e[r + 1] !== void 0 && !e[r + 1].startsWith("-")) c.push(e[++r]);
  }
  if (n.length > 0)
    T(
      `[jobs] stripped non-allowlisted respawnFlags token(s) from persisted job state: ${n.join(" ")}`,
      {
        level: "warn",
      },
    );
  return pKd(t);
}
function pKd(e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let o = e[r],
      s = o.indexOf("="),
      i = s === -1 ? o : o.slice(0, s),
      a = [o];
    if (s === -1 && DW.has(i) && e[r + 1] !== void 0) {
      if ((a.push(e[++r]), qGe.has(i)))
        while (e[r + 1] !== void 0 && !e[r + 1].startsWith("-")) a.push(e[++r]);
    }
    t.push({
      name: i,
      toks: a,
    });
  }
  let n = new Map();
  for (let r = 0; r < t.length; r++) {
    let o = t[r];
    if (DW.has(o.name) && !qGe.has(o.name) && !dKd.has(o.name)) n.set(o.name, r);
  }
  return t.filter((r, o) => (n.get(r.name) ?? o) === o).flatMap((r) => r.toks);
}
function T8(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (r === "--") {
      for (let s = n; s < e.length; s++) t.push(e[s]);
      break;
    }
    let o = r.startsWith("--") ? r.indexOf("=") : -1;
    if (o !== -1 && (DW.has(r.slice(0, o)) || GUt.has(r.slice(0, o)))) {
      t.push(r.slice(0, o + 1) + alt(r.slice(0, o), r.slice(o + 1)));
      continue;
    }
    if (/^-[a-zA-Z].+/.test(r)) {
      let s = 1;
      while (s < r.length - 1 && LPn.has(`-${r[s]}`)) s++;
      let i = `-${r[s]}`;
      if (r.length > s + 1 && (DW.has(i) || GUt.has(i))) {
        t.push(r.slice(0, s + 1) + alt(i, r.slice(s + 1)));
        continue;
      }
      if (r.length === s + 1 && s > 1 && (DW.has(i) || GUt.has(i))) {
        if ((t.push(r), DW.has(i) && e[n + 1] !== void 0)) {
          if ((t.push(alt(i, e[++n])), qGe.has(i)))
            while (e[n + 1] !== void 0 && !kPn(e[n + 1])) t.push(alt(i, e[++n]));
        } else if (GUt.has(i) && e[n + 1] !== void 0 && !kPn(e[n + 1])) t.push(tv(e[++n]));
        continue;
      }
    }
    if ((t.push(r), DW.has(r) && e[n + 1] !== void 0)) {
      if ((t.push(alt(r, e[++n])), qGe.has(r)))
        while (e[n + 1] !== void 0 && !kPn(e[n + 1])) t.push(alt(r, e[++n]));
    } else if (GUt.has(r) && e[n + 1] !== void 0 && !kPn(e[n + 1])) t.push(tv(e[++n]));
  }
  return t;
}
function alt(e, t) {
  return fKd.has(e) ? t : tv(t);
}
function kPn(e) {
  return e.length > 1 && e.startsWith("-");
}
var DW, qGe, dKd, WUt, GZr, RPn, fKd, GUt, LPn;
