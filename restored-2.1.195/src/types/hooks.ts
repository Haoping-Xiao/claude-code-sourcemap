// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module D5o
// matched 2.1.88 source: src/types/hooks.ts
// class=modified  jaccard=0.4375  score=0.6251  fileCov=0.5931
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module D5o] deps: Xr, qee, H7n
((Mem = ve(() => H.enum(["allow", "deny", "ask", "defer"]))),
  ($em = ve(() =>
    H.object({
      continue: H.boolean()
        .describe("Whether Claude should continue after hook (default: true)")
        .optional(),
      suppressOutput: H.boolean()
        .describe("Hide stdout from transcript (default: false)")
        .optional(),
      stopReason: H.string().describe("Message shown when continue is false").optional(),
      decision: H.enum(["approve", "block"]).optional(),
      reason: H.string().describe("Explanation for the decision").optional(),
      systemMessage: H.string().describe("Warning message shown to the user").optional(),
      terminalSequence: H.string()
        .describe(
          "A terminal escape sequence (e.g. OSC 9 / OSC 777 desktop-notification) for Claude Code to emit on your behalf. Only notification/title OSCs (0, 1, 2, 9, 99, 777) and BEL are permitted; anything else is dropped.",
        )
        .optional(),
      hookSpecificOutput: H.union([
        H.object({
          hookEventName: H.literal("PreToolUse"),
          permissionDecision: Mem().optional(),
          permissionDecisionReason: H.string().optional(),
          updatedInput: H.record(H.string(), H.unknown()).optional(),
          additionalContext: H.string().optional(),
        }),
        H.object({
          hookEventName: H.literal("UserPromptSubmit"),
          additionalContext: H.string().optional(),
          sessionTitle: H.string().describe("Set the session title").optional(),
          suppressOriginalPrompt: H.boolean()
            .describe('When decision is "block", omit the original prompt from the block message')
            .optional(),
        }),
        H.object({
          hookEventName: H.literal("UserPromptExpansion"),
          additionalContext: H.string().optional(),
        }),
        H.object({
          hookEventName: H.literal("SessionStart"),
          additionalContext: H.string().optional(),
          initialUserMessage: H.string().optional(),
          sessionTitle: H.string().describe("Set the session title").optional(),
          watchPaths: H.array(H.string())
            .describe("Absolute paths to watch for FileChanged hooks")
            .optional(),
          reloadSkills: H.boolean()
            .describe(
              "Re-scan skill and command directories after SessionStart hooks complete, so skills installed by the hook are available in the same session",
            )
            .optional(),
        }),
        H.object({
          hookEventName: H.literal("Setup"),
          additionalContext: H.string().optional(),
        }),
        H.object({
          hookEventName: H.literal("SubagentStart"),
          additionalContext: H.string().optional(),
        }),
        H.object({
          hookEventName: H.literal("PostToolUse"),
          additionalContext: H.string().optional(),
          updatedToolOutput: H.unknown()
            .describe("Replaces the tool output before it is sent to the model")
            .optional(),
          updatedMCPToolOutput: H.unknown()
            .describe(
              "Replaces the output for MCP tools only. Prefer updatedToolOutput, which works for all tools",
            )
            .optional(),
        }),
        H.object({
          hookEventName: H.literal("PostToolUseFailure"),
          additionalContext: H.string().optional(),
        }),
        H.object({
          hookEventName: H.literal("PostToolBatch"),
          additionalContext: H.string().optional(),
        }),
        H.object({
          hookEventName: H.literal("Stop"),
          additionalContext: H.string().optional(),
        }),
        H.object({
          hookEventName: H.literal("SubagentStop"),
          additionalContext: H.string().optional(),
        }),
        H.object({
          hookEventName: H.literal("PermissionDenied"),
          retry: H.boolean().optional(),
        }),
        H.object({
          hookEventName: H.literal("Notification"),
          additionalContext: H.string().optional(),
        }),
        H.object({
          hookEventName: H.literal("PermissionRequest"),
          decision: H.union([
            H.object({
              behavior: H.literal("allow"),
              updatedInput: H.record(H.string(), H.unknown()).optional(),
              updatedPermissions: H.array(nbt()).optional(),
            }),
            H.object({
              behavior: H.literal("deny"),
              message: H.string().optional(),
              interrupt: H.boolean().optional(),
            }),
          ]),
        }),
        H.object({
          hookEventName: H.literal("Elicitation"),
          action: H.enum(["accept", "decline", "cancel"]).optional(),
          content: H.record(H.string(), H.unknown()).optional(),
        }),
        H.object({
          hookEventName: H.literal("ElicitationResult"),
          action: H.enum(["accept", "decline", "cancel"]).optional(),
          content: H.record(H.string(), H.unknown()).optional(),
        }),
        H.object({
          hookEventName: H.literal("CwdChanged"),
          watchPaths: H.array(H.string())
            .describe("Absolute paths to watch for FileChanged hooks")
            .optional(),
        }),
        H.object({
          hookEventName: H.literal("FileChanged"),
          watchPaths: H.array(H.string())
            .describe("Absolute paths to watch for FileChanged hooks")
            .optional(),
        }),
        H.object({
          hookEventName: H.literal("WorktreeCreate"),
          worktreePath: H.string(),
        }),
        H.object({
          hookEventName: H.literal("MessageDisplay"),
          displayContent: H.string()
            .describe(
              "Text displayed in place of the delta. Omit (or return the delta unchanged) to display the original.",
            )
            .optional(),
        }),
      ]).optional(),
    }),
  )),
  (XHt = ve(() => {
    let e = H.object({
      async: H.literal(true),
      asyncTimeout: H.number().optional(),
    });
    return H.union([e, $em()]);
  })));
function klr(e, t) {
  return Rpt(e, t);
}
function aic() {
  return {
    ...Xoo,
    alwaysLoad: true,
    inputSchema: iZt(),
    inputJSONSchema: {
      type: "object",
      properties: {
        ok: {
          type: "boolean",
          description: "Whether the condition was met",
        },
        reason: {
          type: "string",
          description: "Reason, if the condition was not met",
        },
      },
      required: ["ok"],
      additionalProperties: false,
    },
    async prompt() {
      return "Use this tool to return your verification result. You MUST call this tool exactly once at the end of your response.";
    },
  };
}
var iZt;
