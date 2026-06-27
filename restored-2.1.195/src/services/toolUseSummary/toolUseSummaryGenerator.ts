// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module O8e
// matched 2.1.88 source: src/services/toolUseSummary/toolUseSummaryGenerator.ts
// class=modified  jaccard=0.5205  score=0.7254  fileCov=0.6482
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var O8e = E(() => {
  ft();
  fp();
  Vv();
  tao();
  Il();
  je();
  Cp();
  At();
  ik();
  sp();
  vn();
  co();
  _Le();
  _a();
  aS();
  u$();
  GX();
  dn();
  kt();
  tP();
  mLe();
  H5e();
  gNn();
  q8();
  ZU();
  pre();
  xao();
  hut();
  aSt();
});
async function tIl({
  tools: e,
  signal: t,
  isNonInteractiveSession: n,
  lastAssistantText: r,
  agentContext: o,
}) {
  if (e.length === 0) return null;
  try {
    let s = e.map((c) => {
        let u = eIl(c.input, 300),
          d = eIl(c.output, 300);
        return `Tool: ${c.name}
Input: ${u}
Output: ${d}`;
      }).join(`

`),
      i = r
        ? `User's intent (from assistant's last message): ${r.slice(0, 200)}

`
        : "",
      l = (
        await R$({
          systemPrompt: Sc([bTf]),
          userPrompt: `${i}Tools completed:

${s}

Label:`,
          signal: t,
          options: {
            querySource: "tool_use_summary_generation",
            enablePromptCaching: false,
            agents: [],
            isNonInteractiveSession: n,
            hasAppendSystemPrompt: false,
            mcpTools: [],
            agentContext: o,
          },
        })
      ).message.content
        .filter((c) => c.type === "text")
        .map((c) => (c.type === "text" ? c.text : ""))
        .join("")
        .trim();
    if (!l) return (It("summary_tool_use_generate", "empty_response"), null);
    return (xe("summary_tool_use_generate"), l);
  } catch (s) {
    if (t.aborted) return null;
    let i = Zr(s);
    return (
      (i.cause = {
        errorId: "tool_use_summary_generation_failed",
      }),
      ke(i),
      Le("summary_tool_use_generate", "api_failed"),
      null
    );
  }
}
function eIl(e, t) {
  try {
    let n = De(e);
    if (n.length <= t) return n;
    return n.slice(0, t - 3) + "...";
  } catch {
    return "[unable to serialize]";
  }
}
var bTf = `Write a short summary label describing what these tool calls accomplished. It appears as a single-line row in a mobile app and truncates around 30 characters, so think git-commit-subject, not sentence.

Keep the verb in past tense and the most distinctive noun. Drop articles, connectors, and long location context first.

Examples:
- Searched in auth/
- Fixed NPE in UserService
- Created signup endpoint
- Read config.json
- Ran failing tests`;
