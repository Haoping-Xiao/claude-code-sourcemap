// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Eae
// matched 2.1.88 source: src/utils/auth.ts
// class=modified (alt of src/utils/auth.ts)  jaccard=0.0218  score=0.1109  fileCov=0.0264
// note: deminified; 48 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: USE_STAGING_OAUTH, USE_LOCAL_OAUTH, MCP_XAA_IDP_CLIENT_SECRET, MCP_CLIENT_SECRET, ENVIRONMENT_SERVICE_KEY, CLAUDE_TRUSTED_DEVICE_TOKEN, CLAUDE_SESSION_INGRESS_TOKEN_FILE, CLAUDE_LOCAL_OAUTH_CONSOLE_BASE, CLAUDE_LOCAL_OAUTH_APPS_BASE, CLAUDE_LOCAL_OAUTH_API_BASE, CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR, CLAUDE_CODE_USER_EMAIL, CLAUDE_CODE_SUBSCRIPTION_TYPE, CLAUDE_CODE_SKIP_VERTEX_AUTH, CLAUDE_CODE_SKIP_MANTLE_AUTH, CLAUDE_CODE_SKIP_FOUNDRY_AUTH, CLAUDE_CODE_SKIP_BEDROCK_AUTH, …
// [unwrapped __esm module Eae] deps: zb, fn
((Mmu = ve(() => dt.preprocess(y0t, dt.string().optional().transform(Pmu)))),
  ($mu = ve(() =>
    dt.preprocess(
      y0t,
      dt
        .string()
        .optional()
        .transform((e) => ut(e)),
    ),
  )),
  (Omu = ve(() =>
    dt.preprocess(
      y0t,
      dt
        .string()
        .optional()
        .transform((e) => {
          if (ut(e)) return true;
          if (ml(e)) return false;
          return;
        }),
    ),
  )),
  (Nmu = ve(() => Pms())));
Fe = {
  str: () => Mmu(),
  bool: () => $mu(),
  triBool: () => Omu(),
  int: (e) => (e ? Pms(e) : Nmu()),
  enum: (e) =>
    dt.preprocess(
      y0t,
      dt
        .string()
        .optional()
        .transform((t) => (t !== void 0 && e.includes(t.trim()) ? t.trim() : void 0)),
    ),
};
var BIr = {};
var ANTHROPIC_API_KEY,
  ANTHROPIC_AUTH_TOKEN,
  CLAUDE_CODE_OAUTH_TOKEN,
  AWS_BEARER_TOKEN_BEDROCK,
  ANTHROPIC_AWS_API_KEY,
  ANTHROPIC_FOUNDRY_API_KEY,
  CLAUDE_CODE_HFI_BEARER_TOKEN,
  AGENT_PROXY_AUTH_TOKEN,
  API_TOKEN,
  ENVIRONMENT_SERVICE_KEY,
  MCP_CLIENT_SECRET,
  MCP_XAA_IDP_CLIENT_SECRET,
  CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR,
  CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR,
  CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR,
  CLAUDE_SESSION_INGRESS_TOKEN_FILE,
  CLAUDE_CODE_OAUTH_REFRESH_TOKEN,
  CLAUDE_CODE_OAUTH_CLIENT_ID,
  CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID,
  CLAUDE_CODE_OAUTH_SCOPES,
  CLAUDE_CODE_CUSTOM_OAUTH_URL,
  CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH,
  CLAUDE_CODE_SESSION_ACCESS_TOKEN,
  CLAUDE_TRUSTED_DEVICE_TOKEN,
  USE_LOCAL_OAUTH,
  USE_STAGING_OAUTH,
  CLAUDE_LOCAL_OAUTH_API_BASE,
  CLAUDE_LOCAL_OAUTH_APPS_BASE,
  CLAUDE_LOCAL_OAUTH_CONSOLE_BASE,
  CLAUDE_CODE_OAUTH_401_WAIT_MS,
  CLAUDE_CODE_AUTH_FAIL_EXIT_MS,
  CLAUDE_CODE_API_KEY_HELPER_TTL_MS,
  CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER,
  CLAUDE_CODE_PROXY_AUTH_HELPER_TTL_MS,
  CLAUDE_CODE_SKIP_BEDROCK_AUTH,
  CLAUDE_CODE_SKIP_VERTEX_AUTH,
  CLAUDE_CODE_SKIP_FOUNDRY_AUTH,
  CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH,
  CLAUDE_CODE_SKIP_MANTLE_AUTH,
  ANTHROPIC_FEDERATION_RULE_ID,
  ANTHROPIC_ORGANIZATION_ID,
  ANTHROPIC_PROFILE,
  CLAUDE_CODE_ACCOUNT_UUID,
  CLAUDE_CODE_ACCOUNT_TAGGED_ID,
  CLAUDE_CODE_ORGANIZATION_UUID,
  CLAUDE_CODE_USER_EMAIL,
  CLAUDE_CODE_SUBSCRIPTION_TYPE,
  CLAUDE_CODE_RATE_LIMIT_TIER;
