// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fKl
// matched 2.1.88 source: src/utils/hooks/hooksConfigManager.ts
// class=modified  jaccard=0.6733  score=0.7425  fileCov=0.8784
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var fKl = E(() => {
  Qi();
  ft();
  WAt();
  Dsr = Cn(
    function (e) {
      return {
        PreToolUse: {
          summary: "Before tool execution",
          description: `Input to command is JSON of tool call arguments.
Exit code 0 - stdout/stderr not shown
Exit code 2 - show stderr to model and block tool call
Other exit codes - show stderr to user only but continue with tool call`,
          matcherMetadata: {
            fieldToMatch: "tool_name",
            values: e,
          },
        },
        PostToolUse: {
          summary: "After tool execution",
          description: `Input to command is JSON with fields "inputs" (tool call arguments) and "response" (tool call response).
Exit code 0 - stdout shown in transcript mode (ctrl+o)
Exit code 2 - show stderr to model immediately
Other exit codes - show stderr to user only`,
          matcherMetadata: {
            fieldToMatch: "tool_name",
            values: e,
          },
        },
        PostToolUseFailure: {
          summary: "After tool execution fails",
          description: `Input to command is JSON with tool_name, tool_input, tool_use_id, error, error_type, is_interrupt, and is_timeout.
Exit code 0 - stdout shown in transcript mode (ctrl+o)
Exit code 2 - show stderr to model immediately
Other exit codes - show stderr to user only`,
          matcherMetadata: {
            fieldToMatch: "tool_name",
            values: e,
          },
        },
        PostToolBatch: {
          summary: "After a batch of tool calls resolves",
          description: `Fires once after every tool call in a batch has resolved, before the next model request. Input includes tool_calls (array of {tool_name, tool_input, tool_use_id, tool_response}).
Return additionalContext via hookSpecificOutput to inject context once for the whole batch.
Exit code 2 - stop the agentic loop (stderr shown to user only)
Other exit codes - show stderr to user only`,
        },
        PermissionDenied: {
          summary: "After auto mode classifier denies a tool call",
          description: `Input to command is JSON with tool_name, tool_input, tool_use_id, and reason.
Return {"hookSpecificOutput":{"hookEventName":"PermissionDenied","retry":true}} to tell the model it may retry.
Exit code 0 - stdout shown in transcript mode (ctrl+o)
Other exit codes - show stderr to user only`,
          matcherMetadata: {
            fieldToMatch: "tool_name",
            values: e,
          },
        },
        Notification: {
          summary: "When notifications are sent",
          description: `Input to command is JSON with notification message and type.
Exit code 0 - stdout/stderr not shown
Other exit codes - show stderr to user only`,
          matcherMetadata: {
            fieldToMatch: "notification_type",
            values: [
              "permission_prompt",
              "idle_prompt",
              "auth_success",
              "elicitation_dialog",
              "elicitation_complete",
              "elicitation_response",
            ],
          },
        },
        UserPromptSubmit: {
          summary: "When the user submits a prompt",
          description: `Input to command is JSON with original user prompt text.
Exit code 0 - stdout shown to Claude
Exit code 2 - block processing, erase original prompt, and show stderr to user only
Other exit codes - show stderr to user only`,
        },
        UserPromptExpansion: {
          summary: "When a user-typed slash command expands into a prompt",
          description: `Input to command is JSON with expansion_type, command_name, command_args, command_source, and original prompt.
Exit code 0 - stdout shown to Claude
Exit code 2 - block expansion and show stderr to user only
Other exit codes - show stderr to user only`,
          matcherMetadata: {
            fieldToMatch: "command_name",
            values: [],
          },
        },
        SessionStart: {
          summary: "When a new session is started",
          description: `Input to command is JSON with session start source.
Exit code 0 - stdout shown to Claude
Blocking errors are ignored
Other exit codes - show stderr to user only`,
          matcherMetadata: {
            fieldToMatch: "source",
            values: ["startup", "resume", "clear", "compact"],
          },
        },
        Stop: {
          summary: "Right before Claude concludes its response",
          description: `Exit code 0 - stdout/stderr not shown
Exit code 2 - show stderr to model and continue conversation
Other exit codes - show stderr to user only`,
        },
        StopFailure: {
          summary: "When the turn ends due to an API error",
          description:
            "Fires instead of Stop when an API error (rate limit, auth failure, etc.) ended the turn. Fire-and-forget \u2014 hook output and exit codes are ignored.",
          matcherMetadata: {
            fieldToMatch: "error",
            values: [
              "rate_limit",
              "overloaded",
              "authentication_failed",
              "oauth_org_not_allowed",
              "billing_error",
              "invalid_request",
              "model_not_found",
              "server_error",
              "max_output_tokens",
              "unknown",
            ],
          },
        },
        SubagentStart: {
          summary: "When a subagent (Agent tool call) is started",
          description: `Input to command is JSON with agent_id and agent_type.
Exit code 0 - stdout shown to subagent
Blocking errors are ignored
Other exit codes - show stderr to user only`,
          matcherMetadata: {
            fieldToMatch: "agent_type",
            values: [],
          },
        },
        SubagentStop: {
          summary: "Right before a subagent (Agent tool call) concludes its response",
          description: `Input to command is JSON with agent_id, agent_type, and agent_transcript_path.
Exit code 0 - stdout/stderr not shown
Exit code 2 - show stderr to subagent and continue having it run
Other exit codes - show stderr to user only`,
          matcherMetadata: {
            fieldToMatch: "agent_type",
            values: [],
          },
        },
        PreCompact: {
          summary: "Before conversation compaction",
          description: `Input to command is JSON with compaction details.
Exit code 0 - stdout appended as custom compact instructions
Exit code 2 - block compaction
Other exit codes - show stderr to user only but continue with compaction`,
          matcherMetadata: {
            fieldToMatch: "trigger",
            values: ["manual", "auto"],
          },
        },
        PostCompact: {
          summary: "After conversation compaction",
          description: `Input to command is JSON with compaction details and the summary.
Exit code 0 - stdout shown to user
Other exit codes - show stderr to user only`,
          matcherMetadata: {
            fieldToMatch: "trigger",
            values: ["manual", "auto"],
          },
        },
        SessionEnd: {
          summary: "When a session is ending",
          description: `Input to command is JSON with session end reason.
Exit code 0 - command completes successfully
Other exit codes - show stderr to user only`,
          matcherMetadata: {
            fieldToMatch: "reason",
            values: ["clear", "logout", "prompt_input_exit", "other"],
          },
        },
        PermissionRequest: {
          summary: "When a permission dialog is displayed",
          description: `Input to command is JSON with tool_name, tool_input, and tool_use_id.
Output JSON with hookSpecificOutput containing decision to allow or deny.
Exit code 0 - use hook decision if provided
Other exit codes - show stderr to user only`,
          matcherMetadata: {
            fieldToMatch: "tool_name",
            values: e,
          },
        },
        Setup: {
          summary: "Repo setup hooks for init and maintenance",
          description: `Input to command is JSON with trigger (init or maintenance).
Exit code 0 - stdout shown to Claude
Blocking errors are ignored
Other exit codes - show stderr to user only`,
          matcherMetadata: {
            fieldToMatch: "trigger",
            values: ["init", "maintenance"],
          },
        },
        TeammateIdle: {
          summary: "When a teammate is about to go idle",
          description: `Input to command is JSON with teammate_name and team_name.
Exit code 0 - stdout/stderr not shown
Exit code 2 - show stderr to teammate and prevent idle (teammate continues working)
Other exit codes - show stderr to user only`,
        },
        TaskCreated: {
          summary: "When a task is being created",
          description: `Input to command is JSON with task_id, task_subject, task_description, teammate_name, and team_name.
Exit code 0 - stdout/stderr not shown
Exit code 2 - show stderr to model and prevent task creation
Other exit codes - show stderr to user only`,
        },
        TaskCompleted: {
          summary: "When a task is being marked as completed",
          description: `Input to command is JSON with task_id, task_subject, task_description, teammate_name, and team_name.
Exit code 0 - stdout/stderr not shown
Exit code 2 - show stderr to model and prevent task completion
Other exit codes - show stderr to user only`,
        },
        Elicitation: {
          summary: "When an MCP server requests user input (elicitation)",
          description: `Input to command is JSON with mcp_server_name, message, and requested_schema.
Output JSON with hookSpecificOutput containing action (accept/decline/cancel) and optional content.
Exit code 0 - use hook response if provided
Exit code 2 - deny the elicitation
Other exit codes - show stderr to user only`,
          matcherMetadata: {
            fieldToMatch: "mcp_server_name",
            values: [],
          },
        },
        ElicitationResult: {
          summary: "After a user responds to an MCP elicitation",
          description: `Input to command is JSON with mcp_server_name, action, content, mode, and elicitation_id.
Output JSON with hookSpecificOutput containing optional action and content to override the response.
Exit code 0 - use hook response if provided
Exit code 2 - block the response (action becomes decline)
Other exit codes - show stderr to user only`,
          matcherMetadata: {
            fieldToMatch: "mcp_server_name",
            values: [],
          },
        },
        ConfigChange: {
          summary: "When configuration files change during a session",
          description: `Input to command is JSON with source (user_settings, project_settings, local_settings, policy_settings, skills) and file_path.
Exit code 0 - allow the change
Exit code 2 - block the change from being applied to the session
Other exit codes - show stderr to user only`,
          matcherMetadata: {
            fieldToMatch: "source",
            values: [
              "user_settings",
              "project_settings",
              "local_settings",
              "policy_settings",
              "skills",
            ],
          },
        },
        InstructionsLoaded: {
          summary: "When an instruction file (CLAUDE.md or rule) is loaded",
          description: `Input to command is JSON with file_path, memory_type (User, Project, Local, Managed), load_reason (session_start, nested_traversal, path_glob_match, include, compact), globs (optional \u2014 the paths: frontmatter patterns that matched), trigger_file_path (optional \u2014 the file Claude touched that caused the load), and parent_file_path (optional \u2014 the file that @-included this one).
Exit code 0 - command completes successfully
Other exit codes - show stderr to user only
This hook is observability-only and does not support blocking.`,
          matcherMetadata: {
            fieldToMatch: "load_reason",
            values: ["session_start", "nested_traversal", "path_glob_match", "include", "compact"],
          },
        },
        WorktreeCreate: {
          summary: "Create an isolated worktree for VCS-agnostic isolation",
          description: `Input to command is JSON with name (suggested worktree slug).
Stdout should contain the absolute path to the created worktree directory.
Exit code 0 - worktree created successfully
Other exit codes - worktree creation failed`,
        },
        WorktreeRemove: {
          summary: "Remove a previously created worktree",
          description: `Input to command is JSON with worktree_path (absolute path to worktree).
Exit code 0 - worktree removed successfully
Other exit codes - show stderr to user only`,
        },
        CwdChanged: {
          summary: "After the working directory changes",
          description: `Input to command is JSON with old_cwd and new_cwd.
CLAUDE_ENV_FILE is set \u2014 write bash exports there to apply env to subsequent BashTool commands.
Hook output can include hookSpecificOutput.watchPaths (array of absolute paths) to register with the FileChanged watcher.
Exit code 0 - command completes successfully
Other exit codes - show stderr to user only`,
        },
        FileChanged: {
          summary: "When a watched file changes",
          description: `Input to command is JSON with file_path and event (change, add, unlink).
CLAUDE_ENV_FILE is set \u2014 write bash exports there to apply env to subsequent BashTool commands.
The matcher field specifies filenames to watch in the current directory (e.g. ".envrc|.env").
Hook output can include hookSpecificOutput.watchPaths (array of absolute paths) to dynamically update the watch list.
Exit code 0 - command completes successfully
Other exit codes - show stderr to user only`,
        },
        MessageDisplay: {
          summary: "While assistant message text is displayed",
          description: `Input to command is JSON with turn_id, message_id, index, final, and delta (the newly completed lines).
Output JSON with hookSpecificOutput containing displayContent to replace the delta on screen.
Display-only: the stored message and what the model sees are untouched.
Exit code 0 - use hook response if provided
Other exit codes - display the original delta`,
        },
      };
    },
    (e) => e.slice().sort().join(","),
  );
});
function gKl(e) {
  let t = mKl.c(26),
    {
      hookEventMetadata: n,
      hooksByEvent: r,
      totalHooksCount: o,
      restrictedByPolicy: s,
      suspendedBySafeMode: i,
      onSelectEvent: a,
      onCancel: l,
    } = e,
    c;
  if (t[0] !== o) ((c = bn(o, "hook")), (t[0] = o), (t[1] = c));
  else c = t[1];
  let u = `${o} ${c} configured`,
    d;
  if (t[2] !== i)
    ((d =
      i &&
      KN.jsxs(U, {
        flexDirection: "column",
        children: [
          KN.jsxs(w, {
            color: "warning",
            children: [nt.info, " Safe mode"],
          }),
          KN.jsxs(w, {
            dimColor: !0,
            children: [
              "Hooks from settings files are suspended and will not run this session",
              i.managedHooksStillApply ? " (managed policy hooks still apply)" : "",
              "; session hooks created by /goal, agents, and skills still run. Settings edits save but don't load until safe mode is off.",
              " ",
              Cx(i.exitHint),
              " to re-enable.",
            ],
          }),
        ],
      })),
      (t[2] = i),
      (t[3] = d));
  else d = t[3];
  let p;
  if (t[4] !== s)
    ((p =
      s &&
      KN.jsxs(U, {
        flexDirection: "column",
        children: [
          KN.jsxs(w, {
            color: "suggestion",
            children: [nt.info, " Hooks Restricted by Policy"],
          }),
          KN.jsx(w, {
            dimColor: !0,
            children:
              "Only hooks from managed settings can run. User-defined hooks from ~/.claude/settings.json, .claude/settings.json, and .claude/settings.local.json are blocked.",
          }),
        ],
      })),
      (t[4] = s),
      (t[5] = p));
  else p = t[5];
  let f;
  if (t[6] === Symbol.for("react.memo_cache_sentinel"))
    ((f = KN.jsx(U, {
      flexDirection: "column",
      children: KN.jsxs(w, {
        dimColor: !0,
        children: [
          nt.info,
          " This menu is read-only. To add or modify hooks, edit settings.json directly or ask Claude.",
          " ",
          KN.jsx(xs, {
            url: "https://code.claude.com/docs/en/hooks",
            children: "Learn more",
          }),
        ],
      }),
    })),
      (t[6] = f));
  else f = t[6];
  let m;
  if (t[7] !== a)
    ((m = (S) => {
      a(S);
    }),
      (t[7] = a),
      (t[8] = m));
  else m = t[8];
  let g;
  if (t[9] !== n) ((g = Object.entries(n)), (t[9] = n), (t[10] = g));
  else g = t[10];
  let h;
  if (t[11] !== r || t[12] !== g)
    ((h = g.map((S) => {
      let [A, v] = S,
        C = r[A] || 0;
      return {
        label:
          C > 0
            ? KN.jsxs(w, {
                children: [
                  A,
                  " ",
                  KN.jsxs(w, {
                    color: "suggestion",
                    children: ["(", C, ")"],
                  }),
                ],
              })
            : A,
        value: A,
        description: v.summary,
      };
    })),
      (t[11] = r),
      (t[12] = g),
      (t[13] = h));
  else h = t[13];
  let y;
  if (t[14] !== l || t[15] !== m || t[16] !== h)
    ((y = KN.jsx(U, {
      flexDirection: "column",
      children: KN.jsx(Sr, {
        onChange: m,
        onCancel: l,
        options: h,
      }),
    })),
      (t[14] = l),
      (t[15] = m),
      (t[16] = h),
      (t[17] = y));
  else y = t[17];
  let b;
  if (t[18] !== d || t[19] !== p || t[20] !== y)
    ((b = KN.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [d, p, f, y],
    })),
      (t[18] = d),
      (t[19] = p),
      (t[20] = y),
      (t[21] = b));
  else b = t[21];
  let _;
  if (t[22] !== l || t[23] !== u || t[24] !== b)
    ((_ = KN.jsx(zn, {
      title: "Hooks",
      subtitle: u,
      onCancel: l,
      children: b,
    })),
      (t[22] = l),
      (t[23] = u),
      (t[24] = b),
      (t[25] = _));
  else _ = t[25];
  return _;
}
var mKl, KN;
