// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HLl
// matched 2.1.88 source: src/tools/AgentTool/forkSubagent.ts
// class=partial  jaccard=0.0775  score=0.4149  fileCov=0.087
// note: low-confidence suggestion: src/tools/AgentTool/forkSubagent.ts; dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var HLl = E(() => {
  fh();
  ELl = {
    agentType: "worker",
    whenToUse: "For executing tasks autonomously \u2014 research, implementation, or verification.",
    tools: ["*"],
    maxTurns: 200,
    permissionMode: "bubble",
    source: "built-in",
    baseDir: "built-in",
    getSystemPrompt: e => SLl()
  };
});
var TLl = {};
_t(TLl, {
  CLAUDE_AGENT: () => CLAUDE_AGENT
});
var CLAUDE_AGENT;