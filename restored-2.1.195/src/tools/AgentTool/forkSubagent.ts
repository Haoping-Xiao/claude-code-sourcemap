// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module l$
// matched 2.1.88 source: src/tools/AgentTool/forkSubagent.ts
// class=modified  jaccard=0.2371  score=0.4473  fileCov=0.3354
// note: deminified; 9 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: isInForkChild, isForkSubagentEnabled, getForkSubagentSource, buildWorktreeNotice, buildForkedMessages, buildChildMessage, _resetForkSubagentSourceTelemetryForTesting, FORK_SUBAGENT_TYPE, FORK_AGENT
// [unwrapped __esm module l$] deps: ZWe, dn, kt, ii, fh, RX, Nue, u_, lf, i$, HU, wr, fn, _m, F8
esp = new Set([Ly, Ip]);
function lsp() {
  if (j8()) return "disabled";
  if (ut(process.env.CLAUDE_CODE_FORK_SUBAGENT)) return "env";
  if (ml(process.env.CLAUDE_CODE_FORK_SUBAGENT)) return "disabled";
  if (Ir()) return "disabled";
  if (at(isp, false)) return "gb_rollout";
  return "disabled";
}
function getForkSubagentSource() {
  if (YOn !== null) return YOn;
  let e = lsp();
  if (e !== "disabled")
    ((YOn = e),
      G(asp, {
        source: $e(e),
      }));
  return e;
}
function csp() {
  YOn = null;
}
function isForkSubagentEnabled() {
  return getForkSubagentSource() !== "disabled";
}
function isInForkChild(e) {
  return e.some((t) => {
    if (t.type !== "user") return false;
    let n = t.message.content;
    if (!Array.isArray(n)) return false;
    return n.some((r) => r.type === "text" && r.text.includes(`<${bhe}>`));
  });
}
function buildForkedMessages(e, t) {
  let n = {
      ...t,
      uuid: Boa.randomUUID(),
      message: {
        ...t.message,
        content: [...t.message.content],
      },
    },
    r = t.message.content.filter((i) => i.type === "tool_use");
  if (r.length === 0)
    return (
      T(`No tool_use blocks found in assistant message for fork directive: ${e.slice(0, 50)}...`, {
        level: "error",
      }),
      [
        Rn({
          content: [
            {
              type: "text",
              text: buildChildMessage(e),
            },
          ],
        }),
      ]
    );
  let o = r.map((i) => ({
      type: "tool_result",
      tool_use_id: i.id,
      content: [
        {
          type: "text",
          text: FORK_PLACEHOLDER_RESULT,
        },
      ],
    })),
    s = Rn({
      content: [
        ...o,
        {
          type: "text",
          text: buildChildMessage(e),
        },
      ],
    });
  return [n, s];
}
function buildChildMessage(e) {
  return `<${bhe}>
You are a worker fork. The transcript above is the parent's history \u2014 inherited reference, not your situation. You are NOT a continuation of that agent. Execute ONE directive, then stop.

Hard rules:
- Do NOT spawn subagents with the ${ss} tool. The "default to forking" guidance is for the parent; you ARE the fork, execute directly.${""}
- One shot: report once and stop. No follow-up questions, no proposed next steps, no waiting for the user.

Guidelines (your directive may override any of these):
- Stay in scope. Other forks may be handling adjacent work; if you spot something outside your directive, note it in a sentence and move on.
- Open with one line restating your task, so the parent can spot scope drift at a glance.
- Be concise \u2014 as short as the answer allows, no shorter. Plain text, no preamble, no meta-commentary.
- If you committed changes, list the paths and commit hashes in your report.
</${bhe}>

${Z0t}${e}`;
}
function buildWorktreeNotice(e, t) {
  return `You've inherited the conversation context above from a parent agent working in ${e}. You are operating in an isolated git worktree at ${t} \u2014 same repository, same relative file structure, separate working copy. Paths in the inherited context refer to the parent's working directory; translate them to your worktree root. Re-read files before editing if the parent may have modified them since they appear in the context. Your changes stay in this worktree and will not affect the parent's files.`;
}
var Boa,
  isp = "tengu_copper_fox",
  asp = "tengu_fork_subagent_enabled",
  YOn = null,
  FORK_SUBAGENT_TYPE = "fork",
  FORK_AGENT,
  FORK_PLACEHOLDER_RESULT = "Fork started \u2014 processing in background";
