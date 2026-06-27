// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rpn
// matched 2.1.88 source: src/utils/env.ts
// class=modified  jaccard=0.5631  score=0.8604  fileCov=0.6198
// note: deminified; 144 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: USE_API_CONTEXT_MANAGEMENT, USE_API_CLEAR_TOOL_USES, USE_API_CLEAR_TOOL_RESULTS, FORCE_VCR, FORCE_PROMPT_CACHING_5M, FORCE_CODE_TERMINAL, FORCE_AUTOUPDATE_PLUGINS, ENABLE_TOOL_SEARCH, ENABLE_SESSION_PERSISTENCE, ENABLE_SESSION_BACKGROUNDING, ENABLE_PROMPT_CACHING_1H_BEDROCK, ENABLE_PROMPT_CACHING_1H, ENABLE_PID_BASED_VERSION_LOCKING, ENABLE_MCP_LARGE_OUTPUT_FILES, ENABLE_LSP_TOOL, ENABLE_LOCKLESS_UPDATES, ENABLE_ENHANCED_TELEMETRY_BETA, ENABLE_CLAUDEAI_MCP_SERVERS, ENABLE_BETA_T …
// [unwrapped __esm module rpn] deps: Qi, Rc, fn, ys, _0
((J_s = require("os")),
  (tpn = require("path")),
  (b0 = Cn(() => {
    if (qt().existsSync(tpn.join(tr(), ".config.json"))) return tpn.join(tr(), ".config.json");
    let e = `.claude${hdn()}.json`;
    return tpn.join(process.env.CLAUDE_CONFIG_DIR || J_s.homedir(), e);
  })),
  (dEu = Cn(async () => {
    try {
      let { externalHttp: e } = await Promise.resolve().then(() => (Rx(), X_s));
      return (
        await e.head("http://1.1.1.1", {
          signal: AbortSignal.timeout(1000),
        }),
        true
      );
    } catch {
      return false;
    }
  })));
((fEu = Cn(async () => {
  let e = [];
  if (await xZe("npm")) e.push("npm");
  if (await xZe("yarn")) e.push("yarn");
  if (await xZe("pnpm")) e.push("pnpm");
  return e;
})),
  (mEu = Cn(async () => {
    let e = [];
    if (await xZe("bun")) e.push("bun");
    if (await xZe("deno")) e.push("deno");
    if (await xZe("node")) e.push("node");
    return e;
  })),
  (Q_s = Cn(() => {
    try {
      return qt().existsSync("/proc/sys/fs/binfmt_misc/WSLInterop");
    } catch (e) {
      return false;
    }
  })),
  (gEu = Cn(() => {
    try {
      if (!Q_s()) return false;
      let e = zV("npm");
      if (e === null) return false;
      return e.startsWith("/mnt/c/");
    } catch (e) {
      return false;
    }
  })));
