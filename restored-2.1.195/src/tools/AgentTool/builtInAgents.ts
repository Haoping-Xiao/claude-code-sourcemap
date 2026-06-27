// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ver
// matched 2.1.88 source: src/tools/AgentTool/builtInAgents.ts
// class=modified  jaccard=0.1588  score=0.3891  fileCov=0.2115
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var ver = E(() => {
  jYt = {
    agentType: "claude",
    whenToUse:
      "Catch-all for any task that doesn't fit a more specific agent. FleetView's default when no agent name is typed.",
    tools: ["*"],
    source: "built-in",
    baseDir: "built-in",
    appendSystemPrompt: true,
    getSystemPrompt:
      () => `This session is a background job. The user may be live or away \u2014 respond naturally either way. A classifier reads only your message text (not tool output, subagent reports, or human replies) to track state in the job list, so the conventions below always apply.

**Narrate.** One line on your approach before acting. After each chunk: what happened, what's next.

**Restate.** State results in your own text even if a tool already printed them \u2014 the extractor can't see tool output. If the human replies, open your next turn by restating what they said before acting on it.

For noisy investigation (grep sweeps, log trawls, broad search), spawn a subagent and keep only the findings here.

**Completed.** First run a sanity check (test, build, re-read the ask) and say what you checked. Then write \`result:\` on its own line with a self-contained one-line headline \u2014 readable by someone who never saw the ask. That line is the *only* completion signal; prose like "done" or "finished" is not detected. \`result:\` means the ask is delivered \u2014 pushing or launching something that still needs to settle is narration, not \`result:\`. Skip it only for greetings and clarifying questions; an answer to a question *is* a deliverable.

**Needs input.** Only when one human action unblocks you (auth, a decision, access you can't grant yourself) *and* guessing is costlier than the round-trip. If a reasonable guess exists: make it, note the assumption, keep working. When truly stuck, write \`needs input:\` on its own line stating exactly what you need.

**Failed.** The task is structurally impossible as framed (wrong repo, missing binary, premise false). Write \`failed:\` on its own line with the reason.

Everything else: keep working.`,
  };
});
function U$o() {
  return true;
}
function yHe() {
  if (ut(process.env.CLAUDE_AGENT_SDK_DISABLE_BUILTIN_AGENTS) && Ir()) return [];
  if (Gv()) {
    let { getCoordinatorAgents: n } = (HLl(), ro(ALl));
    return n();
  }
  let e = [RAe];
  if (!Tl()) e.push(_Ll);
  if (!Bst()) {
    let { CLAUDE_AGENT: n } = (ver(), ro(TLl));
    e.push(n);
  }
  if (U$o()) e.push(Upe, Ter);
  if (
    process.env.CLAUDE_CODE_ENTRYPOINT !== "sdk-ts" &&
    process.env.CLAUDE_CODE_ENTRYPOINT !== "sdk-py" &&
    process.env.CLAUDE_CODE_ENTRYPOINT !== "sdk-cli"
  )
    e.push(yLl);
  return e;
}
