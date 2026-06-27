// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZNc
// matched 2.1.88 source: src/entrypoints/sdk/coreSchemas.ts
// class=modified  jaccard=0.3565  score=0.4248  fileCov=0.6894
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ZNc] deps: Xr, uur
((vmr = ve(() =>
  H.object({
    inputTokens: H.number(),
    outputTokens: H.number(),
    cacheReadInputTokens: H.number(),
    cacheCreationInputTokens: H.number(),
    webSearchRequests: H.number(),
    costUSD: H.number(),
    contextWindow: H.number(),
    maxOutputTokens: H.number(),
  }),
)),
  (Lkm = ve(() => H.literal("json_schema"))),
  (ZOH = ve(() =>
    H.object({
      type: Lkm(),
    }),
  )),
  (Dkm = ve(() =>
    H.object({
      type: H.literal("json_schema"),
      schema: H.record(H.string(), H.unknown()),
    }),
  )),
  (e1H = ve(() => Dkm())),
  (Pkm = ve(() => H.enum(["user", "project", "org", "temporary", "oauth"]))),
  (t1H = ve(() => H.enum(["local", "user", "project"]).describe("Config scope for settings."))),
  (n1H = ve(() => H.literal("context-1m-2025-08-07"))),
  (Mkm = ve(() =>
    H.object({
      type: H.literal("adaptive"),
      display: H.enum(["summarized", "omitted"]).optional(),
    }).describe("Claude decides when and how much to think (Opus 4.6+)."),
  )),
  ($km = ve(() =>
    H.object({
      type: H.literal("enabled"),
      budgetTokens: H.number().optional(),
      display: H.enum(["summarized", "omitted"]).optional(),
    }).describe("Fixed thinking token budget (older models)"),
  )),
  (Okm = ve(() =>
    H.object({
      type: H.literal("disabled"),
    }).describe("No extended thinking"),
  )),
  (r1H = ve(() =>
    H.union([Mkm(), $km(), Okm()]).describe(
      "Controls Claude's thinking/reasoning behavior. When set, takes precedence over the deprecated maxThinkingTokens.",
    ),
  )),
  (G7o = ve(() =>
    H.literal("comms")
      .optional()
      .catch(void 0)
      .describe(
        "@internal Coordinator-mode role for this MCP server. 'comms' marks the server the coordinator uses to address the user; the coordinator tool filter lets comms-roled servers' tools through. Claude Code extension to .mcp.json \u2014 host-side config, not part of the MCP wire protocol. Coordinator mode is activated via the CLAUDE_CODE_COORDINATOR_MODE environment variable; this field only takes effect when coordinator mode is active.",
      ),
  )),
  (wmr = ve(() =>
    H.number()
      .int()
      .positive()
      .optional()
      .describe(
        "Per-server tool-call timeout in milliseconds. Overrides the MCP_TOOL_TIMEOUT environment variable for this server. Hard wall-clock limit per call; progress notifications do not extend it. Values below 1000ms are ignored (falls through to MCP_TOOL_TIMEOUT or the default).",
      ),
  )),
  (Nkm = ve(() =>
    H.object({
      type: H.literal("stdio").optional(),
      command: H.string(),
      args: H.array(H.string()).optional(),
      env: H.record(H.string(), H.string()).optional(),
      timeout: wmr(),
      alwaysLoad: H.boolean()
        .optional()
        .describe(
          "When true, all tools from this server are always included in the prompt and never deferred behind tool search. Equivalent to setting defer_loading: false on the API. Default: tools are deferred when tool search is enabled. As a side effect this also blocks startup until the server is connected (capped at the standard 5s connect timeout) even though MCP startup is otherwise non-blocking by default, since the tools must be present when the turn-1 prompt is built.",
        ),
      role: G7o(),
    }),
  )),
  (UNc = ve(() =>
    H.object({
      name: H.string(),
      permission_policy: H.enum(["always_allow", "always_ask", "always_deny"]).optional(),
      org_max_permission: H.enum(["allow", "ask", "blocked"])
        .optional()
        .describe(
          "Org admin's per-tool ceiling. Drives the auto-mode isOrgAskCeiling gate so an admin 'ask' cap forces a user prompt even in auto mode.",
        ),
    }).describe("Per-tool permission policy carried on mcp_set_servers for remote servers."),
  )),
  (Bkm = ve(() =>
    H.object({
      type: H.literal("sse"),
      url: H.string(),
      headers: H.record(H.string(), H.string()).optional(),
      tools: H.array(UNc()).optional(),
      timeout: wmr(),
      alwaysLoad: H.boolean()
        .optional()
        .describe(
          "When true, all tools from this server are always included in the prompt and never deferred behind tool search. Equivalent to setting defer_loading: false on the API. Default: tools are deferred when tool search is enabled. As a side effect this also blocks startup until the server is connected (capped at the standard 5s connect timeout) even though MCP startup is otherwise non-blocking by default, since the tools must be present when the turn-1 prompt is built.",
        ),
      role: G7o(),
    }),
  )),
  (Ukm = ve(() =>
    H.object({
      type: H.literal("http"),
      url: H.string(),
      headers: H.record(H.string(), H.string()).optional(),
      tools: H.array(UNc()).optional(),
      timeout: wmr(),
      alwaysLoad: H.boolean()
        .optional()
        .describe(
          "When true, all tools from this server are always included in the prompt and never deferred behind tool search. Equivalent to setting defer_loading: false on the API. Default: tools are deferred when tool search is enabled. As a side effect this also blocks startup until the server is connected (capped at the standard 5s connect timeout) even though MCP startup is otherwise non-blocking by default, since the tools must be present when the turn-1 prompt is built.",
        ),
      role: G7o(),
    }),
  )),
  (Fkm = ve(() =>
    H.object({
      type: H.literal("sdk"),
      name: H.string(),
    }),
  )),
  (Cmr = ve(() => H.union([Nkm(), Bkm(), Ukm(), Fkm()]))),
  (jkm = ve(() =>
    H.object({
      type: H.literal("claudeai-proxy"),
      url: H.string(),
      id: H.string(),
      timeout: wmr(),
    }),
  )),
  (Gkm = ve(() => H.union([Cmr(), jkm()]))),
  (W7o = ve(() =>
    H.object({
      name: H.string().describe("Server name as configured"),
      status: H.enum(["connected", "failed", "needs-auth", "pending", "disabled"]).describe(
        "Current connection status",
      ),
      serverInfo: H.object({
        name: H.string(),
        version: H.string(),
      })
        .optional()
        .describe("Server information (available when connected)"),
      error: H.string().optional().describe("Error message (available when status is 'failed')"),
      config: Gkm().optional().describe("Server configuration (includes URL for HTTP/SSE servers)"),
      scope: H.string()
        .optional()
        .describe("Configuration scope (e.g., project, user, local, claudeai, managed)"),
      tools: H.array(
        H.object({
          name: H.string(),
          description: H.string().optional(),
          annotations: H.object({
            readOnly: H.boolean().optional(),
            destructive: H.boolean().optional(),
            openWorld: H.boolean().optional(),
          }).optional(),
        }),
      )
        .optional()
        .describe("Tools provided by this server (available when connected)"),
      capabilities: H.object({
        experimental: H.record(H.string(), H.unknown()).optional(),
      })
        .optional()
        .describe(
          "@internal Server capabilities (available when connected). experimental['claude/channel'] is only present if the server's plugin is on the approved channels allowlist \u2014 use its presence to decide whether to show an Enable-channel prompt.",
        ),
    }).describe("Status information for an MCP server connection."),
  )),
  (o1H = ve(() =>
    H.object({
      added: H.array(H.string()).describe("Names of servers that were added"),
      removed: H.array(H.string()).describe("Names of servers that were removed"),
      errors: H.record(H.string(), H.string()).describe(
        "Map of server names to error messages for servers that failed to connect",
      ),
    }).describe("Result of a setMcpServers operation."),
  )),
  (Cvt = ve(() =>
    H.enum(["userSettings", "projectSettings", "localSettings", "session", "cliArg"]),
  )),
  (F7o = ve(() => H.enum(["allow", "deny", "ask"]))),
  (Wkm = ve(() => H.enum(["allow", "deny", "ask", "defer"]))),
  (j7o = ve(() =>
    H.object({
      toolName: H.string(),
      ruleContent: H.string().optional(),
    }),
  )),
  (inn = ve(() =>
    H.discriminatedUnion("type", [
      H.object({
        type: H.literal("addRules"),
        rules: H.array(j7o()),
        behavior: F7o(),
        destination: Cvt(),
      }),
      H.object({
        type: H.literal("replaceRules"),
        rules: H.array(j7o()),
        behavior: F7o(),
        destination: Cvt(),
      }),
      H.object({
        type: H.literal("removeRules"),
        rules: H.array(j7o()),
        behavior: F7o(),
        destination: Cvt(),
      }),
      H.object({
        type: H.literal("setMode"),
        mode: H.lazy(() => ive()),
        destination: Cvt(),
      }),
      H.object({
        type: H.literal("addDirectories"),
        directories: H.array(H.string()),
        destination: Cvt(),
      }),
      H.object({
        type: H.literal("removeDirectories"),
        directories: H.array(H.string()),
        destination: Cvt(),
      }),
    ]),
  )),
  (BNc = ve(() =>
    H.enum(["user_temporary", "user_permanent", "user_reject"]).describe(
      "Classification of this permission decision for telemetry. SDK hosts that prompt users (desktop apps, IDEs) should set this to reflect what actually happened: user_temporary for allow-once, user_permanent for always-allow (both the click and later cache hits), user_reject for deny. If unset, the CLI infers conservatively (temporary for allow, reject for deny). The vocabulary matches tool_decision OTel events (monitoring-usage docs).",
    ),
  )),
  (s1H = ve(() =>
    H.union([
      H.object({
        behavior: H.literal("allow"),
        updatedInput: H.record(H.string(), H.unknown()).optional(),
        updatedPermissions: H.array(inn()).optional(),
        toolUseID: H.string().optional(),
        decisionClassification: BNc().optional(),
      }),
      H.object({
        behavior: H.literal("deny"),
        message: H.string(),
        interrupt: H.boolean().optional(),
        toolUseID: H.string().optional(),
        decisionClassification: BNc().optional(),
      }),
    ]),
  )),
  (ive = ve(() =>
    H.enum(["default", "acceptEdits", "bypassPermissions", "plan", "dontAsk", "auto"]).describe(
      "Permission mode for controlling how tool executions are handled. 'default' - Standard behavior, prompts for dangerous operations. 'acceptEdits' - Auto-accept file edit operations. 'bypassPermissions' - Bypass all permission checks (requires allowDangerouslySkipPermissions). 'plan' - Planning mode, no actual tool execution. 'dontAsk' - Don't prompt for permissions, deny if not pre-approved. 'auto' - Use a model classifier to approve/deny permission prompts.",
    ),
  )),
  (qkm = [
    "PreToolUse",
    "PostToolUse",
    "PostToolUseFailure",
    "PostToolBatch",
    "Notification",
    "UserPromptSubmit",
    "UserPromptExpansion",
    "SessionStart",
    "SessionEnd",
    "Stop",
    "StopFailure",
    "SubagentStart",
    "SubagentStop",
    "PreCompact",
    "PostCompact",
    "PermissionRequest",
    "PermissionDenied",
    "Setup",
    "TeammateIdle",
    "TaskCreated",
    "TaskCompleted",
    "Elicitation",
    "ElicitationResult",
    "ConfigChange",
    "WorktreeCreate",
    "WorktreeRemove",
    "InstructionsLoaded",
    "CwdChanged",
    "FileChanged",
    "MessageDisplay",
  ]),
  (FNc = ve(() => H.enum(qkm))),
  (CS = ve(() =>
    H.object({
      session_id: H.string(),
      transcript_path: H.string(),
      cwd: H.string(),
      permission_mode: H.string().optional(),
      agent_id: H.string()
        .optional()
        .describe(
          "Subagent identifier. Present only when the hook fires from within a subagent (e.g., a tool called by an AgentTool worker). Absent for the main thread, even in --agent sessions. Use this field (not agent_type) to distinguish subagent calls from main-thread calls.",
        ),
      agent_type: H.string()
        .optional()
        .describe(
          'Agent type name (e.g., "general-purpose", "code-reviewer"). Present when the hook fires from within a subagent (alongside agent_id), or on the main thread of a session started with --agent (without agent_id).',
        ),
      effort: H.object({
        level: H.string().describe(
          'Active effort level for the current turn (e.g., "low", "medium", "high", "xhigh", "max"), after any silent downgrade for the selected model. Also exposed to hook commands and Bash as the CLAUDE_EFFORT env var.',
        ),
      })
        .optional()
        .describe(
          "Reasoning effort applied to the current turn. Same shape as StatusLineCommandInput.effort. Present for hooks that fire within a tool-use context (PreToolUse, PostToolUse, Stop, SubagentStop, etc.) on a model that supports the effort parameter; absent for session-lifecycle hooks and models without effort support.",
        ),
    }),
  )),
  (Vkm = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("PreToolUse"),
        tool_name: H.string(),
        tool_input: H.unknown(),
        tool_use_id: H.string(),
      }),
    ),
  )),
  (zkm = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("PermissionRequest"),
        tool_name: H.string(),
        tool_input: H.unknown(),
        permission_suggestions: H.array(inn()).optional(),
      }),
    ),
  )),
  (Kkm = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("PostToolUse"),
        tool_name: H.string(),
        tool_input: H.unknown(),
        tool_response: H.unknown(),
        tool_use_id: H.string(),
        duration_ms: H.number()
          .optional()
          .describe(
            "Tool execution time in milliseconds. Excludes permission-prompt and hook time.",
          ),
      }),
    ),
  )),
  (Ykm = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("PostToolUseFailure"),
        tool_name: H.string(),
        tool_input: H.unknown(),
        tool_use_id: H.string(),
        error: H.string(),
        is_interrupt: H.boolean().optional(),
        duration_ms: H.number()
          .optional()
          .describe(
            "Tool execution time in milliseconds. Excludes permission-prompt and hook time.",
          ),
      }),
    ),
  )),
  (Xkm = ve(() =>
    H.object({
      tool_name: H.string(),
      tool_input: H.unknown(),
      tool_use_id: H.string(),
      tool_response: H.unknown().optional(),
    }),
  )),
  (Jkm = ve(() =>
    CS()
      .and(
        H.object({
          hook_event_name: H.literal("PostToolBatch"),
          tool_calls: H.array(Xkm()),
        }),
      )
      .describe(
        "Hook input for the PostToolBatch event. Fired once after every tool call in a batch has resolved, before the next model request. PostToolUse fires per-tool and may run concurrently for parallel tool calls; PostToolBatch fires exactly once with the full batch.",
      ),
  )),
  (Qkm = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("PermissionDenied"),
        tool_name: H.string(),
        tool_input: H.unknown(),
        tool_use_id: H.string(),
        reason: H.string(),
      }),
    ),
  )),
  (Zkm = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("Notification"),
        message: H.string(),
        title: H.string().optional(),
        notification_type: H.string(),
      }),
    ),
  )),
  (e0m = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("UserPromptSubmit"),
        prompt: H.string(),
        session_title: H.string().optional(),
      }),
    ),
  )),
  (t0m = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("UserPromptExpansion"),
        expansion_type: H.enum(["slash_command", "mcp_prompt"]),
        command_name: H.string(),
        command_args: H.string(),
        command_source: H.string().optional(),
        prompt: H.string(),
      }),
    ),
  )),
  (n0m = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("SessionStart"),
        source: H.enum(["startup", "resume", "clear", "compact"]),
        agent_type: H.string().optional(),
        model: H.string().optional(),
        session_title: H.string().optional(),
      }),
    ),
  )),
  (r0m = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("Setup"),
        trigger: H.enum(["init", "maintenance"]),
      }),
    ),
  )),
  (jNc = ve(() =>
    H.object({
      id: H.string(),
      type: H.string().describe(
        "Friendly task-type label (e.g. 'shell', 'subagent', 'monitor', 'workflow'). Falls back to the raw discriminant for unknown types.",
      ),
      status: H.string(),
      description: H.string().describe(
        "Free-text description. Capped at 1000 chars; clipped values append " +
          'an in-string "\u2026 [+N chars]" marker.',
      ),
      command: H.string()
        .optional()
        .describe(
          "Shell command line. Only present for 'shell' tasks. Capped at 1000 " +
            'chars with the same "\u2026 [+N chars]" marker.',
        ),
      agent_type: H.string()
        .optional()
        .describe("Subagent type name. Only present for 'subagent' tasks."),
      server: H.string()
        .optional()
        .describe("MCP server name. Only present for 'monitor' / 'MCP task' tasks."),
      tool: H.string()
        .optional()
        .describe("MCP tool name. Only present for 'monitor' / 'MCP task' tasks."),
      name: H.string().optional().describe("Workflow name. Only present for 'workflow' tasks."),
    }),
  )),
  (GNc = ve(() =>
    H.object({
      id: H.string(),
      schedule: H.string().describe('Cron expression, e.g. "0 9 * * 1-5".'),
      recurring: H.boolean().describe(
        "False for one-shot wakeups whose cron field encodes a single fire time; true for tasks that re-fire on every match.",
      ),
      prompt: H.string().describe(
        "Prompt text submitted when the cron fires. Capped at 1000 chars; " +
          'clipped values append an in-string "\u2026 [+N chars]" marker.',
      ),
    }),
  )),
  (o0m = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("Stop"),
        stop_hook_active: H.boolean(),
        last_assistant_message: H.string()
          .optional()
          .describe(
            "Text content of the last assistant message before stopping. Avoids the need to read and parse the transcript file.",
          ),
        background_tasks: H.array(jNc())
          .optional()
          .describe(
            'In-flight background work (running/pending + backgrounded) registered in this session. Lets hooks distinguish "session is done" from "session is paused waiting for background work to wake it". Empty array when nothing is in flight.',
          ),
        session_crons: H.array(GNc())
          .optional()
          .describe(
            "Session-scoped cron tasks (CronCreate, ScheduleWakeup, /loop) that will wake this session later. Empty array when none are scheduled.",
          ),
      }),
    ),
  )),
  (s0m = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("StopFailure"),
        error: z7o(),
        error_details: H.string().optional(),
        last_assistant_message: H.string().optional(),
      }),
    ),
  )),
  (i0m = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("SubagentStart"),
        agent_id: H.string(),
        agent_type: H.string(),
      }),
    ),
  )),
  (a0m = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("SubagentStop"),
        stop_hook_active: H.boolean(),
        agent_id: H.string(),
        agent_transcript_path: H.string(),
        agent_type: H.string(),
        last_assistant_message: H.string()
          .optional()
          .describe(
            "Text content of the last assistant message before stopping. Avoids the need to read and parse the transcript file.",
          ),
        background_tasks: H.array(jNc())
          .optional()
          .describe(
            'In-flight background work (running/pending + backgrounded) registered in this session. Lets hooks distinguish "session is done" from "session is paused waiting for background work to wake it". Empty array when nothing is in flight.',
          ),
        session_crons: H.array(GNc())
          .optional()
          .describe(
            "Session-scoped cron tasks (CronCreate, ScheduleWakeup, /loop) that will wake this session later. Empty array when none are scheduled.",
          ),
      }),
    ),
  )),
  (l0m = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("PreCompact"),
        trigger: H.enum(["manual", "auto"]),
        custom_instructions: H.string().nullable(),
      }),
    ),
  )),
  (c0m = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("PostCompact"),
        trigger: H.enum(["manual", "auto"]),
        compact_summary: H.string().describe("The conversation summary produced by compaction"),
      }),
    ),
  )),
  (u0m = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("TeammateIdle"),
        teammate_name: H.string(),
        team_name: H.string().describe(
          "@deprecated Sessions have a single implicit team; this carries the session-derived team name and will be removed in a future release.",
        ),
      }),
    ),
  )),
  (d0m = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("TaskCreated"),
        task_id: H.string(),
        task_subject: H.string(),
        task_description: H.string().optional(),
        teammate_name: H.string().optional(),
        team_name: H.string()
          .optional()
          .describe(
            "@deprecated Sessions have a single implicit team; this carries the session-derived team name and will be removed in a future release.",
          ),
      }),
    ),
  )),
  (p0m = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("TaskCompleted"),
        task_id: H.string(),
        task_subject: H.string(),
        task_description: H.string().optional(),
        teammate_name: H.string().optional(),
        team_name: H.string()
          .optional()
          .describe(
            "@deprecated Sessions have a single implicit team; this carries the session-derived team name and will be removed in a future release.",
          ),
      }),
    ),
  )),
  (f0m = ve(() =>
    CS()
      .and(
        H.object({
          hook_event_name: H.literal("Elicitation"),
          mcp_server_name: H.string(),
          message: H.string(),
          mode: H.enum(["form", "url"]).optional(),
          url: H.string().optional(),
          elicitation_id: H.string().optional(),
          requested_schema: H.record(H.string(), H.unknown()).optional(),
        }),
      )
      .describe(
        "Hook input for the Elicitation event. Fired when an MCP server requests user input. Hooks can auto-respond (accept/decline) instead of showing the dialog.",
      ),
  )),
  (m0m = ve(() =>
    CS()
      .and(
        H.object({
          hook_event_name: H.literal("ElicitationResult"),
          mcp_server_name: H.string(),
          elicitation_id: H.string().optional(),
          mode: H.enum(["form", "url"]).optional(),
          action: H.enum(["accept", "decline", "cancel"]),
          content: H.record(H.string(), H.unknown()).optional(),
        }),
      )
      .describe(
        "Hook input for the ElicitationResult event. Fired after the user responds to an MCP elicitation. Hooks can observe or override the response before it is sent to the server.",
      ),
  )),
  (g0m = ["user_settings", "project_settings", "local_settings", "policy_settings", "skills"]),
  (h0m = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("ConfigChange"),
        source: H.enum(g0m),
        file_path: H.string().optional(),
      }),
    ),
  )),
  (y0m = ["session_start", "nested_traversal", "path_glob_match", "include", "compact"]),
  (_0m = ["User", "Project", "Local", "Managed"]),
  (b0m = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("InstructionsLoaded"),
        file_path: H.string(),
        memory_type: H.enum(_0m),
        load_reason: H.enum(y0m),
        globs: H.array(H.string()).optional(),
        trigger_file_path: H.string().optional(),
        parent_file_path: H.string().optional(),
      }),
    ),
  )),
  (S0m = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("WorktreeCreate"),
        name: H.string(),
      }),
    ),
  )),
  (E0m = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("WorktreeRemove"),
        worktree_path: H.string(),
      }),
    ),
  )),
  (A0m = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("CwdChanged"),
        old_cwd: H.string(),
        new_cwd: H.string(),
      }),
    ),
  )),
  (H0m = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("FileChanged"),
        file_path: H.string(),
        event: H.enum(["change", "add", "unlink"]),
      }),
    ),
  )),
  (T0m = ve(() =>
    CS()
      .and(
        H.object({
          hook_event_name: H.literal("MessageDisplay"),
          turn_id: H.string().describe("UUID of the current turn."),
          message_id: H.string().describe(
            "UUID of the assistant message being displayed. Stable across " +
              "every flush of the same message. Not the API msg_\u2026 id.",
          ),
          index: H.number()
            .int()
            .describe(
              "Zero-based index of this delta within the message. Increments by one per flush.",
            ),
          final: H.boolean().describe(
            "True on the message's last flush. Exactly one flush per message has it.",
          ),
          delta: H.string().describe(
            "The newly completed lines since the prior flush. Always whole lines, except on the final flush which may end mid-line. The delta of the final flush is empty when the message ends on a newline; treat final as the end-of-message signal regardless.",
          ),
        }),
      )
      .describe(
        "Hook input for the MessageDisplay event. Fired with each batch of newly completed lines while an assistant message streams. Display-only: the stored message and what the model sees are untouched.",
      ),
  )),
  (v0m = [
    "clear",
    "resume",
    "logout",
    "prompt_input_exit",
    "other",
    "bypass_permissions_disabled",
  ]),
  (w0m = ve(() => H.enum(v0m))),
  (C0m = ve(() =>
    CS().and(
      H.object({
        hook_event_name: H.literal("SessionEnd"),
        reason: w0m(),
      }),
    ),
  )),
  (WNc = ve(() =>
    H.union([
      Vkm(),
      Kkm(),
      Ykm(),
      Jkm(),
      Qkm(),
      Zkm(),
      e0m(),
      t0m(),
      n0m(),
      C0m(),
      o0m(),
      s0m(),
      i0m(),
      a0m(),
      l0m(),
      c0m(),
      zkm(),
      r0m(),
      u0m(),
      d0m(),
      p0m(),
      f0m(),
      m0m(),
      h0m(),
      b0m(),
      S0m(),
      E0m(),
      A0m(),
      H0m(),
      T0m(),
    ]),
  )),
  (I0m = ve(() =>
    H.object({
      async: H.literal(true),
      asyncTimeout: H.number().optional(),
    }),
  )),
  (x0m = ve(() =>
    H.object({
      hookEventName: H.literal("PreToolUse"),
      permissionDecision: Wkm().optional(),
      permissionDecisionReason: H.string().optional(),
      updatedInput: H.record(H.string(), H.unknown()).optional(),
      additionalContext: H.string().optional(),
    }),
  )),
  (k0m = ve(() =>
    H.object({
      hookEventName: H.literal("UserPromptSubmit"),
      additionalContext: H.string().optional(),
      sessionTitle: H.string().optional(),
      suppressOriginalPrompt: H.boolean()
        .optional()
        .describe('When decision is "block", omit the original prompt from the block message'),
    }),
  )),
  (R0m = ve(() =>
    H.object({
      hookEventName: H.literal("UserPromptExpansion"),
      additionalContext: H.string().optional(),
    }),
  )),
  (L0m = ve(() =>
    H.object({
      hookEventName: H.literal("SessionStart"),
      additionalContext: H.string().optional(),
      initialUserMessage: H.string().optional(),
      sessionTitle: H.string().optional(),
      watchPaths: H.array(H.string()).optional(),
      reloadSkills: H.boolean()
        .optional()
        .describe(
          "Re-scan skill and command directories after SessionStart hooks complete, so skills installed by the hook are available in the same session",
        ),
    }),
  )),
  (D0m = ve(() =>
    H.object({
      hookEventName: H.literal("Setup"),
      additionalContext: H.string().optional(),
    }),
  )),
  (P0m = ve(() =>
    H.object({
      hookEventName: H.literal("SubagentStart"),
      additionalContext: H.string().optional(),
    }),
  )),
  (M0m = ve(() =>
    H.object({
      hookEventName: H.literal("PostToolUse"),
      additionalContext: H.string().optional(),
      updatedToolOutput: H.unknown()
        .optional()
        .describe("Replaces the tool output before it is sent to the model"),
      updatedMCPToolOutput: H.unknown()
        .optional()
        .describe(
          "Replaces the output for MCP tools only. Prefer updatedToolOutput, which works for all tools",
        ),
    }),
  )),
  ($0m = ve(() =>
    H.object({
      hookEventName: H.literal("PostToolBatch"),
      additionalContext: H.string().optional(),
    }),
  )),
  (O0m = ve(() =>
    H.object({
      hookEventName: H.literal("PostToolUseFailure"),
      additionalContext: H.string().optional(),
    }),
  )),
  (N0m = ve(() =>
    H.object({
      hookEventName: H.literal("Stop"),
      additionalContext: H.string().optional(),
    }).describe(
      "Hook-specific output for the Stop event. additionalContext is non-error feedback delivered to the model; the conversation continues so the model can act on it.",
    ),
  )),
  (B0m = ve(() =>
    H.object({
      hookEventName: H.literal("SubagentStop"),
      additionalContext: H.string().optional(),
    }).describe(
      "Hook-specific output for the SubagentStop event. additionalContext is non-error feedback delivered to the subagent; the subagent continues so it can act on it.",
    ),
  )),
  (U0m = ve(() =>
    H.object({
      hookEventName: H.literal("PermissionDenied"),
      retry: H.boolean().optional(),
    }),
  )),
  (F0m = ve(() =>
    H.object({
      hookEventName: H.literal("Notification"),
      additionalContext: H.string().optional(),
    }),
  )),
  (j0m = ve(() =>
    H.object({
      hookEventName: H.literal("PermissionRequest"),
      decision: H.union([
        H.object({
          behavior: H.literal("allow"),
          updatedInput: H.record(H.string(), H.unknown()).optional(),
          updatedPermissions: H.array(inn()).optional(),
        }),
        H.object({
          behavior: H.literal("deny"),
          message: H.string().optional(),
          interrupt: H.boolean().optional(),
        }),
      ]),
    }),
  )),
  (G0m = ve(() =>
    H.object({
      hookEventName: H.literal("CwdChanged"),
      watchPaths: H.array(H.string()).optional(),
    }),
  )),
  (W0m = ve(() =>
    H.object({
      hookEventName: H.literal("FileChanged"),
      watchPaths: H.array(H.string()).optional(),
    }),
  )),
  (q0m = ve(() =>
    H.object({
      hookEventName: H.literal("MessageDisplay"),
      displayContent: H.string()
        .optional()
        .describe(
          "Text displayed in place of the delta. Omit (or return the delta unchanged) to display the original.",
        ),
    }).describe(
      "Hook-specific output for the MessageDisplay event. Display-only: replaces the delta on screen without changing the stored message.",
    ),
  )),
  (V0m = ve(() =>
    H.object({
      continue: H.boolean().optional(),
      suppressOutput: H.boolean().optional(),
      stopReason: H.string().optional(),
      decision: H.enum(["approve", "block"]).optional(),
      systemMessage: H.string().optional(),
      terminalSequence: H.string()
        .optional()
        .describe(
          "A terminal escape sequence (e.g. OSC 9 / OSC 777 desktop-notification) for Claude Code to emit on your behalf. Only notification/title OSCs (0, 1, 2, 9, 99, 777) and BEL are permitted; anything else is dropped.",
        ),
      reason: H.string().optional(),
      hookSpecificOutput: H.union([
        x0m(),
        k0m(),
        R0m(),
        L0m(),
        D0m(),
        P0m(),
        M0m(),
        O0m(),
        $0m(),
        N0m(),
        B0m(),
        U0m(),
        F0m(),
        j0m(),
        z0m(),
        K0m(),
        G0m(),
        W0m(),
        Y0m(),
        q0m(),
      ]).optional(),
    }),
  )),
  (z0m = ve(() =>
    H.object({
      hookEventName: H.literal("Elicitation"),
      action: H.enum(["accept", "decline", "cancel"]).optional(),
      content: H.record(H.string(), H.unknown()).optional(),
    }).describe(
      "Hook-specific output for the Elicitation event. Return this to programmatically accept or decline an MCP elicitation request.",
    ),
  )),
  (K0m = ve(() =>
    H.object({
      hookEventName: H.literal("ElicitationResult"),
      action: H.enum(["accept", "decline", "cancel"]).optional(),
      content: H.record(H.string(), H.unknown()).optional(),
    }).describe(
      "Hook-specific output for the ElicitationResult event. Return this to override the action or content before the response is sent to the MCP server.",
    ),
  )),
  (Y0m = ve(() =>
    H.object({
      hookEventName: H.literal("WorktreeCreate"),
      worktreePath: H.string(),
    }).describe(
      "Hook-specific output for the WorktreeCreate event. Provides the absolute path to the created worktree directory. Command hooks print the path on stdout instead.",
    ),
  )),
  (i1H = ve(() => H.union([I0m(), V0m()]))),
  (ann = ve(() =>
    H.object({
      name: H.string().describe("Skill name (without the leading slash)"),
      description: H.string().describe("Description of what the skill does"),
      argumentHint: H.string().describe('Hint for skill arguments (e.g., "<file>")'),
      aliases: H.array(H.string())
        .optional()
        .describe(
          "Alternate names that resolve to this command (e.g., /cost and /stats both resolve to /usage)",
        ),
    }).describe("Information about an available skill (invoked via /command syntax)."),
  )),
  (q7o = ve(() =>
    H.object({
      name: H.string().describe('Agent type identifier (e.g., "Explore")'),
      description: H.string().describe("Description of when to use this agent"),
      model: H.string()
        .optional()
        .describe("Model alias this agent uses. If omitted, inherits the parent's model"),
    }).describe("Information about an available subagent that can be invoked via the Task tool."),
  )),
  (V7o = ve(() =>
    H.object({
      value: H.string().describe("Model identifier to use in API calls"),
      displayName: H.string().describe("Human-readable display name"),
      description: H.string().describe("Description of the model's capabilities"),
      supportsEffort: H.boolean().optional().describe("Whether this model supports effort levels"),
      supportedEffortLevels: H.array(H.enum(["low", "medium", "high", "xhigh", "max"]))
        .optional()
        .describe("Available effort levels for this model"),
      supportsAdaptiveThinking: H.boolean()
        .optional()
        .describe(
          "Whether this model supports adaptive thinking (Claude decides when and how much to think)",
        ),
      supportsFastMode: H.boolean().optional().describe("Whether this model supports fast mode"),
      supportsAutoMode: H.boolean().optional().describe("Whether this model supports auto mode"),
      disabled: H.boolean()
        .optional()
        .describe(
          "@internal Model is visible but not selectable (e.g. a model the org's Zero Data Retention setting excludes). The human-readable reason is folded into `description`; a structured disabledReason field is the extension point if a consumer ever needs the reason separately.",
        ),
    }).describe("Information about an available model."),
  )),
  (qNc = ve(() =>
    H.object({
      email: H.string().optional(),
      organization: H.string().optional(),
      subscriptionType: H.string().optional(),
      tokenSource: H.string().optional(),
      apiKeySource: H.string().optional(),
      apiProvider: H.enum([
        "firstParty",
        "bedrock",
        "vertex",
        "foundry",
        "anthropicAws",
        "mantle",
        "gateway",
      ])
        .optional()
        .describe(
          'Active API backend. Anthropic OAuth login only applies when "firstParty"; for 3P providers the other fields are absent and auth is external (AWS creds, gcloud ADC, etc.). "gateway" means the CLI is authenticated against an enterprise gateway.',
        ),
    }).describe("Information about the logged in user's account."),
  )),
  (X0m = ve(() => H.union([H.string(), H.record(H.string(), Cmr())]))),
  (VNc = ve(() =>
    H.object({
      description: H.string().describe("Natural language description of when to use this agent"),
      tools: H.array(H.string())
        .optional()
        .describe(
          "Array of allowed tool names. If omitted, inherits all tools from parent. Note: passing 'Skill' here is deprecated \u2014 use the `skills` field instead.",
        ),
      disallowedTools: H.array(H.string())
        .optional()
        .describe(
          "Array of tool names to explicitly disallow for this agent. MCP server-level specs (mcp__server, mcp__server__*, mcp__*) remove every tool from the named server (or all MCP tools).",
        ),
      prompt: H.string().describe("The agent's system prompt"),
      model: H.string()
        .optional()
        .describe(
          "Model alias (e.g. 'fable', 'opus', 'sonnet', 'haiku') or full model ID (e.g. 'claude-fable-5'). If omitted or 'inherit', uses the main model",
        ),
      mcpServers: H.array(X0m()).optional(),
      criticalSystemReminder_EXPERIMENTAL: H.string()
        .optional()
        .describe("Experimental: Critical reminder added to system prompt"),
      skills: H.array(H.string())
        .optional()
        .describe("Array of skill names to preload into the agent context"),
      initialPrompt: H.string()
        .optional()
        .describe(
          "Auto-submitted as the first user turn when this agent is the main thread agent. Slash commands are processed. Prepended to any user-provided prompt.",
        ),
      maxTurns: H.number()
        .int()
        .positive()
        .optional()
        .describe("Maximum number of agentic turns (API round-trips) before stopping"),
      background: H.boolean()
        .optional()
        .describe(
          "Run this agent as a background task (non-blocking, fire-and-forget) when invoked",
        ),
      memory: H.enum(["user", "project", "local"])
        .optional()
        .describe(
          "Scope for auto-loading agent memory files. 'user' - ~/.claude/agent-memory/<agentType>/, 'project' - .claude/agent-memory/<agentType>/, 'local' - .claude/agent-memory-local/<agentType>/",
        ),
      effort: H.union([H.enum(["low", "medium", "high", "xhigh", "max"]), H.number().int()])
        .optional()
        .describe("Reasoning effort level for this agent. Either a named level or an integer"),
      permissionMode: ive()
        .optional()
        .describe("Permission mode controlling how tool executions are handled"),
    }).describe("Definition for a custom subagent that can be invoked via the Agent tool."),
  )),
  (a1H = ve(() =>
    H.enum(["user", "project", "local"]).describe(
      "Source for loading filesystem-based settings. 'user' - Global user settings (~/.claude/settings.json). 'project' - Project settings (.claude/settings.json). 'local' - Local settings (.claude/settings.local.json).",
    ),
  )),
  (l1H = ve(() =>
    H.object({
      type: H.literal("local").describe("Plugin type. Currently only 'local' is supported"),
      path: H.string().describe("Absolute or relative path to the plugin directory"),
      skipMcpDiscovery: H.boolean()
        .optional()
        .describe(
          "When true, the engine loads skills/hooks/agents/commands from this plugin but does NOT read its .mcp.json or manifest mcpServers. Use when the SDK host owns this plugin's MCP connections.",
        ),
    }).describe("Configuration for loading a plugin."),
  )),
  (c1H = ve(() =>
    H.object({
      canRewind: H.boolean(),
      error: H.string().optional(),
      filesChanged: H.array(H.string()).optional(),
      insertions: H.number().optional(),
      deletions: H.number().optional(),
    }).describe("Result of a rewindFiles operation."),
  )),
  (J0m = ve(() => H.unknown())),
  (Q0m = ve(() => H.unknown())),
  (Z0m = ve(() => H.unknown())),
  (Sa = ve(() => H.string())),
  (zNc = ve(() => H.unknown())),
  (z7o = ve(() =>
    H.enum([
      "authentication_failed",
      "oauth_org_not_allowed",
      "billing_error",
      "rate_limit",
      "overloaded",
      "invalid_request",
      "model_not_found",
      "server_error",
      "unknown",
      "max_output_tokens",
    ]),
  )),
  (eRm = ve(() => H.union([H.literal("compacting"), H.literal("requesting"), H.null()]))),
  (K7o = ve(() =>
    H.discriminatedUnion("kind", [
      H.object({
        kind: H.literal("human"),
      }),
      H.object({
        kind: H.literal("channel"),
        server: H.string(),
      }),
      H.object({
        kind: H.literal("peer"),
        from: H.string(),
        name: H.string().optional(),
        inbound_origin: H.string()
          .optional()
          .describe(
            "@internal Server-asserted ingest path of the demoted delivery, copied at classification from the message-level `inbound_origin`.",
          ),
        senderTaskId: H.string()
          .optional()
          .describe(
            "Task id of the in-process background subagent that sent this message, stamped by the harness from the sending loop (never from tool input). Absent for cross-session peers.",
          ),
      }),
      H.object({
        kind: H.literal("task-notification"),
      }),
      H.object({
        kind: H.literal("coordinator"),
      }),
      H.object({
        kind: H.literal("auto-continuation"),
      }),
    ]).describe(
      "Provenance of a user-role message (peer session, team lead, channel). Absent or `human` means keyboard input from the user.",
    ),
  )),
  (KNc = ve(() =>
    H.object({
      type: H.literal("user"),
      message: J0m(),
      parent_tool_use_id: H.string().nullable(),
      isSynthetic: H.boolean().optional(),
      tool_use_result: H.unknown().optional(),
      priority: H.enum(["now", "next", "later"]).optional(),
      origin: K7o().optional(),
      client_platform: H.string()
        .optional()
        .describe(
          "@internal The `anthropic-client-platform` value of the client that sent this message (e.g. `ios`, `android`, `web_claude_ai`, `desktop_app`). Injected server-side by CCR ingress from the request header.",
        ),
      inbound_origin: H.string()
        .optional()
        .describe(
          "@internal Server-asserted ingest path that produced this message. Not settable by clients.",
        ),
      shouldQuery: H.boolean()
        .optional()
        .describe(
          "When false, the message is appended to the transcript without triggering an assistant turn. It will be merged into the next user message that does query.",
        ),
      timestamp: H.string()
        .optional()
        .describe(
          "ISO timestamp when the message was created on the originating process. Older emitters omit it; consumers should fall back to receive time.",
        ),
      is_meta: H.literal(true)
        .optional()
        .describe(
          "@internal True when the message was synthesized by the loop (not user keyboard input). From internal UserMessage.isMeta.",
        ),
      is_visible_in_transcript_only: H.literal(true)
        .optional()
        .describe(
          "@internal True when the message is stored in the transcript but not rendered in the live UI.",
        ),
      is_virtual: H.literal(true)
        .optional()
        .describe("@internal Display-only: rendered in the UI but filtered before API send."),
      is_compact_summary: H.literal(true)
        .optional()
        .describe("@internal True when this user message is a compact-summary synthetic message."),
      summarize_metadata: H.object({
        messages_summarized: H.number(),
        user_context: H.string().optional(),
        direction: H.enum(["from", "up_to"]).optional(),
      })
        .optional()
        .describe(
          '@internal Metadata for "Summarize from here" / "Summarize up to here" summaries (from internal UserMessage.summarizeMetadata).',
        ),
      mcp_meta: H.object({
        _meta: H.record(H.string(), H.unknown()).optional(),
        structured_content: H.record(H.string(), H.unknown()).optional(),
      })
        .optional()
        .describe(
          "@internal MCP protocol metadata passed through to SDK consumers, never sent to the model (from internal UserMessage.mcpMeta).",
        ),
      source_tool_use_id: H.string()
        .optional()
        .describe(
          "@internal When this message was generated by a tool via newMessages, links it to that tool_use id.",
        ),
      source_tool_assistant_uuid: H.string()
        .optional()
        .describe(
          "@internal For tool_result messages: UUID of the assistant message containing the matching tool_use block. Used for parentUuid assignment in transcript.",
        ),
      image_paste_ids: H.array(H.number())
        .optional()
        .describe(
          "@internal Paste IDs for images in this message, in order of appearance. REPL-local state \u2014 candidate for surface-side if daemon has no use for it.",
        ),
      plan_content: H.string()
        .optional()
        .describe(
          "@internal Plan to implement (cleared-context flow). When set, the message is rendered with plan styling.",
        ),
      permission_mode: ive()
        .optional()
        .describe(
          "@internal Permission mode active when this message was sent (for rewind restoration).",
        ),
      interrupted_message_id: H.string()
        .optional()
        .describe(
          "@internal For [Request interrupted by user] markers only: the API msg_* id that Esc cancelled.",
        ),
    }),
  )),
  (Y7o = ve(() =>
    KNc().extend({
      uuid: Sa().optional(),
      session_id: H.string().optional(),
      subagent_type: H.string().optional().describe("Subagent type that produced this message."),
      task_description: H.string()
        .optional()
        .describe("Description of the subagent task that produced this message."),
    }),
  )),
  (tRm = ve(() =>
    KNc().extend({
      uuid: Sa(),
      session_id: H.string(),
      isReplay: H.literal(true),
      file_attachments: H.array(H.unknown()).optional(),
    }),
  )),
  (YNc = ve(() =>
    H.object({
      type: H.literal("bash_command"),
      command: H.string().describe(
        "Shell command to execute verbatim via a one-shot `/bin/sh -c` (or `pwsh`) subprocess, bypassing the model. Trust model matches the local TUI `!cmd` path (no sandbox, no per-command prompt); unlike `!cmd`, output is not appended to the conversation transcript and there is no persistent shell state across calls.",
      ),
      cwd: H.string()
        .optional()
        .describe("Working directory for the command. Falls back to the session cwd when omitted."),
      uuid: Sa().optional(),
      session_id: H.string().optional(),
    }).describe(
      "@internal A user-initiated shell command dispatched to a one-shot shell subprocess with no model turn. Input-only \u2014 sent by CCR clients that surface a dedicated terminal UI; never emitted on stdout.",
    ),
  )),
  (nRm = ve(() =>
    H.object({
      status: H.enum(["allowed", "allowed_warning", "rejected"]),
      resetsAt: H.number().optional(),
      rateLimitType: H.enum([
        "five_hour",
        "seven_day",
        "seven_day_opus",
        "seven_day_sonnet",
        "seven_day_overage_included",
        "overage",
      ]).optional(),
      utilization: H.number().optional(),
      overageStatus: H.enum(["allowed", "allowed_warning", "rejected"]).optional(),
      overageResetsAt: H.number().optional(),
      overageDisabledReason: H.enum([
        "overage_not_provisioned",
        "org_level_disabled",
        "org_level_disabled_until",
        "out_of_credits",
        "seat_tier_level_disabled",
        "member_level_disabled",
        "seat_tier_zero_credit_limit",
        "group_zero_credit_limit",
        "member_zero_credit_limit",
        "org_service_level_disabled",
        "no_limits_configured",
        "fetch_error",
        "unknown",
      ]).optional(),
      isUsingOverage: H.boolean().optional(),
      overageInUse: H.boolean().optional(),
      surpassedThreshold: H.number().optional(),
      overagePeriodMonthly: H.object({
        utilization: H.number(),
      })
        .optional()
        .describe(
          "@internal Monthly service spend-cap telemetry for the Claude-in-Slack surface (CLAUDE_IN_SLACK_V2): utilization is fraction-of-cap.",
        ),
      overagePeriodChannel: H.object({
        utilization: H.number(),
      })
        .optional()
        .describe(
          "@internal Per-Slack-channel spend-cap telemetry for the Claude-in-Slack surface (CLAUDE_IN_SLACK_V2): utilization is fraction-of-cap. Absent when the channel has no individual cap.",
        ),
      errorCode: H.enum(["credits_required"]).optional(),
      canUserPurchaseCredits: H.boolean().optional(),
      hasChargeableSavedPaymentMethod: H.boolean().optional(),
    }).describe("Rate limit information for claude.ai subscription users."),
  )),
  (rRm = ve(() =>
    H.object({
      type: H.literal("assistant"),
      message: Q0m(),
      parent_tool_use_id: H.string().nullable(),
      error: z7o().optional(),
      uuid: Sa(),
      session_id: H.string(),
      request_id: H.string().optional(),
      supersedes: H.array(Sa())
        .optional()
        .describe(
          "Wire uuids of previously-delivered messages that this message replaces (refusal-fallback supersede). The list can include tombstoned tool_result frames from the refused leg, not only assistant frames. Evict the named messages on arrival and treat this frame as their canonical replacement. Idempotent with the end-of-turn model_refusal_fallback notice, whose retracted_message_uuids remains the complete audit record for the turn.",
        ),
      subagent_type: H.string().optional().describe("Subagent type that produced this message."),
      task_description: H.string()
        .optional()
        .describe("Description of the subagent task that produced this message."),
      tool_use_meta: H.array(
        H.object({
          id: H.string(),
          display_name: H.string(),
          server_display_name: H.string().optional(),
          icon_url: H.string().optional(),
        }),
      )
        .optional()
        .describe(
          "@internal Display metadata for this message's tool_use blocks, keyed by block id. display_name is the MCP server's `tool.annotations.title` when provided, otherwise a readable transform of the wire name; server_display_name is the MCP server's own display name; icon_url is the MCP server's directory icon URL (claude.ai connectors only). Omitted for blocks whose display label equals the wire name (built-in tools). Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model.",
        ),
      timestamp: H.string()
        .optional()
        .describe(
          "@internal ISO timestamp when this message was created (from internal AssistantMessage.timestamp).",
        ),
      is_meta: H.literal(true)
        .optional()
        .describe(
          "@internal True when the message was synthesized by the loop (not a model response).",
        ),
      is_virtual: H.literal(true)
        .optional()
        .describe("@internal Display-only: rendered in the UI but filtered before API send."),
      is_api_error_message: H.boolean()
        .optional()
        .describe(
          "@internal True when this assistant message wraps an API error (from internal AssistantMessage.isApiErrorMessage).",
        ),
      api_error_status: H.number()
        .optional()
        .describe("@internal HTTP status code of the API error when is_api_error_message is true."),
      api_error: H.literal("max_output_tokens")
        .optional()
        .describe("@internal API error code when is_api_error_message is true."),
      error_details: H.string()
        .optional()
        .describe(
          "@internal Raw API error message \u2014 preserves details (e.g. prompt-too-long token counts) that user-facing content discards.",
        ),
      advisor_model: H.string()
        .optional()
        .describe("@internal Advisor model that produced this message, when applicable."),
      attribution_agent: H.string()
        .optional()
        .describe(
          "@internal Attribution stamp: agent name parsed from querySource (see messageAttribution.ts). May overlap with subagent_type.",
        ),
      attribution_skill: H.string()
        .optional()
        .describe("@internal Skill that produced this message."),
      attribution_plugin: H.string()
        .optional()
        .describe("@internal Plugin that produced this message."),
      attribution_mcp_server: H.string()
        .optional()
        .describe("@internal MCP server that produced this message."),
      attribution_mcp_tool: H.string()
        .optional()
        .describe("@internal MCP tool that produced this message."),
    }),
  )),
  (oRm = ve(() =>
    H.object({
      type: H.literal("rate_limit_event"),
      rate_limit_info: nRm(),
      uuid: Sa(),
      session_id: H.string(),
    }).describe("Rate limit event emitted when rate limit info changes."),
  )),
  (XNc = ve(() =>
    H.object({
      tool_name: H.string(),
      tool_use_id: H.string(),
      tool_input: H.record(H.string(), H.unknown()),
    }),
  )),
  (sRm = ve(() =>
    H.object({
      id: H.string(),
      name: H.string(),
      input: H.record(H.string(), H.unknown()),
    }),
  )),
  (JNc = ve(() =>
    H.enum(xfc).describe(
      "Why the query loop terminated. Unset when the loop was bypassed (local slash command) or interrupted externally (budget/retry limits checked between yields).",
    ),
  )),
  (iRm = ve(() =>
    H.object({
      type: H.literal("result"),
      subtype: H.literal("success"),
      duration_ms: H.number(),
      duration_api_ms: H.number(),
      ttft_ms: H.number().optional(),
      ttft_stream_ms: H.number().optional(),
      time_to_request_ms: H.number().optional(),
      time_to_request_from_spawn_ms: H.number().optional(),
      warm_spare_claimed: H.boolean().optional(),
      time_origin_ms: H.number().optional(),
      is_error: H.boolean(),
      api_error_status: H.number().nullable().optional(),
      num_turns: H.number(),
      result: H.string(),
      stop_reason: H.string().nullable(),
      total_cost_usd: H.number(),
      usage: zNc(),
      modelUsage: H.record(H.string(), vmr()),
      permission_denials: H.array(XNc()),
      structured_output: H.unknown().optional(),
      deferred_tool_use: sRm().optional(),
      terminal_reason: JNc().optional(),
      fast_mode_state: lnn().optional(),
      origin: K7o().optional(),
      uuid: Sa(),
      session_id: H.string(),
    }),
  )),
  (aRm = ve(() =>
    H.object({
      type: H.literal("result"),
      subtype: H.enum([
        "error_during_execution",
        "error_max_turns",
        "error_max_budget_usd",
        "error_max_structured_output_retries",
      ]),
      duration_ms: H.number(),
      duration_api_ms: H.number(),
      is_error: H.boolean(),
      num_turns: H.number(),
      stop_reason: H.string().nullable(),
      total_cost_usd: H.number(),
      usage: zNc(),
      modelUsage: H.record(H.string(), vmr()),
      permission_denials: H.array(XNc()),
      errors: H.array(H.string()),
      terminal_reason: JNc().optional(),
      fast_mode_state: lnn().optional(),
      origin: K7o().optional(),
      uuid: Sa(),
      session_id: H.string(),
    }),
  )),
  (lRm = ve(() => H.union([iRm(), aRm()]))),
  (QNc = ve(() =>
    H.object({
      file: H.string()
        .optional()
        .describe("Path to the settings file that failed to parse or validate."),
      path: H.string().describe(
        "Dot-notation path to the field with the error, or empty string for whole-file errors.",
      ),
      message: H.string().describe("Human-readable error message."),
    }).describe(
      "A settings file parse or validation error. When a settings.json file fails to parse (invalid JSON, JSON comments, schema mismatch), the file is skipped and any rules it contained \u2014 including permission allow/deny lists \u2014 are not applied.",
    ),
  )),
  (cRm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("init"),
      agents: H.array(H.string()).optional(),
      apiKeySource: Pkm(),
      betas: H.array(H.string()).optional(),
      claude_code_version: H.string(),
      cwd: H.string(),
      tools: H.array(H.string()),
      mcp_servers: H.array(
        H.object({
          name: H.string(),
          status: H.string(),
        }),
      ),
      model: H.string(),
      permissionMode: ive(),
      slash_commands: H.array(H.string()),
      output_style: H.string(),
      skills: H.array(H.string()),
      plugins: H.array(
        H.object({
          name: H.string(),
          path: H.string(),
          source: H.string()
            .optional()
            .describe(
              '@internal Plugin source identifier in "name\\@marketplace" format. Sentinels: "name\\@inline" for --plugin-dir, "name\\@builtin" for built-in plugins.',
            ),
        }),
      ),
      plugin_errors: H.array(
        H.object({
          plugin: H.string(),
          type: H.string(),
          message: H.string(),
        }),
      )
        .optional()
        .describe(
          "@internal Plugin load-time errors (e.g., unsatisfied dependency version). Affected plugins are demoted and absent from `plugins[]`. The key is omitted when there are no errors; CI can fail on `(plugin_errors?.length ?? 0) > 0`.",
        ),
      plugin_warnings: H.array(
        H.object({
          plugin: H.string(),
          type: H.string(),
          message: H.string(),
        }),
      )
        .optional()
        .describe(
          "@internal Plugin authoring feedback (e.g., a default folder shadowed by a manifest key). When `plugin` matches an entry in `plugins[]`, that plugin loaded and the warning is advisory; warnings with a synthetic `plugin` source (no matching `plugins[]` entry, e.g. workspace-level suppression notices) describe content that did NOT load. The key is omitted when there are no warnings.",
        ),
      fast_mode_state: lnn().optional(),
      analytics_disabled: H.boolean()
        .optional()
        .describe(
          "@internal True when the CLI has analytics/telemetry disabled (privacy level, DO_NOT_TRACK, or 3P provider). IDE clients use this to hide per-message thumbs feedback UI since the rating event would be a no-op.",
        ),
      product_feedback_disabled: H.boolean()
        .optional()
        .describe(
          "@internal True when the org's allow_product_feedback policy is false (ZDR/HIPAA). IDE clients use this to hide feedback surfaces (thumbs, session survey) whose events the CLI would drop at the proxy boundary anyway.",
        ),
      memory_paths: H.object({
        auto: H.string().optional(),
        team: H.string().optional(),
      })
        .optional()
        .describe(
          "@internal Absolute directory paths for the auto-memory and team-memory stores. Lets SDK renderers classify Read/Write/Edit tool calls on these paths as memory operations without re-implementing CLI path detection.",
        ),
      uuid: Sa(),
      session_id: H.string(),
    }),
  )),
  (uRm = ve(() =>
    H.object({
      type: H.literal("stream_event"),
      event: Z0m(),
      parent_tool_use_id: H.string().nullable(),
      uuid: Sa(),
      session_id: H.string(),
      ttft_ms: H.number().optional(),
    }),
  )),
  (dRm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("compact_boundary"),
      compact_metadata: H.object({
        trigger: H.enum(["manual", "auto"]),
        pre_tokens: H.number(),
        post_tokens: H.number().optional(),
        duration_ms: H.number().optional(),
        user_context: H.string()
          .optional()
          .describe('@internal User-provided focus text for manual "summarize from here".'),
        messages_summarized: H.number()
          .optional()
          .describe("@internal Count of messages the compaction summarized."),
        precomputed: H.boolean()
          .optional()
          .describe(
            "@internal The summary was generated in the background at the autocompact threshold and swapped in when prompt-too-long fired; duration_ms measures user-wait from that point.",
          ),
        pre_compact_discovered_tools: H.array(H.string())
          .optional()
          .describe(
            "@internal Deferred-tool names discovered before this compaction. extractDiscoveredToolNames reads this back on the next turn so the tool-schema filter keeps including them after the tool_reference-carrying messages were summarized away.",
          ),
        preserved_segment: H.object({
          head_uuid: Sa(),
          anchor_uuid: Sa(),
          tail_uuid: Sa(),
        })
          .optional()
          .describe(
            "Relink info for messagesToKeep. Loaders splice the preserved segment at anchor_uuid (summary for suffix-preserving, boundary for prefix-preserving partial compact) so resume includes preserved content. Unset when compaction summarizes everything (no messagesToKeep).",
          ),
        preserved_messages: H.object({
          anchor_uuid: Sa(),
          uuids: H.array(Sa()),
          all_uuids: H.array(Sa())
            .optional()
            .describe(
              "@internal Unfiltered messagesToKeep UUIDs. uuids is the on-disk subset (messages recordTranscript writes); all_uuids is the in-memory superset including non-loggable messages an in-process surface still holds for the next turn's API input. Absent from older producers.",
            ),
        })
          .optional()
          .describe(
            "Ordered messagesToKeep UUIDs. Supersedes preserved_segment \u2014 " +
              "readers look up each UUID directly and relink uuids[i] to uuids[i-1] (uuids[0] to anchor_uuid) instead of walking the parentUuid chain. Unset when compaction summarizes everything.",
          ),
      }),
      logical_parent_uuid: Sa()
        .nullable()
        .optional()
        .describe(
          "@internal uuid of the last pre-compact message \u2014 the backpointer " +
            "forkSession follows across the compaction break. Distinct from the session-file chain parent (which is the post-compact summary). Absent from older producers.",
        ),
      uuid: Sa(),
      session_id: H.string(),
    }),
  )),
  (pRm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("status"),
      status: eRm(),
      permissionMode: ive().optional(),
      compact_result: H.enum(["success", "failed"]).optional(),
      compact_error: H.string().optional(),
      uuid: Sa(),
      session_id: H.string(),
    }),
  )),
  (X7o = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("post_turn_summary"),
      summarizes_uuid: H.string(),
      status_category: H.string(),
      status_detail: H.string(),
      needs_action: H.string(),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Background post-turn summary emitted after each assistant turn. summarizes_uuid points to the assistant message this summarizes.",
    ),
  )),
  (J7o = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("task_summary"),
      detail: H.string().nullable(),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Mid-turn progress line from the debounced classifier. Mirrors external_metadata.task_summary so non-CCR consumers (desktop LocalSessionManager) see the same live phrase. detail is null on the idle clear.",
    ),
  )),
  (fRm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("informational"),
      content: H.string(),
      level: H.enum(["info", "notice", "suggestion", "warning"]).describe(
        "Render level. 'info' shows only in transcript mode; 'notice' renders in inactive gray; 'suggestion' and 'warning' are more prominent.",
      ),
      tool_use_id: H.string()
        .optional()
        .describe("Dedupes progress messages for the same tool use."),
      prevent_continuation: H.boolean()
        .optional()
        .describe(
          "When true, execution stops after this message (e.g. a Stop hook denied continuation).",
        ),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "Generic text banner emitted by the loop \u2014 non-error status lines, hook feedback (e.g. a UserPromptSubmit hook's block reason), slash-command output. Hosts render `content` as plaintext at the given level.",
    ),
  )),
  (u1H = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("permission_retry"),
      content: H.string(),
      commands: H.array(H.string()).describe("Display names of the commands that were allowed."),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Emitted when tool execution retries after a permission-mode change allowed previously-denied commands. REPL renders a 'retrying with <commands>' banner. From internal SystemMessage 'permission_retry'.",
    ),
  )),
  (d1H = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("stop_hook_summary"),
      hook_count: H.number(),
      hook_infos: H.array(
        H.object({
          command: H.string(),
          prompt_text: H.string().optional(),
          duration_ms: H.number().optional(),
        }),
      ),
      hook_errors: H.array(H.string()),
      hook_additional_context: H.array(H.string())
        .optional()
        .describe(
          "Non-error feedback from hookSpecificOutput.additionalContext \u2014 kept separate from hook_errors so the sanctioned feedback channel is not labeled an error. Absent in sessions persisted before this field existed.",
        ),
      prevented_continuation: H.boolean(),
      stop_reason: H.string().optional(),
      has_output: H.boolean(),
      level: H.enum(["info", "notice", "suggestion", "warning"]),
      tool_use_id: H.string().optional(),
      hook_label: H.string().optional(),
      total_duration_ms: H.number().optional(),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Summary of Stop/SubagentStop hook execution at turn end \u2014 which hooks ran, their output, and whether any prevented continuation. From internal SystemMessage 'stop_hook_summary'.",
    ),
  )),
  (p1H = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("memory_saved"),
      written_paths: H.array(H.string()),
      team_count: H.number().optional(),
      verb: H.string().optional().describe('Renders as "<verb> N memories". Defaults to "Saved".'),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Confirmation that the memory subsystem wrote to the listed paths. REPL renders a '<verb> N memories' banner. From internal SystemMessage 'memory_saved'.",
    ),
  )),
  (f1H = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("agents_killed"),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Emitted when background agents are terminated (e.g. on interrupt). REPL renders an 'agents killed' banner. From internal SystemMessage 'agents_killed'.",
    ),
  )),
  (m1H = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("away_summary"),
      content: H.string(),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Summary of what happened while the user was away (background tasks completed, notifications accumulated). From internal SystemMessage 'away_summary'.",
    ),
  )),
  (g1H = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("thinking"),
      content: H.string(),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Rendered thinking content (the text itself, not the running token estimate \u2014 that is SDKThinkingTokensMessage). From internal SystemMessage 'thinking'.",
    ),
  )),
  (Q7o = ve(() =>
    H.object({
      type: H.literal("transcript_mirror"),
      filePath: H.string(),
      entries: H.array(H.unknown()),
    }).describe(
      "@internal Emitted after each successful local transcript write. The parent peels these off the stdout stream and batches them to the SessionStore adapter. Not exposed to public SDK consumers.",
    ),
  )),
  (mRm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("mirror_error"),
      error: H.string(),
      key: H.object({
        projectKey: H.string(),
        sessionId: H.string(),
        subpath: H.string().optional(),
      }),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "Emitted when SessionStore.append() rejects or times out for a transcript-mirror batch after bounded retry (3 attempts with short backoff; timeouts are not retried). The batch is then dropped; this surfaces the failure so consumers are not silent on data loss.",
    ),
  )),
  (gRm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("api_retry"),
      attempt: H.number(),
      max_retries: H.number(),
      retry_delay_ms: H.number(),
      error_status: H.number().nullable(),
      error: z7o(),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "Emitted when an API request fails with a retryable error and will be retried after a delay. error_status is null for connection errors (e.g. timeouts) that had no HTTP response.",
    ),
  )),
  (hRm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("model_refusal_fallback"),
      trigger: H.literal("refusal"),
      direction: H.enum(["retry", "revert", "sticky"]),
      original_model: H.string(),
      fallback_model: H.string(),
      request_id: H.string().nullable(),
      api_refusal_category: H.string()
        .nullable()
        .optional()
        .describe(
          "The refusal category ('cyber', 'bio', \u2026): stop_details.category from the refused API response (client lane), or the fallback block's server-gated trigger.category (server lane). Open string \u2014 new categories ship on the wire ahead of schema updates. null when neither source carried a category (normal, not an error). Absent when emitted by an older CLI.",
        ),
      api_refusal_explanation: H.string()
        .nullable()
        .optional()
        .describe(
          "stop_details.explanation from the refused API response (client lane only \u2014 the server-lane trigger carries no explanation). Unstable human prose \u2014 display only, never parse. null/absent when the response carried none, and always null on server-lane banners.",
        ),
      retracted_message_uuids: H.array(H.string())
        .optional()
        .describe(
          "Wire uuids of the messages this fallback retracted \u2014 the refused partial as the consumer received it (one uuid per normalized SDK message; multi-block messages carry per-block derived uuids) plus any tombstoned tool_results. Emitted AFTER the retraction, so this is a resolution-time eviction signal: remove these messages from transcript state on receipt. Eviction is idempotent \u2014 unknown or already-removed uuids are a no-op. Absent when emitted by an older CLI.",
        ),
      refused_user_message_uuid: H.string()
        .nullable()
        .optional()
        .describe(
          "UUID of the user message the refused request was for \u2014 the rewind target and composer prefill for edit-and-retry. This is the message's own uuid as delivered on the replay ack (not a per-block normalized uuid). null when the refused turn was not human-authored (e.g. a background task notification or auto-continuation \u2014 nothing to edit-and-retry) or otherwise cannot be identified; absent from older CLIs.",
        ),
      content: H.string(),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      'Emitted when the primary model ends the stream with stop_reason "refusal" and the turn is retried once on a fallback model with the swap made persistent for the session (direction: "retry"). "revert" and "sticky" are retained in the enum for SDK-consumer compat and are no longer emitted.',
    ),
  )),
  (yRm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("model_refusal_no_fallback"),
      original_model: H.string(),
      request_id: H.string().nullable(),
      api_refusal_category: H.string().nullable().optional(),
      api_refusal_explanation: H.string().nullable().optional(),
      refused_user_message_uuid: H.string().nullable().optional(),
      content: H.string(),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      'Emitted when the model ends the stream with stop_reason "refusal" and no fallback model is configured, so the turn ends as an error. The structured counterpart to detecting stop_reason "refusal" on the assistant error frame. Not emitted when a fallback existed but was declined or gate-failed (model_refusal_fallback covers the retry case). Absent from older CLIs.',
    ),
  )),
  (h1H = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("model_fallback"),
      trigger: H.enum([
        "model_not_found",
        "permission_denied",
        "overloaded",
        "server_error",
        "last_resort",
        "model_blocked",
      ]),
      original_model: H.string(),
      fallback_model: H.string(),
      content: H.string(),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      '@internal Emitted when the current turn is switched to the configured fallback model because the primary model failed (trigger "model_not_found": model retired/unknown; "permission_denied": org lacks access; "overloaded": repeated 529s; "server_error": retryable 5xx pivot; "last_resort": non-retryable error on the primary; "model_blocked": primary disabled by the per-model kill switch). Turn-scoped \u2014 the primary is re-tried on the next user turn. Not yet in the public SDKMessage union.',
    ),
  )),
  (y1H = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("model_consent_fallback"),
      choice: H.enum(["consent", "switch_default", "cancelled"]).describe(
        "The consent-prompt answer (or no-dialog collapse) that produced the swap. 'consent' appears here only when the gate could not honor it (e.g. usage credits did not end up provisioned \u2014 the loop never enables billing from a bare wire reply).",
      ),
      original_model: H.string(),
      fallback_model: H.string(),
      persisted_as_default: H.boolean().describe(
        "True when the decline also rewrote the saved default model (explicit switch_default with the consent-gated model as the saved default).",
      ),
      content: H.string(),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Emitted when a pre-send model consent gate swaps the session off the requested model (consent declined, dismissed, or given without the required entitlement ending up provisioned). Currently emitted by the Fable 5 usage-credit gate (`fable_overage_consent_prompt`). Session-scoped \u2014 the swap persists for the session, and additionally as the saved default when persisted_as_default is true. Absence of this message after the consent dialog resolves means the session stayed on the requested model. Not yet in the public SDKMessage union.",
    ),
  )),
  (_1H = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("file_snapshot"),
      content: H.string(),
      snapshot_files: H.array(
        H.object({
          key: H.string().describe("Identifier for the file type (e.g. 'plan', 'todo')."),
          path: H.string().describe("Original file path (for debugging)."),
          content: H.string(),
        }),
      ),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Snapshot of session files (plan, todo) captured for rewind. From internal SystemMessage 'file_snapshot'.",
    ),
  )),
  (b1H = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("scheduled_task_fire"),
      content: H.string(),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Emitted when a scheduled task (cron) fires. content is the render text. From internal SystemMessage 'scheduled_task_fire'.",
    ),
  )),
  (S1H = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("turn_duration"),
      duration_ms: H.number(),
      budget_tokens: H.number()
        .optional()
        .describe("Output tokens spent this turn toward the token budget."),
      budget_limit: H.number().optional().describe("Turn token-budget ceiling."),
      budget_nudges: H.number().optional().describe("Budget-nudge count this turn."),
      message_count: H.number()
        .optional()
        .describe(
          "In-memory message count at turn end; used by resume-consistency telemetry to detect write\u2192load round-trip drift.",
        ),
      pending_background_agent_count: H.number()
        .optional()
        .describe("Background Agent-tool runs still in flight when the turn finished."),
      pending_workflow_count: H.number()
        .optional()
        .describe("Workflow-tool runs still in flight when the turn finished."),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Per-turn wall-clock duration plus budget and pending-background-work counts. REPL renders the 'Done in Ns' / 'Waiting for N agents' line. From internal SystemMessage 'turn_duration'.",
    ),
  )),
  (E1H = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("api_error"),
      error: H.object({
        message: H.string(),
        status: H.number().optional(),
        request_id: H.string().optional(),
        formatted: H.string().describe("Human-readable display string for the error."),
        connection: H.object({
          code: H.string(),
          message: H.string(),
          is_ssl_error: H.boolean(),
        })
          .nullable()
          .describe("errno/SSL code extracted from the cause chain; null when absent."),
        is_network_down: H.boolean(),
        rate_limits: H.object({
          resets_at: H.number().optional(),
          rate_limit_type: H.string().optional(),
        })
          .nullable()
          .describe("Quota-429 headers surfaced by the retry banner; null when not a quota 429."),
      }).describe(
        "Plain-data snapshot of the APIError \u2014 the class instance cannot cross the wire.",
      ),
      retry_in_ms: H.number(),
      retry_attempt: H.number(),
      max_retries: H.number(),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Retryable-API-error frame carrying the plain-data error snapshot and retry counters. REPL renders the retry banner from this. Wire twin is SDKAPIRetryMessage ('api_retry'). From internal SystemMessage 'api_error'.",
    ),
  )),
  (_Rm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("local_command_output"),
      content: H.string(),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "Output from a local slash command (e.g. /voice, /usage). Displayed as assistant-style text in the transcript.",
    ),
  )),
  (bRm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("hook_started"),
      hook_id: H.string(),
      hook_name: H.string(),
      hook_event: H.string(),
      uuid: Sa(),
      session_id: H.string(),
    }),
  )),
  (SRm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("hook_progress"),
      hook_id: H.string(),
      hook_name: H.string(),
      hook_event: H.string(),
      stdout: H.string(),
      stderr: H.string(),
      output: H.string(),
      uuid: Sa(),
      session_id: H.string(),
    }),
  )),
  (ERm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("hook_response"),
      hook_id: H.string(),
      hook_name: H.string(),
      hook_event: H.string(),
      output: H.string(),
      stdout: H.string(),
      stderr: H.string(),
      exit_code: H.number().optional(),
      outcome: H.enum(["success", "error", "cancelled"]),
      uuid: Sa(),
      session_id: H.string(),
    }),
  )),
  (ARm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("plugin_install"),
      status: H.enum(["started", "installed", "failed", "completed"]),
      name: H.string().optional(),
      error: H.string().optional(),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "Headless plugin installation progress (CLAUDE_CODE_SYNC_PLUGIN_INSTALL). started/completed bracket the whole install; installed/failed carry a per-marketplace name.",
    ),
  )),
  (HRm = ve(() =>
    H.object({
      type: H.literal("tool_progress"),
      tool_use_id: H.string(),
      tool_name: H.string(),
      parent_tool_use_id: H.string().nullable(),
      elapsed_time_seconds: H.number(),
      task_id: H.string().optional(),
      uuid: Sa(),
      session_id: H.string(),
    }),
  )),
  (TRm = ve(() =>
    H.object({
      type: H.literal("auth_status"),
      isAuthenticating: H.boolean(),
      output: H.array(H.string()),
      error: H.string().optional(),
      uuid: Sa(),
      session_id: H.string(),
    }),
  )),
  (vRm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("files_persisted"),
      files: H.array(
        H.object({
          filename: H.string(),
          file_id: H.string(),
        }),
      ),
      failed: H.array(
        H.object({
          filename: H.string(),
          error: H.string(),
        }),
      ),
      processed_at: H.string(),
      uuid: Sa(),
      session_id: H.string(),
    }),
  )),
  (wRm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("task_notification"),
      task_id: H.string(),
      tool_use_id: H.string().optional(),
      status: H.enum(["completed", "failed", "stopped"]),
      output_file: H.string(),
      summary: H.string(),
      usage: H.object({
        total_tokens: H.number(),
        tool_uses: H.number(),
        duration_ms: H.number(),
      }).optional(),
      skip_transcript: H.boolean().optional(),
      uuid: Sa(),
      session_id: H.string(),
    }),
  )),
  (CRm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("task_started"),
      task_id: H.string(),
      tool_use_id: H.string().optional(),
      description: H.string(),
      subagent_type: H.string().optional().describe("Subagent type for Task tool subagents."),
      task_type: H.string().optional(),
      workflow_name: H.string()
        .optional()
        .describe(
          "meta.name from the workflow script (e.g. 'spec'). Only set when task_type is 'local_workflow'.",
        ),
      prompt: H.string().optional(),
      skip_transcript: H.boolean()
        .optional()
        .describe(
          "Ambient/housekeeping task. Consumers should hide this from the inline transcript; it may still appear in a tasks panel.",
        ),
      uuid: Sa(),
      session_id: H.string(),
    }),
  )),
  (IRm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("task_updated"),
      task_id: H.string(),
      patch: H.object({
        status: H.enum([
          "pending",
          "running",
          "completed",
          "failed",
          "killed",
          "paused",
        ]).optional(),
        description: H.string().optional(),
        end_time: H.number().optional(),
        total_paused_ms: H.number().optional(),
        error: H.string().optional(),
        is_backgrounded: H.boolean().optional(),
      }).describe(
        "Wire-safe subset of TaskState fields that changed. Excludes abortController, messages, result. Clients merge into their local task map.",
      ),
      uuid: Sa(),
      session_id: H.string(),
    }),
  )),
  (xRm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("session_state_changed"),
      state: H.enum(["idle", "running", "requires_action"]),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "Mirrors notifySessionStateChanged. 'idle' fires after heldBackResult flushes and the bg-agent do-while exits \u2014 authoritative turn-over signal.",
    ),
  )),
  (kRm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("worker_shutting_down"),
      reason: H.string().describe(
        "Short snake_case reason set by the host CLI (not user input), e.g. 'host_exit', 'remote_control_disabled'.",
      ),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "Emitted by the bridge on opt-in graceful worker teardown (only when the teardown caller supplied a reason), before the heartbeat stops, so remote clients can show why the worker went away instead of waiting for heartbeat timeout. Absence is NOT a dead-host signal: handoffs (/update, /teleport, respawn), auto-disable, mode transitions, and internal fatal-error paths emit nothing by design. A dead host (battery, OOM, kill -9) never reaches teardown and never sends this either. NOTE: this event lands in the durable per-session event stream \u2014 a session that is later resumed may carry historical instances mid-stream. Clients MUST treat it as a live-tail signal only (honored when no further activity follows), not a one-shot session-lifetime fact. CC-2656.",
    ),
  )),
  (RRm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("commands_changed"),
      commands: H.array(ann()),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "Fire-and-forget push of the full slash-command list after a mid-session change (e.g. skills discovered dynamically as the agent works in a subdirectory). Clients should REPLACE their cached command list with this payload: supportedCommands() is captured once at initialize and never reflects mid-session changes, so a client re-fetch would return the stale init list.",
    ),
  )),
  (LRm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("notification"),
      key: H.string(),
      text: H.string(),
      priority: H.enum(["low", "medium", "high", "immediate"]),
      color: H.string().optional(),
      timeout_ms: H.number().optional(),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "Loop-side text notification. Mirrors the interactive REPL notification queue (key/priority/timeout). JSX notifications are not emitted on this channel.",
    ),
  )),
  (DRm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("task_progress"),
      task_id: H.string(),
      tool_use_id: H.string().optional(),
      description: H.string(),
      subagent_type: H.string().optional().describe("Subagent type for Task tool subagents."),
      usage: H.object({
        total_tokens: H.number(),
        tool_uses: H.number(),
        duration_ms: H.number(),
      }),
      last_tool_name: H.string().optional(),
      summary: H.string().optional(),
      uuid: Sa(),
      session_id: H.string(),
    }),
  )),
  (PRm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("thinking_tokens"),
      estimated_tokens: H.number(),
      estimated_tokens_delta: H.number(),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "Live thinking-token estimate, digested from thinking_delta.estimated_tokens during the redacted-thinking phase (where the API otherwise streams only pings). estimated_tokens is the running total for the current thinking block; estimated_tokens_delta is the increment carried by this frame. Approximate progress for spinners/pills, not the authoritative billed output_tokens.",
    ),
  )),
  (MRm = ve(() =>
    H.object({
      type: H.literal("tool_use_summary"),
      summary: H.string(),
      preceding_tool_use_ids: H.array(H.string()),
      uuid: Sa(),
      session_id: H.string(),
      timestamp: H.string()
        .optional()
        .describe(
          "@internal ISO timestamp when the summary was created on the originating process. From internal ToolUseSummaryMessage.timestamp.",
        ),
    }),
  )),
  ($Rm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("memory_recall"),
      mode: H.enum(["select", "synthesize"]).describe(
        "How memories were surfaced: 'select' returns full file bodies chosen by the parallel selector; 'synthesize' returns a Sonnet-authored paragraph distilled from many tiny memories.",
      ),
      memories: H.array(
        H.object({
          path: H.string().describe(
            "Absolute path to the memory file, a synthesis sentinel of the form `<synthesis:DIR>` when mode is 'synthesize', or an https URL when scope is 'organization'.",
          ),
          scope: H.enum(["personal", "team", "organization"]),
          content: H.string()
            .optional()
            .describe(
              "The surfaced memory body. Always present for 'synthesize' mode and 'organization' scope (neither has an on-disk path to lazy-load from); absent for file-backed 'select' entries (renderers lazy-load from path).",
            ),
        }),
      ),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      'Emitted when the memory recall supervisor surfaces relevant memories into the turn. Mirrors the CLI relevant_memories attachment so SDK renderers can show "Recalled from memory" inline.',
    ),
  )),
  (ORm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("elicitation_complete"),
      mcp_server_name: H.string(),
      elicitation_id: H.string(),
      uuid: Sa(),
      session_id: H.string(),
    }).describe("Emitted when an MCP server confirms that a URL-mode elicitation is complete."),
  )),
  (NRm = ve(() =>
    H.object({
      type: H.literal("system"),
      subtype: H.literal("permission_denied"),
      tool_name: H.string(),
      tool_use_id: H.string(),
      agent_id: H.string()
        .optional()
        .describe(
          "Subagent ID when the denied tool call originated inside a subagent. Mirrors can_use_tool for host-side routing.",
        ),
      decision_reason_type: H.string()
        .optional()
        .describe(
          "Discriminator from PermissionDecisionReason (e.g. 'classifier', 'asyncAgent', 'mode', 'rule').",
        ),
      decision_reason: H.string()
        .optional()
        .describe("Human-readable reason from the deciding component, when available."),
      message: H.string().describe(
        "The rejection message returned to the model in the tool_result.",
      ),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "Emitted when a tool call is auto-denied without an interactive permission prompt (e.g. auto-mode classifier, dontAsk mode, headless-agent auto-deny, or a deny rule). The 'ask' path surfaces via a can_use_tool control_request; this event covers the 'deny' short-circuit in canUseTool so SDK hosts can render the denial instead of only seeing an is_error tool_result. PreToolUse hook denies bypass canUseTool and are not covered here.",
    ),
  )),
  (BRm = ve(() =>
    H.object({
      type: H.literal("prompt_suggestion"),
      suggestion: H.string(),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "Predicted next user prompt, emitted after each turn when promptSuggestions is enabled.",
    ),
  )),
  (A1H = ve(() =>
    H.object({
      type: H.literal("attachment"),
      attachment: H.unknown().describe(
        "Internal Attachment discriminated union (at-mentioned files, IDE selections, pasted images, structured output, deferred tool-use). Wire shape pending a dedicated SDKAttachment schema.",
      ),
      timestamp: H.string(),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Emitted when the engine yields an AttachmentMessage into the turn stream. Carries user-attached content (at-mentioned files, IDE selections, pasted media) and loop-attached data (structured output, deferred tool-use payloads). SDKResultMessage.structured_output and .deferred_tool_use are derived from these frames. From internal QueryEvent 'attachment'.",
    ),
  )),
  (H1H = ve(() =>
    H.object({
      type: H.literal("tombstone"),
      message: H.unknown().describe(
        "The internal Message being tombstoned. Wire shape pending a dedicated schema.",
      ),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Emitted when a previously-yielded message is superseded or removed from the transcript (e.g., streaming\u2192non-streaming fallback removes a partial orphan). Consumers that render or persist the stream should remove the referenced message. From internal QueryEvent 'tombstone'.",
    ),
  )),
  (T1H = ve(() =>
    H.object({
      type: H.literal("conversation_reset"),
      new_conversation_id: Sa(),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Emitted by /clear, plan-mode exit, and fresh-session flows. The surface should mount a fresh transcript under new_conversation_id and reset any cached session title. From internal QueryEvent 'conversation_reset'.",
    ),
  )),
  (v1H = ve(() =>
    H.object({
      type: H.literal("api_metrics"),
      event: H.discriminatedUnion("type", [
        H.object({
          type: H.literal("start"),
          ttft_ms: H.number(),
          id: H.string().optional(),
          message_id: H.string().optional(),
        }),
        H.object({
          type: H.literal("end"),
          output_tokens: H.number(),
          id: H.string().optional(),
        }),
        H.object({
          type: H.literal("content_block_start"),
          id: H.string().optional(),
        }),
        H.object({
          type: H.literal("thinking_progress"),
          estimated_tokens_delta: H.number(),
          id: H.string().optional(),
        }),
        H.object({
          type: H.literal("thinking_signature"),
          chars: H.number(),
          id: H.string().optional(),
        }),
      ]).describe(
        "Per-API-call OTPS/TTFT lifecycle event. Optional id correlates parallel subagent start/end; serial callers omit it.",
      ),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Emitted when a subagent's API call reports TTFT or output_tokens for OTPS (output-tokens-per-second) metering. From internal QueryEvent 'api_metrics' (ApiMetricsLifecycleEvent).",
    ),
  )),
  (w1H = ve(() =>
    H.object({
      type: H.literal("os_notification"),
      message: H.string(),
      notification_type: H.string(),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Emitted when a tool (PushNotificationTool, the Computer Use wrapper) or turn-end cleanup requests a native OS notification. The surface dispatches to its platform notification channel (iTerm2/Kitty/Ghostty/bell in the terminal; native IPC for desktop/IDE). From internal QueryEvent 'os_notification'.",
    ),
  )),
  (C1H = ve(() =>
    H.object({
      type: H.literal("apply_flag_settings"),
      settings: H.record(H.string(), H.unknown()).describe(
        "Shallow-merge flag-settings patch \u2014 same shape as SDKControlApplyFlagSettingsRequest.settings.",
      ),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Output-direction counterpart to SDKControlApplyFlagSettingsRequest. Emitted when slash commands that toggle flag settings request a batched write that the surface applies to its AppState. From internal QueryEvent 'apply_flag_settings'.",
    ),
  )),
  (I1H = ve(() =>
    H.object({
      type: H.literal("command_lifecycle"),
      command_uuid: H.string().describe(
        "The queued command's uuid. Renamed from Engine 'uuid' to avoid collision with the universal message uuid field.",
      ),
      state: H.enum(["started", "completed"]),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Emitted when a queued slash command starts draining ('started') or finishes ('completed'). Remote transports (mobile/desktop bridge) forward the 'completed' ACK so the client knows its queued command was processed. From internal QueryEvent 'command_lifecycle'.",
    ),
  )),
  (x1H = ve(() =>
    H.object({
      type: H.literal("set_expanded_view"),
      expanded_view: H.enum(["none", "tasks", "teammates"]),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Hint to expand a side panel. Enum is a superset of AppState.expandedView for back-compat; do not narrow.",
    ),
  )),
  (k1H = ve(() =>
    H.object({
      type: H.literal("active_goal"),
      value: H.object({
        condition: H.string(),
        iterations: H.number(),
        set_at: H.number(),
        tokens_at_start: H.number(),
        last_reason: H.string().optional(),
      }).nullable(),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Emitted when the user's /goal Stop hook reports met (clears) or not-yet-met (bumps iterations + last_reason). Any surface with a goal indicator re-renders from this. value is null when the goal is cleared. From internal QueryEvent 'active_goal'.",
    ),
  )),
  (R1H = ve(() =>
    H.object({
      type: H.literal("set_in_progress_tool_use_ids"),
      op: H.object({
        action: H.enum(["add", "remove"]),
        ids: H.array(H.string()),
      }),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Emitted when tool execution adds/removes tool_use ids from the mid-execution set (after permission grant, before result). Surfaces use this to show which tools are running. From internal QueryEvent 'set_in_progress_tool_use_ids'.",
    ),
  )),
  (L1H = ve(() =>
    H.object({
      type: H.literal("hint_clears"),
      ids: H.array(H.string()),
      content_by_id: H.record(H.string(), H.string()),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Emitted when the server-side context-hint reject path reports cleared tool_use ids after a retry/fallback. The surface re-runs clearToolResultsById on its message list so subsequent turns match the API's view. From internal QueryEvent 'hint_clears'.",
    ),
  )),
  (D1H = ve(() =>
    H.object({
      type: H.literal("interruptible_tool_in_progress"),
      in_progress: H.boolean(),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Emitted when the set of executing tools transitions in or out of an all-interruptible state. The surface uses this to decide whether a fresh user submit should interrupt the current turn (vs. queue). From internal QueryEvent 'interruptible_tool_in_progress'.",
    ),
  )),
  (P1H = ve(() =>
    H.object({
      type: H.literal("open_message_selector"),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Emitted by /rewind to open the message-selector overlay. Fire-and-forget \u2014 the user's selection returns through a separate channel. From internal QueryEvent 'open_message_selector'.",
    ),
  )),
  (M1H = ve(() =>
    H.object({
      type: H.literal("compact_progress"),
      event: H.discriminatedUnion("type", [
        H.object({
          type: H.literal("hooks_start"),
          hook_type: H.enum(["pre_compact", "post_compact", "session_start"]),
        }),
        H.object({
          type: H.literal("compact_start"),
          hint_text: H.string().nullable().optional(),
        }),
        H.object({
          type: H.literal("compact_end"),
        }),
      ]).describe("In-progress compaction lifecycle event."),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Emitted while compaction is running (hook phase, compact start, compact end). Distinct from system/compact_boundary, which reports the post-compaction transcript boundary after completion. From internal QueryEvent 'compact_progress' (CompactEvent Delta-track arm).",
    ),
  )),
  ($1H = ve(() =>
    H.object({
      type: H.literal("stream_mode"),
      mode: H.enum(["tool-input", "tool-use", "requesting", "responding", "thinking"]),
      uuid: Sa(),
      session_id: H.string(),
    }).describe(
      "@internal Emitted when the engine's spinner phase changes during compaction. From internal QueryEvent 'stream_mode' (CompactEvent Delta-track arm).",
    ),
  )),
  (O1H = ve(() =>
    H.discriminatedUnion("op", [
      H.object({
        type: H.literal("response_length"),
        op: H.literal("add"),
        delta: H.number(),
        uuid: Sa(),
        session_id: H.string(),
      }),
      H.object({
        type: H.literal("response_length"),
        op: H.literal("reset"),
        uuid: Sa(),
        session_id: H.string(),
      }),
    ]).describe(
      "@internal Emitted to drive the streaming-output character counter in the spinner ('add' accumulates, 'reset' zeroes on compaction-boundary swap). From internal QueryEvent 'response_length' (Delta-track).",
    ),
  )),
  (N1H = ve(() =>
    H.discriminatedUnion("phase", [
      H.object({
        type: H.literal("refusal_continuation"),
        phase: H.literal("begin"),
        salvage_text: H.string(),
        uuid: Sa(),
        session_id: H.string(),
      }),
      H.object({
        type: H.literal("refusal_continuation"),
        phase: H.literal("end"),
        uuid: Sa(),
        session_id: H.string(),
      }),
    ]).describe(
      "@internal Emitted when a refusal-continuation window begins ('begin' with salvage_text to keep visible in the streaming preview) or ends ('end'). From internal QueryEvent 'refusal_continuation'.",
    ),
  )),
  (B1H = ve(() =>
    H.object({
      sessionId: H.string().describe("Unique session identifier (UUID)."),
      summary: H.string().describe(
        "Display title for the session: custom title, auto-generated summary, or first prompt.",
      ),
      lastModified: H.number().describe("Last modified time in milliseconds since epoch."),
      fileSize: H.number()
        .optional()
        .describe("File size in bytes. Only populated for local JSONL storage."),
      customTitle: H.string().optional().describe("User-set session title via /rename."),
      firstPrompt: H.string().optional().describe("First meaningful user prompt in the session."),
      gitBranch: H.string().optional().describe("Git branch at the end of the session."),
      cwd: H.string().optional().describe("Working directory for the session."),
      tag: H.string().optional().describe("User-set session tag."),
      createdAt: H.number()
        .optional()
        .describe(
          "Creation time in milliseconds since epoch, extracted from the first entry's timestamp.",
        ),
    }).describe("Session metadata returned by listSessions and getSessionInfo."),
  )),
  (Z7o = ve(() =>
    H.union([
      rRm(),
      Y7o(),
      tRm(),
      lRm(),
      cRm(),
      uRm(),
      dRm(),
      pRm(),
      gRm(),
      hRm(),
      yRm(),
      _Rm(),
      bRm(),
      SRm(),
      ERm(),
      ARm(),
      HRm(),
      TRm(),
      wRm(),
      CRm(),
      IRm(),
      DRm(),
      PRm(),
      xRm(),
      kRm(),
      RRm(),
      LRm(),
      vRm(),
      MRm(),
      $Rm(),
      oRm(),
      ORm(),
      NRm(),
      BRm(),
      mRm(),
      fRm(),
    ]),
  )),
  (lnn = ve(() =>
    H.enum(["off", "cooldown", "on"]).describe(
      "Fast mode state: off, in cooldown after rate limit, or actively enabled.",
    ),
  )));
var URm,
  FRm,
  tBc,
  jRm,
  q1H,
  nBc,
  rBc,
  oBc,
  sBc,
  iBc,
  aBc,
  lBc,
  cBc,
  V1H,
  uBc,
  z1H,
  dBc,
  pBc,
  K1H,
  fBc,
  cnn,
  Imr,
  eBc,
  Y1H,
  mBc,
  X1H,
  GRm,
  WRm,
  J1H,
  gBc,
  Q1H,
  hBc,
  Z1H,
  yBc,
  eNH,
  _Bc,
  tNH,
  bBc,
  SBc,
  EBc,
  ABc,
  nNH,
  HBc,
  rNH,
  TBc,
  oNH,
  vBc,
  wBc,
  CBc,
  IBc,
  xBc,
  kBc,
  RBc,
  LBc,
  sNH,
  DBc,
  PBc,
  MBc,
  $Bc,
  OBc,
  iNH,
  NBc,
  BBc,
  UBc,
  FBc,
  jBc,
  aNH,
  lNH,
  cNH,
  qRm,
  xmr,
  GBc,
  WBc,
  VRm,
  zRm,
  qBc,
  KRm,
  VBc,
  YRm,
  uNH,
  zBc,
  dNH;
