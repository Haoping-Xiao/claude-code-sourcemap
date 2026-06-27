// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KBc
// matched 2.1.88 source: src/entrypoints/sdk/controlSchemas.ts
// class=modified  jaccard=0.3672  score=0.4124  fileCov=0.7703
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module KBc] deps: @modelcontextprotocol/sdk/dist/esm/types.js, types/permissions.ts, entrypoints/sdk/coreSchemas.ts
((URm = ve(() => H.unknown())),
  (FRm = ve(() =>
    H.object({
      matcher: H.string().optional(),
      hookCallbackIds: H.array(H.string()),
      timeout: H.number().optional(),
    }).describe("Configuration for matching and routing hook callbacks."),
  )),
  (tBc = ve(() =>
    H.object({
      subtype: H.literal("initialize"),
      hooks: H.record(FNc(), H.array(FRm())).optional(),
      sdkMcpServers: H.array(H.string()).optional(),
      jsonSchema: H.record(H.string(), H.unknown()).optional(),
      systemPrompt: H.array(H.string()).optional(),
      appendSystemPrompt: H.string().optional(),
      planModeInstructions: H.string()
        .optional()
        .describe(
          "Custom workflow body for the plan-mode system reminder. Replaces the default code-implementation phases; the CLI still wraps it with the read-only enforcement preamble and the ExitPlanMode protocol footer.",
        ),
      appendSubagentSystemPrompt: H.string()
        .optional()
        .describe(
          "@internal Additional system prompt appended to every Task-tool subagent (and propagated to nested subagents). Gated by CLAUDE_CODE_ENABLE_APPEND_SUBAGENT_PROMPT.",
        ),
      toolAliases: H.record(H.string(), H.string())
        .optional()
        .describe(
          "Map of tool-name aliases applied before name resolution. When the model emits a tool_use whose name is a key in this map, the tool execution path resolves the mapped name instead. Single-hop (no chains). See Options.toolAliases.",
        ),
      excludeDynamicSections: H.boolean()
        .optional()
        .describe(
          "When true, omit per-user dynamic sections (working directory, auto-memory path) from the cached system prompt and re-inject them as the first user message. Lets cross-user prompt caching hit on a static system prompt prefix. Tradeoff: the model sees this context slightly later in the prompt, so steering on the working directory and memory location is marginally less authoritative. Has no effect when a custom (non-preset) system prompt is in use.",
        ),
      agents: H.record(H.string(), VNc()).optional(),
      title: H.string()
        .optional()
        .describe(
          "Custom session title. When provided, the session uses this title and skips automatic title generation. Has no effect on the persisted title when resuming an existing session.",
        ),
      skills: H.array(H.string())
        .optional()
        .describe(
          'When provided, only skills whose names match an entry are loaded into the main session system prompt, using the same rules as AgentDefinition.skills: exact name, plugin-qualified name, or ":name" suffix. Omit to load every discovered skill. Applies to the main session only; subagents use AgentDefinition.skills.',
        ),
      webSearchIsolationExemptMcpServers: H.array(H.string())
        .optional()
        .describe(
          "@internal Additional MCP server names exempt from the web search / connector isolation latch. Unioned with the built-in infra-server list.",
        ),
      promptSuggestions: H.boolean().optional(),
      agentProgressSummaries: H.boolean().optional(),
      forwardSubagentText: H.boolean().optional(),
      supportedDialogKinds: H.array(H.string())
        .optional()
        .describe(
          "Dialog kinds (request_user_dialog `dialog_kind` values) this consumer's onUserDialog can actually render. The CLI treats ABSENCE as 'cannot display' and fails closed: without the kind declared here, a dialog-gated flow degrades to its no-dialog behavior (for 'refusal_fallback_prompt', the classic refusal error) instead of parking a dialog the consumer may mishandle. First-attached-client-wins on multi-client sessions; later initializes do not change it.",
        ),
    }).describe("Initializes the SDK session with hooks, MCP servers, and agent configuration."),
  )),
  (jRm = ve(() =>
    H.object({
      minTimeBeforeFeedbackMs: H.number(),
      minTimeBetweenFeedbackMs: H.number(),
      minTimeBetweenGlobalFeedbackMs: H.number(),
      minUserTurnsBeforeFeedback: H.number(),
      minUserTurnsBetweenFeedback: H.number(),
      hideThanksAfterMs: H.number(),
      onForModels: H.array(H.string()),
      probability: H.number(),
      lastSurveyShownTime: H.number().nullable(),
    }).describe(
      "@internal Session feedback-survey configuration for host UIs (VS Code webview, Claude Desktop) that run the survey trigger logic themselves: the same GrowthBook-driven pacing/probability values the terminal survey uses, plus the cross-surface last-shown time the host can't read. Survey responses are proxied back as tengu_feedback_survey_event log_event notifications.",
    ),
  )),
  (q1H = ve(() =>
    H.object({
      commands: H.array(ann()),
      agents: H.array(q7o()),
      output_style: H.string(),
      available_output_styles: H.array(H.string()),
      models: H.array(V7o()),
      unavailable_models: H.array(V7o())
        .optional()
        .describe(
          "@internal Models the account can see but not select (disabled: true, reason folded into description \u2014 e.g. a model the org's Zero Data Retention setting excludes). Disjoint from `models`, which stays selectable-only so consumers without disabled rendering are unaffected. Populated only for allowlisted 1P hosts that render these rows (currently the VS Code extension \u2014 UNAVAILABLE_MODELS_HOST_ENTRYPOINTS); empty for every other consumer. Omitted when empty.",
        ),
      account: qNc(),
      current_model: H.string()
        .optional()
        .describe(
          "@internal The CLI's active model at connect time. Remote Control clients (web/mobile) sync their model dropdown TO this value on connect instead of sending set_model with their own default \u2014 without it, connecting from a phone silently switches the terminal's model (CC-2659).",
        ),
      current_permission_mode: ive()
        .optional()
        .describe(
          "@internal The CLI's active permission mode at connect time, for the same connect-time sync as current_model.",
        ),
      pid: H.number().optional().describe("@internal CLI process PID for tmux socket isolation"),
      fast_mode_state: lnn().optional(),
      feedback_survey_config: jRm()
        .optional()
        .describe(
          "@internal Present only when the feedback-survey surface is enabled for this host (GrowthBook gate, privacy level, and org policy all allow it). Absent means the host must not show the survey.",
        ),
    }).describe(
      "Response from session initialization with available commands, models, and account info.",
    ),
  )),
  (nBc = ve(() =>
    H.object({
      subtype: H.literal("interrupt"),
      reason: H.string()
        .optional()
        .describe(
          "@internal Why the turn was interrupted, forwarded to the turn's AbortSignal.reason. Tool implementations branch on it to distinguish a user-driven cancel (which suppresses error output) from other aborts. Known values: `interrupt` (user Esc/Ctrl+C), `user-cancel`, `remote-cancel`, `consumer-error`, `workflow-abort`, `stalled`, `recovery-timeout`. Open set \u2014 consumers must treat unknown values as a generic abort.",
        ),
    }).describe("Interrupts the currently running conversation turn."),
  )),
  (rBc = ve(() =>
    H.object({
      subtype: H.literal("can_use_tool"),
      tool_name: H.string(),
      input: H.record(H.string(), H.unknown()),
      permission_suggestions: H.array(inn()).optional(),
      blocked_path: H.string().optional(),
      decision_reason: H.string().optional(),
      decision_reason_type: H.enum(FRr)
        .optional()
        .describe(
          'Structured discriminator for why auto-mode escalated. Lets SDK hosts make policy (e.g. auto-deny safetyCheck) without parsing decision_reason text. For compound bash commands this is "subcommandResults" even when a safetyCheck is nested inside \u2014 check classifier_approvable for that case.',
        ),
      classifier_approvable: H.boolean()
        .optional()
        .describe(
          "Set when a safetyCheck is present anywhere in the decision reason (including nested inside subcommandResults for compound bash). false = at least one safety check requires manual approval (e.g. Windows path bypass, dangerous rm); true = all safety checks MAY be classifier-approved (e.g. sensitive-file paths). Absent when no safetyCheck is involved.",
        ),
      title: H.string().optional(),
      display_name: H.string().optional(),
      tool_use_id: H.string(),
      agent_id: H.string().optional(),
      description: H.string().optional(),
    }).describe("Requests permission to use a tool with the given input."),
  )),
  (oBc = ve(() =>
    H.object({
      subtype: H.literal("set_permission_mode"),
      mode: ive(),
      ultraplan: H.boolean().optional().describe("@internal CCR ultraplan session marker."),
    }).describe("Sets the permission mode for tool execution handling."),
  )),
  (sBc = ve(() =>
    H.object({
      subtype: H.literal("set_model"),
      model: H.string().optional(),
    }).describe("Sets the model to use for subsequent conversation turns."),
  )),
  (iBc = ve(() =>
    H.object({
      subtype: H.literal("set_max_thinking_tokens"),
      max_thinking_tokens: H.number().nullable(),
      thinking_display: H.enum(["summarized", "omitted"]).nullable().optional(),
    }).describe(
      "Sets the maximum number of thinking tokens for extended thinking. thinking_display optionally sets the thinking display mode for the rest of the session: a value replaces the session display mode, null clears it back to the API default, and when omitted the display mode from session start (--thinking-display) is kept.",
    ),
  )),
  (aBc = ve(() =>
    H.object({
      subtype: H.literal("rename_session"),
      title: H.string(),
    }).describe("Sets the user-facing title for the current session."),
  )),
  (lBc = ve(() =>
    H.object({
      subtype: H.literal("set_color"),
      color: H.string(),
    }).describe(
      'Sets the session accent color. Accepts an agent color name or "default" to reset.',
    ),
  )),
  (cBc = ve(() =>
    H.object({
      subtype: H.literal("mcp_status"),
    }).describe("Requests the current status of all MCP server connections."),
  )),
  (V1H = ve(() =>
    H.object({
      mcpServers: H.array(W7o()),
    }).describe("Response containing the current status of all MCP server connections."),
  )),
  (uBc = ve(() =>
    H.object({
      subtype: H.literal("file_suggestions"),
      query: H.string(),
    }).describe(
      "Requests at-mention file autocomplete suggestions for a partial path prefix. Returns the same fuzzy-matched results the TUI shows.",
    ),
  )),
  (z1H = ve(() =>
    H.object({
      suggestions: H.array(
        H.object({
          path: H.string(),
          score: H.number().optional(),
        }),
      ),
    }).describe(
      "Response containing fuzzy-ranked file path suggestions (capped at the same limit as the TUI typeahead).",
    ),
  )),
  (dBc = ve(() =>
    H.object({
      subtype: H.literal("get_context_usage"),
    }).describe("Requests a breakdown of current context window usage by category."),
  )),
  (pBc = ve(() =>
    H.object({
      subtype: H.literal("get_session_cost"),
    }).describe(
      "Requests the formatted session cost summary (the same text /usage prints in non-interactive mode). Used by the thin-client /usage dialog to show the remote container cost instead of the local $0.00.",
    ),
  )),
  (K1H = ve(() =>
    H.object({
      text: H.string(),
    }).describe("Formatted session cost text, ANSI-stripped."),
  )),
  (fBc = ve(() =>
    H.object({
      subtype: H.literal("get_usage"),
    }).describe(
      "Requests the structured /usage data: session cost/usage totals plus claude.ai plan rate-limit utilization when available. Experimental \u2014 the response shape may change.",
    ),
  )),
  (cnn = ve(() =>
    H.object({
      utilization: H.number().nullable().describe("Percentage of the window used, 0-100."),
      resets_at: H.string().nullable().describe("ISO 8601 timestamp when the window resets."),
    }),
  )),
  (Imr = ve(() =>
    H.object({
      name: H.string(),
      pct: H.number().describe("Share of the weighted local usage attributed to this item, 0-100."),
    }),
  )),
  (eBc = ve(() =>
    H.object({
      request_count: H.number().describe(
        "API requests found in local transcripts for this window.",
      ),
      session_count: H.number().describe("Distinct sessions observed in this window."),
      behaviors: H.array(
        H.object({
          key: H.enum(["cache_miss", "long_context", "subagent_heavy", "high_parallel", "cron"]),
          pct: H.number().describe(
            "Share of the weighted local usage attributed to this behavior, 0-100.",
          ),
          count: H.number().describe("Requests in this window exhibiting the behavior."),
        }),
      ).describe(
        "Behavioral characteristics of local usage. Categories overlap \u2014 this is not a partition, so percentages do not sum to 100.",
      ),
      agents: H.array(Imr()),
      skills: H.array(Imr()),
      plugins: H.array(Imr()),
      mcp_servers: H.array(Imr()),
    }),
  )),
  (Y1H = ve(() =>
    H.object({
      session: H.object({
        total_cost_usd: H.number(),
        total_api_duration_ms: H.number(),
        total_duration_ms: H.number(),
        total_lines_added: H.number(),
        total_lines_removed: H.number(),
        model_usage: H.record(H.string(), vmr()),
      }).describe("Cost and usage accumulated by the current session."),
      subscription_type: H.string()
        .nullable()
        .describe(
          "Claude.ai subscription type ('pro', 'max', 'team', 'enterprise') or null for API key / 3P provider sessions.",
        ),
      rate_limits_available: H.boolean().describe(
        "False when plan rate limits do not apply (API key, Bedrock, Vertex, or missing profile scope) \u2014 rate_limits will be null.",
      ),
      rate_limits: H.object({
        five_hour: cnn().nullable().optional(),
        seven_day: cnn().nullable().optional(),
        seven_day_oauth_apps: cnn().nullable().optional(),
        seven_day_opus: cnn().nullable().optional(),
        seven_day_sonnet: cnn().nullable().optional(),
        model_scoped: H.array(
          H.object({
            display_name: H.string().describe(
              "Server-supplied label for the model bucket (e.g. 'Fable').",
            ),
            utilization: H.number().nullable(),
            resets_at: H.string().nullable(),
          }),
        )
          .optional()
          .describe(
            "Per-model weekly windows from the server limits[] array, filtered by the overage-included-models allowlist. Additive \u2014 present only when the server emits them.",
          ),
        extra_usage: H.object({
          is_enabled: H.boolean(),
          monthly_limit: H.number().nullable(),
          used_credits: H.number().nullable(),
          utilization: H.number().nullable(),
          currency: H.string().nullable().optional(),
        })
          .nullable()
          .optional(),
      })
        .nullable()
        .describe(
          "Plan rate-limit utilization windows from the claude.ai usage endpoint, or null when unavailable.",
        ),
      behaviors: H.object({
        day: eBc().describe("Last 24 hours."),
        week: eBc().describe("Last 7 days."),
      })
        .nullable()
        .describe(
          "What's contributing to limits usage, from a scan of local transcripts on this machine (the same data the /usage dialog renders): behavioral characteristics plus per-skill/agent/plugin/MCP-server attribution. Approximate, excludes other devices and claude.ai. Null for non-claude.ai-subscriber sessions (mirrors the dialog) or when the scan fails.",
        ),
    }).describe(
      "Structured /usage data: session cost/usage totals plus claude.ai plan rate-limit utilization. Experimental \u2014 the shape may change.",
    ),
  )),
  (mBc = ve(() =>
    H.object({
      subtype: H.literal("get_binary_version"),
    }).describe(
      "Requests the responder's CLI binary version. Used by /version in --remote mode so the thin client can show both its own and the remote container's version.",
    ),
  )),
  (X1H = ve(() =>
    H.object({
      version: H.string(),
      buildTime: H.string().optional(),
    }),
  )),
  (GRm = ve(() =>
    H.object({
      name: H.string(),
      tokens: H.number(),
      color: H.string(),
      isDeferred: H.boolean().optional(),
    }),
  )),
  (WRm = ve(() =>
    H.object({
      color: H.string(),
      isFilled: H.boolean(),
      categoryName: H.string(),
      tokens: H.number(),
      percentage: H.number(),
      squareFullness: H.number(),
    }),
  )),
  (J1H = ve(() =>
    H.object({
      categories: H.array(GRm()),
      totalTokens: H.number(),
      maxTokens: H.number(),
      rawMaxTokens: H.number(),
      percentage: H.number(),
      gridRows: H.array(H.array(WRm())),
      model: H.string(),
      memoryFiles: H.array(
        H.object({
          path: H.string(),
          type: H.string(),
          tokens: H.number(),
        }),
      ),
      mcpTools: H.array(
        H.object({
          name: H.string(),
          serverName: H.string(),
          tokens: H.number(),
          isLoaded: H.boolean().optional(),
        }),
      ),
      deferredBuiltinTools: H.array(
        H.object({
          name: H.string(),
          tokens: H.number(),
          isLoaded: H.boolean(),
        }),
      ).optional(),
      systemTools: H.array(
        H.object({
          name: H.string(),
          tokens: H.number(),
        }),
      ).optional(),
      systemPromptSections: H.array(
        H.object({
          name: H.string(),
          tokens: H.number(),
        }),
      ).optional(),
      agents: H.array(
        H.object({
          agentType: H.string(),
          source: H.string(),
          tokens: H.number(),
        }),
      ),
      slashCommands: H.object({
        totalCommands: H.number(),
        includedCommands: H.number(),
        tokens: H.number(),
      }).optional(),
      skills: H.object({
        totalSkills: H.number(),
        includedSkills: H.number(),
        tokens: H.number(),
        skillFrontmatter: H.array(
          H.object({
            name: H.string(),
            source: H.string(),
            tokens: H.number(),
          }),
        ),
      }).optional(),
      autoCompactThreshold: H.number().optional(),
      isAutoCompactEnabled: H.boolean(),
      messageBreakdown: H.object({
        toolCallTokens: H.number(),
        toolResultTokens: H.number(),
        attachmentTokens: H.number(),
        assistantMessageTokens: H.number(),
        userMessageTokens: H.number(),
        redirectedContextTokens: H.number(),
        unattributedTokens: H.number(),
        toolCallsByType: H.array(
          H.object({
            name: H.string(),
            callTokens: H.number(),
            resultTokens: H.number(),
          }),
        ),
        attachmentsByType: H.array(
          H.object({
            name: H.string(),
            tokens: H.number(),
          }),
        ),
      }).optional(),
      apiUsage: H.object({
        input_tokens: H.number(),
        output_tokens: H.number(),
        cache_creation_input_tokens: H.number(),
        cache_read_input_tokens: H.number(),
      }).nullable(),
    }).describe(
      "Breakdown of current context window usage by category (system prompt, tools, messages, etc.).",
    ),
  )),
  (gBc = ve(() =>
    H.object({
      subtype: H.literal("mcp_call"),
      tool: H.string().describe("Fully-qualified MCP tool name, e.g. mcp__server__tool_name."),
      arguments: H.record(H.string(), H.unknown()).optional(),
    }).describe(
      "Invokes an MCP tool via the subprocess MCP client without a model turn. No permission check (control channel is trusted, same as other " +
        'subtypes). SDK-type MCP servers (config.type === "sdk") are rejected \u2014 ' +
        "they are caller-provided, so the caller can invoke them directly without the subprocess round-trip. Result content passes through the same processing as model-turn MCP calls. Session expiry is not retried automatically; callers can mcp_reconnect and retry. UrlElicitationRequired (-32042) tries Elicitation hooks; if no hook " +
        "resolves, the call errors with the URL in the message \u2014 open it " +
        "out-of-band, then retry mcp_call.",
    ),
  )),
  (Q1H = ve(() =>
    H.object({
      content: H.unknown(),
      structuredContent: H.record(H.string(), H.unknown()).optional(),
      _meta: H.record(H.string(), H.unknown()).optional(),
    }).describe(
      "MCP tool result \u2014 the content array, structuredContent, and _meta " +
        "from CallToolResult. Content passes through the same processing as model-turn MCP calls (large results may be truncated or redirected to a file). Caller interprets.",
    ),
  )),
  (hBc = ve(() =>
    H.object({
      subtype: H.literal("rewind_files"),
      user_message_id: H.string(),
      dry_run: H.boolean().optional(),
    }).describe("Rewinds file changes made since a specific user message."),
  )),
  (Z1H = ve(() =>
    H.object({
      canRewind: H.boolean(),
      error: H.string().optional(),
      filesChanged: H.array(H.string()).optional(),
      insertions: H.number().optional(),
      deletions: H.number().optional(),
    }).describe("Result of a rewindFiles operation."),
  )),
  (yBc = ve(() =>
    H.object({
      subtype: H.literal("cancel_async_message"),
      message_uuid: H.string(),
    }).describe(
      "Drops a pending async user message from the command queue by uuid. No-op if already dequeued for execution.",
    ),
  )),
  (eNH = ve(() =>
    H.object({
      cancelled: H.boolean(),
    }).describe(
      "Result of a cancel_async_message operation. cancelled=false means the message was not in the queue (already dequeued or never enqueued).",
    ),
  )),
  (_Bc = ve(() =>
    H.object({
      subtype: H.literal("read_file"),
      path: H.string(),
      max_bytes: H.number().optional(),
      encoding: H.enum(["utf-8", "base64"])
        .optional()
        .describe(
          "How to encode the bytes in `contents`. Defaults to utf-8 (lossy for binary); pass 'base64' to read images.",
        ),
    }).describe(
      "Read a file from the session filesystem for the remote sidebar viewer. Path is resolved against cwd and gated by the same read-permission rules as the Read tool.",
    ),
  )),
  (tNH = ve(() =>
    H.object({
      contents: H.string(),
      absPath: H.string(),
      truncated: H.boolean().optional(),
      encoding: H.literal("base64")
        .optional()
        .describe(
          "Set when the request asked for base64. Absent means utf-8 \u2014 including when an older CLI ignored the request's encoding field.",
        ),
    }).describe("File contents for the remote sidebar viewer."),
  )),
  (bBc = ve(() =>
    H.object({
      subtype: H.literal("seed_read_state"),
      path: H.string(),
      mtime: H.number(),
    }).describe(
      "Seeds the readFileState cache with a path+mtime entry. Use when a prior Read was removed from context so Edit validation would fail despite the client having observed the Read. The mtime lets the CLI detect if the file changed since the seeded Read \u2014 same staleness check as the normal path.",
    ),
  )),
  (SBc = ve(() =>
    H.object({
      subtype: H.literal("hook_callback"),
      callback_id: H.string(),
      input: WNc(),
      tool_use_id: H.string().optional(),
    }).describe("Delivers a hook callback with its input data."),
  )),
  (EBc = ve(() =>
    H.object({
      subtype: H.literal("mcp_message"),
      server_name: H.string(),
      message: URm(),
    }).describe("Sends a JSON-RPC message to a specific MCP server."),
  )),
  (ABc = ve(() =>
    H.object({
      subtype: H.literal("mcp_set_servers"),
      servers: H.record(H.string(), Cmr()),
    }).describe("Replaces the set of dynamically managed MCP servers."),
  )),
  (nNH = ve(() =>
    H.object({
      added: H.array(H.string()),
      removed: H.array(H.string()),
      errors: H.record(H.string(), H.string()),
    }).describe("Result of replacing the set of dynamically managed MCP servers."),
  )),
  (HBc = ve(() =>
    H.object({
      subtype: H.literal("reload_plugins"),
    }).describe("Reloads plugins from disk and returns the refreshed session components."),
  )),
  (rNH = ve(() =>
    H.object({
      commands: H.array(ann()),
      agents: H.array(q7o()),
      plugins: H.array(
        H.object({
          name: H.string(),
          path: H.string(),
          source: H.string().optional(),
        }),
      ),
      mcpServers: H.array(W7o()),
      error_count: H.number(),
    }).describe("Refreshed commands, agents, plugins, and MCP server status after reload."),
  )),
  (TBc = ve(() =>
    H.object({
      subtype: H.literal("reload_skills"),
    }).describe("Reloads skills from disk and returns the refreshed skill list."),
  )),
  (oNH = ve(() =>
    H.object({
      skills: H.array(ann()),
    }).describe("Refreshed skill commands after reload."),
  )),
  (vBc = ve(() =>
    H.object({
      subtype: H.literal("register_repo_root"),
      directory: H.string(),
      reload_claude_md: H.boolean().optional(),
      reload_plugins: H.boolean().optional(),
      reload_skills: H.boolean().optional(),
    }).describe(
      "Add a directory as a working-directory root and optionally reload CLAUDE.md, skills, and plugins. The directory must resolve to a subdirectory of cwd.",
    ),
  )),
  (wBc = ve(() =>
    H.object({
      subtype: H.literal("mcp_reconnect"),
      serverName: H.string(),
    }).describe("Reconnects a disconnected or failed MCP server."),
  )),
  (CBc = ve(() =>
    H.object({
      subtype: H.literal("mcp_toggle"),
      serverName: H.string(),
      enabled: H.boolean(),
    }).describe("Enables or disables an MCP server."),
  )),
  (IBc = ve(() =>
    H.object({
      subtype: H.literal("set_mcp_permission_mode_override"),
      serverName: H.string(),
      mode: ive().nullable(),
    }).describe(
      "@internal Pin (or clear, with mode:null) an MCP server's per-tool permission-mode override. Tighten-only over this channel: only 'default', 'auto', or null are accepted (clampControlChannelOverride); any other mode is rejected without changing state. The override substitutes for the session mode at every per-tool engine decision (effectiveModeForTool) \u2014 and only when the session mode would already auto-allow \u2014 so e.g. a server can be held at 'default' or routed through the auto-mode classifier under global bypassPermissions.",
    ),
  )),
  (xBc = ve(() =>
    H.object({
      subtype: H.literal("stop_task"),
      task_id: H.string(),
    }).describe("Stops a running task."),
  )),
  (kBc = ve(() =>
    H.object({
      subtype: H.literal("background_tasks"),
      tool_use_id: H.string()
        .optional()
        .describe(
          "When set, backgrounds only the task whose originating tool_use block has this id. When omitted, backgrounds all foreground tasks (Ctrl+B semantics).",
        ),
    }).describe(
      'Backgrounds in-flight foreground tasks (Bash commands and subagents). With tool_use_id, targets the single task started by that tool_use block; without it, backgrounds all foreground tasks \u2014 the control-request equivalent of pressing Ctrl+B in the terminal. Each blocking tool call returns immediately with a "running in the background" tool_result and the turn continues; the task keeps running and emits a task_notification when it settles.',
    ),
  )),
  (RBc = ve(() =>
    H.object({
      subtype: H.literal("apply_flag_settings"),
      settings: H.record(H.string(), H.unknown()),
    }).describe(
      "Merges the provided settings into the flag settings layer, updating the active configuration.",
    ),
  )),
  (LBc = ve(() =>
    H.object({
      subtype: H.literal("get_settings"),
    }).describe("Returns the effective merged settings and the raw per-source settings."),
  )),
  (sNH = ve(() =>
    H.object({
      effective: H.record(H.string(), H.unknown()),
      sources: H.array(
        H.object({
          source: H.enum([
            "userSettings",
            "projectSettings",
            "localSettings",
            "flagSettings",
            "policySettings",
          ]),
          settings: H.record(H.string(), H.unknown()),
        }),
      ).describe("Ordered low-to-high priority \u2014 later entries override earlier ones."),
      applied: H.object({
        model: H.string(),
        effort: H.enum(["low", "medium", "high", "xhigh", "max"]).nullable(),
        ultracode: H.boolean()
          .optional()
          .describe(
            "Whether ultracode (xhigh effort plus standing dynamic-workflow orchestration) is active for the session. Set per session via the `ultracode` settings key (--settings or apply_flag_settings).",
          ),
      })
        .optional()
        .describe(
          "Runtime-resolved values after env overrides, session state, and model-specific defaults are applied. Unlike `effective` (disk merge), these reflect what will actually be sent to the API.",
        ),
      errors: H.array(QNc())
        .optional()
        .describe(
          "Settings parse and validation errors. When non-empty, the listed files were skipped during the merge above \u2014 their settings are not reflected in `effective` or `sources`.",
        ),
    }).describe("Effective merged settings plus raw per-source settings in merge order."),
  )),
  (DBc = ve(() =>
    H.object({
      subtype: H.literal("elicitation"),
      mcp_server_name: H.string(),
      message: H.string(),
      mode: H.enum(["form", "url"]).optional(),
      url: H.string().optional(),
      elicitation_id: H.string().optional(),
      requested_schema: H.record(H.string(), H.unknown()).optional(),
      title: H.string()
        .optional()
        .describe(
          "Permission-display title from the MCP server's _meta['anthropic/permissionDisplay']. Mirrors can_use_tool.title so SDK consumers can render elicitation-driven permission prompts with structured headers instead of parsing `message`.",
        ),
      display_name: H.string()
        .optional()
        .describe(
          "Short tool/server label from _meta['anthropic/permissionDisplay'].displayName. Mirrors can_use_tool.display_name.",
        ),
      description: H.string()
        .optional()
        .describe(
          "Permission-display subtitle from _meta['anthropic/permissionDisplay'].description. Mirrors can_use_tool.description.",
        ),
    }).describe("Requests the SDK consumer to handle an MCP elicitation (user input request)."),
  )),
  (PBc = ve(() =>
    H.object({
      action: H.enum(["accept", "decline", "cancel"]),
      content: H.record(H.string(), H.unknown()).optional(),
    }).describe("Response from the SDK consumer for an elicitation request."),
  )),
  (MBc = ve(() =>
    H.object({
      subtype: H.literal("request_user_dialog"),
      dialog_kind: H.string().describe(
        'Identifier for the dialog the host should render. Open string union \u2014 new kinds may be added without bumping the protocol; hosts must answer unrecognized kinds with {behavior: "cancelled"}.',
      ),
      payload: H.record(H.string(), H.unknown()).describe(
        "Dialog-specific data passed to the host renderer. Shape is defined per dialog_kind; the protocol transports it opaquely.",
      ),
      tool_use_id: H.string().optional(),
    }).describe(
      "Requests the SDK consumer to render a tool-driven blocking dialog and return the user choice. Used by tools that previously rendered Ink JSX via setToolJSX with an onDone callback.",
    ),
  )),
  ($Bc = ve(() =>
    H.object({
      behavior: H.enum(["completed", "cancelled"]),
      result: H.unknown()
        .optional()
        .describe(
          "Dialog-specific result payload. Opaque to the protocol; the caller and dialog renderer agree on the shape per dialog_kind.",
        ),
    }).describe("Response from the SDK consumer for a request_user_dialog request."),
  )),
  (OBc = ve(() =>
    H.object({
      subtype: H.literal("submit_feedback"),
      description: H.string(),
      surface: H.enum(["cli", "ccd", "ccr", "ide", "sdk", "cowork"])
        .optional()
        .describe(
          "Where the feedback flow was initiated. Stamped into the POST body and tengu_bug_report_* analytics so the triage pipeline can distinguish CCD/CCR/IDE/Cowork reports from terminal reports landing in the same claude_cli_feedback table. Defaults to 'sdk'.",
        ),
    }).describe(
      "@internal Submits a /feedback report (description + current session transcript + sanitized error log) to api.anthropic.com/api/claude_cli_feedback using the CLI's auth and redaction. Runs the same getFeedbackUnavailableReason() policy checks as the terminal /feedback command \u2014 when feedback is disabled (3P provider, org policy, env kill-switch) the response carries unavailable_reason instead of an error.",
    ),
  )),
  (iNH = ve(() =>
    H.object({
      feedback_id: H.string().nullable(),
      unavailable_reason: H.string()
        .optional()
        .describe(
          "Human-readable reason /feedback is disabled in this session (3P provider, org policy, env var). When set, no submission was attempted.",
        ),
      is_zdr_org: H.boolean().optional(),
      failure_reason: H.string().optional(),
      status_code: H.number().optional(),
      ccshare_url: H.string()
        .optional()
        .describe(
          "Internal share URL for the conversation. Only set in internal builds when the upload succeeded; absent otherwise.",
        ),
    }).describe(
      "@internal Result of a submit_feedback request. feedback_id is set on success; otherwise one of unavailable_reason / failure_reason explains why.",
    ),
  )),
  (NBc = ve(() =>
    H.object({
      subtype: H.literal("oauth_token_refresh"),
    }).describe(
      "@internal Request from the CLI subprocess to the SDK host for a fresh OAuth access token after a 401 with no local refresh token.",
    ),
  )),
  (BBc = ve(() =>
    H.object({
      accessToken: H.string().nullable(),
    }).describe(
      "@internal Fresh OAuth access token returned by the SDK host getOAuthToken callback, or null when the host has no token available.",
    ),
  )),
  (UBc = ve(() =>
    H.object({
      subtype: H.literal("host_auth_token_refresh"),
    }).describe(
      "@internal Request from the CLI subprocess to the SDK host for a fresh provider auth token after a 401 when the host owns the credential (Cowork 3P).",
    ),
  )),
  (FBc = ve(() =>
    H.object({
      authToken: H.string().nullable(),
    }).describe(
      "@internal Fresh provider auth token returned by the SDK host getHostAuthToken callback, or null when the host has no token available.",
    ),
  )),
  (jBc = ve(() =>
    H.object({
      subtype: H.literal("message_rated"),
      messageUuid: H.string().describe("UUID of the assistant message being rated."),
      sentiment: H.enum(["positive", "negative"]).describe(
        "User rating: positive (thumbs up) or negative (thumbs down).",
      ),
      surface: H.enum(["tool_use", "assistant_text"])
        .optional()
        .describe(
          "Which in-conversation surface the rating came from. If omitted, logged as tool_use.",
        ),
      cleared: H.boolean()
        .optional()
        .describe(
          "True when the caller is un-rating a message (clicking the same control a second time).",
        ),
    }).describe(
      "@internal Records a per-message thumbs up/down rating. Logs tengu_message_rated with the same shape as the in-conversation rating controls so Desktop / IDE callers can surface their own native thumbs UI.",
    ),
  )),
  (aNH = ve(() => H.object({}).describe("@internal Empty response for message_rated."))),
  (lNH = ve(() =>
    H.union([rBc(), SBc(), EBc(), NBc(), UBc(), DBc(), MBc()]).describe(
      "Control requests the agent loop originates and needs a reply to \u2014 the loop\u2192client RPC slice of SDKControlRequestInner. The remaining members are client\u2192loop commands (set/get/mcp/auth/etc).",
    ),
  )),
  (cNH = ve(() =>
    H.union([
      nBc(),
      tBc(),
      oBc(),
      sBc(),
      iBc(),
      aBc(),
      lBc(),
      cBc(),
      dBc(),
      pBc(),
      fBc(),
      mBc(),
      gBc(),
      uBc(),
      hBc(),
      yBc(),
      _Bc(),
      bBc(),
      ABc(),
      vBc(),
      HBc(),
      TBc(),
      wBc(),
      CBc(),
      IBc(),
      jBc(),
      xBc(),
      kBc(),
      RBc(),
      LBc(),
      OBc(),
    ]).describe(
      "Control requests a client sends to drive the loop \u2014 the client\u2192loop command slice of SDKControlRequestInner. The remaining members are loop\u2192client RPCs that block on a reply (see AgentOriginatedControlRequest).",
    ),
  )),
  (qRm = ve(() =>
    H.union([
      nBc(),
      rBc(),
      tBc(),
      oBc(),
      sBc(),
      iBc(),
      aBc(),
      lBc(),
      cBc(),
      dBc(),
      pBc(),
      fBc(),
      mBc(),
      gBc(),
      uBc(),
      SBc(),
      EBc(),
      hBc(),
      yBc(),
      _Bc(),
      bBc(),
      ABc(),
      vBc(),
      HBc(),
      TBc(),
      wBc(),
      CBc(),
      IBc(),
      jBc(),
      NBc(),
      UBc(),
      xBc(),
      kBc(),
      RBc(),
      LBc(),
      DBc(),
      MBc(),
      OBc(),
    ]),
  )),
  (xmr = ve(() =>
    H.object({
      type: H.literal("control_request"),
      request_id: H.string(),
      request: qRm(),
    }),
  )),
  (GBc = ve(() =>
    H.array(H.lazy(() => xmr()))
      .optional()
      .describe(
        "Permission requests still awaiting a response. Sent on the `initialize` response so a client joining an already-initialized session learns about in-flight prompts.",
      ),
  )),
  (WBc = ve(() =>
    H.array(H.lazy(() => xmr()))
      .optional()
      .describe(
        "request_user_dialog requests still awaiting a response. Sent on the `initialize` response (sibling of pending_permission_requests) so a client joining an already-initialized session can re-arm in-flight dialogs. Receivers must tolerate the same request_id also arriving as a live or replayed control_request frame and render it once.",
      ),
  )),
  (VRm = ve(() =>
    H.object({
      subtype: H.literal("success"),
      request_id: H.string(),
      response: H.record(H.string(), H.unknown()).optional(),
      pending_permission_requests: GBc(),
      pending_user_dialog_requests: WBc(),
    }),
  )),
  (zRm = ve(() =>
    H.object({
      subtype: H.literal("error"),
      request_id: H.string(),
      error: H.string(),
      pending_permission_requests: GBc(),
      pending_user_dialog_requests: WBc(),
    }),
  )),
  (qBc = ve(() =>
    H.object({
      type: H.literal("control_response"),
      response: H.union([VRm(), zRm()]),
    }),
  )),
  (KRm = ve(() =>
    H.object({
      type: H.literal("control_cancel_request"),
      request_id: H.string(),
    }).describe("Cancels a currently open control request."),
  )),
  (VBc = ve(() =>
    H.object({
      type: H.literal("keep_alive"),
    }).describe("Keep-alive message to maintain WebSocket connection."),
  )),
  (YRm = ve(() =>
    H.object({
      type: H.literal("update_environment_variables"),
      variables: H.record(H.string(), H.string()),
      request_id: H.string().optional(),
    }).describe("Updates environment variables at runtime."),
  )),
  (uNH = ve(() =>
    H.union([Z7o(), X7o(), J7o(), Q7o()]).describe(
      "Observational messages the agent loop emits \u2014 fire-and-forget, no reply expected. The remaining StdoutMessage members are control-protocol traffic (requests the loop originates and needs a reply to, responses to client-originated requests, keep-alives). This sub-union is the target for QueryEvent convergence so a Transport-shaped REPL can consume events without filtering control noise.",
    ),
  )),
  (zBc = ve(() => H.union([Z7o(), X7o(), J7o(), Q7o(), qBc(), xmr(), KRm(), VBc()]))),
  (dNH = ve(() => H.union([Y7o(), YNc(), xmr(), qBc(), VBc(), YRm()]))));
function eXo() {
  Tge(!0);
}
function YBc(e) {
  switch (e.type) {
    case "user":
    case "bash_command":
      return !0;
    case "control_request":
      return XRm.has(e.request.subtype);
    default:
      return !1;
  }
}
function XBc(e) {
  return JRm.has(e.request.subtype);
}
var XRm, JRm;
