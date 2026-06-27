// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $ms
// matched 2.1.88 source: src/constants/oauth.ts
// class=modified  jaccard=0.3022  score=0.6501  fileCov=0.3609
// note: deminified; 16 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: preservableScopesFrom, getOauthConfig, fileSuffixForOauthConfig, PRESERVABLE_EXPANSION_SCOPES, OAUTH_BETA_HEADER, MCP_CLIENT_METADATA_URL, LONG_LIVED_OAUTH_TOKEN_TTL_SECONDS, DESIGN_OAUTH_SCOPES, CONSOLE_OAUTH_SCOPES, CLAUDE_AI_PROFILE_SCOPE, CLAUDE_AI_OAUTH_SCOPES, CLAUDE_AI_INFERENCE_SCOPE, ALL_OAUTH_SCOPES, ALLOWED_OAUTH_BASE_URLS
// [unwrapped __esm module $ms] deps: utils/auth.ts
((Dgu = Fe.bool()),
  (Pgu = Fe.str()),
  (Mgu = Fe.str()),
  ($gu = Fe.bool()),
  (Ogu = Fe.str()),
  (Ngu = Fe.bool()),
  (Bgu = Fe.bool()),
  (Ugu = Fe.bool()),
  (Fgu = Fe.bool()),
  (jgu = Fe.str()),
  (Ggu = Fe.int()),
  (Wgu = Fe.str()),
  (qgu = Fe.int()),
  (Vgu = Fe.str()),
  (zgu = Fe.str()),
  (Kgu = Fe.str()),
  (Ygu = Fe.str()),
  (Xgu = Fe.str()),
  (Jgu = Fe.bool()),
  (Qgu = Fe.bool()),
  (Zgu = Fe.bool()),
  (ehu = Fe.bool()),
  (thu = Fe.int()),
  (nhu = Fe.int()),
  (rhu = Fe.int()),
  (ohu = Fe.int()),
  (shu = Fe.int()),
  (ihu = Fe.bool()),
  (ahu = Fe.bool()),
  (lhu = Fe.str()),
  (chu = Fe.str()),
  (uhu = Fe.str()),
  (dhu = Fe.str()),
  (phu = Fe.str()),
  (fhu = Fe.str()),
  (mhu = Fe.str()),
  (ghu = Fe.str()),
  (hhu = Fe.str()),
  (yhu = Fe.str()),
  (_hu = Fe.str()),
  (bhu = Fe.str()),
  (Shu = Fe.str()),
  (Ehu = Fe.int()),
  (Ahu = Fe.int()),
  (Hhu = Fe.int()),
  (Thu = Fe.str()),
  (vhu = Fe.bool()),
  (whu = Fe.triBool()),
  (Chu = Fe.bool()),
  (Ihu = Fe.bool()),
  (xhu = Fe.bool()),
  (khu = Fe.str()),
  (Rhu = Fe.str()),
  (Lhu = Fe.str()),
  (Dhu = Fe.str()),
  (Phu = Fe.str()),
  (Mhu = Fe.str()),
  ($hu = Fe.str()),
  (Ohu = Fe.str()),
  (Nhu = Fe.str()));
