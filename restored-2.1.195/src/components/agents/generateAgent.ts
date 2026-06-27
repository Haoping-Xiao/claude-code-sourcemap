// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BYl
// matched 2.1.88 source: src/components/agents/generateAgent.ts
// class=modified  jaccard=0.4403  score=0.9094  fileCov=0.4605
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module BYl] deps: Ye, ps, y3, Cc, Bs, f_, Ko, Mg, wb, vH
((OYl = R(lt(), 1)), (Gsr = R(rt(), 1)), (Kq = R(se(), 1)));
async function generateAgent(e, t, n, r) {
  let o =
      n.length > 0
        ? `

IMPORTANT: The following identifiers already exist and must NOT be used: ${n.join(", ")}`
        : "",
    s = `Create an agent configuration based on this request: "${e}".${o}
  Return ONLY the JSON object, no other text.`,
    i = Rn({
      content: s,
    }),
    a = await uS(),
    l = ZQn([i], a),
    c = lu() ? UYl + AGENT_MEMORY_INSTRUCTIONS : UYl,
    p = (
      await yYe({
        messages: lk(l),
        systemPrompt: Sc([c]),
        thinkingConfig: {
          type: "disabled",
        },
        tools: [],
        signal: r,
        options: {
          getToolPermissionContext: async () => b1(),
          model: t,
          toolChoice: void 0,
          agents: [],
          isNonInteractiveSession: false,
          hasAppendSystemPrompt: false,
          querySource: "agent_creation",
          mcpTools: [],
          stickyBetas: RR(u0()),
          agentContext: of(),
        },
      })
    ).message.content
      .filter((m) => m.type === "text")
      .map((m) => m.text).join(`
`),
    f;
  try {
    f = Ft(p.trim());
  } catch {
    let m = p.match(/\{[\s\S]*\}/);
    if (!m) throw Error("No JSON object found in response");
    f = Ft(m[0]);
  }
  if (!f.identifier || !f.whenToUse || !f.systemPrompt)
    throw Error("Invalid agent configuration generated");
  return (
    G("tengu_agent_definition_generated", {
      agent_identifier: f.identifier,
    }),
    {
      identifier: f.identifier,
      whenToUse: f.whenToUse,
      systemPrompt: f.systemPrompt,
    }
  );
}
var UYl,
  AGENT_MEMORY_INSTRUCTIONS = `

7. **Agent Memory Instructions**: If the user mentions "memory", "remember", "learn", "persist", or similar concepts, OR if the agent would benefit from building up knowledge across conversations (e.g., code reviewers learning patterns, architects learning codebase structure, etc.), include domain-specific memory update instructions in the systemPrompt.

   Add a section like this to the systemPrompt, tailored to the agent's specific domain:

   "**Update your agent memory** as you discover [domain-specific items]. This builds up institutional knowledge across conversations. Write concise notes about what you found and where.

   Examples of what to record:
   - [domain-specific item 1]
   - [domain-specific item 2]
   - [domain-specific item 3]"

   Examples of domain-specific memory instructions:
   - For a code-reviewer: "Update your agent memory as you discover code patterns, style conventions, common issues, and architectural decisions in this codebase."
   - For a test-runner: "Update your agent memory as you discover test patterns, common failure modes, flaky tests, and testing best practices."
   - For an architect: "Update your agent memory as you discover codepaths, library locations, key architectural decisions, and component relationships."
   - For a documentation writer: "Update your agent memory as you discover documentation patterns, API structures, and terminology conventions."

   The memory instructions should be specific to what the agent would naturally learn while performing its core tasks.
`;
