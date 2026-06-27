// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module d_t
// matched 2.1.88 source: src/tools/AgentTool/built-in/generalPurposeAgent.ts
// class=modified  jaccard=0.2904  score=0.588  fileCov=0.3645
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module d_t] deps: components/design-system/Ratchet.tsx, hooks/useTerminalSize.ts, context/notifications.tsx, cost-tracker.ts, main.tsx, utils/sequential.ts, ink/useTerminalNotification.ts, ink/components/Box.tsx, components/messages/AttachmentMessage.tsx, utils/model/contextWindowUpgradeCheck.ts, ink/styles.ts, LCo, sil, hooks/useMinDisplayTime.ts, screens/REPL.tsx, components/messages/GroupedToolUseContent.tsx, ink/Ansi.tsx, screens/REPL.tsx, utils/messages.ts, utils/messages.ts, components/messages/AttachmentMessage.tsx, components/Message.tsx, components/shell/ShellTimeDisplay.tsx, components/PromptInput/PromptInput.tsx
((uKn = R(lt(), 1)), (All = R(rt(), 1)), (RH = R(se(), 1)));
dQ = All.memo(lif, dif);
function SHARED_PREFIX() {
  return `${"You are an agent for Claude Code, Anthropic's official CLI for Claude. Given the user's message, you should use the tools available to complete the task. Complete the task fully\u2014don't gold-plate, but don't leave it half-done."} When you complete the task, respond with a concise report covering what was done and any key findings \u2014 the caller will relay this to the user, so it only needs the essentials.

${`Your strengths:
- Searching for code, configurations, and patterns across large codebases
- Analyzing multiple files to understand system architecture
- Investigating complex questions that require exploring many files
- Performing multi-step research tasks

Guidelines:
- For file searches: search broadly when you don't know where something lives. Use Read when you know the specific file path.
- For analysis: Start broad and narrow down. Use multiple search strategies if the first doesn't yield results.
- Be thorough: Check multiple locations, consider different naming conventions, look for related files.
- NEVER create files unless they're absolutely necessary for achieving your goal. ALWAYS prefer editing an existing file to creating a new one.
- NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested.`}`;
}
var RAe;
