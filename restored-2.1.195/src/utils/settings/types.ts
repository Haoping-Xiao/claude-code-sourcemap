// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lmn
// matched 2.1.88 source: src/utils/settings/types.ts
// class=modified  jaccard=0.1713  score=0.2628  fileCov=0.3299
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module lmn] deps: Xr, Ox, QH, sr, xws
((cLr = ve(() => Lws())), (Rws = ve(() => Lws("allow"))));
function $ws(e) {
  return H.object({
    allow: H.array(Rws()).optional().describe("List of permission rules for allowed operations"),
    deny: H.array(cLr()).optional().describe("List of permission rules for denied operations"),
    ask: H.array(cLr())
      .optional()
      .describe("List of permission rules that should always prompt for confirmation"),
    defaultMode: H.enum([...yY, ...Aws(e)])
      .optional()
      .describe("Default permission mode when Claude Code needs access"),
    disableBypassPermissionsMode: H.enum(["disable"])
      .optional()
      .describe("Disable the ability to bypass permission prompts"),
    ...Ews(e),
    additionalDirectories: H.array(H.string())
      .optional()
      .describe("Additional directories to include in the permission scope"),
  }).passthrough();
}
function uLr(e) {
  return H.object({
    $schema: H.string().optional().describe("JSON Schema reference for Claude Code settings"),
    apiKeyHelper: H.string()
      .optional()
      .describe("Path to a script that outputs authentication values"),
    proxyAuthHelper: H.string()
      .optional()
      .describe("Shell command that outputs a Proxy-Authorization header value (EAP)"),
    awsCredentialExport: H.string()
      .optional()
      .describe("Path to a script that exports AWS credentials"),
    awsAuthRefresh: H.string()
      .optional()
      .describe("Path to a script that refreshes AWS authentication"),
    gcpAuthRefresh: H.string()
      .optional()
      .describe(
        "Command to refresh GCP authentication (e.g., gcloud auth application-default login)",
      ),
    policyHelper: d1u()
      .optional()
      .describe(
        "Executable that computes managed settings at startup. Honored only from admin-controlled policy sources.",
      ),
    ...(ut(process.env.CLAUDE_CODE_ENABLE_XAA) && {
      xaaIdp: H.object({
        issuer: H.string().url().describe("IdP issuer URL for OIDC discovery"),
        clientId: H.string().describe("Claude Code's client_id registered at the IdP"),
        callbackPort: H.number()
          .int()
          .positive()
          .optional()
          .describe(
            "Fixed loopback callback port for the IdP OIDC login. Only needed if the IdP does not honor RFC 8252 port-any matching.",
          ),
      })
        .optional()
        .describe(
          "XAA (SEP-990) IdP connection. Configure once; all XAA-enabled MCP servers reuse this.",
        ),
    }),
    fileSuggestion: H.object({
      type: H.literal("command"),
      command: H.string(),
    })
      .optional()
      .describe("Custom file suggestion configuration for @ mentions"),
    respectGitignore: H.boolean()
      .optional()
      .describe(
        "Whether file picker should respect .gitignore files (default: true). Note: .ignore files are always respected.",
      ),
    breakReminder: H.object({
      enabled: H.boolean()
        .optional()
        .describe(
          "Show a friendly nudge after sustained continuous use (default false). Must be true for the reminder to fire.",
        ),
      intervalMinutes: H.number()
        .int()
        .positive()
        .optional()
        .describe(
          "Minutes of continuous use before the reminder fires (default 120). Re-fires every interval until you take a break.",
        ),
      breakThresholdMinutes: H.number()
        .int()
        .positive()
        .optional()
        .describe("Minutes of inactivity that count as a break and reset the timer (default 15)"),
      message: H.string()
        .optional()
        .describe("Custom reminder text. Leave unset for a rotating set of friendly nudges."),
    })
      .optional()
      .describe(
        "@internal Opt-in break reminder. When enabled, shows a dismissible nudge after sustained continuous use. Never blocks \u2014 just a friendly heads-up.",
      ),
    quietHours: H.object({
      enabled: H.boolean()
        .optional()
        .describe(
          "Show a one-time nudge when you start or keep using the CLI inside your quiet-hours window (default false).",
        ),
      start: H.string()
        .regex(/^([01]?\d|2[0-3]):[0-5]\d$/, 'Expected 24-hour local time "HH:MM" (e.g. "22:00")')
        .optional()
        .describe('Start of the quiet-hours window, 24-hour local time "HH:MM".'),
      end: H.string()
        .regex(/^([01]?\d|2[0-3]):[0-5]\d$/, 'Expected 24-hour local time "HH:MM" (e.g. "07:00")')
        .optional()
        .describe(
          'End of the quiet-hours window, 24-hour local time "HH:MM". May be earlier than start for an overnight range.',
        ),
    })
      .optional()
      .describe(
        "@internal Opt-in quiet hours. When enabled, shows a single soft nudge per session while inside the configured local-time window. Never blocks.",
      ),
    cleanupPeriodDays: H.number()
      .int()
      .positive()
      .optional()
      .describe(
        "Number of days to retain chat transcripts before automatic cleanup (default: 30). Minimum 1. Use a large value for long retention; use --no-session-persistence to disable transcript writes entirely.",
      ),
    skillListingMaxDescChars: H.number()
      .int()
      .positive()
      .optional()
      .describe(
        "Per-skill description character cap in the skill listing sent to Claude (default: 1536). Descriptions longer than this are truncated. Raise to opt in to higher per-turn context cost.",
      ),
    skillListingBudgetFraction: H.number()
      .gt(0)
      .lte(1)
      .optional()
      .describe(
        "Fraction of the context window (in characters) reserved for the skill listing sent to Claude (default: 0.01 = 1%). When the listing exceeds this, descriptions are shortened to fit. Raise to opt in to higher per-turn context cost.",
      ),
    wslInheritsWindowsSettings: H.boolean()
      .optional()
      .describe(
        "When set to true in either admin-only Windows source \u2014 the HKLM SOFTWARE/Policies/ClaudeCode registry key or C:/Program Files/ClaudeCode/managed-settings.json \u2014 WSL reads managed settings from the full Windows policy chain (HKLM, C:/Program Files/ClaudeCode via DrvFs, HKCU) in addition to /etc/claude-code. Windows sources take priority. The flag is also required in HKCU itself for HKCU policy to apply on WSL (double opt-in: admin enables the chain, user confirms HKCU). On native Windows the flag has no effect.",
      ),
    env: c1u().optional().describe("Environment variables to set for Claude Code sessions"),
    attribution: H.object({
      commit: H.string()
        .optional()
        .describe(
          "Attribution text for git commits, including any trailers. Empty string hides attribution.",
        ),
      pr: H.string()
        .optional()
        .describe(
          "Attribution text for pull request descriptions. Empty string hides attribution.",
        ),
      sessionUrl: H.boolean()
        .optional()
        .describe(
          "Whether to append the claude.ai session link to commits and PRs created from web or Remote Control sessions (default: true). Set to false to omit the Claude-Session trailer and PR-body link.",
        ),
    })
      .optional()
      .describe(
        "Customize attribution text for commits and PRs. Each field defaults to the standard Claude Code attribution if not set.",
      ),
    includeCoAuthoredBy: H.boolean()
      .optional()
      .describe(
        "Deprecated: Use attribution instead. Whether to include Claude's co-authored by attribution in commits and PRs (defaults to true)",
      ),
    ...!1,
    includeGitInstructions: H.boolean()
      .optional()
      .describe(
        "Include built-in commit and PR workflow instructions in Claude's system prompt (default: true)",
      ),
    permissions: $ws(e).optional().describe("Tool usage permissions configuration"),
    model: H.string().optional().describe("Override the default model used by Claude Code"),
    fallbackModel: H.array(H.string())
      .optional()
      .describe(
        'Fallback model(s) tried in order when the primary model is overloaded or unavailable. Each element accepts a model name or alias; "default" expands to the default model. CLI --fallback-model takes precedence.',
      ),
    availableModels: H.array(H.string())
      .optional()
      .describe(
        'Allowlist of models that users can select. Accepts family aliases ("opus" allows any opus version), version prefixes ("opus-4-5" allows only that version), and full model IDs. If undefined, all models are available. If empty array, only the default model is available. Typically set in managed settings by enterprise administrators.',
      ),
    enforceAvailableModels: H.boolean()
      .optional()
      .describe(
        "When true and availableModels is a non-empty array, the Default model selection is also constrained: if the default model for the user tier is not in availableModels, Default resolves to the first allowed availableModels entry instead. Has no effect when availableModels is unset or an empty array. Typically set in managed settings by enterprise administrators.",
      ),
    modelOverrides: H.record(H.string(), H.string())
      .optional()
      .describe(
        'Override mapping from Anthropic model ID (e.g. "claude-opus-4-6") to provider-specific model ID (e.g. a Bedrock inference profile ARN). Typically set in managed settings by enterprise administrators.',
      ),
    enableAllProjectMcpServers: H.boolean()
      .optional()
      .describe("Whether to automatically approve all MCP servers in the project"),
    enabledMcpjsonServers: H.array(H.string())
      .optional()
      .describe("List of approved MCP servers from .mcp.json"),
    disabledMcpjsonServers: H.array(H.string())
      .optional()
      .describe("List of rejected MCP servers from .mcp.json"),
    disableClaudeAiConnectors: H.boolean()
      .optional()
      .describe(
        "When true in any settings source, claude.ai MCP cloud connectors are not auto-fetched or connected. " +
          "Only gates auto-fetched connectors \u2014 a claudeai-proxy server passed explicitly " +
          "(e.g. via --mcp-config or the SDK mcpServers option) still follows the normal MCP config trust flow. Any-source-true wins: a project can opt out, but a project-level false cannot override a user-level true.",
      ),
    skillOverrides: H.record(H.string(), H.enum(["on", "name-only", "user-invocable-only", "off"]))
      .optional()
      .describe(
        'Per-skill listing overrides keyed by skill name. "name-only" lists the skill without its description; "user-invocable-only" hides it from the model but keeps /name; "off" hides it from both. Absent = on.',
      ),
    disableBundledSkills: H.boolean()
      .optional()
      .describe(
        "Disable the skills and workflows that ship with Claude Code: bundled skills and workflows are removed entirely; built-in slash commands stay typable but are hidden from the model. Plugins, .claude/skills/, and .claude/commands/ are unaffected. Equivalent to CLAUDE_CODE_DISABLE_BUNDLED_SKILLS=1.",
      ),
    allowedMcpServers: H.array(cmn())
      .optional()
      .describe(
        "Enterprise allowlist of MCP servers that can be used. Applies to all scopes including enterprise servers from managed-mcp.json. If undefined, all servers are allowed. If empty array, no servers are allowed. Denylist takes precedence - if a server is on both lists, it is denied.",
      ),
    deniedMcpServers: H.array(umn())
      .optional()
      .describe(
        "Enterprise denylist of MCP servers that are explicitly blocked. If a server is on the denylist, it will be blocked across all scopes including enterprise. Denylist takes precedence over allowlist - if a server is on both lists, it is denied.",
      ),
    hooks: IG().optional().describe("Custom commands to run before/after tool executions"),
    worktree: H.object({
      symlinkDirectories: H.array(H.string())
        .optional()
        .describe(
          'Directories to symlink from main repository to worktrees to avoid disk bloat. Must be explicitly configured - no directories are symlinked by default. Common examples: "node_modules", ".cache", ".bin"',
        ),
      sparsePaths: H.array(H.string())
        .optional()
        .describe(
          "Directories to include when creating worktrees, via git sparse-checkout (cone mode). " +
            "Dramatically faster in large monorepos \u2014 only the listed paths are written to disk.",
        ),
      baseRef: H.enum(["fresh", "head"])
        .optional()
        .describe(
          "Which ref new worktrees branch from. 'fresh' (default) branches from origin/<default-branch> for a clean tree. 'head' branches from your current local HEAD so unpushed commits and feature-branch state are present. Applies to --worktree, EnterWorktree, and agent isolation.",
        ),
      bgIsolation: H.enum(["worktree", "none"])
        .optional()
        .catch(void 0)
        .describe(
          "Isolation mode for background sessions in this repo. 'worktree' (default) blocks Edit/Write in the main checkout until EnterWorktree is called. 'none' lets background jobs edit the working copy directly.",
        ),
    })
      .optional()
      .describe("Git worktree configuration for --worktree flag."),
    disableAllHooks: H.boolean().optional().describe("Disable all hooks and statusLine execution"),
    disableAgentView: H.boolean()
      .optional()
      .describe(
        "Disable agent view (`claude agents`, `--bg`, /background, the on-demand daemon). Typically set in managed settings. Equivalent to CLAUDE_CODE_DISABLE_AGENT_VIEW=1.",
      ),
    disableRemoteControl: H.boolean()
      .optional()
      .describe(
        "Disable Remote Control (claude.ai/code, `claude remote-control`, `--remote-control`/`--rc`, auto-start, and the in-session toggle). Typically set in managed settings.",
      ),
    disableWorkflows: H.boolean()
      .optional()
      .describe("Disable the Workflows feature (also via CLAUDE_CODE_DISABLE_WORKFLOWS)."),
    disableArtifact: H.boolean()
      .optional()
      .describe("Disable the Artifact tool (also via CLAUDE_CODE_DISABLE_ARTIFACT)."),
    enableWorkflows: H.boolean()
      .optional()
      .describe(
        "Enable or disable the Workflows feature for this user. Unset = default by plan once the feature is available.",
      ),
    workflowKeywordTriggerEnabled: H.boolean()
      .optional()
      .describe(
        'Enable the "ultracode" keyword trigger: including the keyword in a prompt opts that turn into the Workflow tool. Set to false to disable the trigger. Default: true.',
      ),
    disableSkillShellExecution: H.boolean()
      .optional()
      .describe(
        "Disable inline shell execution in skills and custom slash commands from user, project, or plugin sources. Commands are replaced with a placeholder instead of being run.",
      ),
    defaultShell: H.enum(["bash", "powershell"])
      .optional()
      .describe(
        "Default shell for input-box ! commands. Defaults to 'bash' on all platforms (no Windows auto-flip).",
      ),
    respondToBashCommands: H.boolean()
      .optional()
      .describe(
        "Whether Claude responds after an input-box ! bash command runs. Set to false to add the command output to context without a response. Default: true.",
      ),
    allowManagedHooksOnly: H.boolean()
      .optional()
      .describe(
        "When true (and set in managed settings), only hooks from managed settings run. User, project, and local hooks are ignored.",
      ),
    allowedHttpHookUrls: H.array(H.string())
      .optional()
      .describe(
        'Allowlist of URL patterns that HTTP hooks may target. Supports * as a wildcard (e.g. "https://hooks.example.com/*"). When set, HTTP hooks with non-matching URLs are blocked. If undefined, all URLs are allowed. If empty array, no HTTP hooks are allowed. Arrays merge across settings sources (same semantics as allowedMcpServers).',
      ),
    httpHookAllowedEnvVars: H.array(H.string())
      .optional()
      .describe(
        "Allowlist of environment variable names HTTP hooks may interpolate into headers. When set, each hook's effective allowedEnvVars is the intersection with this list. If undefined, no restriction is applied. Arrays merge across settings sources (same semantics as allowedMcpServers).",
      ),
    allowManagedPermissionRulesOnly: H.boolean()
      .optional()
      .describe(
        "When true (and set in managed settings), only permission rules (allow/deny/ask) from managed settings are respected. User, project, local, and CLI argument permission rules are ignored.",
      ),
    allowManagedMcpServersOnly: H.boolean()
      .optional()
      .describe(
        "When true (and set in managed settings), allowedMcpServers is only read from managed settings. deniedMcpServers still merges from all sources, so users can deny servers for themselves. Users can still add their own MCP servers, but only the admin-defined allowlist applies.",
      ),
    allowAllClaudeAiMcps: H.boolean()
      .optional()
      .describe(
        "When true (and set in managed settings), claude.ai cloud MCP connectors load alongside managed-mcp.json instead of being suppressed by its exclusive-control lockdown. Default off preserves the lockdown. Read from managed settings only.",
      ),
    strictPluginOnlyCustomization: H.preprocess(
      (t) => (Array.isArray(t) ? t.filter((n) => TCe.includes(n)) : t),
      H.union([H.boolean(), H.array(H.enum(TCe))]),
    )
      .optional()
      .catch(void 0)
      .describe(
        'When set in managed settings, blocks non-plugin customization sources for the listed surfaces. Array form locks specific surfaces (e.g. ["skills", "hooks"]); `true` locks all four; `false` is an explicit no-op. Blocked: ~/.claude/{surface}/, .claude/{surface}/ (project), settings.json hooks, .mcp.json. NOT blocked: managed (policySettings) sources, plugin-provided customizations. ' +
          "Composes with strictKnownMarketplaces for end-to-end admin control \u2014 plugins gated by " +
          "marketplace allowlist, everything else blocked here.",
      ),
    statusLine: H.object({
      type: H.literal("command"),
      command: H.string(),
      padding: H.number().optional(),
      refreshInterval: H.number()
        .min(1)
        .optional()
        .catch(void 0)
        .describe(
          "Re-run the status line command every N seconds in addition to event-driven updates",
        ),
      hideVimModeIndicator: H.boolean()
        .optional()
        .describe(
          "Hide the built-in `-- INSERT --` / `-- VISUAL --` indicator below the prompt. Use this when your status line script renders `vim.mode` itself.",
        ),
    })
      .optional()
      .describe("Custom status line display configuration"),
    prUrlTemplate: H.string()
      .optional()
      .describe(
        'URL template for PR links in the footer link badges and inline messages. The detected git PR is rendered as the first footer-link badge. Placeholders: {host} {owner} {repo} {number} {url}. Example: "https://reviews.example.com/{owner}/{repo}/pull/{number}"',
      ),
    footerLinksRegexes: H.array(p1u().catch(Dws))
      .transform((t) => t.filter((n) => n !== Dws))
      .optional()
      .catch(void 0)
      .describe(
        "Extra clickable footer badges that appear when a regex matches turn output (tool results and assistant responses). Read from user, flag, and managed settings only; ignored in project .claude/settings.json and local .claude/settings.local.json. At most 5 badges render; the oldest is displaced by newer matches and /clear removes them. Use to surface IDs printed by project CLIs as session links.",
      ),
    subagentStatusLine: H.object({
      type: H.literal("command"),
      command: H.string(),
    })
      .optional()
      .describe(
        "Custom per-subagent status line shown in the agent panel; receives row context as JSON on stdin",
      ),
    enabledPlugins: H.record(H.string(), H.union([H.array(H.string()), H.boolean(), H.undefined()]))
      .optional()
      .describe(
        'Enabled plugins using plugin-id@marketplace-id format. Example: { "formatter@anthropic-tools": true }. Also supports extended format with version constraints. Settings precedence is user < project < local < flag < policy, so to disable a plugin that project settings enable, set it to false in .claude/settings.local.json \u2014 setting false in ~/.claude/settings.json is overridden by the project.',
      ),
    extraKnownMarketplaces: H.record(H.string(), u1u())
      .check((t) => {
        for (let [n, r] of Object.entries(t.value))
          if (r.source.source === "settings" && r.source.name !== n)
            t.issues.push({
              code: "custom",
              input: r.source.name,
              path: [n, "source", "name"],
              message: `Settings-sourced marketplace name must match its extraKnownMarketplaces key (got key "${n}" but source.name "${r.source.name}")`,
            });
      })
      .optional()
      .describe(
        "Additional marketplaces to make available for this repository. Typically used in repository .claude/settings.json to ensure team members have required plugin sources.",
      ),
    strictKnownMarketplaces: H.array(ZRt())
      .optional()
      .describe(
        "Enterprise strict list of allowed marketplace sources. When set in managed settings, ONLY these exact sources can be added as marketplaces. The check happens BEFORE downloading, so blocked sources never touch the filesystem. " +
          "Note: this is a policy gate only \u2014 it does NOT register marketplaces. " +
          "To pre-register allowed marketplaces for users, also set extraKnownMarketplaces.",
      ),
    blockedMarketplaces: H.array(ZRt())
      .optional()
      .describe(
        "Enterprise blocklist of marketplace sources. When set in managed settings, these exact sources are blocked from being added as marketplaces. The check happens BEFORE downloading, so blocked sources never touch the filesystem.",
      ),
    disableSideloadFlags: H.boolean()
      .optional()
      .describe(
        "When true (and set in managed settings), rejects the --plugin-dir, --plugin-url, --agents, and non-sdk --mcp-config CLI flags at startup. Closes the CLI-flag bypass of strictKnownMarketplaces. Pair with allowedMcpServers for per-server MCP control; this setting does not gate other MCP entry points (SDK setMcpServers, claude mcp add, .mcp.json). Also blocks surfaces that spawn the CLI with these flags internally (see settings documentation). Only honored from managed settings; ignored in user/project/local settings.",
      ),
    pluginSuggestionMarketplaces: H.array(H.string())
      .optional()
      .describe(
        "Marketplace names whose plugins may surface as contextual install suggestions (relevance-based tips). No marketplace-declared suggestions surface without this allowlist; the built-in first-party frontend-design tip is unaffected. Only honored when set in managed settings (policy scope); the key is ignored in user, project, and local settings. A name only takes effect when the marketplace is registered on the machine AND its registered source is also declared in managed settings, either as the extraKnownMarketplaces entry for that name or as an entry of strictKnownMarketplaces. A marketplace registered from a different source under an allowlisted name is ignored. The official marketplace is exempt from the source requirement: allowlisting its name alone suffices, since that name can only register from the official Anthropic source.",
      ),
    forceLoginMethod: H.enum(["claudeai", "console", "gateway"])
      .optional()
      .catch(void 0)
      .describe(
        'Force a specific login method: "claudeai" for Claude Pro/Max, "console" for Console billing, "gateway" for the Cloud gateway OIDC device flow',
      ),
    forceLoginGatewayUrl: H.string()
      .url()
      .optional()
      .catch(void 0)
      .describe(
        '@internal Cloud gateway URL to pre-fill and auto-connect to during login. Typically set in local managed settings alongside forceLoginMethod: "gateway" so users never type the URL. Hidden from public SDK types until Cloud gateway is documented.',
      ),
    parentSettingsBehavior: H.enum(["first-wins", "merge"])
      .optional()
      .describe(
        'Controls whether the SDK parent tier (Options.managedSettings / --managed-settings) layers under this admin tier. "first-wins" ' +
          "(default): parent is dropped \u2014 admin tiers are the only policy " +
          `source. "merge": parent's restrictive-only-filtered settings union under the admin winner. Has no effect when no admin tier exists (parent applies as the sole policy tier, still filtered restrictive-only).`,
      ),
    forceLoginOrgUUID: H.union([H.string(), H.array(H.string())])
      .optional()
      .describe(
        "Organization UUID to require for OAuth login. Accepts a single UUID string or an array of UUIDs (any one is permitted). When set in managed settings, login fails if the authenticated account does not belong to a listed organization.",
      ),
    forceRemoteSettingsRefresh: H.boolean()
      .optional()
      .describe(
        "When set in managed settings, the CLI blocks startup until remote managed settings are freshly fetched, and exits if the fetch fails",
      ),
    otelHeadersHelper: H.string()
      .optional()
      .describe("Path to a script that outputs OpenTelemetry headers"),
    outputStyle: H.string()
      .optional()
      .describe("Controls the output style for assistant responses"),
    viewMode: H.enum(["default", "verbose", "focus"])
      .optional()
      .catch(void 0)
      .describe("Default transcript view mode on startup"),
    language: H.string()
      .optional()
      .describe(
        'Preferred language for Claude responses and voice dictation (e.g., "japanese", "spanish")',
      ),
    skipWebFetchPreflight: H.boolean()
      .optional()
      .describe(
        "Skip the WebFetch blocklist check for enterprise environments with restrictive security policies",
      ),
    sandbox: PRr().optional(),
    feedbackSurveyRate: H.number()
      .min(0)
      .max(1)
      .optional()
      .describe(
        "Probability (0\u20131) that the session quality survey appears when eligible. 0.05 is a reasonable starting point.",
      ),
    spinnerTipsEnabled: H.boolean().optional().describe("Whether to show tips in the spinner"),
    spinnerVerbs: H.object({
      mode: H.enum(["append", "replace"]),
      verbs: H.array(H.string()),
    })
      .optional()
      .describe(
        'Customize spinner verbs. mode: "append" adds verbs to defaults, "replace" uses only your verbs.',
      ),
    spinnerTipsOverride: H.object({
      excludeDefault: H.boolean().optional(),
      tips: H.array(H.string()),
    })
      .optional()
      .describe(
        "Override spinner tips. tips: array of tip strings. excludeDefault: if true, only show custom tips (default: false).",
      ),
    syntaxHighlightingDisabled: H.boolean()
      .optional()
      .describe("Whether to disable syntax highlighting in diffs"),
    terminalTitleFromRename: H.boolean()
      .optional()
      .describe(
        "Whether /rename updates the terminal tab title (defaults to true). Set to false to keep auto-generated topic titles.",
      ),
    alwaysThinkingEnabled: H.boolean()
      .optional()
      .describe(
        "When false, thinking is disabled. When absent or true, thinking is enabled automatically for supported models.",
      ),
    effortLevel: H.enum(["low", "medium", "high", "xhigh"])
      .optional()
      .catch(void 0)
      .describe("Persisted effort level for supported models."),
    ultracode: H.boolean()
      .optional()
      .catch(void 0)
      .describe(
        "Enable ultracode for the session: xhigh effort plus standing dynamic-workflow orchestration. " +
          "Session-scoped \u2014 typically provided via --settings or the apply_flag_settings control request; " +
          "interactive toggles never persist it. Requires workflows to be enabled and an xhigh-capable model.",
      ),
    autoCompactWindow: H.number()
      .int()
      .min(1e5)
      .max(1e6)
      .optional()
      .catch(void 0)
      .describe("Auto-compact window size"),
    advisorModel: H.string().optional().describe("Advisor model for the server-side advisor tool."),
    fastMode: H.boolean()
      .optional()
      .describe("When true, fast mode is enabled. When absent or false, fast mode is off."),
    fastModePerSessionOptIn: H.boolean()
      .optional()
      .describe(
        "When true, fast mode does not persist across sessions. Each session starts with fast mode off.",
      ),
    promptSuggestionEnabled: H.boolean()
      .optional()
      .describe(
        "When false, prompt suggestions are disabled. When absent or true, prompt suggestions are enabled.",
      ),
    awaySummaryEnabled: H.boolean()
      .optional()
      .describe(
        "@internal When false, the session recap (shown when you return after being away for 5+ minutes) is disabled. When absent or true, recap is enabled. Hidden from public SDK types until external launch.",
      ),
    showClearContextOnPlanAccept: H.boolean()
      .optional()
      .describe(
        'When true, the plan-approval dialog offers a "clear context" option. Defaults to false.',
      ),
    agent: H.string()
      .optional()
      .describe(
        "Name of an agent (built-in or custom) to use for the main thread. Applies the agent's system prompt, tool restrictions, and model.",
      ),
    companyAnnouncements: H.array(H.string())
      .optional()
      .describe(
        "Company announcements to display at startup (one will be randomly selected if multiple are provided)",
      ),
    pluginConfigs: H.record(
      H.string(),
      H.object({
        mcpServers: H.record(
          H.string(),
          H.record(H.string(), H.union([H.string(), H.number(), H.boolean(), H.array(H.string())])),
        )
          .optional()
          .describe("User configuration values for MCP servers keyed by server name"),
        options: H.record(
          H.string(),
          H.union([H.string(), H.number(), H.boolean(), H.array(H.string())]),
        )
          .optional()
          .describe(
            "Non-sensitive option values from plugin manifest userConfig, keyed by option name. Sensitive values go to secure storage instead.",
          ),
      }).or(H.undefined()),
    )
      .optional()
      .describe(
        "Per-plugin configuration including MCP server user configs, keyed by plugin ID (plugin@marketplace format)",
      ),
    remote: H.object({
      defaultEnvironmentId: H.string()
        .optional()
        .describe("Default environment ID to use for cloud sessions"),
    })
      .optional()
      .describe("Cloud session configuration"),
    autoUpdatesChannel: H.enum(["latest", "stable", "rc"])
      .optional()
      .describe("Release channel for auto-updates (latest or stable)"),
    minimumVersion: H.string()
      .optional()
      .describe(
        "Minimum version to stay on - prevents downgrades when switching to stable channel",
      ),
    requiredMinimumVersion: H.string()
      .optional()
      .describe(
        "Minimum Claude Code version required to start. If the running version is older, Claude Code exits at startup with instructions to update. Only enforced from managed (policy) settings.",
      ),
    requiredMaximumVersion: H.string()
      .optional()
      .describe(
        "Maximum Claude Code version allowed to start. If the running version is newer, Claude Code exits at startup with instructions to install an approved version. Only enforced from managed (policy) settings.",
      ),
    plansDirectory: H.string()
      .optional()
      .describe(
        "Custom directory for plan files, relative to project root. If not set, defaults to ~/.claude/plans/",
      ),
    tui: H.enum(["default", "fullscreen"])
      .optional()
      .describe(
        'Terminal UI renderer. "fullscreen" uses the flicker-free alt-screen renderer with virtualized scrollback (equivalent to CLAUDE_CODE_NO_FLICKER=1). "default" uses the classic main-screen renderer.',
      ),
    ...!1,
    voice: H.object({
      enabled: H.boolean().optional(),
      mode: H.enum(["hold", "tap"])
        .optional()
        .describe("'hold' (default): hold to talk. 'tap': tap to start, tap to stop+submit."),
      autoSubmit: H.boolean()
        .optional()
        .describe("Submit the prompt when hold-to-talk is released (hold mode only)"),
    })
      .optional()
      .describe("Voice mode settings (hold-to-talk / tap-to-toggle dictation)"),
    channelsEnabled: H.boolean()
      .optional()
      .describe(
        "Managed-org opt-in for channel notifications (MCP servers with the claude/channel capability pushing inbound messages). claude.ai Teams/Enterprise: default off. Console: default on unless managed settings exist. Set true to allow; users then select servers via --channels.",
      ),
    allowedChannelPlugins: H.array(
      H.object({
        marketplace: H.string(),
        plugin: H.string(),
      }),
    )
      .optional()
      .describe(
        "Managed-org allowlist of channel plugins. When set, " +
          "replaces the default Anthropic allowlist \u2014 admins decide which " +
          "plugins may push inbound messages. Undefined falls back to the default. Requires channelsEnabled: true.",
      ),
    prefersReducedMotion: H.boolean()
      .optional()
      .describe(
        "Reduce or disable animations for accessibility (spinner shimmer, flash effects, etc.)",
      ),
    doneMeansMerged: H.boolean()
      .optional()
      .describe(
        "@internal When true, Claude keeps working until the PR is ready for you to merge, a cron/Monitor is armed to resume later, or it hands you a self-contained next step.",
      ),
    totalTokensReminder: H.enum(["off", "infinite", "fixed", "countdown"])
      .optional()
      .describe(
        "@internal Emit a <total_tokens>N tokens left</total_tokens> block in the system prompt and after each tool result. 'infinite' uses the literal value Infinite, 'fixed' uses 5000000, 'countdown' uses the live remaining context-window tokens. Defaults to off. Env var CLAUDE_CODE_TOTAL_TOKENS_REMINDER overrides.",
      ),
    autoMemoryEnabled: H.boolean()
      .optional()
      .describe(
        "Enable auto-memory for this project. When false, Claude will not read from or write to the auto-memory directory.",
      ),
    autoMemoryDirectory: H.string()
      .optional()
      .describe(
        "Custom directory path for auto-memory storage. Supports ~/ prefix for home directory expansion. Ignored if set in projectSettings (checked-in .claude/settings.json) for security. When unset, defaults to ~/.claude/projects/<sanitized-cwd>/memory/.",
      ),
    autoDreamEnabled: H.boolean()
      .optional()
      .describe(
        "Enable background memory consolidation (auto-dream). When set, overrides the server-side default.",
      ),
    showThinkingSummaries: H.boolean()
      .optional()
      .describe(
        "Request API-side thinking summaries and show them in the conversation and in the transcript view (ctrl+o). Set explicitly to override the default for your install.",
      ),
    skipDangerousModePermissionPrompt: H.boolean()
      .optional()
      .describe("Whether the user has accepted the bypass permissions mode dialog"),
    skipWorkflowUsageWarning: H.boolean()
      .optional()
      .describe(
        "@internal Whether the user has accepted the multi-agent workflow usage warning. Until set, auto permission mode prompts before running a workflow.",
      ),
    disableAutoMode: H.enum(["disable"]).optional().describe("Disable auto mode"),
    sshConfigs: H.array(
      H.object({
        id: H.string().describe(
          "Unique identifier for this SSH config. Used to match configs across settings sources.",
        ),
        name: H.string().describe("Display name for the SSH connection"),
        sshHost: H.string().describe(
          'SSH host in format "user@hostname" or "hostname", or a host alias from ~/.ssh/config',
        ),
        sshPort: H.number().int().optional().describe("SSH port (default: 22)"),
        sshIdentityFile: H.string().optional().describe("Path to SSH identity file (private key)"),
        startDirectory: H.string()
          .optional()
          .describe(
            "Default working directory on the remote host. Supports tilde expansion (e.g. ~/projects). If not specified, defaults to the remote user home directory. Can be overridden by the [dir] positional argument in `claude ssh <config> [dir]`.",
          ),
      }),
    )
      .optional()
      .describe(
        "SSH connection configurations for remote environments. Typically set in managed settings by enterprise administrators to pre-configure SSH connections for team members.",
      ),
    claudeMd: H.string()
      .optional()
      .describe(
        "CLAUDE.md-style instructions injected as organization-managed memory. Only honored from managed/policy settings.",
      ),
    claudeMdExcludes: H.array(H.string())
      .optional()
      .describe(
        'Glob patterns or absolute paths of CLAUDE.md files to exclude from loading. Patterns are matched against absolute file paths using picomatch. Only applies to User, Project, and Local memory types (Managed/policy files cannot be excluded). Examples: "/home/user/monorepo/CLAUDE.md", "**/code/CLAUDE.md", "**/some-dir/.claude/rules/**"',
      ),
    pluginTrustMessage: H.string()
      .optional()
      .describe(
        'Custom message to append to the plugin trust warning shown before installation. Only read from policy settings (managed-settings.json / MDM). Useful for enterprise administrators to add organization-specific context (e.g., "All plugins from our internal marketplace are vetted and approved.").',
      ),
    theme: H.union([
      H.enum(NRt),
      H.string()
        .startsWith("custom:")
        .transform((t) => t),
    ])
      .optional()
      .catch(void 0)
      .describe("Color theme for the UI"),
    editorMode: H.enum(Pfn)
      .optional()
      .catch(void 0)
      .describe("Key binding mode for the prompt input"),
    verbose: H.boolean()
      .optional()
      .describe("Show full tool output instead of truncated summaries"),
    preferredNotifChannel: H.enum(Dfn)
      .optional()
      .catch(void 0)
      .describe("Preferred OS notification channel"),
    autoCompactEnabled: H.boolean()
      .optional()
      .describe("Automatically compact conversation when context fills"),
    precomputeCompactionEnabled: H.boolean()
      .optional()
      .describe(
        "@internal Precompute the compaction summary in the background before it is needed. Only applies when auto-compact is on.",
      ),
    switchModelsOnFlag: H.boolean()
      .optional()
      .describe(
        "When safety measures flag a message, automatically switch to a different model to keep chatting. When off, your session will pause instead.",
      ),
    autoScrollEnabled: H.boolean()
      .optional()
      .describe("Auto-scroll the conversation view to bottom (fullscreen mode only)"),
    wheelScrollAccelerationEnabled: H.boolean()
      .optional()
      .describe("Ramp mouse-wheel scroll speed during fast scrolls (fullscreen mode only)"),
    fileCheckpointingEnabled: H.boolean()
      .optional()
      .describe("Snapshot files before edits so /rewind can restore them"),
    showTurnDuration: H.boolean()
      .optional()
      .describe('Show "Cooked for Nm Ns" after each assistant turn'),
    showMessageTimestamps: H.boolean()
      .optional()
      .describe("Stamp each assistant message with its arrival time"),
    terminalProgressBarEnabled: H.boolean()
      .optional()
      .describe("Emit OSC 9;4 progress sequences during long operations"),
    todoFeatureEnabled: H.boolean().optional().describe("Enable the todo / task tracking panel"),
    teammateMode: H.enum($vs)
      .optional()
      .catch(void 0)
      .describe("How spawned teammates execute (tmux, iterm2, in-process, auto)"),
    remoteControlAtStartup: H.boolean()
      .optional()
      .describe("Start Remote Control bridge automatically each session"),
    isolatePeerMachines: H.boolean()
      .optional()
      .describe(
        "Require explicit approval before SendMessage can reach a peer session on another machine via Remote Control",
      ),
    daemonColdStart: H.enum(["transient", "ask"])
      .optional()
      .describe(
        "When no background service is running: 'transient' spawns one for this login session; 'ask' offers to install it persistently",
      ),
    autoUploadSessions: H.boolean()
      .optional()
      .describe("Mirror local sessions to claude.ai as view-only (no remote control)"),
    inputNeededNotifEnabled: H.boolean()
      .optional()
      .describe("Push to mobile when a permission prompt or question is waiting"),
    agentPushNotifEnabled: H.boolean()
      .optional()
      .describe("Allow Claude to push proactive mobile notifications"),
    ...Sws(e),
  }).passthrough();
}
function Mws(e, t, n) {
  return H.array(
    t.catch(
      (r) => (
        n({
          path: `${e}[]`,
          message: `Invalid entry was ignored: ${r.issues[0]?.message ?? "failed validation"}`,
        }),
        Pws
      ),
    ),
  )
    .transform((r) => r.filter((o) => o !== Pws))
    .optional();
}
function dLr(e) {
  let t = _M(),
    n = {};
  for (let [i, a] of Object.entries(t.shape))
    n[i] = a.catch((l) => {
      e({
        path: i,
        message: `${l.issues[0]?.message ?? "Failed schema validation"}. This field was ignored.`,
      });
      return;
    });
  ((n.allowedMcpServers = Mws("allowedMcpServers", cmn(), e).catch(
    () => (
      e({
        path: "allowedMcpServers",
        message:
          '"allowedMcpServers" was present but invalid; enforcing an empty allowlist (no MCP servers admitted) until it is fixed.',
      }),
      []
    ),
  )),
    (n.deniedMcpServers = Mws("deniedMcpServers", umn(), e).catch(() => {
      e({
        path: "deniedMcpServers",
        message:
          '"deniedMcpServers" was present but invalid and was dropped; its entries cannot be enforced until it is fixed.',
      });
      return;
    })),
    (n.allowManagedMcpServersOnly = t.shape.allowManagedMcpServersOnly.catch(
      () => (
        e({
          path: "allowManagedMcpServersOnly",
          message:
            '"allowManagedMcpServersOnly" was present but invalid; treating it as true until it is fixed.',
        }),
        !0
      ),
    )),
    (n.enforceAvailableModels = t.shape.enforceAvailableModels.catch(
      () => (
        e({
          path: "enforceAvailableModels",
          message:
            '"enforceAvailableModels" was present but invalid; treating it as true until it is fixed.',
        }),
        !0
      ),
    )),
    (n.availableModels = H.array(H.unknown())
      .transform((i, a) => {
        let l = [];
        for (let c of i)
          if (typeof c === "string") l.push(c);
          else
            e({
              path: "availableModels",
              message: `"availableModels" contained a non-string entry (${JSON.stringify(c)}); the entry was ignored.`,
            });
        return l;
      })
      .optional()
      .catch(
        () => (
          e({
            path: "availableModels",
            message:
              '"availableModels" was present but invalid; enforcing an empty allowlist (only the default model is available) until it is fixed.',
          }),
          []
        ),
      )),
    (n.forceLoginOrgUUID = t.shape.forceLoginOrgUUID.catch(
      () => (
        e({
          path: "forceLoginOrgUUID",
          message:
            '"forceLoginOrgUUID" was present but invalid; no organization is permitted to log in until it is fixed.',
        }),
        []
      ),
    )));
  let r = Object.freeze({
      mode: "deny",
    }),
    o = (i, a) =>
      H.array(
        a.catch(
          (l) => (
            e({
              path: `sandbox.credentials.${i}[]`,
              message: `Invalid entry was ignored: ${l.issues[0]?.message ?? "failed validation"}. This credential is NOT protected until the entry is fixed.`,
            }),
            r
          ),
        ),
      )
        .transform((l) => l.filter((c) => c !== r))
        .optional();
  return (
    (n.sandbox = PRr()
      .extend({
        credentials: H.object({
          files: o("files", LRr()),
          envVars: o("envVars", DRr()),
        })
          .optional()
          .catch((i) => {
            e({
              path: "sandbox.credentials",
              message: `${i.issues[0]?.message ?? "Failed schema validation"}. The credentials block was dropped; no credential protection is applied until it is fixed.`,
            });
            return;
          }),
      })
      .optional()
      .catch((i) => {
        e({
          path: "sandbox",
          message: `${i.issues[0]?.message ?? "Failed schema validation"}. This field was ignored.`,
        });
        return;
      })),
    H.object(n)
      .passthrough()
      .transform((i) => {
        for (let a of Object.keys(i)) if (i[a] === void 0) delete i[a];
        return i;
      })
  );
}
function $et(e) {
  return "serverName" in e && e.serverName !== void 0;
}
function dmn(e) {
  return "serverCommand" in e && e.serverCommand !== void 0;
}
function pmn(e) {
  return "serverUrl" in e && e.serverUrl !== void 0;
}
var c1u, agg, u1u, cmn, umn, d1u, TCe, Dws, p1u, _M, Pws;
