// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qzt
// matched 2.1.88 source: src/tools/SendMessageTool/UI.tsx
// class=modified  jaccard=0.3991  score=0.5434  fileCov=0.6003
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module qzt] deps: services/analytics/index.ts, tools/AgentTool/resumeAgent.ts, utils/api.ts, tools/AgentTool/forkSubagent.ts, dn, tasks/LocalShellTask/LocalShellTask.tsx, utils/sessionActivity.ts, google-auth-library/build/src/crypto/node/crypto.js, utils/teammateContext.ts, Il, utils/model/agent.ts, utils/fsOperations.ts, utils/debug.ts, utils/errors.ts, utils/sequential.ts, utils/messages.ts, utils/systemPrompt.ts, utils/plugins/pluginIdentifier.ts, bridge/debugUtils.ts, utils/plans.ts, l8e, Task.ts, components/permissions/ExitPlanModePermissionRequest/ExitPlanModePermissionRequest.tsx, utils/concurrentSessions.ts, utils/mcpOutputStorage.ts, tools/AgentTool/built-in/exploreAgent.ts, tools/AgentTool/built-in/exploreAgent.ts, tools/AgentTool/UI.tsx, tools/ToolSearchTool/prompt.ts, tools/AgentTool/loadAgentsDir.ts, tools/SkillTool/UI.tsx
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
function renderToolUseMessage(input) {
  if (typeof input.message !== "object" || input.message === null) return null;
  if (input.message.type === "plan_approval_response")
    return input.message.approve
      ? `approve plan from: ${input.to}`
      : `reject plan from: ${input.to}`;
  return null;
}
function renderToolResultMessage(content, _progressMessages, { verbose: n }) {
  let r = typeof content === "string" ? Ft(content) : content;
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