JV = [
  "pycharm",
  "intellij",
  "webstorm",
  "phpstorm",
  "rubymine",
  "clion",
  "goland",
  "rider",
  "datagrip",
  "appcode",
  "dataspell",
  "aqua",
  "gateway",
  "fleet",
  "jetbrains",
  "androidstudio",
];
Z_s = Cn(() => {
  if (ut(process.env.CODESPACES)) return "codespaces";
  if (process.env.GITPOD_WORKSPACE_ID) return "gitpod";
  if (ut(process.env.CODER) || process.env.CODER_WORKSPACE_NAME) return "coder";
  if (ut(process.env.DEVPOD) || process.env.DEVPOD_WORKSPACE_UID) return "devpod";
  if (process.env.DAYTONA_WS_ID) return "daytona";
  if (ut(process.env.GOOGLE_CLOUD_WORKSTATIONS)) return "gcp-cloud-workstations";
  if (process.env.C9_PID || process.env.C9_USER) return "aws-cloud9";
  if (process.env.REPL_ID || process.env.REPL_SLUG) return "replit";
  if (process.env.PROJECT_DOMAIN) return "glitch";
  if (ut(process.env.VERCEL)) return "vercel";
  if (process.env.RAILWAY_ENVIRONMENT_NAME || process.env.RAILWAY_SERVICE_NAME) return "railway";
  if (ut(process.env.RENDER)) return "render";
  if (ut(process.env.NETLIFY)) return "netlify";
  if (process.env.DYNO) return "heroku";
  if (process.env.FLY_APP_NAME || process.env.FLY_MACHINE_ID) return "fly.io";
  if (ut(process.env.CF_PAGES)) return "cloudflare-pages";
  if (process.env.DENO_DEPLOYMENT_ID) return "deno-deploy";
  if (process.env.AWS_LAMBDA_FUNCTION_NAME) return "aws-lambda";
  if (process.env.AWS_EXECUTION_ENV === "AWS_ECS_FARGATE") return "aws-fargate";
  if (process.env.AWS_EXECUTION_ENV === "AWS_ECS_EC2") return "aws-ecs";
  try {
    if (
      qt()
        .readFileSync("/sys/hypervisor/uuid", {
          encoding: "utf8",
        })
        .trim()
        .toLowerCase()
        .startsWith("ec2")
    )
      return "aws-ec2";
  } catch {}
  if (process.env.K_SERVICE) return "gcp-cloud-run";
  if (process.env.GOOGLE_CLOUD_PROJECT) return "gcp";
  if (process.env.WEBSITE_SITE_NAME || process.env.WEBSITE_SKU) return "azure-app-service";
  if (process.env.AZURE_FUNCTIONS_ENVIRONMENT) return "azure-functions";
  if (process.env.APP_URL?.includes("ondigitalocean.app")) return "digitalocean-app-platform";
  if (process.env.SPACE_CREATOR_USER_ID) return "huggingface-spaces";
  if (ut(process.env.GITHUB_ACTIONS)) return "github-actions";
  if (ut(process.env.GITLAB_CI)) return "gitlab-ci";
  if (process.env.CIRCLECI) return "circleci";
  if (process.env.BUILDKITE) return "buildkite";
  if (ut(false)) return "ci";
  if (process.env.KUBERNETES_SERVICE_HOST) return "kubernetes";
  try {
    if (qt().existsSync("/.dockerenv")) return "docker";
  } catch {}
  if (kZe.platform === "darwin") return "unknown-darwin";
  if (kZe.platform === "linux") return "unknown-linux";
  if (kZe.platform === "win32") return "unknown-win32";
  return "unknown";
});
kZe = {
  hasInternetAccess: dEu,
  probeInternalNetworkAccess: pEu,
  isCI: ut(false),
  platform: ["win32", "darwin"].includes("linux") ? "linux" : "linux",
  arch: "x64",
  nodeVersion: process.version,
  terminal: yEu(),
  isSSH: ebs,
  getPackageManagers: fEu,
  getRuntimes: mEu,
  isRunningWithBun: Cn(gG),
  isWslEnvironment: Q_s,
  isNpmFromWindowsPath: gEu,
  isConductor: hEu,
  detectDeploymentEnvironment: Z_s,
};
_Eu = new Set([
  "zsh",
  "bash",
  "fish",
  "sh",
  "dash",
  "ash",
  "ksh",
  "tcsh",
  "csh",
  "nu",
  "nushell",
  "pwsh",
  "powershell",
  "cmd",
  "elvish",
  "xonsh",
  "ion",
]);
var lkr = {};
var CLAUDE_AX_SCREEN_READER,
  CLAUDE_CHROME_CLASSIFIER_FLOOR,
  CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT,
  CLAUDE_CODE_BG_TASKS_REPORT_RUNNING,
  CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING,
  CLAUDE_CODE_DISABLE_ADVISOR_TOOL,
  CLAUDE_CODE_DISABLE_AGENT_VIEW,
  CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN,
  CLAUDE_CODE_DISABLE_ARTIFACT,
  CLAUDE_CODE_DISABLE_ATTACHMENTS,
  CLAUDE_CODE_DISABLE_AUTO_MEMORY,
  CLAUDE_CODE_DISABLE_BACKGROUND_TASKS,
  CLAUDE_CODE_DISABLE_BUNDLED_SKILLS,
  CLAUDE_CODE_DISABLE_CLAUDE_API_SKILL,
  CLAUDE_CODE_DISABLE_CLAUDE_MDS,
  CLAUDE_CODE_DISABLE_CRON,
  CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS,
  CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY,
  CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING,
  CLAUDE_CODE_DISABLE_GIT_INSTRUCTIONS,
  CLAUDE_CODE_DISABLE_LAUNCH_COMPOSER,
  CLAUDE_CODE_DISABLE_MEMORY_BULK_INFLATE,
  CLAUDE_CODE_DISABLE_MEMORY_PERIODIC_RESYNC,
  CLAUDE_CODE_DISABLE_MOUSE,
  CLAUDE_CODE_DISABLE_MOUSE_CLICKS,
  CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC,
  CLAUDE_CODE_DISABLE_NONSTREAMING_FALLBACK,
  CLAUDE_CODE_DISABLE_NOTIFICATION_PRESENCE_CHECK,
  CLAUDE_CODE_DISABLE_OFFICIAL_MARKETPLACE_AUTOINSTALL,
  CLAUDE_CODE_DISABLE_POLICY_SKILLS,
  CLAUDE_CODE_DISABLE_PRECOMPACT_SKIP,
  CLAUDE_CODE_DISABLE_REFUSAL_FALLBACK,
  CLAUDE_CODE_DISABLE_TERMINAL_TITLE,
  CLAUDE_CODE_DISABLE_THINKING,
  CLAUDE_CODE_DISABLE_VIRTUAL_SCROLL,
  CLAUDE_CODE_ENABLE_APPEND_SUBAGENT_PROMPT,
  CLAUDE_CODE_ENABLE_AWAY_SUMMARY,
  CLAUDE_CODE_ENABLE_BACKGROUND_PLUGIN_REFRESH,
  CLAUDE_CODE_ENABLE_CFC,
  CLAUDE_CODE_ENABLE_DESIGN_MCP,
  CLAUDE_CODE_ENABLE_DESIGN_SYNC,
  CLAUDE_CODE_ENABLE_EXPERIMENTAL_ADVISOR_TOOL,
  CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL,
  CLAUDE_CODE_ENABLE_FINE_GRAINED_TOOL_STREAMING,
  CLAUDE_CODE_ENABLE_LAUNCH_COMPOSER,
  CLAUDE_CODE_ENABLE_MENU_KIND_LANES,
  CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION,
  CLAUDE_CODE_ENABLE_REMOTE_RECAP,
  CLAUDE_CODE_ENABLE_SDK_FILE_CHECKPOINTING,
  CLAUDE_CODE_ENABLE_TASKS,
  CLAUDE_CODE_ENABLE_TOKEN_USAGE_ATTACHMENT,
  CLAUDE_CODE_ENABLE_XAA,
  CLAUDE_CODE_TODO_REMINDER_MODE,
  CLAUDE_CODE_TOTAL_TOKENS_REMINDER,
  CLAUDE_CODE_KB_COHESION_FIXES,
  CLAUDE_CODE_ACCESSIBILITY,
  CLAUDE_CODE_ACT_DONT_REDERIVE,
  CLAUDE_CODE_ARTIFACT_DIRECT_UPLOAD,
  CLAUDE_CODE_AUTO_CONNECT_IDE,
  CLAUDE_CODE_BASH_SANDBOX_SHOW_INDICATOR,
  CLAUDE_CODE_BUBBLEWRAP,
  CLAUDE_CODE_CHILD_SESSION,
  CLAUDE_CODE_COLD_COMPACT,
  CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS,
  CLAUDE_CODE_FORK_SUBAGENT,
  CLAUDE_CODE_GLOB_HIDDEN,
  CLAUDE_CODE_GLOB_NO_IGNORE,
  CLAUDE_CODE_HIDE_CWD,
  CLAUDE_CODE_FORCE_SESSION_PERSISTENCE,
  CLAUDE_CODE_FORCE_STRIKETHROUGH,
  CLAUDE_CODE_IDE_SKIP_AUTO_INSTALL,
  CLAUDE_CODE_IDE_SKIP_VALID_CHECK,
  CLAUDE_CODE_INCLUDE_PARTIAL_MESSAGES,
  CLAUDE_CODE_NATIVE_CURSOR,
  CLAUDE_CODE_NEW_INIT,
  CLAUDE_CODE_NO_FLICKER,
  CLAUDE_CODE_OWNERSHIP_FRAME,
  CLAUDE_CODE_PACKAGE_MANAGER_AUTO_UPDATE,
  CLAUDE_CODE_PLAN_MODE_REQUIRED,
  CLAUDE_CODE_PROACTIVE,
  CLAUDE_CODE_SKIP_PLUGIN_MCP_SERVERS,
  CLAUDE_CODE_SKIP_PROJECT_BACKFILL,
  CLAUDE_CODE_SKIP_PROMPT_HISTORY,
  CLAUDE_CODE_SKIP_REPO_UPLOAD,
  CLAUDE_CODE_SUPPRESS_SESSION_ATTRIBUTION,
  CLAUDE_CODE_SYNC_PLUGIN_INSTALL,
  CLAUDE_CODE_TAG_ISMETA_MESSAGES,
  CLAUDE_CODE_TWO_STAGE_CLASSIFIER,
  CLAUDE_CODE_USE_COWORK_PLUGINS,
  CLAUDE_CODE_USE_NATIVE_FILE_SEARCH,
  CLAUDE_CODE_USE_POWERSHELL_TOOL,
  CLAUDE_CODE_WEBFETCH_USE_CCR_PROXY,
  CLAUDE_CODE_WEBSEARCH_USE_CCR_PROXY,
  CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE,
  CLAUDE_CODE_PLUGIN_USE_ZIP_CACHE,
  CLAUDE_CODE_PEWTER_OWL,
  CLAUDE_CODE_PEWTER_OWL_TOOL,
  CLAUDE_CODE_VERIFY_PROMPT,
  CLAUDE_DISABLE_ADOPT,
  DISABLE_AUTO_COMPACT,
  DISABLE_AUTOUPDATER,
  DISABLE_BRIEF_MODE_STOP_HOOK,
  DISABLE_BUG_COMMAND,
  DISABLE_COMPACT,
  DISABLE_COST_WARNINGS,
  DISABLE_DOCTOR_COMMAND,
  DISABLE_ERROR_REPORTING,
  DISABLE_EXTRA_USAGE_COMMAND,
  DISABLE_FEEDBACK_COMMAND,
  DISABLE_GROWTHBOOK,
  DISABLE_INSTALL_GITHUB_APP_COMMAND,
  DISABLE_INSTALLATION_CHECKS,
  DISABLE_INTERLEAVED_THINKING,
  DISABLE_LOGIN_COMMAND,
  DISABLE_LOGOUT_COMMAND,
  DISABLE_PROMPT_CACHING,
  DISABLE_PROMPT_CACHING_HAIKU,
  DISABLE_PROMPT_CACHING_OPUS,
  DISABLE_PROMPT_CACHING_SONNET,
  DISABLE_PROMPT_CACHING_FABLE,
  DISABLE_PROMPT_CACHING_MYTHOS,
  DISABLE_TELEMETRY,
  DISABLE_UPDATES,
  DISABLE_UPGRADE_COMMAND,
  ENABLE_BETA_TRACING_DETAILED,
  ENABLE_CLAUDEAI_MCP_SERVERS,
  ENABLE_ENHANCED_TELEMETRY_BETA,
  ENABLE_LOCKLESS_UPDATES,
  ENABLE_LSP_TOOL,
  ENABLE_MCP_LARGE_OUTPUT_FILES,
  ENABLE_PID_BASED_VERSION_LOCKING,
  ENABLE_PROMPT_CACHING_1H,
  ENABLE_PROMPT_CACHING_1H_BEDROCK,
  ENABLE_SESSION_BACKGROUNDING,
  ENABLE_SESSION_PERSISTENCE,
  ENABLE_TOOL_SEARCH,
  FORCE_AUTOUPDATE_PLUGINS,
  FORCE_CODE_TERMINAL,
  FORCE_PROMPT_CACHING_5M,
  FORCE_VCR,
  EMBEDDED_SEARCH_TOOLS,
  USE_API_CLEAR_TOOL_RESULTS,
  USE_API_CLEAR_TOOL_USES,
  USE_API_CONTEXT_MANAGEMENT;
