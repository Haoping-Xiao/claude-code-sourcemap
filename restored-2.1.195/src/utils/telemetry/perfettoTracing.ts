// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rpo
// matched 2.1.88 source: src/utils/telemetry/perfettoTracing.ts
// class=modified  jaccard=0.3618  score=0.9278  fileCov=0.3723
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module rpo]
(($xa = R(qi(), 1)), (Oxa = require("async_hooks")));
qSe = new Nxa();
function Uxa(e) {
  return Math.abs(eCe(e)) || 1;
}
function Fxa(e) {
  let t = ipo.get(e);
  if (t !== void 0) return t;
  return (spo++, ipo.set(e, spo), spo);
}
function P3t() {
  let e = PD() ?? Rt(),
    t = Oh() ?? "main",
    n = VG(),
    r = yFn.get(e);
  if (r) return r;
  let o = {
    agentId: e,
    agentName: t,
    parentAgentId: n,
    processId: e === Rt() ? 1 : Fxa(e),
    threadId: Uxa(t),
  };
  return (yFn.set(e, o), Bxa++, o);
}
function VSe() {
  return (Date.now() - Rwp) * 1000;
}
function _Fn() {
  return `span_${++Lwp}`;
}
function jxa() {
  let e = process.env.CLAUDE_CODE_PERFETTO_TRACE;
  T(`[Perfetto] initializePerfettoTracing called, env value: ${e}`);
}
function Dwp(e) {
  if (!s6) return;
  if (
    (opo.push({
      name: "process_name",
      cat: "__metadata",
      ph: "M",
      ts: 0,
      pid: e.processId,
      tid: 0,
      args: {
        name: e.agentName,
      },
    }),
    opo.push({
      name: "thread_name",
      cat: "__metadata",
      ph: "M",
      ts: 0,
      pid: e.processId,
      tid: e.threadId,
      args: {
        name: e.agentName,
      },
    }),
    e.parentAgentId)
  )
    opo.push({
      name: "parent_agent",
      cat: "__metadata",
      ph: "M",
      ts: 0,
      pid: e.processId,
      tid: 0,
      args: {
        parent_agent_id: e.parentAgentId,
      },
    });
}
function zSe() {
  return s6;
}
function bFn(e, t, n) {
  if (!s6) return;
  let r = {
    agentId: e,
    agentName: t,
    parentAgentId: n,
    processId: Fxa(e),
    threadId: Uxa(t),
  };
  (yFn.set(e, r), Bxa++, Dwp(r));
}
function _qe(e) {
  if (!s6) return;
  (yFn.delete(e), ipo.delete(e));
}
function Gxa(e) {
  if (!s6) return "";
  let t = _Fn(),
    n = P3t();
  return (
    SL.set(t, {
      name: "API Call",
      category: "api",
      startTime: VSe(),
      agentInfo: n,
      args: {
        model: e.model,
        prompt_tokens: e.promptTokens,
        message_id: e.messageId,
        is_speculative: e.isSpeculative ?? false,
        query_source: e.querySource,
      },
    }),
    tN.push({
      name: "API Call",
      cat: "api",
      ph: "B",
      ts: SL.get(t).startTime,
      pid: n.processId,
      tid: n.threadId,
      args: SL.get(t).args,
    }),
    t
  );
}
function Wxa(e, t) {
  if (!s6 || !e) return;
  let n = SL.get(e);
  if (!n) return;
  let r = VSe(),
    o = r - n.startTime,
    s = t.promptTokens ?? n.args.prompt_tokens,
    i = t.ttftMs,
    a = t.ttltMs,
    l = t.outputTokens,
    c = t.cacheReadTokens,
    u = i !== void 0 && s !== void 0 && i > 0 ? Math.round((s / (i / 1000)) * 100) / 100 : void 0,
    d = a !== void 0 && i !== void 0 ? a - i : void 0,
    p = d !== void 0 && l !== void 0 && d > 0 ? Math.round((l / (d / 1000)) * 100) / 100 : void 0,
    f =
      c !== void 0 && s !== void 0 && s > 0 ? Math.round((c / s) * 10000 /* 1e4 */) / 100 : void 0,
    m = t.requestSetupMs,
    g = t.attemptStartTimes,
    h = {
      ...n.args,
      ttft_ms: i,
      ttlt_ms: a,
      prompt_tokens: s,
      output_tokens: l,
      cache_read_tokens: c,
      cache_creation_tokens: t.cacheCreationTokens,
      message_id: t.messageId ?? n.args.message_id,
      request_id: t.requestId,
      client_request_id: t.clientRequestId,
      success: t.success ?? true,
      error: t.error,
      duration_ms: o / 1000,
      request_setup_ms: m,
      itps: u,
      otps: p,
      cache_hit_rate_pct: f,
    },
    y = m !== void 0 && m > 0 ? m * 1000 : 0;
  if (y > 0) {
    let b = n.startTime + y;
    if (
      (tN.push({
        name: "Request Setup",
        cat: "api,setup",
        ph: "B",
        ts: n.startTime,
        pid: n.agentInfo.processId,
        tid: n.agentInfo.threadId,
        args: {
          request_setup_ms: m,
          attempt_count: g?.length ?? 1,
        },
      }),
      g && g.length > 1)
    ) {
      let _ = g[0];
      for (let S = 0; S < g.length - 1; S++) {
        let A = n.startTime + (g[S] - _) * 1000,
          v = n.startTime + (g[S + 1] - _) * 1000;
        (tN.push({
          name: `Attempt ${S + 1} (retry)`,
          cat: "api,retry",
          ph: "B",
          ts: A,
          pid: n.agentInfo.processId,
          tid: n.agentInfo.threadId,
          args: {
            attempt: S + 1,
          },
        }),
          tN.push({
            name: `Attempt ${S + 1} (retry)`,
            cat: "api,retry",
            ph: "E",
            ts: v,
            pid: n.agentInfo.processId,
            tid: n.agentInfo.threadId,
          }));
      }
    }
    tN.push({
      name: "Request Setup",
      cat: "api,setup",
      ph: "E",
      ts: b,
      pid: n.agentInfo.processId,
      tid: n.agentInfo.threadId,
    });
  }
  if (i !== void 0) {
    let b = n.startTime + y,
      _ = b + i * 1000;
    (tN.push({
      name: "First Token",
      cat: "api,ttft",
      ph: "B",
      ts: b,
      pid: n.agentInfo.processId,
      tid: n.agentInfo.threadId,
      args: {
        ttft_ms: i,
        prompt_tokens: s,
        itps: u,
        cache_hit_rate_pct: f,
      },
    }),
      tN.push({
        name: "First Token",
        cat: "api,ttft",
        ph: "E",
        ts: _,
        pid: n.agentInfo.processId,
        tid: n.agentInfo.threadId,
      }));
    let S = a !== void 0 ? a - i - y / 1000 : void 0;
    if (S !== void 0 && S > 0)
      (tN.push({
        name: "Sampling",
        cat: "api,sampling",
        ph: "B",
        ts: _,
        pid: n.agentInfo.processId,
        tid: n.agentInfo.threadId,
        args: {
          sampling_ms: S,
          output_tokens: l,
          otps: p,
        },
      }),
        tN.push({
          name: "Sampling",
          cat: "api,sampling",
          ph: "E",
          ts: _ + S * 1000,
          pid: n.agentInfo.processId,
          tid: n.agentInfo.threadId,
        }));
  }
  (tN.push({
    name: n.name,
    cat: n.category,
    ph: "E",
    ts: r,
    pid: n.agentInfo.processId,
    tid: n.agentInfo.threadId,
    args: h,
  }),
    SL.delete(e));
}
function qxa(e, t) {
  if (!s6) return "";
  let n = _Fn(),
    r = P3t();
  return (
    SL.set(n, {
      name: `Tool: ${e}`,
      category: "tool",
      startTime: VSe(),
      agentInfo: r,
      args: {
        tool_name: e,
        ...t,
      },
    }),
    tN.push({
      name: `Tool: ${e}`,
      cat: "tool",
      ph: "B",
      ts: SL.get(n).startTime,
      pid: r.processId,
      tid: r.threadId,
      args: SL.get(n).args,
    }),
    n
  );
}
function Vxa(e, t) {
  if (!s6 || !e) return;
  let n = SL.get(e);
  if (!n) return;
  let r = VSe(),
    o = r - n.startTime,
    s = {
      ...n.args,
      success: t?.success ?? true,
      error: t?.error,
      result_tokens: t?.resultTokens,
      duration_ms: o / 1000,
    };
  (tN.push({
    name: n.name,
    cat: n.category,
    ph: "E",
    ts: r,
    pid: n.agentInfo.processId,
    tid: n.agentInfo.threadId,
    args: s,
  }),
    SL.delete(e));
}
function zxa(e) {
  if (!s6) return "";
  let t = _Fn(),
    n = P3t();
  return (
    SL.set(t, {
      name: "Waiting for User Input",
      category: "user_input",
      startTime: VSe(),
      agentInfo: n,
      args: {
        context: e,
      },
    }),
    tN.push({
      name: "Waiting for User Input",
      cat: "user_input",
      ph: "B",
      ts: SL.get(t).startTime,
      pid: n.processId,
      tid: n.threadId,
      args: SL.get(t).args,
    }),
    t
  );
}
function Kxa(e, t) {
  if (!s6 || !e) return;
  let n = SL.get(e);
  if (!n) return;
  let r = VSe(),
    o = r - n.startTime,
    s = {
      ...n.args,
      decision: t?.decision,
      source: t?.source,
      duration_ms: o / 1000,
    };
  (tN.push({
    name: n.name,
    cat: n.category,
    ph: "E",
    ts: r,
    pid: n.agentInfo.processId,
    tid: n.agentInfo.threadId,
    args: s,
  }),
    SL.delete(e));
}
function Yxa(e, t, n) {
  if (!s6) return;
  let r = P3t();
  tN.push({
    name: e,
    cat: t,
    ph: "i",
    ts: VSe(),
    pid: r.processId,
    tid: r.threadId,
    args: n,
  });
}
function Xxa(e) {
  if (!s6) return "";
  let t = _Fn(),
    n = P3t();
  return (
    SL.set(t, {
      name: "Interaction",
      category: "interaction",
      startTime: VSe(),
      agentInfo: n,
      args: {
        user_prompt_length: e?.length,
      },
    }),
    tN.push({
      name: "Interaction",
      cat: "interaction",
      ph: "B",
      ts: SL.get(t).startTime,
      pid: n.processId,
      tid: n.threadId,
      args: SL.get(t).args,
    }),
    t
  );
}
function Jxa(e) {
  if (!s6 || !e) return;
  let t = SL.get(e);
  if (!t) return;
  let n = VSe(),
    r = n - t.startTime;
  (tN.push({
    name: t.name,
    cat: t.category,
    ph: "E",
    ts: n,
    pid: t.agentInfo.processId,
    tid: t.agentInfo.threadId,
    args: {
      ...t.args,
      duration_ms: r / 1000,
    },
  }),
    SL.delete(e));
}
var s6 = false,
  opo,
  tN,
  SL,
  yFn,
  Bxa = 0,
  Rwp = 0,
  Lwp = 0,
  spo = 1,
  ipo;
