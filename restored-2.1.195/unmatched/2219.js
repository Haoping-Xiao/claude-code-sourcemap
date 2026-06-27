// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ANt
// matched 2.1.88 source: src/skills/loadSkillsDir.ts
// class=new  jaccard=0.035  score=0.0792  fileCov=0.059
// note: nearest: src/skills/loadSkillsDir.ts (0.035); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ANt = E(() => {
  Xr();
  kt();
  Yx = dKr, Wst = dKr, NOd = ve(() => H.object({
    name: Yx().optional().describe("Display name. Defaults to the filename without extension."),
    description: Yx().optional().describe("One-line summary shown in listings and the Skill tool."),
    model: Yx().optional().describe("Model override (`haiku`, `sonnet`, `opus`, `fable`, or a full ID). Use `inherit` to match the parent conversation."),
    "allowed-tools": Eke().optional().describe("Tools available to the model while this file is active. Comma-separated string or YAML list."),
    "disallowed-tools": Eke().optional().describe("Tools removed from the model while this file is active. Comma-separated string or YAML list. Cleared when the user sends the next message."),
    disallowedTools: Eke().optional().describe("Canonical (normalized) alias of `disallowed-tools`."),
    "argument-hint": Yx().optional().describe("Placeholder text shown after the slash command name."),
    arguments: Eke().optional().describe("@internal \u2014 typed variant of argument-hint; argument-hint is the documented form"),
    "disable-model-invocation": Wst().optional().describe("If true, the model cannot invoke this via the Skill tool; only users can type the slash command."),
    "user-invocable": Wst().optional().describe("If false, hides the slash command from users; only the model can invoke it via the Skill tool."),
    effort: Yx().optional().describe("Thinking effort for the model: `low`, `medium`, `high`, `max`, or an integer."),
    shell: Yx().optional().describe("Shell for `!`-command blocks: `bash` or `powershell`. Defaults to bash regardless of platform."),
    version: Yx().optional().describe("@internal \u2014 bookkeeping, not surfaced to users")
  })), pKr = ve(() => NOd().extend({
    when_to_use: Yx().optional().describe("Guidance for when the model should reach for this skill. Becomes part of the tool description."),
    paths: Eke().optional().describe("Glob patterns this skill applies to. The skill only loads when the model touches matching files."),
    hooks: H.unknown().optional().describe("Hooks registered while this skill is active. Same shape as settings.json `hooks`."),
    context: H.enum(["inline", "fork"]).nullable().optional().describe("Where the skill runs: `inline` expands into the current conversation; `fork` spawns a subagent."),
    agent: Yx().optional().describe("Agent type to spawn when `context: fork`."),
    fallback: Wst().optional().describe("@internal \u2014 interim defense-in-depth for thin-pointer skill stubs. If true, this skill yields to a same-suffix plugin or MCP skill (`<plugin>:<name>` / `<server>:<name>`) when one is loaded. Stubs carrying this should be deleted once their canonical plugin/MCP skill ships, not maintained."),
    created_by: Yx().optional().describe("@internal \u2014 provenance marker (e.g. dream-proposal)"),
    improved_by: Yx().optional().describe("@internal \u2014 provenance marker (e.g. dream-proposal)"),
    mcpServers: H.unknown().optional().describe("@internal"),
    lspServers: H.unknown().optional().describe("@internal"),
    agents: H.unknown().optional().describe("@internal"),
    outputStyles: H.unknown().optional().describe("@internal"),
    themes: H.unknown().optional().describe("@internal"),
    workflows: H.unknown().optional().describe("@internal"),
    channels: H.unknown().optional().describe("@internal"),
    monitors: H.unknown().optional().describe("@internal"),
    settings: H.unknown().optional().describe("@internal"),
    userConfig: H.unknown().optional().describe("@internal"),
    defaultEnabled: H.unknown().optional().describe("@internal"),
    experimental: H.unknown().optional().describe("@internal"),
    dependencies: H.unknown().optional().describe("@internal"),
    metadata: H.unknown().optional().describe("@internal"),
    displayName: H.unknown().optional().describe("@internal"),
    author: H.unknown().optional().describe("@internal"),
    homepage: H.unknown().optional().describe("@internal"),
    repository: H.unknown().optional().describe("@internal"),
    license: H.unknown().optional().describe("@internal"),
    keywords: H.unknown().optional().describe("@internal")
  })), BOd = ve(() => H.object({
    name: Yx().describe("Agent identifier. Required \u2014 this is how the Agent tool and `--agent` flag address it."),
    description: Yx().describe("When to use this agent. Required \u2014 shown in the Agent tool listing."),
    model: Yx().optional().describe("Model override for this agent. Use `inherit` to match the spawning conversation."),
    tools: Eke().optional().describe("Tools available to this agent. Replaces the default set."),
    disallowedTools: Eke().optional().describe("Tools removed from the default set. Ignored if `tools` is set."),
    color: Yx().optional().describe("@internal \u2014 display color in the agents UI"),
    effort: Yx().optional().describe("Thinking effort: `low`, `medium`, `high`, `max`, or an integer."),
    permissionMode: Yx().optional().describe("Permission mode the agent runs in."),
    mcpServers: H.unknown().optional().describe("MCP servers to connect when this agent runs."),
    hooks: H.unknown().optional().describe("Hooks registered while this agent runs."),
    maxTurns: H.union([H.number(), H.string(), H.null()]).optional().describe("Maximum conversation turns before the agent stops."),
    skills: Eke().optional().describe("Skills preloaded for this agent."),
    initialPrompt: Yx().optional().describe("Auto-submitted first message when this agent runs as the main session (via `--agent` or settings). Not read when spawned as a subagent."),
    memory: Yx().optional().describe("Memory scope: `user`, `project`, or `local`."),
    background: Wst().optional().describe("If true, the agent runs in the background by default."),
    isolation: Yx().optional().describe("Filesystem isolation: `worktree` runs in a temporary git worktree.")
  })), UOd = ve(() => H.object({
    name: Yx().optional().describe("Style name used in the Output style picker in `/config` and in settings. Defaults to the filename."),
    description: Yx().optional().describe("Shown in the Output style picker in `/config`."),
    "keep-coding-instructions": Wst().optional().describe("If true, the default coding instructions stay in the system prompt alongside this style."),
    "force-for-plugin": Wst().optional().describe("@internal \u2014 only meaningful for plugin-bundled styles; ignored for user styles")
  })), FOd = {
    skill: ve(() => pKr().strict()),
    agent: ve(() => BOd().strict()),
    "output-style": ve(() => UOd().strict())
  }, g1i = new Set();
});
function GOd(e) {
  return e.replace(/[-_]/g, "").toLowerCase();
}
var jOd, rqh;