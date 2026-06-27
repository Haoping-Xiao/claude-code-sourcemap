// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VYt
// matched 2.1.88 source: src/utils/agentContext.ts
// class=partial  jaccard=0.1555  score=0.2694  fileCov=0.2689
// note: low-confidence suggestion: src/utils/agentContext.ts; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var VYt = E(() => {
  PR();
  g$e();
  fp();
  q0();
  co();
  rkf = /^\/btw\b/gi;
  Qze = zLl();
});
var JLl = {};
_t(JLl, {
  spawnForkFromDirective: () => spawnForkFromDirective,
  deriveForkName: () => deriveForkName
});
async function spawnForkFromDirective(e, t, n, r) {
  if (Gv()) return Le("subagent_launch", "subagent_fork_coordinator_mode"), null;
  let o = t.renderedSystemPrompt;
  if (!o) {
    if (o = await lkf(t), !o) return Le("subagent_launch", "subagent_fork_prompt_missing"), null;
  }
  let s = {
      kind: "fork",
      log: (() => {
        let y = t.agentId ?? JWe,
          b = t.getReplContexts()[y]?.replayLog;
        if (b) return [...b];
        if (t.replHydration?.kind === "resume") return aXn(t.messages);
        return [];
      })()
    },
    i = deriveForkName(e),
    a = e.replace(/\s+/g, " ").trim(),
    l = a.length > 50 ? a.slice(0, 49) + "\u2026" : a,
    c = rM(i),
    {
      taskRegistry: u
    } = t,
    d = Date.now(),
    p = qG(t.agentContext) + 1,
    f = ubt({
      agentId: c,
      ownerAgentId: ls(),
      spawnDepth: p,
      description: l,
      prompt: e,
      selectedAgent: h4,
      taskRegistry: u,
      toolUseId: t.toolUseId
    }),
    m = f.abortController;
  t.agentLifecycle.registerName(i, Bu(c));
  let g = {
      prompt: e,
      resolvedAgentModel: foe(h4.model, t.options.mainLoopModel, void 0, Fr(t).mode),
      isBuiltInAgent: !0,
      startTime: d,
      agentType: h4.agentType,
      isAsync: !0,
      agentDepth: p,
      source: h4.source
    },
    h = {
      agentId: c,
      parentAgentId: t.agentId,
      depth: p,
      parentSessionId: VG(),
      agentType: "subagent",
      subagentName: h4.agentType,
      displayName: i,
      isAsync: !0,
      isBuiltIn: !0,
      invocationKind: "spawn",
      invocationEmitted: !1
    };
  return x9(h, () => V8e({
    taskId: f.agentId,
    abortController: m,
    makeStream: (y, b) => o3({
      onQueryProgress: b,
      agentDefinition: h4,
      promptMessages: [...(r ?? []), Rn({
        content: [{
          type: "text",
          text: njt(e)
        }]
      })],
      toolUseContext: t,
      canUseTool: n,
      isAsync: !0,
      querySource: WDe(h4.agentType, !0),
      spawnedBySkill: t.options.spawnedBySkill ?? t.options.activeSkill,
      model: void 0,
      override: {
        systemPrompt: o,
        agentId: Bu(f.agentId),
        agentContext: h,
        abortController: m,
        replHydration: s
      },
      availableTools: t.options.tools,
      forkContextMessages: t.messages,
      useExactTools: !0,
      onCacheSafeParams: y,
      description: l,
      name: i
    }),
    metadata: g,
    description: l,
    toolUseContext: t,
    taskRegistry: u,
    agentIdForCleanup: c,
    enableSummarization: !0,
    getWorktreeResult: async () => ({})
  })), xe("subagent_launch"), {
    agentId: c,
    name: i
  };
}
async function lkf(e) {
  let t = e.getAppState(),
    n = t.agent ? t.agentDefinitions.activeAgents.find(s => s.agentType === t.agent) : void 0,
    r = Array.from(Fr(e).additionalWorkingDirectories.keys()),
    o = await DL(e.options.tools, e.options.mainLoopModel, r);
  return Z5({
    mainThreadAgentDefinition: n,
    toolUseContext: e,
    customSystemPrompt: e.options.customSystemPrompt,
    defaultSystemPrompt: o,
    appendSystemPrompt: e.options.appendSystemPrompt
  });
}
function deriveForkName(e) {
  return e.trim().split(/\s+/).slice(0, 3).join("-").toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "").slice(0, 24) || "fork";
}