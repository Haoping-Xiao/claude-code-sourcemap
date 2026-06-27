// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qzt
// matched 2.1.88 source: src/tools/SendMessageTool/UI.tsx
// class=modified  jaccard=0.3991  score=0.5434  fileCov=0.6003
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module qzt] deps: ft, rze, X6, l$, dn, S_, LL, $S, og, Il, c9t, Lo, je, At, vn, co, kpe, $g, uft, _a, l8e, bH, xF, Mp, K0, tQ, vAe, N8t, qRe, ty, SAe
jRo = require("fs");
qF = class qF extends Error {
  constructor(e) {
    super(e);
    this.name = "ResumeAgentStateError";
  }
};
Ibt = class Ibt extends qF {
  constructor(e) {
    super(e);
    this.name = "AgentStoppedByUserError";
  }
};
function UEl(e) {
  return `
# SendMessage

Send a message to another agent.

\`\`\`json
{"to": "researcher", "summary": "assign task 1", "message": "start on task #1"}
\`\`\`

| \`to\` | |
|---|---|
| \`"researcher"\` | Teammate by name |
| \`"main"\` | The main conversation (background subagents only) |${""}

Your plain text output is NOT visible to other agents \u2014 to communicate, you MUST call this tool. Messages from teammates are delivered automatically; you don't check an inbox. Refer to active teammates by name; to resume a completed background agent, use the \`agentId\` (format \`a...-...\`) from its spawn result. When relaying, don't quote the original \u2014 it's already rendered to the user.${""}${e ? '\n\n## Protocol responses (legacy)\n\nIf you receive a JSON message with `type: "shutdown_request"` or `type: "plan_approval_request"`, respond with the matching `_response` type \u2014 echo the `request_id`, set `approve` true/false:\n\n```json\n{"to": "team-lead", "message": {"type": "shutdown_response", "request_id": "...", "approve": true}}\n{"to": "researcher", "message": {"type": "plan_approval_response", "request_id": "...", "approve": false, "feedback": "add error handling"}}\n```\n\nApproving shutdown terminates your process. Rejecting plan sends the teammate back to revise. Don\'t originate `shutdown_request` unless asked. Don\'t send structured JSON status messages \u2014 use TaskUpdate.' : ""}
`.trim();
}
var BEl = "Send a message to another agent";
var FEl = () => {};
function jEl(e) {
  if (typeof e.message !== "object" || e.message === null) return null;
  if (e.message.type === "plan_approval_response")
    return e.message.approve ? `approve plan from: ${e.to}` : `reject plan from: ${e.to}`;
  return null;
}
function GEl(e, t, { verbose: n }) {
  let r = typeof e === "string" ? Ft(e) : e;
  if ("routing" in r && r.routing) return null;
  if ("request_id" in r && "target" in r) return null;
  return GRo.jsx(qn, {
    children: GRo.jsx(w, {
      dimColor: true,
      children: r.message,
    }),
  });
}
var GRo;
