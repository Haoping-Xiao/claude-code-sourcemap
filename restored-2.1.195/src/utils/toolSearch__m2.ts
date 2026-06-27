// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aSt
// matched 2.1.88 source: src/utils/toolSearch.ts
// class=modified (alt of src/utils/toolSearch.ts)  jaccard=0.029  score=0.056  fileCov=0.0567
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module aSt] deps: ft, S4, S$, dC, _a, WSe, dQn
yTf = (KWe(), ro(zWe));
function ZCl(e) {
  return e?.type === "assistant" && hSe(e);
}
function gPo(e) {
  return e?.type === "assistant" && M1n(e);
}
function hPo(e) {
  return (
    !e.hasAttempted &&
    !Gct(e.querySource) &&
    (e.hasPrecomputedSwap === true || !tLe(e.querySource)) &&
    pC() &&
    $X() &&
    !e.aborted
  );
}
async function pQn(e) {
  let {
      hasAttempted: t,
      querySource: n,
      aborted: r,
      messages: o,
      cacheSafeParams: s,
      precomputed: i,
      precomputeOutcome: a,
      initialTokenGap: l,
      thresholdSource: c,
      spinnerHintText: u,
    } = e,
    d = a?.kind,
    p = a?.kind === "failed" ? a.failure.cause : void 0;
  if (
    !hPo({
      hasAttempted: t,
      querySource: n,
      aborted: r,
      hasPrecomputedSwap: i !== void 0,
    })
  )
    return {
      result: null,
      hookBlocked: false,
    };
  let { toolUseContext: m } = s,
    g = lL(m.options.mainLoopModel, gg(m));
  (G("tengu_reactive_compact_triggered", {
    ...(g && {
      effort_level: $e(g),
    }),
    querySource: Bh(n),
    precomputed: i !== void 0,
    precomputedKind: Oo(d),
    precomputedFailureCause: Oo(p),
    thresholdSource: Oo(c),
  }),
    Hut(Fr(m), "summary"));
  let h = e.userWaitStartedAt ?? performance.now(),
    { hookResult: y, summarize: b } = i
      ? {
          hookResult: {
            userDisplayMessage: i.preCompactHookDisplay,
            blockedBy: void 0,
          },
          summarize: () => (
            m.onCompactEvent?.({
              type: "sdk_status",
              status: "compacting",
            }),
            fQn({
              compactResult: i.compactResult,
              messagesToPreserve: [...i.compactResult.messagesToPreserve, ...i.messagesSince],
              preCompactMessages: o,
              preCompactTokens: eA(o),
              startTime: h,
              cacheSafeParams: s,
              querySource: n,
              trigger: "auto",
              thresholdSource: c,
              precomputed: true,
              precomputeTelemetry: {
                statusAtPTL: i.statusAtPTL,
                leadMs: i.leadMs,
                totalMs: i.totalMs,
                borrowed: i.borrowed,
                messagesSinceTokens: qv(i.messagesSince),
              },
            })
          ),
        }
      : await (async () => {
          (m.onCompactEvent?.({
            type: "compact_progress",
            event: {
              type: "hooks_start",
              hookType: "pre_compact",
            },
          }),
            m.onCompactEvent?.({
              type: "sdk_status",
              status: "compacting",
            }));
          let C = await RQ(
            {
              trigger: "auto",
              customInstructions: null,
            },
            m.abortController.signal,
          ).catch((x) => (ke(x), {}));
          return {
            hookResult: C,
            summarize: () =>
              yPo(o, s, {
                customInstructions: C.newCustomInstructions,
                userWaitStartedAt: h,
                querySource: n,
                initialTokenGap: l,
                precomputedKind: d,
                precomputedFailureCause: p,
                thresholdSource: c,
              }),
          };
        })();
  if (y.blockedBy)
    return (
      T(`Reactive compact blocked by PreCompact hook: ${y.blockedBy}`),
      m.onCompactEvent?.({
        type: "compact_progress",
        event: {
          type: "compact_end",
        },
      }),
      m.onCompactEvent?.({
        type: "sdk_status",
        status: null,
      }),
      {
        result: null,
        hookBlocked: true,
      }
    );
  m.onCompactEvent?.({
    type: "compact_progress",
    event: {
      type: "compact_start",
      hintText: u,
    },
  });
  let _ = await b().catch((C) => {
    let x = be(C);
    if (K1(x))
      T(`Reactive compact API call failed: ${x}`, {
        level: "error",
      });
    else ke(C);
    return {
      ok: false,
      reason: "error",
      detail: x,
    };
  });
  m.onCompactEvent?.({
    type: "compact_progress",
    event: {
      type: "compact_end",
    },
  });
  let S = eA(o);
  if (!_.ok) {
    let C = _.reason === "error" ? (_.detail ?? _.reason) : _.reason;
    return (
      J0e({
        trigger: "auto",
        success: false,
        durationMs: performance.now() - h,
        preTokens: S,
        error: C,
      }),
      m.onCompactEvent?.({
        type: "sdk_status",
        status: null,
        metadata: {
          compactResult: "failed",
          compactError: C,
        },
      }),
      {
        result: null,
        hookBlocked: false,
      }
    );
  }
  let A = _.result.boundaryMarker;
  if (
    (J0e({
      trigger: "auto",
      success: true,
      durationMs: performance.now() - h,
      preTokens: S,
      postTokens: pA(A) ? A.compactMetadata.postTokens : void 0,
    }),
    m.onCompactEvent?.({
      type: "sdk_status",
      status: null,
      metadata: {
        compactResult: "success",
      },
    }),
    hfe(n, m.setAppState, m.agentId, s.stickyBetas),
    y3e(n))
  )
    gut();
  let v =
    [y.userDisplayMessage, _.result.userDisplayMessage].filter(Boolean).join(`
`) || void 0;
  return {
    result: {
      ..._.result,
      userDisplayMessage: v,
    },
    hookBlocked: false,
  };
}
async function yPo(e, t, n) {
  let r = eA(e),
    o = n?.userWaitStartedAt ?? performance.now(),
    s = n?.querySource,
    i = n?.trigger ?? "auto",
    a = await SNn(e, t, {
      customInstructions: n?.customInstructions,
      initialTokenGap: n?.initialTokenGap,
    });
  if (!a.ok) {
    let l = lL(t.toolUseContext.options.mainLoopModel, gg(t.toolUseContext)),
      c = a.reason === "aborted" ? zct(t.toolUseContext.abortController.signal.reason) : void 0;
    if (
      (G("tengu_reactive_compact_failed", {
        ...(l && {
          effort_level: $e(l),
        }),
        querySource: Bh(s),
        reason: $e(a.reason),
        abortKind: Oo(c),
        detail: a.detail ? H4(a.detail).slice(0, 80) : void 0,
        trigger: $e(i),
        preCompactTokens: r,
        attempts: a.attempts,
        totalGroups: a.totalGroups,
        durationMs: Math.round(performance.now() - o),
        precomputedKind: Oo(n?.precomputedKind),
        precomputedFailureCause: n?.precomputedFailureCause,
        thresholdSource: Oo(n?.thresholdSource),
        manualPrecomputeReuse: Oo(n?.manualPrecomputeReuse),
      }),
      c !== void 0)
    ) {
      if (aio(c)) It("compact_reactive", "compact_reactive_aborted");
      else Le("compact_reactive", `compact_reactive_aborted_${c}`);
    } else Le("compact_reactive", `compact_reactive_${a.reason}`);
    return {
      ok: false,
      reason: a.reason,
      detail: a.detail,
    };
  }
  return fQn({
    compactResult: a.result,
    messagesToPreserve: a.result.messagesToPreserve,
    preCompactMessages: e,
    preCompactTokens: r,
    startTime: o,
    cacheSafeParams: t,
    querySource: s,
    trigger: i,
    thresholdSource: n?.thresholdSource,
    precomputed: false,
    manualPrecomputeReuse: n?.manualPrecomputeReuse,
  });
}
async function fQn(e) {
  let {
      compactResult: t,
      preCompactMessages: n,
      startTime: r,
      cacheSafeParams: o,
      querySource: s,
      trigger: i,
      thresholdSource: a,
      precomputed: l,
      manualPrecomputeReuse: c,
      precomputeTelemetry: u,
    } = e,
    { toolUseContext: d } = o,
    p = y3e(s),
    f = e.preCompactTokens ?? eA(n),
    m = mjt(d.readFileState);
  if ((d.readFileState.clear(), d.loadedNestedMemoryPaths))
    for (let P of Object.keys(d.loadedNestedMemoryPaths)) delete d.loadedNestedMemoryPaths[P];
  if ((y5e(d.memorySelector), WX())) Bjt(s ?? "compact", d.agentId);
  if (p) (aJe(), lSt());
  let g = n.at(-1)?.uuid,
    h = MKt(i, f, g);
  if (((h.compactMetadata.durationMs = Math.round(performance.now() - r)), l))
    h.compactMetadata.precomputed = true;
  let y = xQ(n);
  if (y.size > 0) h.compactMetadata.preCompactDiscoveredTools = [...y].sort();
  let b = e.messagesToPreserve.map($8e),
    _ = await _Tf(m, d, b).catch(
      (P) => (
        ke(P),
        {
          attachments: [],
          hookResults: [],
        }
      ),
    );
  d.onCompactEvent?.({
    type: "compact_progress",
    event: {
      type: "hooks_start",
      hookType: "post_compact",
    },
  });
  let S = await eOe(
      {
        trigger: i,
        compactSummary: t.summaryText,
      },
      d.abortController.signal,
    ),
    A = _Po(h, t.summaryMessages.at(-1).uuid, b, n),
    v = {
      boundaryMarker: A,
      summaryMessages: t.summaryMessages,
      messagesToKeep: b,
      attachments: _.attachments,
      hookResults: _.hookResults,
      userDisplayMessage: S.userDisplayMessage,
      preCompactTokenCount: f,
    },
    C = qv(PAe(v));
  A.compactMetadata.postTokens = C;
  let x = (() => {
      try {
        return eNn(Z1n(n));
      } catch (P) {
        return (ke(P), {});
      }
    })(),
    I = t.totalUsage,
    k = I.input_tokens + I.cache_creation_input_tokens + I.cache_read_input_tokens,
    D = lL(d.options.mainLoopModel, gg(d));
  return (
    xe("compact_reactive"),
    G("tengu_reactive_compact_succeeded", {
      ...(D && {
        effort_level: $e(D),
      }),
      querySource: Bh(s),
      attempts: t.attempt,
      groupsPreserved: t.groupsPreserved,
      totalGroups: t.totalGroups,
      preservedUuidCount: A.compactMetadata.preservedMessages?.uuids.length ?? 0,
      preservedMessageCount: b.length,
      forkAssistantMessageCount: t.forkAssistantMessageCount,
      trigger: $e(i),
      thresholdSource: Oo(a),
      preCompactTokens: f,
      postCompactTokens: C,
      restoredAttachmentCount: _.attachments.length + _.hookResults.length,
      durationMs: Math.round(performance.now() - r),
      userWaitMs: Math.round(performance.now() - r),
      precomputed: l,
      manualPrecomputeReuse: Oo(c),
      precomputeBorrowed: u?.borrowed,
      precomputeStatusAtPTL: Oo(u?.statusAtPTL),
      precomputeLeadMs: u ? Math.round(u.leadMs) : void 0,
      precomputeTotalMs: u ? Math.round(u.totalMs) : void 0,
      messagesSincePrecompute: l ? b.length - t.messagesToPreserve.length : void 0,
      messagesSinceTokens: u?.messagesSinceTokens,
      compactionInputTokens: I.input_tokens,
      compactionOutputTokens: I.output_tokens,
      compactionCacheReadTokens: I.cache_read_input_tokens,
      compactionCacheCreationTokens: I.cache_creation_input_tokens,
      compactionTotalTokens: k + I.output_tokens,
      cacheHitRate: k > 0 ? I.cache_read_input_tokens / k : 0,
      ...x,
    }),
    {
      ok: true,
      result: v,
    }
  );
}
function $8e(e) {
  if (e.type !== "assistant") return e;
  return {
    ...e,
    message: {
      ...e.message,
      usage: {
        ...e.message.usage,
        input_tokens: 0,
        output_tokens: 0,
        cache_creation_input_tokens: 0,
        cache_read_input_tokens: 0,
      },
    },
  };
}
async function _Tf(e, t, n) {
  let [r, o] = await Promise.all([gQn(e, t, mQn, n), bQn(t)]),
    s = t.agentId,
    i = hQn(s),
    a = await _Qn(t),
    l = yQn(s),
    c = [
      ...$Ae(t.options.tools, t.options.mainLoopModel, n, {
        callSite: "reactive_compact",
      }),
      ...Z$e(t, n),
      ...kze(t.options.mcpClients, t.options.tools, t.options.mainLoopModel, n),
    ].map((d) => ai(d));
  t.onCompactEvent?.({
    type: "compact_progress",
    event: {
      type: "hooks_start",
      hookType: "session_start",
    },
  });
  let u = await z8("compact", {
    model: t.options.mainLoopModel,
  });
  return {
    attachments: [...r, ...o, ...(i ? [i] : []), ...(a ? [a] : []), ...(l ? [l] : []), ...c],
    hookResults: u,
  };
}
