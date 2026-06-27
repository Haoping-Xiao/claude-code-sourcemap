// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xdt
// matched 2.1.88 source: src/utils/telemetry/sessionTracing.ts
// class=modified  jaccard=0.3541  score=0.5387  fileCov=0.5082
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Xdt = E(() => {
  ft();
  fd();
  je();
  fn();
  At();
  Jt();
  Mp();
  ((opo = []), (tN = []), (SL = new Map()), (yFn = new Map()), (ipo = new Map()));
});
function lpo() {
  let e =
    process.env.CLAUDE_CODE_ENHANCED_TELEMETRY_BETA ?? process.env.ENABLE_ENHANCED_TELEMETRY_BETA;
  if (ut(e)) return !0;
  if (ml(e)) return !1;
  return !1;
}
function f5() {
  return lpo() || mC();
}
function ude() {
  return !1;
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
function y$() {
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
  if (((t.ended = !0), e === hDe && $3t?.getValue(e) === t)) $3t = void 0;
  if (dF().getValue(e) === t) qSe.enterWith(t.priorContext);
}
function Eqe(e, t = {}) {
  return {
    ...QGe(),
    "span.type": e,
    ...t,
  };
}
function Pwp(e) {
  let t = zSe() ? Xxa(e) : void 0,
    n = dF();
  if (!f5()) {
    if (t) {
      let c = dg.trace.getActiveSpan() || y$().startSpan("dummy");
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
    return dg.trace.getActiveSpan() || y$().startSpan("dummy");
  }
  let r = y$(),
    s = ut(process.env.OTEL_LOG_USER_PROMPTS) ? e : "<REDACTED>";
  Qxa++;
  let i = Eqe("interaction", {
      user_prompt: s,
      user_prompt_length: e.length,
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
    Rxa(l, e),
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
  Pwp(e);
  let r = dF();
  try {
    return qSe.with(r, t);
  } finally {
    if (dF() === r) qSe.enterWith(n);
  }
}
function dde() {
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
function nka(e, t, n, r, o) {
  let s = zSe()
      ? Gxa({
          model: e,
          querySource: n?.querySource,
          messageId: void 0,
        })
      : void 0,
    i = dF();
  if (!f5()) {
    if (s) {
      let d = dg.trace.getActiveSpan() || y$().startSpan("dummy");
      return (
        yDe.set(d, {
          span: d,
          startTime: performance.now(),
          attributes: {
            model: e,
          },
          perfettoSpanId: s,
          priorContext: i,
        }),
        d
      );
    }
    return dg.trace.getActiveSpan() || y$().startSpan("dummy");
  }
  let a = y$(),
    l = dF().getValue(bqe),
    c = Eqe("llm_request", {
      model: e,
      "gen_ai.system": "anthropic",
      "gen_ai.request.model": e,
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
  if (n?.querySource) u.setAttribute("query_source", n.querySource);
  if (t && !YY(t)) {
    if (t.agentId) u.setAttribute("agent_id", t.agentId);
    if (t.parentAgentId) u.setAttribute("parent_agent_id", t.parentAgentId);
  }
  return (
    Lxa(u, n, r),
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
function cpo(e, t) {
  if (!e) return;
  let n = yDe.get(e);
  if (!n || n.ended) return;
  n.ended = !0;
  let r = Math.max(0, Math.round(performance.now() - n.startTime));
  if (n.perfettoSpanId)
    Wxa(n.perfettoSpanId, {
      ttftMs: t?.ttftMs,
      ttltMs: r,
      promptTokens: t?.inputTokens,
      outputTokens: t?.outputTokens,
      cacheReadTokens: t?.cacheReadTokens,
      cacheCreationTokens: t?.cacheCreationTokens,
      success: t?.success,
      error: t?.error,
      requestSetupMs: t?.requestSetupMs,
      attemptStartTimes: t?.attemptStartTimes,
      requestId: t?.requestId,
      clientRequestId: t?.clientRequestId,
    });
  if (!f5()) return;
  let o = {
    duration_ms: r,
  };
  if (t) {
    if (t.inputTokens !== void 0) o.input_tokens = t.inputTokens;
    if (t.outputTokens !== void 0) o.output_tokens = t.outputTokens;
    if (t.cacheReadTokens !== void 0) o.cache_read_tokens = t.cacheReadTokens;
    if (t.cacheCreationTokens !== void 0) o.cache_creation_tokens = t.cacheCreationTokens;
    if (t.success !== void 0) o.success = t.success;
    if (t.statusCode !== void 0) o.status_code = t.statusCode;
    if (t.error !== void 0) o.error = t.error;
    if (t.attempt !== void 0) o.attempt = t.attempt;
    if (t.hasToolCall !== void 0) o["response.has_tool_call"] = t.hasToolCall;
    if (t.requestId !== void 0)
      ((o.request_id = t.requestId), (o["gen_ai.response.id"] = t.requestId));
    if (t.clientRequestId !== void 0) o.client_request_id = t.clientRequestId;
    if (t.ttftMs !== void 0) o.ttft_ms = t.ttftMs;
    Dxa(o, t);
  }
  if ((n.span.setAttributes(o), t?.stopReason !== void 0))
    (n.span.setAttribute("stop_reason", t.stopReason),
      n.span.setAttribute("gen_ai.response.finish_reasons", [t.stopReason]));
  if (t?.success === !1)
    n.span.setStatus({
      code: dg.SpanStatusCode.ERROR,
      message: t.error,
    });
  if (t?.traceresponse) {
    let s = $wp(t.traceresponse);
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
function oka(e, t, n, r, o) {
  let s = zSe() ? qxa(e, n) : void 0,
    i = dF();
  if (!f5()) {
    if (s) {
      let u = dg.trace.getActiveSpan() || y$().startSpan("dummy");
      return (
        _De(bqe, {
          span: u,
          startTime: performance.now(),
          attributes: {
            "span.type": "tool",
            tool_name: e,
          },
          perfettoSpanId: s,
          priorContext: i,
        }),
        u
      );
    }
    return dg.trace.getActiveSpan() || y$().startSpan("dummy");
  }
  let a = y$(),
    l = Eqe("tool", {
      tool_name: e,
      ...n,
    }),
    c = a.startSpan(
      "claude_code.tool",
      {
        attributes: l,
      },
      i,
    );
  if (t && !YY(t)) {
    if (t.agentId) c.setAttribute("agent_id", t.agentId);
    if (t.parentAgentId) c.setAttribute("parent_agent_id", t.parentAgentId);
  }
  if ((tka(c, o), r)) Pxa(c, e, r);
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
function ska() {
  let e = zSe() ? zxa("tool_permission") : void 0,
    t = dF();
  if (!f5()) {
    if (e) {
      let s = dg.trace.getActiveSpan() || y$().startSpan("dummy");
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
    return dg.trace.getActiveSpan() || y$().startSpan("dummy");
  }
  let n = y$(),
    r = Eqe("tool.blocked_on_user"),
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
function ika(e) {
  let t = dF();
  if (!f5()) return dg.trace.getActiveSpan() || y$().startSpan("dummy");
  let n = y$(),
    r = Eqe("tool.execution"),
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
  if ((t.span.setAttributes(r), e?.success === !1))
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
      success: !0,
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
function aka(e, t) {
  if (!f5() || !Rst()) return;
  let n = Jdt(bqe);
  if (!n) return;
  let r = {};
  for (let [o, s] of Object.entries(t))
    if (typeof s === "string") {
      let { content: i, truncated: a } = iP(s);
      if (((r[o] = i), a)) ((r[`${o}_truncated`] = !0), (r[`${o}_original_length`] = s.length));
    } else r[o] = s;
  n.span.addEvent(e, r);
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
  return y$().startSpan(
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
    n = Eqe("subagent.spawn", {
      agent_id: e.agentId,
      agent_type: e.agentType,
      ...(e.parentAgentId && {
        parent_agent_id: e.parentAgentId,
      }),
    }),
    r = y$().startSpan(
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
function uka(e, t) {
  if (!e) return;
  let n = yDe.get(e);
  if (!n || n.ended) return;
  if (t?.success !== void 0) e.setAttribute("success", t.success);
  if (t?.error) (e.setAttribute("error", t.error), Sqe(e, t.error));
  (e.end(), bDe(eka, n));
}
function dka() {
  return mC() || ude();
}
function pka(e, t, n, r) {
  if (!dka()) return dg.trace.getActiveSpan() || y$().startSpan("dummy");
  let o = y$(),
    s = dF(),
    { content: i } = iP(r),
    a = Eqe("hook", {
      hook_event: e,
      hook_name: t,
      num_hooks: n,
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
  n.ended = !0;
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
