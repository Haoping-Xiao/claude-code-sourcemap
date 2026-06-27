// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QH
// matched 2.1.88 source: src/tools/TaskOutputTool/constants.ts
// class=partial  jaccard=0.1081  score=0.1081  fileCov=1
// note: low-confidence suggestion: src/tools/TaskOutputTool/constants.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var QH = E(() => {
  oLr = {
    Task: "Agent",
    KillShell: "TaskStop",
    KillBash: "TaskStop",
    AgentOutputTool: "TaskOutput",
    BashOutputTool: "TaskOutput",
    AgentOutput: "TaskOutput",
    BashOutput: "TaskOutput",
    ListPeers: "ListAgents",
    Brief: "SendUserMessage",
    ListMcpResources: "ListMcpResourcesTool",
    ReadMcpResource: "ReadMcpResourceTool",
    ReadMcpResourceDir: "ReadMcpResourceDirTool"
  };
  rLt = `mcp__${Met}__bash`, vws = `mcp__${Met}__web_fetch`;
});
function wws(e) {
  return imn.filePatternTools.includes(e);
}
function Cws(e) {
  return imn.bashPrefixTools.includes(e);
}
function Iws(e) {
  return Object.hasOwn(imn.customValidation, e) ? imn.customValidation[e] : void 0;
}
var imn;