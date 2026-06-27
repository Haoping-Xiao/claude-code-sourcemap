// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cMo
// matched 2.1.88 source: src/services/api/logging.ts
// class=modified  jaccard=0.1299  score=0.3946  fileCov=0.1623
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module cMo] deps: utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/fsOperations.ts, utils/telemetry/pluginTelemetry.ts
((lMo = require("crypto")), (aYt = require("fs/promises")), (tZn = require("path")));
function mwf(e) {
  if (e instanceof Fo) {
    let n = e.error?.error?.message;
    if (typeof n === "string" && n) return n;
  }
  return e instanceof Error ? e.message : String(e);
}
function ckl({ headers: e, baseUrl: t }) {
  if (e) {
    let n = [];
    e.forEach((r, o) => n.push(o));
    for (let [r, { prefixes: o }] of Object.entries(gwf))
      if (o.some((s) => n.some((i) => i.startsWith(s)))) return r;
  }
  if (t)
    try {
      let n = new URL(t).hostname.toLowerCase();
      for (let [r, o] of Object.entries(hwf)) if (o.some((s) => n.endsWith(s))) return r;
    } catch {}
  return;
}
function ywf(e) {
  let t = zge(e);
  return epn(t) ? t : Dd(t);
}
function uMo() {
  return {
    ...(process.env.ANTHROPIC_BASE_URL && {
      baseUrl: ywf(process.env.ANTHROPIC_BASE_URL),
    }),
    ...(process.env.ANTHROPIC_MODEL && {
      envModel: process.env.ANTHROPIC_MODEL,
    }),
    ...(process.env.ANTHROPIC_SMALL_FAST_MODEL && {
      envSmallFastModel: process.env.ANTHROPIC_SMALL_FAST_MODEL,
    }),
  };
}
function ukl() {
  if (
    !{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
    }.BUILD_TIME
  )
    return;
  let e = new Date(
    {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
    }.BUILD_TIME,
  ).getTime();
  if (isNaN(e)) return;
  return Math.floor((Date.now() - e) / 60000);
}
function logAPIQuery({
  model: e,
  messagesLength: t,
  temperature: n,
  betas: r,
  permissionMode: o,
  querySource: s,
  messageClientPlatform: i,
  queryTracking: a,
  thinkingType: l,
  effortValue: c,
  fastMode: u,
  previousRequestId: d,
}) {
  G("tengu_api_query", {
    model: e,
    messagesLength: t,
    temperature: n,
    provider: gj(),
    buildAgeMins: ukl(),
    ...(r?.length && {
      betas: r.join(","),
    }),
    permissionMode: Oo(o),
    querySource: Bh(s),
    ...(i && {
      messageClientPlatform: i,
    }),
    ...(a && {
      queryChainId: Hr(a.chainId),
      queryDepth: a.depth,
    }),
    thinkingType: Oo(l),
    effortValue: Oo(c),
    fastMode: u,
    ...(d && {
      previousRequestId: Hr(d),
    }),
    ...uMo(),
  });
}
function logAPIError({
  error: error,
  model: t,
  messageCount: n,
  messageTokens: r,
  durationMs: o,
  durationMsIncludingRetries: s,
  attempt: i,
  requestId: a,
  clientRequestId: l,
  didFallBackToNonStreaming: c,
  promptCategory: u,
  headers: d,
  queryTracking: queryTracking,
  querySource: f,
  messageClientPlatform: m,
  llmSpan: g,
  fastMode: h,
  previousRequestId: y,
  effort: b,
  attribution: _,
  promptTooLongIsHandled: S,
  agentContext: A,
}) {
  let v = ckl({
      headers: error instanceof Fo && error.headers ? error.headers : d,
      baseUrl: process.env.ANTHROPIC_BASE_URL,
    }),
    C = mwf(error),
    x = error instanceof Fo ? error.status : void 0,
    I = x !== void 0 ? String(x) : void 0,
    k = W1n(error),
    D = Bh(f),
    P = S && k === "prompt_too_long",
    connectionDetails = tF(error);
  if (connectionDetails) {
    let N = connectionDetails.isSSLError ? " (SSL error)" : "";
    T(
      `Connection error details: code=${connectionDetails.code}${N}, message=${connectionDetails.message}`,
      {
        level: "error",
      },
    );
  }
  let invocation = P ? void 0 : W2r(A);
  if (l)
    T(`API error x-client-request-id=${l} (give this to the API team for server-log lookup)`, {
      level: "error",
    });
  if (!P) {
    if (
      k === "connection_error" ||
      k === "server_overload" ||
      k === "api_timeout" ||
      k === "rate_limit"
    )
      T(`API ${k} after retries: ${C}`, {
        level: "error",
      });
    else if (k === "model_not_found")
      T(`API model not found: ${C}`, {
        level: "error",
      });
    else if (k === "invalid_api_key")
      T(`API invalid_api_key: ${C}`, {
        level: "error",
      });
    else if (k === "output_content_filtered")
      T(`API output_content_filtered: ${C}`, {
        level: "error",
      });
    else if (k === "wif_credential_error")
      T(`API wif_credential_error: ${C}`, {
        level: "error",
      });
    else if (k === "auth_error")
      T(`API auth_error: ${C}`, {
        level: "error",
      });
    else {
      if (error && typeof error === "object" && !("telemetryMessage" in error))
        error.telemetryMessage = `API error: type=${k} status=${I ?? "none"}`;
      ke(error);
    }
    G("tengu_api_error", {
      model: t,
      error: H4(C),
      status: I,
      errorType: k,
      ...(b && {
        effort_level: $e(b),
      }),
      messageCount: n,
      messageTokens: r,
      durationMs: o,
      durationMsIncludingRetries: s,
      attempt: i,
      provider: gj(),
      requestId: Hr(a) || void 0,
      ...(invocation && {
        invokingRequestId: Hr(invocation.invokingRequestId),
        invocationKind: Oo(invocation.invocationKind),
      }),
      clientRequestId: Hr(l) || void 0,
      didFallBackToNonStreaming: c,
      ...(u && {
        promptCategory: u,
      }),
      ...(v && {
        gateway: $e(v),
      }),
      ...(queryTracking && {
        queryChainId: Hr(queryTracking.chainId),
        queryDepth: queryTracking.depth,
      }),
      ...(D && {
        querySource: D,
      }),
      ...(m && {
        messageClientPlatform: m,
      }),
      fastMode: h,
      ...(y && {
        previousRequestId: Hr(y),
      }),
      ...(_ && nFt(f, _)),
      ...(_?.attributionSkill && {
        _PROTO_skill_name: _.attributionSkill,
      }),
      ...uMo(),
    });
  }
  if (
    (Jc("api_error", {
      model: t,
      error: C,
      ...(x !== void 0 && {
        status_code: x,
      }),
      duration_ms: o,
      attempt: i,
      request_id: a ?? void 0,
      speed: h ? "fast" : "normal",
      ...(D && {
        query_source: D,
      }),
      ...(b && {
        effort: b,
      }),
      ...(_ && ylt(f, _)),
    }),
    i > 1)
  )
    Jc("api_retries_exhausted", {
      model: t,
      error: C,
      ...(x !== void 0 && {
        status_code: x,
      }),
      total_attempts: i,
      total_retry_duration_ms: s,
      speed: h ? "fast" : "normal",
      ...(D && {
        query_source: D,
      }),
      ...(b && {
        effort: b,
      }),
    });
  cpo(g, {
    success: false,
    statusCode: I ? parseInt(I) : void 0,
    error: C,
    attempt: i,
    requestId: a ?? void 0,
    clientRequestId: c ? void 0 : l,
  });
  let teleportInfo = P ? void 0 : xsn();
  if (teleportInfo?.isTeleported && !teleportInfo.hasLoggedFirstMessage)
    (G("tengu_teleport_first_message_error", {
      session_id: Hr(teleportInfo.sessionId),
      error_type: k,
    }),
      ksn());
}
function lYt({
  model: e,
  requestId: t,
  querySource: n,
  effort: r,
  fastMode: o,
  attempt: s,
  attribution: i,
  serverFallbackHop: a,
  stopDetails: l,
}) {
  let c = Bh(n),
    u = l?.category,
    d = u && _wf.has(u) ? u : null;
  Jc("api_refusal", {
    model: e,
    request_id: t,
    speed: o ? "fast" : "normal",
    attempt: s,
    server_fallback_hop: a,
    ...(c && {
      query_source: c,
    }),
    ...(r && {
      effort: r,
    }),
    ...(l !== void 0 && {
      has_category: d !== null,
      has_explanation: Boolean(l?.explanation),
    }),
    ...(d &&
      sg() && {
        category: d,
      }),
    ...(i && ylt(n, i)),
  });
}
function lkl(e) {
  let t = e.endsWith("==") ? 2 : e.endsWith("=") ? 1 : 0;
  return Math.floor((e.length * 3) / 4) - t;
}
function pkl(e, t) {
  let n = rH(t),
    r = (o, s) => {
      switch (s.type) {
        case "image": {
          if (((o.imageBlockCount += 1), s.source.type !== "base64")) return o;
          o.imageTotalBytes += lkl(s.source.data);
          let i = RGe(Buffer.from(s.source.data.slice(0, bwf), "base64"));
          if (i) o.imageTotalPixels += i.width * i.height;
          return o;
        }
        case "document":
          switch (((o.documentBlockCount += 1), s.source.type)) {
            case "base64":
              return ((o.documentTotalBytes += lkl(s.source.data)), o);
            case "text":
              return ((o.documentTotalBytes += s.source.data.length), o);
            case "content":
              return (
                (o.documentTotalBytes +=
                  typeof s.source.content === "string"
                    ? s.source.content.length
                    : s.source.content.reduce(
                        (i, a) => i + (a.type === "text" ? a.text.length : 0),
                        0,
                      )),
                o
              );
            default:
              return o;
          }
        case "text":
          return ((o.inputTextCharLength += s.text.length), o);
        case "thinking":
          return ((o.inputTextCharLength += s.thinking.length), o);
        case "redacted_thinking":
          return ((o.inputTextCharLength += s.data.length), o);
        case "tool_use":
        case "server_tool_use":
        case "mcp_tool_use":
          return ((o.inputTextCharLength += s.name.length + De(s.input ?? {}).length), o);
        case "tool_result":
        case "mcp_tool_result": {
          let i = s.content;
          if (typeof i === "string") return ((o.inputTextCharLength += i.length), o);
          return Array.isArray(i) ? i.reduce(r, o) : o;
        }
        default:
          return ((o.inputTextCharLength += De(s).length), o);
      }
    };
  return e.reduce(
    (o, s) => {
      let i = s.message.content;
      if (((o.estimatedInputTokens += PRe(i, n)), typeof i === "string"))
        return ((o.inputTextCharLength += i.length), o);
      for (let a of i) r(o, a);
      return o;
    },
    {
      imageBlockCount: 0,
      imageTotalPixels: 0,
      imageTotalBytes: 0,
      documentBlockCount: 0,
      documentTotalBytes: 0,
      inputTextCharLength: 0,
      estimatedInputTokens: 0,
    },
  );
}
function logAPISuccess({
  model: e,
  preNormalizedModel: t,
  messageCount: n,
  messageTokens: r,
  usage: usage,
  durationMs: s,
  durationMsIncludingRetries: i,
  attempt: a,
  ttftMs: l,
  requestId: c,
  firstAttemptRequestId: u,
  stopReason: d,
  costUSD: p,
  didFallBackToNonStreaming: f,
  querySource: m,
  messageClientPlatform: g,
  gateway: h,
  queryTracking: queryTracking,
  permissionMode: b,
  globalCacheStrategy: _,
  textContentLength: S,
  thinkingContentLength: A,
  toolUseContentLengths: v,
  connectorTextBlockCount: C,
  connectorTextContentLength: x,
  requestContentTelemetry: I,
  fastMode: k,
  previousRequestId: D,
  betas: P,
  attribution: O,
  agentContext: L,
}) {
  s8r();
  let M = Ir(),
    N = b_r(),
    B = process.argv.includes("-p") || process.argv.includes("--print"),
    $ = Date.now(),
    q = Yve(),
    W = q !== null ? Math.max(0, Math.round($ - q)) : void 0,
    invocation = W2r(L);
  (G("tengu_api_success", {
    model: e,
    ...(t !== e && {
      preNormalizedModel: t,
    }),
    ...(P?.length && {
      betas: P.join(","),
    }),
    messageCount: n,
    messageTokens: r,
    inputTokens: usage.input_tokens,
    outputTokens: usage.output_tokens,
    cachedInputTokens: usage.cache_read_input_tokens ?? 0,
    uncachedInputTokens: usage.cache_creation_input_tokens ?? 0,
    durationMs: s,
    durationMsIncludingRetries: i,
    attempt: a,
    ttftMs: l ?? void 0,
    buildAgeMins: ukl(),
    provider: gj(),
    requestId: Hr(c) ?? void 0,
    ...(u &&
      c &&
      u !== c && {
        firstAttemptRequestId: Hr(u),
      }),
    ...(invocation && {
      invokingRequestId: Hr(invocation.invokingRequestId),
      invocationKind: Oo(invocation.invocationKind),
    }),
    stop_reason: Oo(d) ?? void 0,
    costUSD: p,
    didFallBackToNonStreaming: f,
    isNonInteractiveSession: M,
    print: B,
    isTTY: process.stdout.isTTY ?? false,
    querySource: Bh(m),
    ...(g && {
      messageClientPlatform: g,
    }),
    ...(h && {
      gateway: $e(h),
    }),
    ...(queryTracking && {
      queryChainId: Hr(queryTracking.chainId),
      queryDepth: queryTracking.depth,
    }),
    permissionMode: Oo(b),
    ...(_ && {
      globalCacheStrategy: $e(_),
    }),
    ...(S !== void 0
      ? {
          textContentLength: S,
        }
      : {}),
    ...(A !== void 0
      ? {
          thinkingContentLength: A,
        }
      : {}),
    ...(v !== void 0
      ? {
          toolUseContentLengths: De(v),
        }
      : {}),
    ...(C !== void 0
      ? {
          connectorTextBlockCount: C,
        }
      : {}),
    ...(x !== void 0
      ? {
          connectorTextContentLength: x,
        }
      : {}),
    ...(I && {
      imageBlockCount: I.imageBlockCount,
      imageTotalPixels: I.imageTotalPixels,
      imageTotalBytes: I.imageTotalBytes,
      documentBlockCount: I.documentBlockCount,
      documentTotalBytes: I.documentTotalBytes,
      inputTextCharLength: I.inputTextCharLength,
      estimatedInputTokens: I.estimatedInputTokens,
    }),
    fastMode: k,
    ...(D && {
      previousRequestId: Hr(D),
    }),
    ...(N && {
      isPostCompaction: N,
    }),
    ...(O && nFt(m, O)),
    ...(O?.attributionSkill && {
      _PROTO_skill_name: O.attributionSkill,
    }),
    ...uMo(),
    timeSinceLastApiCallMs: W,
  }),
    aCt($));
}
function logAPISuccessAndDuration({
  model: e,
  preNormalizedModel: t,
  start: n,
  startIncludingRetries: r,
  ttftMs: o,
  usage: usage,
  attempt: i,
  messageCount: a,
  messageTokens: l,
  requestId: c,
  clientRequestId: u,
  firstAttemptRequestId: d,
  stopReason: p,
  didFallBackToNonStreaming: f,
  querySource: m,
  messageClientPlatform: g,
  headers: h,
  costUSD: y,
  queryTracking: b,
  permissionMode: _,
  newMessages: newMessages,
  requestContentTelemetry: A,
  llmSpan: v,
  globalCacheStrategy: C,
  requestSetupMs: x,
  attemptStartTimes: I,
  fastMode: k,
  previousRequestId: D,
  betas: P,
  effort: O,
  attribution: L,
  agentContext: M,
}) {
  let N = ckl({
      headers: h,
      baseUrl: process.env.ANTHROPIC_BASE_URL,
    }),
    B,
    $,
    q,
    W,
    V;
  if (newMessages) {
    let re = 0,
      ee = 0,
      ce = false,
      ae = false,
      de = {},
      Ee = 0,
      me = 0,
      pe = false;
    for (let ge of newMessages)
      for (let he of ge.message.content)
        if (he.type === "text") ((re += he.text.length), (pe ||= fwf.test(he.text)));
        else if (he.type === "thinking") ((ee += he.thinking.length), (ce = true));
        else if (he.type === "redacted_thinking") ce = true;
        else if (
          he.type === "tool_use" ||
          he.type === "server_tool_use" ||
          he.type === "mcp_tool_use"
        ) {
          let ie = De(he.input).length,
            le = Ui(he.name);
          ((de[le] = (de[le] ?? 0) + ie), (ae = true));
        }
    if (pe && !ae)
      G("tengu_schedule_offer_shown", {
        stop_reason: Oo(p ?? void 0),
        querySource: Bh(m),
      });
    ((B = re),
      ($ = ce ? ee : void 0),
      (q = ae ? de : void 0),
      (W = Ee > 0 ? Ee : void 0),
      (V = Ee > 0 ? me : void 0));
  }
  let Y = Math.max(0, Math.round(performance.now() - n)),
    z = Math.max(0, Math.round(performance.now() - r));
  (s_r(z, Y),
    logAPISuccess({
      model: e,
      preNormalizedModel: t,
      messageCount: a,
      messageTokens: l,
      usage: usage,
      durationMs: Y,
      durationMsIncludingRetries: z,
      attempt: i,
      ttftMs: o,
      requestId: c,
      firstAttemptRequestId: d,
      stopReason: p,
      costUSD: y,
      didFallBackToNonStreaming: f,
      querySource: m,
      messageClientPlatform: g,
      gateway: N,
      queryTracking: b,
      permissionMode: _,
      globalCacheStrategy: C,
      textContentLength: B,
      thinkingContentLength: $,
      toolUseContentLengths: q,
      connectorTextBlockCount: W,
      connectorTextContentLength: V,
      requestContentTelemetry: A,
      fastMode: k,
      previousRequestId: D,
      betas: P,
      attribution: L,
      agentContext: M,
    }));
  let K = Number.isFinite(y) ? y : 0;
  if (
    (Jc("api_request", {
      model: e,
      input_tokens: usage.input_tokens,
      output_tokens: usage.output_tokens,
      cache_read_tokens: usage.cache_read_input_tokens,
      cache_creation_tokens: usage.cache_creation_input_tokens,
      cost_usd: K,
      cost_usd_micros: Math.round(K * 1000000 /* 1e6 */),
      duration_ms: Y,
      request_id: c ?? void 0,
      speed: k ? "fast" : "normal",
      query_source: Bh(m),
      ...(O && {
        effort: O,
      }),
      ...(L && ylt(m, L)),
    }),
    newMessages)
  ) {
    let re = newMessages.flatMap((ee) =>
      ee.message.content.filter((ce) => ce.type === "text").map((ce) => ce.text),
    ).join(`
`);
    if (re)
      Jc("assistant_response", {
        response_length: re.length,
        response: MKi() ? iP(re).content : "<REDACTED>",
        request_id: c ?? void 0,
        model: e,
        query_source: Bh(m),
      });
    akl(newMessages, {
      model: e,
      querySource: m,
      requestId: c,
    });
  }
  let Z, J, ne;
  if (mC() && newMessages)
    ((Z =
      newMessages.flatMap((re) =>
        re.message.content.filter((ee) => ee.type === "text").map((ee) => ee.text),
      ).join(`
`) || void 0),
      (ne = newMessages.some((re) => re.message.content.some((ee) => ee.type === "tool_use"))));
  cpo(v, {
    success: true,
    inputTokens: usage.input_tokens,
    outputTokens: usage.output_tokens,
    cacheReadTokens: usage.cache_read_input_tokens,
    cacheCreationTokens: usage.cache_creation_input_tokens,
    attempt: i,
    modelOutput: Z,
    thinkingOutput: J,
    hasToolCall: ne,
    requestId: c ?? void 0,
    clientRequestId: u,
    stopReason: p ?? void 0,
    ttftMs: o ?? void 0,
    requestSetupMs: x,
    attemptStartTimes: I,
    traceresponse: f ? void 0 : (h?.get("traceresponse") ?? void 0),
  });
  let teleportInfo = xsn();
  if (teleportInfo?.isTeleported && !teleportInfo.hasLoggedFirstMessage)
    (G("tengu_teleport_first_message_success", {
      session_id: Hr(teleportInfo.sessionId),
    }),
      ksn());
}
var fwf,
  gwf,
  hwf,
  _wf,
  bwf = 87400;
