// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QH
// matched 2.1.88 source: src/utils/permissions/permissionRuleParser.ts
// class=modified  jaccard=0.0881  score=0.1618  fileCov=0.1619
// note: deminified; 0 identifiers renamed from _t exports
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
    ReadMcpResourceDir: "ReadMcpResourceDirTool",
  };
  ((rLt = `mcp__${Met}__bash`), (vws = `mcp__${Met}__web_fetch`));
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
