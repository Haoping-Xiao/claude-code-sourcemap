// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Orl
// matched 2.1.88 source: src/services/AgentSummary/agentSummary.ts
// class=modified  jaccard=0.404  score=0.7363  fileCov=0.4724
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Orl = E(() => {
  qee();
  je();
});
function Ztf(e) {
  return `Describe your most recent action in 3-5 words using present tense (-ing). Name the file or function, not the branch. Do not use tools.
${
  e
    ? `
Previous: "${e}" \u2014 say something NEW.
`
    : ""
}
Good: "Reading runAgent.ts"
Good: "Fixing null check in validate.ts"
Good: "Running auth module tests"
Good: "Adding retry logic to fetchUser"

Bad (past tense): "Analyzed the branch diff"
Bad (too vague): "Investigating the issue"
Bad (too long): "Reviewing full branch diff and AgentTool.tsx integration"
Bad (branch name): "Analyzed adam/background-summary branch diff"`;
}
function Nrl(e, t, n, r, o, s = {}) {
  let i = s.intervalMs ?? Qtf,
    { forkContextMessages: a, ...l } = n,
    c = null,
    u = null,
    d = !1,
    p = null,
    f = null,
    m = !1;
  async function g() {
    if (d) return;
    T(`[AgentSummary] Timer fired for agent ${t}`);
    try {
      let b = r();
      if (b.length < 3) {
        T(`[AgentSummary] Skipping summary for ${e}: not enough messages (${b.length})`);
        return;
      }
      let _ = Hwo(b),
        S = `${_.length}:${_.at(-1)?.uuid ?? ""}`;
      if (S === f) {
        if (
          (T(
            `[AgentSummary] Skipping summary for ${e}: transcript unchanged (${_.length} messages)`,
          ),
          !m)
        )
          (G("tengu_agent_summary_skipped", {
            reason: We("unchanged"),
          }),
            (m = !0));
        return;
      }
      ((m = !1), (f = S));
      let A = {
        ...l,
        forkContextMessages: _,
      };
      (T(`[AgentSummary] Forking for summary, ${_.length} messages in context`),
        (c = new AbortController()));
      let v = async () => ({
          behavior: "deny",
          message: "No tools needed for summary",
          decisionReason: {
            type: "other",
            reason: "summary only",
          },
        }),
        C = await dk({
          promptMessages: [
            Rn({
              content: Ztf(p),
            }),
          ],
          cacheSafeParams: A,
          canUseTool: v,
          querySource: "agent_summary",
          forkLabel: "agent_summary",
          maxTurns: 1,
          overrides: {
            abortController: c,
          },
          skipTranscript: !0,
          skipCacheWrite: !0,
        });
      if (d) return;
      for (let x of C.messages) {
        if (x.type !== "assistant") continue;
        if (x.isApiErrorMessage) {
          T(`[AgentSummary] Skipping API error message for ${e}`);
          continue;
        }
        let I = x.message.content.find((k) => k.type === "text");
        if (I?.type === "text" && I.text.trim()) {
          let k = I.text.trim();
          (T(`[AgentSummary] Summary result for ${e}: ${k}`), (p = k), Url(e, k, o));
          break;
        }
      }
    } catch (b) {
      if (!d && b instanceof Error) ke(b);
    } finally {
      if (((c = null), !d)) h();
    }
  }
  function h() {
    if (d) return;
    u = setTimeout(g, i);
  }
  function y() {
    if ((T(`[AgentSummary] Stopping summarization for ${e}`), (d = !0), u))
      (clearTimeout(u), (u = null));
    if (c) (c.abort(), (c = null));
  }
  return (
    h(),
    {
      stop: y,
    }
  );
}
var Qtf = 30000;
