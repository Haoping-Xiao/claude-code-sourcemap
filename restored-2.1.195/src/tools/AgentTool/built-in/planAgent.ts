// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module B$o
// matched 2.1.88 source: src/tools/AgentTool/built-in/planAgent.ts
// class=modified  jaccard=0.1249  score=1  fileCov=0.1249
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var B$o = E(() => {
  RX();
  u_();
  lf();
  nC();
  EI();
  lC();
  f6();
  _m();
  fh();
  vAe();
  Ter = {
    agentType: "Plan",
    whenToUse:
      "Software architect agent for designing implementation plans. Use this when you need to plan the implementation strategy for a task. Returns step-by-step plans, identifies critical files, and considers architectural trade-offs.",
    disallowedTools: [ss, g4, Xx, ka, Wc, RI],
    source: "built-in",
    tools: Upe.tools,
    baseDir: "built-in",
    model: "inherit",
    omitClaudeMd: !0,
    getSystemPrompt: () => Bxf(),
  };
});
var _Ll;
