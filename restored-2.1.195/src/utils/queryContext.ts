// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gUc
// matched 2.1.88 source: src/utils/queryContext.ts
// class=modified  jaccard=0.2844  score=0.3991  fileCov=0.4975
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var gUc = E(() => {
  kt();
  je();
});
async function aXo({
  tools: e,
  mainLoopModel: t,
  additionalWorkingDirectories: n,
  customSystemPrompt: r,
  excludeDynamicSections: o,
  cacheBreakerPhrase: s,
}) {
  let [i, a, l, c] = await Promise.all([
    r !== void 0
      ? Promise.resolve([])
      : DL(e, t, n, {
          excludeDynamicSections: o,
        }),
    uS(),
    r !== void 0 ? Promise.resolve({}) : hH(s),
    o && r === void 0 ? gZn(t, n) : Promise.resolve({}),
  ]);
  if (o)
    return {
      defaultSystemPrompt: i,
      userContext: {
        ...l,
        ...a,
        ...c,
      },
      systemContext: {},
    };
  return {
    defaultSystemPrompt: i,
    userContext: a,
    systemContext: l,
  };
}
async function hUc({
  tools: e,
  commands: t,
  mcpClients: n,
  messages: r,
  readFileState: o,
  getAppState: s,
  setAppState: i,
  customSystemPrompt: a,
  appendSystemPrompt: l,
  excludeDynamicSections: c,
  thinkingConfig: u,
  agents: d,
}) {
  let p = s(),
    f = VR({
      permissionMode: p.toolPermissionContext.mode,
      mainLoopModel: As(),
    }),
    {
      defaultSystemPrompt: m,
      userContext: g,
      systemContext: h,
    } = await aXo({
      tools: e,
      mainLoopModel: f,
      additionalWorkingDirectories: Array.from(
        p.toolPermissionContext.additionalWorkingDirectories.keys(),
      ),
      customSystemPrompt: a,
      excludeDynamicSections: c,
      cacheBreakerPhrase: p.cacheBreakerPhrase,
    }),
    y = Sc([...(typeof a === "string" ? [a] : Array.isArray(a) ? a : m), ...(l ? [l] : [])]),
    b = r.at(-1),
    _ = b?.type === "assistant" && b.message.stop_reason === null ? r.slice(0, -1) : r,
    S = {
      messageQueue: Ug,
      agentContext: of(),
      options: {
        commands: t,
        debug: false,
        mainLoopModel: f,
        tools: e,
        verbose: false,
        thinkingConfig:
          u ??
          (Ule() !== false
            ? {
                type: "adaptive",
              }
            : {
                type: "disabled",
              }),
        mcpClients: n,
        mcpResources: {},
        isNonInteractiveSession: true,
        agentDefinitions: {
          activeAgents: d,
          allAgents: [],
        },
        customSystemPrompt: a,
        appendSystemPrompt: l,
        autoCompactWindow: p.autoCompactWindow,
        fastMode: p.fastMode,
        cacheBreakerPhrase: p.cacheBreakerPhrase,
      },
      abortController: Sl(),
      readFileState: o,
      getAppState: s,
      setAppState: i,
      getMcp: () => s().mcp,
      getWebBrowser: () => s().webBrowser,
      setToolPermissionContext: (A) =>
        i((v) => {
          let C = typeof A === "function" ? A(v.toolPermissionContext) : A;
          return v.toolPermissionContext === C
            ? v
            : {
                ...v,
                toolPermissionContext: C,
              };
        }),
      taskRegistry: $L(s, i),
      sessionHooksRegistry: f6e(i),
      getReplContexts: () => s().replContexts,
      setReplContext: N7e(i),
      setWebBrowserSlice: UDe(i),
      setArtifactReadVersion: a$e(i),
      agentLifecycle: rYe(s, i),
      teammateColors: oYe(s, i),
      rootToolSurface: {
        tools: e,
        mainLoopModel: f,
      },
      messages: _,
      turnStartIndex: 0,
      getFileHistoryState: () => {
        return;
      },
      applyFileHistoryOp: () => {},
      applyAttributionOp: () => {},
    };
  return {
    systemPrompt: y,
    userContext: g,
    systemContext: h,
    toolUseContext: S,
    forkContextMessages: _,
  };
}
