// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iws
// matched 2.1.88 source: src/schemas/hooks.ts
// class=modified  jaccard=0.3959  score=0.4974  fileCov=0.6598
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module iws]
sws = ["bash", "powershell"];
function buildHookSchemas() {
  let e = H.object({
      type: H.literal("command").describe("Shell command hook type"),
      command: H.string().describe("Shell command to execute"),
      args: H.array(H.string())
        .optional()
        .describe(
          "Argument list for exec form. When present, `command` is resolved as " +
            "an executable and spawned directly with these arguments \u2014 no shell. " +
            "Path placeholders like ${CLAUDE_PLUGIN_ROOT} are substituted per-element as plain strings, so paths with quotes, $, or backticks never reach a shell parser. When absent, `command` runs through a shell (bash on POSIX, PowerShell on Windows without Git Bash).",
        ),
      if: KRt(),
      shell: H.enum(sws)
        .optional()
        .describe(
          "Shell interpreter. 'bash' uses your $SHELL (bash/zsh/sh); 'powershell' uses pwsh. Defaults to bash (powershell on Windows without Git Bash).",
        ),
      timeout: H.number()
        .positive()
        .optional()
        .describe("Timeout in seconds for this specific command"),
      statusMessage: H.string()
        .optional()
        .describe("Custom status message to display in spinner while hook runs"),
      once: H.boolean()
        .optional()
        .describe("If true, hook runs once and is removed after execution"),
      async: H.boolean().optional().describe("If true, hook runs in background without blocking"),
      asyncRewake: H.boolean()
        .optional()
        .describe(
          "If true, hook runs in background and wakes the model on exit code 2 (blocking error). Implies async.",
        ),
      rewakeMessage: H.string()
        .min(1)
        .optional()
        .describe(
          "@internal Custom prefix for the system-reminder shown to the model when an asyncRewake hook exits with code 2. The hook output is appended after this prefix.",
        ),
      rewakeSummary: H.string()
        .min(1)
        .optional()
        .describe(
          '@internal One-line summary shown to the user in the terminal when an asyncRewake hook exits with code 2. Defaults to "Stop hook feedback".',
        ),
    }),
    t = H.object({
      type: H.literal("prompt").describe("LLM prompt hook type"),
      prompt: H.string().describe(
        "Prompt to evaluate with LLM. Use $ARGUMENTS placeholder for hook input JSON.",
      ),
      if: KRt(),
      timeout: H.number()
        .positive()
        .optional()
        .describe("Timeout in seconds for this specific prompt evaluation"),
      model: H.string()
        .optional()
        .describe(
          'Model to use for this prompt hook (e.g., "claude-sonnet-4-6"). If not specified, uses the default small fast model.',
        ),
      continueOnBlock: H.boolean()
        .optional()
        .describe(
          `Sets the continue value for the decision:"block" produced when ok is false. Default false (turn ends). Whether continue:true lets the turn proceed depends on the event's decision:"block" semantics. On PostToolUse, the reason is fed back to Claude and the turn continues.`,
        ),
      statusMessage: H.string()
        .optional()
        .describe("Custom status message to display in spinner while hook runs"),
      once: H.boolean()
        .optional()
        .describe("If true, hook runs once and is removed after execution"),
    }),
    n = H.object({
      type: H.literal("mcp_tool").describe("MCP tool hook type"),
      server: H.string().describe("Name of an already-configured MCP server to invoke"),
      tool: H.string().describe("Name of the tool on that server to call"),
      input: H.record(H.string(), H.unknown())
        .optional()
        .describe(
          'Arguments passed to the MCP tool. String values support ${path} interpolation from the hook input JSON (e.g. "${tool_input.file_path}").',
        ),
      if: KRt(),
      timeout: H.number()
        .positive()
        .optional()
        .describe("Timeout in seconds for this specific tool call"),
      statusMessage: H.string()
        .optional()
        .describe("Custom status message to display in spinner while hook runs"),
      once: H.boolean()
        .optional()
        .describe("If true, hook runs once and is removed after execution"),
    }),
    r = H.object({
      type: H.literal("http").describe("HTTP hook type"),
      url: H.string().url().describe("URL to POST the hook input JSON to"),
      if: KRt(),
      timeout: H.number()
        .positive()
        .optional()
        .describe("Timeout in seconds for this specific request"),
      headers: H.record(H.string(), H.string())
        .optional()
        .describe(
          'Additional headers to include in the request. Values may reference environment variables using $VAR_NAME or ${VAR_NAME} syntax (e.g., "Authorization": "Bearer $MY_TOKEN"). Only variables listed in allowedEnvVars will be interpolated.',
        ),
      allowedEnvVars: H.array(H.string())
        .optional()
        .describe(
          "Explicit list of environment variable names that may be interpolated in header values. Only variables listed here will be resolved; all other $VAR references are left as empty strings. Required for env var interpolation to work.",
        ),
      statusMessage: H.string()
        .optional()
        .describe("Custom status message to display in spinner while hook runs"),
      once: H.boolean()
        .optional()
        .describe("If true, hook runs once and is removed after execution"),
    }),
    o = H.object({
      type: H.literal("agent").describe("Agentic verifier hook type"),
      prompt: H.string().describe(
        'Prompt describing what to verify (e.g. "Verify that unit tests ran and passed."). Use $ARGUMENTS placeholder for hook input JSON.',
      ),
      if: KRt(),
      timeout: H.number()
        .positive()
        .optional()
        .describe("Timeout in seconds for agent execution (default 60)"),
      model: H.string()
        .optional()
        .describe(
          'Model to use for this agent hook (e.g., "claude-sonnet-4-6"). If not specified, uses Haiku.',
        ),
      statusMessage: H.string()
        .optional()
        .describe("Custom status message to display in spinner while hook runs"),
      once: H.boolean()
        .optional()
        .describe("If true, hook runs once and is removed after execution"),
    });
  return {
    BashCommandHookSchema: e,
    PromptHookSchema: t,
    HttpHookSchema: r,
    AgentHookSchema: o,
    McpToolHookSchema: n,
  };
}
var KRt, aws, lws, IG;
