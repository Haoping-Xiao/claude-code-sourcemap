// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Rc
// matched 2.1.88 source: src/constants/oauth.ts
// class=modified (alt of src/constants/oauth.ts)  jaccard=0.3193  score=0.7749  fileCov=0.352
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Rc = E(() => {
  fn();
  ((Bms = [Bhu, qwe]),
    (Aae = [qwe, xB, "user:sessions:claude_code", "user:mcp_servers", "user:file_upload", ...[]]),
    (FIr = Uo([...Bms, ...Aae])),
    (Hae = ["user:design:read", "user:design:write"]),
    (Ums = [...Hae, "user:projects:read", "user:projects:write"]));
  Oms = {
    BASE_API_URL: "https://api.anthropic.com",
    CONSOLE_AUTHORIZE_URL: "https://platform.claude.com/oauth/authorize",
    CLAUDE_AI_AUTHORIZE_URL: "https://claude.com/cai/oauth/authorize",
    CLAUDE_AI_ORIGIN: "https://claude.ai",
    TOKEN_URL: "https://platform.claude.com/v1/oauth/token",
    API_KEY_URL: "https://api.anthropic.com/api/oauth/claude_cli/create_api_key",
    ROLES_URL: "https://api.anthropic.com/api/oauth/claude_cli/roles",
    CONSOLE_SUCCESS_URL:
      "https://platform.claude.com/buy_credits?returnUrl=/oauth/code/success%3Fapp%3Dclaude-code",
    CLAUDEAI_SUCCESS_URL: "https://platform.claude.com/oauth/code/success?app=claude-code",
    MANUAL_REDIRECT_URL: "https://platform.claude.com/oauth/code/callback",
    CLIENT_ID: "9d1c250a-e61b-44d9-88ed-5944d1962f5e",
    DESIGN_CLIENT_ID: "59637612-477b-4836-a601-b0589eda7704",
    OAUTH_FILE_SUFFIX: "",
    MCP_PROXY_URL: "https://mcp-proxy.anthropic.com",
    MCP_PROXY_PATH: "/v1/mcp/{server_id}",
  };
  ydn = [
    "https://beacon.claude-ai.staging.ant.dev",
    "https://claude.fedstart.com",
    "https://claude-staging.fedstart.com",
  ];
});
function gG() {
  return true;
}
function dm() {
  return Array.isArray(Bun.embeddedFiles) && Bun.embeddedFiles.length > 0;
}
function jhu(e) {
  let t = process.cwd();
  return e.filter((n) => !$sn(n, t));
}
function jms(e) {
  let t = Bun.which(e);
  return t;
}
var Fms,
  Gf = async (e) => jms(e),
  zV;
