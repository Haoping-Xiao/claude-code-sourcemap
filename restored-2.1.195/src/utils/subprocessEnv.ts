// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _1
// matched 2.1.88 source: src/utils/subprocessEnv.ts
// class=modified  jaccard=0.3318  score=0.4228  fileCov=0.6064
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module _1] deps: IB, ft, wr, fn, AKr, Jt, kv, j1i
((xKr = require("os")),
  (pce = require("path")),
  (vKr = [
    "CLAUDE_CODE_SESSION_KIND",
    "CLAUDE_BG_SOURCE",
    "CLAUDE_BG_ISOLATION",
    "CLAUDE_BG_BACKEND",
    "CLAUDE_CODE_SESSION_NAME",
    "CLAUDE_CODE_RESUME_INTERRUPTED_TURN",
    "CLAUDE_CODE_RESUME_PROMPT",
    "CLAUDE_BG_POST_CLEAR_RESPAWN",
    "CLAUDE_BG_SESSION_PERMISSION_RULES",
    "CLAUDE_BG_MEMORY_TOGGLED_OFF",
  ]));
((wKr = [
  ".env",
  ".env.local",
  ".env.development",
  ".env.development.local",
  ".env.test",
  ".env.test.local",
  ".env.production",
  ".env.production.local",
]),
  (W1i = ["home", "root", "tmp", "var", "opt", "run", "mnt"].map((e) => `/${e}`)));
CKr = new Map();
c1d = [
  "ANTHROPIC_API_KEY",
  "CLAUDE_CODE_OAUTH_TOKEN",
  "ANTHROPIC_AUTH_TOKEN",
  "ANTHROPIC_FOUNDRY_API_KEY",
  "ANTHROPIC_AWS_API_KEY",
  "ANTHROPIC_BEDROCK_MANTLE_API_KEY",
  "ANTHROPIC_CUSTOM_HEADERS",
  "AWS_SECRET_ACCESS_KEY",
  "AWS_SESSION_TOKEN",
  "AWS_BEARER_TOKEN_BEDROCK",
  "GOOGLE_APPLICATION_CREDENTIALS",
  "AZURE_CLIENT_SECRET",
  "AZURE_CLIENT_CERTIFICATE_PATH",
  "ACTIONS_ID_TOKEN_REQUEST_TOKEN",
  "ACTIONS_ID_TOKEN_REQUEST_URL",
  "ACTIONS_RUNTIME_TOKEN",
  "ACTIONS_RUNTIME_URL",
  "ALL_INPUTS",
  "OVERRIDE_GITHUB_TOKEN",
  "DEFAULT_WORKFLOW_TOKEN",
  "SSH_SIGNING_KEY",
];
IKr = {};
function wU() {
  let e = at("tengu_disable_bypass_permissions_mode", false),
    n = (jo() || {}).permissions?.disableBypassPermissionsMode === "disable";
  return e || n;
}
