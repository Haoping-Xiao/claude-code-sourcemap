// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pMo
// matched 2.1.88 source: src/utils/forkedAgent.ts
// class=modified  jaccard=0.3997  score=0.7883  fileCov=0.4478
// note: deminified; 14 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var pMo = E(() => {
  rZn = {
    maxConsecutive: 3,
    maxTotal: 20,
  };
});
var yMo = {};
_t(yMo, {
  withDisallowedCommandTools: () => withDisallowedCommandTools,
  withAllowedCommandTools: () => withAllowedCommandTools,
  saveCacheSafeParams: () => saveCacheSafeParams,
  runForkedAgent: () => runForkedAgent,
  prepareForkedCommandContext: () => prepareForkedCommandContext,
  isMainThreadCacheWarm: () => isMainThreadCacheWarm,
  getLastCacheSafeParams: () => getLastCacheSafeParams,
  forkPointUuidOf: () => forkPointUuidOf,
  extractResultText: () => extractResultText,
  createSubagentContext: () => createSubagentContext,
  createGetAppStateWithForkedToolScoping: () => createGetAppStateWithForkedToolScoping,
  createCacheSafeParams: () => createCacheSafeParams,
  FORKED_AGENT_DEFAULT_MAX_TURNS: () => FORKED_AGENT_DEFAULT_MAX_TURNS,
  ASYNC_SHARED_APP_STATE_KEYS: () => ASYNC_SHARED_APP_STATE_KEYS,
});
function saveCacheSafeParams(e) {
  ((jze = e), (mMo = e ? Date.now() : null), (gMo = e ? As() : null));
}
function getLastCacheSafeParams() {
  if (!jze) return null;
  let e = As();
  if (gMo === e) return jze;
  return {
    ...jze,
    toolUseContext: {
      ...jze.toolUseContext,
      options: {
        ...jze.toolUseContext.options,
        mainLoopModel: e,
      },
    },
  };
}
function isMainThreadCacheWarm(e = Date.now()) {
  if (jze === null || mMo === null) return false;
  if (gMo !== As()) return false;
  let t = iCt();
  if (t === null) return false;
  return e - mMo < t * 0.9;
}
function createCacheSafeParams(e) {
  return {
    systemPrompt: e.systemPrompt,
    userContext: e.userContext,
    systemContext: e.systemContext,
    toolUseContext: e.toolUseContext,
    forkContextMessages: e.messages,
    stickyBetas: e.stickyBetas,
  };
}
function withAllowedCommandTools(e, t) {
  if (t.length === 0) return e;
  return {
    ...e,
    alwaysAllowRules: {
      ...e.alwaysAllowRules,
      command: Uo([...(e.alwaysAllowRules.command || []), ...t]),
    },
  };
}
function withDisallowedCommandTools(e, t) {
  if (t.length === 0) return e;
  return {
    ...e,
    alwaysDenyRules: {
      ...e.alwaysDenyRules,
      command: Uo([...(e.alwaysDenyRules.command || []), ...t]),
    },
  };
}
function createGetAppStateWithForkedToolScoping(e, t, n) {
  if (t.length === 0 && n.length === 0) return e;
  return () => {
    let r = e();
    return {
      ...r,
      toolPermissionContext: withDisallowedCommandTools(
        withAllowedCommandTools(r.toolPermissionContext, t),
        n,
      ),
    };
  };
}
async function prepareForkedCommandContext(e, t, n) {
  let o = (await e.getPromptForCommand(t, n)).map((f) => (f.type === "text" ? f.text : "")).join(`
`),
    s = wN(e.allowedTools ?? []),
    i = wN(e.disallowedTools ?? []),
    a = createGetAppStateWithForkedToolScoping(n.getAppState, s, i),
    l = [
      ...(s.length === 0
        ? []
        : [
            {
              kind: "allowed_tools",
              allowedTools: s,
            },
          ]),
      ...(i.length === 0
        ? []
        : [
            {
              kind: "disallowed_tools",
              disallowedTools: i,
            },
          ]),
    ],
    c = e.agent ?? "general-purpose",
    u = n.options.agentDefinitions.activeAgents,
    d =
      u.find((f) => f.agentType === c) ?? u.find((f) => f.agentType === "general-purpose") ?? u[0];
  if (!d) throw Error("No agent available for forked execution");
  let p = [
    Rn({
      content: o,
      isMeta: true,
    }),
  ];
  return {
    skillContent: o,
    modifiedGetAppState: a,
    contextLayers: l,
    baseAgent: d,
    promptMessages: p,
  };
}
function extractResultText(e, t = "Execution completed") {
  let n = MI(e);
  if (!n) return t;
  return (
    zl(
      n.message.content,
      `
`,
    ) || t
  );
}
function createSubagentContext(e, t) {
  let n =
      t?.abortController ?? (t?.shareAbortController ? e.abortController : c$(e.abortController)),
    r = t?.getAppState
      ? t.getAppState
      : t?.shareAbortController
        ? e.getAppState
        : () => {
            let a = e.getAppState();
            if (a.toolPermissionContext.shouldAvoidPermissionPrompts) return a;
            return {
              ...a,
              toolPermissionContext: {
                ...a.toolPermissionContext,
                shouldAvoidPermissionPrompts: true,
              },
            };
          },
    o =
      t?.shareAbortController || t?.getAppState
        ? []
        : [
            {
              kind: "avoid_prompts",
            },
          ],
    s = [...(e.permissionLayers ?? []), ...o, ...(t?.permissionLayers ?? [])],
    i = t?.options ?? e.options;
  if (t?.options && t.options.tools !== e.options.tools) {
    let a = t.options.refreshTools !== void 0 && t.options.refreshTools === e.options.refreshTools,
      l =
        t.options.refreshMcpClients !== void 0 &&
        t.options.refreshMcpClients === e.options.refreshMcpClients;
    if (a || l)
      i = {
        ...t.options,
        refreshTools: a ? void 0 : t.options.refreshTools,
        refreshMcpClients: l ? void 0 : t.options.refreshMcpClients,
      };
  }
  return {
    messageQueue: e.messageQueue,
    readFileState: aSe(t?.readFileState ?? e.readFileState),
    nestedMemoryAttachmentTriggers: [],
    loadedNestedMemoryPaths: {},
    pendingNestedMemoryTriggers: e.pendingNestedMemoryTriggers,
    sessionEnvVars: e.sessionEnvVars,
    dynamicSkillDirTriggers: [],
    memorySelector: pLe(),
    toolDecisions: void 0,
    contentReplacementState:
      t?.contentReplacementState ??
      (e.contentReplacementState ? yIa(e.contentReplacementState) : void 0),
    abortController: n,
    getAppState: r,
    permissionLayers: s,
    setAppState: t?.shareSetAppState
      ? e.setAppState
      : (a) =>
          e.setAppState((l) => {
            let c = a(l);
            if (c === l) return l;
            let u = false,
              d = {
                ...l,
              };
            for (let p of ASYNC_SHARED_APP_STATE_KEYS)
              if (c[p] !== l[p])
                (Object.assign(d, {
                  [p]: c[p],
                }),
                  (u = true));
            return u ? d : l;
          }),
    setToolPermissionContext: t?.shareSetAppState ? e.setToolPermissionContext : () => {},
    getMcp: e.getMcp,
    getWebBrowser: e.getWebBrowser,
    isolationLatch: t?.isolationLatch ?? e.isolationLatch,
    taskRegistry: e.taskRegistry,
    sessionHooksRegistry: e.sessionHooksRegistry,
    getReplContexts: e.getReplContexts,
    setReplContext: e.setReplContext,
    setWebBrowserSlice: e.setWebBrowserSlice,
    setArtifactReadVersion: e.setArtifactReadVersion,
    agentLifecycle: e.agentLifecycle,
    teammateColors: e.teammateColors,
    rootToolSurface: e.rootToolSurface,
    localDenialTracking: t?.shareSetAppState ? e.localDenialTracking : oZn(),
    getFileHistoryState: () => {
      return;
    },
    applyFileHistoryOp: () => {},
    applyAttributionOp: e.applyAttributionOp,
    requestDialog: e.requestDialog,
    setToolJSX: void 0,
    onCompactEvent: void 0,
    onRetryStatus: void 0,
    options: i,
    messages: t?.messages ?? e.messages,
    turnStartIndex: 0,
    agentId: t?.agentId ?? rM(),
    agentType: t?.agentType,
    agentContext: t?.agentContext ?? e.agentContext,
    agentWorktree: e.agentWorktree,
    spawnedByWorkflowRunId: t?.spawnedByWorkflowRunId ?? e.spawnedByWorkflowRunId,
    precomputeSourceKey: t?.precomputeSourceKey,
    teammateContext: t?.teammateContext ?? e.teammateContext,
    queryTracking: {
      chainId: hkl.randomUUID(),
      depth: (e.queryTracking?.depth ?? -1) + 1,
    },
    fileReadingLimits: e.fileReadingLimits,
    userModified: e.userModified,
    criticalSystemReminder_EXPERIMENTAL: t?.criticalSystemReminder_EXPERIMENTAL,
    requireCanUseTool: t?.requireCanUseTool,
  };
}
function forkPointUuidOf(e) {
  let t = e.length - 1,
    n = e[t];
  if (n?.type === "assistant") {
    let r = n.message.id;
    while (t > 0) {
      let o = e[t - 1];
      if (o?.type !== "assistant" || o.message.id !== r) break;
      t--;
    }
  }
  return e[t]?.uuid;
}
async function runForkedAgent({
  promptMessages: e,
  cacheSafeParams: t,
  canUseTool: n,
  querySource: r,
  forkLabel: o,
  overrides: s,
  maxOutputTokens: i,
  maxTurns: a,
  onMessage: l,
  skipTranscript: c,
  skipCacheWrite: u,
  fallbackModel: d,
}) {
  let p = Date.now(),
    f = [],
    m = null,
    g = {
      ...xb,
    },
    {
      systemPrompt: h,
      userContext: y,
      systemContext: b,
      toolUseContext: _,
      forkContextMessages: S,
    } = t,
    A = createSubagentContext(_, {
      ...s,
      options:
        s?.options ??
        (d !== void 0
          ? {
              ..._.options,
            }
          : void 0),
      isolationLatch: s?.isolationLatch ?? {
        current: _.isolationLatch?.current ?? null,
        exemptServers: _.isolationLatch?.exemptServers,
      },
      precomputeSourceKey: s?.precomputeSourceKey ?? _.agentId ?? "main",
    }),
    v = [...S, ...e],
    C = forkPointUuidOf(S),
    x = c ? void 0 : rM(o),
    I = null;
  if (x)
    (await Kpe(e, x).catch((O) =>
      T(`Forked agent [${o}] failed to record initial transcript: ${O}`),
    ),
      (I = e.at(-1)?.uuid ?? null));
  let k = a ?? FORKED_AGENT_DEFAULT_MAX_TURNS,
    D = 0;
  try {
    for await (let O of CN({
      messages: v,
      systemPrompt: h,
      userContext: y,
      systemContext: b,
      canUseTool: n,
      toolUseContext: A,
      querySource: r,
      fallbackModel: d,
      maxOutputTokensOverride: i,
      maxTurns: k,
      skipCacheWrite: u,
      forkPointUuid: C,
      stickyBetas: t.stickyBetas ? RR(t.stickyBetas) : void 0,
    })) {
      if (N8e(O)) {
        if (O.type === "stream_event" && O.event?.type === "message_delta" && O.event.usage) {
          let L = Zoe(
            {
              ...xb,
            },
            O.event.usage,
          );
          g = aZn(g, L);
        }
        continue;
      }
      if (Mrl(O)) continue;
      if (O.type === "assistant") D++;
      if (
        (T(`Forked agent [${o}] received message: type=${O.type}`),
        f.push(O),
        (m = Bpe(f, O, m, v)),
        l?.(O),
        x && (O.type === "assistant" || O.type === "user" || O.type === "progress"))
      ) {
        if (
          (await Kpe([O], x, I).catch((L) =>
            T(`Forked agent [${o}] failed to record transcript: ${L}`),
          ),
          O.type !== "progress")
        )
          I = O.uuid;
      }
    }
  } finally {
    if (m) f.push(...m.preserved);
    (A.readFileState.clear(), (v.length = 0));
  }
  T(
    `Forked agent [${o}] finished: ${f.length} messages, types=[${f.map((O) => O.type).join(", ")}], totalUsage: input=${g.input_tokens} output=${g.output_tokens} cacheRead=${g.cache_read_input_tokens} cacheCreate=${g.cache_creation_input_tokens}`,
  );
  let P = Date.now() - p;
  if (a === void 0 && D >= FORKED_AGENT_DEFAULT_MAX_TURNS)
    G("tengu_forked_agent_default_turns_exceeded", {
      forkLabel: o,
      querySource: r,
      turnCount: D,
    });
  return (
    Ewf({
      forkLabel: o,
      querySource: r,
      durationMs: P,
      messageCount: f.length,
      totalUsage: g,
      queryTracking: _.queryTracking,
    }),
    {
      messages: f,
      totalUsage: g,
    }
  );
}
function Ewf({
  forkLabel: e,
  querySource: t,
  durationMs: n,
  messageCount: r,
  totalUsage: o,
  queryTracking: s,
}) {
  let i = o.input_tokens + o.cache_creation_input_tokens + o.cache_read_input_tokens,
    a = i > 0 ? o.cache_read_input_tokens / i : 0;
  G("tengu_fork_agent_query", {
    forkLabel: e,
    querySource: t,
    durationMs: n,
    messageCount: r,
    inputTokens: o.input_tokens,
    outputTokens: o.output_tokens,
    cacheReadInputTokens: o.cache_read_input_tokens,
    cacheCreationInputTokens: o.cache_creation_input_tokens,
    serviceTier: $e(o.service_tier),
    cacheCreationEphemeral1hTokens: o.cache_creation.ephemeral_1h_input_tokens,
    cacheCreationEphemeral5mTokens: o.cache_creation.ephemeral_5m_input_tokens,
    cacheHitRate: a,
    ...(s && {
      queryChainId: Hr(s.chainId),
      queryDepth: s.depth,
    }),
  });
}
var hkl,
  FORKED_AGENT_DEFAULT_MAX_TURNS = 50,
  jze = null,
  mMo = null,
  gMo = null,
  ASYNC_SHARED_APP_STATE_KEYS;
