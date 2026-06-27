// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module F5c
// matched 2.1.88 source: src/main.tsx
// class=modified  jaccard=0.2757  score=0.4843  fileCov=0.3903
// note: deminified; 11 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: startDeferredPrefetches, main
// [unwrapped __esm module F5c] deps: SGo, Lne, eqe, fn, xW, jS, Jt, HO, JN
((FZ = require("fs/promises")), (gV = require("path")), (N5c = /^[a-zA-Z0-9_-]+$/));
function logManagedSettings() {
  try {
    let e = yn("policySettings");
    if (e) {
      let t = MLr(e);
      G("tengu_managed_settings_loaded", {
        keyCount: t.length,
        keys: t.join(","),
      });
    }
  } catch {}
}
function isBeingDebugged() {
  let e = gG(),
    t = process.execArgv.some((r) => {
      if (e) return /--inspect(-brk)?/.test(r);
      else return /--inspect(-brk)?|--debug(-brk)?/.test(r);
    }),
    n = Oe.NODE_OPTIONS && /--inspect(-brk)?|--debug(-brk)?/.test(Oe.NODE_OPTIONS);
  try {
    return !!global.require("inspector").url() || t || n;
  } catch {
    return t || n;
  }
}
function W5c() {
  let e = zo($2() ?? Ey());
  (ROc($t(), nH(e, OS()), rH(e)),
    mp()
      .then(async ({ enabled: t, errors: n }) => {
        let r = R0();
        (OKi(t, r),
          await Promise.all(
            t.map(async (o) => {
              if (!o.mcpServers) {
                let s = await wre(o, []);
                if (s) o.mcpServers = s;
              }
              if (!o.lspServers) {
                let s = await Mqe(o, []);
                if (s) o.lspServers = s;
              }
            }),
          ),
          NKi(t, r, kue()),
          BKi(n, r, {
            cacheOnly: true,
          }),
          IOc(t, r));
      })
      .catch((t) => ke(t)));
}
function x1m() {
  let e = Ohe(),
    t = {
      allow: 0,
      soft_deny: 0,
      hard_deny: 0,
      environment: 0,
    },
    n = 0;
  for (let r of ["allow", "soft_deny", "hard_deny", "environment"])
    for (let o of e?.[r] ?? []) {
      if (o === Syt) continue;
      ((t[r] += On(
        o.split(`
`),
        (s) => s.trim().length > 0,
      )),
        (n += On(o.split(/\s+/), Boolean)));
    }
  return {
    auto_mode_allow_rule_count: t.allow,
    auto_mode_soft_deny_rule_count: t.soft_deny,
    auto_mode_hard_deny_rule_count: t.hard_deny,
    auto_mode_environment_rule_count: t.environment,
    auto_mode_rule_word_count: n,
  };
}
function getCertEnvVarTelemetry() {
  let e = {};
  if (process.env.NODE_EXTRA_CA_CERTS) e.has_node_extra_ca_certs = true;
  if (process.env.CLAUDE_CODE_CLIENT_CERT) e.has_client_cert = true;
  if (AJe("--use-system-ca")) e.has_use_system_ca = true;
  if (AJe("--use-openssl-ca")) e.has_use_openssl_ca = true;
  if (process.env.CLAUDE_CODE_CERT_STORE) e.cert_store = process.env.CLAUDE_CODE_CERT_STORE;
  return e;
}
async function logStartupTelemetry(e) {
  if (Rj()) return;
  let [t, n, r] = await Promise.all([cb(), dCe(), aar()]),
    o = tMc(),
    s = nMc(e),
    i = rMc(Dr());
  G("tengu_startup_telemetry", {
    is_git: t,
    worktree_count: n,
    gh_auth_status: $e(r),
    sandbox_enabled: xo.isSandboxingEnabled(),
    are_unsandboxed_commands_allowed: xo.areUnsandboxedCommandsAllowed(),
    is_auto_bash_allowed_if_sandbox_enabled: xo.isAutoAllowBashIfSandboxedEnabled(),
    auto_updater_disabled: xme(),
    prefers_reduced_motion: Dr().prefersReducedMotion ?? false,
    theme: wc("theme", "dark").value,
    set_env_var_count: o.length,
    set_env_vars: o.join(","),
    nondefault_setting_count: s.length,
    nondefault_settings: s.join(","),
    set_user_settings_count: i.length,
    set_user_settings: i.join(","),
    ...getCertEnvVarTelemetry(),
    ...x1m(),
  });
}
function L1m() {
  if ((jOc(), Dt().migrationVersion !== RZo))
    (NOc(),
      UOc(),
      i1c(),
      QOc(),
      WOc(),
      e1c(),
      KOc(),
      $Oc(),
      XOc(),
      n1c(),
      VOc(),
      o1c(),
      gn((e) =>
        e.migrationVersion === RZo
          ? e
          : {
              ...e,
              migrationVersion: RZo,
            },
      ));
  NGl().catch(() => {});
}
function prefetchSystemContextIfSafe() {
  if (Ir()) {
    (In("info", "prefetch_system_context_non_interactive"), hH());
    return;
  }
  if (ad()) (In("info", "prefetch_system_context_has_trust"), hH());
  else In("info", "prefetch_system_context_skipped_no_trust");
}
function startDeferredPrefetches() {
  if (ut(process.env.CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER) || md()) return;
  if (
    (hwi(),
    uS(),
    prefetchSystemContextIfSafe(),
    yfr(),
    ut(process.env.CLAUDE_CODE_USE_BEDROCK) && !ut(process.env.CLAUDE_CODE_SKIP_BEDROCK_AUTH))
  )
    d1t();
  if (
    ut(process.env.CLAUDE_CODE_USE_ANTHROPIC_AWS) &&
    !ut(process.env.CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH)
  )
    d1t();
  if (ut(process.env.CLAUDE_CODE_USE_MANTLE) && !ut(process.env.CLAUDE_CODE_SKIP_MANTLE_AUTH))
    d1t();
  if (ut(process.env.CLAUDE_CODE_USE_VERTEX) && !ut(process.env.CLAUDE_CODE_SKIP_VERTEX_AUTH))
    n8r();
  if (
    (nOn($t(), AbortSignal.timeout(3000), []),
    dOi(),
    Svi(),
    $oi(),
    n$.initialize(),
    !md() && !da() && !N2())
  )
    KTt.initialize();
  if (at("tengu_drift_lantern", false))
    Promise.resolve()
      .then(() => (b1c(), _1c))
      .then((e) => e.startEventLoopStallDetector());
  if (RZe()) nOi(HOi);
}
async function main() {
  (pa("main_function_start"),
    iMc(),
    process.on("exit", () => {
      N1m();
    }),
    pa("main_warning_handler_initialized"));
  let e = process.argv.indexOf("--handle-uri");
  if (e !== -1 && process.argv[e + 1]) {
    let c = lon(process.argv);
    if (c) (console.error(c), process.exit(1));
    let u = process.argv[e + 1],
      { enableConfigs: d } = await Promise.resolve().then(() => (er(), NQ));
    d();
    let { handleDeepLinkUri: p } = await Promise.resolve().then(() => (M1c(), P1c)),
      f = await p(u);
    process.exit(f);
  }
  let t = process.argv.slice(2),
    n = t.includes("-p") || t.includes("--print"),
    r = t.includes("--init-only"),
    o = t.some((c) => c.startsWith("--sdk-url")),
    s = n || r || o || !process.stdout.isTTY;
  if (s) Ice();
  (tbr(!s), ubs(s), mbr(dbs(t)), con());
  let a = (() => {
    if (ut(process.env.GITHUB_ACTIONS)) return "github-action";
    if (process.env.CLAUDE_CODE_ENTRYPOINT === "sdk-ts") return "sdk-typescript";
    if (process.env.CLAUDE_CODE_ENTRYPOINT === "sdk-py") return "sdk-python";
    if (process.env.CLAUDE_CODE_ENTRYPOINT === "sdk-cli") return "sdk-cli";
    if (process.env.CLAUDE_CODE_ENTRYPOINT === "claude-vscode") return "claude-vscode";
    if (process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent") return "local-agent";
    if (process.env.CLAUDE_CODE_ENTRYPOINT === "claude-desktop") return "claude-desktop";
    let c =
      Oe.CLAUDE_CODE_SESSION_ACCESS_TOKEN ||
      Oe.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR ||
      Oe.CLAUDE_SESSION_INGRESS_TOKEN_FILE;
    if (process.env.CLAUDE_CODE_ENTRYPOINT === "remote" || c) return "remote";
    return "cli";
  })();
  ibr(a);
  let l = process.env.CLAUDE_CODE_QUESTION_PREVIEW_FORMAT;
  if (l === "markdown" || l === "html") msn(l);
  else if (!a.startsWith("sdk-") && a !== "claude-desktop" && a !== "local-agent" && a !== "remote")
    msn("markdown");
  if (process.env.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge") pbr("remote-control");
  (pa("main_client_type_determined"),
    E7o(),
    pa("main_before_run"),
    await run(),
    pa("main_after_run"));
}
async function M1m(e, t) {
  if (!process.stdin.isTTY && !process.argv.includes("mcp")) {
    if (t === "stream-json") return (process.stdin.setEncoding("utf8"), GEr(process.stdin));
    process.stdin.setEncoding("utf8");
    let n = "",
      r = (s) => {
        if (n.length + s.length > V5c)
          return (
            process.stdin.off("data", r),
            ws(
              `Error: piped stdin input exceeds ${V5c / 1024 / 1024}MB. Pass large content as a file path in your prompt instead.`,
            )
          );
        n += s;
      };
    process.stdin.on("data", r);
    let o = await WIt(process.stdin, 3000);
    if ((process.stdin.off("data", r), o))
      T3(
        "Warning: no stdin data received in 3s, proceeding without it. If piping from a slow command, redirect stdin explicitly: < /dev/null to skip, or wait longer.",
      );
    return [e, n].filter(Boolean).join(`
`);
  }
  return e;
}
async function run() {
  pa("run_function_start");
  let e = new idc().configureHelp(LTe()).enablePositionalOptions();
  pa("run_commander_initialized");
  let t = false;
  (e.hook("preAction", async (i, a) => {
    pa("preAction_start");
    let l = performance.now();
    if (
      (await Promise.all([Uet(), Hjr()]),
      pa("preAction_after_mdm"),
      await i8o(),
      pa("preAction_after_init"),
      !Oe.CLAUDE_CODE_DISABLE_TERMINAL_TITLE)
    )
      process.title = "claude";
    let { initSinks: c } = await Promise.resolve().then(() => (wYe(), bHt));
    (c(), pa("preAction_after_sinks"));
    let u = i.getOptionValue("pluginDir");
    if (Array.isArray(u) && u.length > 0 && u.every((h) => typeof h === "string"))
      (Mbr(u), PI("preAction: --plugin-dir inline plugins"));
    let d = i.getOptionValue("pluginDirNoMcp");
    if (Array.isArray(d) && d.length > 0 && d.every((h) => typeof h === "string"))
      ($br(d), PI("preAction: --plugin-dir-no-mcp inline plugins"));
    let p = i.getOptionValue("pluginUrl");
    if (Array.isArray(p) && p.length > 0 && p.every((h) => typeof h === "string"))
      (Obr(p), PI("preAction: --plugin-url inline plugins"));
    (L1m(), pa("preAction_after_migrations"));
    let f = a.parent?.name() === "auth";
    if (yn("policySettings")?.forceRemoteSettingsRefresh && !f) {
      let h = await ryo(L4n);
      if (!h.valid) return ws(h.message);
    } else if (fr() === "gateway" && !f) {
      if (!(await L4n()))
        return ws(
          `Couldn't load settings from Cloud gateway ${km()?.url ?? ""}. Check your network connection, or run \`claude auth login\` to re-authenticate.`,
        );
    } else L4n();
    let m = a === e && _cr();
    bcr({
      startupAwaited: m,
    });
    {
      let h = await Emn(pLt(), Wet());
      if (h) return ws(h);
      if (Fae()) $Me();
      kLr.subscribe(() => {
        (ak(), uS.cache.clear?.());
      });
    }
    if (Lpt()) {
      let h = [],
        y = (b) => (Array.isArray(b) ? b.length > 0 : typeof b === "string" && b.length > 0);
      for (let [b, _] of [
        ["pluginDir", "--plugin-dir"],
        ["pluginDirNoMcp", "--plugin-dir-no-mcp"],
        ["pluginUrl", "--plugin-url"],
        ["agents", "--agents"],
      ])
        if (y(i.getOptionValue(b)) || y(a.getOptionValue(b))) h.push(_);
      if (h.length > 0) return ws(Dpt(h));
    }
    let g = suc(a);
    if (g) return ws(g);
    if (
      (n$.subscribe((h) => {
        if (h === "policySettings") (ak(), uS.cache.clear?.());
      }),
      pa("preAction_after_remote_settings"),
      pa("preAction_after_settings_sync"),
      a === e && i.getOptionValue("worktree") === void 0 && !Oe.CLAUDE_CODE_SYNC_PLUGIN_INSTALL)
    ) {
      let h = i.getOptionValue("addDir");
      if (Array.isArray(h) && h.every((y) => typeof y === "string")) Pge(h);
      (mp().catch(() => {}), (t = true), pa("preAction_after_plugin_early_kick"));
    }
    (Zc("pre_action_ms", performance.now() - l, l), Tho(a === e));
  }),
    e
      .name("claude")
      .description(
        "Claude Code - starts an interactive session by default, use -p/--print for non-interactive output",
      )
      .argument("[prompt]", "Your prompt", String)
      .helpOption("-h, --help", "Display help for command")
      .option(
        "-d, --debug [filter]",
        'Enable debug mode with optional category filtering (e.g., "api,hooks" or "!1p,!file")',
        (i) => true,
      )
      .addOption(
        new Ec("-d2e, --debug-to-stderr", "(deprecated) Enable debug mode (to stderr)")
          .argParser(Boolean)
          .hideHelp()
          .implies({
            debug: true,
          }),
      )
      .option(
        "--debug-file <path>",
        "Write debug logs to a specific file path (implicitly enables debug mode)",
        () => true,
      )
      .option("--verbose", "Override verbose mode setting from config", () => true)
      .option(
        "-p, --print",
        "Print response and exit (useful for pipes). Note: The workspace trust dialog is skipped when Claude is run in non-interactive mode (via -p, or when stdout is not a TTY, e.g. piped or redirected output). Only use this in directories you trust. Settings files that fail validation are silently ignored in this mode (no error dialog is shown).",
        () => true,
      )
      .option(
        "--bare",
        "Minimal mode: skip hooks, LSP, plugin sync, attribution, auto-memory, background prefetches, keychain reads, and CLAUDE.md auto-discovery. Sets CLAUDE_CODE_SIMPLE=1. Anthropic auth is strictly ANTHROPIC_API_KEY or apiKeyHelper via --settings (OAuth and keychain are never read). 3P providers (Bedrock/Vertex/Foundry) use their own credentials. Skills still resolve via /skill-name. Explicitly provide context via: --system-prompt[-file], --append-system-prompt[-file], --add-dir (CLAUDE.md dirs), --mcp-config, --settings, --agents, --plugin-dir.",
        () => true,
      )
      .option(
        "--safe-mode",
        "Start with all customizations (CLAUDE.md, skills, plugins, hooks, MCP servers, custom commands and agents, output styles, workflows, custom themes, keybindings, and more) disabled \u2014 useful for troubleshooting a broken configuration. Admin-managed (policy) settings still apply. Auth, model selection, built-in tools, and permissions work normally. Sets CLAUDE_CODE_SAFE_MODE=1.",
        () => true,
      )
      .addOption(new Ec("--init", "Run Setup hooks with init trigger, then continue").hideHelp())
      .addOption(
        new Ec("--init-only", "Run Setup and SessionStart:startup hooks, then exit").hideHelp(),
      )
      .addOption(
        new Ec(
          "--maintenance",
          "Run Setup hooks with maintenance trigger, then continue",
        ).hideHelp(),
      )
      .addOption(
        new Ec(
          "--output-format <format>",
          'Output format (only works with --print): "text" (default), "json" (single result), or "stream-json" (realtime streaming)',
        ).choices(["text", "json", "stream-json"]),
      )
      .addOption(
        new Ec(
          "--json-schema <schema>",
          'JSON Schema for structured output validation. Example: {"type":"object","properties":{"name":{"type":"string"}},"required":["name"]}',
        ).argParser(String),
      )
      .option(
        "--include-hook-events",
        "Include all hook lifecycle events in the output stream (only works with --output-format=stream-json)",
        () => true,
      )
      .option(
        "--include-partial-messages",
        "Include partial message chunks as they arrive (only works with --print and --output-format=stream-json)",
        () => true,
      )
      .addOption(
        new Ec(
          "--session-mirror",
          "Emit transcript_mirror frames on stdout (SDK-internal; set by ProcessTransport when sessionStore is configured)",
        ).hideHelp(),
      )
      .addOption(
        new Ec(
          "--input-format <format>",
          'Input format (only works with --print): "text" (default), or "stream-json" (realtime streaming input)',
        ).choices(["text", "stream-json"]),
      )
      .option(
        "--dangerously-skip-permissions",
        "Bypass all permission checks. Recommended only for sandboxes with no internet access.",
        () => true,
      )
      .option(
        "--allow-dangerously-skip-permissions",
        "Enable bypassing all permission checks as an option, without it being enabled by default. Recommended only for sandboxes with no internet access.",
        () => true,
      )
      .addOption(
        new Ec("--thinking <mode>", "Thinking mode: enabled (equivalent to adaptive), disabled")
          .choices(["enabled", "adaptive", "disabled"])
          .hideHelp(),
      )
      .addOption(
        new Ec("--thinking-display <display>", "How thinking content appears in the response")
          .choices(["summarized", "omitted"])
          .hideHelp(),
      )
      .addOption(
        new Ec(
          "--max-thinking-tokens <tokens>",
          "[DEPRECATED. Use --thinking instead for newer models] Maximum number of thinking tokens (only works with --print)",
        )
          .argParser(Number)
          .hideHelp(),
      )
      .addOption(
        new Ec(
          "--max-turns <turns>",
          "Maximum number of agentic turns in non-interactive mode. This will early exit the conversation after the specified number of turns. (only works with --print)",
        )
          .argParser(Number)
          .hideHelp(),
      )
      .addOption(
        new Ec(
          "--max-budget-usd <amount>",
          "Maximum dollar amount to spend on API calls (only works with --print)",
        ).argParser((i) => {
          let a = Number(i);
          if (isNaN(a) || a <= 0)
            throw Error("--max-budget-usd must be a positive number greater than 0");
          return a;
        }),
      )
      .addOption(
        new Ec(
          "--task-budget <tokens>",
          "API-side task budget in tokens (output_config.task_budget)",
        )
          .argParser((i) => {
            let a = Number(i);
            if (isNaN(a) || a <= 0 || !Number.isInteger(a))
              throw Error("--task-budget must be a positive integer");
            return a;
          })
          .hideHelp(),
      )
      .option(
        "--replay-user-messages",
        "Re-emit user messages from stdin back on stdout for acknowledgment (only works with --input-format=stream-json and --output-format=stream-json)",
        () => true,
      )
      .addOption(
        new Ec(
          "--prompt-suggestions [value]",
          "Enable prompt suggestions. In print/SDK mode, emits a prompt_suggestion message after each turn with a predicted next user prompt",
        )
          .choices(["true", "false", "1", "0", "yes", "no", "on", "off"])
          .preset("true")
          .argParser((i) => {
            if (!ut(i) && !ml(i))
              throw new sdc("Allowed choices are true, false, 1, 0, yes, no, on, off.");
            return !ml(i);
          }),
      )
      .addOption(
        new Ec("--enable-auth-status", "Enable auth status messages in SDK mode")
          .default(false)
          .hideHelp(),
      )
      .option(
        "--allowedTools, --allowed-tools <tools...>",
        'Comma or space-separated list of tool names to allow (e.g. "Bash(git *) Edit")',
      )
      .option(
        "--tools <tools...>",
        'Specify the list of available tools from the built-in set. Use "" to disable all tools, "default" to use all tools, or specify tool names (e.g. "Bash,Edit,Read").',
      )
      .option(
        "--disallowedTools, --disallowed-tools <tools...>",
        'Comma or space-separated list of tool names to deny (e.g. "Bash(git *) Edit")',
      )
      .option(
        "--mcp-config <configs...>",
        "Load MCP servers from JSON files or strings (space-separated)",
      )
      .addOption(
        new Ec(
          "--permission-prompt-tool <tool>",
          "MCP tool to use for permission prompts (only works with --print)",
        )
          .argParser(String)
          .hideHelp(),
      )
      .addOption(
        new Ec("--system-prompt <prompt>", "System prompt to use for the session").argParser(
          String,
        ),
      )
      .addOption(
        new Ec("--system-prompt-file <file>", "Read system prompt from a file")
          .argParser(String)
          .hideHelp(),
      )
      .addOption(
        new Ec(
          "--append-system-prompt <prompt>",
          "Append a system prompt to the default system prompt",
        ).argParser(String),
      )
      .addOption(
        new Ec(
          "--append-system-prompt-file <file>",
          "Read system prompt from a file and append to the default system prompt",
        )
          .argParser(String)
          .hideHelp(),
      )
      .addOption(
        new Ec(
          "--plan-mode-instructions <instructions>",
          "Custom workflow body for plan mode. Replaces the default code-implementation phases in the plan-mode system reminder; the read-only enforcement preamble and ExitPlanMode protocol footer are always kept.",
        )
          .argParser(String)
          .hideHelp(),
      )
      .addOption(
        new Ec(
          "--exclude-dynamic-system-prompt-sections",
          "Move per-machine sections (cwd, env info, memory paths, git status) from the system prompt into the first user message. Improves cross-user prompt-cache reuse. Only applies with the default system prompt (ignored with --system-prompt).",
        ).default(false),
      )
      .addOption(
        new Ec("--permission-mode <mode>", "Permission mode to use for the session")
          .argParser(String)
          .choices(yM),
      )
      .option(
        "-c, --continue",
        "Continue the most recent conversation in the current directory",
        () => true,
      )
      .option(
        "-r, --resume [value]",
        "Resume a conversation by session ID, or open interactive picker with optional search term",
        (i) => i || true,
      )
      .option(
        "--fork-session",
        "When resuming, create a new session ID instead of reusing the original (use with --resume or --continue)",
        () => true,
      )
      .addOption(
        new Ec(
          "--prefill <text>",
          "Pre-fill the prompt input with text without submitting it",
        ).hideHelp(),
      )
      .addOption(
        new Ec(
          "--deep-link-origin",
          "Signal that this session was launched from a deep link",
        ).hideHelp(),
      )
      .addOption(
        new Ec(
          "--deep-link-repo <slug>",
          "Repo slug the deep link ?repo= parameter resolved to the current cwd",
        ).hideHelp(),
      )
      .addOption(
        new Ec(
          "--deep-link-last-fetch <ms>",
          "FETCH_HEAD mtime in epoch ms, precomputed by the deep link trampoline",
        )
          .argParser((i) => {
            let a = Number(i);
            return Number.isFinite(a) ? a : void 0;
          })
          .hideHelp(),
      )
      .addOption(
        new Ec(
          "--prefill-b64 <b64>",
          "Base64url-encoded --prefill value (deep-link shell-safe launch paths)",
        )
          .argParser((i) => Buffer.from(i, "base64url").toString("utf8"))
          .hideHelp(),
      )
      .addOption(
        new Ec(
          "--deep-link-cwd-b64 <b64>",
          "Base64url-encoded working directory (deep-link shell-safe launch paths)",
        )
          .argParser((i) => Buffer.from(i, "base64url").toString("utf8"))
          .hideHelp(),
      )
      .option(
        "--from-pr [value]",
        "Resume a session linked to a PR by PR number/URL, or open interactive picker with optional search term",
        (i) => i || true,
      )
      .option(
        "--no-session-persistence",
        "Disable session persistence - sessions will not be saved to disk and cannot be resumed (only works with --print)",
      )
      .addOption(
        new Ec(
          "--resume-session-at <message id>",
          "When resuming, only messages up to and including the assistant message with <message.id> (use with --resume in print mode)",
        )
          .argParser(String)
          .hideHelp(),
      )
      .addOption(
        new Ec(
          "--reply-on-resume",
          "When resuming, immediately query if the loaded transcript ends in a user-role message (set by /background mid-turn so the fork continues the in-flight turn).",
        ).hideHelp(),
      )
      .addOption(
        new Ec(
          "--rewind-files <user-message-id>",
          "Restore files to state at the specified user message and exit (requires --resume)",
        ).hideHelp(),
      )
      .option(
        "--model <model>",
        "Model for the current session. Provide an alias for the latest model (e.g. 'fable', 'opus', or 'sonnet') or a model's full name (e.g. 'claude-fable-5').",
      )
      .addOption(
        new Ec(
          "--effort <level>",
          `Effort level for the current session (${xv.join(", ")})`,
        ).argParser((i) => {
          let { level: a, warning: l } = v1i(i);
          if (l !== void 0)
            process.stderr.write(`Warning: ${l}
`);
          return a;
        }),
      )
      .option("--agent <agent>", "Agent for the current session. Overrides the 'agent' setting.")
      .option("--betas <betas...>", "Beta headers to include in API requests (API key users only)")
      .option(
        "--fallback-model <model>",
        "Enable automatic fallback to specified model(s) when the default model is overloaded or not available. Accepts a comma-separated list to try each in order. Re-tries the primary at the start of each user turn. (only works with --print)",
      )
      .addOption(
        new Ec(
          "--workload <tag>",
          "Workload tag for billing-header attribution (cc_workload). Process-scoped; set by SDK daemon callers that spawn subprocesses for cron work. (only works with --print)",
        ).hideHelp(),
      )
      .option(
        "--settings <file-or-json>",
        "Path to a settings JSON file or a JSON string to load additional settings from",
      )
      .addOption(
        new Ec(
          "--managed-settings <json>",
          "Policy-tier settings JSON from a spawning parent process (SDK use only)",
        ).hideHelp(),
      )
      .option("--add-dir <directories...>", "Additional directories to allow tool access to")
      .option(
        "--ide",
        "Automatically connect to IDE on startup if exactly one valid IDE is available",
        () => true,
      )
      .option(
        "--strict-mcp-config",
        "Only use MCP servers from --mcp-config, ignoring all other MCP configurations",
        () => true,
      )
      .option(
        "--session-id <uuid>",
        "Use a specific session ID for the conversation (must be a valid UUID)",
      )
      .option(
        "-n, --name <name>",
        "Set a display name for this session (shown in the prompt box, /resume picker, and terminal title)",
      )
      .option(
        "--agents <json>",
        `JSON object defining custom agents (e.g. '{"reviewer": {"description": "Reviews code", "prompt": "You are a code reviewer"}}')`,
      )
      .option(
        "--setting-sources <sources>",
        "Comma-separated list of setting sources to load (user, project, local).",
      )
      .option(
        "--plugin-dir <path>",
        "Load a plugin from a directory or .zip for this session only (repeatable: --plugin-dir A --plugin-dir B.zip)",
        (i, a) => [...a, i],
        [],
      )
      .addOption(
        new Ec(
          "--plugin-dir-no-mcp <path>",
          "Like --plugin-dir but the engine will not read this plugin's .mcp.json (caller owns its MCP connections)",
        )
          .argParser((i, a) => [...a, i])
          .default([])
          .hideHelp(),
      )
      .option(
        "--plugin-url <url>",
        "Fetch a plugin .zip from a URL for this session only (repeatable: --plugin-url A --plugin-url B)",
        (i, a) => [...a, ...i.split(/\s+/).filter(Boolean)],
        [],
      )
      .option("--disable-slash-commands", "Disable all skills", () => true)
      .option("--chrome", "Enable Claude in Chrome integration")
      .option("--no-chrome", "Disable Claude in Chrome integration")
      .option(
        "--file <specs...>",
        "File resources to download at startup. Format: file_id:relative_path (e.g., --file file_abc:doc.txt file_def:img.png)",
      )
      .action(async (i, a) => {
        if (
          (pa("action_handler_start"),
          a.deepLinkOrigin && a.prefillB64 !== void 0 && a.prefill === void 0)
        )
          try {
            a.prefill = yzo(a.prefillB64);
          } catch (Wn) {
            T(`Ignoring invalid --prefill-b64: ${Wn instanceof Error ? Wn.message : Wn}`, {
              level: "error",
            });
          }
        if (a.deepLinkOrigin && a.deepLinkCwdB64 !== void 0)
          try {
            (hzo(a.deepLinkCwdB64),
              process.chdir(a.deepLinkCwdB64),
              Uy(a.deepLinkCwdB64),
              _D($t()),
              Hge($t()),
              Ime.cache?.clear?.(),
              wZt(),
              ak(),
              n_(),
              PI("deeplink: originalCwd changed"),
              Z0r(),
              Rke());
          } catch (Wn) {
            T(`Ignoring invalid --deep-link-cwd-b64: ${Wn instanceof Error ? Wn.message : Wn}`, {
              level: "error",
            });
          }
        if (a.bare) process.env.CLAUDE_CODE_SIMPLE = "1";
        if (Tl())
          ((process.env.CLAUDE_CODE_SAFE_MODE = "1"),
            (process.env.CLAUDE_CODE_DISABLE_CLAUDE_MDS = "1"),
            xe("startup_safe_mode"));
        let l;
        try {
          l = $rs(a.maxTurns);
        } catch (Wn) {
          return ws(be(Wn));
        }
        if (i === "code")
          (G("tengu_code_prompt_ignored", {}),
            T3("Tip: You can launch Claude Code with just `claude`"),
            (i = void 0));
        if (i && typeof i === "string" && !/\s/.test(i) && i.length > 0) {
          if (
            (G("tengu_single_word_prompt", {
              length: i.length,
            }),
            !a.print && !a.continue && !a.resume && /^[a-zA-Z][a-zA-Z-]*$/.test(i))
          )
            await U1m(i, e);
        }
        let c;
        if (el() && !Ir() && !a.agentId)
          try {
            let { initializeSessionTeam: Wn } = await Promise.resolve().then(() => (B1c(), N1c));
            c = await Wn();
          } catch (Wn) {
            ke(Wn);
          }
        if (!Rj()) {
          let Wn = oMc(a, (Cs) => e.getOptionValueSource(Cs));
          G("tengu_cli_flags", {
            flag_count: Wn.length,
            flags: Wn.join(","),
          });
        }
        let {
          debug: u = false,
          dangerouslySkipPermissions: d,
          allowDangerouslySkipPermissions: p = false,
          tools: f = [],
          allowedTools: m = [],
          disallowedTools: g = [],
          mcpConfig: h = [],
          permissionMode: y,
          addDir: b = [],
          fallbackModel: _,
          betas: S = [],
          ide: A = false,
          sessionId: v,
          includeHookEvents: C,
          includePartialMessages: x,
          sessionMirror: I,
        } = a;
        if (a.prefill) aBt(a.prefill);
        let k,
          D = a.agents,
          P = a.agent;
        if (P) process.env.CLAUDE_CODE_AGENT = P;
        let { outputFormat: O, inputFormat: L } = a,
          M = Dr().viewMode,
          N = nit(),
          B = a.verbose ?? (M ? M === "verbose" : N ? false : wc("verbose", false).value),
          $ = a.print,
          q = a.init ?? false,
          W = a.initOnly ?? false,
          V = a.maintenance ?? false;
        if (!$ && process.stdout.isTTY && UD()) console.log("[Accessible screen reader mode: on]");
        let Y = a.disableSlashCommands || false;
        jbr(Y);
        let z = void 0,
          K = z === void 0 ? Dr().autoCompactWindow : z === "auto" ? void 0 : z,
          Z = Abt() ? a.worktree : void 0,
          J = typeof Z === "string" ? Z : void 0,
          ne = Z !== void 0,
          oe;
        if (J) {
          let Wn = Klr(J);
          if (Wn !== null) ((oe = Wn), (J = void 0));
        }
        let re = Abt() && a.tmux === true;
        if (re) {
          if (!ne) return ws("Error: --tmux requires --worktree");
          if (Vt() === "windows") return ws("Error: --tmux is not supported on Windows");
          if (!(await X5o()))
            return ws(`Error: tmux is not installed.
${J5o()}`);
        }
        let ee;
        if (el()) {
          let Wn = extractTeammateOptions(a);
          ee = Wn;
          let Cs = Wn.agentId || Wn.agentName || Wn.teamName,
            Ya = Wn.agentId && Wn.agentName && Wn.teamName;
          if (Cs && !Ya)
            return ws(
              "Error: --agent-id, --agent-name, and --team-name must all be provided together",
            );
          if (Wn.agentId && Wn.agentName && Wn.teamName)
            j5c().setDynamicTeamContext?.({
              agentId: Wn.agentId,
              agentName: Wn.agentName,
              teamName: Wn.teamName,
              color: Wn.agentColor,
              planModeRequired: Wn.planModeRequired ?? false,
              parentSessionId: Wn.parentSessionId,
            });
          if (Wn.teammateMode) w1m().setCliTeammateModeOverride?.(Wn.teammateMode);
        }
        let ce = a.sdkUrl ?? void 0,
          ae = x || ut(process.env.CLAUDE_CODE_INCLUDE_PARTIAL_MESSAGES);
        if (C || ut(process.env.CLAUDE_CODE_REMOTE)) u0l(true);
        if (ce) {
          if (!L) L = "stream-json";
          if (!O) O = "stream-json";
          if (a.verbose === void 0) B = true;
          if (!a.print) $ = true;
        }
        let de = a.teleport ?? null,
          Ee = a.cloud ?? a.remote,
          me = Ee === true ? "" : (Ee ?? null),
          pe = typeof Ee === "string" ? C7o(Ee) : null,
          ge = null,
          he = false,
          ie = null,
          le = null,
          He = false,
          ye = null;
        if (me !== null) {
          let Wn = Erc({
            print: a.print,
            nonInteractive: Ir(),
            continue: a.continue,
            resume: a.resume,
            fromPr: a.fromPr,
            hasTeleport: de !== null,
            hasConnect: Boolean(q5c?.url),
            hasSSH: Boolean(LZo?.host),
            hasAssistant: false,
            hasPool: ge !== null,
            hasProject: ye !== null,
            isCloudAttach: pe !== null,
          });
          if (Wn) return ws(Wn);
        }
        let ue = a.remoteControl ?? a.rc,
          we = false,
          Ce = typeof ue === "string" && ue.length > 0 ? ue : void 0,
          Ie = a.remoteControlSessionNamePrefix;
        if (Ie) process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX = Ie;
        if (v) {
          if ((a.continue || a.resume) && !a.forkSession)
            return ws(
              "Error: --session-id can only be used with --continue or --resume if --fork-session is also specified.",
            );
          if (!ce) {
            let Wn = yD(v);
            if (!Wn) return ws("Error: Invalid session ID. Must be a valid UUID.");
            if (!(a.forkSession && a.resume === Wn) && RWt(Wn))
              return ws(`Error: Session ID ${Wn} is already in use.`);
          }
        }
        let Ve = a.file;
        if (Ve && Ve.length > 0) {
          let Wn = XS();
          if (!Wn)
            return ws(
              "Error: Session token required for file downloads. CLAUDE_CODE_SESSION_ACCESS_TOKEN must be set.",
            );
          let Cs = process.env.CLAUDE_CODE_REMOTE_SESSION_ID || Rt(),
            Ya = OZa(Ve);
          if (Ya.length > 0) {
            let Ki = {
              baseUrl: process.env.ANTHROPIC_BASE_URL || $s().BASE_API_URL,
              oauthToken: Wn,
              sessionId: Cs,
            };
            k = MZa(Ya, Ki);
          }
        }
        let Ze = Ir(),
          Be = _ === a.model ? void 0 : _,
          Me = a.systemPrompt;
        if (a.systemPromptFile) {
          if (a.systemPrompt)
            return ws(
              "Error: Cannot use both --system-prompt and --system-prompt-file. Please use only one.",
            );
          try {
            let Wn = fve.resolve(a.systemPromptFile);
            Me = PZo.readFileSync(Wn, "utf8");
          } catch (Wn) {
            if (on(Wn) === "ENOENT")
              return ws(`Error: System prompt file not found: ${fve.resolve(a.systemPromptFile)}`);
            return ws(`Error reading system prompt file: ${be(Wn)}`);
          }
        }
        let Ue = a.appendSystemPrompt;
        if (a.appendSystemPromptFile) {
          if (a.appendSystemPrompt)
            return ws(
              "Error: Cannot use both --append-system-prompt and --append-system-prompt-file. Please use only one.",
            );
          try {
            let Wn = fve.resolve(a.appendSystemPromptFile);
            Ue = PZo.readFileSync(Wn, "utf8");
          } catch (Wn) {
            if (on(Wn) === "ENOENT")
              return ws(
                `Error: Append system prompt file not found: ${fve.resolve(a.appendSystemPromptFile)}`,
              );
            return ws(`Error reading append system prompt file: ${be(Wn)}`);
          }
        }
        let { systemPrompt: tt, appendSystemPrompt: bt } = $1i({
          cli: {
            systemPrompt: Me,
            appendSystemPrompt: Ue,
          },
          env: process.env,
          settings: Dr(),
        });
        if (el() && ee?.agentId && ee?.agentName && ee?.teamName) {
          let Wn = v1m().TEAMMATE_SYSTEM_PROMPT_ADDENDUM;
          bt = bt
            ? `${bt}

${Wn}`
            : Wn;
        }
        let Ke = P ? yHe().find((Wn) => Wn.agentType === P)?.permissionMode : void 0,
          { mode: Et, notification: ct } = Wqo({
            permissionModeCli: y,
            dangerouslySkipPermissions: d,
            agentPermissionMode: Ke,
          });
        if (
          (Gbr(Et === "bypassPermissions"),
          a.enableAutoMode ||
            y === "auto" ||
            Ke === "auto" ||
            (Et === "auto" && !G5c?.isAutoModeFromFallback()) ||
            (!y && Jqo()))
        )
          G5c?.setAutoModeFlagCli(true);
        await oV({
          hasDynamicMcpConfig: Boolean(h && h.length > 0) || A,
          pluginStateReliable: t,
        });
        let Je = {};
        if (h && h.length > 0) {
          let Wn = h.map((Ki) => Ki.trim()).filter((Ki) => Ki.length > 0),
            Cs = {},
            Ya = [];
          for (let Ki of Wn) {
            let Yc = null,
              Yl = [],
              dc = Ia(Ki, false);
            if (dc) {
              let et = kdt({
                configObject: dc,
                filePath: "command line",
                expandVars: true,
                scope: "dynamic",
              });
              if (et.config) Yc = et.config.mcpServers;
              Yl = et.errors;
            } else {
              let et = fve.resolve(Ki),
                Xe = Rdt({
                  filePath: et,
                  expandVars: true,
                  scope: "dynamic",
                });
              if (Xe.config) Yc = Xe.config.mcpServers;
              Yl = Xe.errors;
            }
            if (Yc) {
              if (
                ((Cs = {
                  ...Cs,
                  ...Yc,
                }),
                Yl.length > 0)
              )
                T(
                  `--mcp-config: ${Yl.length} entry warning(s): ${Yl.map((et) => `${et.path ? et.path + ": " : ""}${et.message}`).join("; ")}`,
                  {
                    level: "warn",
                  },
                );
            } else Ya.push(...Yl);
          }
          if (Ya.length > 0) {
            let Ki = Ya.map((Yc) => `${Yc.path ? Yc.path + ": " : ""}${Yc.message}`).join(`
`);
            return (
              T(`--mcp-config validation failed (${Ya.length} errors): ${Ki}`, {
                level: "error",
              }),
              ws(`Error: Invalid MCP configuration:
${Ki}`)
            );
          }
          if (Object.keys(Cs).length > 0) {
            if (Lpt() && !Sdo(Cs)) return ws(Dpt(["--mcp-config"]));
            let Ki = xw(Cs, (tn) => ({
                ...tn,
                scope: "dynamic",
              })),
              { allowed: Yc, blocked: Yl } = l5(Ki);
            if (Yl.length > 0)
              T3(
                `Warning: MCP ${bn(Yl.length, "server")} blocked by enterprise policy: ${Yl.join(", ")}`,
              );
            let { servers: dc, dropped: et, reason: Xe } = ZPc(Yc);
            if (et.length > 0)
              T(`--mcp-config: ${bn(et.length, "server")} ignored in ${Xe}: ${et.join(", ")}`, {
                level: "warn",
              });
            Je = {
              ...Je,
              ...dc,
            };
          }
        }
        let gt = a;
        Bbr(gt.chrome);
        let st = tXt(gt.chrome) && bo(),
          xt = Ddt(VD, eXt()),
          vt = Z1() || xt,
          jt = !st && !vt && mBo(),
          en = st && gt.chrome !== true && Oe.CLAUDE_CODE_ENABLE_CFC !== true && vt,
          Dn = st && gt.chrome !== true && Oe.CLAUDE_CODE_ENABLE_CFC !== true && Tl();
        if (en)
          T(
            "[Claude in Chrome] Skipping chrome wiring: blocked by enterprise MCP config or managed deniedMcpServers policy",
          );
        else if (Dn) T("[Claude in Chrome] Skipping chrome wiring: --safe-mode disables MCP");
        else if (st && xt) {
          if (Ze)
            T(`[Claude in Chrome] MCP server blocked by enterprise policy: ${VD}`, {
              level: "warn",
            });
          else T3(`Warning: MCP server blocked by enterprise policy: ${VD}`);
        } else if (st) {
          let Wn = Vt();
          try {
            G("tengu_claude_in_chrome_setup", {
              platform: Z9(Wn),
            });
            let { mcpConfig: Cs, allowedTools: Ya, systemPrompt: Ki } = $nr();
            if (
              ((Je = {
                ...Je,
                ...Cs,
              }),
              m.push(...Ya),
              Ki)
            )
              bt = bt
                ? `${Ki}

${bt}`
                : Ki;
          } catch (Cs) {
            return (
              G("tengu_claude_in_chrome_setup_failed", {
                platform: Z9(Wn),
              }),
              T(`[Claude in Chrome] Error: ${Cs}`),
              ke(Cs),
              ws("Error: Failed to run with Claude in Chrome.")
            );
          }
        }
        let nn = a,
          Ln = a.strictMcpConfig || false;
        if (
          (o_r(Ln),
          nbr(ce ? "stdio" : a.permissionPromptTool),
          R_r([
            ...OXe(
              $Xe(
                {
                  settings: typeof a.settings === "string" ? a.settings : void 0,
                  pluginDir: PV(),
                  pluginDirNoMcp: MV(),
                  addDir: b,
                  mcpConfig: h,
                  strictMcpConfig: Ln,
                },
                fve.resolve,
              ),
            ),
            ...(Be ? ["--fallback-model", Be] : []),
            ...(p ? ["--allow-dangerously-skip-permissions"] : []),
            ...(Y ? ["--disable-slash-commands"] : []),
            ...(nn.channels ?? []).flatMap((Wn) => ["--channels", Wn]),
          ]),
          Z1())
        ) {
          if (Ln)
            return ws(
              "You cannot use --strict-mcp-config when an enterprise MCP config is present",
            );
          if (Je && !Edo(Je))
            return ws(
              "You cannot dynamically configure MCP servers when an enterprise MCP config is present",
            );
        }
        if (Vt() === "macos" && !Ir() && XFn())
          try {
            let { setupComputerUseMCP: Wn } = await Promise.resolve().then(() => (G1c(), j1c)),
              { mcpConfig: Cs, allowedTools: Ya } = Wn();
            ((Je = {
              ...Je,
              ...Cs,
            }),
              m.push(...Ya));
          } catch (Wn) {
            T(`[Computer Use MCP] Setup failed: ${be(Wn)}`);
          }
        Pge(b);
        let Hn,
          kr = (Wn, Cs) => {
            let Ya = [],
              Ki = [];
            for (let Yc of Wn)
              if (Yc.startsWith("plugin:")) {
                let Yl = Yc.slice(7),
                  dc = Yl.indexOf("@");
                if (dc <= 0 || dc === Yl.length - 1) Ki.push(Yc);
                else
                  Ya.push({
                    kind: "plugin",
                    name: Yl.slice(0, dc),
                    marketplace: Yl.slice(dc + 1),
                  });
              } else if (Yc.startsWith("server:") && Yc.length > 7)
                Ya.push({
                  kind: "server",
                  name: Yc.slice(7),
                });
              else Ki.push(Yc);
            if (Ki.length > 0)
              ws(
                `${Cs} entries must be tagged: ${Ki.join(", ")}
` +
                  `  plugin:<name>@<marketplace>  \u2014 plugin-provided channel (allowlist enforced)
` +
                  "  server:<name>                \u2014 manually configured MCP server",
              );
            return Ya;
          },
          Mr = nn.channels,
          fe = nn.dangerouslyLoadDevelopmentChannels,
          Te = [];
        if (Mr && Mr.length > 0) ((Te = kr(Mr, "--channels")), Mge(Te));
        if (!Ze) {
          if (fe && fe.length > 0) Hn = kr(fe, "--dangerously-load-development-channels");
        }
        if (Te.length > 0 || (Hn?.length ?? 0) > 0) {
          let Wn = (Cs) => {
            let Ya = Cs.flatMap((Ki) =>
              Ki.kind === "plugin" ? [`${Ki.name}@${Ki.marketplace}`] : [],
            );
            return Ya.length > 0 ? Ya.sort().join(",") : void 0;
          };
          G("tengu_mcp_channel_flags", {
            channels_count: Te.length,
            dev_count: Hn?.length ?? 0,
            plugins: Wn(Te),
            dev_plugins: Wn(Hn ?? []),
          });
        }
        if (f.length > 0) {
          let { shouldToolsListOptInToBrief: Wn } = (l3(), ro(CQ));
          if (Wn(wN(f))) Ige(true);
        }
        let Re = performance.now(),
          Ne = await dMc({
            allowedTools: m,
            disallowedTools: g,
            baseTools: f,
            permissionMode: Et,
            allowDangerouslySkipPermissions: p,
            addDirs: b,
          }),
          it = Ne.toolPermissionContext,
          { warnings: Tt, overlyBroadBashPermissions: un } = Ne;
        (Zc("permission_context_ms", performance.now() - Re, Re), Tt.forEach(T3), wza());
        let ze =
          Ze && !Ln && !Mdt() && !md()
            ? rDe().then((Wn) => {
                xUn();
                let { allowed: Cs, blocked: Ya } = l5(Wn ?? {});
                if (Ya.length > 0)
                  T3(
                    `Warning: claude.ai MCP ${bn(Ya.length, "server")} blocked by enterprise policy: ${Ya.join(", ")}`,
                  );
                return Cs;
              })
            : Promise.resolve({});
        if (
          c1c({
            remote: me,
            isNonInteractiveSession: Ze,
            isContinue: Boolean(a.continue),
            pendingAssistantChat: void 0,
            pendingConnectUrl: q5c?.url,
            pendingSSHHost: LZo?.host,
          })
        )
          rUe(true);
        T("[STARTUP] Loading MCP configs...");
        let Mt = Date.now(),
          Qt,
          Er = (
            Ln || md() || da()
              ? Promise.resolve({
                  servers: {},
                })
              : rJ(Je)
          ).then((Wn) => ((Qt = Date.now() - Mt), Wn)),
          pt = ad();
        if (L && L !== "text" && L !== "stream-json")
          return ws(`Error: Invalid input format "${L}".`);
        if (L === "stream-json" && O !== "stream-json")
          return ws("Error: --input-format=stream-json requires output-format=stream-json.");
        if (L === "stream-json" && !Ir())
          return ws("Error: --input-format=stream-json requires --print.");
        if (ce) {
          if (L !== "stream-json" || O !== "stream-json")
            return ws(
              "Error: --sdk-url requires both --input-format=stream-json and --output-format=stream-json.",
            );
          let Wn = Ppc(ce);
          if (Wn !== null)
            return (
              await my("tengu_sdk_url_host_rejected", {}),
              yg(
                `Error: --sdk-url rejected: ${Wn}. This flag is reserved for Remote Control worker processes connecting to Anthropic's backend.`,
              )
            );
          if (!ut(process.env.CLAUDE_CODE_REMOTE)) {
            await tV();
            let Cs = dW("allow_remote_control", "Remote Control", "is");
            if (Cs) return ws(Cs);
            if (l9().settings.disableRemoteControl === true)
              return ws(
                "Error: Remote Control is disabled by your organization's policy (managed setting `disableRemoteControl`).",
              );
          }
        }
        if (a.replayUserMessages) {
          if (L !== "stream-json" || O !== "stream-json")
            return ws(
              "Error: --replay-user-messages requires both --input-format=stream-json and --output-format=stream-json.",
            );
        }
        if (a.promptSuggestions && (!Ze || O !== "stream-json"))
          return ws(
            "Error: --prompt-suggestions requires --print and --output-format=stream-json (prompt_suggestion messages are only surfaced in stream-json output).",
          );
        if (ae) {
          if (!Ze || O !== "stream-json") {
            if (x)
              return ws(
                "Error: --include-partial-messages requires --print and --output-format=stream-json.",
              );
            ae = false;
          }
        }
        if (a.sessionPersistence === false && !Ze)
          return ws("Error: --no-session-persistence can only be used with --print mode.");
        if (a.planModeInstructions && !Ze)
          return ws("Error: --plan-mode-instructions can only be used with --print mode.");
        let pn = await M1m(i || "", L ?? "text"),
          ir = typeof pn === "string" ? pn : null;
        pa("action_after_input_prompt");
        let Rr;
        if (
          Toa({
            isNonInteractiveSession: Ze,
            isBgSession: Js(),
          }) &&
          a.jsonSchema
        ) {
          try {
            Rr = Ft(a.jsonSchema);
          } catch (Wn) {
            return ws(`Error: --json-schema is not valid JSON: ${be(Wn)}`);
          }
          if (typeof Rr !== "object" || Rr === null || Array.isArray(Rr))
            return ws("Error: --json-schema must be a JSON object");
        }
        (pa("action_before_setup"), T("[STARTUP] Running setup()..."));
        let _o = Date.now(),
          Xo = performance.now(),
          { setup: Pn } = await Promise.resolve().then(() => (Zcr(), Qcr));
        Zc("setup_import_ms", performance.now() - Xo, Xo);
        let lr = void 0,
          eo = $t();
        if (process.env.CLAUDE_CODE_ENTRYPOINT !== "local-agent") (Opr(), Upr());
        let Kn = !!LZo?.host;
        if (Ir()) Qve(true);
        if (_cr()) {
          let Wn = performance.now();
          (await vc(tV(), EVo, "policy_limits_cold_await").then(
            () => hcr("completed"),
            () => hcr("timed_out"),
          ),
            Zc("policy_limits_await_ms", performance.now() - Wn, Wn),
            pa("action_after_policy_limits_cold_await"));
        }
        let Nt = Pn(eo, Kn ? "default" : Et, Kn ? false : p, ne, J, re, v ? yD(v) : void 0, oe, lr),
          Ut = ne ? null : mA(eo),
          Fn = ne ? null : CP(eo);
        (Ut?.catch(() => {}), Fn?.catch(() => {}));
        let xi = performance.now();
        (await Nt,
          Zc("setup_ms", performance.now() - xi, xi),
          T(`[STARTUP] setup() completed in ${Date.now() - _o}ms`),
          pa("action_after_setup"));
        let jn = !!a.replayUserMessages;
        if (Ir()) (e3(), hH(), uS(), OSn());
        let So = a.name?.trim();
        if (So) (jYe(So), ylr(So));
        let Mo = a.model || process.env.ANTHROPIC_MODEL,
          rs = a.model === "default" ? Ey() : a.model,
          js = P1i({
            cli: {
              fallbackModel: Be,
            },
            env: process.env,
            settings: Dr(),
          }),
          Gn = ne ? $t() : eo;
        if (cW() && Object.keys(Dt().cachedGrowthBookFeatures ?? {}).length === 0) {
          pa("before_growthbook_init");
          let Wn = performance.now();
          (await vc(iL(), 1500, "gb-before-tools").catch(() => {}),
            Zc("growthbook_init_ms", performance.now() - Wn, Wn),
            pa("after_growthbook_init"));
        }
        let cr = ne ? null : mA(Gn);
        if ((cr?.catch(() => {}), yb() && at("tengu_cobalt_thicket", true))) s2i(true);
        T("[STARTUP] Loading commands and agents...");
        let Lt = Date.now(),
          En = performance.now(),
          Sn = await fMc({
            cwd: Gn,
            toolPermissionContext: it,
            applyCoordinatorFilter: true,
            agentsJson: D,
            agentSetting: P,
            commandsPromise: cr,
            agentDefsPromise: Fn,
            deferCommands: mMc(Ze),
            onToolsLoaded: () => pa("action_tools_loaded"),
          });
        Zc("tools_commands_load_ms", performance.now() - En, En);
        let { tools: Jn, mainThreadAgentDefinition: Qn, commands: gr } = Sn,
          { agentDefinitions: fo, cliAgents: cs, deferredCommandsPromise: Gs } = Sn;
        if (
          P &&
          !Qn &&
          L !== "stream-json" &&
          P !== jYt.agentType &&
          !a.resume &&
          !a.continue &&
          !Oe.CLAUDE_BG_POST_CLEAR_RESPAWN
        ) {
          let Wn = fo.activeAgents.map((Cs) => Cs.agentType).join(", ");
          return ws(`--agent '${P}' not found. Available agents: ${Wn || "(none)"}`);
        }
        if (
          (Jge({
            tool_count: Jn.length,
            skill_count: On(gr, Y1e),
          }),
          Gs?.then(
            (Wn) =>
              Jge({
                skill_count: On(Wn, Y1e),
              }),
            () => {},
          ),
          mp().then(
            (Wn) =>
              Jge({
                plugin_count: Wn.enabled.length,
              }),
            () => {},
          ),
          !Qn && el() && ee?.agentId && ee?.agentName && ee?.teamName && ee?.agentType)
        ) {
          let Wn = fo.activeAgents.find((Cs) => Cs.agentType === ee.agentType);
          if (Wn) ((Qn = Wn), kK(Wn.agentType));
          else T(`[teammate] Custom agent ${ee.agentType} not found in available agents`);
        }
        let la = P ?? hLt("agent");
        if (!Qn && !P && la) ((Qn = ZYo(fo.activeAgents, la)), kK(Qn?.agentType));
        (T(`[STARTUP] Commands and agents loaded in ${Date.now() - Lt}ms`),
          pa("action_commands_loaded"));
        let Fi;
        if (Rr) {
          let Wn = Lct(Rr);
          if ("tool" in Wn) {
            let Cs = Wn.tool;
            if (Js()) {
              let Ya = Cs.call.bind(Cs);
              Cs = {
                ...Cs,
                async call(Ki, Yc, Yl, dc, et) {
                  let Xe = await Ya(Ki, Yc, Yl, dc, et),
                    { stashBgStructuredResult: tn } = await Promise.resolve().then(
                      () => (KQn(), zQn),
                    );
                  return (tn(Ki), Xe);
                },
              };
            }
            ((Fi = Cs),
              (Jn = [...Jn, Cs]),
              G("tengu_structured_output_enabled", {
                schema_property_count: Object.keys(Rr.properties || {}).length,
                has_required_fields: Boolean(Rr.required),
              }));
          } else
            G("tengu_structured_output_failure", {
              error: We("Invalid JSON schema"),
            });
        }
        if (Qn)
          G("tengu_agent_flag", {
            agentType: Sh(Qn) ? Qn.agentType : We("custom"),
            ...(P && {
              source: We("cli"),
            }),
          });
        if (Qn?.agentType) FYe(Qn.agentType);
        if (Ze && Qn && !Sh(Qn)) {
          let Wn = Qn.getSystemPrompt();
          if (Wn) {
            if (Qn.appendSystemPrompt)
              bt = bt
                ? `${Wn}

${bt}`
                : Wn;
            else if (!tt) tt = Wn;
          }
        }
        if (Qn?.initialPrompt) {
          let Wn = Qn.initialPrompt;
          if (typeof pn === "string")
            pn = Wn.includes("{{intent}}")
              ? Wn.split("{{intent}}").join(pn)
              : pn
                ? `${Wn}

${pn}`
                : Wn;
          else if (!pn) pn = Wn;
        }
        let xn, nr;
        if (
          Ir() &&
          !Oe.CLAUDE_CODE_SKIP_BEDROCK_AUTH &&
          !Oe.CLAUDE_CODE_SKIP_VERTEX_AUTH &&
          !Oe.CLAUDE_CODE_SKIP_MANTLE_AUTH
        )
          try {
            let { apply3PDefaultFallbacks: Wn } = await Promise.resolve().then(() => (u7o(), xMc)),
              { lines: Cs, mantleOverride: Ya } = await Wn();
            nr = Ya;
            for (let Ki of Cs)
              process.stderr.write(`Warning: ${Ki}
`);
          } catch (Wn) {
            ke(Wn);
          }
        let {
          effectiveModel: Yn,
          initialMainLoopModel: Xn,
          resolvedInitialModel: Jr,
          rawModelRequest: zr,
          restrictedModel: to,
        } = fOc({
          userSpecifiedModel: rs,
          agentModel: Qn?.model,
        });
        if (nr && Yn == null) py(nr);
        {
          let Wn = Wkn(a.effort),
            Cs = Gkn(Wn, Jr);
          if (Cs !== null)
            if (O !== "json" && O !== "stream-json" && Oe.CLAUDE_CODE_SESSION_KIND !== "bg") T3(Cs);
            else
              T(`[effort] ${Cs}`, {
                level: "warn",
              });
        }
        let vs;
        if (F6()) {
          let Wn = a.advisor;
          if (Wn) {
            if ((T(`[AdvisorTool] --advisor ${Wn}`), !mMe(Jr))) {
              if (Oe.CLAUDE_CODE_SESSION_KIND !== "bg")
                return ws(`Error: The model "${Jr}" does not support the advisor tool.`);
              T(`[AdvisorTool] The model "${Jr}" does not support the advisor tool.`, {
                level: "warn",
              });
            }
            let Cs = dp(zo(Wn));
            if (!gMe(Cs)) {
              if (Oe.CLAUDE_CODE_SESSION_KIND !== "bg")
                return ws(`Error: The model "${Wn}" cannot be used as an advisor.`);
              T(`[AdvisorTool] The model "${Wn}" cannot be used as an advisor.`, {
                level: "warn",
              });
            }
            if (!S8e(Jr, Cs)) {
              let Ya = `"${Wn}" cannot advise "${Jr}" (the advisor must be at least as capable as the main model). The advisor will not be used for the main model.`;
              if (Oe.CLAUDE_CODE_SESSION_KIND !== "bg") T3(Ya);
              else
                T(`[AdvisorTool] ${Ya}`, {
                  level: "warn",
                });
            }
          }
          if (((vs = Wn ?? mel()), vs)) T(`[AdvisorTool] Advisor model: ${vs}`);
        }
        if ((maybeActivateBrief(a), !Ir() && !qie() && Dr().defaultView === "chat")) {
          let { isBriefEntitled: Wn } = (l3(), ro(CQ));
          if (Wn()) Ige(true);
        }
        let bs,
          Da,
          Qs,
          To = false,
          ji = null,
          us = uj();
        if (!Ze) {
          let Wn = Y$c(false);
          ((Da = Wn.getFpsMetrics), (Qs = Wn.stats));
          let { createRoot: Cs } = await Promise.resolve().then(() => (Ye(), wW));
          ((bs = await Cs(Wn.renderOptions)),
            G("tengu_timer", {
              event: We("startup"),
              durationMs: Math.round(process.uptime() * 1000),
              resumed: !!(a.resume || a.continue),
            }),
            T("[STARTUP] Running showSetupScreens()..."));
          let Ya = Date.now(),
            Ki = false,
            Yc = hBo({
              isSSHPending: Kn,
              isRemoteMode: da(),
              hasTeleport: Boolean(de),
              isSafeMode: Tl(),
              permissionMode: Et,
              isBypassPermissionsModeAvailable: it.isBypassPermissionsModeAvailable,
              teammateAgentId: ee?.agentId,
            });
          if (
            (({
              onboardingShown: To,
              mcpApprovalSkipWarning: ji,
              claudeInChromeAccepted: Ki,
            } = await z$c(
              bs,
              Kn ? "default" : Et,
              Kn ? false : p,
              gr,
              en || (st && xt) ? false : st,
              Hn,
              Yc ? false : jt,
            )),
            Ubr(To),
            T(`[STARTUP] showSetupScreens() completed in ${Date.now() - Ya}ms`),
            !pt && ad() && !Ln && !md() && !da())
          ) {
            let dc = Date.now();
            Er = rJ(Je).then((et) => ((Qt = Date.now() - dc), et));
          }
          if (Ki) {
            try {
              G("tengu_claude_in_chrome_setup", {
                platform: Z9(Vt()),
              });
              let { mcpConfig: dc, systemPrompt: et } = $nr();
              if (
                ((Je = {
                  ...Je,
                  ...dc,
                }),
                et)
              )
                bt = bt
                  ? `${et}

${bt}`
                  : et;
            } catch (dc) {
              (G("tengu_claude_in_chrome_setup_failed", {
                platform: Z9(Vt()),
              }),
                ke(dc),
                T(`[Claude in Chrome] Error (startup offer): ${dc}`));
            }
            try {
              gr = oE([...gr, ...(await mA(Gn))], "name");
            } catch (dc) {
              T(`[Claude in Chrome] command refresh after accept failed: ${dc}`);
            }
          }
          if (ue !== void 0) {
            let dc;
            if (da()) dc = "Remote Control is not available inside a cloud session.";
            else if (de)
              dc =
                "--teleport sessions start without Remote Control. Use /remote-control to enable it.";
            else {
              let { getBridgeDisabledReason: et } = await Promise.resolve().then(() => (SC(), Hcr));
              dc = await et();
            }
            if (((we = dc === null), dc))
              T3(`${dc}
--rc flag ignored.`);
            else vir();
          }
          if (To && i?.trim().toLowerCase() === "/login") i = "";
          if (To) {
            if (yn("policySettings")?.forceRemoteSettingsRefresh) {
              let dc = await ryo(SVe);
              if (!dc.valid) return await uO(bs, dc.message);
            } else if (fr() === "gateway") {
              if (!(await SVe()))
                return await uO(
                  bs,
                  `Couldn't load settings from Cloud gateway ${km()?.url ?? ""}. Check your network connection, or run \`claude auth login\` to re-authenticate.`,
                );
            } else SVe();
            if (fr() === "gateway") {
              if (hzn())
                return (
                  gn((dc) => ({
                    ...dc,
                    hasCompletedOnboarding: true,
                    lastOnboardingVersion: {
                      ISSUES_EXPLAINER:
                        "report the issue at https://github.com/anthropics/claude-code/issues",
                      PACKAGE_URL: "@anthropic-ai/claude-code",
                      README_URL: "https://code.claude.com/docs/en/overview",
                      VERSION: "2.1.195",
                      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                      BUILD_TIME: "2026-06-26T01:00:56Z",
                      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
                    }.VERSION,
                  })),
                  bs.unmount(),
                  await Promise.resolve()
                    .then(() => (K9e(), z9e))
                    .then((dc) => dc.execRelaunch())
                );
              (bzn("gateway"), e3());
            }
            (C8t(),
              nke(),
              ice(),
              Promise.resolve()
                .then(() => (SJ(), Qjn))
                .then((dc) => (dc.clearTrustedDeviceToken(), dc.enrollTrustedDevice())));
          }
          let Yl = await Wle();
          if (!Yl.valid) await uO(bs, Yl.message, () => fVe());
        }
        if (process.exitCode !== void 0) {
          T("Graceful shutdown initiated, skipping further initialization");
          return;
        }
        if ((WDa(), !Ze)) {
          let { errors: Wn } = l9(),
            Cs = Wn.filter((Ya) => !Ya.mcpErrorMetadata);
          if (Cs.length > 0 && !TOc()) vOc(Cs);
          else if (Cs.length > 0) {
            if (
              (await lOc(bs, {
                settingsErrors: Cs,
                onExit: () => Bc(1),
              })) === "fix"
            ) {
              let { buildFixPrompt: Ki } = await Promise.resolve().then(() => (xnr(), YNo)),
                Yc = Ki(null, null, Cs, [], [], null, [], [], []);
              if (Yc)
                pn = pn
                  ? `${Yc}

${pn}`
                  : Yc;
            }
          }
        }
        let X = at("tengu_cicada_nap_ms", 0),
          Se = Dt().startupPrefetchedAt ?? 0;
        if (!(md() || (X > 0 && Date.now() - Se < X))) {
          let Wn = Se > 0 ? ` last ran ${Math.round((Date.now() - Se) / 1000)}s ago` : "";
          if (
            (T(`Starting background startup prefetches${Wn}`),
            Laa().catch((Cs) => ke(Cs)),
            RPe(),
            nql(),
            Ynt(),
            X > 0)
          )
            gn((Cs) => ({
              ...Cs,
              startupPrefetchedAt: Date.now(),
            }));
        } else {
          if (
            (T(
              `Skipping startup prefetches, last ran ${Math.round((Date.now() - Se) / 1000)}s ago`,
            ),
            !md() && !VVo())
          )
            RPe();
          C2r();
        }
        if (!Ze) pbc();
        let { servers: ot } = await Er;
        if (
          (T(`[STARTUP] MCP configs resolved in ${Qt}ms (awaited at +${Date.now() - Mt}ms)`),
          (Je = Avt(Je, Qn, {
            strictMcpConfig: Ln,
            onBlocked: (Wn) =>
              T3(
                `Warning: agent frontmatter MCP ${bn(Wn.length, "server")} blocked by enterprise policy: ${Wn.join(", ")}`,
              ),
          })),
          Object.keys(Je).length > 0)
        )
          await oV({
            hasDynamicMcpConfig: true,
          });
        let { configs: zt, blocked: cn } = Pdt(Je),
          { allowed: hr, blocked: Tr } = l5(ot),
          Br = [...cn, ...Tr];
        if (Br.length > 0) {
          if (
            (T(
              `MCP ${bn(Br.length, "server")} blocked by enterprise policy before prefetch: ${Br.join(", ")}`,
              {
                level: "warn",
              },
            ),
            Br.includes(VD))
          )
            (Mnr(),
              (gr = gr.filter(
                (Wn) => !(Wn.name === VD && Wn.type === "prompt" && Wn.source === "bundled"),
              )));
        }
        let fi = {
            ...hr,
            ...zt,
          },
          oi = {},
          Pa = {};
        for (let [Wn, Cs] of Object.entries(fi)) {
          let Ya = Cs;
          if (Ya.type === "sdk") oi[Wn] = Ya;
          else Pa[Wn] = Ya;
        }
        if (Oe.CLAUDE_CODE_REMOTE && at("tengu_mcp_startup_policy_seed", true)) it = Tws(it, zt);
        (Jge({
          mcp_server_count: Object.keys(fi).length,
        }),
          pa("action_mcp_configs_loaded"));
        let nc = lMc({
          permissionMode: Et,
          dangerouslySkipPermissionsPassed: d ?? false,
          modeIsBypass: Et === "bypassPermissions",
          print: $ ?? false,
        });
        NEc({
          resume: a.resume,
          forkSession: a.forkSession,
          hasSessionIdFlag: !!v,
        });
        let Qp =
            da() && Object.keys(Je).length > 0
              ? [
                  cc(
                    `MCP ${bn(Object.keys(Je).length, "server")} from --mcp-config/agent frontmatter ignored \u2014 MCP runs in the remote workspace: ${Object.keys(Je).join(", ")}`,
                    "warning",
                  ),
                ]
              : [],
          sd =
            Ze || da()
              ? Promise.resolve({
                  clients: [],
                  tools: [],
                  commands: [],
                })
              : yGt(Pa),
          ca = Ze
            ? Promise.resolve({
                clients: [],
                tools: [],
                commands: [],
              })
            : ze.then((Wn) =>
                Object.keys(Wn).length > 0
                  ? yGt(Wn)
                  : {
                      clients: [],
                      tools: [],
                      commands: [],
                    },
              ),
          _p = Promise.all([sd, ca]).then(([Wn, Cs]) => ({
            clients: [...Wn.clients, ...Cs.clients],
            tools: oE([...Wn.tools, ...Cs.tools], "name"),
            commands: oE([...Wn.commands, ...Cs.commands], "name"),
          }));
        CNe(Qn);
        let bg =
            W || q || V || Ze || a.continue || a.resume
              ? null
              : rve({
                  kind: "session-start",
                  source: "startup",
                  agentType: Qn?.agentType,
                  model: Jr,
                }),
          C_ = [];
        _p.catch(() => {});
        let Xm = [],
          Zy = [],
          dd = [],
          Ch = Ule(),
          kS =
            Ch !== false
              ? {
                  type: "adaptive",
                }
              : {
                  type: "disabled",
                };
        if (a.thinking === "adaptive" || a.thinking === "enabled")
          ((Ch = true),
            (kS = {
              type: "adaptive",
            }));
        else if (a.thinking === "disabled")
          ((Ch = false),
            (kS = {
              type: "disabled",
            }));
        else {
          let Wn = process.env.MAX_THINKING_TOKENS
            ? parseInt(process.env.MAX_THINKING_TOKENS, 10)
            : a.maxThinkingTokens;
          if (Wn !== void 0) {
            if (Wn > 0)
              ((Ch = true),
                (kS = {
                  type: "enabled",
                  budgetTokens: Wn,
                }));
            else if (Wn === 0)
              ((Ch = false),
                (kS = {
                  type: "disabled",
                }));
          }
        }
        if (kS.type !== "disabled") {
          if (a.thinkingDisplay === "summarized" || a.thinkingDisplay === "omitted")
            kS.display = a.thinkingDisplay;
          else if (!Ir() && xCn()) kS.display = "summarized";
        }
        if (
          (In("info", "started", {
            version: {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.195",
              FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-06-26T01:00:56Z",
              GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
            }.VERSION,
            is_native_binary: dm(),
          }),
          Ci(async () => {
            In("info", "exited");
          }),
          logTenguInit({
            onAntSandboxDetection: nc.updateContext,
            hasInitialPrompt: Boolean(i),
            hasStdin: Boolean(pn),
            verbose: B,
            debug: u,
            print: $ ?? false,
            outputFormat: O ?? "text",
            inputFormat: L ?? "text",
            numAllowedTools: m.length,
            numDisallowedTools: g.length,
            mcpClientCount: Object.keys(fi).length,
            worktreeEnabled: ne,
            skipWebFetchPreflight: Dr().skipWebFetchPreflight,
            githubActionInputs: process.env.GITHUB_ACTION_INPUTS,
            dangerouslySkipPermissionsPassed: d ?? false,
            permissionMode: Et,
            modeIsBypass: Et === "bypassPermissions",
            allowDangerouslySkipPermissionsPassed: p,
            skipDangerousModePromptSetPreDialog: us,
            systemPromptFlag: tt ? (a.systemPromptFile ? "file" : "flag") : void 0,
            appendSystemPromptFlag: a.appendSystemPrompt
              ? "flag"
              : a.appendSystemPromptFile
                ? "file"
                : void 0,
            thinkingConfig: kS,
          }),
          !da())
        )
          hac(Pa, it);
        if (
          (Pfl(it.alwaysAllowRules),
          Hut(null, "initialization"),
          logManagedSettings(),
          tsi().then((Wn) => {
            if (!Wn) return;
            if (So) JY(So);
            QPt().then((Cs) => {
              if (Cs >= 2)
                G("tengu_concurrent_sessions", {
                  num_sessions: Cs,
                });
            });
          }),
          md())
        );
        else
          yOc({
            deferToCleanup: Ze,
          });
        let Pb = W || q ? "init" : V ? "maintenance" : null;
        if (W) {
          (e3(),
            await rve({
              kind: "setup",
              trigger: "init",
              forceSyncExecution: true,
            }),
            await rve({
              kind: "session-start",
              source: "startup",
              forceSyncExecution: true,
            }),
            Bc(0));
          return;
        }
        if (Ze) {
          if (pe !== null) {
            let Wo = await Wle();
            if (!Wo.valid) return yg(Wo.message);
            await tV();
            let Ri = qZt();
            if (Ri) return yg(`Error: ${Ri}`);
            if (O === "stream-json")
              return ws("Error: --cloud <session_id> does not support --output-format stream-json");
            let qa = typeof pn === "string" && pn.length > 0 ? pn : null;
            if (qa === null)
              return ws(
                "Error: non-interactive --cloud <session_id> requires a prompt (positional or stdin).",
              );
            G("tengu_remote_send_headless", {
              entry_point: $e("cloud_attach_headless"),
            });
            let Mc = null;
            try {
              if ((await b_e(pe)).session_status === "archived")
                Mc = `cloud session ${pe} is archived and cannot accept new messages`;
            } catch (Qm) {
              Mc = be(Qm);
            }
            let Fd =
              Mc !== null
                ? {
                    ok: false,
                    reason: Mc,
                  }
                : await eNt(pe, qa);
            if (!Fd.ok) {
              if (
                (await my("tengu_remote_send_headless_error", {
                  entry_point: $e("cloud_attach_headless"),
                }),
                O === "json")
              )
                process.stdout.write(
                  De({
                    ok: false,
                    session_id: pe,
                    error: Fd.reason,
                  }) +
                    `
`,
                );
              return yg(`Error: failed to send message to cloud session ${pe}: ${Fd.reason}`);
            }
            await my("tengu_remote_send_headless_success", {
              entry_point: $e("cloud_attach_headless"),
            });
            let cm = dS(pe, void 0, {
              from: "cli",
              m: "0",
            });
            if (O === "json")
              process.stdout.write(
                De({
                  ok: true,
                  session_id: pe,
                  url: cm,
                }) +
                  `
`,
              );
            else
              (process.stdout.write(`Sent to cloud session.
`),
                process.stdout.write(`Session ID: ${pe}
`),
                process.stdout.write(`View: ${cm}
`));
            await ki(0);
            return;
          }
          if (O === "stream-json" || O === "json") JEr(true);
          (e3(), fTt());
          let Wn = (a.continue || a.resume || de) && !Uzo() ? null : Z4o(zr ?? Jr);
          if (Wn && O !== "json" && O !== "stream-json") T3(Wn);
          let Cs = performance.now(),
            Ya =
              a.continue || a.resume || de || Pb
                ? void 0
                : rve({
                    kind: "session-start",
                    source: "startup",
                  }).then((Wo) => (Zc("hooks_init_ms", performance.now() - Cs, Cs), Wo));
          (Ya?.catch(() => {}), pa("before_validateForceLoginOrg"));
          let Ki = await Wle();
          if (!Ki.valid) return ($Ye(Ki.message), await fVe(), ws());
          let Yc = Y ? [] : Gs ? Gs.then(Ame) : Ame(gr);
          if (Yc instanceof Promise) Yc.catch(() => {});
          let Yl = y6(),
            dc = {
              ...Yl,
              mainLoopModel: Xn,
              mcp: {
                ...Yl.mcp,
                clients: Xm,
                commands: dd,
                tools: Zy,
              },
              toolPermissionContext: it,
              effortValue: Wkn(a.effort),
              ultracode: _Kr(a.effort),
              autoCompactWindow: K,
              ...(sc() && {
                fastMode: H2r(Yn ?? null),
              }),
              ...(F6() &&
                vs && {
                  advisorModel: vs,
                }),
              ...(a.promptSuggestions !== void 0 && {
                promptSuggestionEnabled: a.promptSuggestions && Sjn(),
              }),
              ...(c && {
                teamContext: c.teamContext,
                teammateColors: c.teammateColors,
              }),
            },
            et = new Ztn(),
            Xe = uL(dc, (Wo) => DTe(Wo, et));
          if (
            (Ci(() => E4n(Xe.getState().tasks)),
            A4n(Xe.setState),
            it.mode === "bypassPermissions" || p)
          )
            Xqo(it);
          if (
            (v8t(it, Xe.getState().fastMode).then(({ updateContext: Wo }) => {
              Xe.setState((Ri) => {
                let qa = Wo(Ri.toolPermissionContext);
                if (qa === Ri.toolPermissionContext) return Ri;
                return {
                  ...Ri,
                  toolPermissionContext: qa,
                };
              });
            }),
            a.sessionPersistence === false)
          )
            Vbr(true);
          L_r(Lvi(S));
          let tn = MOc({
            regularMcpConfigs: Pa,
            claudeaiConfigPromise: ze,
            state: {
              getClients: () => Xe.getState().mcp.clients,
              applyMcpUpdate: (Wo) =>
                Xe.setState((Ri) => ({
                  ...Ri,
                  mcp: Wo(Ri.mcp),
                })),
            },
            nonBlocking: IMo(),
          });
          pa("before_connectMcp");
          let Ar = performance.now();
          if (
            (await tn.connect(),
            Zc("mcp_connect_ms", performance.now() - Ar, Ar),
            pa("after_connectMcp_claudeai"),
            !md())
          )
            (startDeferredPrefetches(),
              Promise.resolve()
                .then(() => (Ken(), rpr))
                .then((Wo) => Wo.startBackgroundHousekeeping()));
          (W5c(), pa("before_print_import"));
          let { runHeadless: Yr } = await Promise.resolve().then(() => ($Fc(), MFc));
          (pa("after_print_import"),
            Yr(pn, () => Xe.getState(), Xe.setState, Xe.subscribe, Yc, Jn, oi, fo.activeAgents, {
              continue: a.continue,
              resume: a.resume,
              verbose: B,
              outputFormat: O,
              jsonSchema: Rr,
              permissionPromptToolName: a.permissionPromptTool,
              allowedTools: m,
              thinkingConfig: kS,
              maxTurns: l,
              maxBudgetUsd: a.maxBudgetUsd,
              taskBudget: a.taskBudget
                ? {
                    total: a.taskBudget,
                  }
                : void 0,
              systemPrompt: tt,
              appendSystemPrompt: bt,
              planModeInstructions: a.planModeInstructions,
              appendSubagentSystemPrompt: void 0,
              excludeDynamicSections: a.excludeDynamicSystemPromptSections || void 0,
              userSpecifiedModel: Yn,
              restrictedStartupModel: to,
              fallbackModel: js,
              teleport: de,
              sdkUrl: ce,
              replayUserMessages: jn,
              includePartialMessages: ae,
              sessionMirror: I,
              forkSession: a.forkSession || false,
              resumeSessionAt: a.resumeSessionAt || void 0,
              rewindFiles: a.rewindFiles,
              enableAuthStatus: a.enableAuthStatus,
              promptSuggestions: a.promptSuggestions,
              agent: P,
              workload: a.workload,
              setupTrigger: Pb ?? void 0,
              configuredMcpServerCount: Object.keys(Pa).length,
              sessionStartHooksPromise: Ya,
              sessionState: et,
            }));
          return;
        }
        G("tengu_startup_manual_model_config", {
          cli_flag: a.model,
          env_var: process.env.ANTHROPIC_MODEL,
          settings_file: (Dr() || {}).model,
          settings_source: Oo(Mhe("model")),
          subscriptionType: Oo(Di()),
          agent: la,
        });
        let ay = jJl(zr ?? Jr),
          dl = [];
        if (ct)
          dl.push({
            key: "permission-mode-notification",
            text: ct,
            priority: "high",
          });
        if (ji)
          dl.push({
            key: ji.key,
            text: ji.text,
            color: "warning",
            priority: "high",
          });
        let nb = it;
        if (!pt && ad()) {
          let Wn = Cut();
          nb = zho(Kho(MWt(it, Wn), [], Iut()), Wn);
        }
        let KT = {
            ...nb,
            mode: el() && j5c().isPlanModeRequired() ? "plan" : nb.mode,
          },
          rh = qie(),
          ly = !(da() || Boolean(de)) && !ut(process.env.CLAUDE_CODE_REMOTE) && (we || Lfe()),
          Cd = false,
          Ji = process.env.CLAUDE_BRIDGE_REATTACH_SESSION,
          oh = ut(process.env.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY),
          Sg = void 0,
          rb = {
            settings: Dr(),
            tasks: {},
            transcripts: {},
            taskDecorations: {},
            ...((So || Sg) && {
              standaloneAgentContext: {
                ...(So && {
                  name: So,
                }),
                prideGradient: Sg,
              },
            }),
            agentNameRegistry: new Map(),
            agentTypesInvokedThisSession: new Set(),
            verbose: B ?? wc("verbose", false).value,
            showMessageTimestamps: wc("showMessageTimestamps", false).value,
            mainLoopModel: Xn,
            mainLoopModelForSession: null,
            isBriefOnly: rh,
            replTab: "convo",
            briefTranscript: B ? false : N,
            expandedView: Dt().showExpandedTodos ? "tasks" : "none",
            coordinatorTaskIndex: -1,
            workflowFooterIndex: 0,
            viewSelectionMode: "none",
            queueEditIndex: null,
            footerSelection: null,
            footerLinks: [],
            toolPermissionContext: KT,
            agent: Qn?.agentType,
            agentDefinitions: fo,
            skillTruncationStats: Nra(
              gr.filter(Y1e),
              nH(Jr, OS()),
              new Set(gr.filter((Wn) => Zbe(Wn) === "name-only").map((Wn) => Wn.name)),
              (Wn) => P8e(Wn.name),
              rH(Jr),
            ),
            skillTools: [],
            mcp: {
              clients: [],
              tools: [],
              commands: [],
              resources: {},
              resourceTemplates: {},
              pluginReconnectKey: 0,
            },
            plugins: {
              enabled: [],
              disabled: [],
              commands: [],
              errors: [],
              warnings: [],
              installationStatus: {
                marketplaces: [],
                plugins: [],
              },
              needsRefresh: false,
            },
            setupIssues: {
              settingsErrorCount: 0,
              lspFailedCount: 0,
              installBrokenMessages: [],
              installPathCount: 0,
              marketplaceIssueCount: 0,
              chromeExtensionIssueCount: 0,
              npmInstallDeprecated: false,
              sandboxIssueCount: 0,
              statuslineIssueCount: 0,
              flaggedPluginCount: 0,
              modelDeprecationWarning: ay,
              modelRestrictedWarning: to
                ? {
                    requested: to,
                    effective: Jr,
                  }
                : null,
              existingClaudeSubscription: null,
            },
            statusLineText: void 0,
            prStatus: null,
            prNeedsAuth: false,
            remoteSessionUrl: void 0,
            remoteConnectionStatus: "connecting",
            remoteBootstrap: null,
            remoteBackgroundTaskCount: 0,
            replBridgeEnabled: ly || Cd || (Boolean(Ji) && !oh),
            replBridgeAutoOnByDefault: ly && !we && !Ji && Ccr() === void 0,
            replBridgeExplicit: we || (Boolean(Ji) && !oh && !ly),
            replBridgeOutboundOnly: !ly && (Ji ? oh : Cd),
            replBridgeConnected: false,
            replBridgeSessionActive: false,
            replBridgeSkipNextArchive: false,
            replBridgeReconnecting: false,
            replBridgeConnectUrl: void 0,
            replBridgeSessionUrl: void 0,
            replBridgeEnvironmentId: void 0,
            replBridgeSessionId: void 0,
            replBridgeError: void 0,
            replBridgeInitialName: Ce,
            showRemoteCallout: false,
            notifications: {
              current: null,
              queue: dl,
              pinned: [],
            },
            autoUpdaterResult: null,
            frameUrls: {},
            elicitation: {
              queue: [],
            },
            todos: {},
            replContexts: {},
            fileHistory: {
              snapshots: [],
              trackedFiles: new Set(),
              snapshotSequence: 0,
            },
            attribution: Xpt(),
            thinkingEnabled: Ch,
            promptSuggestionEnabled: bjn(),
            awaySummaryEnabled: Kpt(),
            displayedMessageContent: {},
            sessionHooks: new Map(),
            inbox: {
              messages: [],
            },
            promptSuggestion: {
              text: null,
              promptId: null,
              shownAt: 0,
              acceptedAt: 0,
              generationRequestId: null,
            },
            speculation: FDe,
            speculationSessionTimeSavedMs: 0,
            workerSandboxPermissions: {
              queue: [],
              selectedIndex: 0,
            },
            pendingMemoryUpdates: [],
            pendingWorkerRequest: null,
            pendingSandboxRequest: null,
            authVersion: 0,
            policyVersion: 0,
            initialMessage: pn
              ? {
                  message: Rn({
                    content: String(pn),
                  }),
                }
              : a.replyOnResume
                ? {
                    replay: true,
                  }
                : null,
            effortValue: Wkn(a.effort),
            ultracode: _Kr(a.effort),
            cacheMissAckedAtOutputTokens: -1,
            autoCompactWindow: K,
            activeOverlays: new Set(),
            fastMode: H2r(Jr),
            ...(F6() &&
              vs && {
                advisorModel: vs,
              }),
            teamContext: c?.teamContext ?? dEc?.(),
            teammateColors: c?.teammateColors ?? {
              assignments: new Map(),
              index: 0,
            },
            storedImagePaths: new Map(),
            imageDescriptions: new Map(),
            classifierApprovals: {
              approvals: new Map(),
              checking: new Set(),
            },
            webBrowser: ro(_go).getDefaultWebBrowserState(),
          };
        if (pn) Yat(String(pn));
        let HR = Fi ? [...Zy, Fi] : Zy;
        (gn((Wn) => ({
          ...Wn,
          numStartups: (Wn.numStartups ?? 0) + 1,
        })),
          setImmediate(() => {
            (logStartupTelemetry(Dt()), W5c());
          }));
        let TE = null,
          RA = false,
          mx = TE && !RA ? TE.then((Wn) => Wn.createSessionTurnUploader()).catch(() => null) : null,
          YT =
            TE && RA ? TE.then((Wn) => Wn.createSessionTurnUploaderV2()).catch(() => null) : null,
          Ih = {
            debug: u,
            commands: [...gr, ...dd],
            initialTools: HR,
            mcpClients: Xm,
            autoConnectIdeFlag: A,
            mainThreadAgentDefinition: Qn,
            disableSlashCommands: Y,
            dynamicMcpConfig: Je,
            strictMcpConfig: Ln,
            systemPrompt: tt,
            appendSystemPrompt: bt,
            thinkingConfig: kS,
            ...(js && {
              fallbackModel: js,
            }),
            ...(mx && {
              onTurnComplete: (Wn) => {
                mx.then((Cs) => Cs?.(Wn));
              },
            }),
            ...(YT && {
              onCaptureSnapshot: (Wn, Cs) => {
                YT.then((Ya) => Ya?.(Wn, Cs));
              },
            }),
          },
          XT = {
            modeApi: MZo,
            mainThreadAgentDefinition: Qn,
            agentDefinitions: fo,
            currentCwd: Gn,
            cliAgents: cs,
            initialState: rb,
            permissionModeCliSet: y !== void 0 || Boolean(d),
          };
        if (a.continue) {
          let Wn = false;
          try {
            let Cs = performance.now(),
              { clearSessionCaches: Ya } = await Promise.resolve().then(() => (rKe(), QSt));
            Ya();
            let Ki = await vpe(void 0, void 0, {
              forkSession: !!a.forkSession,
              replyOnResume: !!a.replyOnResume,
            });
            if (!Ki)
              return (
                await my("tengu_continue", {
                  success: false,
                }),
                await uO(bs, "No conversation found to continue")
              );
            let Yc = await upr(
              Ki,
              {
                forkSession: !!a.forkSession,
                includeAttribution: true,
                transcriptPath: Ki.fullPath,
              },
              XT,
            );
            if (Yc.restoredAgentDef) Qn = Yc.restoredAgentDef;
            (maybeActivateBrief(a),
              await DZo(a),
              G("tengu_continue", {
                success: true,
                resume_duration_ms: Math.round(performance.now() - Cs),
              }),
              (Wn = true));
            let Yl = Avt(Je, Yc.restoredAgentDef ?? Qn, {
              strictMcpConfig: Ln,
            });
            if (Object.keys(Yl).length > 0)
              await oV({
                hasDynamicMcpConfig: true,
              });
            await _vt(
              bs,
              {
                getFpsMetrics: Da,
                stats: Qs,
                initialState: Yc.initialState,
              },
              {
                ...Ih,
                mainThreadAgentDefinition: Yc.restoredAgentDef ?? Qn,
                dynamicMcpConfig: Yl,
                initialMessages: Yc.messages,
                initialFileHistorySnapshots: Yc.fileHistorySnapshots,
                initialContentReplacements: Yc.contentReplacements,
                initialAgentName: Yc.agentName,
                initialAgentColor: Yc.agentColor,
              },
              F7e,
            );
          } catch (Cs) {
            if (!Wn)
              await my("tengu_continue", {
                success: false,
              });
            (ke(Cs), await XN(1));
          }
        } else if (a.resume || a.fromPr || de || me !== null) {
          let { clearSessionCaches: Wn } = await Promise.resolve().then(() => (rKe(), QSt));
          Wn();
          let Cs = null,
            Ya = void 0,
            Ki = yD(a.resume),
            Yc = void 0,
            Yl = null,
            dc = void 0;
          if (a.fromPr) {
            if (a.fromPr === true) dc = true;
            else if (typeof a.fromPr === "string") dc = a.fromPr;
          }
          if (a.resume && typeof a.resume === "string" && !Ki && !QQt(a.resume)) {
            let Xe = a.resume.trim();
            if (Xe) {
              let tn = await OQ(Xe, {
                exact: true,
              });
              if (tn.length === 1) ((Yl = tn[0]), (Ki = qg(Yl) ?? null));
              else Yc = Xe;
            }
          }
          if (me !== null || de) {
            await tV();
            let Xe = qZt();
            if (Xe) return await uO(bs, `Error: ${Xe}`, () => ki(1));
          }
          if (me !== null) {
            let Xe = C7o(me),
              tn = Xe !== null ? oP(Xe) : null;
            if (He && typeof pn === "string" && pn.length > 0) me = pn;
            let Ar = !tn && me.length > 0,
              Yr = Ar ? z5c.randomUUID() : void 0,
              Wo = y ? jO(y) : void 0,
              Ri = Wo && xet(Wo) && Wo !== "bypassPermissions" ? Wo : void 0,
              qa = at("tengu_remote_backend", false);
            if (tn && !qa)
              return await uO(
                bs,
                "Error: Attaching to an existing cloud session is not enabled for your account.",
                () => ki(1),
              );
            if (!qa && !Ar && ge === null)
              return await uO(
                bs,
                `Error: --cloud requires a description.
Usage: claude --cloud "your task description"`,
                () => ki(1),
              );
            let Mc, Fd;
            if (tn) {
              G("tengu_remote_attach_session", {
                session_id: tn,
              });
              let { attachRemote: U3 } = await Promise.resolve().then(() => (jFc(), FFc));
              try {
                await U3(bs, tn, {
                  initialStateOverride: rb,
                  autoConnectIdeFlag: A,
                  disableSlashCommands: Y,
                });
              } catch (fO) {
                return await uO(bs, `Couldn't attach to cloud session: ${be(fO)}`, () => ki(1));
              }
              let [
                { mountFleetViewWithComposerBack: e_ },
                { applyFleetViewHostWindowsEnv: gx },
                { createRoot: Ma },
              ] = await Promise.all([
                Promise.resolve().then(() => (vtn(), Ttn)),
                Promise.resolve().then(() => (tvt(), _tn)),
                Promise.resolve().then(() => (Ye(), wW)),
              ]);
              (gx(), (process.env.CLAUDE_AGENTS_SELECT = a4t(tn)));
              let Eg = await Ma(lN(false));
              return (await e_(Eg), await ki(0));
            } else {
              G("tengu_remote_create_session", {
                has_initial_prompt: String(Ar),
              });
              try {
                Fd = await Lj();
              } catch (Ma) {
                return (
                  T(`--remote auth setup failed: ${be(Ma)}`, {
                    level: "error",
                  }),
                  await uO(bs, `Error: ${be(Ma) || "Failed to authenticate"}`, () => ki(1))
                );
              }
              process.stderr.write(
                wt.dim("Creating remote session\u2026") +
                  `
`,
              );
              let U3 = ie ?? (await ub()),
                e_ = await RTo(bs, {
                  description: Ar ? me : null,
                  descriptionUuid: Yr,
                  signal: new AbortController().signal,
                  source: "remote",
                  branchName: U3 || void 0,
                  explicitRef: ie ?? void 0,
                  poolId: ge ?? void 0,
                  sessionGroupingId: le ?? void 0,
                  permissionMode: Ri,
                });
              if (!e_.ok)
                return (
                  G("tengu_remote_create_session_error", {
                    error: $e(e_.failReason),
                    ...(e_.failDetail?.endpoint && {
                      create_endpoint: $e(e_.failDetail.endpoint),
                    }),
                    ...(e_.failDetail?.serverReason && {
                      server_reason: $e(e_.failDetail.serverReason),
                    }),
                  }),
                  await uO(
                    bs,
                    e_.failMessage
                      ? `Error: ${e_.failMessage}`
                      : "Error: Unable to create cloud session",
                    () => ki(1),
                  )
                );
              let gx = e_.session;
              if (
                (G("tengu_remote_create_session_success", {
                  session_id: gx.id,
                }),
                !qa)
              )
                (process.stdout.write(`Created cloud session: ${gx.title}
`),
                  process.stdout.write(`View: ${dS(gx.id, void 0, {
                    from: "cli",
                    m: "0",
                  })}
`),
                  process.stdout.write(`Resume with: claude --teleport ${gx.id}
`),
                  await ki(0),
                  process.exit(0));
              Mc = gx.id;
            }
            (rUe(true), PA(Fb(Mc), "remote_attach"));
            let { getClaudeAIOAuthTokens: cm, handleOAuth401Error: Qm } =
                await Promise.resolve().then(() => (oo(), pU)),
              JT = {
                sessionId: Mc,
                getAccessToken: () => cm()?.accessToken ?? Fd.accessToken,
                orgUuid: Fd.orgUUID,
                onAuth401: Qm,
                initialPromptUuid: Yr,
              },
              RS = dS(Mc, void 0, {
                from: "cli",
                m: "0",
              }),
              cD = cc(`Cloud session active \xB7 code here or at ${RS}`, "info"),
              Yu = Ar
                ? Rn({
                    content: me,
                    uuid: Yr,
                  })
                : null,
              pl = tn
                ? y
                  ? "--permission-mode is ignored when attaching \u2014 the session keeps its current mode (shift+tab to change it)"
                  : void 0
                : Wo && !Ri
                  ? `--permission-mode ${Wo} is not forwarded \u2014 the cloud session uses its default mode`
                  : void 0,
              v2 = {
                ...rb,
                initialMessage: u1c(Ar && ((ge !== null && he) || He), rb.initialMessage),
                remoteSessionUrl: RS,
                replBridgeEnabled: false,
                replBridgeOutboundOnly: false,
                replBridgeExplicit: false,
                ...(pl && {
                  notifications: {
                    ...rb.notifications,
                    current: null,
                    queue: [
                      ...rb.notifications.queue,
                      {
                        key: "remote-permission-mode-not-applied",
                        text: pl,
                        color: "warning",
                        priority: "high",
                      },
                    ],
                  },
                }),
              };
            await _vt(
              bs,
              {
                getFpsMetrics: Da,
                stats: Qs,
                initialState: v2,
              },
              {
                debug: u,
                commands: gr,
                initialTools: [],
                initialMessages: Yu ? [...Qp, cD, Yu] : [...Qp, cD],
                mcpClients: [],
                autoConnectIdeFlag: A,
                mainThreadAgentDefinition: Qn,
                disableSlashCommands: Y,
                remoteSessionConfig: JT,
                thinkingConfig: kS,
              },
              F7e,
            );
            return;
          } else if (de) {
            if (de === true || de === "") {
              (G("tengu_teleport_interactive_mode", {}),
                T("selectAndResumeTeleportTask: Starting teleport flow..."));
              let Xe = await cOc(bs);
              if (!Xe) (await ki(0), process.exit(0));
              let { branchError: tn } = await s9t(Xe.branch);
              Cs = o9t(Xe.log, tn);
            } else if (typeof de === "string") {
              G("tengu_teleport_resume_session", {
                mode: We("direct"),
              });
              try {
                let Xe = await b_e(de),
                  tn = await T8n(Xe);
                if (tn.status === "mismatch" || tn.status === "not_in_repo") {
                  let Wo = tn.sessionRepo;
                  if (Wo) {
                    let Ri = Zfr(Wo),
                      qa = await emr(Ri);
                    if (qa.length > 0) {
                      let Mc = await uOc(bs, {
                        targetRepo: Wo,
                        initialPaths: qa,
                      });
                      if (Mc) (process.chdir(Mc), Uy(Mc), _D(Mc));
                      else await ki(0);
                    } else
                      throw new qb(
                        `You must run claude --teleport ${de} from a checkout of ${Wo}.`,
                        wt.red(`You must run claude --teleport ${de} from a checkout of ${wt.bold(Wo)}.
`),
                      );
                  }
                } else if (tn.status === "error")
                  throw new qb(
                    tn.errorMessage || "Failed to validate session",
                    wt.red(`Error: ${tn.errorMessage || "Failed to validate session"}
`),
                  );
                await kTo();
                let { teleportWithProgress: Ar } = await Promise.resolve().then(() => (KFc(), zFc)),
                  Yr = await Ar(bs, de);
                (DCt({
                  sessionId: de,
                }),
                  (Cs = Yr.messages));
              } catch (Xe) {
                let tn = Xe instanceof qb;
                if (!tn) ke(Xe);
                await uO(bs, tn ? Xe.message : be(Xe), () => ki(1));
              }
            }
          }
          if (Kx() || (typeof a.resume === "string" && QQt(a.resume))) {
            if (a.resume && typeof a.resume === "string" && !Ki) {
              let tn = null?.parseCcshareId(a.resume);
              if (QQt(a.resume)) {
                let Ar = yD(fve.basename(a.resume, ".jsonl"));
                if (Ar && !a.forkSession) {
                  let Wo = await Tpe(Ar);
                  if (Wo)
                    return await uO(
                      bs,
                      `Session ${Ar} is currently running as a background agent (${Wo.kind}). Use \`claude agents\` to find and attach to it, or add --fork-session to branch off a copy.`,
                    );
                }
                let Yr = "load_error";
                try {
                  let Wo = performance.now(),
                    Ri = await d5o(a.resume),
                    qa = await vpe(Ri, void 0, {
                      forkSession: !!a.forkSession,
                      replyOnResume: !!a.replyOnResume,
                    });
                  if (qa) {
                    if (
                      ((Yr = "processing_error"),
                      (Ya = await upr(
                        qa,
                        {
                          forkSession: !!a.forkSession,
                          sessionIdOverride: Ar ?? void 0,
                          transcriptPath: qa.fullPath,
                        },
                        XT,
                      )),
                      Ya.restoredAgentDef)
                    )
                      Qn = Ya.restoredAgentDef;
                    G("tengu_session_resumed", {
                      entrypoint: We("file"),
                      success: true,
                      resume_duration_ms: Math.round(performance.now() - Wo),
                    });
                  } else
                    G("tengu_session_resumed", {
                      entrypoint: We("file"),
                      success: false,
                      failure_reason: We("not_found_explicit_id"),
                    });
                } catch (Wo) {
                  (G("tengu_session_resumed", {
                    entrypoint: We("file"),
                    success: false,
                    failure_reason: Yr,
                    error_name: Zr(Wo).name,
                    error_code: Wo instanceof jse ? Wo.code : (xd(Wo)?.toLowerCase() ?? "other"),
                  }),
                    ke(Wo),
                    await uO(bs, `Unable to load transcript from file: ${a.resume}`, () => ki(1)));
                }
              }
            }
          }
          if (Ki) {
            let Xe = Ki;
            if (!a.forkSession) {
              let Ar = await Tpe(Xe);
              if (Ar)
                return await uO(
                  bs,
                  `Session ${Xe} is currently running as a background agent (${Ar.kind}). Use \`claude agents\` to find and attach to it, or add --fork-session to branch off a copy.`,
                );
            }
            let tn = "load_error";
            try {
              let Ar = performance.now(),
                Yr = await vpe(Yl ?? Xe, void 0, {
                  forkSession: !!a.forkSession,
                  replyOnResume: !!a.replyOnResume,
                });
              if (!Yr) {
                G("tengu_session_resumed", {
                  entrypoint: We("cli_flag"),
                  success: false,
                  failure_reason: We("not_found_explicit_id"),
                });
                let Ri = `No conversation found with session ID: ${Xe}`;
                return (
                  T(Ri, {
                    level: "error",
                  }),
                  await uO(bs, Ri, () => ki(1))
                );
              }
              tn = "processing_error";
              let Wo = Yl?.fullPath ?? Yr.fullPath;
              if (
                ((Ya = await upr(
                  Yr,
                  {
                    forkSession: !!a.forkSession,
                    sessionIdOverride: Xe,
                    transcriptPath: Wo,
                  },
                  XT,
                )),
                Ya.restoredAgentDef)
              )
                Qn = Ya.restoredAgentDef;
              G("tengu_session_resumed", {
                entrypoint: We("cli_flag"),
                success: true,
                resume_duration_ms: Math.round(performance.now() - Ar),
              });
            } catch (Ar) {
              (G("tengu_session_resumed", {
                entrypoint: We("cli_flag"),
                success: false,
                failure_reason: tn,
                error_name: Zr(Ar).name,
              }),
                ke(Ar),
                await uO(bs, `Failed to resume session ${Xe}`));
            }
          }
          if (k)
            try {
              let Xe = await k,
                tn = On(Xe, (Ar) => !Ar.success);
              if (tn > 0) T3(`Warning: ${tn}/${Xe.length} file(s) failed to download.`);
            } catch (Xe) {
              return await uO(bs, `Error downloading files: ${be(Xe)}`);
            }
          let et =
            Ya ??
            (Array.isArray(Cs)
              ? {
                  messages: Cs,
                  fileHistorySnapshots: void 0,
                  agentName: void 0,
                  agentColor: void 0,
                  restoredAgentDef: Qn,
                  initialState: rb,
                  contentReplacements: void 0,
                }
              : void 0);
          if (et) {
            (maybeActivateBrief(a), await DZo(a));
            let Xe = Avt(Je, et.restoredAgentDef ?? Qn, {
              strictMcpConfig: Ln,
            });
            if (Object.keys(Xe).length > 0)
              await oV({
                hasDynamicMcpConfig: true,
              });
            await _vt(
              bs,
              {
                getFpsMetrics: Da,
                stats: Qs,
                initialState: et.initialState,
              },
              {
                ...Ih,
                mainThreadAgentDefinition: et.restoredAgentDef ?? Qn,
                dynamicMcpConfig: Xe,
                initialMessages: et.messages,
                initialFileHistorySnapshots: et.fileHistorySnapshots,
                initialContentReplacements: et.contentReplacements,
                initialAgentName: et.agentName,
                initialAgentColor: et.agentColor,
              },
              F7e,
            );
          } else
            await dOc(
              bs,
              {
                getFpsMetrics: Da,
                stats: Qs,
                initialState: rb,
              },
              tAe(yr()),
              {
                ...Ih,
                initialSearchQuery: Yc,
                forkSession: a.forkSession,
                filterByPr: dc,
              },
            );
        } else {
          let Wn = bg && C_.length === 0 ? bg : void 0;
          if (
            (pa("action_after_hooks"),
            maybeActivateBrief(a),
            await DZo(a),
            Z1e(MZo?.isCoordinatorMode() ? "coordinator" : "normal"),
            a.deepLinkOrigin)
          ) {
            if (
              (G("tengu_deep_link_opened", {
                has_prefill: Boolean(a.prefill),
                has_repo: Boolean(a.deepLinkRepo),
              }),
              T(
                i_c({
                  cwd: $t(),
                  prefillLength: a.prefill?.length,
                  repo: a.deepLinkRepo,
                  lastFetch:
                    a.deepLinkLastFetch !== void 0 ? new Date(a.deepLinkLastFetch) : void 0,
                }),
                {
                  level: "info",
                },
              ),
              a.prefill)
            )
              cHe({
                type: "deep-link",
                prefillLength: a.prefill.length,
              });
          } else if (a.prefill)
            cHe({
              type: "prefill",
              prefillLength: a.prefill.length,
            });
          let Cs = C_.length > 0 ? C_ : void 0;
          await _vt(
            bs,
            {
              getFpsMetrics: Da,
              stats: Qs,
              initialState: rb,
            },
            {
              ...Ih,
              initialMessages: Cs,
              pendingHookMessages: Wn,
            },
            F7e,
          );
        }
      })
      .version(
        `${
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.VERSION
        } (Claude Code)${L2()}`,
        "-v, --version",
        "Output the version number",
      ),
    e.option(
      "-w, --worktree [name]",
      "Create a new git worktree for this session (optionally specify a name)",
    ),
    e.option(
      "--tmux",
      "Create a tmux session for the worktree (requires --worktree). Uses iTerm2 native panes when available; use --tmux=classic for traditional tmux.",
    ),
    e.addOption(
      new Ec(
        "--advisor <model>",
        "Enable the server-side advisor tool with the specified model (alias or full ID).",
      ).hideHelp(),
    ),
    e.addOption(new Ec("--enable-auto-mode", "(deprecated) Opt in to auto mode").hideHelp()),
    e.addOption(
      new Ec(
        "--bg, --background",
        "Start the session as a background agent and return immediately (manage with `claude agents`)",
      ),
    ),
    e.addOption(new Ec("--brief", "Enable SendUserMessage tool for agent-to-user communication")),
    e.addOption(
      new Ec(
        "--ax-screen-reader",
        "Render screen-reader friendly output (flat text, no decorative borders or animations).",
      ),
    ),
    e.addOption(
      new Ec(
        "--channels <servers...>",
        "MCP servers whose channel notifications (inbound push) should register this session. Space-separated server names.",
      ).hideHelp(),
    ),
    e.addOption(
      new Ec(
        "--dangerously-load-development-channels <servers...>",
        "Load channel servers not on the approved allowlist. For local channel development only. Shows a confirmation dialog at startup.",
      ).hideHelp(),
    ),
    e.addOption(new Ec("--agent-id <id>", "Teammate agent ID").hideHelp()),
    e.addOption(new Ec("--agent-name <name>", "Teammate display name").hideHelp()),
    e.addOption(new Ec("--team-name <name>", "Team name for teammate coordination").hideHelp()),
    e.addOption(new Ec("--agent-color <color>", "Teammate UI color").hideHelp()),
    e.addOption(
      new Ec("--plan-mode-required", "Require plan mode before implementation").hideHelp(),
    ),
    e.addOption(
      new Ec("--parent-session-id <id>", "Parent session ID for analytics correlation").hideHelp(),
    ),
    e.addOption(
      new Ec(
        "--teammate-mode <mode>",
        'How to spawn teammates: "tmux", "iterm2", "in-process", or "auto"',
      )
        .choices(["auto", "tmux", "iterm2", "in-process"])
        .hideHelp(),
    ),
    e.addOption(new Ec("--agent-type <type>", "Custom agent type for this teammate").hideHelp()),
    e.addOption(
      new Ec(
        "--sdk-url <url>",
        "Use remote WebSocket endpoint for SDK I/O streaming (only with -p and stream-json format)",
      ).hideHelp(),
    ),
    e.addOption(
      new Ec(
        "--teleport [session]",
        "Resume a teleport session, optionally specify session ID",
      ).hideHelp(),
    ),
    e.addOption(
      new Ec(
        "--cloud [description|session_id|url]",
        "Create a cloud session with the given description, or attach to an existing one by session ID or claude.ai/code URL",
      ).hideHelp(),
    ),
    e.addOption(
      new Ec("--remote [description|session_id|url]", "Deprecated alias for --cloud").hideHelp(),
    ),
    e.addOption(
      new Ec(
        "--remote-control [name]",
        "Start an interactive session with Remote Control enabled (optionally named)",
      ).argParser((i) => i || true),
    ),
    e.addOption(
      new Ec("--rc [name]", "Alias for --remote-control").argParser((i) => i || true).hideHelp(),
    ),
    e.option(
      "--remote-control-session-name-prefix <prefix>",
      "Prefix for auto-generated Remote Control session names (default: hostname)",
    ),
    pa("run_main_options_built"));
  let n = process.argv.includes("-p") || process.argv.includes("--print"),
    r = process.argv.some((i) => i.startsWith("cc://") || i.startsWith("cc+unix://"));
  if (n && !r)
    return (pa("run_before_parse"), await e.parseAsync(process.argv), pa("run_after_parse"), e);
  (e
    .command("gateway")
    .description("Run the enterprise auth/telemetry gateway")
    .requiredOption("--config <path>", "Path to gateway YAML config")
    .action(async ({ config: i }) => {
      try {
        let { startGateway: a } = await Promise.resolve().then(() => (p5c(), d5c));
        await a(i);
      } catch (a) {
        (process.stderr.write(`claude gateway: ${a instanceof Error ? a.message : String(a)}
`),
          process.exit(1));
      }
    }),
    ypc(e));
  let o = e.command("auth").description("Manage authentication").configureHelp(LTe());
  if (
    (o
      .command("login")
      .description("Sign in to your Anthropic account")
      .option("--email <email>", "Pre-populate email address on the login page")
      .option("--sso", "Force SSO login flow")
      .option(
        "--console",
        "Use Anthropic Console (API usage billing) instead of Claude subscription",
      )
      .option("--claudeai", "Use Claude subscription (default)")
      .action(async ({ email: i, sso: a, console: l, claudeai: c }) => {
        let { authLogin: u } = await Promise.resolve().then(() => (Mgt(), UVn));
        await u({
          email: i,
          sso: a,
          console: l,
          claudeai: c,
        });
      }),
    o
      .command("status")
      .description("Show authentication status")
      .option("--json", "Output as JSON (default)")
      .option("--text", "Output as human-readable text")
      .action(async (i) => {
        let [{ authStatus: a }, { createSubcommandRoot: l }] = await Promise.all([
          Promise.resolve().then(() => (Mgt(), UVn)),
          Promise.resolve().then(() => (vA(), TA)),
        ]);
        await a(await l(), i);
      }),
    o
      .command("logout")
      .description("Log out from your Anthropic account")
      .action(async () => {
        let [{ authLogout: i }, { createSubcommandRoot: a }] = await Promise.all([
          Promise.resolve().then(() => (Mgt(), UVn)),
          Promise.resolve().then(() => (vA(), TA)),
        ]);
        (await i(await a()), process.exit(0));
      }),
    e
      .command("project")
      .description("Manage Claude Code project state")
      .configureHelp(LTe())
      .command("purge [path]")
      .description(
        "Delete all Claude Code state for a project (transcripts, tasks, file history, config entry)",
      )
      .option("--dry-run", "List what would be deleted without deleting anything")
      .option("-y, --yes", "Skip confirmation prompt")
      .option("-i, --interactive", "Prompt for each item before deleting")
      .option("--all", "Purge state for every project (mutually exclusive with [path])")
      .action(async (i, a) => {
        let { purgeProjectHandler: l } = await Promise.resolve().then(() => (S5c(), b5c));
        await l(i, a);
      }),
    Lpc(e),
    e
      .command("setup-token")
      .description("Set up a long-lived authentication token (requires Claude subscription)")
      .action(async () => {
        let [{ setupTokenHandler: i }, { createRoot: a }] = await Promise.all([
            Promise.resolve().then(() => (vA(), TA)),
            Promise.resolve().then(() => (Ye(), wW)),
          ]),
          l = await a(lN(false));
        await i(l);
      }),
    e
      .command("agents")
      .description("Manage background agents")
      .allowExcessArguments(false)
      .option(
        "--setting-sources <sources>",
        "Comma-separated list of setting sources to load (user, project, local).",
      )
      .option("--cwd <path>", "Show only background sessions started under <path>")
      .option(
        "--add-dir <directory>",
        "Additional directory to allow tool access to in dispatched sessions (repeatable)",
      )
      .option(
        "--plugin-dir <path>",
        "Load plugins from specified directory for the agent view and dispatched sessions (repeatable)",
      )
      .addOption(
        new Ec(
          "--plugin-dir-no-mcp <path>",
          "Like --plugin-dir but the engine will not read this plugin's .mcp.json",
        ).hideHelp(),
      )
      .option(
        "--settings <file-or-json>",
        "Settings file or JSON string to apply to the agent view and dispatched sessions",
      )
      .option(
        "--mcp-config <config>",
        "MCP server configuration to apply to dispatched sessions (repeatable)",
      )
      .option(
        "--strict-mcp-config",
        "Only use MCP servers from --mcp-config in dispatched sessions",
      )
      .option(
        "--permission-mode <mode>",
        "Default permission mode for sessions dispatched from agent view",
      )
      .option("--dangerously-skip-permissions", "Alias for --permission-mode bypassPermissions")
      .option(
        "--allow-dangerously-skip-permissions",
        "Make bypass-permissions mode available to dispatched sessions without defaulting to it",
      )
      .option("--model <model>", "Default model for sessions dispatched from agent view")
      .option("--effort <level>", "Default effort level for sessions dispatched from agent view")
      .option(
        "--agent <agent>",
        "Default agent for sessions dispatched from agent view. Overrides the 'agent' setting.",
      )
      .option(
        "--json",
        "Print active sessions as a JSON array and exit (for scripting; does not require a TTY)",
      )
      .option("--all", "With --json: include completed sessions (the full agent view list)")
      .action(async (i) => {
        let { agentsCommandHandler: a } = await Promise.resolve().then(() => (I5c(), C5c));
        await a(i);
      }),
    e
      .command("ultrareview [target]")
      .description(
        "Run a cloud-hosted multi-agent code review of the current branch (or a PR number / base branch) and print the findings",
      )
      .option("--json", "Print the raw bugs.json payload instead of formatted findings")
      .option(
        "--timeout <minutes>",
        "Maximum minutes to wait for the review to finish (default: 30)",
      )
      .action(async (i, a) => {
        let { ultrareviewHandler: l } = await Promise.resolve().then(() => (R5c(), k5c));
        (await l(i ?? "", a), process.exit(0));
      }),
    Yqo() !== "disabled")
  ) {
    let i = e.command("auto-mode").description("Inspect auto mode classifier configuration");
    (i
      .command("defaults")
      .description(
        "Print the default auto mode environment, allow, soft_deny, and hard_deny rules as JSON",
      )
      .action(async () => {
        let [{ autoModeDefaultsHandler: a }, { createSubcommandRoot: l }] = await Promise.all([
          Promise.resolve().then(() => (uhr(), chr)),
          Promise.resolve().then(() => (vA(), TA)),
        ]);
        (await a(await l()), process.exit(0));
      }),
      i
        .command("config")
        .description(
          "Print the effective auto mode config as JSON: your settings where set, defaults otherwise",
        )
        .action(async () => {
          let [{ autoModeConfigHandler: a }, { createSubcommandRoot: l }] = await Promise.all([
            Promise.resolve().then(() => (uhr(), chr)),
            Promise.resolve().then(() => (vA(), TA)),
          ]);
          (await a(await l()), process.exit(0));
        }),
      i
        .command("critique")
        .description("Get AI feedback on your custom auto mode rules")
        .option("--model <model>", "Override which model is used")
        .action(async (a) => {
          let [{ autoModeCritiqueHandler: l }, { createSubcommandRoot: c }] = await Promise.all([
            Promise.resolve().then(() => (uhr(), chr)),
            Promise.resolve().then(() => (vA(), TA)),
          ]);
          (await l(await c(), a), process.exit());
        }));
  }
  return (
    e
      .command("remote-control", {
        hidden: true,
      })
      .alias("rc")
      .description("Control local sessions from claude.ai/code or the Claude mobile app")
      .action(async () => {
        let { bridgeMain: i } = await Promise.resolve().then(() => (Yir(), Kir));
        await i(process.argv.slice(3));
      }),
    e
      .command("doctor")
      .description(
        "Check the health of your Claude Code auto-updater. Note: The workspace trust dialog is skipped and stdio servers from .mcp.json are spawned for health checks. Only use this command in directories you trust.",
      )
      .action(async () => {
        let [{ doctorHandler: i }, { createRoot: a }] = await Promise.all([
            Promise.resolve().then(() => (vA(), TA)),
            Promise.resolve().then(() => (Ye(), wW)),
          ]),
          l = await a(lN(false));
        await i(l);
      }),
    e
      .command("update")
      .alias("upgrade")
      .description("Check for updates and install if available")
      .action(async () => {
        let { update: i } = await Promise.resolve().then(() => ($5c(), M5c));
        await i();
      }),
    e
      .command("install [target]")
      .description(
        "Install Claude Code native build. Use [target] to specify version (stable, latest, or specific version)",
      )
      .option("--force", "Force installation even if already installed")
      .action(async (i, a) => {
        let { installHandler: l } = await Promise.resolve().then(() => (vA(), TA));
        await l(i, a);
      }),
    e
      .command("import-conversations <exportPath>", {
        hidden: true,
      })
      .option("--cwd <dir>", "Archive directory the imported sessions anchor to")
      .option("--dry-run", "Parse and verify manifest without writing files")
      .action(async (i, a) => {
        let { importConversationsHandler: l } = await Promise.resolve().then(() => (F5c(), U5c));
        await l(i, a);
      }),
    pa("run_before_parse"),
    await e.parseAsync(process.argv),
    pa("run_after_parse"),
    pa("main_after_run"),
    ext(),
    e
  );
}
async function logTenguInit({
  onAntSandboxDetection: e,
  hasInitialPrompt: t,
  hasStdin: n,
  verbose: r,
  debug: o,
  print: s,
  outputFormat: i,
  inputFormat: a,
  numAllowedTools: l,
  numDisallowedTools: c,
  mcpClientCount: u,
  worktreeEnabled: d,
  skipWebFetchPreflight: p,
  githubActionInputs: f,
  dangerouslySkipPermissionsPassed: m,
  permissionMode: g,
  modeIsBypass: h,
  allowDangerouslySkipPermissionsPassed: y,
  skipDangerousModePromptSetPreDialog: b,
  systemPromptFlag: _,
  appendSystemPromptFlag: S,
  thinkingConfig: A,
}) {
  try {
    let v = KUi(),
      C,
      x,
      I = {},
      k = {
        entrypoint: We("claude"),
        hasInitialPrompt: t,
        hasStdin: n,
        verbose: r,
        debug: o,
        debugToStderr: wO(),
        print: s,
        outputFormat: i,
        inputFormat: a,
        numAllowedTools: l,
        numDisallowedTools: c,
        mcpClientCount: u,
        worktree: d,
        skipWebFetchPreflight: p,
        githubActionInputsPresent: f !== void 0,
        githubActionInputsLength: f?.length,
        dangerouslySkipPermissionsPassed: m,
        permissionMode: g,
        modeIsBypass: h,
        inProtectedNamespace: $V(),
        ...yHt(),
        ...C,
        apiKeySource: $e(
          Ty({
            skipRetrievingKeyFromApiKeyHelper: true,
          }).source,
        ),
        allowDangerouslySkipPermissionsPassed: y,
        thinkingType: $e(A.type),
        ...(_ && {
          systemPromptFlag: $e(_),
        }),
        ...(S && {
          appendSystemPromptFlag: $e(S),
        }),
        ...(v && {
          noFlickerEnvVar: $e(v),
        }),
        rendererEntryPath: $e(Uke()),
        ...I,
        is_simple: md() || void 0,
        is_safe_mode: Tl() || void 0,
        is_coordinator: MZo?.isCoordinatorMode() ? true : void 0,
        autoUpdatesChannel: $e(Dr().autoUpdatesChannel ?? "latest"),
        ...{},
      };
    G("tengu_init", k);
  } catch (v) {
    ke(v);
  }
}
async function DZo(e) {}
function maybeActivateBrief(e) {
  let t = e.brief,
    n = Oe.CLAUDE_CODE_BRIEF;
  if (!t && !n) return;
  let { isBriefEntitled: r } = (l3(), ro(CQ)),
    o = r();
  if (o) Ige(true);
  G("tengu_brief_mode_enabled", {
    enabled: o,
    gated: !o,
    source: $e(n ? "env" : "flag"),
  });
}
function N1m() {
  (process.stderr.isTTY ? process.stderr : process.stdout.isTTY ? process.stdout : void 0)?.write(
    A1,
  );
}
function extractTeammateOptions(e) {
  if (typeof e !== "object" || e === null) return {};
  let t = e,
    n = t.teammateMode;
  return {
    agentId: typeof t.agentId === "string" ? t.agentId : void 0,
    agentName: typeof t.agentName === "string" ? t.agentName : void 0,
    teamName: typeof t.teamName === "string" ? t.teamName : void 0,
    agentColor: typeof t.agentColor === "string" ? t.agentColor : void 0,
    planModeRequired: typeof t.planModeRequired === "boolean" ? t.planModeRequired : void 0,
    parentSessionId: typeof t.parentSessionId === "string" ? t.parentSessionId : void 0,
    teammateMode: n === "auto" || n === "tmux" || n === "iterm2" || n === "in-process" ? n : void 0,
    agentType: typeof t.agentType === "string" ? t.agentType : void 0,
  };
}
async function U1m(e, t) {
  let n = t.commands
      .filter((s) => !("_hidden" in s && s._hidden))
      .flatMap((s) => [s.name(), ...s.aliases()]),
    r = e.toLowerCase(),
    o =
      r !== e && n.includes(r)
        ? r
        : Npe(
            r,
            n.map((s) => ({
              name: s,
            })),
          );
  if (!o) return;
  (await my("tengu_unknown_command_suggestion", {}),
    process.stderr.write(
      [
        wt.red(nt.cross) + ` unknown command "${e}"`,
        wt.dim(`  ${FO.last} `) + "Did you mean " + wt.bold(`claude ${o}`) + "?",
        "",
        wt.dim("Run ") +
          wt.dim.bold("claude --help") +
          wt.dim(" to list commands, or ") +
          wt.dim.bold(`claude -p "${e}"`) +
          wt.dim(" to send as a prompt."),
        "",
      ].join(`
`),
    ),
    await XN(1));
}
var z5c,
  PZo,
  fve,
  j5c = () => (Mp(), ro(ejr)),
  v1m = () => ro(Qgl),
  w1m = () => (NDe(), ro(ago)),
  MZo,
  G5c,
  RZo = 13,
  q5c = void 0,
  LZo = void 0,
  V5c = 10485760;
