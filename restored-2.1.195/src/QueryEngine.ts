// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lXo
// matched 2.1.88 source: src/QueryEngine.ts
// class=modified  jaccard=0.2472  score=0.3281  fileCov=0.5004
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var lXo = E(() => {
  X6();
  S4();
  l$e();
  fp();
  og();
  CAt();
  pQ();
  bm();
  Ao();
  IAt();
  xF();
  m1();
});
class _Uc {
  config;
  mutableMessages;
  abortController;
  permissionDenials;
  totalUsage;
  hasHandledOrphanedPermission = false;
  hasHandledDeferredToolResume = false;
  thinkingTokenEstimate = 0;
  readFileState;
  loadedNestedMemoryPaths = {};
  sessionEnvVars;
  isolationLatch;
  pendingNestedMemoryTriggers;
  memorySelector = pLe();
  constructor(e) {
    ((this.config = e),
      (this.mutableMessages = e.initialMessages ?? []),
      (this.abortController = e.abortController ?? Sl()),
      (this.permissionDenials = []),
      (this.readFileState = e.readFileCache),
      (this.sessionEnvVars = e.sessionEnvVars ?? new Map()),
      (this.isolationLatch = e.isolationLatch ?? C$e()),
      (this.pendingNestedMemoryTriggers = e.pendingNestedMemoryTriggers),
      (this.totalUsage = xb));
  }
  async *submitMessage(e, t) {
    let {
      cwd: n,
      commands: r,
      tools: o,
      refreshTools: s,
      refreshMcpClients: i,
      mcpClients: a,
      verbose: l = false,
      thinkingConfig: c,
      maxTurns: u,
      maxBudgetUsd: d,
      taskBudget: p,
      canUseTool: f,
      customSystemPrompt: m,
      appendSystemPrompt: g,
      planModeInstructions: h,
      appendSubagentSystemPrompt: y,
      toolAliases: b,
      excludeDynamicSections: _,
      userSpecifiedModel: S,
      fallbackModel: A,
      jsonSchema: v,
      getAppState: C,
      setAppState: x,
      replayUserMessages: I = false,
      includePartialMessages: k = false,
      forwardSubagentText: D = false,
      agents: P = [],
      allowedAgentTypes: O,
      setSDKStatus: L,
      orphanedPermission: M,
      deferredToolUse: N,
    } = this.config;
    Uy(n);
    let B = !Z3(),
      $ = performance.now(),
      q = 0,
      W = 0,
      V = 0,
      Y = (Nt, Ut, Fn) => {
        if (this.permissionDenials.some((xi) => xi.tool_use_id === Ut)) return;
        this.permissionDenials.push({
          tool_name: KZt(Nt.name),
          tool_use_id: Ut,
          tool_input: Fn,
        });
      },
      z = async (Nt, Ut, Fn, xi, jn, So) => {
        let Mo = await f(Nt, Ut, Fn, xi, jn, So);
        if (Mo.behavior !== "allow") Y(Nt, jn, Ut);
        return Mo;
      },
      K = C(),
      Z = S && (KS(S) || xa(S)) ? zo(S) : As(),
      J = VR({
        permissionMode: K.toolPermissionContext.mode,
        mainLoopModel: Z,
      }),
      ne = c
        ? c
        : Ule() !== false
          ? {
              type: "adaptive",
            }
          : {
              type: "disabled",
            };
    wC("before_getSystemPrompt");
    let oe = performance.now(),
      {
        defaultSystemPrompt: re,
        userContext: ee,
        systemContext: ce,
      } = await aXo({
        tools: o,
        mainLoopModel: J,
        additionalWorkingDirectories: Array.from(
          K.toolPermissionContext.additionalWorkingDirectories.keys(),
        ),
        customSystemPrompt: m,
        excludeDynamicSections: _,
        cacheBreakerPhrase: K.cacheBreakerPhrase,
      });
    (Zc("qe_system_prompt_ms", performance.now() - oe, oe), wC("after_getSystemPrompt"));
    let ae = {
        ...ee,
        ...gLm(a, EZ() ? (ATe() ?? void 0) : void 0),
      },
      de = m !== void 0 && Ikn() ? await jNt(J) : null,
      Ee = Sc([
        ...(typeof m === "string" ? [m] : Array.isArray(m) ? m : re),
        ...(de ? [de] : []),
        ...(g ? [g] : []),
      ]),
      me = o.some((Nt) => Ql(Nt, Ip)),
      pe = {
        messages: this.mutableMessages,
        messageQueue: Ug,
        turnStartIndex: 0,
        setMessages: (Nt) => {
          let Ut = Nt(this.mutableMessages);
          if (Ut !== this.mutableMessages)
            ((this.mutableMessages.length = 0), this.mutableMessages.push(...Ut));
        },
        applyMessageOp: (Nt) => {
          let Ut = mpr(this.mutableMessages, Nt);
          if (Ut !== this.mutableMessages)
            ((this.mutableMessages.length = 0), this.mutableMessages.push(...Ut));
        },
        onChangeAPIKey: () => {},
        onPermissionDenial: Y,
        requestDialog: this.config.requestDialog,
        sessionState: this.config.sessionState,
        agentContext: of(),
        options: {
          commands: r,
          debug: false,
          tools: o,
          refreshTools: s,
          refreshMcpClients: i,
          verbose: l,
          mainLoopModel: Z,
          fallbackModel: A,
          thinkingConfig: ne,
          mcpClients: a,
          mcpResources: {},
          ideInstallationStatus: null,
          isNonInteractiveSession: true,
          customSystemPrompt: m,
          appendSystemPrompt: g,
          planModeInstructions: h,
          appendSubagentSystemPrompt: y,
          toolAliases: b,
          agentDefinitions: {
            activeAgents: P,
            allAgents: [],
            allowedAgentTypes: O,
          },
          theme: mW(wc("theme", "dark").value),
          maxBudgetUsd: d,
          messageClientPlatform: t?.clientPlatform,
          forwardSubagentText: D,
          requiresStructuredOutput: v !== void 0 && me,
          autoCompactWindow: K.autoCompactWindow,
          fastMode: K.fastMode,
          cacheBreakerPhrase: K.cacheBreakerPhrase,
          activeGoal: K.activeGoal,
          ultraplanSessionUrl: K.ultraplanSessionUrl,
        },
        getAppState: C,
        setAppState: x,
        getMcp: () => C().mcp,
        getWebBrowser: () => C().webBrowser,
        setToolPermissionContext: (Nt) =>
          x((Ut) => {
            let Fn = typeof Nt === "function" ? Nt(Ut.toolPermissionContext) : Nt;
            return Ut.toolPermissionContext === Fn
              ? Ut
              : {
                  ...Ut,
                  toolPermissionContext: Fn,
                };
          }),
        taskRegistry: $L(C, x),
        sessionHooksRegistry: f6e(x),
        getReplContexts: () => C().replContexts,
        setReplContext: N7e(x),
        setWebBrowserSlice: UDe(x),
        setArtifactReadVersion: a$e(x),
        agentLifecycle: rYe(C, x),
        teammateColors: oYe(C, x),
        rootToolSurface: {
          tools: o,
          mainLoopModel: Z,
        },
        abortController: this.abortController,
        readFileState: this.readFileState,
        nestedMemoryAttachmentTriggers: [],
        pendingNestedMemoryTriggers: this.pendingNestedMemoryTriggers,
        loadedNestedMemoryPaths: this.loadedNestedMemoryPaths,
        sessionEnvVars: this.sessionEnvVars,
        dynamicSkillDirTriggers: [],
        memorySelector: this.memorySelector,
        isolationLatch: this.isolationLatch,
        getFileHistoryState: () => C().fileHistory,
        applyFileHistoryOp: (Nt) => {
          x((Ut) => {
            let Fn = aMe(Ut.fileHistory, Nt);
            if (Fn === Ut.fileHistory) return Ut;
            return {
              ...Ut,
              fileHistory: Fn,
            };
          });
        },
        applyAttributionOp: (Nt) => {
          x((Ut) => {
            let Fn = Hjn(Ut.attribution, Nt);
            if (Fn === Ut.attribution) return Ut;
            return {
              ...Ut,
              attribution: Fn,
            };
          });
        },
        onCompactEvent: (Nt) => {
          if (Nt.type === "sdk_status") L?.(Nt.status, Nt.metadata);
        },
        onQueryEvent: (Nt) => {
          if (Nt.type === "apply_flag_settings") k1e(Nt.settings, x);
        },
      };
    if (M && !this.hasHandledOrphanedPermission) {
      this.hasHandledOrphanedPermission = true;
      for await (let Nt of mHl(M, o, this.mutableMessages, pe)) yield Nt;
    }
    if (N && !this.hasHandledDeferredToolResume) {
      if (((this.hasHandledDeferredToolResume = true), !_l(o, N.toolName, b))) {
        (T(
          `Deferred tool resume: tool '${N.toolName}' is no longer available (MCP server disconnected or tool removed)`,
          {
            level: "warn",
          },
        ),
          yield {
            type: "result",
            subtype: "success",
            is_error: true,
            duration_ms: Math.max(0, Math.round(performance.now() - $)),
            duration_api_ms: WH(),
            num_turns: this.mutableMessages.length,
            result: "",
            stop_reason: "tool_deferred_unavailable",
            session_id: Rt(),
            total_cost_usd: jb(),
            usage: this.totalUsage,
            modelUsage: WC(),
            permission_denials: this.permissionDenials,
            deferred_tool_use: {
              id: N.toolUseID,
              name: N.toolName,
              input: N.toolInput,
            },
            fast_mode_state: QB(Z, K.fastMode),
            origin: t?.origin,
            uuid: HE.randomUUID(),
          });
        return;
      }
      let Nt;
      for await (let Ut of fHl(N, z, this.mutableMessages, pe)) {
        let Fn = "attachment" in Ut ? Ut.attachment : void 0;
        if (Fn?.type === "hook_deferred_tool") Nt = Fn;
        yield Ut;
      }
      if (Nt) {
        if (B) await nz(this.mutableMessages);
        yield {
          type: "result",
          subtype: "success",
          is_error: false,
          duration_ms: Math.max(0, Math.round(performance.now() - $)),
          duration_api_ms: WH(),
          num_turns: this.mutableMessages.length,
          result: "",
          stop_reason: "tool_deferred",
          session_id: Rt(),
          total_cost_usd: jb(),
          usage: this.totalUsage,
          modelUsage: WC(),
          permission_denials: this.permissionDenials,
          deferred_tool_use: {
            id: Nt.toolUseID,
            name: Nt.toolName,
            input: Nt.toolInput,
          },
          fast_mode_state: QB(Z, K.fastMode),
          origin: t?.origin,
          uuid: HE.randomUUID(),
        };
        return;
      }
    }
    let ge = pa("before_processUserInput", {
        once: true,
      }),
      {
        messages: he,
        shouldQuery: ie,
        allowedTools: le,
        model: He,
        effort: ye,
        resultText: ue,
      } = await bTt({
        input: e,
        mode: "prompt",
        setToolJSX: () => {},
        context: {
          ...pe,
          messages: this.mutableMessages,
        },
        messages: this.mutableMessages,
        uuid: t?.uuid,
        isMeta: t?.isMeta,
        shouldQuery: t?.shouldQuery,
        querySource: "sdk",
        origin: t?.origin,
      });
    if (ge) pa("after_processUserInput");
    let we = ie && t?.shouldQuery !== false;
    if (t?.origin) fcr(he, t.origin);
    if (t?.verifiedSlackHumanTurn) dpr(he, t.uuid);
    this.mutableMessages.push(...he);
    let Ce = [...this.mutableMessages],
      Ie = 0,
      Ve,
      Ze = Ce.length,
      Be = (Nt = false) => {
        let Ut = Ie,
          Fn = KQt(Ce, Math.max(Ut, Ze), !Nt);
        if (Ut >= Fn) return Promise.resolve(null);
        let xi = Ut === 0 && Fn === Ce.length ? Ce : Ce.slice(Ut, Fn);
        Ie = Fn;
        let jn = Ve;
        for (let So = xi.length - 1; So >= 0; So--) {
          let Mo = xi[So];
          if (Ose(Mo) && pme(Mo)) {
            Ve = Mo.uuid;
            break;
          }
        }
        return nz(xi, void 0, jn, Ce);
      },
      Me = (Nt) => {
        let Ut = Ce.findLastIndex((xi) => xi.uuid === Nt);
        if (Ut !== -1) {
          let xi = Ce[Ut];
          if ((Ce.splice(Ut, 1), Ie > Ut)) {
            if ((Ie--, B))
              (G("tengu_tombstone_persisted_removal", {
                message_type: $e(xi.type),
              }),
                JQt(Nt));
          }
          if (Ze > Ut) Ze--;
        }
        let Fn = this.mutableMessages.findLastIndex((xi) => xi.uuid === Nt);
        if (Fn !== -1) this.mutableMessages.splice(Fn, 1);
      };
    if (B && he.length > 0) {
      let Nt = Be();
      if (md());
      else if ((await Nt, Oe.CLAUDE_CODE_EAGER_FLUSH || Oe.CLAUDE_CODE_IS_COWORK)) await IC();
    }
    let Ue = he.filter(
        (Nt) =>
          (Nt.type === "user" &&
            !Nt.isMeta &&
            !Nt.toolUseResult &&
            yUc().replayableUserMessagesFilter(Nt)) ||
          (Nt.type === "system" && Nt.subtype === "compact_boundary"),
      ),
      tt = I ? Ue : [];
    x((Nt) => ({
      ...Nt,
      toolPermissionContext: {
        ...Nt.toolPermissionContext,
        alwaysAllowRules: {
          ...Nt.toolPermissionContext.alwaysAllowRules,
          command: le,
        },
      },
    }));
    let bt = He != null && (KS(He) || xa(He));
    if (He && !bt)
      T(
        `Skill/command model "${He}" is not in the availableModels allowlist; keeping the session model`,
        {
          level: "warn",
        },
      );
    let Ke = bt ? He : Z,
      Et = pe.options.activeSkill,
      ct =
        ye !== void 0
          ? [
              ...(pe.permissionLayers ?? []),
              {
                kind: "effort",
                effort: ye,
              },
            ]
          : pe.permissionLayers,
      Je = C();
    ((pe = {
      messages: Ce,
      messageQueue: Ug,
      turnStartIndex: 0,
      permissionLayers: ct,
      setMessages: () => {},
      applyMessageOp: () => {},
      onChangeAPIKey: () => {},
      onPermissionDenial: Y,
      requestDialog: this.config.requestDialog,
      sessionState: this.config.sessionState,
      agentContext: of(),
      options: {
        commands: r,
        debug: false,
        tools: o,
        refreshTools: s,
        refreshMcpClients: i,
        verbose: l,
        mainLoopModel: Ke,
        fallbackModel: A,
        thinkingConfig: ne,
        mcpClients: a,
        mcpResources: {},
        ideInstallationStatus: null,
        isNonInteractiveSession: true,
        customSystemPrompt: m,
        appendSystemPrompt: g,
        planModeInstructions: h,
        appendSubagentSystemPrompt: y,
        toolAliases: b,
        theme: mW(wc("theme", "dark").value),
        agentDefinitions: {
          activeAgents: P,
          allAgents: [],
          allowedAgentTypes: O,
        },
        maxBudgetUsd: d,
        messageClientPlatform: t?.clientPlatform,
        forwardSubagentText: D,
        activeSkill: Et,
        requiresStructuredOutput: v !== void 0 && me,
        autoCompactWindow: Je.autoCompactWindow,
        fastMode: Je.fastMode,
        cacheBreakerPhrase: Je.cacheBreakerPhrase,
        activeGoal: Je.activeGoal,
        ultraplanSessionUrl: Je.ultraplanSessionUrl,
      },
      getAppState: C,
      setAppState: x,
      getMcp: () => C().mcp,
      getWebBrowser: () => C().webBrowser,
      setToolPermissionContext: (Nt) =>
        x((Ut) => {
          let Fn = typeof Nt === "function" ? Nt(Ut.toolPermissionContext) : Nt;
          return Ut.toolPermissionContext === Fn
            ? Ut
            : {
                ...Ut,
                toolPermissionContext: Fn,
              };
        }),
      taskRegistry: $L(C, x),
      sessionHooksRegistry: f6e(x),
      getReplContexts: () => C().replContexts,
      setReplContext: N7e(x),
      setWebBrowserSlice: UDe(x),
      setArtifactReadVersion: a$e(x),
      agentLifecycle: rYe(C, x),
      teammateColors: oYe(C, x),
      rootToolSurface: {
        tools: o,
        mainLoopModel: Ke,
      },
      abortController: this.abortController,
      readFileState: this.readFileState,
      nestedMemoryAttachmentTriggers: [],
      pendingNestedMemoryTriggers: this.pendingNestedMemoryTriggers,
      loadedNestedMemoryPaths: this.loadedNestedMemoryPaths,
      sessionEnvVars: this.sessionEnvVars,
      dynamicSkillDirTriggers: [],
      memorySelector: this.memorySelector,
      isolationLatch: this.isolationLatch,
      getFileHistoryState: pe.getFileHistoryState,
      applyFileHistoryOp: pe.applyFileHistoryOp,
      applyAttributionOp: pe.applyAttributionOp,
      onCompactEvent: (Nt) => {
        if (Nt.type === "sdk_status") L?.(Nt.status, Nt.metadata);
      },
      onQueryEvent: (Nt) => {
        if (Nt.type === "apply_flag_settings") k1e(Nt.settings, x);
      },
    }),
      wC("before_skills_plugins"));
    let gt = performance.now(),
      [st, { enabled: xt, errors: vt, warnings: jt }] = await Promise.all([Lue($t()), mp()]);
    (Zc("qe_plugin_skills_load_ms", performance.now() - gt, gt), wC("after_skills_plugins"));
    let en = performance.now(),
      Dn = mTt(),
      nn = gTt({
        ...Dn,
        tools: o,
        mcpClients: a,
        model: Ke,
        permissionMode: K.toolPermissionContext.mode,
        commands: r,
        agents: P,
        skills: st,
        plugins: xt,
        pluginErrors: [...vt, ...$Nc()].filter(fKi).map((Nt) => ({
          plugin: Nt.source,
          type: Nt.type,
          message: iS(Nt),
        })),
        pluginWarnings: jt
          .filter(
            (Nt) =>
              Nt.source.endsWith("@inline") ||
              Nt.source.startsWith("inline[") ||
              Nt.source.endsWith(`@${JE}`),
          )
          .map((Nt) => ({
            plugin: Nt.source,
            type: Nt.type,
            message: zM(Nt),
          })),
        fastModeState: QB(Ke, K.fastMode),
      });
    if (
      (pur(nn, en),
      yield nn,
      wC("system_message_yielded"),
      In("info", "cli_ask_should_query_resolved", {
        should_query: we,
        from_user_input: ie,
        from_options: t?.shouldQuery,
      }),
      !we)
    ) {
      for (let Nt of he) {
        if (
          Nt.type === "user" &&
          typeof Nt.message.content === "string" &&
          (Nt.message.content.includes(`<${KC}>`) ||
            Nt.message.content.includes(`<${aY}>`) ||
            Nt.isCompactSummary)
        )
          yield {
            type: "user",
            message: {
              ...Nt.message,
              content: Ja(Nt.message.content),
            },
            session_id: Rt(),
            parent_tool_use_id: null,
            uuid: Nt.uuid,
            timestamp: Nt.timestamp,
            isReplay: !Nt.isCompactSummary,
            isSynthetic: Nt.isMeta || Nt.isVisibleInTranscriptOnly,
          };
        if (
          Nt.type === "system" &&
          Nt.subtype === "local_command" &&
          typeof Nt.content === "string" &&
          (Nt.content.includes(`<${KC}>`) || Nt.content.includes(`<${aY}>`))
        )
          yield mJt(Nt.content, Nt.uuid);
        if (Nt.type === "system" && Nt.subtype === "compact_boundary")
          yield {
            type: "system",
            subtype: "compact_boundary",
            session_id: Rt(),
            uuid: Nt.uuid,
            compact_metadata: MAt(Nt.compactMetadata),
          };
        if (Nt.type === "system" && Nt.subtype === "informational")
          yield {
            type: "system",
            subtype: "informational",
            content: Ja(Nt.content),
            level: Nt.level,
            ...(Nt.toolUseID && {
              tool_use_id: Nt.toolUseID,
            }),
            ...(Nt.preventContinuation && {
              prevent_continuation: Nt.preventContinuation,
            }),
            uuid: Nt.uuid,
            session_id: Rt(),
          };
      }
      if (B) {
        if ((await Be(), Oe.CLAUDE_CODE_EAGER_FLUSH || Oe.CLAUDE_CODE_IS_COWORK)) await IC();
      }
      for (let Nt of t?.shouldQuery === false ? tt : [])
        if (Nt.type === "user") {
          let Fn = t?.uuid && Nt.uuid === t.uuid ? t?.fileAttachments : void 0;
          yield {
            type: "user",
            message: Nt.message,
            session_id: Rt(),
            parent_tool_use_id: null,
            uuid: Nt.uuid,
            timestamp: Nt.timestamp,
            isReplay: true,
            ...(Fn &&
              Fn.length > 0 && {
                file_attachments: Fn,
              }),
            ...(Nt.origin && {
              origin: Nt.origin,
            }),
          };
        }
      yield {
        type: "result",
        subtype: "success",
        is_error: false,
        duration_ms: Math.max(0, Math.round(performance.now() - $)),
        duration_api_ms: WH(),
        num_turns: 0,
        result: ue ?? "",
        stop_reason: null,
        session_id: Rt(),
        total_cost_usd: jb(),
        usage: this.totalUsage,
        modelUsage: WC(),
        permission_denials: this.permissionDenials,
        fast_mode_state: QB(Ke, K.fastMode),
        origin: t?.origin,
        uuid: HE.randomUUID(),
      };
      return;
    }
    if (K_() && B)
      he.filter(yUc().replayableUserMessagesFilter).forEach((Nt) => {
        Z9e(pe.getFileHistoryState, pe.applyFileHistoryOp, Nt.uuid);
      });
    let Ln = xb,
      Hn = 1,
      kr = false,
      Mr = [],
      fe = 0,
      Te = new Set(),
      Re,
      Ne = null,
      it = null,
      Tt = null,
      un = false,
      ze = null,
      Mt = () => {
        if (ze === null) return [];
        let { retracted: Nt } = ze;
        if (
          ((ze = null),
          G("tengu_partial_stream_retraction_closed", {
            stop_reason: Oo(Nt.stop_reason),
            had_open_block: false,
          }),
          !k)
        )
          return [];
        return [
          {
            type: "stream_event",
            event: {
              type: "message_delta",
              context_management: null,
              delta: {
                container: null,
                stop_details: null,
                stop_reason: Nt.stop_reason,
                stop_sequence: Nt.stop_sequence,
              },
              usage: {
                cache_creation_input_tokens: Nt.usage.cache_creation_input_tokens ?? null,
                cache_read_input_tokens: Nt.usage.cache_read_input_tokens ?? null,
                input_tokens: Nt.usage.input_tokens ?? null,
                iterations: Nt.usage.iterations ?? null,
                output_tokens: Nt.usage.output_tokens,
                server_tool_use: Nt.usage.server_tool_use ?? null,
              },
            },
            session_id: Rt(),
            parent_tool_use_id: null,
            uuid: HE.randomUUID(),
          },
          {
            type: "stream_event",
            event: {
              type: "message_stop",
            },
            session_id: Rt(),
            parent_tool_use_id: null,
            uuid: HE.randomUUID(),
          },
        ];
      },
      Qt = null,
      Er = PFe().at(-1),
      pt = v ? aVo(this.mutableMessages, Ip) : 0,
      ln = {},
      pn,
      ir = new Map(),
      Rr = HE.randomUUID();
    try {
      for await (let Nt of hLm(
        CN({
          messages: Ce,
          systemPrompt: Ee,
          userContext: ae,
          systemContext: ce,
          canUseTool: z,
          toolUseContext: pe,
          fallbackModel: A,
          querySource: "sdk",
          maxTurns: u,
          taskBudget: p,
          stopHookActive: t?.stopHookActive,
        }),
        ln,
      )) {
        if (
          Nt.type === "assistant" ||
          Nt.type === "user" ||
          (Nt.type === "system" && Nt.subtype === "compact_boundary")
        ) {
          if (Nt.type === "assistant" && !q) q = performance.now();
          if (B && Nt.type === "system" && Nt.subtype === "compact_boundary") {
            let Ut =
              Nt.compactMetadata?.preservedMessages?.uuids.at(-1) ??
              Nt.compactMetadata?.preservedSegment?.tailUuid;
            if (Ut) {
              let Fn = this.mutableMessages.findLastIndex((xi) => xi.uuid === Ut);
              if (Fn !== -1)
                (await nz(this.mutableMessages.slice(0, Fn + 1)), (Ie = 0), (Ve = void 0));
            }
          }
          if ((Ce.push(Nt), B))
            if (Nt.type === "assistant") Be();
            else await Be();
          if (!kr && tt.length > 0) {
            kr = true;
            for (let Ut of tt)
              if (Ut.type === "user") {
                let xi = t?.uuid && Ut.uuid === t.uuid ? t?.fileAttachments : void 0;
                yield {
                  type: "user",
                  message: Ut.message,
                  session_id: Rt(),
                  parent_tool_use_id: null,
                  uuid: Ut.uuid,
                  timestamp: Ut.timestamp,
                  isReplay: true,
                  ...(xi &&
                    xi.length > 0 && {
                      file_attachments: xi,
                    }),
                  ...(Ut.origin && {
                    origin: Ut.origin,
                  }),
                };
              }
          }
        }
        if (Nt.type === "user") Hn++;
        switch (Nt.type) {
          case "sdk_status":
            yield {
              type: "system",
              subtype: "status",
              status: Nt.status,
              ...(Nt.metadata?.compactResult !== void 0 && {
                compact_result: Nt.metadata.compactResult,
              }),
              ...(Nt.metadata?.compactError !== void 0 && {
                compact_error: Nt.metadata.compactError,
              }),
              session_id: Rt(),
              uuid: HE.randomUUID(),
            };
            continue;
          case "compact_progress":
          case "stream_mode":
          case "response_length":
            continue;
          case "tombstone": {
            if (k && it !== null && Nt.message.type === "assistant" && Nt.message.message.id === it)
              if (Nt.displayOnly === true)
                G("tengu_partial_stream_retraction_display_only", {
                  had_open_block: Tt !== null,
                });
              else {
                let Ut = Nt.message.message;
                if (Tt === null)
                  ((ze = {
                    messageId: it,
                    retracted: Ut,
                  }),
                    (it = null));
                else
                  (yield {
                    type: "stream_event",
                    event: {
                      type: "content_block_stop",
                      index: Tt,
                    },
                    session_id: Rt(),
                    parent_tool_use_id: null,
                    uuid: HE.randomUUID(),
                  },
                    yield {
                      type: "stream_event",
                      event: {
                        type: "message_delta",
                        context_management: null,
                        delta: {
                          container: null,
                          stop_details: null,
                          stop_reason: Ut.stop_reason,
                          stop_sequence: Ut.stop_sequence,
                        },
                        usage: {
                          cache_creation_input_tokens: Ut.usage.cache_creation_input_tokens ?? null,
                          cache_read_input_tokens: Ut.usage.cache_read_input_tokens ?? null,
                          input_tokens: Ut.usage.input_tokens ?? null,
                          iterations: Ut.usage.iterations ?? null,
                          output_tokens: Ut.usage.output_tokens,
                          server_tool_use: Ut.usage.server_tool_use ?? null,
                        },
                      },
                      session_id: Rt(),
                      parent_tool_use_id: null,
                      uuid: HE.randomUUID(),
                    },
                    yield {
                      type: "stream_event",
                      event: {
                        type: "message_stop",
                      },
                      session_id: Rt(),
                      parent_tool_use_id: null,
                      uuid: HE.randomUUID(),
                    },
                    G("tengu_partial_stream_retraction_closed", {
                      stop_reason: Oo(Ut.stop_reason),
                      had_open_block: true,
                    }),
                    (it = null),
                    (Tt = null));
              }
            if (Nt.message.type === "assistant") {
              let Ut = Nt.message.message.content,
                Fn = Array.isArray(Ut)
                  ? Ut.flatMap((xi) => (xi.type === "tool_use" && xi.name === Ip ? [xi.id] : []))
                  : [];
              if (Fn.length > 0) {
                fe++;
                for (let So of Fn) Te.add(So);
                let xi = (So) => So.toolUseID === void 0 || Fn.includes(So.toolUseID),
                  jn = Mr.filter(xi);
                Mr = Mr.filter((So) => !xi(So));
                for (let So of jn) Me(So.attachmentUuid);
                G("tengu_structured_output_retracted", {
                  retracted_results: jn.length,
                  surviving_results: Mr.length,
                  tombstoned_calls: fe,
                });
              }
            }
            Me(Nt.message.uuid);
            break;
          }
          case "assistant": {
            if (Nt.message.stop_reason != null) Ne = Nt.message.stop_reason;
            this.mutableMessages.push(Nt);
            let Ut = await gPc(Nt, Rr, C, this.abortController.signal);
            if (Ut !== Nt) ir.set(Nt, Ut);
            yield* __t(Ut, s?.() ?? o);
            break;
          }
          case "progress":
            if ((this.mutableMessages.push(Nt), B)) (Ce.push(Nt), Be());
            yield* __t(Nt, s?.() ?? o);
            break;
          case "user":
            if ((this.mutableMessages.push(Nt), Qt?.anchorUuid === Nt.uuid))
              (this.mutableMessages.push(...Qt.preserved), (Qt = null));
            yield* __t(Nt, s?.() ?? o);
            break;
          case "stream_event":
            if (ze !== null)
              if (Nt.event.type === "ping");
              else if (Nt.event.type === "message_start") yield* Mt();
              else ((it = ze.messageId), (ze = null));
            if (k && Nt.event.type === "message_start" && it !== null) {
              let Ut = Tt !== null;
              if (Tt !== null)
                yield {
                  type: "stream_event",
                  event: {
                    type: "content_block_stop",
                    index: Tt,
                  },
                  session_id: Rt(),
                  parent_tool_use_id: null,
                  uuid: HE.randomUUID(),
                };
              (yield {
                type: "stream_event",
                event: {
                  type: "message_delta",
                  context_management: null,
                  delta: {
                    container: null,
                    stop_details: null,
                    stop_reason: null,
                    stop_sequence: null,
                  },
                  usage: {
                    cache_creation_input_tokens: Ln.cache_creation_input_tokens,
                    cache_read_input_tokens: Ln.cache_read_input_tokens,
                    input_tokens: Ln.input_tokens,
                    iterations: Ln.iterations ?? null,
                    output_tokens: Ln.output_tokens,
                    server_tool_use: Ln.server_tool_use ?? null,
                  },
                },
                session_id: Rt(),
                parent_tool_use_id: null,
                uuid: HE.randomUUID(),
              },
                yield {
                  type: "stream_event",
                  event: {
                    type: "message_stop",
                  },
                  session_id: Rt(),
                  parent_tool_use_id: null,
                  uuid: HE.randomUUID(),
                },
                G("tengu_partial_stream_retraction_closed", {
                  stop_reason: void 0,
                  had_open_block: Ut,
                  source: We("stale_message_start"),
                }),
                (it = null),
                (Tt = null));
            }
            if (Nt.event.type === "message_start")
              ((it = Nt.event.message.id), (Tt = null), (un = false));
            else if (Nt.event.type === "content_block_start") Tt = Nt.event.index;
            else if (Nt.event.type === "content_block_stop") ((Tt = null), (un = true));
            else if (Nt.event.type === "message_stop") ((it = null), (Tt = null));
            if (Nt.event.type === "message_start") {
              if (!W) W = performance.now();
              if (!V && Nt.requestSentAtMs) V = Nt.requestSentAtMs;
              ((Ln = xb), (Ln = Zoe(Ln, Nt.event.message.usage)));
            }
            if (Nt.event.type === "message_delta") {
              if (
                ((Ln = NKt(Nt.event.usage)?.servedFallbackModel
                  ? hqo(Ln, Nt.event.usage)
                  : Zoe(Ln, Nt.event.usage)),
                Nt.event.delta.stop_reason != null)
              )
                Ne = Nt.event.delta.stop_reason;
              if (B) Be();
            }
            if (Nt.event.type === "message_stop") this.totalUsage = aZn(this.totalUsage, Ln);
            if (Nt.event.type === "content_block_start") this.thinkingTokenEstimate = 0;
            else if (Nt.event.type === "content_block_delta") {
              let { delta: Ut } = Nt.event;
              if (Ut.type === "thinking_delta") {
                let Fn;
                if ("estimated_tokens" in Ut && typeof Ut.estimated_tokens === "number")
                  Fn = Ut.estimated_tokens;
                else if (typeof Ut.thinking === "string" && Ut.thinking.length > 0)
                  Fn = bZt(Ut.thinking);
                if (Fn !== void 0)
                  ((this.thinkingTokenEstimate += Fn),
                    yield {
                      type: "system",
                      subtype: "thinking_tokens",
                      estimated_tokens: this.thinkingTokenEstimate,
                      estimated_tokens_delta: Fn,
                      uuid: HE.randomUUID(),
                      session_id: Rt(),
                    });
              } else if (Ut.type === "signature_delta" && this.thinkingTokenEstimate > 0) {
                let Fn = Math.ceil(l5e(Ut.signature.length) / 4);
                if (Fn > this.thinkingTokenEstimate) {
                  let xi = Fn - this.thinkingTokenEstimate;
                  ((this.thinkingTokenEstimate = Fn),
                    yield {
                      type: "system",
                      subtype: "thinking_tokens",
                      estimated_tokens: this.thinkingTokenEstimate,
                      estimated_tokens_delta: xi,
                      uuid: HE.randomUUID(),
                      session_id: Rt(),
                    });
                }
              }
            }
            if (k)
              yield {
                type: "stream_event",
                event: Nt.event,
                session_id: Rt(),
                parent_tool_use_id: null,
                uuid: HE.randomUUID(),
                ...(Nt.ttftMs !== void 0 && {
                  ttft_ms: Nt.ttftMs,
                }),
              };
            break;
          case "attachment":
            if ((this.mutableMessages.push(Nt), B)) (Ce.push(Nt), Be());
            if (Nt.attachment.type === "relevant_memories") {
              let Ut = dur(Nt.attachment.memories);
              if (Ut) yield Ut;
            } else if (Nt.attachment.type === "structured_output") {
              if (
                Nt.attachment.toolUseID !== void 0 ? Te.has(Nt.attachment.toolUseID) : Te.size > 0
              )
                (Me(Nt.uuid), G("tengu_structured_output_late_retraction_drop", {}));
              else
                Mr = [
                  ...Mr,
                  {
                    toolUseID: Nt.attachment.toolUseID,
                    attachmentUuid: Nt.uuid,
                    data: Nt.attachment.data,
                  },
                ];
            } else if (Nt.attachment.type === "hook_deferred_tool")
              Re = {
                id: Nt.attachment.toolUseID,
                name: Nt.attachment.toolName,
                input: Nt.attachment.toolInput,
              };
            else if (Nt.attachment.type === "max_turns_reached") {
              pn = {
                turnCount: Nt.attachment.turnCount,
                maxTurns: Nt.attachment.maxTurns,
              };
              continue;
            } else if (I && Nt.attachment.type === "queued_command") {
              let Ut = Nt.attachment;
              yield {
                type: "user",
                message: {
                  role: "user",
                  content: Ut.prompt,
                },
                session_id: Rt(),
                parent_tool_use_id: null,
                uuid: Ut.source_uuid || Nt.uuid,
                timestamp: Nt.timestamp,
                isReplay: true,
                ...(Ut.fileAttachments?.length && {
                  file_attachments: Ut.fileAttachments,
                }),
                ...(Ut.origin && {
                  origin: Ut.origin,
                }),
              };
            }
            break;
          case "stream_request_start":
            if (k)
              yield {
                type: "system",
                subtype: "status",
                status: "requesting",
                uuid: HE.randomUUID(),
                session_id: Rt(),
              };
            break;
          case "notification": {
            let Ut = Nt.notification;
            yield {
              type: "system",
              subtype: "notification",
              key: Ut.key,
              text: Ut.text,
              priority: Ut.priority,
              ...(Ut.color !== void 0 && {
                color: Ut.color,
              }),
              ...(Ut.timeoutMs !== void 0 && {
                timeout_ms: Ut.timeoutMs,
              }),
              uuid: HE.randomUUID(),
              session_id: Rt(),
            };
            break;
          }
          case "set_expanded_view":
            break;
          case "post_turn_summary":
            this.config.setAppState((Ut) =>
              Ut.postTurnSummary === Nt.value
                ? Ut
                : {
                    ...Ut,
                    postTurnSummary: Nt.value,
                  },
            );
            break;
          case "active_goal":
            this.config.setAppState((Ut) =>
              Ut.activeGoal === Nt.value
                ? Ut
                : {
                    ...Ut,
                    activeGoal: Nt.value,
                  },
            );
            break;
          case "set_in_progress_tool_use_ids":
            break;
          case "hint_clears":
            break;
          case "refusal_continuation":
            break;
          case "interruptible_tool_in_progress":
            break;
          case "api_metrics":
            break;
          case "os_notification":
            break;
          case "open_message_selector":
            break;
          case "command_lifecycle":
            this.config.onCommandLifecycle?.(Nt.uuid, Nt.state);
            break;
          case "system": {
            if ((this.mutableMessages.push(Nt), B && Nt.subtype === "model_refusal_fallback"))
              (Ce.push(Nt),
                G("tengu_refusal_fallback_entry_recorded", {
                  request_id: Hr(Nt.requestId),
                }));
            if (Nt.subtype === "compact_boundary" && Nt.compactMetadata) {
              let Ut = Nt.compactMetadata.preservedMessages,
                Fn = (Ut?.allUuids ?? Ut?.uuids ?? [])
                  .map((So) => this.mutableMessages.find((Mo) => Mo.uuid === So))
                  .filter((So) => So !== void 0)
                  .map($8e);
              Qt =
                Ut && Fn.length > 0
                  ? {
                      preserved: Fn,
                      anchorUuid: Ut.anchorUuid,
                    }
                  : null;
              let xi = this.mutableMessages.length - 1;
              if (xi > 0) this.mutableMessages.splice(0, xi);
              if (Qt?.anchorUuid === Nt.uuid)
                (this.mutableMessages.push(...Qt.preserved), (Qt = null));
              let jn = Ce.length - 1;
              if (jn > 0) (Ce.splice(0, jn), (Ie = Ce.length), (Ze = Ce.length));
              yield {
                type: "system",
                subtype: "compact_boundary",
                session_id: Rt(),
                uuid: Nt.uuid,
                compact_metadata: MAt(Nt.compactMetadata),
              };
            }
            if (Nt.subtype === "api_error")
              yield {
                type: "system",
                subtype: "api_retry",
                attempt: Nt.retryAttempt,
                max_retries: Nt.maxRetries,
                retry_delay_ms: Nt.retryInMs,
                error_status: Nt.error.status ?? null,
                error: q1n(Nt.error),
                session_id: Rt(),
                uuid: Nt.uuid,
              };
            if (
              k &&
              it !== null &&
              !un &&
              Nt.subtype === "model_refusal_fallback" &&
              Nt.direction === "retry"
            ) {
              let Ut = Tt !== null;
              if (Tt !== null)
                yield {
                  type: "stream_event",
                  event: {
                    type: "content_block_stop",
                    index: Tt,
                  },
                  session_id: Rt(),
                  parent_tool_use_id: null,
                  uuid: HE.randomUUID(),
                };
              (yield {
                type: "stream_event",
                event: {
                  type: "message_delta",
                  context_management: null,
                  delta: {
                    container: null,
                    stop_details: null,
                    stop_reason: "refusal",
                    stop_sequence: null,
                  },
                  usage: {
                    cache_creation_input_tokens: Ln.cache_creation_input_tokens,
                    cache_read_input_tokens: Ln.cache_read_input_tokens,
                    input_tokens: Ln.input_tokens,
                    iterations: Ln.iterations ?? null,
                    output_tokens: Ln.output_tokens,
                    server_tool_use: Ln.server_tool_use ?? null,
                  },
                },
                session_id: Rt(),
                parent_tool_use_id: null,
                uuid: HE.randomUUID(),
              },
                yield {
                  type: "stream_event",
                  event: {
                    type: "message_stop",
                  },
                  session_id: Rt(),
                  parent_tool_use_id: null,
                  uuid: HE.randomUUID(),
                },
                G("tengu_partial_stream_retraction_closed", {
                  stop_reason: $e("refusal"),
                  had_open_block: Ut,
                  source: We("refusal_banner"),
                }),
                (it = null),
                (Tt = null));
            }
            if (BX() && Nt.subtype === "model_refusal_fallback")
              yield {
                type: "system",
                subtype: "model_refusal_fallback",
                trigger: Nt.trigger,
                direction: Nt.direction,
                original_model: Nt.originalModel,
                fallback_model: Nt.fallbackModel,
                request_id: Nt.requestId,
                api_refusal_category: Nt.apiRefusalCategory ?? null,
                api_refusal_explanation: Nt.apiRefusalExplanation ?? null,
                ...(Nt.retractedMessageUuids !== void 0 && {
                  retracted_message_uuids: Nt.retractedMessageUuids,
                }),
                refused_user_message_uuid: Nt.refusedUserMessageUuid ?? null,
                content: Nt.content,
                session_id: Rt(),
                uuid: Nt.uuid,
              };
            if (Nt.subtype === "model_refusal_no_fallback")
              yield {
                type: "system",
                subtype: "model_refusal_no_fallback",
                original_model: Nt.originalModel,
                request_id: Nt.requestId,
                api_refusal_category: Nt.apiRefusalCategory ?? null,
                api_refusal_explanation: Nt.apiRefusalExplanation ?? null,
                refused_user_message_uuid: Nt.refusedUserMessageUuid ?? null,
                content: Nt.content,
                session_id: Rt(),
                uuid: Nt.uuid,
              };
            if (Nt.subtype === "model_fallback")
              yield {
                type: "system",
                subtype: "model_fallback",
                trigger: Nt.trigger,
                original_model: Nt.originalModel,
                fallback_model: Nt.fallbackModel,
                content: Nt.content,
                session_id: Rt(),
                uuid: Nt.uuid,
              };
            if (Nt.subtype === "model_consent_fallback")
              yield {
                type: "system",
                subtype: "model_consent_fallback",
                choice: Nt.choice,
                original_model: Nt.originalModel,
                fallback_model: Nt.fallbackModel,
                persisted_as_default: Nt.persistedAsDefault,
                content: Nt.content,
                session_id: Rt(),
                uuid: Nt.uuid,
              };
            break;
          }
          case "tool_use_summary":
            yield {
              type: "tool_use_summary",
              summary: Nt.summary,
              preceding_tool_use_ids: Nt.precedingToolUseIds,
              session_id: Rt(),
              uuid: Nt.uuid,
            };
            break;
        }
        if (d !== void 0 && jb() >= d) {
          if ((yield* Mt(), B)) {
            if ((await Be(true), Oe.CLAUDE_CODE_EAGER_FLUSH || Oe.CLAUDE_CODE_IS_COWORK))
              await IC();
          }
          yield {
            type: "result",
            subtype: "error_max_budget_usd",
            duration_ms: Math.max(0, Math.round(performance.now() - $)),
            duration_api_ms: WH(),
            is_error: true,
            num_turns: Hn,
            stop_reason: Ne,
            session_id: Rt(),
            total_cost_usd: jb(),
            usage: this.totalUsage,
            modelUsage: WC(),
            permission_denials: this.permissionDenials,
            fast_mode_state: QB(Ke, K.fastMode),
            origin: t?.origin,
            uuid: HE.randomUUID(),
            errors: [`Reached maximum budget ($${d})`],
          };
          return;
        }
        if (Nt.type === "user" && v) {
          let Fn = aVo(this.mutableMessages, Ip) + fe - pt,
            xi = parseInt(process.env.MAX_STRUCTURED_OUTPUT_RETRIES || "5", 10);
          if (Fn >= xi && Mr.length === 0) {
            if (B) {
              if ((await Be(true), Oe.CLAUDE_CODE_EAGER_FLUSH || Oe.CLAUDE_CODE_IS_COWORK))
                await IC();
            }
            (yield* Mt(),
              yield {
                type: "result",
                subtype: "error_max_structured_output_retries",
                duration_ms: Math.max(0, Math.round(performance.now() - $)),
                duration_api_ms: WH(),
                is_error: true,
                num_turns: Hn,
                stop_reason: Ne,
                session_id: Rt(),
                total_cost_usd: jb(),
                usage: this.totalUsage,
                modelUsage: WC(),
                permission_denials: this.permissionDenials,
                fast_mode_state: QB(Ke, K.fastMode),
                origin: t?.origin,
                uuid: HE.randomUUID(),
                errors: [
                  fe > 0
                    ? `Failed to provide surviving structured output after ${xi} attempts (${fe} retracted by a model fallback)`
                    : `Failed to provide valid structured output after ${xi} attempts`,
                ],
              });
            return;
          }
        }
      }
    } finally {
      if (Qt !== null)
        (G("tengu_compact_preserved_unanchored", {
          preservedCount: Qt.preserved.length,
        }),
          this.mutableMessages.push(...Qt.preserved),
          (Qt = null));
    }
    yield* Mt();
    let _o = Ce.findLast((Nt) => Nt.type === "assistant" || Nt.type === "user"),
      Xo = _o?.type ?? "undefined",
      Pn = _o?.type === "assistant" ? (EU(_o.message.content)?.type ?? "none") : "n/a";
    if (B) {
      if ((await Be(true), Oe.CLAUDE_CODE_EAGER_FLUSH || Oe.CLAUDE_CODE_IS_COWORK)) await IC();
    }
    if (Re) {
      yield {
        type: "result",
        subtype: "success",
        is_error: false,
        duration_ms: Math.max(0, Math.round(performance.now() - $)),
        duration_api_ms: WH(),
        num_turns: Hn,
        result: "",
        stop_reason: "tool_deferred",
        session_id: Rt(),
        total_cost_usd: jb(),
        usage: this.totalUsage,
        modelUsage: WC(),
        permission_denials: this.permissionDenials,
        deferred_tool_use: Re,
        terminal_reason: ln.value?.reason,
        fast_mode_state: QB(Ke, K.fastMode),
        origin: t?.origin,
        uuid: HE.randomUUID(),
      };
      return;
    }
    if (pn) {
      yield {
        type: "result",
        subtype: "error_max_turns",
        duration_ms: Math.max(0, Math.round(performance.now() - $)),
        duration_api_ms: WH(),
        is_error: true,
        num_turns: pn.turnCount,
        stop_reason: Ne,
        session_id: Rt(),
        total_cost_usd: jb(),
        usage: this.totalUsage,
        modelUsage: WC(),
        permission_denials: this.permissionDenials,
        terminal_reason: ln.value?.reason,
        fast_mode_state: QB(Ke, K.fastMode),
        origin: t?.origin,
        uuid: HE.randomUUID(),
        errors: [`Reached maximum number of turns (${pn.maxTurns})`],
      };
      return;
    }
    if (!ZXn(_o, Ne)) {
      yield {
        type: "result",
        subtype: "error_during_execution",
        duration_ms: Math.max(0, Math.round(performance.now() - $)),
        duration_api_ms: WH(),
        is_error: true,
        num_turns: Hn,
        stop_reason: Ne,
        session_id: Rt(),
        total_cost_usd: jb(),
        usage: this.totalUsage,
        modelUsage: WC(),
        permission_denials: this.permissionDenials,
        terminal_reason: ln.value?.reason,
        fast_mode_state: QB(Ke, K.fastMode),
        origin: t?.origin,
        uuid: HE.randomUUID(),
        errors: (() => {
          let Nt = PFe(),
            Ut = Er ? Nt.lastIndexOf(Er) + 1 : 0;
          return [
            `[ede_diagnostic] result_type=${Xo} last_content_type=${Pn} stop_reason=${Ne}`,
            ...Nt.slice(Ut).map((Fn) => Fn.error),
          ];
        })(),
      };
      return;
    }
    if (v && Mr.length === 0 && fe > 0 && !(_o.type === "assistant" && _o.isApiErrorMessage)) {
      (G("tengu_structured_output_retraction_exhausted", {
        tombstoned_calls: fe,
        num_turns: Hn,
      }),
        yield {
          type: "result",
          subtype: "error_max_structured_output_retries",
          duration_ms: Math.max(0, Math.round(performance.now() - $)),
          duration_api_ms: WH(),
          is_error: true,
          num_turns: Hn,
          stop_reason: Ne,
          session_id: Rt(),
          total_cost_usd: jb(),
          usage: this.totalUsage,
          modelUsage: WC(),
          permission_denials: this.permissionDenials,
          terminal_reason: ln.value?.reason,
          fast_mode_state: QB(Ke, K.fastMode),
          origin: t?.origin,
          uuid: HE.randomUUID(),
          errors: [
            "Structured output was retracted by a model fallback and no retry produced a valid result",
          ],
        });
      return;
    }
    let lr = "",
      eo = false,
      Kn = null;
    if (_o.type === "assistant") {
      let Nt = ir.get(_o) ?? _o,
        Ut = EU(_o.message.content),
        Fn = EU(Nt.message.content);
      if (Ut?.type === "text" && !a5e.has(Ut.text) && Fn?.type === "text") lr = Fn.text;
      ((eo = Boolean(_o.isApiErrorMessage)), (Kn = _o.apiErrorStatus ?? null));
    }
    if (lr === "") {
      let Nt = Mr.at(-1)?.data;
      if (Nt !== void 0) lr = JSON.stringify(Nt);
    }
    if (!eo && q)
      G("tengu_sdk_ttft", {
        ttft_ms: Math.max(0, Math.round(q - $)),
        model: String(Ke),
      });
    yield {
      type: "result",
      subtype: "success",
      is_error: eo,
      api_error_status: Kn,
      duration_ms: Math.max(0, Math.round(performance.now() - $)),
      duration_api_ms: WH(),
      ttft_ms: !eo && q ? Math.max(0, Math.round(q - $)) : void 0,
      ttft_stream_ms: !eo && W ? Math.max(0, Math.round(W - $)) : void 0,
      time_to_request_ms: !eo && V ? Math.max(0, Math.round(V - $)) : void 0,
      ...(() => {
        let Nt = !eo ? fZa() : void 0;
        return Nt
          ? {
              time_to_request_from_spawn_ms: Nt.ms,
              warm_spare_claimed: Nt.warmSpareClaimed,
              time_origin_ms: Nt.timeOriginMs,
            }
          : {};
      })(),
      num_turns: Hn,
      result: lr,
      stop_reason: Ne,
      session_id: Rt(),
      total_cost_usd: jb(),
      usage: this.totalUsage,
      modelUsage: WC(),
      permission_denials: this.permissionDenials,
      structured_output: Mr.at(-1)?.data,
      terminal_reason: ln.value?.reason,
      fast_mode_state: QB(Ke, K.fastMode),
      origin: t?.origin,
      uuid: HE.randomUUID(),
    };
  }
  interrupt() {
    this.abortController.abort(eP("remote-cancel"));
  }
  getMessages() {
    return this.mutableMessages;
  }
  getReadFileState() {
    return this.readFileState;
  }
  getSessionId() {
    return Rt();
  }
  setModel(e) {
    this.config.userSpecifiedModel = e;
  }
  getMemoryAttribution() {
    return {
      messages: {
        entries: this.mutableMessages.length,
      },
      file_state_cache: {
        entries: this.readFileState.size,
        bytes: this.readFileState.calculatedSize,
      },
    };
  }
  dispose() {
    ((this.mutableMessages.length = 0),
      (this.permissionDenials.length = 0),
      this.readFileState.clear(),
      (this.loadedNestedMemoryPaths = {}),
      this.sessionEnvVars.clear());
  }
}
async function* bUc({
  commands: e,
  prompt: t,
  promptUuid: n,
  isMeta: r,
  shouldQuery: o,
  stopHookActive: s,
  fileAttachments: i,
  origin: a,
  clientPlatform: l,
  verifiedSlackHumanTurn: c,
  cwd: u,
  tools: d,
  refreshTools: p,
  refreshMcpClients: f,
  mcpClients: m,
  verbose: g = false,
  thinkingConfig: h,
  maxTurns: y,
  maxBudgetUsd: b,
  taskBudget: _,
  canUseTool: S,
  mutableMessages: A = [],
  getReadFileCache: v,
  setReadFileCache: C,
  sessionEnvVars: x,
  isolationLatch: I,
  pendingNestedMemoryTriggers: k,
  customSystemPrompt: D,
  appendSystemPrompt: P,
  planModeInstructions: O,
  appendSubagentSystemPrompt: L,
  toolAliases: M,
  excludeDynamicSections: N,
  userSpecifiedModel: B,
  fallbackModel: $,
  jsonSchema: q,
  getAppState: W,
  setAppState: V,
  abortController: Y,
  replayUserMessages: z = false,
  includePartialMessages: K = false,
  forwardSubagentText: Z = false,
  requestDialog: J,
  onCommandLifecycle: ne,
  sessionState: oe,
  agents: re = [],
  allowedAgentTypes: ee,
  setSDKStatus: ce,
  orphanedPermission: ae,
  deferredToolUse: de,
}) {
  let Ee = new _Uc({
    cwd: u,
    tools: d,
    refreshTools: p,
    refreshMcpClients: f,
    commands: e,
    mcpClients: m,
    agents: re,
    allowedAgentTypes: ee,
    canUseTool: S,
    getAppState: W,
    setAppState: V,
    initialMessages: A,
    readFileCache: aSe(v()),
    sessionEnvVars: x,
    isolationLatch: I,
    pendingNestedMemoryTriggers: k,
    customSystemPrompt: D,
    appendSystemPrompt: P,
    planModeInstructions: O,
    appendSubagentSystemPrompt: L,
    toolAliases: M,
    excludeDynamicSections: N,
    userSpecifiedModel: B,
    fallbackModel: $,
    thinkingConfig: h,
    maxTurns: y,
    maxBudgetUsd: b,
    taskBudget: _,
    jsonSchema: q,
    verbose: g,
    requestDialog: J,
    onCommandLifecycle: ne,
    sessionState: oe,
    replayUserMessages: z,
    includePartialMessages: K,
    forwardSubagentText: Z,
    setSDKStatus: ce,
    abortController: Y,
    orphanedPermission: ae,
    deferredToolUse: de,
    ...{},
  });
  try {
    yield* Ee.submitMessage(t, {
      uuid: n,
      isMeta: r,
      shouldQuery: o,
      stopHookActive: s,
      fileAttachments: i,
      origin: a,
      clientPlatform: l,
      verifiedSlackHumanTurn: c,
    });
  } finally {
    C(Ee.getReadFileState());
  }
}
async function* hLm(e, t) {
  t.value = yield* e;
}
var HE,
  yUc = () => ($ur(), ro(Ugc)),
  gLm;
