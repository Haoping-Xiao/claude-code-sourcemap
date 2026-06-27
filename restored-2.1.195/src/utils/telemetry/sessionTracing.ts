// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xdt
// matched 2.1.88 source: src/utils/telemetry/sessionTracing.ts
// class=modified  jaccard=0.3075  score=0.5006  fileCov=0.4435
// note: deminified; 11 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Xdt] deps: services/analytics/index.ts, utils/debugFilter.ts, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/fsOperations.ts, utils/concurrentSessions.ts
((opo = []), (tN = []), (SL = new Map()), (yFn = new Map()), (ipo = new Map()));
function lpo() {
  let e =
    process.env.CLAUDE_CODE_ENHANCED_TELEMETRY_BETA ?? process.env.ENABLE_ENHANCED_TELEMETRY_BETA;
  if (ut(e)) return true;
  if (ml(e)) return false;
  return false;
}
function f5() {
  return lpo() || mC();
}
function ude() {
  return false;
}
function O3t(e, t) {
  return;
}
function Sqe(e, t) {
  e.setStatus({
    code: dg.SpanStatusCode.ERROR,
    ...(t && {
      message: t,
    }),
  });
}
function tka(e, t) {
  if (!t) return;
  (e.setAttribute("tool_use_id", t), e.setAttribute("gen_ai.tool.call.id", t));
}
function getTracer() {
  return dg.trace.getTracer("com.anthropic.claude_code.tracing", "1.0.0");
}
function dF() {
  let e = qSe.active();
  return e === dg.ROOT_CONTEXT && $3t ? $3t : e;
}
function Jdt(e) {
  let t = dF().getValue(e);
  return t && !t.ended ? t : void 0;
}
function _De(e, t) {
  yDe.set(t.span, t);
  let n = dg.trace.setSpan(t.priorContext, t.span).setValue(e, t);
  if ((qSe.enterWith(n), e === hDe)) $3t = n;
}
function bDe(e, t) {
  if (((t.ended = true), e === hDe && $3t?.getValue(e) === t)) $3t = void 0;
  if (dF().getValue(e) === t) qSe.enterWith(t.priorContext);
}
function createSpanAttributes(spanType, t = {}) {
  return {
    ...QGe(),
    "span.type": spanType,
    ...t,
  };
}
function startInteractionSpan(userPrompt) {
  let t = zSe() ? Xxa(userPrompt) : void 0,
    n = dF();
  if (!f5()) {
    if (t) {
      let c = dg.trace.getActiveSpan() || getTracer().startSpan("dummy");
      return (
        _De(hDe, {
          span: c,
          startTime: performance.now(),
          attributes: {
            "span.type": "interaction",
          },
          perfettoSpanId: t,
          priorContext: n,
        }),
        c
      );
    }
    return dg.trace.getActiveSpan() || getTracer().startSpan("dummy");
  }
  let r = getTracer(),
    s = ut(process.env.OTEL_LOG_USER_PROMPTS) ? userPrompt : "<REDACTED>";
  Qxa++;
  let i = createSpanAttributes("interaction", {
      user_prompt: s,
      user_prompt_length: userPrompt.length,
      "interaction.sequence": Qxa,
    }),
    a =
      Ir() && process.env.TRACEPARENT
        ? dg.propagation.extract(n, {
            traceparent: process.env.TRACEPARENT,
            tracestate: process.env.TRACESTATE,
          })
        : n,
    l = r.startSpan(
      "claude_code.interaction",
      {
        attributes: i,
      },
      a,
    );
  return (
    Rxa(l, userPrompt),
    _De(hDe, {
      span: l,
      startTime: performance.now(),
      attributes: i,
      perfettoSpanId: t,
      priorContext: n,
    }),
    l
  );
}
function SFn(e, t) {
  let n = dF();
  startInteractionSpan(e);
  let r = dF();
  try {
    return qSe.with(r, t);
  } finally {
    if (dF() === r) qSe.enterWith(n);
  }
}
function endInteractionSpan() {
  let e = Jdt(hDe);
  if (!e) return;
  if (e.perfettoSpanId) Jxa(e.perfettoSpanId);
  if (!f5()) {
    bDe(hDe, e);
    return;
  }
  let t = Math.max(0, Math.round(performance.now() - e.startTime));
  (e.span.setAttributes({
    "interaction.duration_ms": t,
  }),
    e.span.end(),
    bDe(hDe, e));
}
function startLLMRequestSpan(model, newContext, messagesForAPI, fastMode, o) {
  let s = zSe()
      ? Gxa({
          model: model,
          querySource: messagesForAPI?.querySource,
          messageId: void 0,
        })
      : void 0,
    i = dF();
  if (!f5()) {
    if (s) {
      let d = dg.trace.getActiveSpan() || getTracer().startSpan("dummy");
      return (
        yDe.set(d, {
          span: d,
          startTime: performance.now(),
          attributes: {
            model: model,
          },
          perfettoSpanId: s,
          priorContext: i,
        }),
        d
      );
    }
    return dg.trace.getActiveSpan() || getTracer().startSpan("dummy");
  }
  let a = getTracer(),
    l = dF().getValue(bqe),
    c = createSpanAttributes("llm_request", {
      model: model,
      "gen_ai.system": "anthropic",
      "gen_ai.request.model": model,
      "llm_request.context": l ? "tool" : Jdt(hDe) ? "interaction" : "standalone",
      speed: o ? "fast" : "normal",
    }),
    u = a.startSpan(
      "claude_code.llm_request",
      {
        attributes: c,
      },
      i,
    );
  if (messagesForAPI?.querySource) u.setAttribute("query_source", messagesForAPI.querySource);
  if (newContext && !YY(newContext)) {
    if (newContext.agentId) u.setAttribute("agent_id", newContext.agentId);
    if (newContext.parentAgentId) u.setAttribute("parent_agent_id", newContext.parentAgentId);
  }
  return (
    Lxa(u, messagesForAPI, fastMode),
    yDe.set(u, {
      span: u,
      startTime: performance.now(),
      attributes: c,
      perfettoSpanId: s,
      priorContext: i,
    }),
    u
  );
}
function rka(e, { attempt: t, clientRequestId: n }) {
  let r = {
    attempt: t,
  };
  if (n !== void 0) r.client_request_id = n;
  if (e && f5()) e.addEvent("gen_ai.request.attempt", r);
  Yxa("LLM Attempt", "api,attempt", r);
}
function $wp(e) {
  let t = Mwp.extract(
    dg.ROOT_CONTEXT,
    {
      traceparent: e,
    },
    dg.defaultTextMapGetter,
  );
  return dg.trace.getSpanContext(t);
}
function endLLMRequestSpan(span, metadata) {
  if (!span) return;
  let n = yDe.get(span);
  if (!n || n.ended) return;
  n.ended = true;
  let r = Math.max(0, Math.round(performance.now() - n.startTime));
  if (n.perfettoSpanId)
    Wxa(n.perfettoSpanId, {
      ttftMs: metadata?.ttftMs,
      ttltMs: r,
      promptTokens: metadata?.inputTokens,
      outputTokens: metadata?.outputTokens,
      cacheReadTokens: metadata?.cacheReadTokens,
      cacheCreationTokens: metadata?.cacheCreationTokens,
      success: metadata?.success,
      error: metadata?.error,
      requestSetupMs: metadata?.requestSetupMs,
      attemptStartTimes: metadata?.attemptStartTimes,
      requestId: metadata?.requestId,
      clientRequestId: metadata?.clientRequestId,
    });
  if (!f5()) return;
  let o = {
    duration_ms: r,
  };
  if (metadata) {
    if (metadata.inputTokens !== void 0) o.input_tokens = metadata.inputTokens;
    if (metadata.outputTokens !== void 0) o.output_tokens = metadata.outputTokens;
    if (metadata.cacheReadTokens !== void 0) o.cache_read_tokens = metadata.cacheReadTokens;
    if (metadata.cacheCreationTokens !== void 0)
      o.cache_creation_tokens = metadata.cacheCreationTokens;
    if (metadata.success !== void 0) o.success = metadata.success;
    if (metadata.statusCode !== void 0) o.status_code = metadata.statusCode;
    if (metadata.error !== void 0) o.error = metadata.error;
    if (metadata.attempt !== void 0) o.attempt = metadata.attempt;
    if (metadata.hasToolCall !== void 0) o["response.has_tool_call"] = metadata.hasToolCall;
    if (metadata.requestId !== void 0)
      ((o.request_id = metadata.requestId), (o["gen_ai.response.id"] = metadata.requestId));
    if (metadata.clientRequestId !== void 0) o.client_request_id = metadata.clientRequestId;
    if (metadata.ttftMs !== void 0) o.ttft_ms = metadata.ttftMs;
    Dxa(o, metadata);
  }
  if ((n.span.setAttributes(o), metadata?.stopReason !== void 0))
    (n.span.setAttribute("stop_reason", metadata.stopReason),
      n.span.setAttribute("gen_ai.response.finish_reasons", [metadata.stopReason]));
  if (metadata?.success === false)
    n.span.setStatus({
      code: dg.SpanStatusCode.ERROR,
      message: metadata.error,
    });
  if (metadata?.traceresponse) {
    let s = $wp(metadata.traceresponse);
    if (s)
      n.span.addLink({
        context: s,
        attributes: {
          "link.type": "parent_of",
        },
      });
  }
  n.span.end();
}
function startToolSpan(toolName, toolAttributes, toolInput, r, o) {
  let s = zSe() ? qxa(toolName, toolInput) : void 0,
    i = dF();
  if (!f5()) {
    if (s) {
      let u = dg.trace.getActiveSpan() || getTracer().startSpan("dummy");
      return (
        _De(bqe, {
          span: u,
          startTime: performance.now(),
          attributes: {
            "span.type": "tool",
            tool_name: toolName,
          },
          perfettoSpanId: s,
          priorContext: i,
        }),
        u
      );
    }
    return dg.trace.getActiveSpan() || getTracer().startSpan("dummy");
  }
  let a = getTracer(),
    l = createSpanAttributes("tool", {
      tool_name: toolName,
      ...toolInput,
    }),
    c = a.startSpan(
      "claude_code.tool",
      {
        attributes: l,
      },
      i,
    );
  if (toolAttributes && !YY(toolAttributes)) {
    if (toolAttributes.agentId) c.setAttribute("agent_id", toolAttributes.agentId);
    if (toolAttributes.parentAgentId)
      c.setAttribute("parent_agent_id", toolAttributes.parentAgentId);
  }
  if ((tka(c, o), r)) Pxa(c, toolName, r);
  return (
    _De(bqe, {
      span: c,
      startTime: performance.now(),
      attributes: l,
      perfettoSpanId: s,
      priorContext: i,
    }),
    c
  );
}
function startToolBlockedOnUserSpan() {
  let e = zSe() ? zxa("tool_permission") : void 0,
    t = dF();
  if (!f5()) {
    if (e) {
      let s = dg.trace.getActiveSpan() || getTracer().startSpan("dummy");
      return (
        _De(M3t, {
          span: s,
          startTime: performance.now(),
          attributes: {
            "span.type": "tool.blocked_on_user",
          },
          perfettoSpanId: e,
          priorContext: t,
        }),
        s
      );
    }
    return dg.trace.getActiveSpan() || getTracer().startSpan("dummy");
  }
  let n = getTracer(),
    r = createSpanAttributes("tool.blocked_on_user"),
    o = n.startSpan(
      "claude_code.tool.blocked_on_user",
      {
        attributes: r,
      },
      t,
    );
  return (
    _De(M3t, {
      span: o,
      startTime: performance.now(),
      attributes: r,
      perfettoSpanId: e,
      priorContext: t,
    }),
    o
  );
}
function N3t(e, t) {
  let n = Jdt(M3t);
  if (!n) return;
  if (n.perfettoSpanId)
    Kxa(n.perfettoSpanId, {
      decision: e,
      source: t,
    });
  if (!f5()) {
    bDe(M3t, n);
    return;
  }
  let o = {
    duration_ms: Math.max(0, Math.round(performance.now() - n.startTime)),
  };
  if (e) o.decision = e;
  if (t) o.source = t;
  (n.span.setAttributes(o), n.span.end(), bDe(M3t, n));
}
function startToolExecutionSpan(e) {
  let t = dF();
  if (!f5()) return dg.trace.getActiveSpan() || getTracer().startSpan("dummy");
  let n = getTracer(),
    r = createSpanAttributes("tool.execution"),
    o = n.startSpan(
      "claude_code.tool.execution",
      {
        attributes: r,
      },
      t,
    );
  return (
    tka(o, e),
    _De(apo, {
      span: o,
      startTime: performance.now(),
      attributes: r,
      priorContext: t,
    }),
    o
  );
}
function upo(e) {
  if (!f5()) return;
  let t = Jdt(apo);
  if (!t) return;
  let r = {
    duration_ms: Math.max(0, Math.round(performance.now() - t.startTime)),
  };
  if (e) {
    if (e.success !== void 0) r.success = e.success;
    if (e.error !== void 0) r.error = e.error;
  }
  if ((t.span.setAttributes(r), e?.success === false))
    t.span.setStatus({
      code: dg.SpanStatusCode.ERROR,
      message: e.error,
    });
  (t.span.end(), bDe(apo, t));
}
function Qdt(e, t, n) {
  let r = e ? yDe.get(e) : Jdt(bqe);
  if (!r || r.ended) return;
  if (r.perfettoSpanId)
    Vxa(r.perfettoSpanId, {
      success: true,
      resultTokens: n,
    });
  if (!f5()) {
    bDe(bqe, r);
    return;
  }
  let s = {
    duration_ms: Math.max(0, Math.round(performance.now() - r.startTime)),
  };
  if (t) {
    let i = r.attributes.tool_name || "unknown";
    Mxa(s, i, t);
  }
  if (n !== void 0) s.result_tokens = n;
  (r.span.setAttributes(s), r.span.end(), bDe(bqe, r));
}
function addToolContentEvent(eventName, attributes) {
  if (!f5() || !Rst()) return;
  let n = Jdt(bqe);
  if (!n) return;
  let r = {};
  for (let [o, s] of Object.entries(attributes))
    if (typeof s === "string") {
      let { content: i, truncated: a } = iP(s);
      if (((r[o] = i), a)) ((r[`${o}_truncated`] = true), (r[`${o}_original_length`] = s.length));
    } else r[o] = s;
  n.span.addEvent(eventName, r);
}
function dpo(e) {
  if (!f5()) return;
  let t = e.spanContext();
  if (!t.traceId || t.traceId === "00000000000000000000000000000000") return;
  let n = dg.trace.setSpan(dg.context.active(), e),
    r = {};
  return (dg.propagation.inject(n, r), r.traceparent);
}
function EFn() {
  if (!f5()) return;
  let e = dg.trace.getSpan(dF());
  if (!e) return;
  return dpo(e);
}
function B3t(e, t) {
  if (!ude()) return;
  return getTracer().startSpan(
    e,
    {
      attributes: {
        ...QGe(),
        "span.type": t.spanType,
        ...t.attrs,
      },
    },
    dF(),
  );
}
async function lka(e, t, n) {
  let r = B3t(e, t);
  if (!r) return n(void 0);
  let o = dg.trace.setSpan(dF(), r);
  return qSe.with(o, async () => {
    try {
      return await n(r);
    } catch (s) {
      if (!t.isExpectedError?.(s)) {
        if (s instanceof Error) r.recordException(s);
        Sqe(r, s instanceof Error ? s.message : String(s));
      }
      throw s;
    } finally {
      r.end();
    }
  });
}
function cka(e) {
  if (!ude()) return;
  let t = dF(),
    n = createSpanAttributes("subagent.spawn", {
      agent_id: e.agentId,
      agent_type: e.agentType,
      ...(e.parentAgentId && {
        parent_agent_id: e.parentAgentId,
      }),
    }),
    r = getTracer().startSpan(
      "claude_code.subagent.spawn",
      {
        attributes: n,
      },
      t,
    );
  return (
    _De(eka, {
      span: r,
      startTime: performance.now(),
      attributes: n,
      priorContext: t,
    }),
    r
  );
}
function uka(e, metadata) {
  if (!e) return;
  let n = yDe.get(e);
  if (!n || n.ended) return;
  if (metadata?.success !== void 0) e.setAttribute("success", metadata.success);
  if (metadata?.error) (e.setAttribute("error", metadata.error), Sqe(e, metadata.error));
  (e.end(), bDe(eka, n));
}
function dka() {
  return mC() || ude();
}
function startHookSpan(hookEvent, hookName, numHooks, hookDefinitions) {
  if (!dka()) return dg.trace.getActiveSpan() || getTracer().startSpan("dummy");
  let o = getTracer(),
    s = dF(),
    { content: i } = iP(hookDefinitions),
    a = createSpanAttributes("hook", {
      hook_event: hookEvent,
      hook_name: hookName,
      num_hooks: numHooks,
      ...(sg() && {
        hook_definitions: i,
      }),
    }),
    l = o.startSpan(
      "claude_code.hook",
      {
        attributes: a,
      },
      s,
    );
  return (
    yDe.set(l, {
      span: l,
      startTime: performance.now(),
      attributes: a,
      priorContext: s,
    }),
    l
  );
}
function fka(e, t) {
  if (!dka()) return;
  let n = yDe.get(e);
  if (!n || n.ended) return;
  n.ended = true;
  let o = {
    duration_ms: Math.max(0, Math.round(performance.now() - n.startTime)),
  };
  if (t) {
    if (t.numSuccess !== void 0) o.num_success = t.numSuccess;
    if (t.numBlocking !== void 0) o.num_blocking = t.numBlocking;
    if (t.numNonBlockingError !== void 0) o.num_non_blocking_error = t.numNonBlockingError;
    if (t.numCancelled !== void 0) o.num_cancelled = t.numCancelled;
  }
  if ((n.span.setAttributes(o), t && (t.numNonBlockingError ?? 0) > 0))
    n.span.setStatus({
      code: dg.SpanStatusCode.ERROR,
      message: `${t.numNonBlockingError} hook(s) failed`,
    });
  n.span.end();
}
var dg,
  Zxa,
  yDe,
  hDe,
  bqe,
  M3t,
  apo,
  eka,
  Qxa = 0,
  $3t,
  Mwp;
