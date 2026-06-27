// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rze
// matched 2.1.88 source: src/tools/AgentTool/resumeAgent.ts
// class=modified  jaccard=0.1905  score=0.3591  fileCov=0.2885
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var rze = E(() => {
  ft();
  IXn();
  lH();
});
async function eHe({
  agentId: e,
  prompt: t,
  promptOrigin: n,
  promptIsMeta: r,
  continueInterruptedTurn: o,
  awaitCompletion: s,
  toolUseContext: i,
  canUseTool: a,
  invokingRequestId: l,
  userInitiated: c,
}) {
  let u = Date.now(),
    d = i.getAppState(),
    p = Fr(i),
    { taskRegistry: f } = i,
    m = p.mode,
    g = f.get(e);
  if (El(g)) {
    let ce = !1;
    if (
      (f.update(e, (ae) => {
        if (ae.status === "running" || ae.resuming) return ae;
        return (
          (ce = !0),
          {
            ...ae,
            resuming: !0,
          }
        );
      }),
      !ce)
    )
      throw new qF(`Agent ${e} is already running or being resumed`);
  }
  let h = () => {
      f.update(e, (ce) =>
        ce.resuming
          ? {
              ...ce,
              resuming: !1,
            }
          : ce,
      );
    },
    [y, b] = await Promise.all([M$e(Bu(e)), Moe(Bu(e))]).catch((ce) => {
      throw (
        Le("subagent_launch", "subagent_resume_setup_read_failed"),
        h(),
        ce instanceof qF ? ce : new qF(be(ce))
      );
    });
  if (b?.stoppedByUser) {
    if (!c)
      throw (
        h(),
        new Ibt(
          `Agent ${e} was stopped by the user and won't be resumed. Treat its work as cancelled; only launch a new agent if the user explicitly asks.`,
        )
      );
    let { stoppedByUser: ce, ...ae } = b;
    try {
      await Ype(Bu(e), ae);
    } catch (de) {
      if (Vo(de))
        T(`failed to clear stop marker for ${e}: ${be(de)}`, {
          level: "warn",
        });
      else ke(de);
    }
  }
  let _ = f.get(e),
    A = (El(_) ? _.spawnDepth : b?.spawnDepth) ?? qG(i.agentContext) + 1,
    v = El(_) ? _.startTime : u,
    C = y;
  if (!C) {
    let ce = f.getTranscript(e)?.messages;
    if (ce && ce.length > 0)
      (T(
        `[resumeAgentBackground ${e}] disk transcript missing; using ${ce.length} in-memory messages mirrored during the run`,
      ),
        (C = {
          messages: ce,
          contentReplacements: [],
        }));
  }
  if (!C)
    throw (
      Le("subagent_launch", "subagent_resume_transcript_missing"),
      h(),
      new qF(`No transcript found for agent ID: ${e}`)
    );
  let x = o ? [...Gzt(C.messages)] : C.messages,
    I = r8e(o8e(Hht(x)));
  if (o && I.length > 0 && !LXn(I))
    return (
      f.update(e, (ce) => ({
        ...ce,
        resuming: !1,
        notified: !0,
        evictAfter: Date.now() + nfe,
      })),
      xe("subagent_launch"),
      {
        agentId: e,
        description: b?.description ?? "(resumed)",
        outputFile: jm(e),
      }
    );
  let k = eFn(i.contentReplacementState, I, C.contentReplacements),
    D = b?.worktreePath
      ? await jRo.promises.stat(b.worktreePath).then(
          (ce) => (ce.isDirectory() ? b.worktreePath : void 0),
          () => {
            T(`Resumed worktree ${b.worktreePath} no longer exists; falling back to parent cwd`);
            return;
          },
        )
      : void 0;
  if (D) {
    let ce = new Date();
    await jRo.promises.utimes(D, ce, ce);
  }
  let P = b?.cwd ?? D,
    O =
      b?.isFork === !0
        ? void 0
        : b?.agentType
          ? i.options.agentDefinitions.activeAgents.find((ce) => ce.agentType === b.agentType)
          : void 0,
    L = b?.isFork === !0 || (!O && b?.isFork === void 0 && b?.agentType === h4.agentType),
    M = O ?? (L ? h4 : RAe),
    N = b?.description ?? "(resumed)",
    B;
  if (L) {
    if (i.renderedSystemPrompt) B = i.renderedSystemPrompt;
    else {
      let ce = d.agent
          ? d.agentDefinitions.activeAgents.find((Ee) => Ee.agentType === d.agent)
          : void 0,
        ae = Array.from(p.additionalWorkingDirectories.keys()),
        de = await DL(i.options.tools, i.options.mainLoopModel, ae);
      B = Z5({
        mainThreadAgentDefinition: ce,
        toolUseContext: i,
        customSystemPrompt: i.options.customSystemPrompt,
        defaultSystemPrompt: de,
        appendSystemPrompt: i.options.appendSystemPrompt,
      });
    }
    if (!B)
      throw (
        Le("subagent_launch", "subagent_resume_fork_prompt_missing"),
        h(),
        new qF("Cannot resume fork agent: unable to reconstruct parent system prompt")
      );
  }
  let $ = nq(i),
    q = foe(TAe(M, $), $, void 0, m),
    W = {
      ...p,
      mode: b?.spawnMode ?? M.permissionMode ?? "acceptEdits",
    },
    V = i.options.tools.filter(gk),
    Y = i.getAppState(),
    z = L
      ? i.options.tools
      : TQ(W, kht(Y.mcp.tools.concat(V)), {
          skipReplFilter: !0,
          skillTools: Y.skillTools,
        }),
    K = n
      ? Rn({
          content: G8e(t, n),
          origin: n,
          isMeta: !0,
        })
      : Rn({
          content: t,
          ...(r && {
            isMeta: !0,
          }),
        }),
    Z = {
      agentDefinition: M,
      promptMessages: o ? I : [...I, K],
      toolUseContext: i,
      canUseTool: a,
      isAsync: !0,
      querySource: WDe(M.agentType, Sh(M)),
      spawnedBySkill: void 0,
      model: void 0,
      override: L
        ? {
            systemPrompt: B,
          }
        : void 0,
      availableTools: z,
      forkContextMessages: void 0,
      recordedUuids: new Set(I.map((ce) => ce.uuid)),
      ...(L && {
        useExactTools: !0,
      }),
      worktreePath: D,
      worktreeBranch: b?.worktreeBranch,
      cwd: b?.cwd,
      spawnMode: b?.spawnMode,
      description: b?.description,
      name: b?.name,
      toolUseId: b?.toolUseId,
      contentReplacementState: k,
    },
    J = f.get(e);
  if (!c && El(J) && J.stoppedByUser)
    throw (
      h(),
      new Ibt(
        `Agent ${e} was stopped by the user and won't be resumed. Treat its work as cancelled; only launch a new agent if the user explicitly asks.`,
      )
    );
  if (!r && !o)
    PXn(
      e,
      ez(n)
        ? K
        : Rn({
            content: t,
            origin: n,
          }),
      f,
    );
  let ne = ubt({
    agentId: e,
    ownerAgentId: ls(),
    parentAbortController: s ? i.abortController : void 0,
    spawnDepth: A,
    description: N,
    prompt: t,
    selectedAgent: M,
    taskRegistry: f,
    toolUseId: i.toolUseId,
    cwd: P,
  });
  if ((ezn(e, f), b?.name && i.getAppState().agentNameRegistry.get(b.name) === void 0))
    i.agentLifecycle.registerName(b.name, Bu(e));
  let oe = {
      prompt: t,
      resolvedAgentModel: q,
      isBuiltInAgent: Sh(M),
      startTime: v,
      agentType: M.agentType,
      isAsync: !0,
      agentDepth: A,
      source: M.source,
      pluginId: sfe(M) ? Qo(M.plugin) : void 0,
    },
    re = {
      agentId: e,
      parentAgentId: i.agentId,
      depth: A,
      parentSessionId: VG(),
      agentType: "subagent",
      subagentName: M.agentType,
      displayName: b?.name,
      isAsync: !0,
      isBuiltIn: Sh(M),
      invokingRequestId: l,
      invocationKind: "resume",
      invocationEmitted: !1,
    },
    ee = x9(re, () =>
      Ehe(P, () =>
        V8e({
          taskId: ne.agentId,
          abortController: ne.abortController,
          makeStream: (ce, ae) =>
            o3({
              ...Z,
              override: {
                ...Z.override,
                agentId: Bu(ne.agentId),
                agentContext: re,
                abortController: ne.abortController,
                replHydration: {
                  kind: "resume",
                },
              },
              onCacheSafeParams: ce,
              onQueryProgress: ae,
            }),
          metadata: oe,
          description: N,
          toolUseContext: i,
          taskRegistry: f,
          agentIdForCleanup: e,
          enableSummarization: j8() || L || DX() || Jve(),
          getWorktreeResult: async () =>
            D
              ? {
                  worktreePath: D,
                  ...(b?.worktreeBranch && {
                    worktreeBranch: b.worktreeBranch,
                  }),
                }
              : {},
          shouldNotifyOwner: s ? () => !1 : void 0,
        }),
      ),
    );
  if ((xe("subagent_launch"), s))
    try {
      await ee;
      let ce = f.get(e),
        ae = El(ce)
          ? zl(
              ce.result?.content ?? [],
              `
`,
            )
          : "";
      return {
        agentId: e,
        description: N,
        outputFile: jm(e),
        finalText: ae,
      };
    } finally {
      f.update(e, (ce) => ({
        ...ce,
        notified: !0,
        evictAfter: Date.now() + nfe,
      }));
    }
  return {
    agentId: e,
    description: N,
    outputFile: jm(e),
  };
}
var jRo, qF, Ibt;
