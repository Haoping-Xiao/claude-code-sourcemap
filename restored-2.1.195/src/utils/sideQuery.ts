// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IHo
// matched 2.1.88 source: src/utils/sideQuery.ts
// class=modified  jaccard=0.0827  score=0.2033  fileCov=0.1223
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module IHo]
jXa = require("crypto");
function Q7p(e) {
  let t = e.find((o) => o.role === "user");
  if (!t) return "";
  let n = t.content;
  if (typeof n === "string") return n;
  let r = n.find((o) => o.type === "text");
  return r?.type === "text" ? r.text : "";
}
async function sideQuery(opts) {
  let {
      model: t,
      system: n,
      messages: r,
      tools: o,
      tool_choice: s,
      output_format: i,
      max_tokens: a = 1024,
      maxRetries: l = 2,
      timeout: c,
      signal: u,
      skipSystemPromptPrefix: d,
      temperature: p,
      thinking: f,
      stop_sequences: m,
      extraBodyParams: g,
      onFetchAttempt: h,
    } = opts,
    y = of(),
    b = await G9({
      maxRetries: l,
      model: t,
      source: "side_query",
      agentContext: y,
      ...(h && {
        fetchOverride: (V, Y) => (h(), globalThis.fetch(V, Y)),
      }),
    }),
    betas = [...V9(t)],
    S = Boolean(i) && j4e(t) && gle(t, "structured_outputs");
  if (S && !betas.includes(lte)) betas.push(lte);
  let A = Q7p(r),
    v = CHo(
      A,
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION,
    ),
    C = IAn(v, y),
    x = [
      C
        ? {
            type: "text",
            text: C,
          }
        : null,
      ...(d
        ? []
        : [
            {
              type: "text",
              text: Qkn({
                isNonInteractive: false,
                hasAppendSystemPrompt: false,
              }),
            },
          ]),
      ...(Array.isArray(n)
        ? n
        : n
          ? [
              {
                type: "text",
                text: n,
              },
            ]
          : []),
    ].filter((V) => V !== null),
    I;
  if (f === false)
    I = {
      type: "disabled",
    };
  else if (f !== void 0)
    I = {
      type: "enabled",
      budget_tokens: Math.min(f, a - 1),
    };
  let k = F9e(opts.querySource) ? "1h" : void 0;
  if (k === "1h" && CM() && !betas.includes(J2e)) betas.push(J2e);
  let D = k ? x.map((V) => WXa(V, k)) : x,
    P = k
      ? r.map((V) =>
          typeof V.content === "string"
            ? V
            : {
                ...V,
                content: V.content.map((Y) => WXa(Y, k)),
              },
        )
      : r,
    O = dp(t),
    L = {
      model: O,
      max_tokens: a,
      system: D,
      messages: P,
      ...(o && {
        tools: o,
      }),
      ...(s && {
        tool_choice: s,
      }),
      ...(S && {
        output_config: {
          format: i,
        },
      }),
      ...(p !== void 0 &&
        LCn(O) && {
          temperature: p,
        }),
      ...(m && {
        stop_sequences: m,
      }),
      ...(I && {
        thinking: I,
      }),
      ...(betas.length > 0 && {
        betas: fI(betas),
      }),
      metadata: uLe(),
      ...g,
    };
  if (Uin(L)) {
    try {
      L = sM(L);
    } catch {}
    (KJe(L),
      G("tengu_lone_surrogate_sanitized", {
        source: We("sideQuery"),
        querySource: opts.querySource,
      }));
  }
  let M = performance.now(),
    N = await b.beta.messages
      .create(L, {
        signal: u,
        ...(c !== void 0 && {
          timeout: c,
        }),
      })
      .catch((V) => {
        let Y = Pjr(V);
        if (Y) Djr(t, Y);
        throw V;
      }),
    B = N._request_id ?? void 0,
    $ = performance.now(),
    q = Date.now(),
    W = Yve();
  return (
    G("tengu_api_success", {
      requestId: Hr(B),
      querySource: opts.querySource,
      model: O,
      inputTokens: N.usage.input_tokens,
      outputTokens: N.usage.output_tokens,
      cachedInputTokens: N.usage.cache_read_input_tokens ?? 0,
      uncachedInputTokens: N.usage.cache_creation_input_tokens ?? 0,
      durationMsIncludingRetries: Math.max(0, Math.round($ - M)),
      stop_reason: Oo(N.stop_reason) ?? void 0,
      timeSinceLastApiCallMs: W !== null ? Math.max(0, Math.round(q - W)) : void 0,
      ...nFt(opts.querySource, VU(opts.querySource, void 0, void 0)),
    }),
    aCt(q),
    N
  );
}
function WXa(e, t) {
  if (!("cache_control" in e) || !e.cache_control || e.cache_control.ttl) return e;
  return {
    ...e,
    cache_control: {
      ...e.cache_control,
      ttl: t,
    },
  };
}
