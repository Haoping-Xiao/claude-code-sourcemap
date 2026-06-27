// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xxl
// matched 2.1.88 source: src/query.ts
// class=modified  jaccard=0.1878  score=0.2562  fileCov=0.4133
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Xxl = E(() => {
  kt();
  Du();
  fb();
  lT();
  ((zxl = ["um", "user", "Hmm", "User", "Benutzer", "Human", "usr", "usem", "Mensch", "usuario"]),
    (zvf = ["Human:", "Assistant:", "<dm ", "<system", "<tool_", "<function_"]),
    (Kvf = /\n\n(\p{L}{1,12})(?=[< ])/u));
});
function oOe() {
  if (nMo === void 0) nMo = dHe?.().createClassifierJobState() ?? null;
  return nMo;
}
function ewf() {
  let e = Oe.CLAUDE_CODE_FABLE_BRIDGE_DIALOG_TIMEOUT_MS;
  return e !== void 0 && e > 0 ? e : 60000;
}
function* twf(e, t, n, r) {
  for (let o of e) {
    let s = o.message.content.filter((i) => i.type === "tool_use");
    for (let i of s) {
      if (r?.has(i.id)) continue;
      yield Rn({
        content: [
          {
            type: "tool_result",
            content: t,
            is_error: !0,
            tool_use_id: i.id,
          },
        ],
        toolUseResult: t,
        sourceToolAssistantUUID: o.uuid,
        now: n?.now,
        uuidFn: n?.uuid,
      });
    }
  }
}
function Efe(e, t) {
  let n = oOe();
  if (!dHe || !n || !Js() || !t.startsWith("repl_main_thread") || e.agentId) return;
  dHe().markTurnAborted(n, XE());
}
function sYt(e) {
  if (e.agentId) return;
  let t = h_(e.abortController.signal.reason);
  if (t !== "user-cancel" && t !== "remote-cancel") return;
  return eUe() ?? void 0;
}
function nwf(e) {
  let t = e.findLastIndex((r) => r.type === "assistant");
  return e.slice(t + 1).findLast(Qoe)?.uuid ?? null;
}
async function* rwf({
  endTurnSource: e,
  messagesForQuery: t,
  assistantMessages: n,
  toolResults: r,
  toolUseBlocks: o,
  systemPrompt: s,
  userContext: i,
  systemContext: a,
  toolUseContext: l,
  updatedToolUseContext: c,
  querySource: u,
  stopHookActive: d,
  stickyBetas: p,
  queryChainIdForAnalytics: f,
  queryDepth: m,
  deps: g,
}) {
  try {
    if (
      (G("tengu_mcp_tool_result_ended_turn", {
        queryChainId: f,
        queryDepth: m,
        source: $e(e),
      }),
      e === "mcp_meta")
    )
      Efe(l, u);
    let h = new Map();
    for (let y of r)
      if (y.type === "user" && Array.isArray(y.message.content)) {
        for (let b of y.message.content)
          if (b.type === "tool_result") h.set(b.tool_use_id, b.content);
      }
    for await (let y of wSt(
      o.map((b) => ({
        tool_name: b.name,
        tool_input: b.input,
        tool_use_id: b.id,
        tool_response: h.get(b.id),
      })),
      `hook-${g.uuid()}`,
      c,
      Fr(c).mode,
      c.abortController.signal,
    )) {
      if (y.message) yield y.message;
      if (y.blockingError || y.preventContinuation)
        T(
          `[end-turn] PostToolBatch block discarded (turn ended by ${e === "tool" ? "tool result" : "MCP end-turn"}, no model re-invoke): ${y.blockingError?.blockingError ?? y.stopReason ?? "preventContinuation"}`,
        );
    }
    if (c.abortController.signal.aborted) {
      if (!c.agentId)
        try {
          yield* tOe(c);
        } catch {}
      if (c.abortController.signal.reason !== "interrupt")
        yield gQ({
          toolUse: !1,
          interruptedMessageId: sYt(c),
          now: g.now,
          uuidFn: g.uuid,
        });
    }
    yield* JPo(t, n, r, s, i, a, l, u, d, p, oOe(), e);
  } catch (h) {
    if (lh(h)) return;
    ke(h);
  }
}
function Sfe(e, t, n) {
  let r = oOe();
  if (!dHe || !r || !Js() || !t.startsWith("repl_main_thread") || e.agentId) return;
  dHe()
    .markApiFailure(r, XE(), n.error, K8(n) ?? n.errorDetails ?? "")
    .catch(() => {});
}
function Qxl(e) {
  return e?.type === "assistant" && e.apiError === "max_output_tokens";
}
function swf(e, t) {
  let r = [
    typeof e === "string"
      ? e
      : Array.isArray(e)
        ? e.join(`

`)
        : void 0,
    t,
  ].filter((o) => !!o);
  return r.length > 0
    ? r.join(`

`)
    : void 0;
}
async function* CN(e) {
  let t = [],
    n;
  try {
    n = yield* iwf(e, t);
  } finally {
    let r = e.toolUseContext.agentId;
    if (r) uQn(r, "subagent_exit", e.querySource);
  }
  for (let r of t)
    yield {
      type: "command_lifecycle",
      uuid: r,
      state: "completed",
    };
  switch (n.reason) {
    case "completed":
    case "stop_hook_prevented":
    case "hook_stopped":
    case "tool_deferred":
    case "max_turns":
    case "aborted_streaming":
    case "aborted_tools":
    case "background_requested":
      xe("turn");
      break;
    case "blocking_limit":
    case "rapid_refill_breaker":
    case "prompt_too_long":
    case "image_error":
    case "model_error":
      Le("turn", n.reason);
      break;
  }
  return n;
}
async function* iwf(e, t) {
  let {
      systemPrompt: n,
      userContext: r,
      systemContext: o,
      canUseTool: s,
      fallbackModel: i,
      querySource: a,
      spawnedBySkill: l,
      maxTurns: c,
      skipCacheWrite: u,
      forkPointUuid: d,
    } = e,
    p = e.deps ?? $xl(),
    f = nwf(Py(e.messages)),
    m = {
      messages: e.messages,
      toolUseContext: e.toolUseContext,
      maxOutputTokensOverride: e.maxOutputTokensOverride,
      compactTracking: void 0,
      stopHookActive: e.stopHookActive ?? !1,
      stopHookBlockingCount: 0,
      maxOutputTokensRecoveryCount: 0,
      hasAttemptedReactiveCompact: !1,
      thinkingOnlyNudged: !1,
      turnCount: 1,
      pendingToolUseSummary: void 0,
      transition: void 0,
    },
    g = null,
    h = void 0,
    y = Dxl();
  using b = iMo(m.messages, m.toolUseContext, a, {
    systemPrompt: n,
    userContext: r,
    systemContext: o,
  });
  let _ = !1,
    S = !1,
    A = !1,
    v,
    C = !1,
    x = Array.isArray(i) ? i : i !== void 0 ? [i] : [],
    I = nq(e.toolUseContext),
    k = [I, ...x.filter(($) => $ !== I)],
    D = 0,
    P,
    O,
    L = a.startsWith("repl_main_thread") || a === "sdk",
    M = xM(a),
    N =
      e.stickyBetas ??
      (M === "main" || M === void 0 ? void 0 : M === "subagent" ? Fie() : RR(u0())),
    B = M === "main" || M === void 0;
  while (!0) {
    if (B && m.toolUseContext.shouldStopBeforeNextApiCall?.())
      return {
        reason: "background_requested",
      };
    let { toolUseContext: $ } = m,
      {
        messages: q,
        compactTracking: W,
        maxOutputTokensRecoveryCount: V,
        hasAttemptedReactiveCompact: Y,
        thinkingOnlyNudged: z,
        maxOutputTokensOverride: K,
        pendingToolUseSummary: Z,
        stopHookActive: J,
        stopHookBlockingCount: ne,
        turnCount: oe,
      } = m;
    if (
      (yield {
        type: "stream_request_start",
      },
      jp("query_fn_entry"),
      !$.agentId)
    )
      wC("query_started");
    let re = $.queryTracking
        ? {
            chainId: $.queryTracking.chainId,
            depth: $.queryTracking.depth + 1,
          }
        : {
            chainId: p.uuid(),
            depth: 0,
          },
      ee = re.chainId;
    $ = {
      ...$,
      queryTracking: re,
    };
    let ce = [...Py(q)],
      ae = W,
      de = $.precomputeSourceKey !== void 0 && ae?.compacted !== !0 && !lQn(a),
      Ee = a.startsWith("agent:") || a.startsWith("repl_main_thread");
    ce = await AIa(
      ce,
      $.contentReplacementState,
      Ee ? (Ne) => void Uze(Ne, $.agentId).catch(ke) : void 0,
      new Set(
        $.options.tools
          .filter((Ne) => !Number.isFinite(Ne.maxResultSizeChars))
          .map((Ne) => Ne.name),
      ),
    );
    let me = 0;
    Pla();
    let pe = Sc(ekl(n, o));
    jp("query_autocompact_start");
    let ge = yield* p.autocompact(
      ce,
      $,
      {
        systemPrompt: n,
        userContext: r,
        systemContext: o,
        toolUseContext: $,
        forkContextMessages: ce,
        stickyBetas: N,
      },
      a,
      ae,
      me,
      dPo,
    );
    if ((jp("query_autocompact_end"), ge.kind === "rapid_refill_breaker_tripped")) {
      G("tengu_auto_compact_rapid_refill_breaker", {
        consecutiveRapidRefills: ae?.consecutiveRapidRefills ?? 0,
        turnsSincePreviousCompact: ae?.turnCounter ?? -1,
        queryChainId: ee,
        queryDepth: re.depth,
      });
      let Ne = jl({
        content: sio,
        error: "invalid_request",
        now: p.now,
        uuid: p.uuid,
      });
      return (
        yield Ne,
        Sfe($, a, Ne),
        {
          reason: "rapid_refill_breaker",
        }
      );
    }
    if (ge.kind === "compacted") {
      let { result: Ne, thresholdSource: it } = ge,
        {
          preCompactTokenCount: Tt,
          postCompactTokenCount: un,
          truePostCompactTokenCount: ze,
          compactionUsage: Mt,
        } = Ne,
        Qt = lL($.options.mainLoopModel, gg($));
      if (
        (G("tengu_auto_compact_succeeded", {
          thresholdSource: Oo(it),
          routedThroughReactive: ge.routedThroughReactive,
          originalMessageCount: q.length,
          compactedMessageCount:
            Ne.summaryMessages.length + Ne.attachments.length + Ne.hookResults.length,
          ...(Qt && {
            effort_level: $e(Qt),
          }),
          preCompactTokenCount: Tt,
          postCompactTokenCount: un,
          truePostCompactTokenCount: ze,
          compactionInputTokens: Mt?.input_tokens,
          compactionOutputTokens: Mt?.output_tokens,
          compactionCacheReadTokens: Mt?.cache_read_input_tokens ?? 0,
          compactionCacheCreationTokens: Mt?.cache_creation_input_tokens ?? 0,
          compactionTotalTokens: Mt
            ? Mt.input_tokens +
              (Mt.cache_creation_input_tokens ?? 0) +
              (Mt.cache_read_input_tokens ?? 0) +
              Mt.output_tokens
            : 0,
          queryChainId: ee,
          queryDepth: re.depth,
        }),
        e.taskBudget)
      ) {
        let Er = dio(ce);
        h = Math.max(0, (h ?? e.taskBudget.total) - Er);
      }
      ae = oio(p.uuid(), ge.consecutiveRapidRefills);
      for (let Er of oMo(Ne)) yield Er;
      ce = PAe(Ne);
    } else if (ge.kind === "failed")
      ae = {
        ...(ae ?? {
          compacted: !1,
          turnId: "",
          turnCounter: 0,
        }),
        consecutiveFailures: ge.consecutiveFailures,
      };
    let he = ge.kind === "compacted" || ge.kind === "failed";
    if (
      lPo({
        autocompactRan: he,
        hasAttemptedReactiveCompact: Y,
        lastTransitionReason: m.transition?.reason,
        isPreFirstCompactFork: de,
        querySource: a,
        contextTokens: eA(ce, rH($.options.mainLoopModel)) - me,
        model: $.options.mainLoopModel,
        autoCompactWindow: $.options.autoCompactWindow,
      })
    )
      if (M === "subagent") aPo($.agentId, "subagent_estimate", Gte(a));
      else
        cPo({
          querySource: a,
          messages: ce,
          cacheSafeParams: {
            systemPrompt: n,
            userContext: r,
            systemContext: o,
            toolUseContext: $,
            forkContextMessages: ce,
            stickyBetas: N,
          },
          ...(a === "sdk" && {
            promptScan: sMo(ce),
          }),
        });
    $ = {
      ...$,
      messages: ce,
      turnStartIndex: cwf(ce),
    };
    let ie = [],
      le = [],
      He = [],
      ye = !1,
      ue = !1,
      we = null;
    jp("query_setup_start");
    let Ce = new aHe($.options.tools, s, $, p.now);
    function* Ie() {
      if ($.abortController.signal.aborted) return;
      for (let Ne of Ce.getCompletedResults()) {
        if (tz(Ne)) {
          yield Ne;
          continue;
        }
        if (Ne.message) {
          yield Ne.message;
          let it = SLo(Ne.message);
          if (it) ue = it;
          if (!iYt(Ne.message)) {
            let Tt = lk(
              [Ne.message],
              $.options.refreshTools?.() ?? $.options.tools,
              $.options.mainLoopModel,
            );
            (Cjt(Tt, Gh($.options.mainLoopModel).maxBase64Size),
              le.push(...Tt.filter((un) => un.type === "user")));
          }
        }
      }
    }
    let Ve = $.getAppState(),
      Ze = Fr($).mode,
      Be = Ze === "plan" && g1n(ce),
      Me = VR({
        permissionMode: Ze,
        mainLoopModel: P ?? O ?? k[D] ?? I,
        exceeds200kTokens: Be,
      }),
      Ue = VR({
        permissionMode: Ze,
        mainLoopModel: As(),
        exceeds200kTokens: Be,
      });
    if (dut(Me, $.requestDialog)) {
      let Ne = "cancelled",
        it = !1,
        Tt = $.getAppState().replBridgeSessionActive === !0,
        un =
          Ela({
            requestDialog: $.requestDialog,
            isMainThread: L,
          }) &&
          !(Tt && $_r()) &&
          !$.abortController.signal.aborted;
      if (un && $.requestDialog)
        if (Tt) {
          let Mt = new AbortController(),
            Qt = () => Mt.abort();
          ($.abortController.signal.addEventListener("abort", Qt, {
            once: !0,
          }),
            Xve(!1));
          let Er = setTimeout(
            (pt) => {
              if (N_r()) return;
              ((it = !0), O_r(), It("model_fable_consent", "bridge_dialog_timeout"), pt.abort());
            },
            ewf(),
            Mt,
          );
          try {
            Ne = await $.requestDialog(
              ySe,
              {
                overagesEnabled: sLe(),
              },
              {
                signal: Mt.signal,
              },
            );
          } finally {
            (clearTimeout(Er), $.abortController.signal.removeEventListener("abort", Qt));
          }
        } else
          Ne = await $.requestDialog(
            ySe,
            {
              overagesEnabled: sLe(),
            },
            {
              signal: $.abortController.signal,
            },
          );
      let ze = Ne === "consent" && (await Hla());
      if (!ze && $.abortController.signal.aborted) {
        let Mt = h_($.abortController.signal.reason);
        if (Mt !== "interrupt" && Mt !== "refusal-fallback-edit")
          yield gQ({
            toolUse: !1,
            interruptedMessageId: sYt($),
            now: p.now,
            uuidFn: p.uuid,
          });
        return (
          Efe($, a),
          {
            reason: "aborted_streaming",
          }
        );
      }
      if (un && qBe()) {
        if (ze) xe("model_fable_consent");
        else if (Ne === "consent") It("model_fable_consent", "overage_enable_deferred");
        else if (Ne === "switch_default") Le("model_fable_consent", "declined");
        else if (!it) It("model_fable_consent", "dismissed");
      }
      if (!ze) {
        if (!un && L) It("model_fable_consent", "no_dialog_fallback");
        let Mt = bye();
        if (Mt === null) {
          if (L) Le("model_fable_consent", "no_allowed_fallback");
          let pt = jl({
            content:
              "Your model policy only allows Fable 5, which requires usage credits \xB7 /model to set it up",
            now: p.now,
            uuid: p.uuid,
          });
          return (
            yield pt,
            Sfe($, a, pt),
            {
              reason: "model_error",
              error: Error(
                "Fable consent declined and the model policy allows no non-Fable fallback",
              ),
            }
          );
        }
        let Qt = Me,
          Er = !1;
        if (L) {
          if (Ne === "switch_default") Er = Ala(Mt);
          ($.setAppState((pt) => ({
            ...pt,
            mainLoopModel: Mt,
            mainLoopModelForSession: null,
          })),
            py(Mt));
        }
        if (
          (($.options = {
            ...$.options,
            mainLoopModel: Mt,
          }),
          (Me = Mt),
          (O = Mt),
          L)
        )
          yield {
            type: "system",
            subtype: "model_consent_fallback",
            content: `Switched to ${wp(Mt)} ${Er ? "\u2014 now your default model" : "for this session"} \xB7 ${wp(Qt)} requires usage credits \xB7 /model to change`,
            level: "warning",
            choice: Ne,
            originalModel: Qt,
            fallbackModel: Mt,
            persistedAsDefault: Er,
            isMeta: !1,
            timestamp: p.now(),
            uuid: p.uuid(),
          };
      }
    }
    jp("query_setup_end");
    let tt = y.gates.isAnt && xM(a) !== "auxiliary" ? Trl($.agentId ?? y.sessionId) : void 0,
      bt = !1,
      Ke = pC() && $X() && !nLe($.options.mainLoopModel, $.options.autoCompactWindow);
    if (ge.kind !== "compacted" && a !== "compact" && !Ke && !bt) {
      if (
        rLe(
          eA(ce, rH($.options.mainLoopModel)) - me,
          $.options.mainLoopModel,
          $.options.autoCompactWindow,
        ).level === "blocked"
      ) {
        if (!tLe(a))
          G("tengu_ptl_surfaced_to_user", {
            reason: We("blocking_limit"),
            querySource: Bh(a),
            wasGatedByPriorAttempt: !1,
            reactiveUnsupported: !$X(),
          });
        let Tt = jl({
          content: nF,
          error: "invalid_request",
          now: p.now,
          uuid: p.uuid,
        });
        return (
          yield Tt,
          Sfe($, a, Tt),
          {
            reason: "blocking_limit",
          }
        );
      }
    }
    if (dHe && Js() && a.startsWith("repl_main_thread") && !$.agentId) {
      let Ne = ce.findLast(
        (it) => it.type === "user" && !it.isMeta && typeof it.message.content === "string",
      );
      dHe().markTurnActive(
        oOe(),
        XE(),
        Ne?.type === "user" && typeof Ne.message.content === "string" && !_fe(Ne.message.content)
          ? Ne.message.content
          : void 0,
      );
    }
    let Et = !0,
      ct,
      Je,
      gt;
    jp("query_api_loop_start");
    try {
      while (Et) {
        Et = !1;
        let Ne =
          awf(Me, Ue) || !Ve.advisorModel || pel(Me, Ve.advisorModel) ? Ve.advisorModel : void 0;
        if (Ve.advisorModel && Ne === void 0)
          T(
            `[AdvisorTool] Skipping advisor - ${Ve.advisorModel} cannot advise non-configured attempt model ${Me} (configured: ${Ue})`,
          );
        if (v !== void 0)
          if (C) ((v = void 0), (C = !1));
          else C = !0;
        let it = [],
          Tt = ie.length,
          un,
          ze,
          Mt = [],
          Qt,
          Er = !1;
        try {
          let pt = !1,
            ln = [],
            pn = [],
            ir = gaa(),
            Rr = $e(k_r()),
            _o = $.getAppState().replBridgeSessionActive,
            Xo = ir || _o,
            Pn = uIl({
              currentModel: Me,
              alreadyUsed: _,
              declined: S,
              suppressionAlreadyLogged: A,
              requestDialog: $.requestDialog,
              isMainThread: L,
              consumerLacksDialogCapability: Xo,
              sticky: N ?? u0(),
            });
          if (Pn.shouldLogSuppression)
            ((A = !0),
              G("tengu_refusal_fallback_suppressed", {
                reason:
                  $.requestDialog === void 0
                    ? We("no_dialog_host_setting_off")
                    : ir
                      ? We("no_consumer_capability_setting_off")
                      : We("remote_controlled_session_setting_off"),
                capability_source: Rr,
              }));
          let lr = Pn.serverLane,
            eo = ct;
          ct = void 0;
          let Kn = Je;
          Je = void 0;
          let Nt = gt;
          ((gt = void 0), jp("query_api_streaming_start"));
          for await (let Ut of _Il(
            p.callModel({
              messages: ZQn(ce, r),
              systemPrompt: pe,
              thinkingConfig: Zxl($),
              tools: $.options.tools,
              signal: $.abortController.signal,
              options: {
                async getToolPermissionContext() {
                  return Fr($);
                },
                model: Me,
                ...(y.gates.fastModeEnabled && {
                  fastMode: $.options.fastMode,
                }),
                toolChoice: void 0,
                isNonInteractiveSession: $.options.isNonInteractiveSession,
                fallbackModel: k[D + 1],
                refusalFallbackModel: !_ && !S && lr === void 0 ? Pn.visibleModel : void 0,
                serverRefusalFallback: lr,
                fallbackCreditCode: eo,
                fallbackCreditMintModel: Kn,
                fallbackCreditMintRequestId: Nt,
                fallbackCreditLaneArmed: Pn.visibleModel !== void 0,
                onStreamingFallback: () => {
                  pt = !0;
                },
                onHintCleared: (Fn, xi) => {
                  it.push({
                    type: "hint_clears",
                    ids: [...Fn],
                    contentById: Object.fromEntries(xi),
                  });
                  for (let jn of uca(ce, Fn)) $.readFileState.delete(ds(jn));
                  ce = Ujt(ce, Fn, xi);
                },
                querySource: a,
                keepPartialMessageOnAbort: e.keepPartialMessageOnAbort,
                spawnedBySkill: l,
                activeSkill: $.options.activeSkill,
                activeMcpServer: $.options.activeMcpServer,
                activeMcpTool: $.options.activeMcpTool,
                messageClientPlatform: $.options.messageClientPlatform,
                agents: $.options.agentDefinitions.activeAgents,
                allowedAgentTypes: $.options.agentDefinitions.allowedAgentTypes,
                hasAppendSystemPrompt: !!$.options.appendSystemPrompt,
                userSystemPrompt:
                  !$.agentId && mC()
                    ? swf($.options.customSystemPrompt, $.options.appendSystemPrompt)
                    : void 0,
                maxOutputTokensOverride: K,
                fetchOverride: tt,
                mcpTools: Ve.mcp.tools,
                promptTooLongIsHandled: !0,
                hasPendingMcpServers: Ve.mcp.clients.some((Fn) => Fn.type === "pending"),
                queryTracking: re,
                effortValue: gg($),
                advisorModel: Ne,
                skipCacheWrite: u,
                forkPointUuid: d,
                stickyBetas: N,
                agentId: $.agentId,
                agentContext: $.agentContext,
                onRetryStatus: $.onRetryStatus,
                ...(e.taskBudget && {
                  taskBudget: {
                    total: e.taskBudget.total,
                    ...(h !== void 0 && {
                      remaining: h,
                    }),
                  },
                }),
              },
            }),
            () => Ce,
          )) {
            if (Ut.type === "tool_drain_tick") {
              yield* Ie();
              continue;
            }
            if (it.length > 0) (yield* it, (it.length = 0));
            if (Ut.type === "server_fallback") {
              {
                let rs = dIl(Ut, {
                  isMainThread: L,
                });
                if (
                  (G("tengu_rotunda_pennant_applied", {
                    reason: $e(rs.telemetry.reason),
                    mid_stream: rs.telemetry.midStream,
                    discarded_block_count: rs.telemetry.discardedBlockCount,
                    tombstoned_had_tool_use: rs.telemetry.tombstonedHadToolUse,
                    request_id_sha12:
                      rs.telemetry.requestId !== null ? Dd(rs.telemetry.requestId) : void 0,
                    original_model_scope: $e(rs.telemetry.originalModelScope),
                    queryChainId: ee,
                    queryDepth: re.depth,
                    querySource: Gte(a),
                    final_stop_reason: Oo(rs.telemetry.finalStopReason ?? void 0),
                    api_refusal_category: Oo(rs.telemetry.apiRefusalCategory),
                  }),
                  rs.userVisible)
                ) {
                  xe("refusal_fallback");
                  let js = Me,
                    Gn = Me === Ut.toModel;
                  if (!(nU(Ut.toModel) ?? (xa(Ut.toModel) || KS(Ut.toModel)))) {
                    (T(
                      `Server refusal-fallback target "${Ut.toModel}" is not in the availableModels allowlist; declining the swap`,
                      {
                        level: "warn",
                      },
                    ),
                      (S = !0));
                    let En = [];
                    for (let gr of Ut.discardedMessages) {
                      let fo = ie.findIndex((cs) => cs.uuid === gr.uuid);
                      if (fo !== -1) ie.splice(fo, 1);
                      En.push(gr);
                    }
                    for (let gr = ie.length - 1; gr >= 0; gr--) {
                      let fo = ie[gr];
                      if (fo.message.model === Ut.toModel) (ie.splice(gr, 1), En.push(fo));
                    }
                    let Sn = le.slice();
                    ((le.length = 0), (He.length = 0), (ln.length = 0), (ye = !1), (ue = !1));
                    let Jn = Ce.discardAndAbortInFlight(Vct());
                    (G("tengu_rotunda_pennant_tools", {
                      lane: We("decline"),
                      aborted: Jn.aborted,
                      completed_before_event: Jn.completedBeforeEvent,
                      queued_never_started: Jn.queuedNeverStarted,
                      compensated_removes: Jn.toolUseIds.length,
                    }),
                      (Ce = new aHe($.options.tools, s, $, p.now)));
                    for (let gr of En)
                      yield {
                        type: "tombstone",
                        message: gr,
                      };
                    for (let gr of Sn)
                      yield {
                        type: "tombstone",
                        message: gr,
                      };
                    if (Jn.toolUseIds.length > 0)
                      yield {
                        type: "set_in_progress_tool_use_ids",
                        op: {
                          action: "remove",
                          ids: Jn.toolUseIds,
                        },
                      };
                    let Qn =
                      Ut.reason === "refusal"
                        ? h5e(
                            "refusal",
                            {
                              type: "refusal",
                              category: Ut.apiRefusalCategory ?? null,
                              explanation: null,
                            },
                            Ut.requestId,
                            Me,
                          )
                        : jl({
                            content:
                              "The server routed this response to a model that is not in your organization\u2019s availableModels allowlist; the response was discarded.",
                            error: "invalid_request",
                            now: p.now,
                            uuid: p.uuid,
                          });
                    if (Qn) (ie.push(Qn), yield Qn);
                    break;
                  }
                  if (((_ = !0), (P = Ut.toModel), (Me = Ut.toModel), rs.swapSession)) {
                    let En = $.getAppState();
                    (lJe({
                      fallbackModel: Ut.toModel,
                      previousOverride: r_(),
                      previousAppStateModel: En.mainLoopModel,
                      previousModelForSession: En.mainLoopModelForSession,
                    }),
                      $.setAppState((Sn) => ({
                        ...Sn,
                        mainLoopModel: Ut.toModel,
                        mainLoopModelForSession: null,
                      })),
                      py(Ut.toModel),
                      ($.options.mainLoopModel = Ut.toModel));
                  }
                  let cr = new Set(Ut.discardedMessages.map((En) => En.uuid));
                  if (cr.size > 0) {
                    for (let En = ie.length - 1; En >= 0; En--)
                      if (cr.has(ie[En].uuid)) ie.splice(En, 1);
                  }
                  let Lt = [];
                  if (rs.tombstonedToolUse) {
                    let En = Ce.discardAndAbortInFlight(Vct());
                    if (
                      (G("tengu_rotunda_pennant_tools", {
                        lane: We("accept"),
                        aborted: En.aborted,
                        completed_before_event: En.completedBeforeEvent,
                        queued_never_started: En.queuedNeverStarted,
                        compensated_removes: En.toolUseIds.length,
                      }),
                      (Lt = [...le]),
                      (le.length = 0),
                      (He.length = 0),
                      (ye = !1),
                      (ue = !1),
                      (Ce = new aHe($.options.tools, s, $, p.now)),
                      En.toolUseIds.length > 0)
                    )
                      yield {
                        type: "set_in_progress_tool_use_ids",
                        op: {
                          action: "remove",
                          ids: En.toolUseIds,
                        },
                        reason: "fallback_sweep",
                      };
                  }
                  if (Ut.midStream) {
                    un = new Set(ie.slice(Tt).map((Sn) => Sn.uuid));
                    let En = Ut.retainedText;
                    if (En !== void 0 && En.length > 0)
                      Qt = {
                        text: En,
                        originals: Ut.retainedMessages ?? [],
                      };
                  }
                  Mt.push(...Ut.discardedMessages, ...Lt);
                  for (let En of Ut.discardedMessages)
                    yield {
                      type: "tombstone",
                      message: En,
                      displayOnly: !0,
                    };
                  for (let En of Lt)
                    yield {
                      type: "tombstone",
                      message: En,
                      displayOnly: !0,
                    };
                  if (Qt !== void 0)
                    ((Er = !0),
                      yield {
                        type: "refusal_continuation",
                        phase: "begin",
                        salvageText: Qt.text,
                        replacesUuids: Qt.originals.map((En) => En.uuid),
                      });
                  if (rs.showBanner && !Gn)
                    ze = pIl(
                      {
                        ...Ut,
                        fromModel: js,
                      },
                      {
                        timestamp: p.now(),
                        uuid: p.uuid(),
                      },
                    );
                }
              }
              continue;
            }
            if (Ut.type === "refusal_no_fallback") {
              if (L)
                yield {
                  type: "system",
                  subtype: "model_refusal_no_fallback",
                  content: "",
                  level: "warning",
                  originalModel: Ut.originalModel,
                  requestId: Ut.requestId,
                  apiRefusalCategory: Ut.apiRefusalCategory,
                  apiRefusalExplanation: Ut.apiRefusalExplanation,
                  refusedUserMessageUuid: f,
                  isMeta: !1,
                  timestamp: p.now(),
                  uuid: p.uuid(),
                };
              continue;
            }
            if (Ut.type === "fallback_request") {
              if (!_ && !S && BX()) {
                let rs = haa({
                    requestDialog: $.requestDialog,
                    isMainThread: L,
                    consumerLacksDialogCapability: Xo,
                  }),
                  js = {
                    original_model: Ut.originalModel,
                    fallback_model: Ut.fallbackModel,
                    trigger: $e(Ut.trigger),
                    request_id: Ut.requestId,
                    queryChainId: ee,
                    queryDepth: re.depth,
                    querySource: Bh(a),
                    api_refusal_category: Ut.apiRefusalCategory
                      ? $e(Zct(Ut.apiRefusalCategory))
                      : void 0,
                    has_api_refusal_explanation: Boolean(Ut.apiRefusalExplanation),
                  },
                  Gn = [...ie, ...le].flatMap((Jn) =>
                    mS([Jn])
                      .filter(Koe)
                      .map((Qn) => Qn.uuid),
                  ),
                  cr = rs === "no_consumer_capability";
                if (cr)
                  G("tengu_refusal_fallback_dialog_suppressed", {
                    ...js,
                    reason: ir ? We("no_consumer_capability") : We("remote_controlled_session"),
                    capability_source: Rr,
                    retracted_wire_uuid_count: Gn.length,
                  });
                let Lt = cr ? "cancelled" : "retry_fallback";
                if (rs === void 0 && $.requestDialog) {
                  if (
                    (G("tengu_refusal_fallback_prompt_shown", {
                      ...js,
                      capability_source: Rr,
                      retracted_wire_uuid_count: Gn.length,
                    }),
                    (Lt = await $.requestDialog(
                      LQ,
                      {
                        originalModel: Ut.originalModel,
                        fallbackModel: Ut.fallbackModel,
                        apiRefusalCategory: Ut.apiRefusalCategory,
                        retractedMessageUuids: Gn,
                        guidanceText: _aa(),
                      },
                      {
                        signal: $.abortController.signal,
                      },
                    )),
                    Lt !== "cancelled")
                  )
                    G("tengu_refusal_fallback_prompt_choice", {
                      ...js,
                      choice: $e(Lt),
                    });
                }
                if (Lt !== "retry_fallback") {
                  if (((S = !0), Ut.creditCode !== null))
                    G("tengu_fallback_credit_forfeited", {
                      reason: Lt === "cancelled" ? We("cancelled") : We("dialog_declined"),
                      mint_request_id: Hr(Ut.requestId),
                      mint_model: Cf(Me),
                    });
                  for (let Qn of ie)
                    yield {
                      type: "tombstone",
                      message: Qn,
                    };
                  for (let Qn of le)
                    yield {
                      type: "tombstone",
                      message: Qn,
                    };
                  ((ie.length = 0),
                    (le.length = 0),
                    (He.length = 0),
                    (ln.length = 0),
                    (ye = !1),
                    (ue = !1));
                  let Jn = UKt(Ce, "refusal_decline");
                  if (((Ce = new aHe($.options.tools, s, $, p.now)), Jn)) yield Jn;
                  if (Lt === "edit_prompt") $.abortController.abort(eP("refusal-fallback-edit"));
                  if (Lt === "cancelled" && !$.abortController.signal.aborted) {
                    let Qn = h5e(
                      "refusal",
                      {
                        type: "refusal",
                        category: Ut.apiRefusalCategory ?? null,
                        explanation: Ut.apiRefusalExplanation ?? null,
                      },
                      Ut.requestId,
                      Ut.originalModel,
                    );
                    if (Qn) (ie.push(Qn), yield Qn);
                  }
                  break;
                }
                let En = faa(ie);
                if (
                  ((_ = !0),
                  (P = Ut.fallbackModel),
                  (ct = Ut.creditCode ?? void 0),
                  (Je = ct !== void 0 ? Me : void 0),
                  (gt = ct !== void 0 ? (Ut.requestId ?? void 0) : void 0),
                  (Me = Ut.fallbackModel),
                  (Et = !0),
                  (v = L && Gn.length > 0 ? Gn : void 0),
                  (C = !1),
                  L)
                ) {
                  let Jn = $.getAppState();
                  (lJe({
                    fallbackModel: Ut.fallbackModel,
                    previousOverride: r_(),
                    previousAppStateModel: Jn.mainLoopModel,
                    previousModelForSession: Jn.mainLoopModelForSession,
                  }),
                    $.setAppState((Qn) => ({
                      ...Qn,
                      mainLoopModel: Ut.fallbackModel,
                      mainLoopModelForSession: null,
                    })),
                    py(Ut.fallbackModel),
                    ($.options.mainLoopModel = Ut.fallbackModel));
                }
                (xe("refusal_fallback"),
                  G("tengu_refusal_fallback_triggered", {
                    ...js,
                    retracted_wire_uuid_count: Gn.length,
                    prompt_skipped_reason: Oo(rs),
                    had_partial_text: En.partialTextChars > 0,
                    partial_text_chars: En.partialTextChars,
                    salvaged_tool_use_count: En.toolUseCount,
                    had_empty_input_tool_use: En.hadEmptyInputToolUse,
                    credit_minted: Ut.creditCode !== null,
                  }));
                for (let Jn of ie)
                  yield {
                    type: "tombstone",
                    message: Jn,
                  };
                for (let Jn of le)
                  yield {
                    type: "tombstone",
                    message: Jn,
                  };
                ((ie.length = 0),
                  (le.length = 0),
                  (He.length = 0),
                  (ln.length = 0),
                  (ye = !1),
                  (ue = !1));
                let Sn = UKt(Ce, "refusal_retry");
                if (((Ce = new aHe($.options.tools, s, $, p.now)), Sn)) yield Sn;
                if (L)
                  yield {
                    type: "system",
                    subtype: "model_refusal_fallback",
                    direction: "retry",
                    content: C1n(Ut.originalModel, Ut.fallbackModel, Ut.apiRefusalCategory),
                    level: "warning",
                    trigger: Ut.trigger,
                    originalModel: Ut.originalModel,
                    fallbackModel: Ut.fallbackModel,
                    requestId: Ut.requestId,
                    apiRefusalCategory: Ut.apiRefusalCategory,
                    apiRefusalExplanation: Ut.apiRefusalExplanation,
                    retractedMessageUuids: Gn,
                    refusedUserMessageUuid: f,
                    isMeta: !1,
                    timestamp: p.now(),
                    uuid: p.uuid(),
                  };
              } else {
                let rs = h5e(
                  "refusal",
                  {
                    type: "refusal",
                    category: Ut.apiRefusalCategory ?? null,
                    explanation: Ut.apiRefusalExplanation ?? null,
                  },
                  Ut.requestId,
                  Ut.originalModel,
                );
                if (rs) (ie.push(rs), yield rs);
              }
              break;
            }
            if (Ut.type === "streaming_fallback_began") pt = !0;
            if (pt) {
              for (let js of ie)
                yield {
                  type: "tombstone",
                  message: js,
                };
              for (let js of le)
                yield {
                  type: "tombstone",
                  message: js,
                };
              (G("tengu_orphaned_messages_tombstoned", {
                orphanedMessageCount: ie.length,
                queryChainId: ee,
                queryDepth: re.depth,
              }),
                (ie.length = 0),
                (le.length = 0),
                (He.length = 0),
                (ln.length = 0),
                (ye = !1),
                (ue = !1));
              let rs = UKt(Ce, "streaming_fallback");
              if (((Ce = new aHe($.options.tools, s, $, p.now)), rs)) yield rs;
              pt = !1;
            }
            if (Ut.type === "streaming_fallback_began") continue;
            let Fn = Ut,
              xi,
              jn = !1,
              So;
            if (Ut.type === "assistant") {
              let rs;
              for (let js = 0; js < Ut.message.content.length; js++) {
                let Gn = Ut.message.content[js];
                if (Gn.type === "tool_use" && typeof Gn.input === "object" && Gn.input !== null) {
                  let cr = _l($.options.tools, Gn.name, $.options.toolAliases);
                  if (cr?.backfillObservableInput) {
                    let Lt = Gn.input,
                      En = {
                        ...Lt,
                      };
                    if ((cr.backfillObservableInput(En), Object.keys(En).some((Jn) => !(Jn in Lt))))
                      ((rs ??= [...Ut.message.content]),
                        (rs[js] = {
                          ...Gn,
                          input: En,
                        }));
                  }
                }
              }
              if (rs)
                ((Fn = {
                  ...Ut,
                  message: {
                    ...Ut.message,
                    content: rs,
                  },
                }),
                  ln.push({
                    src: Ut.message,
                    dst: Fn.message,
                  }));
            }
            if (Qt !== void 0 && Ut.type === "assistant" && !Ut.isApiErrorMessage) {
              let rs = Fn.type === "assistant" ? Fn : Ut,
                js = rs.message.content,
                Gn = js.findIndex((Lt) => Lt.type === "text"),
                cr = Gn === -1 ? void 0 : js[Gn];
              if (cr !== void 0 && cr.type === "text" && cr.text.trim().length > 0) {
                let Lt = [...js];
                Lt[Gn] = {
                  ...cr,
                  text: Qt.text + cr.text,
                };
                let En = {
                  ...rs,
                  message: {
                    ...rs.message,
                    content: Lt,
                  },
                };
                ln.push({
                  src: Ut.message,
                  dst: En.message,
                });
                {
                  let Sn = Qt.originals,
                    Jn = new Set(Sn.map((Qn) => Qn.uuid));
                  for (let Qn = ie.length - 1; Qn >= 0; Qn--)
                    if (Jn.has(ie[Qn].uuid)) ie.splice(Qn, 1);
                  if ((ie.push(En), (jn = !0), (So = Sn), Mt.push(...Sn), L))
                    ((En.supersedesUuids = Sn.flatMap((Qn) =>
                      mS([Qn])
                        .filter(Koe)
                        .map((gr) => gr.uuid),
                    )),
                      G("tengu_refusal_fallback_supersedes", {
                        lane: We("server_stitch"),
                        count: En.supersedesUuids.length,
                      }));
                  ((un = new Set([En.uuid])), (Qt = void 0));
                }
                ((Fn = En), (xi = En));
              }
            }
            if (Ut.type === "stream_event" && Ut.event.type === "message_delta") {
              we = Ut.event.delta.stop_reason;
              for (let { src: rs, dst: js } of ln)
                ((js.usage = rs.usage),
                  (js.stop_reason = rs.stop_reason),
                  (js.stop_details = rs.stop_details));
              ln.length = 0;
            }
            let Mo = !1;
            if (ZCl(Ut)) Mo = !0;
            if (gPo(Ut)) ((Mo = !0), pn.push(Ut));
            if (Qxl(Ut)) Mo = !0;
            if (!Mo) {
              if (pn.length > 0) (yield* pn, (pn.length = 0));
              if (
                v !== void 0 &&
                Fn.type === "assistant" &&
                !Fn.isApiErrorMessage &&
                mS([Fn]).some(Koe)
              ) {
                let rs = v;
                ((v = void 0),
                  (C = !1),
                  (Fn = {
                    ...Fn,
                    supersedesUuids: rs,
                  }),
                  G("tengu_refusal_fallback_supersedes", {
                    lane: We("client_retry"),
                    count: rs.length,
                  }));
              }
              yield Fn;
            }
            if (Ut.type === "assistant") {
              let rs = xi ?? Ut;
              if (!jn) ie.push(rs);
              let js = rs.message.content.filter((Gn) => Gn.type === "tool_use");
              if (js.length > 0) (He.push(...js), (ye = !0));
              if (!$.abortController.signal.aborted) for (let Gn of js) Ce.addTool(Gn, rs);
            }
            if (So !== void 0) {
              let rs = So;
              So = void 0;
              for (let js of rs)
                yield {
                  type: "tombstone",
                  message: js,
                  displayOnly: !0,
                };
            }
            yield* Ie();
          }
          if ((jp("query_api_streaming_end"), it.length > 0)) (yield* it, (it.length = 0));
          if (un !== void 0 && (ie.at(-1)?.message.stop_reason ?? we) === "refusal") {
            let Ut = [];
            for (let Fn = ie.length - 1; Fn >= 0; Fn--)
              if (un.has(ie[Fn].uuid)) (Ut.unshift(ie[Fn]), ie.splice(Fn, 1));
            Mt.push(...Ut);
            for (let Fn of Ut)
              yield {
                type: "tombstone",
                message: Fn,
              };
          }
          if (Er)
            ((Er = !1),
              (Qt = void 0),
              yield {
                type: "refusal_continuation",
                phase: "end",
              });
          if (ze !== void 0) {
            if (Mt.length > 0)
              ze.retractedMessageUuids = Mt.flatMap((Ut) =>
                mS([Ut])
                  .filter(Koe)
                  .map((Fn) => Fn.uuid),
              );
            ((ze.refusedUserMessageUuid = f), yield ze, (ze = void 0));
          }
          {
            let Ut = ie.at(-1),
              Fn = Ut ? lre(Ut) : void 0;
            if (Fn) {
              let xi = cre(Fn);
              if (
                lPo({
                  autocompactRan: he,
                  hasAttemptedReactiveCompact: Y,
                  lastTransitionReason: m.transition?.reason,
                  isPreFirstCompactFork: de,
                  querySource: a,
                  contextTokens: xi,
                  model: $.options.mainLoopModel,
                  autoCompactWindow: $.options.autoCompactWindow,
                })
              )
                if (M === "subagent" && He.length === 0)
                  aPo($.agentId, "subagent_final_turn", Gte(a));
                else {
                  let jn =
                      Fn.input_tokens +
                      (Fn.cache_creation_input_tokens ?? 0) +
                      (Fn.cache_read_input_tokens ?? 0),
                    So = eA(ce, rH($.options.mainLoopModel)) - me;
                  cPo({
                    querySource: a,
                    messages: [...ce, ...ie],
                    cacheSafeParams: {
                      systemPrompt: n,
                      userContext: r,
                      systemContext: o,
                      toolUseContext: $,
                      forkContextMessages: ce,
                      stickyBetas: N,
                    },
                    armTrigger: "api_response",
                    estimateGapTokens: jn - So,
                    ...(a === "sdk" && {
                      promptScan: sMo([...ce, ...ie]),
                    }),
                  });
                }
            }
          }
        } catch (pt) {
          if (Er)
            ((Er = !1),
              (Qt = void 0),
              yield {
                type: "refusal_continuation",
                phase: "end",
              });
          if (ze !== void 0) {
            if (Mt.length > 0)
              ze.retractedMessageUuids = Mt.flatMap((pn) =>
                mS([pn])
                  .filter(Koe)
                  .map((ir) => ir.uuid),
              );
            ((ze.refusedUserMessageUuid = f), yield ze, (ze = void 0));
          }
          if (it.length > 0) (yield* it, (it.length = 0));
          let ln = k[D + 1];
          if (pt instanceof NN && ln !== void 0) {
            (D++, (P = void 0), (O = void 0));
            let pn = null,
              ir = !1,
              Rr = !1,
              _o = !1;
            while (D < k.length) {
              let lr = k[D],
                eo = dut(lr, $.requestDialog);
              if (eo) _o = !0;
              let Kn = eo ? bye() : lr;
              if (eo && Kn !== null && a === "compact" && XIe(k[0], Kn)) Kn = null;
              if (Kn === pt.originalModel) Rr = !0;
              else if (Kn !== null) {
                ((pn = Kn), (ir = eo));
                break;
              }
              D++;
            }
            let Xo =
              pn === null && Rr && (pt.reason === "overloaded" || pt.reason === "server_error");
            if (Xo) pn = pt.originalModel;
            if (_o && L) It("model_fable_consent", "chain_advance_substituted");
            if (pn === null) throw pt.originalError ?? pt;
            if (ir || Xo) O = pn;
            ((Me = pn), (Et = !0), (C = !1));
            for (let lr of ie)
              yield {
                type: "tombstone",
                message: lr,
              };
            for (let lr of le)
              yield {
                type: "tombstone",
                message: lr,
              };
            ((ie.length = 0), (le.length = 0), (He.length = 0), (ye = !1), (ue = !1));
            let Pn = UKt(Ce, "chain_advance");
            if (((Ce = new aHe($.options.tools, s, $, p.now)), Pn)) yield Pn;
            if ((($.options.mainLoopModel = Me), Xo)) {
              T(
                `chain advance collapsed onto the failed model ${Me}; re-dispatching in place with the full retry budget`,
              );
              continue;
            }
            (xe("model_fallback"),
              G("tengu_model_fallback_triggered", {
                original_model: pt.originalModel,
                fallback_model: Me,
                chain_index: D,
                query_source: Bh(a),
                reason: $e(pt.reason),
                entrypoint: We("cli"),
                queryChainId: ee,
                queryDepth: re.depth,
              }),
              yield {
                type: "system",
                subtype: "model_fallback",
                content:
                  pt.reason === "model_not_found" ||
                  pt.reason === "permission_denied" ||
                  pt.reason === "model_blocked"
                    ? `Switched to ${wp(Me)} because ${wp(pt.originalModel)} is not available`
                    : lwf(pt.reason, wp(pt.originalModel), wp(Me), pt.originalError),
                level: "warning",
                trigger: pt.reason,
                originalModel: pt.originalModel,
                fallbackModel: Me,
                isMeta: !1,
                timestamp: p.now(),
                uuid: p.uuid(),
              });
            continue;
          }
          throw pt;
        }
      }
    } catch (Ne) {
      let it = Ne instanceof Error ? Ne.message : String(Ne);
      if (
        (G("tengu_query_error", {
          assistantMessages: ie.length,
          toolUses: ie.flatMap((ze) => ze.message.content.filter((Mt) => Mt.type === "tool_use"))
            .length,
          queryChainId: ee,
          queryDepth: re.depth,
        }),
        Ne instanceof eut || Ne instanceof NU)
      ) {
        T(`Query image error: ${it}`, {
          level: "error",
        });
        let ze = jl({
          content: Ne.message,
          error: "invalid_request",
          errorDetails: Ne.message,
          now: p.now,
          uuid: p.uuid,
        });
        return (
          yield ze,
          Sfe($, a, ze),
          {
            reason: "image_error",
          }
        );
      }
      if (Ne instanceof NN && Ne.reason === "model_blocked") {
        let ze = jl({
          content: `${wp(Ne.originalModel)} is currently unavailable.`,
          error: "rate_limit",
          now: p.now,
          uuid: p.uuid,
        });
        return (
          yield ze,
          Sfe($, a, ze),
          {
            reason: "model_error",
            error: Ne,
          }
        );
      }
      ke(Ne);
      let Tt = new Set(
        le.flatMap((ze) =>
          ze.type === "user" && Array.isArray(ze.message.content)
            ? ze.message.content
                .filter((Mt) => Mt.type === "tool_result")
                .map((Mt) => Mt.tool_use_id)
            : [],
        ),
      );
      yield* twf(ie, it, p, Tt);
      let un = jl({
        content: it,
        now: p.now,
        uuid: p.uuid,
      });
      return (
        yield un,
        Sfe($, a, un),
        rG("Query error", Ne),
        {
          reason: "model_error",
          error: Ne,
        }
      );
    }
    if (ie.some((Ne) => Ne.message.content.some((it) => it.type === "text" && Fxl(it.text))))
      G("tengu_model_response_keyword_detected", {
        is_suggests_break: !0,
        queryChainId: ee,
        queryDepth: re.depth,
      });
    if (ie.length > 0) fIl([...ce, ...ie], n, r, o, $, a);
    if ($.abortController.signal.aborted) {
      for await (let Ne of Ce.getRemainingResults()) {
        if (tz(Ne)) {
          yield Ne;
          continue;
        }
        if (Ne.message) yield Ne.message;
      }
      if (!$.agentId)
        try {
          yield* tOe($);
        } catch {}
      if (!rMo.has(h_($.abortController.signal.reason)))
        yield gQ({
          toolUse: !1,
          interruptedMessageId: sYt($),
          now: p.now,
          uuidFn: p.uuid,
        });
      return (
        Efe($, a),
        {
          reason: "aborted_streaming",
        }
      );
    }
    if (Z) {
      let Ne = await Z;
      if (Ne) yield Ne;
    }
    if (m.transition?.reason === "malformed_tool_use_retry") {
      let Ne = ie.at(-1);
      G("tengu_malformed_tool_use_retry_outcome", {
        model: Cf(Me),
        outcome: $e(qxl(He.length, Ne?.message.stop_reason ?? we, Ne?.isApiErrorMessage)),
        clean_retry_enabled: m.transition.cleanRetry,
      });
    }
    if (!ye) {
      let Mt = function (pt) {
          for (let ln = pt.length - 1; ln >= 0; ln--) {
            let pn = pt[ln];
            if (pn.type === "user") {
              if (pn.isMeta || bfe(pn)) continue;
              return !1;
            }
            if (pn.type !== "assistant") continue;
            if (pn.message.content.some((ir) => ir.type === "tool_use" && ir.name === Ip))
              return !0;
          }
          return !1;
        },
        Ne = ie.at(-1),
        it = Ne?.type === "assistant" && Ne.isApiErrorMessage && hSe(Ne),
        un =
          !(Jxl !== null && Ne?.type === "assistant" && Jxl.isToolUseDeniedMessage(Ne)) && gPo(Ne),
        ze =
          it || un
            ? {
                ...$,
                abortController: lio($.abortController),
              }
            : $;
      if (it || un) {
        let pt = p1n(ae),
          { consecutiveRapidRefills: ln } = pt;
        if (!Y && pt.action === "trip") {
          G("tengu_auto_compact_rapid_refill_breaker", {
            consecutiveRapidRefills: ae?.consecutiveRapidRefills ?? 0,
            turnsSincePreviousCompact: ae?.turnCounter ?? -1,
            queryChainId: ee,
            queryDepth: re.depth,
            reactive: !0,
          });
          let Kn = jl({
            content: sio,
            error: "invalid_request",
            now: p.now,
            uuid: p.uuid,
          });
          return (
            yield Kn,
            Sfe($, a, Kn),
            {
              reason: "rapid_refill_breaker",
            }
          );
        }
        if (
          Ne &&
          hPo({
            hasAttempted: Y,
            querySource: a,
            aborted: $.abortController.signal.aborted,
          }) &&
          xca(ce)
        ) {
          let Kn = zjt(ce),
            Nt = Kn.length,
            Ut = un ? "image_error" : "prompt_too_long",
            { actualTokens: Fn, limitTokens: xi } = Ljt(Ne.errorDetails ?? ""),
            jn = qv(Kn.flat()),
            So = Fn !== void 0 ? Math.max(0, Fn - jn) : void 0;
          G("tengu_ptl_surfaced_to_user", {
            reason: $e(Ut),
            querySource: Bh(a),
            wasGatedByPriorAttempt: Y,
            reactiveUnsupported: !$X(),
            precomputedKind: We("not_consulted"),
            compactionImpossible: !0,
            totalGroups: Nt,
            overheadTokensEstimate: So,
          });
          let Mo =
            Ut === "prompt_too_long"
              ? {
                  ...jl({
                    content: Gaa({
                      actualTokens: Fn,
                      limitTokens: xi,
                      conversationTokensEstimate: jn,
                    }),
                    error: "invalid_request",
                    errorDetails: Ne.errorDetails,
                    now: p.now,
                    uuid: p.uuid,
                  }),
                  requestId: Ne.requestId,
                  apiErrorStatus: Ne.apiErrorStatus,
                }
              : Ne;
          return (
            yield Mo,
            sOe(Mo, $),
            Sfe($, a, Mo),
            {
              reason: Ut,
            }
          );
        }
        let pn = performance.now(),
          ir = it && Ne ? iut(Ne) : void 0,
          {
            outcome: Rr,
            swap: _o,
            emittedEarlyCompactStart: Xo,
          } = yield* jct(
            (Kn, Nt, Ut) =>
              dPo({
                toolUseContext: Kn,
                messages: ce,
                trigger: "ptl",
                isWithheld413: it,
                hasAttemptedReactiveCompact: Y,
                borrowFrom: de ? $.precomputeSourceKey : void 0,
                detectedAt: pn,
                querySource: a,
              }),
            ze,
          ),
          { result: Pn } = yield* jct(
            (Kn, Nt, Ut) =>
              pQn({
                hasAttempted: Y,
                querySource: a,
                aborted: ze.abortController.signal.aborted,
                messages: ce,
                cacheSafeParams: {
                  systemPrompt: n,
                  userContext: r,
                  systemContext: o,
                  toolUseContext: Kn,
                  forkContextMessages: ce,
                  stickyBetas: N,
                },
                precomputed: _o,
                precomputeOutcome: Rr,
                userWaitStartedAt: pn,
                initialTokenGap: ir,
              }),
            ze,
          );
        if (Pn) {
          if (e.taskBudget) {
            let Ut = dio(ce);
            h = Math.max(0, (h ?? e.taskBudget.total) - Ut);
          }
          for (let Ut of oMo(Pn)) yield Ut;
          let Kn = PAe(Pn);
          ((ae = oio(p.uuid(), ln)),
            (m = {
              messages: Kn,
              toolUseContext: $,
              compactTracking: ae,
              maxOutputTokensRecoveryCount: V,
              hasAttemptedReactiveCompact: _o === void 0,
              thinkingOnlyNudged: z,
              maxOutputTokensOverride: void 0,
              pendingToolUseSummary: void 0,
              stopHookActive: J,
              stopHookBlockingCount: 0,
              turnCount: oe,
              transition: {
                reason: _o ? "precomputed_compact_swap" : "reactive_compact_retry",
              },
            }));
          continue;
        }
        if (Xo)
          (yield {
            type: "compact_progress",
            event: {
              type: "compact_end",
            },
          },
            yield {
              type: "sdk_status",
              status: null,
            });
        let lr = un ? "image_error" : "prompt_too_long",
          eo = a === "compact" || tLe(a);
        if (!$.abortController.signal.aborted && !eo)
          G("tengu_ptl_surfaced_to_user", {
            reason: $e(lr),
            querySource: Bh(a),
            wasGatedByPriorAttempt: Y,
            precomputedKind: $e(Rr.kind),
            precomputedFailureCause: Oo(Rr.kind === "failed" ? Rr.failure.cause : void 0),
            reactiveUnsupported: !$X(),
          });
        return (
          yield Ne,
          sOe(Ne, $),
          Sfe($, a, Ne),
          {
            reason: lr,
          }
        );
      }
      if ((Yxl(ie, Me), Qxl(Ne))) {
        if (V < owf) {
          let pt = Rn({
            content:
              "Output token limit hit. Resume directly \u2014 no apology, no recap of what you were doing. " +
              "Pick up mid-thought if that is where the cut happened. Break remaining work into smaller pieces.",
            isMeta: !0,
            now: p.now,
            uuidFn: p.uuid,
          });
          m = {
            messages: [...ce, ...ie, pt],
            toolUseContext: $,
            compactTracking: ae,
            maxOutputTokensRecoveryCount: V + 1,
            hasAttemptedReactiveCompact: Y,
            thinkingOnlyNudged: z,
            maxOutputTokensOverride: void 0,
            pendingToolUseSummary: void 0,
            stopHookActive: J,
            stopHookBlockingCount: 0,
            turnCount: oe,
            transition: {
              reason: "max_output_tokens_recovery",
              attempt: V + 1,
            },
          };
          continue;
        }
        yield Ne;
      }
      if (
        (Ne?.message.stop_reason ?? we) === "tool_use" &&
        He.length === 0 &&
        !Ne?.isApiErrorMessage
      ) {
        let pt = m.transition?.reason !== "malformed_tool_use_retry",
          ln = Gxl();
        if (
          (G("tengu_malformed_tool_use_response", {
            will_retry: pt,
            model: Me,
            text_has_leaked_invoke: Wxl(ie),
            clean_retry_enabled: ln,
          }),
          pt)
        ) {
          if (ln)
            for (let Rr of ie)
              yield {
                type: "tombstone",
                message: Rr,
              };
          let ir = Rn({
            content: ln
              ? "The previous response failed to produce a valid tool call. Please retry the tool call now."
              : "Your tool call was malformed and could not be parsed. Please retry.",
            isMeta: !0,
            now: p.now,
            uuidFn: p.uuid,
          });
          (yield ir,
            (m = {
              messages: ln ? [...ce, ir] : [...ce, ...ie, ir],
              toolUseContext: $,
              compactTracking: ae,
              maxOutputTokensRecoveryCount: 0,
              hasAttemptedReactiveCompact: !1,
              maxOutputTokensOverride: void 0,
              pendingToolUseSummary: void 0,
              stopHookActive: J,
              thinkingOnlyNudged: z,
              stopHookBlockingCount: 0,
              turnCount: oe,
              transition: {
                reason: "malformed_tool_use_retry",
                cleanRetry: ln,
              },
            }));
          continue;
        }
        let pn = jl({
          content: "The model's tool call could not be parsed (retry also failed).",
          now: p.now,
          uuid: p.uuid,
        });
        return (
          yield pn,
          sOe(pn, $),
          Sfe($, a, pn),
          {
            reason: "completed",
          }
        );
      }
      let Qt = Ne?.message.stop_reason ?? we;
      if (
        (Qt === "end_turn" || Qt === "stop_sequence") &&
        !Ne?.isApiErrorMessage &&
        a !== "compact" &&
        !tLe(a) &&
        !mZa(ce) &&
        !ie.some((pt) =>
          pt.message.content.some((ln) => ln.type === "text" && ln.text.trim().length > 0),
        ) &&
        !Mt(ce)
      ) {
        if (!z) {
          It("query_thinking_only_response", "nudged");
          let pt = Rn({
            content:
              "[Your previous response had no visible output. Please continue and produce a user-visible response.]",
            isMeta: !0,
            now: p.now,
            uuidFn: p.uuid,
          });
          (yield pt,
            (m = {
              messages: [...ce, pt],
              toolUseContext: $,
              compactTracking: ae,
              maxOutputTokensRecoveryCount: V,
              hasAttemptedReactiveCompact: Y,
              thinkingOnlyNudged: !0,
              maxOutputTokensOverride: void 0,
              pendingToolUseSummary: void 0,
              stopHookActive: J,
              stopHookBlockingCount: 0,
              turnCount: oe,
              transition: {
                reason: "thinking_only_retry",
              },
            }));
          continue;
        }
        Le("query_thinking_only_response", "nudge_exhausted");
      } else if (z) xe("query_thinking_only_response");
      if (Ne?.isApiErrorMessage) {
        if (dHe && oOe() && Js() && a.startsWith("repl_main_thread") && !$.agentId) {
          let pt = K8(Ne) ?? Ne.errorDetails ?? "";
          await dHe().markApiFailure(oOe(), XE(), Ne.error, pt);
        }
        return (
          sOe(Ne, $),
          {
            reason: "completed",
          }
        );
      }
      let Er = yield* xxl(ce, ie, n, r, o, $, a, J, N, oOe());
      if (ne > 0 && Er.blockingErrors.length === 0)
        G("tengu_stop_hook_block_count", {
          count: ne,
          is_subagent: Boolean($.agentId),
          hit_max_turns: !1,
          hit_cap: !1,
        });
      if (Er.preventContinuation)
        return {
          reason: "stop_hook_prevented",
        };
      if (Er.blockingErrors.length > 0) {
        let pt = oe + 1,
          ln = ne + 1;
        if (c && pt > c)
          return (
            G("tengu_stop_hook_block_count", {
              count: ln,
              is_subagent: Boolean($.agentId),
              hit_max_turns: !0,
              hit_cap: !1,
            }),
            yield ai(
              {
                type: "max_turns_reached",
                maxTurns: c,
                turnCount: pt,
              },
              p,
            ),
            {
              reason: "max_turns",
              turnCount: pt,
            }
          );
        let pn = parseInt(process.env.CLAUDE_CODE_STOP_HOOK_BLOCK_CAP ?? "", 10),
          ir = Number.isNaN(pn) ? 8 : pn;
        if (ir > 0 && ln > ir)
          return (
            G("tengu_stop_hook_block_count", {
              count: ln,
              is_subagent: Boolean($.agentId),
              hit_max_turns: !1,
              hit_cap: !0,
            }),
            yield cc(
              `A hook blocked the turn from ending ${ln} consecutive times \u2014 overriding and ending turn. ` +
                "For Stop/SubagentStop hooks, check stop_hook_active in the input and return success while it's true. Set CLAUDE_CODE_STOP_HOOK_BLOCK_CAP to raise this limit.",
              "warning",
            ),
            {
              reason: "completed",
            }
          );
        m = {
          messages: [...ce, ...ie, ...Er.blockingErrors],
          toolUseContext: $,
          compactTracking: ae,
          maxOutputTokensRecoveryCount: 0,
          hasAttemptedReactiveCompact: Y,
          maxOutputTokensOverride: void 0,
          pendingToolUseSummary: void 0,
          stopHookActive: !0,
          thinkingOnlyNudged: z,
          stopHookBlockingCount: ln,
          turnCount: pt,
          transition: {
            reason: "stop_hook_blocking",
          },
        };
        continue;
      }
      return {
        reason: "completed",
      };
    }
    let xt = !1,
      vt = !1,
      jt = $;
    jp("query_tool_execution_start");
    let en = Ce.getRemainingResults();
    for await (let Ne of en) {
      if (tz(Ne)) {
        yield Ne;
        continue;
      }
      if (Ne.message) {
        if (
          (yield Ne.message,
          Ne.message.type === "attachment" &&
            Ne.message.attachment.type === "hook_stopped_continuation")
        )
          xt = !0;
        if (Ne.message.type === "attachment" && Ne.message.attachment.type === "hook_deferred_tool")
          vt = !0;
        let it = SLo(Ne.message);
        if (it) ue = it;
        if (!iYt(Ne.message)) {
          let Tt = lk(
            [Ne.message],
            jt.options.refreshTools?.() ?? jt.options.tools,
            $.options.mainLoopModel,
          );
          (Cjt(Tt, Gh($.options.mainLoopModel).maxBase64Size),
            le.push(...Tt.filter((un) => un.type === "user")));
        }
      }
      if (Ne.newContext)
        jt = {
          ...Ne.newContext,
          queryTracking: re,
        };
    }
    jp("query_tool_execution_end");
    let Dn;
    if (
      y.gates.emitToolUseSummaries &&
      He.length > 0 &&
      !$.abortController.signal.aborted &&
      !$.agentId
    ) {
      let Ne = ie.at(-1),
        it;
      if (Ne) {
        let ze = Ne.message.content.filter((Mt) => Mt.type === "text");
        if (ze.length > 0) {
          let Mt = ze.at(-1);
          if (Mt && "text" in Mt) it = Mt.text;
        }
      }
      let Tt = He.map((ze) => ze.id),
        un = He.map((ze) => {
          let Mt = le.find(
              (Er) =>
                Er.type === "user" &&
                Array.isArray(Er.message.content) &&
                Er.message.content.some(
                  (pt) => pt.type === "tool_result" && pt.tool_use_id === ze.id,
                ),
            ),
            Qt =
              Mt?.type === "user" && Array.isArray(Mt.message.content)
                ? Mt.message.content.find(
                    (Er) => Er.type === "tool_result" && Er.tool_use_id === ze.id,
                  )
                : void 0;
          return {
            name: ze.name,
            input: ze.input,
            output: Qt && "content" in Qt ? Qt.content : null,
          };
        });
      Dn = tIl({
        tools: un,
        signal: $.abortController.signal,
        isNonInteractiveSession: $.options.isNonInteractiveSession,
        lastAssistantText: it,
        agentContext: $.agentContext,
      })
        .then((ze) => {
          if (ze) return tkl(ze, Tt);
          return null;
        })
        .catch(() => null);
    }
    if ($.abortController.signal.aborted) {
      if (!$.agentId)
        try {
          yield* tOe($);
        } catch {}
      if (!rMo.has(h_($.abortController.signal.reason)))
        yield gQ({
          toolUse: !0,
          interruptedMessageId: sYt($),
          now: p.now,
          uuidFn: p.uuid,
        });
      let Ne = oe + 1;
      if (c && Ne > c)
        yield ai(
          {
            type: "max_turns_reached",
            maxTurns: c,
            turnCount: Ne,
          },
          p,
        );
      return (
        Efe($, a),
        {
          reason: "aborted_tools",
        }
      );
    }
    if (vt)
      return (
        Efe($, a),
        {
          reason: "tool_deferred",
        }
      );
    if (xt)
      return (
        Efe($, a),
        {
          reason: "hook_stopped",
        }
      );
    if (ue)
      return (
        yield* rwf({
          endTurnSource: ue,
          messagesForQuery: ce,
          assistantMessages: ie,
          toolResults: le,
          toolUseBlocks: He,
          systemPrompt: n,
          userContext: r,
          systemContext: o,
          toolUseContext: $,
          updatedToolUseContext: jt,
          querySource: a,
          stopHookActive: J,
          stickyBetas: N,
          queryChainIdForAnalytics: ee,
          queryDepth: re.depth,
          deps: p,
        }),
        {
          reason: "completed",
        }
      );
    if (He.length === 1 && He[0].name === yh && Mte(mo($.options.mainLoopModel))) {
      let Ne = He[0].input.prompt;
      if (Hw().some((it) => it.kind === "loop" && it.prompt === Ne))
        return (
          G("tengu_loop_dynamic_wakeup_ends_turn", {
            queryChainId: ee,
            queryDepth: re.depth,
          }),
          Efe($, a),
          yield* JPo(ce, ie, le, n, r, o, $, a, J, N, oOe()),
          {
            reason: "completed",
          }
        );
    }
    if (ae?.compacted)
      (ae.turnCounter++,
        G("tengu_post_autocompact_turn", {
          turnId: ae.turnId,
          turnCounter: ae.turnCounter,
          queryChainId: ee,
          queryDepth: re.depth,
        }));
    if (
      (G("tengu_query_before_attachments", {
        messagesForQueryCount: ce.length,
        assistantMessagesCount: ie.length,
        toolResultsCount: le.length,
        queryChainId: ee,
        queryDepth: re.depth,
      }),
      M$("PostToolBatch", jt.getAppState(), jt.agentId ?? Rt()))
    ) {
      let Ne = `hook-${p.uuid()}`,
        it = new Map();
      for (let ze of le)
        if (ze.type === "user" && Array.isArray(ze.message.content)) {
          for (let Mt of ze.message.content)
            if (Mt.type === "tool_result") it.set(Mt.tool_use_id, Mt.content);
        }
      let Tt = !1,
        un;
      for await (let ze of wSt(
        He.map((Mt) => ({
          tool_name: Mt.name,
          tool_input: Mt.input,
          tool_use_id: Mt.id,
          tool_response: it.get(Mt.id),
        })),
        Ne,
        jt,
        Fr(jt).mode,
        jt.abortController.signal,
      )) {
        if (
          ze.message &&
          !(
            ze.message.type === "attachment" && ze.message.attachment.type === "hook_blocking_error"
          )
        )
          yield ze.message;
        if (ze.additionalContexts && ze.additionalContexts.length > 0) {
          let Mt = ai(
            {
              type: "hook_additional_context",
              content: ze.additionalContexts,
              hookName: "PostToolBatch",
              toolUseID: Ne,
              hookEvent: "PostToolBatch",
            },
            p,
          );
          (yield Mt, le.push(Mt));
        }
        if (ze.blockingError) ((Tt = !0), (un ??= ze.blockingError.blockingError));
        if (ze.preventContinuation) ((Tt = !0), (un ??= ze.stopReason));
      }
      if (jt.abortController.signal.aborted) {
        if (!jt.agentId)
          try {
            yield* tOe(jt);
          } catch {}
        if (!rMo.has(h_(jt.abortController.signal.reason)))
          yield gQ({
            toolUse: !1,
            interruptedMessageId: sYt(jt),
            now: p.now,
            uuidFn: p.uuid,
          });
        return (
          Efe(jt, a),
          {
            reason: "aborted_tools",
          }
        );
      }
      if (Tt)
        return (
          yield ai(
            {
              type: "hook_stopped_continuation",
              message: un || "Execution stopped by PostToolBatch hook",
              hookName: "PostToolBatch",
              toolUseID: Ne,
              hookEvent: "PostToolBatch",
            },
            p,
          ),
          Efe(jt, a),
          {
            reason: "hook_stopped",
          }
        );
    }
    let nn = a.startsWith("repl_main_thread") || a === "sdk",
      Ln = $.agentId,
      Hn = $.messageQueue.getCommandsByMaxPriority("next").filter((Ne) => {
        if (oua(Ne)) return !1;
        if (nn) return V0(Ne);
        return Ne.mode === "task-notification" && Ne.agentId === Ln;
      });
    for await (let Ne of g6e(null, jt, null, Hn, p, [...ce, ...ie, ...le], a))
      (yield Ne, le.push(Ne));
    let kr = Hn.filter((Ne) => Ne.mode === "prompt" || Ne.mode === "task-notification");
    if (kr.length > 0) {
      for (let Ne of kr)
        if (Ne.uuid)
          (t.push(Ne.uuid),
            yield {
              type: "command_lifecycle",
              uuid: Ne.uuid,
              state: "started",
            });
      $.messageQueue.remove(kr);
    }
    if (b && b.settledAt !== null && b.consumedOnIteration === -1) {
      let Ne = aMo(await b.promise, $.readFileState);
      for (let it of Ne) {
        let Tt = ai(it, p);
        (yield Tt, le.push(Tt));
      }
      b.consumedOnIteration = oe - 1;
    }
    let Mr = On(le, (Ne) => Ne.type === "attachment" && Ne.attachment.type === "edited_text_file");
    if (
      (G("tengu_query_after_attachments", {
        totalToolResultsCount: le.length,
        fileChangeAttachmentCount: Mr,
        queryChainId: ee,
        queryDepth: re.depth,
      }),
      jt.options.refreshTools)
    ) {
      let Ne = jt.options.refreshTools();
      if (Ne !== jt.options.tools) {
        let it = On(jt.options.tools, (un) => !!un.mcpInfo),
          Tt = On(Ne, (un) => !!un.mcpInfo);
        if (it !== Tt)
          G("tengu_mcp_tools_refreshed_mid_turn", {
            oldMcpCount: it,
            newMcpCount: Tt,
            recovered: it === 0 && Tt > 0,
          });
        jt = {
          ...jt,
          options: {
            ...jt.options,
            tools: Ne,
          },
        };
      }
    }
    if (jt.options.refreshMcpClients) {
      let Ne = jt.options.refreshMcpClients();
      jt = {
        ...jt,
        options: {
          ...jt.options,
          mcpClients: Ne,
        },
      };
    }
    let fe = {
        ...jt,
        queryTracking: re,
      },
      Te = oe + 1;
    if (c && Te > c)
      return (
        yield ai(
          {
            type: "max_turns_reached",
            maxTurns: c,
            turnCount: Te,
          },
          p,
        ),
        Efe($, a),
        {
          reason: "max_turns",
          turnCount: Te,
        }
      );
    (jp("query_recursive_call"),
      (m = {
        messages: [...ce, ...ie, ...le],
        toolUseContext: fe,
        compactTracking: ae,
        turnCount: Te,
        maxOutputTokensRecoveryCount: 0,
        hasAttemptedReactiveCompact: !1,
        thinkingOnlyNudged: !1,
        pendingToolUseSummary: Dn,
        maxOutputTokensOverride: void 0,
        stopHookActive: J,
        stopHookBlockingCount: 0,
        transition: {
          reason: "next_turn",
        },
      }));
  }
}
function awf(e, t) {
  return mo(zo(e)) === mo(zo(t));
}
function lwf(e, t, n, r) {
  switch (e) {
    case "overloaded":
    case "server_error":
      return `Switched to ${n} due to high demand for ${t}`;
    case "last_resort": {
      let o = r instanceof Error ? r.message : r !== void 0 ? String(r) : "",
        s = o.length > 300 ? `${o.slice(0, 300)}\u2026` : o;
      return `Switched to ${n} because ${t} returned an error that could not be retried${s ? ` (${s})` : ""}`;
    }
  }
}
function cwf(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n.type === "user" && !n.isMeta && !n.toolUseResult && !n.isCompactSummary) return t;
  }
  return 0;
}
var Jxl = null,
  dHe = () => (KQn(), ro(zQn)),
  nMo,
  rMo,
  owf = 3;
