// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yin
// matched 2.1.88 source: node_modules/@anthropic-ai/sdk/lib/tools/BetaToolRunner.mjs
// class=partial  jaccard=0.2329  score=0.6734  fileCov=0.2626
// note: low-confidence suggestion: node_modules/@anthropic-ai/sdk/lib/tools/BetaToolRunner.mjs; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var yin = E(() => {
  LJe = class LJe extends Error {
    constructor(e) {
      let t = typeof e === "string" ? e : e.map(n => {
        if (n.type === "text") return n.text;
        return `[${n.type}]`;
      }).join(" ");
      super(t);
      this.name = "ToolError", this.content = e;
    }
  };
});
var $os = 1e5,
  Oos = `You have been working on the task described above but have not yet completed it. Write a continuation summary that will allow you (or another instance of yourself) to resume work efficiently in a future context window where the conversation history will be replaced with this summary. Your summary should be structured, concise, and actionable. Include:
1. Task Overview
The user's core request and success criteria
Any clarifications or constraints they specified
2. Current State
What has been completed so far
Files created, modified, or analyzed (with paths if relevant)
Key outputs or artifacts produced
3. Important Discoveries
Technical constraints or requirements uncovered
Decisions made and their rationale
Errors encountered and how they were resolved
What approaches were tried that didn't work (and why)
4. Next Steps
Specific actions needed to complete the task
Any blockers or open questions to resolve
Priority order if multiple steps remain
5. Context to Preserve
User preferences or style requirements
Domain-specific details that aren't obvious
Any promises made to the user
Be concise but complete\u2014err on the side of including information that would prevent duplicate work or repeated mistakes. Write in a way that enables immediate resumption of the task.
Wrap your summary in <summary></summary> tags.`;
function Bos() {
  let e, t;
  return {
    promise: new Promise((r, o) => {
      e = r, t = o;
    }),
    resolve: e,
    reject: t
  };
}
async function AKc(e, t = e.messages.at(-1), n) {
  if (!t || t.role !== "assistant" || !t.content || typeof t.content === "string") return null;
  let r = t.content.filter(s => s.type === "tool_use");
  if (r.length === 0) return null;
  return {
    role: "user",
    content: await Promise.all(r.map(async s => {
      let i = e.tools.find(a => ("name" in a ? a.name : a.mcp_server_name) === s.name);
      if (!i || !("run" in i)) return {
        type: "tool_result",
        tool_use_id: s.id,
        content: `Error: Tool '${s.name}' not found`,
        is_error: !0
      };
      try {
        let a = s.input;
        if ("parse" in i && i.parse) a = i.parse(a);
        let l = await i.run(a, {
          toolUseBlock: s,
          signal: n?.signal
        });
        return {
          type: "tool_result",
          tool_use_id: s.id,
          content: l
        };
      } catch (a) {
        return {
          type: "tool_result",
          tool_use_id: s.id,
          content: a instanceof LJe ? a.content : `Error: ${a instanceof Error ? a.message : String(a)}`,
          is_error: !0
        };
      }
    }))
  };
}
var AIt, DJe, mUe, SD, nG, BV, jge, awe, HIt, Nos, aEr, TIt;