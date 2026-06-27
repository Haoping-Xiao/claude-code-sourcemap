// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module l4o
// matched 2.1.88 source: src/components/agents/utils.ts
// class=modified  jaccard=0.5292  score=1  fileCov=0.5292
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module l4o] deps: @xmldom/xmldom/lib/entities.js, Ox, tools/AgentTool/built-in/exploreAgent.ts, commands/insights.ts, tools/BashTool/BashTool.tsx, tools/ExitPlanModeTool/ExitPlanModeV2Tool.ts, tools/FileEditTool/FileEditTool.ts, tools/FileReadTool/FileReadTool.ts, tools/FileWriteTool/FileWriteTool.ts, tools/GlobTool/GlobTool.ts, tools/GrepTool/GrepTool.ts, tools/ListMcpResourcesTool/ListMcpResourcesTool.ts, tools/NotebookEditTool/NotebookEditTool.ts, tools/ReadMcpResourceTool/ReadMcpResourceTool.ts, tools/ReadMcpResourceTool/ReadMcpResourceTool.ts, tools/TaskOutputTool/TaskOutputTool.tsx, tools/TaskStopTool/TaskStopTool.ts, tools/TodoWriteTool/TodoWriteTool.ts, tools/WebFetchTool/WebFetchTool.ts, tools/WebSearchTool/WebSearchTool.ts, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, services/teamMemorySync/secretScanner.ts, ink/components/Box.tsx
((bYl = R(lt(), 1)), (SYl = R(rt(), 1)), (Usr = R(rt(), 1)), (Dse = R(se(), 1)));
function getAgentSourceDisplayName(source) {
  if (source === "all") return "Agents";
  if (source === "built-in") return "Built-in agents";
  if (source === "plugin") return "Plugin agents";
  return mqe(wG(source));
}
