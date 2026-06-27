// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lZn
// matched 2.1.88 source: src/services/compact/compact.ts
// class=modified  jaccard=0.3984  score=0.5664  fileCov=0.5732
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var lZn = E(() => {
  NN = class NN extends Error {
    originalModel;
    fallbackModel;
    reason;
    originalError;
    constructor(e, t, n = "overloaded", r) {
      super(`Model fallback triggered: ${e} -> ${t}`);
      this.originalModel = e;
      this.fallbackModel = t;
      this.reason = n;
      this.originalError = r;
      this.name = "FallbackTriggeredError";
    }
  };
});
function wwf(e) {
  if (
    e.type === "queued_command" &&
    Array.isArray(e.prompt) &&
    e.prompt.some((t) => t.type === "image" || t.type === "document")
  )
    return {
      ...e,
      prompt: e.prompt.map((t) =>
        t.type === "image"
          ? {
              type: "text",
              text: "[image]",
            }
          : t.type === "document"
            ? {
                type: "text",
                text: "[document]",
              }
            : t,
      ),
    };
  if (
    e.type === "file" &&
    (e.content.type === "image" || e.content.type === "notebook" || e.content.type === "parts")
  )
    return {
      ...e,
      content: {
        type: "text",
        file: {
          filePath: e.filename,
          content: `[${e.content.type}]`,
          numLines: 1,
          startLine: 1,
          totalLines: 1,
        },
      },
    };
  return e;
}
function kao(e) {
  return e.map((t) => {
    if (t.type === "attachment") {
      let s = wwf(t.attachment);
      return s === t.attachment
        ? t
        : {
            ...t,
            attachment: s,
          };
    }
    if (t.type !== "user") return t;
    let n = t.message.content;
    if (!Array.isArray(n)) return t;
    let r = false,
      o = n.flatMap((s) => {
        if (s.type === "image")
          return (
            (r = true),
            [
              {
                type: "text",
                text: "[image]",
              },
            ]
          );
        if (s.type === "document")
          return (
            (r = true),
            [
              {
                type: "text",
                text: "[document]",
              },
            ]
          );
        if (s.type === "tool_result" && Array.isArray(s.content)) {
          let i = false,
            a = s.content.map((l) => {
              if (l.type === "image")
                return (
                  (i = true),
                  {
                    type: "text",
                    text: "[image]",
                  }
                );
              if (l.type === "document")
                return (
                  (i = true),
                  {
                    type: "text",
                    text: "[document]",
                  }
                );
              return l;
            });
          if (i)
            return (
              (r = true),
              [
                {
                  ...s,
                  content: a,
                },
              ]
            );
        }
        return [s];
      });
    if (!r) return t;
    return {
      ...t,
      message: {
        ...t.message,
        content: o,
      },
    };
  });
}
function Cwf(e) {
  return e.filter((t) => t.type !== "attachment" || t.attachment.type === "queued_command");
}
function vkl(e) {
  if (e.length <= Akl) return e;
  let t = Akl,
    n = e.charCodeAt(t - 1);
  if (n >= 55296 && n <= 56319) t--;
  return `${e.slice(0, t)}\u2026[truncated, original ${e.length} chars]`;
}
function _Mo(e) {
  if (typeof e === "string") return vkl(e);
  if (Array.isArray(e)) {
    let t = e.map(_Mo);
    return t.some((n, r) => n !== e[r]) ? t : e;
  }
  if (typeof e === "object" && e !== null) {
    let t = e,
      n = false,
      r = {};
    for (let [o, s] of Object.entries(t)) {
      let i = _Mo(s);
      if (i !== s) n = true;
      r[o] = i;
    }
    return n ? r : e;
  }
  return e;
}
function Iwf(e) {
  return e.map((t) => {
    if (t.type === "assistant") {
      let n = t.message.content;
      if (!Array.isArray(n)) return t;
      let r = n.some(dYt),
        o = (r ? n.filter((s) => !dYt(s)) : n).map((s) => {
          if (s.type !== "tool_use") return s;
          let i = _Mo(s.input);
          if (i === s.input) return s;
          return (
            (r = true),
            {
              ...s,
              input: i,
            }
          );
        });
      if (!r) return t;
      return {
        ...t,
        message: {
          ...t.message,
          content: o,
        },
      };
    }
    if (t.type === "user") {
      let n = t.message.content;
      if (!Array.isArray(n)) return t;
      let r = false,
        o = n.map((s) => {
          if (s.type !== "tool_result") return s;
          let i =
              typeof s.content === "string"
                ? s.content
                : Array.isArray(s.content)
                  ? s.content.map((l) => (l.type === "text" ? l.text : "")).join("")
                  : "",
            a = vkl(i);
          if (s.content === a) return s;
          return (
            (r = true),
            {
              ...s,
              content: a,
            }
          );
        });
      if (!r) return t;
      return {
        ...t,
        message: {
          ...t.message,
          content: o,
        },
      };
    }
    return t;
  });
}
function Ckl(e, t) {
  let n = e[0]?.type === "user" && e[0].isMeta && e[0].message.content === Hkl ? e.slice(1) : e,
    r = Tut(n);
  if (r.length < 2) return null;
  let o = iut(t),
    s;
  if (o !== void 0) {
    let a = 0;
    s = 0;
    for (let l of r) if (((a += qv(l)), s++, a >= o)) break;
  } else s = Math.max(1, Math.floor(r.length * 0.2));
  if (((s = Math.min(s, r.length - 1)), s < 1)) return null;
  let i = r.slice(s).flat();
  if (i[0]?.type === "assistant")
    return [
      Rn({
        content: Hkl,
        isMeta: true,
      }),
      ...i,
    ];
  return i;
}
function uZn(e, t, n) {
  if (!e.blockedBy) return;
  if (
    (T(`Compaction blocked by PreCompact hook: ${e.blockedBy}`, {
      level: "warn",
    }),
    !n?.suppressNotification)
  )
    t?.({
      key: "compaction-blocked-by-hook",
      text: "compaction blocked by PreCompact hook",
      priority: "immediate",
      color: "warning",
    });
  throw new Tq(`${abt}: ${e.blockedBy}`);
}
function PAe(e) {
  return [
    e.boundaryMarker,
    ...e.summaryMessages,
    ...e.messagesToKeep,
    ...e.attachments,
    ...e.hookResults,
  ];
}
function oMo(e) {
  return [e.boundaryMarker, ...e.summaryMessages, ...e.attachments, ...e.hookResults];
}
function _Po(e, t, n, r = n) {
  let o = n.map((i) => i.uuid),
    s = Gze([...n], r).map((i) => i.uuid);
  if (o.length === 0) return e;
  return {
    ...e,
    compactMetadata: {
      ...e.compactMetadata,
      ...(s.length > 0 && {
        preservedSegment: {
          headUuid: s[0],
          anchorUuid: t,
          tailUuid: s.at(-1),
        },
      }),
      preservedMessages: {
        anchorUuid: t,
        uuids: s,
        allUuids: o,
      },
    },
  };
}
function SMo(e, t) {
  if (!t) return e || void 0;
  if (!e) return t;
  return `${e}

${t}`;
}
async function w7n(e, t, n, r, o, s = false, i, a = false, l, c, u) {
  let d = s ? "compact_auto" : "compact_manual",
    p,
    f,
    m,
    g = performance.now(),
    h = B3t("claude_code.compaction", {
      spanType: "compaction",
      attrs: {
        trigger: s ? "auto" : "manual",
        message_count: e.length,
      },
    });
  try {
    if (e.length === 0) throw (Le(d, "compact_not_enough_messages"), Error(CSt));
    f = eA(e);
    let y = t.getAppState();
    (Hut(Fr(t), "summary"),
      t.onCompactEvent?.({
        type: "compact_progress",
        event: {
          type: "hooks_start",
          hookType: "pre_compact",
        },
      }),
      t.onCompactEvent?.({
        type: "sdk_status",
        status: "compacting",
      }));
    let b = await RQ(
      {
        trigger: s ? "auto" : "manual",
        customInstructions: o ?? null,
      },
      t.abortController.signal,
    );
    (uZn(b, c, {
      suppressNotification: s,
    }),
      (o = SMo(o, b.newCustomInstructions)));
    let _ = b.userDisplayMessage;
    (t.onCompactEvent?.({
      type: "stream_mode",
      mode: "requesting",
    }),
      u?.({
        type: "response_length",
        op: "reset",
      }),
      t.onCompactEvent?.({
        type: "compact_progress",
        event: {
          type: "compact_start",
          hintText: l,
        },
      }));
    let S = !a && at("tengu_compact_cache_prefix", true),
      A = bNn(o),
      v = Rn({
        content: A,
      }),
      C = e,
      x = n,
      I,
      k,
      D = 0;
    for (;;) {
      if (
        ((I = await kkl({
          messages: C,
          summaryRequest: v,
          appState: y,
          context: t,
          preCompactTokenCount: f,
          cacheSafeParams: x,
          stripNonEssential: a,
          onResponseLength: u,
        })),
        (k = K8(I)),
        !k?.startsWith(nF))
      )
        break;
      D++;
      let Ee = D <= wkl ? Ckl(C, I) : null;
      if (!Ee)
        throw (
          G("tengu_compact_failed", {
            reason: We("prompt_too_long"),
            preCompactTokenCount: f,
            promptCacheSharingEnabled: S,
            ptlAttempts: D,
          }),
          Le(d, "compact_prompt_too_long"),
          Error(cZn)
        );
      (G("tengu_compact_ptl_retry", {
        attempt: D,
        droppedMessages: C.length - Ee.length,
        remainingMessages: Ee.length,
      }),
        (C = Ee),
        (x = {
          ...x,
          forkContextMessages: Ee,
        }));
    }
    if (!k)
      throw (
        T(`Compact failed: no summary text in response. Response: ${De(I)}`, {
          level: "error",
        }),
        G("tengu_compact_failed", {
          reason: We("no_summary"),
          preCompactTokenCount: f,
          promptCacheSharingEnabled: S,
        }),
        Le(d, "compact_no_summary"),
        new Tq(
          "Failed to generate conversation summary - response did not contain valid text content",
        )
      );
    else if (I.isApiErrorMessage || K1(k))
      throw (
        G("tengu_compact_failed", {
          reason: We("api_error"),
          errorPrefix: H4(k).slice(0, 60),
          preCompactTokenCount: f,
          promptCacheSharingEnabled: S,
        }),
        Le(d, "compact_api_error"),
        Error(k)
      );
    let P = mjt(t.readFileState);
    if ((t.readFileState.clear(), t.loadedNestedMemoryPaths))
      for (let Ee of Object.keys(t.loadedNestedMemoryPaths)) delete t.loadedNestedMemoryPaths[Ee];
    y5e(t.memorySelector);
    let [O, L] = await Promise.all([gQn(P, t, mQn), bQn(t)]),
      M = [...O, ...L],
      N = hQn(t.agentId);
    if (N) M.push(N);
    let B = await _Qn(t);
    if (B) M.push(B);
    let $ = yQn(t.agentId);
    if ($) M.push($);
    for (let Ee of $Ae(t.options.tools, t.options.mainLoopModel, [], {
      callSite: "compact_full",
    }))
      M.push(ai(Ee));
    for (let Ee of Z$e(t, [])) M.push(ai(Ee));
    for (let Ee of kze(t.options.mcpClients, t.options.tools, t.options.mainLoopModel, []))
      M.push(ai(Ee));
    t.onCompactEvent?.({
      type: "compact_progress",
      event: {
        type: "hooks_start",
        hookType: "session_start",
      },
    });
    let q = await z8("compact", {
        model: t.options.mainLoopModel,
      }),
      W = Math.round(performance.now() - g),
      V = MKt(s ? "auto" : "manual", f ?? 0, e.at(-1)?.uuid),
      Y = xQ(e);
    if (Y.size > 0) V.compactMetadata.preCompactDiscoveredTools = [...Y].sort();
    let z = em(),
      K = LI() && Y2t(t.getReplContexts(), t.agentId),
      Z = [
        Rn({
          content: Kjt(k, r, z, void 0, K),
          isCompactSummary: true,
          isVisibleInTranscriptOnly: true,
        }),
      ],
      J = OX([I]),
      ne = qv([V, ...Z, ...M, ...q]);
    ((V.compactMetadata.postTokens = ne), (V.compactMetadata.durationMs = W), (m = ne));
    let oe = lre(I),
      re = Bh(i?.querySource ?? t.options.querySource) ?? "unknown",
      ee = lL(t.options.mainLoopModel, gg(t));
    if (
      (G("tengu_compact", {
        preCompactTokenCount: f,
        stripNonEssential: a,
        postCompactTokenCount: J,
        truePostCompactTokenCount: ne,
        autoCompactThreshold: i?.autoCompactThreshold ?? -1,
        willRetriggerNextTurn: i !== void 0 && ne >= i.autoCompactThreshold,
        isAutoCompact: s,
        ...(ee && {
          effort_level: $e(ee),
        }),
        querySource: re,
        queryChainId: t.queryTracking?.chainId ?? "",
        queryDepth: t.queryTracking?.depth ?? -1,
        isRecompactionInChain: i?.isRecompactionInChain ?? false,
        turnsSincePreviousCompact: i?.turnsSincePreviousCompact ?? -1,
        previousCompactTurnId: i?.previousCompactTurnId ?? "",
        compactionInputTokens: oe?.input_tokens,
        compactionOutputTokens: oe?.output_tokens,
        compactionCacheReadTokens: oe?.cache_read_input_tokens ?? 0,
        compactionCacheCreationTokens: oe?.cache_creation_input_tokens ?? 0,
        compactionTotalTokens: oe
          ? oe.input_tokens +
            (oe.cache_creation_input_tokens ?? 0) +
            (oe.cache_read_input_tokens ?? 0) +
            oe.output_tokens
          : 0,
        promptCacheSharingEnabled: S,
        ...(() => {
          try {
            return eNn(Z1n(e));
          } catch (Ee) {
            return (ke(Ee), {});
          }
        })(),
      }),
      WX())
    )
      Bjt(i?.querySource ?? "compact", t.agentId);
    if (y3e(i?.querySource)) (aJe(), lSt());
    t.onCompactEvent?.({
      type: "compact_progress",
      event: {
        type: "hooks_start",
        hookType: "post_compact",
      },
    });
    let ae = await eOe(
        {
          trigger: s ? "auto" : "manual",
          compactSummary: k,
        },
        t.abortController.signal,
      ),
      de = [_, ae.userDisplayMessage].filter(Boolean).join(`
`);
    return (
      xe(d),
      {
        boundaryMarker: V,
        summaryMessages: Z,
        messagesToKeep: [],
        attachments: M,
        hookResults: q,
        userDisplayMessage: de || void 0,
        preCompactTokenCount: f,
        postCompactTokenCount: J,
        truePostCompactTokenCount: ne,
        compactionUsage: oe,
      }
    );
  } catch (y) {
    if (((p = y instanceof Error ? y.message : "compaction failed"), !s)) xkl(y, c);
    throw y;
  } finally {
    if (
      (t.onCompactEvent?.({
        type: "stream_mode",
        mode: "requesting",
      }),
      u?.({
        type: "response_length",
        op: "reset",
      }),
      t.onCompactEvent?.({
        type: "compact_progress",
        event: {
          type: "compact_end",
        },
      }),
      J0e({
        trigger: s ? "auto" : "manual",
        success: !p,
        durationMs: performance.now() - g,
        preTokens: f,
        postTokens: m,
        error: p,
      }),
      h)
    ) {
      if (
        (O3t(h, {
          ...(f !== void 0 && {
            pre_compact_tokens: f,
          }),
          ...(m !== void 0 && {
            post_compact_tokens: m,
          }),
          success: !p,
        }),
        p)
      )
        Sqe(h, p);
      h.end();
    }
    t.onCompactEvent?.({
      type: "sdk_status",
      status: null,
      metadata: {
        compactResult: p ? "failed" : "success",
        ...(p && {
          compactError: p,
        }),
      },
    });
  }
}
async function Ikl(e, t, n, r, o, s = "from", i, a) {
  let l,
    c,
    u,
    d = performance.now();
  try {
    let p = s === "up_to" ? e.slice(0, t) : e.slice(t),
      f =
        s === "up_to"
          ? e
              .slice(t)
              .filter(
                (oe) =>
                  oe.type !== "progress" && !pA(oe) && !(oe.type === "user" && oe.isCompactSummary),
              )
          : e.slice(0, t).filter((oe) => oe.type !== "progress");
    if (p.length === 0)
      throw Error(
        s === "up_to"
          ? "Nothing to summarize before the selected message."
          : "Nothing to summarize after the selected message.",
      );
    let m = eA(e);
    ((c = m),
      n.onCompactEvent?.({
        type: "compact_progress",
        event: {
          type: "hooks_start",
          hookType: "pre_compact",
        },
      }),
      n.onCompactEvent?.({
        type: "sdk_status",
        status: "compacting",
      }));
    let g = await RQ(
      {
        trigger: "manual",
        customInstructions: null,
      },
      n.abortController.signal,
    );
    uZn(g, i);
    let h;
    if (g.newCustomInstructions && o)
      h = `${g.newCustomInstructions}

User context: ${o}`;
    else if (g.newCustomInstructions) h = g.newCustomInstructions;
    else if (o) h = `User context: ${o}`;
    (n.onCompactEvent?.({
      type: "stream_mode",
      mode: "requesting",
    }),
      a?.({
        type: "response_length",
        op: "reset",
      }),
      n.onCompactEvent?.({
        type: "compact_progress",
        event: {
          type: "compact_start",
        },
      }));
    let y = Rca(h, s),
      b = Rn({
        content: y,
      }),
      _ = {
        preCompactTokenCount: m,
        direction: $e(s),
        messagesSummarized: p.length,
      },
      S = s === "up_to" ? p : e,
      A =
        s === "up_to"
          ? {
              ...r,
              forkContextMessages: p,
            }
          : r,
      v,
      C,
      x = 0;
    for (;;) {
      if (
        ((v = await kkl({
          messages: S,
          summaryRequest: b,
          appState: n.getAppState(),
          context: n,
          preCompactTokenCount: m,
          cacheSafeParams: A,
          onResponseLength: a,
        })),
        (C = K8(v)),
        !C?.startsWith(nF))
      )
        break;
      x++;
      let oe = x <= wkl ? Ckl(S, v) : null;
      if (!oe)
        throw (
          G("tengu_partial_compact_failed", {
            reason: We("prompt_too_long"),
            ..._,
            ptlAttempts: x,
          }),
          Le("compact_partial", "compact_partial_prompt_too_long"),
          Error(cZn)
        );
      (G("tengu_compact_ptl_retry", {
        attempt: x,
        droppedMessages: S.length - oe.length,
        remainingMessages: oe.length,
        path: We("partial"),
      }),
        (S = oe),
        (A = {
          ...A,
          forkContextMessages: oe,
        }));
    }
    if (!C)
      throw (
        G("tengu_partial_compact_failed", {
          reason: We("no_summary"),
          ..._,
        }),
        Le("compact_partial", "compact_partial_no_summary"),
        new Tq(
          "Failed to generate conversation summary - response did not contain valid text content",
        )
      );
    else if (v.isApiErrorMessage || K1(C))
      throw (
        G("tengu_partial_compact_failed", {
          reason: We("api_error"),
          errorPrefix: H4(C).slice(0, 60),
          ..._,
        }),
        Le("compact_partial", "compact_partial_api_error"),
        Error(C)
      );
    let I = mjt(n.readFileState);
    if ((n.readFileState.clear(), n.loadedNestedMemoryPaths))
      for (let oe of Object.keys(n.loadedNestedMemoryPaths)) delete n.loadedNestedMemoryPaths[oe];
    y5e(n.memorySelector);
    let [k, D] = await Promise.all([gQn(I, n, mQn, f), bQn(n)]),
      P = [...k, ...D],
      O = hQn(n.agentId);
    if (O) P.push(O);
    let L = await _Qn(n);
    if (L) P.push(L);
    let M = yQn(n.agentId);
    if (M) P.push(M);
    for (let oe of $Ae(n.options.tools, n.options.mainLoopModel, f, {
      callSite: "compact_partial",
    }))
      P.push(ai(oe));
    for (let oe of Z$e(n, f)) P.push(ai(oe));
    for (let oe of kze(n.options.mcpClients, n.options.tools, n.options.mainLoopModel, f))
      P.push(ai(oe));
    n.onCompactEvent?.({
      type: "compact_progress",
      event: {
        type: "hooks_start",
        hookType: "session_start",
      },
    });
    let N = await z8("compact", {
        model: n.options.mainLoopModel,
      }),
      B = OX([v]),
      $ = lre(v),
      q = lL(n.options.mainLoopModel, gg(n));
    G("tengu_partial_compact", {
      preCompactTokenCount: m,
      postCompactTokenCount: B,
      messagesKept: f.length,
      messagesSummarized: p.length,
      ...(q && {
        effort_level: $e(q),
      }),
      direction: $e(s),
      hasUserFeedback: !!o,
      trigger: We("message_selector"),
      compactionInputTokens: $?.input_tokens,
      compactionOutputTokens: $?.output_tokens,
      compactionCacheReadTokens: $?.cache_read_input_tokens ?? 0,
      compactionCacheCreationTokens: $?.cache_creation_input_tokens ?? 0,
    });
    let W =
        s === "up_to"
          ? e.slice(0, t).findLast((oe) => oe.type !== "progress")?.uuid
          : f.at(-1)?.uuid,
      V = MKt("manual", m ?? 0, W, o, p.length),
      Y = xQ(e);
    if (Y.size > 0) V.compactMetadata.preCompactDiscoveredTools = [...Y].sort();
    V.compactMetadata.durationMs = Math.round(performance.now() - d);
    let z = em(),
      K = LI() && Y2t(n.getReplContexts(), n.agentId),
      Z = [
        Rn({
          content: Kjt(C, false, z, void 0, K),
          isCompactSummary: true,
          ...(f.length > 0
            ? {
                summarizeMetadata: {
                  messagesSummarized: p.length,
                  userContext: o,
                  direction: s,
                },
              }
            : {
                isVisibleInTranscriptOnly: true,
              }),
        }),
      ];
    if (WX()) Bjt(n.options.querySource ?? "compact", n.agentId);
    (aJe(),
      lSt(),
      n.onCompactEvent?.({
        type: "compact_progress",
        event: {
          type: "hooks_start",
          hookType: "post_compact",
        },
      }));
    let J = await eOe(
      {
        trigger: "manual",
        compactSummary: C,
      },
      n.abortController.signal,
    );
    ((u = qv([V, ...Z, ...f, ...P, ...N])), (V.compactMetadata.postTokens = u));
    let ne = s === "up_to" ? (Z.at(-1)?.uuid ?? V.uuid) : V.uuid;
    return (
      xe("compact_partial"),
      {
        boundaryMarker: _Po(V, ne, f, e),
        summaryMessages: Z,
        messagesToKeep: f,
        attachments: P,
        hookResults: N,
        userDisplayMessage: J.userDisplayMessage,
        preCompactTokenCount: m,
        postCompactTokenCount: B,
        compactionUsage: $,
      }
    );
  } catch (p) {
    throw ((l = p instanceof Error ? p.message : "partial compaction failed"), xkl(p, i), p);
  } finally {
    (n.onCompactEvent?.({
      type: "stream_mode",
      mode: "requesting",
    }),
      a?.({
        type: "response_length",
        op: "reset",
      }),
      n.onCompactEvent?.({
        type: "compact_progress",
        event: {
          type: "compact_end",
        },
      }),
      J0e({
        trigger: "manual",
        success: !l,
        durationMs: performance.now() - d,
        preTokens: c,
        postTokens: u,
        error: l,
      }),
      n.onCompactEvent?.({
        type: "sdk_status",
        status: null,
        metadata: {
          compactResult: l ? "failed" : "success",
          ...(l && {
            compactError: l,
          }),
        },
      }));
  }
}
function xkl(e, t) {
  if (!Xie(e, t3) && !Xie(e, CSt) && !be(e).startsWith(abt))
    (t?.({
      key: "error-compacting-conversation",
      text: "Error compacting conversation",
      priority: "immediate",
      color: "error",
    }),
      zv({
        type: "system",
        subtype: "notification",
        key: "error-compacting-conversation",
        text: "Error compacting conversation",
        priority: "immediate",
        color: "error",
      }));
}
function xwf(e) {
  if (!e) return We("none");
  if (e.isApiErrorMessage) return We("api_error");
  return $e(e.message.content[0]?.type ?? "empty");
}
function ENn(e, t) {
  return (Array.isArray(t) ? t : t !== void 0 ? [t] : []).filter((r) => !XIe(e, r));
}
function Rao() {
  return async () => ({
    behavior: "deny",
    message: "Tool use is not allowed during compaction",
    decisionReason: {
      type: "other",
      reason: "compaction agent should only produce text summary",
    },
  });
}
async function kkl({
  messages: e,
  summaryRequest: t,
  appState: n,
  context: r,
  preCompactTokenCount: o,
  cacheSafeParams: s,
  stripNonEssential: i = false,
  onResponseLength: a,
}) {
  let l = !i && at("tengu_compact_cache_prefix", true),
    c = oHl()
      ? setInterval(
          (u) => {
            (rHl(),
              u?.({
                type: "sdk_status",
                status: "compacting",
              }));
          },
          30000,
          r.onCompactEvent,
        )
      : void 0;
  try {
    if (l)
      try {
        let S = await dk({
            promptMessages: [t],
            cacheSafeParams: s,
            canUseTool: Rao(),
            querySource: "compact",
            forkLabel: "compact",
            maxTurns: 1,
            fallbackModel: ENn(r.options.mainLoopModel, r.options.fallbackModel),
            skipCacheWrite: true,
            skipTranscript: true,
            overrides: {
              abortController: r.abortController,
            },
          }),
          A = MI(S.messages),
          v = _Nn(S.messages),
          C = On(S.messages, (x) => x.type === "assistant" && !x.isApiErrorMessage);
        if (A && v && !A.isApiErrorMessage) {
          if (!v.startsWith(nF))
            G("tengu_compact_cache_sharing_success", {
              preCompactTokenCount: o,
              outputTokens: S.totalUsage.output_tokens,
              cacheReadInputTokens: S.totalUsage.cache_read_input_tokens,
              cacheCreationInputTokens: S.totalUsage.cache_creation_input_tokens,
              cacheHitRate:
                S.totalUsage.cache_read_input_tokens > 0
                  ? S.totalUsage.cache_read_input_tokens /
                    (S.totalUsage.cache_read_input_tokens +
                      S.totalUsage.cache_creation_input_tokens +
                      S.totalUsage.input_tokens)
                  : 0,
              forkAssistantMessageCount: C,
            });
          return yNn(S.messages) ?? A;
        }
        if (r.abortController.signal.aborted) throw Error(t3);
        (T(`Compact cache sharing: no text in response, falling back. Response: ${De(A)}`, {
          level: "warn",
        }),
          G("tengu_compact_cache_sharing_fallback", {
            reason: We("no_text_response"),
            preCompactTokenCount: o,
            lastAssistantKind: xwf(A),
            assistantTextLength: v?.length ?? 0,
            forkAssistantMessageCount: C,
            stopReason: Oo(
              A?.isApiErrorMessage && A.message.stop_reason !== "refusal"
                ? void 0
                : (A?.message.stop_reason ?? void 0),
            ),
            assistantErrorKind: Oo(A?.error ?? void 0),
          }));
      } catch (S) {
        if (r.abortController.signal.aborted || Xie(S, t3)) throw Error(t3);
        (ke(S),
          G("tengu_compact_cache_sharing_fallback", {
            reason: We("error"),
            preCompactTokenCount: o,
          }));
      }
    let d =
        !i &&
        (await pYt(
          r.options.mainLoopModel,
          r.options.tools,
          async () => n.toolPermissionContext,
          r.options.agentDefinitions.activeAgents,
          "compact",
        ))
          ? oE([Vg, $jt, ...r.options.tools.filter((S) => S.isMcp)], "name")
          : [Vg],
      p = [...Py(e), t],
      f = kao(i ? Cwf(p) : p),
      m = i ? Iwf(f) : f,
      g = r.options.mainLoopModel,
      h = r.agentId === void 0;
    if (dut(g, r.requestDialog)) {
      let S = bye();
      if (S === null) {
        if (h) Le("model_fable_consent", "compact_no_allowed_fallback");
        throw Error(
          "Compaction unavailable: your model policy only allows Fable 5, which requires usage credits \xB7 /model to set it up",
        );
      }
      if (h) It("model_fable_consent", "compact_substituted");
      g = S;
    }
    let y = ENn(g, r.options.fallbackModel),
      b = [g, ...y.filter((S) => S !== g)],
      _ = 0;
    while (true) {
      let S = b[_],
        A = false,
        v = [];
      a?.({
        type: "response_length",
        op: "reset",
      });
      try {
        let x = ybt({
            messages: lk(m, i ? [] : r.options.tools),
            systemPrompt: Sc([
              "You are a helpful AI assistant tasked with summarizing conversations.",
            ]),
            thinkingConfig: k6n(S)
              ? r.options.thinkingConfig
              : {
                  type: "disabled",
                },
            tools: i ? [] : d,
            signal: r.abortController.signal,
            options: {
              async getToolPermissionContext() {
                return r.getAppState().toolPermissionContext;
              },
              model: S,
              fallbackModel: b[_ + 1],
              toolChoice: void 0,
              isNonInteractiveSession: r.options.isNonInteractiveSession,
              hasAppendSystemPrompt: !!r.options.appendSystemPrompt,
              maxOutputTokensOverride: Math.min(Evi, qct(S)),
              querySource: "compact",
              agents: r.options.agentDefinitions.activeAgents,
              mcpTools: [],
              agentContext: r.agentContext,
              stickyBetas: RR(u0()),
              effortValue: gg(r),
              enablePromptCaching: false,
              promptTooLongIsHandled: true,
            },
          })[Symbol.asyncIterator](),
          I = await x.next();
        while (!I.done) {
          let D = I.value;
          if (
            !A &&
            D.type === "stream_event" &&
            D.event.type === "content_block_start" &&
            D.event.content_block.type === "text"
          )
            ((A = true),
              r.onCompactEvent?.({
                type: "stream_mode",
                mode: "responding",
              }));
          if (
            D.type === "stream_event" &&
            D.event.type === "content_block_delta" &&
            D.event.delta.type === "text_delta"
          ) {
            let P = D.event.delta.text.length;
            a?.({
              type: "response_length",
              op: "add",
              delta: P,
            });
          }
          if (D.type === "assistant") v.push(D);
          I = await x.next();
        }
        let k = v.at(-1);
        if (k) return k.isApiErrorMessage ? k : (yNn(v) ?? k);
        if (r.abortController.signal.aborted) throw Error(t3);
        throw (
          T(`Compact streaming failed. hasStartedStreaming=${A}`, {
            level: "error",
          }),
          G("tengu_compact_failed", {
            reason: We("no_streaming_response"),
            preCompactTokenCount: o,
            hasStartedStreaming: A,
            promptCacheSharingEnabled: l,
          }),
          Error(bMo)
        );
      } catch (C) {
        let x = b[_ + 1];
        if (x !== void 0 && dut(x, r.requestDialog)) {
          let I = bye() ?? void 0;
          if (((x = I !== void 0 && !XIe(b[0], I) ? I : void 0), x !== void 0)) b[_ + 1] = x;
        }
        if (C instanceof NN && x !== void 0) {
          (xe("model_fallback"),
            G("tengu_model_fallback_triggered", {
              original_model: Cf(C.originalModel),
              fallback_model: Cf(x),
              chain_index: _ + 1,
              query_source: We("compact"),
              reason: $e(C.reason),
              entrypoint: We("cli"),
              queryChainId: Hr(r.queryTracking?.chainId) ?? We(""),
              queryDepth: r.queryTracking?.depth ?? -1,
            }),
            T(
              `Compact: model fallback triggered (${C.reason}), retrying summarization on the fallback model`,
              {
                level: "warn",
              },
            ),
            r.onCompactEvent?.({
              type: "stream_mode",
              mode: "requesting",
            }),
            _++);
          continue;
        }
        if (C instanceof NN && C.reason === "model_blocked")
          throw new Tq(`${wp(C.originalModel)} is currently unavailable.`);
        throw C;
      }
    }
  } finally {
    clearInterval(c);
  }
}
async function gQn(e, t, n, r = []) {
  let o = kwf(r),
    s = Object.entries(e)
      .map(([l, c]) => ({
        filename: l,
        ...c,
      }))
      .filter((l) => !Lwf(l.filename, t.agentId) && !o.has(ds(l.filename)))
      .sort((l, c) => c.timestamp - l.timestamp)
      .slice(0, n),
    i = await Promise.all(
      s.map(async (l) => {
        let c = await dZn(
          l.filename,
          {
            ...t,
            fileReadingLimits: {
              maxTokens: Hwf,
            },
          },
          "tengu_post_compact_file_restore_success",
          "tengu_post_compact_file_restore_error",
          "compact",
        );
        return c ? ai(c) : null;
      }),
    ),
    a = 0;
  return i.filter((l) => {
    if (l === null) return false;
    let c = If(De(l));
    if (a + c <= Awf) return ((a += c), true);
    return false;
  });
}
function hQn(e) {
  let t = bP(e);
  if (!t) return null;
  let n = _P(e);
  return ai({
    type: "plan_file_reference",
    planFilePath: n,
    planContent: t,
  });
}
function yQn(e) {
  let t = Zbr(e);
  if (t.size === 0) return null;
  let n = 0,
    r = Array.from(t.values())
      .sort((o, s) => s.invokedAt - o.invokedAt)
      .map((o) => ({
        name: o.skillName,
        path: o.skillPath,
        content: Rwf(o.content, Twf),
      }))
      .filter((o) => {
        let s = If(o.content);
        if (n + s > vwf) return false;
        return ((n += s), true);
      });
  if (r.length === 0) return null;
  return ai({
    type: "invoked_skills",
    skills: r,
  });
}
async function _Qn(e) {
  if (Fr(e).mode !== "plan") return null;
  let t = _P(e.agentId),
    n = bP(e.agentId) !== null,
    r = e.options?.planModeInstructions;
  return ai({
    type: "plan_mode",
    reminderType: "full",
    isSubAgent: !!e.agentId,
    planFilePath: t,
    planExists: n,
    ...(r !== void 0 && {
      customInstructions: r,
    }),
  });
}
async function bQn(e) {
  let t = e.getAppState();
  return Object.values(t.tasks)
    .filter((r) => r.type === "local_agent")
    .flatMap((r) => {
      if (r.retrieved || r.status === "pending" || r.agentId === e.agentId) return [];
      return [
        ai({
          type: "task_status",
          taskId: r.agentId,
          taskType: "local_agent",
          description: r.description,
          status: r.status,
          deltaSummary: r.status === "running" ? (r.progress?.summary ?? null) : (r.error ?? null),
          outputFilePath: jm(r.agentId),
        }),
      ];
    });
}
function kwf(e) {
  let t = new Set();
  for (let r of e) {
    if (r.type !== "user" || !Array.isArray(r.message.content)) continue;
    for (let o of r.message.content)
      if (o.type === "tool_result" && typeof o.content === "string" && A0n(o.content))
        t.add(o.tool_use_id);
  }
  let n = new Set();
  for (let r of e) {
    if (r.type !== "assistant" || !Array.isArray(r.message.content)) continue;
    for (let o of r.message.content) {
      if (o.type !== "tool_use" || o.name !== Ds || t.has(o.id)) continue;
      let s = o.input;
      if (s && typeof s === "object" && "file_path" in s && typeof s.file_path === "string")
        n.add(ds(s.file_path));
    }
  }
  return n;
}
function Rwf(e, t) {
  if (If(e) <= t) return e;
  let n = t * 4 - Tkl.length;
  return e.slice(0, n) + Tkl;
}
function Lwf(e, t) {
  let n = ds(e);
  try {
    let r = ds(_P(t));
    if (n === r) return true;
  } catch {}
  try {
    if (new Set(Skl.map((o) => ds(r5e(o)))).has(n)) return true;
  } catch {}
  return false;
}
var mQn = 5,
  Awf = 50000,
  Hwf = 5000,
  Twf = 5000,
  vwf = 25000,
  Akl = 100,
  CSt = "Not enough messages to compact.",
  wkl = 3,
  Hkl = "[earlier conversation truncated for compaction retry]",
  cZn = "Conversation too long. Press esc twice to go up a few messages and try again.",
  t3 = "API Error: Request was aborted.",
  abt = "Compaction blocked by PreCompact hook",
  bMo = "Compaction interrupted \xB7 This may be due to network issues \u2014 please try again.",
  Tq,
  Tkl = `

[... skill content truncated for compaction; use Read on the skill path if you need the full text]`;
