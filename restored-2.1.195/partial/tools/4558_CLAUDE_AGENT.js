// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HLl
// matched 2.1.88 source: src/tools/AgentTool/forkSubagent.ts
// class=partial  jaccard=0.1531  score=0.6557  fileCov=0.1665
// note: low-confidence suggestion: src/tools/AgentTool/forkSubagent.ts; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: CLAUDE_AGENT
// [unwrapped __esm module HLl] deps: commands/insights.ts
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
var CLAUDE_AGENT;