function Wwe(e, t) {
  return e.flatMap((n, r) => (r ? [t(r), n] : [n]));
}
function On(e, t) {
  let n = 0;
  for (let r of e) n += +!!t(r);
  return n;
}
function Uo(e) {
  return [...new Set(e)];
}
function Nms() {
  return "prod";
}
function fileSuffixForOauthConfig() {
  if (process.env.CLAUDE_CODE_CUSTOM_OAUTH_URL) return "-custom-oauth";
  switch (Nms()) {
    case "local":
      return "-local-oauth";
    case "staging":
      return "-staging-oauth";
    case "prod":
      return "";
  }
}
function preservableScopesFrom(e) {
  if (!Array.isArray(e)) return [];
  let t = PRESERVABLE_EXPANSION_SCOPES;
  return e.filter((n) => t.includes(n));
}
function getLocalOauthConfig() {
  let e = process.env.CLAUDE_LOCAL_OAUTH_API_BASE?.replace(/\/$/, "") ?? "http://localhost:8000",
    t = process.env.CLAUDE_LOCAL_OAUTH_APPS_BASE?.replace(/\/$/, "") ?? "http://localhost:4000",
    n = process.env.CLAUDE_LOCAL_OAUTH_CONSOLE_BASE?.replace(/\/$/, "") ?? "http://localhost:3000";
  return {
    BASE_API_URL: e,
    CONSOLE_AUTHORIZE_URL: `${n}/oauth/authorize`,
    CLAUDE_AI_AUTHORIZE_URL: `${t}/oauth/authorize`,
    CLAUDE_AI_ORIGIN: t,
    TOKEN_URL: `${e}/v1/oauth/token`,
    API_KEY_URL: `${e}/api/oauth/claude_cli/create_api_key`,
    ROLES_URL: `${e}/api/oauth/claude_cli/roles`,
    CONSOLE_SUCCESS_URL: `${n}/buy_credits?returnUrl=/oauth/code/success%3Fapp%3Dclaude-code`,
    CLAUDEAI_SUCCESS_URL: `${n}/oauth/code/success?app=claude-code`,
    MANUAL_REDIRECT_URL: `${n}/oauth/code/callback`,
    CLIENT_ID: "22422756-60c9-4084-8eb7-27705fd5cf9a",
    DESIGN_CLIENT_ID: "00000000-0000-4000-8000-000000000000",
    OAUTH_FILE_SUFFIX: "-local-oauth",
    MCP_PROXY_URL: "http://localhost:8205",
    MCP_PROXY_PATH: "/v1/toolbox/shttp/mcp/{server_id}",
  };
}
function getOauthConfig() {
  let e = (() => {
      switch (Nms()) {
        case "local":
          return getLocalOauthConfig();
        case "staging":
          return Uhu ?? Oms;
        case "prod":
          return Oms;
      }
    })(),
    oauthBaseUrl = process.env.CLAUDE_CODE_CUSTOM_OAUTH_URL;
  if (oauthBaseUrl) {
    let r = oauthBaseUrl.replace(/\/$/, "");
    if (!ALLOWED_OAUTH_BASE_URLS.includes(r))
      throw Error("CLAUDE_CODE_CUSTOM_OAUTH_URL is not an approved endpoint.");
    e = {
      ...e,
      BASE_API_URL: r,
      CONSOLE_AUTHORIZE_URL: `${r}/oauth/authorize`,
      CLAUDE_AI_AUTHORIZE_URL: `${r}/oauth/authorize`,
      CLAUDE_AI_ORIGIN: r,
      TOKEN_URL: `${r}/v1/oauth/token`,
      API_KEY_URL: `${r}/api/oauth/claude_cli/create_api_key`,
      ROLES_URL: `${r}/api/oauth/claude_cli/roles`,
      CONSOLE_SUCCESS_URL: `${r}/oauth/code/success?app=claude-code`,
      CLAUDEAI_SUCCESS_URL: `${r}/oauth/code/success?app=claude-code`,
      MANUAL_REDIRECT_URL: `${r}/oauth/code/callback`,
      OAUTH_FILE_SUFFIX: "-custom-oauth",
    };
  }
  let n = process.env.CLAUDE_CODE_OAUTH_CLIENT_ID;
  if (n)
    e = {
      ...e,
      CLIENT_ID: n,
    };
  return e;
}
var LONG_LIVED_OAUTH_TOKEN_TTL_SECONDS = 31536000,
  CLAUDE_AI_INFERENCE_SCOPE = "user:inference",
  CLAUDE_AI_PROFILE_SCOPE = "user:profile",
  CONSOLE_SCOPE = "org:create_api_key",
  OAUTH_BETA_HEADER = "oauth-2025-04-20",
  CONSOLE_OAUTH_SCOPES,
  CLAUDE_AI_OAUTH_SCOPES,
  ALL_OAUTH_SCOPES,
  DESIGN_OAUTH_SCOPES,
  PRESERVABLE_EXPANSION_SCOPES,
  Oms,
  MCP_CLIENT_METADATA_URL = "https://claude.ai/oauth/claude-code-client-metadata",
  Uhu = void 0,
  ALLOWED_OAUTH_BASE_URLS;
