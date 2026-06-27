// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Bac
// matched 2.1.88 source: src/services/api/claude.ts
// class=modified  jaccard=0.3217  score=0.4267  fileCov=0.5665
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Bac = E(() => {
  TM();
  lf();
  je();
  K0();
  dn();
  Dac();
  q8();
  lNn();
  ((Mac = new Set()), ($ac = new Map()));
});
function W8e(e) {
  let t = process.env.CLAUDE_CODE_EXTRA_BODY,
    n = {};
  if (t)
    try {
      let r = Ia(t);
      if (r && typeof r === "object" && !Array.isArray(r))
        n = {
          ...r,
        };
      else
        T(`CLAUDE_CODE_EXTRA_BODY env var must be a JSON object, but was given ${t}`, {
          level: "error",
        });
    } catch (r) {
      T(`Error parsing CLAUDE_CODE_EXTRA_BODY: ${be(r)}`, {
        level: "error",
      });
    }
  if (e && e.length > 0) {
    let r = fI(e);
    if (n.anthropic_beta && Array.isArray(n.anthropic_beta)) {
      let o = n.anthropic_beta,
        s = r.filter((i) => !o.includes(i));
      n.anthropic_beta = [...o, ...s];
    } else n.anthropic_beta = r;
  }
  return n;
}
function Uac(e) {
  if (ut(process.env.DISABLE_PROMPT_CACHING)) return false;
  if (ut(process.env.DISABLE_PROMPT_CACHING_HAIKU)) {
    let t = Fw();
    if (t !== As() && e === t) return false;
  }
  if (ut(process.env.DISABLE_PROMPT_CACHING_SONNET)) {
    let t = jx();
    if (e === t) return false;
  }
  if (ut(process.env.DISABLE_PROMPT_CACHING_OPUS)) {
    let t = O_();
    if (e === t) return false;
  }
  if (ut(process.env.DISABLE_PROMPT_CACHING_FABLE)) {
    if (yye(e) || C9(e)) return false;
  }
  if (Oe.DISABLE_PROMPT_CACHING_MYTHOS) {
    if (ert(e)) return false;
  }
  return true;
}
function Toe({ scope: e, ttl: t } = {}) {
  return {
    type: "ephemeral",
    ...(t && {
      ttl: t,
    }),
    ...(e === "global" && {
      scope: e,
    }),
  };
}
function F9e(e) {
  if (ut(process.env.FORCE_PROMPT_CACHING_5M)) return false;
  if (
    ut(process.env.ENABLE_PROMPT_CACHING_1H) ||
    (fr() === "bedrock" && ut(process.env.ENABLE_PROMPT_CACHING_1H_BEDROCK))
  )
    return true;
  if (!bo() || ck.isUsingOverage) return false;
  let t = sSr();
  if (t === null)
    ((t =
      at("tengu_prompt_cache_1h_config", {
        allowlist: ["repl_main_thread*", "sdk", "auto_mode", "memdir_relevance"],
      }).allowlist ?? []),
      iSr(t));
  return e !== void 0 && t.some((n) => (n.endsWith("*") ? e.startsWith(n.slice(0, -1)) : e === n));
}
function pnm(e, t, n) {
  if (e?.type !== "disabled") return e;
  let r = Object.keys(e).filter((o) => o !== "type");
  if (r.length === 0) return e;
  if (n)
    (G("tengu_thinking_disabled_sanitized", {
      hadDisplay: r.includes("display") ? We("true") : We("false"),
      extraKeyCount: r.length,
      querySourceCategory: Oo(xM(t)),
      hasExtraBodyEnv: Oe.CLAUDE_CODE_EXTRA_BODY ? We("true") : We("false"),
    }),
      T(
        `[thinking] stripped ${r.length} extra key(s) from {type:'disabled'} thinking param (gh-68567)`,
        {
          level: "warn",
        },
      ));
  return {
    type: "disabled",
  };
}
function fnm(e, t, n, r, o) {
  if (!Kw(o)) {
    delete t.effort;
    return;
  }
  if ("effort" in t) return;
  if (e === void 0) r.push(Wnt);
  else if (typeof e === "string") ((t.effort = e), r.push(Wnt));
}
function mnm(e, t, n) {
  if (!e || "task_budget" in t || !CM()) return;
  if (
    ((t.task_budget = {
      type: "tokens",
      total: e.total,
      ...(e.remaining !== void 0 && {
        remaining: e.remaining,
      }),
    }),
    !n.includes(lAn))
  )
    n.push(lAn);
}
function gnm(e, t, n, r) {
  if (!e || "format" in t || !j4e(r) || !gle(r, "structured_outputs")) return;
  if (((t.format = e), !n.includes(lte))) n.push(lte);
}
function uLe() {
  let e = {},
    t = process.env.CLAUDE_CODE_EXTRA_METADATA;
  if (t) {
    let o = Ia(t, false);
    if (o && typeof o === "object" && !Array.isArray(o))
      e = {
        ...o,
      };
    else
      T(`CLAUDE_CODE_EXTRA_METADATA env var must be a JSON object, but was given ${t}`, {
        level: "error",
      });
  }
  let r = {
    ...e,
    device_id: oW(),
    account_uuid:
      (ut(Oe.CLAUDE_CODE_REMOTE) && Oe.CLAUDE_CODE_ACCOUNT_UUID) || Lc()?.accountUuid || "",
    session_id: Rt(),
  };
  return {
    user_id: De(r),
  };
}
async function Wac(e, t) {
  if (t) return true;
  try {
    let n = Fw(),
      r = V9(n),
      o = await Pll(
        tcr(
          () =>
            G9({
              apiKey: e,
              maxRetries: 3,
              model: n,
              source: "verify_api_key",
              agentContext: of(),
            }),
          async (s) => {
            let i = [
              {
                role: "user",
                content: "test",
              },
            ];
            return (
              await s.beta.messages.create({
                model: n,
                max_tokens: 1,
                messages: i,
                temperature: 1,
                ...(r.length > 0 && {
                  betas: fI(r),
                }),
                metadata: uLe(),
                ...W8e(),
              }),
              true
            );
          },
          {
            maxRetries: 2,
            model: n,
            thinkingConfig: {
              type: "disabled",
            },
          },
        ),
      );
    return (xe("api_key_verify"), o);
  } catch (n) {
    let r = n;
    if (n instanceof tO) r = n.originalError;
    if (
      r instanceof Error &&
      r.message.includes(
        '{"type":"error","error":{"type":"authentication_error","message":"invalid x-api-key"}}',
      )
    )
      return (
        T(`API key verification failed: ${be(r)}`, {
          level: "error",
        }),
        Le("api_key_verify", "invalid_key"),
        false
      );
    if (r instanceof Hx || (r instanceof Fo && r.status != null && r.status < 500))
      T(`API key verification failed: ${be(r)}`, {
        level: "error",
      });
    else ke(r);
    throw (Le("api_key_verify", "network_error"), r);
  }
}
function hnm(e, t = false, n, r) {
  if (t)
    if (typeof e.message.content === "string")
      return {
        role: "user",
        content: [
          {
            type: "text",
            text: e.message.content,
            ...(n && {
              cache_control: Toe({
                ttl: r,
              }),
            }),
          },
        ],
      };
    else {
      let o = Fac(e.message.content);
      return {
        role: "user",
        content: o.map((s, i) => ({
          ...s,
          ...(i === o.length - 1
            ? n
              ? {
                  cache_control: Toe({
                    ttl: r,
                  }),
                }
              : {}
            : {}),
        })),
      };
    }
  return {
    role: "user",
    content: Array.isArray(e.message.content) ? Fac(e.message.content) : e.message.content,
  };
}
function Fac(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (r.type === "text" && (typeof r.text !== "string" || r.text.trim() === ""))
      t ??= e.slice(0, n);
    else t?.push(r);
  }
  if (t === void 0) return [...e];
  return t.length > 0
    ? t
    : [
        {
          type: "text",
          text: zw,
        },
      ];
}
function ynm(e, t = false, n, r) {
  if (t)
    if (typeof e.message.content === "string")
      return {
        role: "assistant",
        content: [
          {
            type: "text",
            text: e.message.content,
            ...(n && {
              cache_control: Toe({
                ttl: r,
              }),
            }),
          },
        ],
      };
    else
      return {
        role: "assistant",
        content: e.message.content.map((o, s) => ({
          ...o,
          ...(s === e.message.content.length - 1 &&
          o.type !== "thinking" &&
          o.type !== "redacted_thinking" &&
          !Pj(o)
            ? n
              ? {
                  cache_control: Toe({
                    ttl: r,
                  }),
                }
              : {}
            : {}),
        })),
      };
  return {
    role: "assistant",
    content: e.message.content,
  };
}
async function yYe({
  messages: e,
  systemPrompt: t,
  thinkingConfig: n,
  tools: r,
  signal: o,
  options: s,
}) {
  let i;
  for await (let a of RMo(e, async function* () {
    yield* zac(e, t, n, r, o, s);
  }))
    if (a.type === "assistant") i = a;
  if (!i) {
    if (o.aborted) throw new tf();
    throw Error("No assistant message found");
  }
  return i;
}
async function* ybt({
  messages: e,
  systemPrompt: t,
  thinkingConfig: n,
  tools: r,
  signal: o,
  options: s,
}) {
  return yield* RMo(e, async function* () {
    yield* zac(e, t, n, r, o, s);
  });
}
function _nm(e) {
  if (!("isLsp" in e) || !e.isLsp) return false;
  let t = kpt();
  return t.status === "pending" || t.status === "not-started";
}
function bnm() {
  let e = parseInt(process.env.API_TIMEOUT_MS || "", 10);
  if (e) return e;
  return ut(process.env.CLAUDE_CODE_REMOTE) ? 120000 : 300000;
}
function qac(e) {
  if (HUe() !== "verbose") return;
  T(
    `[API REQUEST DETAIL] ${De({
      model: e.model,
      thinking: e.thinking,
      output_config: e.output_config,
      temperature: e.temperature,
      betas: e.betas ?? [],
      anthropic_beta: e.anthropic_beta,
    })}`,
    {
      level: "verbose",
    },
  );
}
function Vac(e, t) {
  let n = fr(),
    r =
      (n === "firstParty" && _u()) || (n === "anthropicAws" && !process.env.ANTHROPIC_AWS_BASE_URL),
    o = r ? ZHt.randomUUID() : void 0,
    s = e && (r || ut(process.env.CLAUDE_CODE_PROPAGATE_TRACEPARENT)) ? dpo(e) : void 0;
  return (
    rka(e, {
      attempt: t,
      clientRequestId: o,
    }),
    {
      headers: {
        ...(o && {
          [Mot]: o,
        }),
        ...(s && {
          traceparent: s,
        }),
      },
      clientRequestId: o,
    }
  );
}
async function* jac(e, t, n, r, o, s) {
  let i = bnm(),
    a = 0,
    l = tcr(
      () =>
        G9({
          maxRetries: 0,
          model: e.model,
          fetchOverride: e.fetchOverride,
          source: e.source,
          agentContext: e.agentContext,
        }),
      async (u, d, p) => {
        let f = Date.now(),
          m = n(p);
        r(d, f, m.max_tokens);
        let g = Dnm(m, Lnm);
        (qac(g), o(g), a++);
        let { headers: h } = Vac(e.llmSpan, a);
        try {
          let y = await u.beta.messages
            .create(
              {
                ...g,
                model: dp(g.model),
              },
              {
                signal: t.signal,
                timeout: i,
                ...(Object.keys(h).length > 0 && {
                  headers: h,
                }),
              },
            )
            .withResponse();
          if (!qaa(y.data))
            throw Error(
              `API returned an empty or malformed response (HTTP ${y.response?.status ?? "unknown"}) \u2014 check for a proxy or gateway intercepting the request`,
            );
          let b = y.response?.headers;
          if (b)
            R1n(
              b,
              t.model,
              (Sy(t.model) || rU(t.model)) &&
                (y.data.usage?.input_tokens ?? 0) +
                  (y.data.usage?.cache_read_input_tokens ?? 0) +
                  (y.data.usage?.cache_creation_input_tokens ?? 0) >
                  Pte,
            );
          let _ = HPo(y.data.stop_details);
          {
            let S = y.data.stop_details;
            if (S && "fallback_credit_token" in S) delete S.fallback_credit_token;
          }
          return {
            message: y.data,
            requestId: y.request_id,
            creditCode: _,
          };
        } catch (y) {
          if (y instanceof tf) throw y;
          throw (
            In("error", "cli_nonstreaming_fallback_error"),
            G("tengu_nonstreaming_fallback_error", {
              model: e.model,
              error: y instanceof Error ? y.name : We("unknown"),
              attempt: d,
              timeout_ms: i,
              request_id: s ?? "unknown",
            }),
            y
          );
        }
      },
      {
        model: t.model,
        fallbackModel: t.fallbackModel,
        thinkingConfig: t.thinkingConfig,
        ...(sc() && {
          fastMode: t.fastMode,
        }),
        signal: t.signal,
        initialConsecutive529Errors: t.initialConsecutive529Errors,
        querySource: t.querySource,
        isNonStreamingRequest: true,
        onError: t.onApiError,
        onRetryStatus: t.onRetryStatus,
      },
    ),
    c;
  do if (((c = await l.next()), !c.done && c.value.type === "system")) yield c.value;
  while (!c.done);
  return c.value;
}
function Snm(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n.type === "assistant" && n.requestId) return n.requestId;
  }
  return;
}
function Enm(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n.type === "assistant" && n.requestId && !n.isApiErrorMessage) return n.message.id;
  }
  return;
}
function Anm() {
  if (!CM()) return false;
  let e = fr();
  if (
    !((e === "firstParty" && _u()) || (e === "anthropicAws" && !process.env.ANTHROPIC_AWS_BASE_URL))
  )
    return false;
  return at("tengu_prompt_cache_diagnostics", false);
}
function Qlr(e) {
  return e.type === "image" || e.type === "document";
}
function mqo(e) {
  return e.source.type === "base64" ? e.source.data.length : 0;
}
function Gac(e) {
  return e.type === "tool_result";
}
function Hnm(e, t, n = 0, r = 1 / 0, o = 0) {
  let s = 0,
    i = 0;
  for (let f of e) {
    if (!Array.isArray(f.message.content)) continue;
    for (let m of f.message.content) {
      if (Qlr(m)) (s++, (i += mqo(m)));
      if (Gac(m) && Array.isArray(m.content)) {
        for (let g of m.content) if (Qlr(g)) (s++, (i += mqo(g)));
      }
    }
  }
  s -= t;
  let a = r > 0 ? i - r : -1;
  if (s <= 0 && a <= 0) return e;
  if (s > 0) s += n;
  let l = a > 0;
  if (l) a += o;
  let c = 0,
    u = 0,
    d = (f) => {
      let m = mqo(f);
      if (s > 0 || (a > 0 && m > 0)) return (s--, (a -= m), c++, (u += m), true);
      return false;
    },
    p = e.map((f) => {
      if (s <= 0 && a <= 0) return f;
      let m = f.message.content;
      if (!Array.isArray(m)) return f;
      let g = c,
        h = m
          .map((b) => {
            if ((s <= 0 && a <= 0) || !Gac(b) || !Array.isArray(b.content)) return b;
            let _ = b.content.filter((S) => !(Qlr(S) && d(S)));
            return _.length === b.content.length
              ? b
              : {
                  ...b,
                  content: _,
                };
          })
          .filter((b) => !(Qlr(b) && d(b)));
      if (g === c) return f;
      let y =
        h.length > 0
          ? h
          : [
              {
                type: "text",
                text: "[media removed: request limit]",
              },
            ];
      return {
        ...f,
        message: {
          ...f.message,
          content: y,
        },
      };
    });
  if (l)
    G("tengu_media_byte_cap_stripped", {
      totalBytes: i,
      byteLimit: r,
      removedCount: c,
      removedBytes: u,
    });
  return p;
}
async function* wnm(e, t, n = Tnm, r = vnm) {
  if (!t) {
    yield* e;
    return;
  }
  let o = e[Symbol.asyncIterator](),
    s = performance.now(),
    i = 0,
    a = null,
    l,
    c = Symbol("heartbeat");
  try {
    while (true) {
      a ??= o.next();
      let u = new Promise((p) => {
          ((l = setTimeout((f, m) => f(m), n, p, c)), l.unref?.());
        }),
        d = await Promise.race([a, u]);
      if ((clearTimeout(l), (l = void 0), d === c)) {
        if (t.lastAt > s && i < r)
          ((s = performance.now()),
            i++,
            yield {
              type: "ping",
            });
        continue;
      }
      if (((a = null), d.done)) return;
      ((s = performance.now()), (i = 0), yield d.value);
    }
  } finally {
    if (l !== void 0) clearTimeout(l);
    try {
      Promise.resolve(o.return?.(void 0)).catch(() => {});
    } catch {}
  }
}
function Cnm(e, t) {
  let n = l_(t);
  if (l_(e) !== n) return false;
  switch (n) {
    case "gateway":
      return false;
    case "firstParty": {
      if (!_u()) return false;
      if (Oe._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL || Oe.ANTHROPIC_BASE_URL !== void 0 || !z9r())
        return true;
      let r = Ijr();
      return r === null || (r !== void 0 && Ant(r));
    }
    case "bedrock":
      return Oe.ANTHROPIC_BEDROCK_BASE_URL === void 0;
    case "mantle":
      return Oe.ANTHROPIC_BEDROCK_MANTLE_BASE_URL === void 0;
    case "foundry":
      return true;
    case "anthropicAws":
      return Oe.ANTHROPIC_AWS_BASE_URL === void 0;
    case "vertex":
      return Oe.ANTHROPIC_VERTEX_BASE_URL === void 0 && Yie(e) === Yie(t);
  }
}
function Inm(e, t) {
  let n = t.bodyModel ?? t.model,
    r = Yac(e, dp(n)),
    o = Sy(n) || rU(n) || t.betas.includes(FY) || wCn(n) !== null || OPt(n),
    s = (l) => {
      if (!t.useToolSearch)
        l = l.map((c) => {
          switch (c.type) {
            case "user":
              return yqo(c);
            case "assistant":
              return Kac(c);
            default:
              return c;
          }
        });
      if (((l = Jac(l)), !t.advisorModel)) l = _qo(l);
      return Hnm(l, o ? e8i : Z9i, t8i, at("tengu_media_byte_cap", n8i), r8i);
    },
    i = lk(r, t.tools, t.midConvLatchedOff ? void 0 : n);
  (Cjt(i, Gh(t.model).maxBase64Size), jp("query_message_normalization_end"), (i = s(i)));
  let a = null;
  if (!t.midConvLatchedOff && t.betas.includes(jY)) {
    let l = i;
    a = l.some((c) => c.type === "api_system") ? () => s(lk(r, t.tools)) : () => l;
  }
  return {
    messagesPreNormalize: r,
    messagesForAPI: i,
    midConvFallback: a,
  };
}
async function* zac(e, t, n, r, o, s) {
  let i = mo(s.model);
  if (
    !bo() &&
    (dte(i) || Qnt(i) || Znt(i)) &&
    (
      await v7("tengu-off-switch", {
        activated: false,
      })
    ).activated
  ) {
    (G("tengu_off_switch_query", {}), yield G1n(Error(Qnt(i) ? g5e : m5e), s.model));
    return;
  }
  let a = null;
  try {
    a = await $ia(i);
  } catch (En) {
    T(`tengu-model-error-overrides block check failed: ${En}`, {
      level: "error",
    });
  }
  if (a !== null) {
    if (s.fallbackModel !== void 0)
      throw (
        G("tengu_off_switch_query", {
          tier: We("per_model_block"),
          outcome: We("fallback"),
        }),
        new NN(s.model, s.fallbackModel, "model_blocked")
      );
    (G("tengu_off_switch_query", {
      tier: We("per_model_block"),
    }),
      yield jl({
        content: a,
        error: "rate_limit",
      }));
    return;
  }
  let l = Snm(e),
    c = Enm(e),
    u =
      fr() === "bedrock" && s.model.includes("application-inference-profile")
        ? ((await DIe(dp(s.model))) ?? s.model)
        : s.model;
  jp("query_tool_schema_build_start");
  let d =
      s.querySource.startsWith("repl_main_thread") ||
      s.querySource.startsWith("agent:") ||
      s.querySource === "sdk" ||
      s.querySource === "hook_agent",
    p = jot(s.model, {
      isAgenticQuery: d,
    });
  if (n.type === "disabled" || !!s.fastMode) p = p.filter((En) => En !== RPt);
  let f = mo(u);
  if (F6() && CM()) p.push(f2r);
  let m =
      s.fallbackCreditCode !== void 0 &&
      s.fallbackCreditMintModel !== void 0 &&
      Cnm(s.fallbackCreditMintModel, s.model),
    g = m ? s.fallbackCreditMintModel : void 0,
    h = g ?? s.model,
    y = d ? fel(s.advisorModel, h) : void 0,
    b = await pYt(h, r, s.getToolPermissionContext, s.agents, "query"),
    _ = new Set();
  if (b) {
    for (let En of r) if (y4(En)) _.add(En.name);
  }
  if (b && _.size === 0 && !s.hasPendingMcpServers)
    (T("Tool search disabled: no deferred tools available to search"), (b = false));
  let S;
  if (b) {
    let En = xQ(e);
    S = r.filter((Sn) => {
      if (!_.has(Sn.name)) return true;
      if (Ql(Sn, _h)) return true;
      return En.has(Sn.name);
    });
  } else
    S = r.filter((En) => {
      if (Ql(En, _h)) return false;
      return true;
    });
  let A = l_(s.model),
    v = b ? Dvi() : null;
  if (v && A !== "bedrock") {
    if (!p.includes(v)) p.push(v);
  }
  let C = Qxe(),
    x = (En) => b && (_.has(En.name) || _nm(En)),
    I = C && S.some((En) => En.isMcp === true && !x(En));
  if (C && !p.includes(qnt)) p.push(qnt);
  let k = C ? (I ? "none" : "system_prompt") : "none",
    D = await Promise.all(
      S.map((En) =>
        hZn(En, {
          getToolPermissionContext: s.getToolPermissionContext,
          tools: r,
          agents: s.agents,
          allowedAgentTypes: s.allowedAgentTypes,
          model: h,
          deferLoading: x(En),
        }),
      ),
    );
  if (b) {
    let En = On(S, (Sn) => _.has(Sn.name));
    T(`Dynamic tool loading: ${En}/${_.size} deferred tools included`);
  }
  if (
    (jp("query_tool_schema_build_end"),
    G("tengu_api_before_normalize", {
      preNormalizedMessageCount: e.length,
    }),
    jp("query_message_normalization_start"),
    g !== void 0)
  )
    G("tengu_fallback_credit_strip_as_mint_model", {});
  let P = s.stickyBetas ?? u0(),
    O = false;
  if (jBe(P, jY)) ((O = true), (p = p.filter((En) => En !== jY)));
  if (g !== void 0) {
    let En = jot(g, {
        isAgenticQuery: d,
      }),
      Sn = (Jn) => {
        if (En.includes(Jn)) {
          if (!p.includes(Jn)) p.push(Jn);
        } else p = p.filter((Qn) => Qn !== Jn);
      };
    if (!O) Sn(jY);
    Sn(lte);
  }
  let {
      messagesPreNormalize: L,
      messagesForAPI: M,
      midConvFallback: N,
    } = Inm(e, {
      model: s.model,
      bodyModel: h,
      tools: S,
      betas: p,
      midConvLatchedOff: O,
      useToolSearch: b,
      advisorModel: y,
    }),
    B = M,
    $ = N;
  if (Zlr(B)) {
    let En = r1 !== null && NY() && !jBe(P, r1);
    if (En) Wve(P, r1);
    G("tengu_rotunda_pennant_replay", {
      echo_eligible: En,
    });
  }
  G("tengu_api_after_normalize", {
    postNormalizedMessageCount: B.length,
  });
  let q = GXa(L);
  ((t = Sc(
    [
      IAn(q, s.agentContext),
      Qkn({
        isNonInteractive: s.isNonInteractiveSession,
        hasAppendSystemPrompt: s.hasAppendSystemPrompt,
      }),
      ...t,
      ...(y ? [hel] : []),
    ].filter(Boolean),
  )),
    gac(t));
  let W = s.enablePromptCaching ?? Uac(h),
    V = F9e(s.querySource) ? "1h" : void 0;
  if (
    YY(s.agentContext) &&
    (s.querySource.startsWith("repl_main_thread") || s.querySource === "sdk")
  )
    __r(V === "1h" ? 3600000 : 300000);
  let Y = Rnm(t, W, {
      skipGlobalCacheForSystemPrompt: I,
      cacheTtl: V,
    }),
    z = p.length > 0,
    K = [...(s.extraToolSchemas ?? [])];
  if (y)
    K.push({
      type: "advisor_20260301",
      name: "advisor",
      model: y,
    });
  let Z = [...D, ...K],
    J = sc() && Fx() && !cle() && rg(h) && !!s.fastMode,
    ne = false;
  if (T0 && d && P9r() && (fqo?.isAutoModeActive() ?? false)) Wve(P, T0);
  if (((ne = T0 ? FBe(P, T0) : false), J)) Wve(P, Vnt);
  let oe = FBe(P, Vnt),
    re = false;
  if (Anm()) Wve(P, fye);
  re = FBe(P, fye);
  let ee = (Bac(), ro(Nac)).createContextHintController({
      querySource: s.querySource,
      includeFirstPartyBetas: CM(),
      is529Error: TTe,
    }),
    ce = x7(u, s.effortValue),
    ae = Kw(u) && ce !== void 0 ? x_e(ce) : void 0;
  if (WX()) {
    let En = Z.filter((Sn) => !("defer_loading" in Sn && Sn.defer_loading));
    oca({
      system: Y,
      toolSchemas: En,
      querySource: s.querySource,
      model: s.model,
      agentId: s.agentId,
      fastMode: oe,
      globalCacheStrategy: k,
      betas: fI(p),
      autoModeActive: ne,
      isUsingOverage: ck.isUsingOverage ?? false,
      is1hCacheTTL: V === "1h",
      queryDepth: s.queryTracking?.depth,
      cacheDiagnosis: re,
      effortValue: ce,
      extraBodyParams: W8e(),
      messagesForAPI: B,
    });
  }
  let de = mC()
      ? {
          systemPrompt: t.join(`

`),
          userSystemPrompt: s.userSystemPrompt,
          querySource: s.querySource,
          tools: De(Z),
        }
      : void 0,
    Ee = nka(s.model, s.agentContext, de, B, J),
    me = performance.now(),
    pe = performance.now(),
    ge = 0,
    he = [],
    ie = void 0,
    le = void 0,
    He = void 0,
    ye = void 0,
    ue = void 0,
    we = null;
  function Ce() {
    if (we !== null) (clearTimeout(we), (we = null));
  }
  function Ie() {
    if ((Ce(), xnm(ie), (ie = void 0), ue)) (ue.body?.cancel().catch(() => {}), (ue = void 0));
  }
  let Ve = [],
    Ze = false,
    Be = false;
  if (s.fallbackCreditCode !== void 0 && !m)
    G("tengu_fallback_credit_skipped", {
      reason: We("backend_unknown_or_mismatch"),
      mint_request_id: Hr(s.fallbackCreditMintRequestId),
      mint_model: Cf(s.fallbackCreditMintModel),
      model: Cf(s.model),
      query_source: Gte(s.querySource),
    });
  let Me = m ? s.fallbackCreditCode : void 0,
    Ue = (En) =>
      (s.fallbackCreditCode ? En.split(s.fallbackCreditCode).join("[FCT_REDACTED]") : En).slice(
        0,
        600,
      ),
    tt = false,
    bt = false,
    Ke = false,
    Et = false,
    ct = false,
    Je = false,
    gt = (En, Sn, Jn) => {
      if (!tt || ct) return;
      ((ct = true),
        G("tengu_fallback_credit_outcome", {
          outcome: $e(En),
          mint_request_id: Hr(s.fallbackCreditMintRequestId),
          mint_model: Cf(s.fallbackCreditMintModel),
          request_id: Hr(Sn),
          client_request_id: Hr(ye),
          model: Cf(s.model),
          query_source: Gte(s.querySource),
          ...(Jn !== null && {
            input_tokens: Jn.input_tokens,
            output_tokens: Jn.output_tokens,
            cache_read_input_tokens: Jn.cache_read_input_tokens,
            cache_creation_input_tokens: Jn.cache_creation_input_tokens,
            cache_creation_5m_input_tokens: Jn.cache_creation?.ephemeral_5m_input_tokens ?? 0,
            cache_creation_1h_input_tokens: Jn.cache_creation?.ephemeral_1h_input_tokens ?? 0,
            service_tier: Oo(Jn.service_tier),
            speed: Oo(Jn.speed),
          }),
        }));
    },
    st = false,
    xt = false,
    vt = (En) => {
      let Sn = [...p];
      if (!Sn.includes(FY) && wCn(En.model) !== null) Sn.push(FY);
      let Jn = l_(En.model),
        Qn = Jn === "bedrock" && T0 && ne && d && DCn();
      if (Qn)
        T(`auto-mode 3P: sending afk-mode beta '${T0?.header}' to bedrock via body.anthropic_beta`);
      let gr =
          Jn === "bedrock" ? [...O9r(En.model), ...(v ? [v] : []), ...(Qn && T0 ? [T0] : [])] : [],
        fo = W8e(gr),
        cs = {
          ...(fo.output_config ?? {}),
        };
      (delete fo.output_config,
        fnm(ce, cs, fo, Sn, u),
        mnm(s.taskBudget, cs, Sn),
        gnm(s.outputFormat, cs, Sn, s.model));
      let Gs = oIl(s.serverRefusalFallback, En.model, Sn, P);
      ((Ze = Gs.fallbacks !== void 0),
        iIl(
          s.fallbackCreditLaneArmed === true || s.fallbackCreditCode !== void 0,
          Sn,
          P,
          Jn === "bedrock" ? fo : void 0,
        ),
        (Et = Sn.includes(o1)));
      let la = qct(u),
        Fi = Math.min(En?.maxTokensOverride || s.maxOutputTokensOverride || la, la),
        xn = ut(process.env.CLAUDE_CODE_DISABLE_THINKING),
        nr = n.type !== "disabled" && !xn,
        Yn = nr && CM() && QOt(u) ? n.display : void 0,
        Xn = void 0;
      if (nr && D9r(u)) {
        let zt =
            ut(process.env.CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING) &&
            (f.includes("opus-4-6") || f.includes("sonnet-4-6")),
          cn = aSr(s.model);
        if (cn !== void 0 ? cn === "adaptive" : Uot(u) && !zt)
          Xn = {
            type: "adaptive",
            display: Yn,
          };
        else {
          let Tr = wvi(u);
          if (n.type === "enabled" && n.budgetTokens !== void 0) Tr = n.budgetTokens;
          ((Tr = Math.min(Fi - 1, Tr)),
            (Xn = {
              budget_tokens: Tr,
              type: "enabled",
              display: Yn,
            }));
        }
      } else if (n.type === "disabled" && fr() === "firstParty" && !xn && D9r(u) && true && !U4e(u))
        Xn = {
          type: "disabled",
        };
      if (Xn && Yn) {
        let zt = Sn.indexOf(kPt);
        if (zt !== -1) Sn.splice(zt, 1);
      }
      let Jr = Xn?.type === "enabled" || Xn?.type === "adaptive" || (Xn === void 0 && U4e(u)),
        zr = s.toolChoice;
      if (zr?.type === "tool" && Jr)
        (T(
          `tool_choice {type:'tool', name:'${zr.name}'} demoted to auto: extended thinking is active`,
        ),
          (zr = {
            type: "auto",
          }));
      let to = bac({
          hasThinking: nr,
        }),
        vs = s.enablePromptCaching ?? Uac(g ?? En.model),
        bs;
      if (sc() && Fx() && !cle() && rg(h) && !!En.fastMode) bs = "fast";
      if (oe && !Sn.includes(Vnt)) Sn.push(Vnt);
      if (T0 && ne && P9r() && d && !Sn.includes(T0)) {
        if ((Sn.push(T0), DCn()))
          T(`auto-mode 3P: sending afk-mode beta '${T0.header}' to ${Jn} via betas header`);
      }
      if (V === "1h" && CM() && !Sn.includes(J2e)) Sn.push(J2e);
      let Qs = null,
        To = ee?.buildRequestParams(B);
      if (To) (Sn.push(To.beta), (Qs = To.body));
      if (re && !Sn.includes(fye)) Sn.push(fye);
      let ji = ut(process.env.CLAUDE_CODE_SIMULATE_PROXY_USAGE),
        us = ji ? Sn.filter((zt) => zt === qIe) : Sn;
      if (ji)
        T(
          `[API:client] SIMULATE_PROXY_USAGE: stripping ${Sn.length - us.length} beta headers from request (keeping ${fI(us).join(", ") || "none"}): ${fI(Sn).join(", ")}`,
        );
      let X = !nr && LCn(u) ? (s.temperatureOverride ?? 1) : void 0;
      Ve = fI(us);
      let Se = r1 !== null && z && (!ji || us.length > 0) && N9r(us).includes(r1);
      Be = Se && Zlr(B);
      let qe = {
          model: dp(s.model),
          messages: knm(Qac(B, Se), vs, V, s.skipCacheWrite, s.forkPointUuid),
          system: Y,
          tools: rii(Z, s.model),
          tool_choice: zr,
          ...(z &&
            (!ji || us.length > 0) && {
              betas: fI(N9r(us)),
            }),
          metadata: uLe(),
          max_tokens: Fi,
          thinking: Xn,
          ...(X !== void 0 && {
            temperature: X,
          }),
          ...(to &&
            z &&
            Sn.includes(X2e) && {
              context_management: to,
            }),
          ...(!ji && Qs ? Qs : {}),
          ...Gs,
          ...fo,
          ...(Object.keys(cs).length > 0 && {
            output_config: cs,
          }),
          ...(bs !== void 0 && {
            speed: bs,
          }),
          ...(re && d && z && !ji
            ? {
                diagnostics: {
                  previous_message_id: c ?? null,
                },
              }
            : {}),
        },
        ot = pnm(qe.thinking, s.querySource, !st);
      if (ot !== qe.thinking) ((st = true), (qe.thinking = ot));
      if (Uin(qe)) {
        try {
          qe = sM(qe);
        } catch {}
        if ((KJe(qe), !xt))
          ((xt = true),
            G("tengu_lone_surrogate_sanitized", {
              source: We("queryModel"),
            }));
      }
      return qe;
    };
  {
    let En = vt({
        model: s.model,
        thinkingConfig: n,
      }),
      Sn = En.messages.length,
      Jn = z ? (En.betas ?? []) : [],
      Qn = En.thinking?.type ?? "disabled",
      gr = ae;
    s.getToolPermissionContext().then((fo) => {
      dkl({
        model: s.model,
        messagesLength: Sn,
        temperature: s.temperatureOverride ?? 1,
        betas: Jn,
        permissionMode: fo.mode,
        querySource: s.querySource,
        messageClientPlatform: s.messageClientPlatform,
        queryTracking: s.queryTracking,
        thinkingType: Qn,
        effortValue: gr,
        fastMode: J,
        previousRequestId: l,
      });
    });
  }
  let jt = [],
    en = 0,
    Dn = 0,
    nn = void 0,
    Ln = [],
    Hn = xb,
    kr = 0,
    Mr = null,
    fe = false,
    Te,
    Re = 0,
    Ne = void 0,
    it = void 0,
    Tt,
    un = J,
    ze = false,
    Mt = new Map(),
    Qt = 3,
    Er = {
      value: 0,
    },
    pt = 2,
    ln = 0,
    pn = 1,
    ir = 0,
    Rr = 0,
    _o = false,
    Xo = false,
    Pn = false,
    lr = false,
    eo = false,
    Kn,
    Nt = (En, Sn) => {
      if (!(En instanceof Fo) || En.status !== 400) return;
      let Jn = En.message.includes("`fallback-credit-"),
        Qn = En.message.includes("`server-side-fallback-"),
        gr = (Gs) => {
          (T(`[server-fallback] 400 attributed (${Gs}) \u2014 stripping and retrying`, {
            level: "warn",
          }),
            G("tengu_rotunda_pennant_strip", {
              shape: $e(Gs),
              non_streaming: Sn === "sync",
              query_source: Gte(s.querySource),
              sticky_scope:
                s.stickyBetas === void 0
                  ? We("session")
                  : xM(s.querySource) === "main"
                    ? We("detached_main")
                    : xM(s.querySource) === "subagent"
                      ? We("agent")
                      : We("aux"),
            }));
        },
        fo = zaa(En);
      if (fo !== void 0 && !bt) {
        if (((bt = true), (Me = void 0), fo === "credit_beta_header")) {
          if ((jie(P, o1), Qn)) (jie(P, r1), (Pn = true));
        }
        if (Sn === "stream") gt(fo, En.requestID ?? null, null);
        return (gr(fo), "retry:fallback-credit-strip");
      }
      let cs = Vaa(En);
      if (cs !== void 0 && (Ze || cs === "beta_header") && !Pn) {
        if (((Pn = true), jie(P, r1), cs === "beta_header" && Jn))
          (jie(P, o1), (bt = true), (Me = void 0));
        return (gr(cs), "retry:server-fallback-strip");
      }
      if (Pjt(En)) return;
      if (Sn === "sync" && Ut(En)) return;
      if (Sn === "stream" && tt && !bt)
        return (
          (bt = true),
          gt("unattributed_400_dropped", En.requestID ?? null, null),
          gr("unattributed"),
          "retry:fallback-credit-unattributed"
        );
      if ((Ze || Be) && !Pn)
        return ((Pn = true), jie(P, r1), gr("unattributed"), "retry:server-fallback-strip");
      if (Et && !Ke)
        return ((Ke = true), jie(P, o1), gr("unattributed"), "retry:fallback-credit-header-strip");
      return;
    },
    Ut = (En) =>
      F1n(En) || Vio(En) || P1n(En) !== void 0 || zio(En) || Yio(En) !== null || Kio(En) || j1n(En),
    Fn = (En) => {
      let Sn =
          s.serverRefusalFallback !== void 0
            ? (En.content ?? []).reduce((la, Fi, xn) => (TQn(Fi) ? xn : la), -1)
            : -1,
        Jn = En.stop_reason === "refusal",
        Qn,
        gr = 0,
        fo = false,
        cs = [];
      for (let [la, Fi] of (En.content ?? []).entries()) {
        if (!TQn(Fi)) {
          if ((la < Sn && Fi.type !== "text") || (Jn && Sn >= 0)) {
            (gr++, (fo ||= Fi.type === "tool_use"));
            continue;
          }
          cs.push(Fi);
          continue;
        }
        let xn = lIl(Fi);
        if (xn === void 0) {
          (In("warn", "cli_malformed_fallback_block"),
            G("tengu_rotunda_pennant_malformed", {
              block_index: la,
              non_streaming: true,
            }));
          continue;
        }
        if (
          (cs.push(TPo(xn)),
          (Qn = xn),
          G("tengu_rotunda_pennant_materialized", {
            armed: s.serverRefusalFallback !== void 0,
            block_index: la,
            non_streaming: true,
          }),
          xn.reason === "refusal")
        )
          lYt({
            model: u,
            requestId: le || void 0,
            querySource: s.querySource,
            effort: ae,
            fastMode: un,
            attempt: ge,
            attribution: VU(
              s.querySource,
              s.spawnedBySkill,
              s.activeSkill,
              s.activeMcpServer,
              s.activeMcpTool,
            ),
            serverFallbackHop: true,
          });
      }
      if (cs.length === 0 && (En.content ?? []).length > 0)
        cs.push({
          type: "text",
          text: zw,
          citations: [],
        });
      let Gs = s.serverRefusalFallback !== void 0 ? NKt(En.usage) : void 0;
      if (
        ((lr =
          Gs?.servedFallbackModel !== void 0 ||
          (s.serverRefusalFallback !== void 0 && Qn !== void 0)),
        (eo = false),
        (Je = false),
        (Kn = Gs),
        gr > 0)
      )
        G("tengu_rotunda_pennant_sync_dropped", {
          dropped_count: gr,
          had_tool_use: fo,
          chain_exhausted: Jn,
        });
      return {
        content: cs,
        lastHop: Qn,
        iterations: Gs,
      };
    };
  function* xi(En, Sn, Jn) {
    if (Jn !== void 0 && !Je) {
      Je = true;
      let fo = Zoe(xb, Sn.usage);
      G("tengu_fallback_credit_minted", {
        request_id: Hr(le),
        model: Cf(s.model),
        fallback_target_model: Cf(
          s.refusalFallbackModel ??
            (s.serverRefusalFallback !== void 0 && !lr ? s.serverRefusalFallback.model : void 0),
        ),
        token_length: Jn.length,
        input_tokens: fo.input_tokens,
        output_tokens: fo.output_tokens,
        cache_read_input_tokens: fo.cache_read_input_tokens,
        cache_creation_input_tokens: fo.cache_creation_input_tokens,
        cache_creation_5m_input_tokens: fo.cache_creation?.ephemeral_5m_input_tokens ?? 0,
        cache_creation_1h_input_tokens: fo.cache_creation?.ephemeral_1h_input_tokens ?? 0,
        service_tier: Oo(fo.service_tier),
        speed: Oo(fo.speed),
        query_source: Gte(s.querySource),
        ...(s.queryTracking && {
          query_chain_id: Hr(s.queryTracking.chainId),
          query_depth: s.queryTracking.depth,
        }),
      });
    }
    if (s.serverRefusalFallback !== void 0 && !eo) {
      let fo = En.lastHop?.model ?? En.iterations?.servedFallbackModel;
      if (fo !== void 0)
        ((eo = true),
          yield {
            type: "server_fallback",
            fromModel: En.lastHop?.fromModel ?? s.model,
            toModel: fo,
            reason: En.lastHop !== void 0 ? "refusal" : "sticky",
            apiRefusalCategory: En.lastHop?.category ?? null,
            midStream: false,
            requestId: le ?? null,
            discardedMessages: [],
            retainedMessages: [],
            retainedText: "",
            finalStopReason: Sn.stop_reason,
          });
    }
    let Qn =
      s.refusalFallbackModel ??
      (s.serverRefusalFallback !== void 0 && !lr ? s.serverRefusalFallback.model : void 0);
    if (Sn.stop_reason === "refusal" && Qn !== void 0)
      return (
        yield {
          type: "fallback_request",
          trigger: "refusal",
          originalModel: s.model,
          fallbackModel: Qn,
          requestId: le ?? null,
          apiRefusalCategory: Sn.stop_details?.category ?? null,
          apiRefusalExplanation: Sn.stop_details?.explanation ?? null,
          creditCode: Jn ?? null,
        },
        true
      );
    let gr = h5e(Sn.stop_reason, Sn.stop_details, le, s.model);
    if (gr)
      (yield {
        type: "refusal_no_fallback",
        originalModel: s.model,
        requestId: le ?? null,
        apiRefusalCategory: Sn.stop_details?.category ?? null,
        apiRefusalExplanation: Sn.stop_details?.explanation ?? null,
      },
        yield gr);
    return false;
  }
  let jn = false,
    So = new Map(),
    Mo = new Set(),
    rs = new Set(),
    js;
  try {
    zXn("api_call", s.agentId);
    e: for (;;) {
      let bs = function () {
          if (to !== null) (clearTimeout(to), (to = null));
          if (vs) ((vs = false), s.onRetryStatus?.(null));
          if (Jr !== null) (clearTimeout(Jr), (Jr = null));
          if (zr !== null) (clearTimeout(zr), (zr = null));
        },
        Da = function () {
          if (!s.onRetryStatus || !Jn) return;
          let us = Jn.lastAt,
            X = performance.now();
          ((to = setTimeout(() => {
            if (performance.now() - X < gqo / 2) return;
            if (Jn.lastAt > us) {
              Da();
              return;
            }
            ((vs = true),
              s.onRetryStatus?.({
                kind: "stalled",
                deadline: Date.now() + (nr - gqo),
              }));
          }, gqo)),
            to.unref?.());
        },
        Qs = function () {
          if ((bs(), Da(), !la)) return;
          let us = performance.now();
          ((Jr = setTimeout(
            (X, Se) => {
              if (performance.now() - Se < X) return;
              (T(`Streaming idle warning: no chunks received for ${X / 1000}s`, {
                level: "warn",
              }),
                In("warn", "cli_streaming_idle_warning"));
            },
            xn,
            xn,
            us,
          )),
            (zr = setTimeout(() => {
              ((Yn = true),
                (Xn = performance.now()),
                T(`Streaming idle timeout: no chunks received for ${Fi / 1000}s, aborting stream`, {
                  level: "error",
                }),
                In("error", "cli_streaming_idle_timeout"),
                G("tengu_streaming_idle_timeout", {
                  model: s.model,
                  request_id: le ?? "unknown",
                  timeout_ms: Fi,
                  tier: We("event"),
                }),
                Ie());
            }, Fi)));
        };
      jp("query_client_creation_start");
      let En = tcr(
          () =>
            G9({
              maxRetries: 0,
              model: s.model,
              fetchOverride: s.fetchOverride,
              source: s.querySource,
              agentContext: s.agentContext,
            }),
          async (us, X, Se) => {
            (gt("attempt_errored", le ?? null, null),
              (ge = X),
              (un = Se.fastMode ?? false),
              (pe = performance.now()),
              he.push(pe),
              jp("query_client_creation_end"));
            let qe = vt(Se);
            if (
              (qac(qe),
              vpn(qe, s.querySource),
              nZn(
                {
                  ...qe,
                  stream: true,
                },
                s.querySource,
              ),
              (Re = qe.max_tokens),
              jp("query_api_request_sent"),
              T(`[API:timing] dispatching to ${l_(s.model)} model=${s.model}`),
              !s.agentId)
            ) {
              if ((wC("api_request_sent"), X === 1 && !Dn)) ((Dn = performance.now()), pZa());
            }
            Ce();
            let ot = parseInt(process.env.CLAUDE_SLOW_FIRST_BYTE_MS || "", 10) || 30000;
            we = setTimeout(() => {
              we = null;
              let Br = performance.now() - pe;
              (T(
                `Slow first byte: no stream chunk ${(Br / 1000).toFixed(1)}s after request sent (attempt ${X})`,
                {
                  level: "warn",
                },
              ),
                G("tengu_api_slow_first_byte", {
                  model: s.model,
                  provider: gj(),
                  attempt: X,
                  elapsed_ms: Math.round(Br),
                }));
            }, ot);
            let zt = Vac(Ee, he.length);
            ye = zt.clientRequestId;
            let cn = zt.headers;
            if (
              (s.queryTracking?.depth ?? 0) > 0 &&
              (xM(s.querySource) !== "auxiliary" || s.querySource === "compact") &&
              fr() === "firstParty" &&
              _u() &&
              at("tengu_lantern_spool", false)
            )
              cn["anthropic-usage-limit"] = "extended";
            if (
              ((Xo = false),
              !_o &&
                xM(s.querySource) !== "auxiliary" &&
                fr() === "firstParty" &&
                _u() &&
                at("tengu_cedar_lattice", false))
            )
              ((cn[unm] = dnm), (Xo = true));
            let hr = Me;
            if (hr !== void 0) ((Me = void 0), (tt = true));
            let Tr = await us.beta.messages
              .create(
                {
                  ...qe,
                  ...(hr !== void 0 && {
                    fallback_credit_token: hr,
                  }),
                  stream: true,
                },
                {
                  signal: o,
                  ...(Object.keys(cn).length > 0 && {
                    headers: cn,
                  }),
                },
              )
              .withResponse()
              .catch((Br) => {
                throw (Ce(), Br);
              });
            if (
              (jp("query_response_headers_received"),
              (le = Tr.request_id),
              (ue = Tr.response),
              hr !== void 0)
            )
              G("tengu_rotunda_pennant_credit_echoed", {
                mint_request_id: Hr(s.fallbackCreditMintRequestId),
                mint_model: Cf(s.fallbackCreditMintModel),
                request_id: Hr(le),
                client_request_id: Hr(ye),
                model: Cf(s.model),
                token_length: hr.length,
                query_source: Gte(s.querySource),
              });
            return Tr.data;
          },
          {
            model: s.model,
            fallbackModel: s.fallbackModel,
            thinkingConfig: n,
            ...(sc()
              ? {
                  fastMode: J,
                }
              : false),
            signal: o,
            initialConsecutive529Errors: Rr,
            querySource: s.querySource,
            onRetryStatus: s.onRetryStatus,
            onError: async (us) => {
              if (ne && F1n(us)) {
                if (((ne = false), T0)) jie(P, T0);
                return (
                  fqo?.setAutoModeActive(false),
                  fqo?.setAutoModeCircuitBroken(true),
                  T(
                    "[auto-mode] server rejected afk-mode beta \u2014 dropping header and circuit-breaking auto for this session",
                    {
                      level: "warn",
                    },
                  ),
                  "retry:afk-beta"
                );
              }
              if (Xo && !_o) {
                let Se = us instanceof Fo ? us.status : void 0,
                  qe = Se !== void 0 && Se >= 500,
                  ot = us instanceof Hx;
                if (qe || ot)
                  return (
                    (_o = true),
                    G("tengu_dispatch_header_fallback", {
                      model: Cf(s.model),
                      reason: qe ? We("5xx") : We("conn_err"),
                      status: Se !== void 0 ? yB(Se) : We("none"),
                      request_id: Hr(us instanceof Fo ? us.requestID : void 0),
                    }),
                    "retry:dispatch-header-strip"
                  );
              }
              if (Vio(us))
                return (
                  (B = _qo(B)),
                  G("tengu_advisor_strip_retry", {
                    query_source: Bh(s.querySource) ?? "",
                  }),
                  "retry:advisor-strip"
                );
              let X = sHn(us, s.model, s.querySource);
              if (X === aMt) return;
              if (X !== null) return X;
              {
                let Se = P1n(us);
                if (Se) {
                  let qe = us instanceof Error ? us.message : String(us);
                  if (Se.messageIdx !== void 0 && Se.contentIdx !== void 0) {
                    let zt = Aac(
                      B,
                      {
                        messageIdx: Se.messageIdx,
                        contentIdx: Se.contentIdx,
                        kind: Se.kind,
                      },
                      qe,
                    );
                    if (zt !== B)
                      return (
                        (B = zt),
                        Mt.set(Se.kind, qe),
                        T(
                          `Removed unprocessable ${Se.kind} at messages.${Se.messageIdx}.content.${Se.contentIdx}; retrying.`,
                          {
                            level: "warn",
                          },
                        ),
                        G("tengu_media_block_strip_retry", {
                          kind: $e(Se.kind),
                          message_idx: Se.messageIdx,
                          content_idx: Se.contentIdx,
                          targeted: 1,
                        }),
                        `retry:media-strip:${Se.kind}:${Se.messageIdx}.${Se.contentIdx}`
                      );
                  }
                  let ot = Er.value < Qt ? Hac(B, Se.kind, qe) : void 0;
                  if (ot)
                    return (
                      Er.value++,
                      (B = ot.messages),
                      Mt.set(Se.kind, qe),
                      T(
                        `Removed base64 ${Se.kind} blocks from carrier ${ot.carrierIdx} (API 400 had no usable path); retrying.`,
                        {
                          level: "warn",
                        },
                      ),
                      G("tengu_media_block_strip_retry", {
                        kind: $e(Se.kind),
                        targeted: 0,
                        carrier_idx: ot.carrierIdx,
                      }),
                      `retry:media-strip-latest:${Se.kind}:${ot.carrierIdx}`
                    );
                }
              }
              if (re && zio(us))
                return (
                  (re = false),
                  jie(P, fye),
                  T("[cache-diagnosis] server rejected beta \u2014 dropping header latch", {
                    level: "warn",
                  }),
                  "retry:cache-diagnosis-beta"
                );
              {
                let Se = Yio(us);
                if (Se) {
                  let qe = Se === "enabled" ? "adaptive" : "enabled";
                  return (
                    lSr(s.model, qe),
                    T(
                      `[thinking] model rejected thinking.type=${Se}; retrying with ${qe}. For Bedrock application-inference-profile ARNs with bearer-token auth, granting bedrock:GetInferenceProfile to the token avoids this round-trip.`,
                      {
                        level: "warn",
                      },
                    ),
                    "retry:thinking-type"
                  );
                }
              }
              if (Kio(us)) {
                let Se = 0,
                  qe = 0;
                for (let zt of B) {
                  if (zt.type !== "assistant" || !Array.isArray(zt.message.content)) continue;
                  for (let cn of zt.message.content)
                    if (cn.type === "redacted_thinking") Se++;
                    else if (cn.type === "thinking")
                      if ("signature" in cn && cn.signature) Se++;
                      else qe++;
                }
                let ot = Xac(B);
                if (ot !== B)
                  return (
                    (B = ot),
                    T(
                      "[thinking] server rejected a thinking block; stripping all thinking blocks and retrying.",
                      {
                        level: "warn",
                      },
                    ),
                    G("tengu_thinking_signature_strip_retry", {
                      query_source: Bh(s.querySource) ?? "",
                      model: s.model,
                      stripped_signed_count: Se,
                      stripped_unsigned_count: qe,
                    }),
                    "retry:thinking-signature-strip"
                  );
              }
              if ($ && j1n(us))
                return (
                  (B = $()),
                  ($ = null),
                  (p = p.filter((Se) => Se !== jY)),
                  jie(P, jY),
                  T(
                    '[mid-conv-system] server rejected role:"system" \u2014 falling back to <system-reminder> body, sticky-rejecting beta until /clear or /compact',
                    {
                      level: "warn",
                    },
                  ),
                  G("tengu_mid_conv_system_fallback_retry", {}),
                  "retry:mid-conv-system"
                );
              {
                let Se = await ee?.onRequestError(us, B);
                if (Se) {
                  if (((B = Se.messages), Se.clearedIds.size > 0))
                    s.onHintCleared?.(Se.clearedIds, Se.clearedContent);
                  return "retry:context-hint";
                }
              }
              return Nt(us, "stream");
            },
          },
        ),
        Sn;
      do if (((Sn = await En.next()), !("controller" in Sn.value))) yield Sn.value;
      while (!Sn.done);
      ie = Sn.value;
      for (let [us, X] of Mt)
        yield jl({
          content: lut(us),
          error: "invalid_request",
          errorDetails: X,
        });
      Mt.clear();
      let Jn = ue ? (ue._chunkTimes ?? void 0) : void 0;
      ((jt.length = 0),
        (en = 0),
        (nn = void 0),
        (Ln.length = 0),
        (lr = false),
        (eo = false),
        (jn = false),
        So.clear(),
        Mo.clear(),
        rs.clear(),
        (js = void 0),
        (Je = false),
        (Hn = xb),
        (Mr = null),
        (ze = false));
      let Qn = false,
        gr = false,
        fo = false,
        cs = null,
        Gs = false,
        la = Oe.CLAUDE_ENABLE_STREAM_WATCHDOG ?? at("tengu_event_watchdog_default_on", false),
        Fi = A9r(),
        xn = Fi / 2,
        nr = Math.min(H9r(fr()), la ? Fi : 1 / 0),
        Yn = false,
        Xn = null,
        Jr = null,
        zr = null,
        to = null,
        vs = false;
      Qs();
      let To = () => {
          if (s.querySource !== "sdk" && s.keepPartialMessageOnAbort !== true) return;
          if (jn) return;
          let us = Ln[jt.length];
          if (us?.type !== "text" || !us.text.trim() || !nn) return;
          return {
            message: {
              ...nn,
              content: dZt([us], r, s.agentId, {
                requestId: le ?? void 0,
                messageId: nn.id,
              }),
            },
            requestId: le ?? void 0,
            ...VU(
              s.querySource,
              s.spawnedBySkill,
              s.activeSkill,
              s.activeMcpServer,
              s.activeMcpTool,
            ),
            type: "assistant",
            uuid: ZHt.randomUUID(),
            timestamp: new Date().toISOString(),
            ...void 0,
          };
        },
        ji = () => {
          if (js === void 0 || eo) return;
          let us = js;
          return (
            (js = void 0),
            (eo = true),
            {
              type: "server_fallback",
              fromModel: us.fromModel,
              toModel: us.model,
              reason: us.reason,
              apiRefusalCategory: us.category,
              midStream: false,
              requestId: le ?? null,
              discardedMessages: [],
              retainedMessages: [],
              retainedText: "",
              finalStopReason: null,
            }
          );
        };
      try {
        let us = true,
          X = null,
          Se = 30000,
          qe = 0,
          ot = 0;
        for await (let cn of wnm(ie, Jn)) {
          if (cn.type === "ping") {
            yield {
              type: "stream_event",
              event: cn,
            };
            continue;
          }
          Qs();
          let hr = Date.now();
          if (X !== null) {
            let Tr = hr - X;
            if (Tr > Se)
              (ot++,
                (qe += Tr),
                T(
                  `Streaming stall detected: ${(Tr / 1000).toFixed(1)}s gap between events (stall #${ot})`,
                  {
                    level: "warn",
                  },
                ),
                G("tengu_streaming_stall", {
                  stall_duration_ms: Tr,
                  stall_count: ot,
                  total_stall_time_ms: qe,
                  event_type: cn.type,
                  model: s.model,
                  request_id: le ?? "unknown",
                }));
          }
          if (((X = hr), us)) {
            if (
              (Ce(),
              T("Stream started - received first chunk"),
              T(`[API:timing] first byte after ${Math.round(performance.now() - pe)}ms`),
              jp("query_first_chunk_received"),
              !s.agentId)
            )
              wC("first_chunk");
            (SIl(), (us = false));
          }
          {
            let Tr = vPo(cn);
            if (Tr) {
              if (
                (rs.add(Tr.index),
                (Ln[Tr.index] = TPo(Tr)),
                G("tengu_rotunda_pennant_materialized", {
                  armed: s.serverRefusalFallback !== void 0,
                  block_index: Tr.index,
                  non_streaming: false,
                }),
                Tr.reason === "refusal")
              )
                lYt({
                  model: u,
                  requestId: le || void 0,
                  querySource: s.querySource,
                  effort: ae,
                  fastMode: un,
                  attempt: ge,
                  attribution: VU(
                    s.querySource,
                    s.spawnedBySkill,
                    s.activeSkill,
                    s.activeMcpServer,
                    s.activeMcpTool,
                  ),
                  serverFallbackHop: true,
                });
              if (s.serverRefusalFallback === void 0) continue;
              if (HQn(Tr.reason)) lr = true;
              if (nn !== void 0)
                nn = {
                  ...nn,
                  model: Tr.model,
                };
              for (let Br of So.values()) Br.message.model = Tr.model;
              if (So.size === 0) js = Tr;
              else if (!HQn(Tr.reason))
                ((eo = true),
                  yield {
                    type: "server_fallback",
                    fromModel: Tr.fromModel,
                    toModel: Tr.model,
                    reason: Tr.reason,
                    apiRefusalCategory: Tr.category,
                    midStream: true,
                    requestId: le ?? null,
                    discardedMessages: [],
                    retainedMessages: [],
                    retainedText: "",
                    finalStopReason: null,
                  });
              else {
                eo = true;
                let Br = [];
                for (let [Pa, nc] of So) if (sIl(nc)) (Br.push(nc), So.delete(Pa), delete Ln[Pa]);
                if (Br.length > 0) {
                  let Pa = new Set(Br);
                  for (let nc = jt.length - 1; nc >= 0; nc--) if (Pa.has(jt[nc])) jt.splice(nc, 1);
                  jn = true;
                }
                let fi = [...So.entries()].sort((Pa, nc) => Pa[0] - nc[0]).map(([, Pa]) => Pa),
                  oi = fi
                    .map((Pa) =>
                      Pa.message.content.map((nc) => (nc.type === "text" ? nc.text : "")).join(""),
                    )
                    .join("");
                yield {
                  type: "server_fallback",
                  fromModel: Tr.fromModel,
                  toModel: Tr.model,
                  reason: Tr.reason,
                  apiRefusalCategory: Tr.category,
                  midStream: true,
                  requestId: le ?? null,
                  discardedMessages: Br,
                  retainedMessages: fi,
                  retainedText: oi,
                  finalStopReason: null,
                };
              }
              continue;
            }
            if (cIl(cn)) {
              let Br = cn.index;
              (Mo.add(Br),
                (jn = true),
                In("warn", "cli_malformed_fallback_block"),
                G("tengu_rotunda_pennant_malformed", {
                  block_index: Br,
                  non_streaming: false,
                }));
              continue;
            }
            if (cn.type === "content_block_stop" && Mo.has(cn.index)) continue;
          }
          switch (cn.type) {
            case "message_start": {
              ((Gs = true),
                (nn = cn.message),
                (en = Math.max(0, Math.round(performance.now() - pe))),
                (Hn = Zoe(Hn, cn.message?.usage)),
                (Tt = cn.message.diagnostics?.cache_miss_reason));
              break;
            }
            case "content_block_start":
              switch (cn.content_block.type) {
                case "tool_use":
                  Ln[cn.index] = {
                    ...cn.content_block,
                    input: "",
                  };
                  break;
                case "server_tool_use":
                  if (
                    ((Ln[cn.index] = {
                      ...cn.content_block,
                      input: "",
                    }),
                    cn.content_block.name === "advisor")
                  )
                    ((ze = true),
                      T("[AdvisorTool] Advisor tool called"),
                      G("tengu_advisor_tool_call", {
                        model: s.model,
                        advisor_model: y ?? "unknown",
                      }));
                  break;
                case "text":
                  Ln[cn.index] = {
                    ...cn.content_block,
                    text: "",
                  };
                  break;
                case "thinking":
                  Ln[cn.index] = {
                    ...cn.content_block,
                    thinking: "",
                    signature: "",
                  };
                  break;
                default:
                  if (
                    ((Ln[cn.index] = {
                      ...cn.content_block,
                    }),
                    cn.content_block.type === "advisor_tool_result")
                  )
                    ((ze = false), T("[AdvisorTool] Advisor tool result received"));
                  break;
              }
              if (
                ((cs = cn.index),
                cn.content_block.type !== "thinking" &&
                  cn.content_block.type !== "redacted_thinking" &&
                  !Pj(cn.content_block))
              )
                fo = true;
              break;
            case "content_block_delta": {
              let Tr = Ln[cn.index],
                Br = cn.delta;
              if (!Tr)
                throw (
                  G("tengu_streaming_error", {
                    error_type: We("content_block_not_found_delta"),
                    part_type: $e(cn.type),
                    part_index: cn.index,
                  }),
                  RangeError("Content block not found")
                );
              switch (Br.type) {
                case "citations_delta":
                  break;
                case "input_json_delta":
                  if (Tr.type !== "tool_use" && Tr.type !== "server_tool_use")
                    throw (
                      G("tengu_streaming_error", {
                        error_type: We("content_block_type_mismatch_input_json"),
                        expected_type: We("tool_use"),
                        actual_type: Tr.type,
                      }),
                      Error("Content block is not a input_json block")
                    );
                  if (typeof Tr.input !== "string")
                    throw (
                      G("tengu_streaming_error", {
                        error_type: We("content_block_input_not_string"),
                        input_type: $e(typeof Tr.input),
                      }),
                      Error("Content block input is not a string")
                    );
                  Tr.input += Br.partial_json;
                  break;
                case "text_delta":
                  if (Tr.type !== "text")
                    throw (
                      G("tengu_streaming_error", {
                        error_type: We("content_block_type_mismatch_text"),
                        expected_type: We("text"),
                        actual_type: Tr.type,
                      }),
                      Error("Content block is not a text block")
                    );
                  Tr.text += Br.text;
                  break;
                case "signature_delta":
                  if (Tr.type !== "thinking")
                    throw (
                      G("tengu_streaming_error", {
                        error_type: We("content_block_type_mismatch_thinking_signature"),
                        expected_type: We("thinking"),
                        actual_type: Tr.type,
                      }),
                      Error("Content block is not a thinking block")
                    );
                  Tr.signature = Br.signature;
                  break;
                case "thinking_delta":
                  if (Tr.type === "redacted_thinking") break;
                  if (Tr.type !== "thinking")
                    throw (
                      G("tengu_streaming_error", {
                        error_type: We("content_block_type_mismatch_thinking_delta"),
                        expected_type: We("thinking"),
                        actual_type: Tr.type,
                      }),
                      Error("Content block is not a thinking block")
                    );
                  Tr.thinking += Br.thinking;
                  break;
              }
              break;
            }
            case "content_block_stop": {
              cs = null;
              let Tr = Ln[cn.index];
              if (!Tr)
                throw (
                  G("tengu_streaming_error", {
                    error_type: We("content_block_not_found_stop"),
                    part_type: $e(cn.type),
                    part_index: cn.index,
                  }),
                  RangeError("Content block not found")
                );
              if (!nn)
                throw (
                  G("tengu_streaming_error", {
                    error_type: We("partial_message_not_found"),
                    part_type: $e(cn.type),
                  }),
                  Error("Message not found")
                );
              let Br = {
                message: {
                  ...nn,
                  content: dZt([Tr], r, s.agentId, {
                    requestId: le ?? void 0,
                    messageId: nn.id,
                  }),
                },
                requestId: le ?? void 0,
                ...VU(
                  s.querySource,
                  s.spawnedBySkill,
                  s.activeSkill,
                  s.activeMcpServer,
                  s.activeMcpTool,
                ),
                type: "assistant",
                uuid: ZHt.randomUUID(),
                timestamp: new Date().toISOString(),
                ...false,
                ...(y && {
                  advisorModel: y,
                }),
              };
              if ((jt.push(Br), So.set(cn.index, Br), Br.message.content.some((fi) => !Pj(fi)))) {
                if (
                  ((gr = true),
                  Br.message.content.some(
                    (fi) => fi.type !== "thinking" && fi.type !== "redacted_thinking" && !Pj(fi),
                  ))
                )
                  fo = true;
              }
              yield Br;
              break;
            }
            case "message_delta": {
              Hn = Zoe(Hn, cn.usage);
              let Tr = s.serverRefusalFallback !== void 0 ? NKt(Hn) : void 0;
              if (Tr?.servedFallbackModel !== void 0) ((lr = true), (Hn = hqo(Hn, cn.usage)));
              let Br = HPo(cn.delta.stop_details);
              {
                let ca = cn.delta.stop_details;
                if (ca && "fallback_credit_token" in ca) delete ca.fallback_credit_token;
              }
              if (Br !== void 0 && !Je)
                ((Je = true),
                  G("tengu_fallback_credit_minted", {
                    request_id: Hr(le),
                    model: Cf(s.model),
                    fallback_target_model: Cf(
                      s.refusalFallbackModel ??
                        (s.serverRefusalFallback !== void 0 && !lr
                          ? s.serverRefusalFallback.model
                          : void 0),
                    ),
                    token_length: Br.length,
                    input_tokens: Hn.input_tokens,
                    output_tokens: Hn.output_tokens,
                    cache_read_input_tokens: Hn.cache_read_input_tokens,
                    cache_creation_input_tokens: Hn.cache_creation_input_tokens,
                    cache_creation_5m_input_tokens:
                      Hn.cache_creation?.ephemeral_5m_input_tokens ?? 0,
                    cache_creation_1h_input_tokens:
                      Hn.cache_creation?.ephemeral_1h_input_tokens ?? 0,
                    service_tier: Oo(Hn.service_tier),
                    speed: Oo(Hn.speed),
                    query_source: Gte(s.querySource),
                    ...(s.queryTracking && {
                      query_chain_id: Hr(s.queryTracking.chainId),
                      query_depth: s.queryTracking.depth,
                    }),
                  }));
              Mr = cn.delta.stop_reason;
              let fi = cn.delta;
              if (fi.diagnostics?.cache_miss_reason) Tt = fi.diagnostics.cache_miss_reason;
              for (let ca of jt)
                ((ca.message.usage = Hn),
                  (ca.message.stop_reason = Mr),
                  (ca.message.stop_details = cn.delta.stop_details ?? null));
              let oi = Tr !== void 0 && Tr.servedFallbackModel !== void 0,
                Pa = oi
                  ? wPo(
                      Tr.entries,
                      {
                        speed: Hn.speed,
                        serverToolUse: Hn.server_tool_use,
                      },
                      Mr,
                    )
                  : WY(u, Hn),
                nc = oi ? (s.serverRefusalFallback?.model ?? s.model) : s.model;
              if (
                ((kr += boe(
                  Pa,
                  Hn,
                  nc,
                  s.querySource,
                  ae,
                  s.spawnedBySkill,
                  s.activeSkill,
                  s.activeMcpServer,
                  s.activeMcpTool,
                )),
                Mr === "refusal")
              )
                lYt({
                  model: u,
                  requestId: le || void 0,
                  querySource: s.querySource,
                  effort: ae,
                  fastMode: un,
                  attempt: ge,
                  attribution: VU(
                    s.querySource,
                    s.spawnedBySkill,
                    s.activeSkill,
                    s.activeMcpServer,
                    s.activeMcpTool,
                  ),
                  serverFallbackHop: false,
                  stopDetails: cn.delta.stop_details ?? null,
                });
              if (s.serverRefusalFallback !== void 0) {
                let ca = js;
                if (((js = void 0), ca !== void 0)) {
                  if (!eo)
                    ((eo = true),
                      yield {
                        type: "server_fallback",
                        fromModel: ca.fromModel,
                        toModel: ca.model,
                        reason: ca.reason,
                        apiRefusalCategory: ca.category,
                        midStream: false,
                        requestId: le ?? null,
                        discardedMessages: [],
                        retainedMessages: [],
                        retainedText: "",
                        finalStopReason: Mr,
                      });
                } else if (!eo && Tr?.servedFallbackModel !== void 0)
                  ((eo = true),
                    yield {
                      type: "server_fallback",
                      fromModel: s.model,
                      toModel: Tr.servedFallbackModel,
                      reason: "sticky",
                      apiRefusalCategory: null,
                      midStream: false,
                      requestId: le ?? null,
                      discardedMessages: [],
                      retainedMessages: [],
                      retainedText: "",
                      finalStopReason: Mr,
                    });
              }
              let Qp =
                s.refusalFallbackModel ??
                (s.serverRefusalFallback !== void 0 && !lr
                  ? s.serverRefusalFallback.model
                  : void 0);
              if (Mr === "refusal" && Qp !== void 0) {
                yield {
                  type: "fallback_request",
                  trigger: "refusal",
                  originalModel: s.model,
                  fallbackModel: Qp,
                  requestId: le ?? null,
                  apiRefusalCategory: cn.delta.stop_details?.category ?? null,
                  apiRefusalExplanation: cn.delta.stop_details?.explanation ?? null,
                  creditCode: Br ?? null,
                };
                return;
              }
              let sd = h5e(Mr, cn.delta.stop_details, le, s.model);
              if (sd)
                (yield {
                  type: "refusal_no_fallback",
                  originalModel: s.model,
                  requestId: le ?? null,
                  apiRefusalCategory: cn.delta.stop_details?.category ?? null,
                  apiRefusalExplanation: cn.delta.stop_details?.explanation ?? null,
                },
                  yield sd);
              if (Mr === "max_tokens")
                (G("tengu_max_tokens_reached", {
                  max_tokens: Re,
                }),
                  yield jl({
                    content: `${Eb}: Claude's response exceeded the ${Re} output token maximum. To configure this behavior, set the CLAUDE_CODE_MAX_OUTPUT_TOKENS environment variable.`,
                    apiError: "max_output_tokens",
                    error: "max_output_tokens",
                  }));
              if (Mr === "model_context_window_exceeded")
                (G("tengu_context_window_exceeded", {
                  max_tokens: Re,
                  output_tokens: Hn.output_tokens,
                }),
                  yield jl({
                    content: `${Eb}: The model has reached its context window limit.`,
                    apiError: "max_output_tokens",
                    error: "max_output_tokens",
                  }));
              break;
            }
            case "message_stop":
              ((Gs = false), gt("stream_completed", le ?? null, Hn));
              break;
          }
          if (cn.type === "content_block_stop" && rs.has(cn.index)) continue;
          ((Qn = true),
            yield {
              type: "stream_event",
              event: cn,
              ...(cn.type === "message_start"
                ? {
                    ttftMs: en,
                    ...(Dn
                      ? {
                          requestSentAtMs: Dn,
                        }
                      : void 0),
                  }
                : void 0),
            });
        }
        if ((bs(), o.aborted && !Yn)) {
          gt("aborted", le ?? null, null);
          let cn = ji();
          if (cn) yield cn;
          let hr = To();
          if (hr) yield hr;
          if (ze)
            G("tengu_advisor_tool_interrupted", {
              model: s.model,
              advisor_model: y ?? "unknown",
            });
          return;
        }
        if (Yn) {
          let cn = Xn !== null ? Math.round(performance.now() - Xn) : -1;
          throw (
            In("info", "cli_stream_loop_exited_after_watchdog_clean"),
            G("tengu_stream_loop_exited_after_watchdog", {
              request_id: le ?? "unknown",
              exit_delay_ms: cn,
              exit_path: We("clean"),
              model: s.model,
            }),
            (Xn = null),
            Error("Stream idle timeout - no chunks received")
          );
        }
        if (!nn || (jt.length === 0 && !Mr))
          throw (
            T(
              !nn
                ? "Stream completed without receiving message_start event - triggering non-streaming fallback"
                : "Stream completed with message_start but no content blocks completed - triggering non-streaming fallback",
              {
                level: "error",
              },
            ),
            G("tengu_stream_no_events", {
              model: s.model,
              request_id: le ?? "unknown",
            }),
            Error("Stream ended without receiving any events")
          );
        if (ot > 0)
          (T(
            `Streaming completed with ${ot} stall(s), total stall time: ${(qe / 1000).toFixed(1)}s`,
            {
              level: "warn",
            },
          ),
            G("tengu_streaming_stall_summary", {
              stall_count: ot,
              total_stall_time_ms: qe,
              model: s.model,
              request_id: le ?? "unknown",
            }));
        if (WX())
          sca(
            s.querySource,
            Hn.cache_read_input_tokens,
            Hn.cache_creation_input_tokens,
            e,
            s.agentId,
            le,
            c,
          );
        let zt = ue;
        if (zt)
          (R1n(
            zt.headers,
            s.model,
            (Sy(s.model) || rU(s.model)) &&
              Hn.input_tokens + Hn.cache_read_input_tokens + Hn.cache_creation_input_tokens > Pte,
          ),
            (Ne = zt.headers));
      } catch (us) {
        (bs(), Ce());
        {
          let ca = ji();
          if (ca) yield ca;
        }
        if (!Yn && us instanceof TCn)
          ((Yn = true),
            (Xn = performance.now()),
            T(`Streaming idle timeout (byte-level): ${us.message}, aborting stream`, {
              level: "error",
            }),
            In("error", "cli_streaming_idle_timeout"),
            G("tengu_streaming_idle_timeout", {
              model: s.model,
              request_id: le ?? "unknown",
              timeout_ms: us.idleMs,
              tier: We("byte"),
              bytes_received_before_stall: us.bytesReceived,
              time_to_first_byte_ms: us.ttfbMs,
              body_read_pending: us.bodyReadPending,
              slept_ms: us.sleptMs,
              cf_ray: us.cfRay,
            }));
        if (Yn && Xn !== null) {
          let ca = Math.round(performance.now() - Xn);
          (In("info", "cli_stream_loop_exited_after_watchdog_error"),
            G("tengu_stream_loop_exited_after_watchdog", {
              request_id: le ?? "unknown",
              exit_delay_ms: ca,
              exit_path: We("error"),
              error_name: us instanceof Error ? us.name : We("unknown"),
              model: s.model,
            }));
        }
        if (us instanceof tf) {
          if (o.aborted) {
            gt("aborted", le ?? null, null);
            let ca = ji();
            if (ca) yield ca;
            let _p = To();
            if (_p) yield _p;
            if ((T(`Streaming aborted by user: ${be(us)}`), ze))
              G("tengu_advisor_tool_interrupted", {
                model: s.model,
                advisor_model: y ?? "unknown",
              });
            throw us;
          } else if (!Yn)
            throw (
              T(`Streaming timeout (SDK abort): ${us.message}`, {
                level: "error",
              }),
              new DK({
                message: "Request timed out",
              })
            );
        }
        let X = tF(us),
          Se = X !== null && que.has(X.code),
          qe = ee?.classifyStreamError(us) ?? false,
          ot = $aa({
            connDetails: X,
            isStaleConnection: Se,
            isContextHintSse: qe,
            streamIdleAborted: Yn,
          }),
          zt = us instanceof Error ? (Zos(us) ?? We("none")) : $e(typeof us),
          cn = us instanceof Error ? (nss(us.constructor?.name) ?? We("none")) : We("none"),
          hr = ess(X?.code) ?? We("none"),
          Tr =
            ut(process.env.CLAUDE_CODE_DISABLE_NONSTREAMING_FALLBACK) ||
            at("tengu_disable_streaming_to_non_streaming_fallback", false),
          Br = Yn
            ? Error(
                jt.length > 0
                  ? "Stream idle timeout - partial response received"
                  : "Stream idle timeout - no chunks received",
              )
            : us;
        if (jt.some((ca) => ca.message.content.some((_p) => !Pj(_p))) || gr) {
          if (Yn || (Se && X)) {
            let ca = Yn,
              _p = jt.some((dd) => dd.message.content.some((Ch) => Ch.type === "tool_use")),
              bg = jt.some((dd) =>
                dd.message.content.some(
                  (Ch) => Ch.type !== "thinking" && Ch.type !== "redacted_thinking" && !Pj(Ch),
                ),
              );
            if (!fo && Mr === null && (ca ? ir < pn : ln < pt)) {
              if (ca)
                (ir++,
                  T(
                    `Stream idle timeout after thinking-only yield \u2014 retrying streaming (${ir}/${pn})`,
                    {
                      level: "warn",
                    },
                  ),
                  G("tengu_streaming_watchdog_retry", {
                    model: Cf(s.model),
                    retry_attempt: ir,
                    request_id: Hr(le),
                    after_thinking_only: true,
                  }));
              else
                (ln++,
                  T(
                    `Stream connection closed (${X?.code}) after thinking-only yield \u2014 retrying streaming (${ln}/${pt})`,
                    {
                      level: "warn",
                    },
                  ),
                  G("tengu_streaming_stale_connection_retry", {
                    model: Cf(s.model),
                    error_code: Dio(X?.code ?? ""),
                    retry_attempt: ln,
                    request_id: Hr(le),
                    after_thinking_only: true,
                  }));
              if (
                (Ie(),
                gt("attempt_errored", le ?? null, null),
                (kr += boe(
                  WY(u, Hn),
                  Hn,
                  s.model,
                  s.querySource,
                  ae,
                  s.spawnedBySkill,
                  s.activeSkill,
                  s.activeMcpServer,
                  s.activeMcpTool,
                )),
                Gs)
              ) {
                if (cs !== null)
                  yield {
                    type: "stream_event",
                    event: {
                      type: "content_block_stop",
                      index: cs,
                    },
                  };
                yield {
                  type: "stream_event",
                  event: {
                    type: "message_stop",
                  },
                };
              }
              if (((le = null), !ca)) await Nn(100 * ln, o);
              continue e;
            }
            let C_ = Mr !== null,
              Xm = _p ? "tool_use" : "end_turn";
            if (!C_) {
              Mr = Xm;
              for (let dd of jt) ((dd.message.usage = Hn), (dd.message.stop_reason = Xm));
            }
            T(
              ca
                ? `Stream idle timeout after ${jt.length} block(s) yielded \u2014 finalizing partial response`
                : `Stream connection closed (${X?.code}) after ${jt.length} block(s) yielded \u2014 finalizing partial response`,
              {
                level: "warn",
              },
            );
            let Zy = bg || fo;
            if (
              (G("tengu_streaming_partial_finalized", {
                model: Cf(s.model),
                blocks_yielded: jt.length,
                has_output: Zy,
                synthesized_stop_reason: $e(Xm),
                cause: We(ca ? "watchdog" : "stale_connection"),
                request_id: Hr(le),
              }),
              yield jl({
                content: Zy
                  ? ca
                    ? `${Eb}: Response stalled mid-stream. The response above may be incomplete.`
                    : `${Eb}: Connection closed mid-response. The response above may be incomplete.`
                  : ca
                    ? `${Eb}: Response stalled while thinking, before producing a response. Try again.`
                    : `${Eb}: Connection closed while thinking, before producing a response. Try again.`,
                error: "server_error",
              }),
              !C_)
            )
              kr += boe(
                WY(u, Hn),
                Hn,
                s.model,
                s.querySource,
                ae,
                s.spawnedBySkill,
                s.activeSkill,
                s.activeMcpServer,
                s.activeMcpTool,
              );
            break e;
          }
          throw (
            G("tengu_streaming_fallback_to_non_streaming", {
              model: s.model,
              error: Br instanceof Error ? Br.name : H4(String(Br)),
              attemptNumber: ge,
              maxOutputTokens: Re,
              thinkingType: $e(n.type),
              fallback_disabled: Tr,
              request_id: le ?? "unknown",
              fallback_cause: We("partial_yield"),
              any_stream_event_yielded: Qn,
            }),
            Br
          );
        }
        if (Xo && !_o && X !== null && !Qn) {
          ((_o = true),
            T(
              `Stream connection error (${X.code}) with anthropic-dispatch-id before first event; retrying without it`,
              {
                level: "warn",
              },
            ),
            G("tengu_dispatch_header_fallback", {
              model: Cf(s.model),
              reason: We("body_phase"),
              request_id: Hr(le),
            }),
            Ie(),
            gt("attempt_errored", le ?? null, null),
            (le = null));
          continue e;
        }
        if (Se && !Qn && ln < pt) {
          (ln++,
            T(
              `Stream connection closed (${X.code}) before first event \u2014 retrying streaming (${ln}/${pt})`,
              {
                level: "warn",
              },
            ),
            G("tengu_streaming_stale_connection_retry", {
              model: s.model,
              error_code: Dio(X.code),
              retry_attempt: ln,
              request_id: le ?? "unknown",
            }),
            Ie(),
            gt("attempt_errored", le ?? null, null),
            (le = null),
            await Nn(100 * ln, o));
          continue e;
        }
        if (Yn && !Qn && ir < pn) {
          (ir++,
            T(`Stream idle timeout before first event \u2014 retrying streaming (${ir}/${pn})`, {
              level: "warn",
            }),
            G("tengu_streaming_watchdog_retry", {
              model: s.model,
              retry_attempt: ir,
              request_id: le ?? "unknown",
            }),
            Ie(),
            gt("attempt_errored", le ?? null, null),
            (le = null));
          continue e;
        }
        if (TTe(us)) {
          if ((Rr++, !fo)) {
            if (Gs)
              kr += boe(
                WY(u, Hn),
                Hn,
                s.model,
                s.querySource,
                ae,
                s.spawnedBySkill,
                s.activeSkill,
                s.activeMcpServer,
                s.activeMcpTool,
              );
            if (Rr < ecr && (bqo(s.querySource) || vTe())) {
              if (
                (T(`Mid-stream 529 before content \u2014 retrying streaming (${Rr}/${ecr})`, {
                  level: "warn",
                }),
                G("tengu_streaming_529_retry", {
                  model: Cf(s.model),
                  retry_attempt: Rr,
                  request_id: Hr(le),
                }),
                Ie(),
                gt("attempt_errored", le ?? null, null),
                Gs)
              ) {
                if (cs !== null)
                  yield {
                    type: "stream_event",
                    event: {
                      type: "content_block_stop",
                      index: cs,
                    },
                  };
                yield {
                  type: "stream_event",
                  event: {
                    type: "message_stop",
                  },
                };
              }
              ((le = null), await Nn(TJ(Rr), o));
              continue e;
            }
            if (s.fallbackModel)
              throw (
                G("tengu_api_opus_fallback_triggered", {
                  original_model: Cf(s.model),
                  fallback_model: Cf(s.fallbackModel),
                  provider: gj(),
                  source: We("mid_stream"),
                }),
                It("api_request", "api_request_fallback_triggered"),
                new NN(s.model, s.fallbackModel, "overloaded", us)
              );
          }
        }
        if (Tr)
          throw (
            T(`Error streaming (non-streaming fallback disabled): ${be(Br)}`, {
              level: "error",
            }),
            G("tengu_streaming_fallback_to_non_streaming", {
              model: s.model,
              error: Br instanceof Error ? Br.name : H4(String(Br)),
              attemptNumber: ge,
              maxOutputTokens: Re,
              thinkingType: $e(n.type),
              fallback_disabled: true,
              request_id: le ?? "unknown",
              fallback_cause: $e(ot),
              error_name: zt,
              error_constructor: cn,
              error_code: hr,
              any_stream_event_yielded: Qn,
            }),
            Br
          );
        (T(`Error streaming, falling back to non-streaming mode: ${be(Br)}`, {
          level: "error",
        }),
          (fe = true));
        {
          let ca = await ee?.onStreamFallback(B, le ?? void 0);
          if (ca) {
            if (((B = ca.messages), ca.clearedIds.size > 0))
              s.onHintCleared?.(ca.clearedIds, ca.clearedContent);
          }
        }
        if (s.onStreamingFallback) s.onStreamingFallback();
        (G("tengu_streaming_fallback_to_non_streaming", {
          model: s.model,
          error: Br instanceof Error ? Br.name : H4(String(Br)),
          attemptNumber: ge,
          maxOutputTokens: Re,
          thinkingType: $e(n.type),
          fallback_disabled: false,
          request_id: le ?? "unknown",
          fallback_cause: $e(ot),
          error_name: zt,
          error_constructor: cn,
          error_code: hr,
          any_stream_event_yielded: Qn,
        }),
          In("info", "cli_nonstreaming_fallback_started"),
          G("tengu_nonstreaming_fallback_started", {
            request_id: le ?? "unknown",
            model: s.model,
            fallback_cause: $e(ot),
          }),
          gt("attempt_errored", le ?? null, null),
          (He = le),
          yield {
            type: "streaming_fallback_began",
          });
        let {
          message: oi,
          requestId: Pa,
          creditCode: nc,
        } = yield* jac(
          {
            model: s.model,
            source: s.querySource,
            agentContext: s.agentContext,
            llmSpan: Ee,
          },
          {
            model: s.model,
            fallbackModel: s.fallbackModel,
            thinkingConfig: n,
            ...(sc() && {
              fastMode: J,
            }),
            signal: o,
            initialConsecutive529Errors: TTe(us) ? Rr : 0,
            querySource: s.querySource,
            onRetryStatus: s.onRetryStatus,
            onApiError: (ca) => {
              let _p = sHn(ca, s.model, s.querySource);
              if (_p === aMt) return;
              if (_p !== null) return _p;
              return Nt(ca, "sync");
            },
          },
          vt,
          (ca, _p, bg) => {
            ((ge = ca), (Re = bg));
          },
          (ca) => {
            (vpn(ca, s.querySource), nZn(ca, s.querySource));
          },
          le,
        );
        ((le = Pa),
          G("tengu_nonstreaming_fallback_success", {
            model: Cf(s.model),
            request_id: Hr(Pa) ?? We("unknown"),
            originating_request_id: Hr(He) ?? We("unknown"),
            fallback_cause: $e(ot),
            attempt: ge,
          }),
          (Tt = oi.diagnostics?.cache_miss_reason));
        let Qp = Fn(oi),
          sd = {
            message: {
              ...oi,
              content: dZt(Qp.content, r, s.agentId, {
                requestId: le ?? void 0,
                messageId: oi.id,
              }),
              usage: Zoe(xb, oi.usage),
            },
            requestId: le ?? void 0,
            ...VU(
              s.querySource,
              s.spawnedBySkill,
              s.activeSkill,
              s.activeMcpServer,
              s.activeMcpTool,
            ),
            type: "assistant",
            uuid: ZHt.randomUUID(),
            timestamp: new Date().toISOString(),
            ...false,
            ...(y && {
              advisorModel: y,
            }),
          };
        if ((jt.push(sd), (Te = sd), yield sd, yield* xi(Qp, oi, nc))) return;
      } finally {
        bs();
      }
      gt("stream_completed", le ?? null, Mr !== null ? Hn : null);
      break e;
    }
  } catch (En) {
    if ((gt(o.aborted ? "aborted" : "attempt_errored", le ?? null, null), En instanceof NN))
      throw En;
    if (
      !fe &&
      En instanceof tO &&
      En.originalError instanceof Fo &&
      En.originalError.status === 404
    ) {
      let Jn = En.originalError.requestID ?? "unknown";
      if (
        (T("Streaming endpoint returned 404, falling back to non-streaming mode", {
          level: "warn",
        }),
        (fe = true),
        ee?.strip(),
        s.onStreamingFallback)
      )
        s.onStreamingFallback();
      (G("tengu_streaming_fallback_to_non_streaming", {
        model: s.model,
        error: We("404_stream_creation"),
        attemptNumber: ge,
        maxOutputTokens: Re,
        thinkingType: $e(n.type),
        request_id: Jn,
        fallback_cause: We("404_stream_creation"),
        any_stream_event_yielded: false,
      }),
        In("info", "cli_nonstreaming_fallback_started"),
        G("tengu_nonstreaming_fallback_started", {
          request_id: Hr(Jn),
          model: Cf(s.model),
          fallback_cause: We("404_stream_creation"),
        }),
        yield {
          type: "streaming_fallback_began",
        });
      try {
        He = le ?? (Jn !== "unknown" ? Jn : null);
        let {
          message: Qn,
          requestId: gr,
          creditCode: fo,
        } = yield* jac(
          {
            model: s.model,
            source: s.querySource,
            agentContext: s.agentContext,
            llmSpan: Ee,
          },
          {
            model: s.model,
            fallbackModel: s.fallbackModel,
            thinkingConfig: n,
            ...(sc() && {
              fastMode: J,
            }),
            signal: o,
            onRetryStatus: s.onRetryStatus,
            onApiError: (la) => {
              let Fi = sHn(la, s.model, s.querySource);
              if (Fi === aMt) return;
              if (Fi !== null) return Fi;
              return Nt(la, "sync");
            },
          },
          vt,
          (la, Fi, xn) => {
            ((ge = la), (Re = xn));
          },
          (la) => {
            (vpn(la, s.querySource), nZn(la, s.querySource));
          },
          Jn,
        );
        ((le = gr),
          G("tengu_nonstreaming_fallback_success", {
            model: Cf(s.model),
            request_id: Hr(gr) ?? We("unknown"),
            originating_request_id: Hr(He) ?? We("unknown"),
            fallback_cause: We("404_stream_creation"),
            attempt: ge,
          }),
          (Tt = Qn.diagnostics?.cache_miss_reason));
        let cs = Fn(Qn),
          Gs = {
            message: {
              ...Qn,
              content: dZt(cs.content, r, s.agentId, {
                requestId: le ?? void 0,
                messageId: Qn.id,
              }),
              usage: Zoe(xb, Qn.usage),
            },
            requestId: le ?? void 0,
            ...VU(
              s.querySource,
              s.spawnedBySkill,
              s.activeSkill,
              s.activeMcpServer,
              s.activeMcpTool,
            ),
            type: "assistant",
            uuid: ZHt.randomUUID(),
            timestamp: new Date().toISOString(),
            ...false,
            ...(y && {
              advisorModel: y,
            }),
          };
        if ((jt.push(Gs), (Te = Gs), yield Gs, yield* xi(cs, Qn, fo))) return;
      } catch (Qn) {
        if (Qn instanceof NN) throw Qn;
        T(`Non-streaming fallback also failed: ${be(Qn)}`, {
          level: "error",
        });
        let gr = Qn,
          fo = s.model;
        if (Qn instanceof tO) ((gr = Qn.originalError), (fo = Qn.retryContext.model));
        if (gr instanceof tf) {
          Ie();
          return;
        }
        if (gr instanceof Fo) L1n(gr);
        let cs =
          le ||
          (gr instanceof Fo ? gr.requestID : void 0) ||
          (gr instanceof Fo ? gr.error?.request_id : void 0);
        (dMo({
          error: gr,
          model: fo,
          messageCount: B.length,
          messageTokens: OX(B),
          durationMs: Math.max(0, Math.round(performance.now() - pe)),
          durationMsIncludingRetries: Math.max(0, Math.round(performance.now() - me)),
          attempt: ge,
          requestId: cs,
          clientRequestId: ye,
          didFallBackToNonStreaming: fe,
          queryTracking: s.queryTracking,
          querySource: s.querySource,
          messageClientPlatform: s.messageClientPlatform,
          llmSpan: Ee,
          fastMode: un,
          previousRequestId: l,
          effort: ae,
          agentContext: s.agentContext,
          attribution: VU(
            s.querySource,
            s.spawnedBySkill,
            s.activeSkill,
            s.activeMcpServer,
            s.activeMcpTool,
          ),
          promptTooLongIsHandled: s.promptTooLongIsHandled,
        }),
          yield G1n(gr, fo, {
            messages: e,
            messagesForAPI: B,
            requestId: cs,
          }),
          Ie());
        return;
      }
    } else {
      T(`Error in API request: ${be(En)}`, {
        level: "error",
      });
      let Jn = En,
        Qn = s.model;
      if (En instanceof tO) ((Jn = En.originalError), (Qn = En.retryContext.model));
      if (Jn instanceof tf) {
        Ie();
        return;
      }
      if (Jn instanceof Fo) L1n(Jn);
      let gr =
        le ||
        (Jn instanceof Fo ? Jn.requestID : void 0) ||
        (Jn instanceof Fo ? Jn.error?.request_id : void 0);
      (dMo({
        error: Jn,
        model: Qn,
        messageCount: B.length,
        messageTokens: OX(B),
        durationMs: Math.max(0, Math.round(performance.now() - pe)),
        durationMsIncludingRetries: Math.max(0, Math.round(performance.now() - me)),
        attempt: ge,
        requestId: gr,
        clientRequestId: ye,
        didFallBackToNonStreaming: fe,
        queryTracking: s.queryTracking,
        querySource: s.querySource,
        messageClientPlatform: s.messageClientPlatform,
        llmSpan: Ee,
        fastMode: un,
        previousRequestId: l,
        effort: ae,
        agentContext: s.agentContext,
        attribution: VU(
          s.querySource,
          s.spawnedBySkill,
          s.activeSkill,
          s.activeMcpServer,
          s.activeMcpTool,
        ),
        promptTooLongIsHandled: s.promptTooLongIsHandled,
      }),
        yield G1n(Jn, Qn, {
          messages: e,
          messagesForAPI: B,
          requestId: gr,
        }),
        Ie());
      return;
    }
  } finally {
    if (
      (KXn("api_call", s.agentId),
      gt(o.aborted ? "aborted" : "attempt_errored", le ?? null, null),
      Ie(),
      Te)
    ) {
      let En = Te.message.usage;
      if (((Hn = Zoe(xb, En)), (Mr = Te.message.stop_reason), Mr === "refusal"))
        lYt({
          model: u,
          requestId: le || void 0,
          querySource: s.querySource,
          effort: ae,
          fastMode: un,
          attempt: ge,
          attribution: VU(
            s.querySource,
            s.spawnedBySkill,
            s.activeSkill,
            s.activeMcpServer,
            s.activeMcpTool,
          ),
          serverFallbackHop: false,
          stopDetails: Te.message.stop_details ?? null,
        });
      let Sn = Kn?.servedFallbackModel !== void 0,
        Jn =
          Sn && Kn !== void 0
            ? wPo(
                Kn.entries,
                {
                  speed: Hn.speed,
                  serverToolUse: Hn.server_tool_use,
                },
                Mr,
              )
            : WY(u, Hn);
      kr += boe(
        Jn,
        Hn,
        Sn ? (s.serverRefusalFallback?.model ?? s.model) : s.model,
        s.querySource,
        ae,
        s.spawnedBySkill,
        s.activeSkill,
        s.activeMcpServer,
        s.activeMcpTool,
      );
    }
  }
  if (
    le &&
    YY(s.agentContext) &&
    (s.querySource.startsWith("repl_main_thread") || s.querySource === "sdk")
  )
    y_r(le);
  if (re && Tt)
    ica(Tt, {
      requestId: le,
      previousMessageId: c,
      model: s.model,
      is1hCacheTTL: V === "1h",
      querySource: s.querySource,
      queryDepth: s.queryTracking?.depth,
    });
  let Gn = B.length,
    cr = OX(B),
    Lt = Rj() ? void 0 : pkl(B, s.model);
  (s.getToolPermissionContext().then((En) => {
    fkl({
      model: jt[0]?.message.model ?? nn?.model ?? s.model,
      preNormalizedModel: s.model,
      usage: Hn,
      start: pe,
      startIncludingRetries: me,
      attempt: ge,
      messageCount: Gn,
      messageTokens: cr,
      requestId: le ?? null,
      clientRequestId: fe ? void 0 : ye,
      firstAttemptRequestId: He ?? null,
      stopReason: Mr,
      ttftMs: en,
      didFallBackToNonStreaming: fe,
      querySource: s.querySource,
      messageClientPlatform: s.messageClientPlatform,
      headers: Ne,
      costUSD: kr,
      queryTracking: s.queryTracking,
      permissionMode: En.mode,
      newMessages: jt,
      requestContentTelemetry: Lt,
      llmSpan: Ee,
      globalCacheStrategy: k,
      requestSetupMs: pe - me,
      attemptStartTimes: he,
      fastMode: un,
      previousRequestId: l,
      betas: Ve,
      effort: ae,
      agentContext: s.agentContext,
      attribution: VU(
        s.querySource,
        s.spawnedBySkill,
        s.activeSkill,
        s.activeMcpServer,
        s.activeMcpTool,
      ),
    });
  }),
    Ie());
}
function xnm(e) {
  if (!e) return;
  try {
    if (!e.controller.signal.aborted) e.controller.abort();
  } catch {}
}
function Zoe(e, t) {
  if (!t)
    return {
      ...e,
    };
  let n = t.cache_creation,
    r = (n?.ephemeral_1h_input_tokens ?? 0) + (n?.ephemeral_5m_input_tokens ?? 0),
    o =
      r > 0
        ? {
            ephemeral_1h_input_tokens:
              n?.ephemeral_1h_input_tokens ?? e.cache_creation.ephemeral_1h_input_tokens,
            ephemeral_5m_input_tokens:
              n?.ephemeral_5m_input_tokens ?? e.cache_creation.ephemeral_5m_input_tokens,
          }
        : {
            ...e.cache_creation,
          };
  return {
    input_tokens: t.input_tokens !== null && t.input_tokens > 0 ? t.input_tokens : e.input_tokens,
    cache_creation_input_tokens:
      t.cache_creation_input_tokens !== null && t.cache_creation_input_tokens > 0
        ? t.cache_creation_input_tokens
        : r > 0
          ? r
          : e.cache_creation_input_tokens,
    cache_read_input_tokens:
      t.cache_read_input_tokens !== null && t.cache_read_input_tokens > 0
        ? t.cache_read_input_tokens
        : e.cache_read_input_tokens,
    output_tokens: t.output_tokens ?? e.output_tokens,
    server_tool_use: {
      web_search_requests:
        t.server_tool_use?.web_search_requests ?? e.server_tool_use.web_search_requests,
      web_fetch_requests:
        t.server_tool_use?.web_fetch_requests ?? e.server_tool_use.web_fetch_requests,
    },
    service_tier: t.service_tier ?? e.service_tier,
    cache_creation: o,
    inference_geo: t.inference_geo ?? e.inference_geo,
    iterations: t.iterations ?? e.iterations,
    speed: t.speed ?? e.speed,
  };
}
function hqo(e, t) {
  if (!t)
    return {
      ...e,
    };
  let n = t.cache_creation;
  return {
    ...e,
    input_tokens: t.input_tokens ?? e.input_tokens,
    output_tokens: t.output_tokens ?? e.output_tokens,
    cache_read_input_tokens: t.cache_read_input_tokens ?? e.cache_read_input_tokens,
    cache_creation_input_tokens:
      t.cache_creation_input_tokens ??
      (n
        ? (n.ephemeral_1h_input_tokens ?? 0) + (n.ephemeral_5m_input_tokens ?? 0)
        : e.cache_creation_input_tokens),
    ...(n && {
      cache_creation: {
        ephemeral_1h_input_tokens: n.ephemeral_1h_input_tokens ?? 0,
        ephemeral_5m_input_tokens: n.ephemeral_5m_input_tokens ?? 0,
      },
    }),
  };
}
function aZn(e, t) {
  return {
    input_tokens: e.input_tokens + t.input_tokens,
    cache_creation_input_tokens: e.cache_creation_input_tokens + t.cache_creation_input_tokens,
    cache_read_input_tokens: e.cache_read_input_tokens + t.cache_read_input_tokens,
    output_tokens: e.output_tokens + t.output_tokens,
    server_tool_use: {
      web_search_requests:
        e.server_tool_use.web_search_requests + t.server_tool_use.web_search_requests,
      web_fetch_requests:
        e.server_tool_use.web_fetch_requests + t.server_tool_use.web_fetch_requests,
    },
    service_tier: t.service_tier,
    cache_creation: {
      ephemeral_1h_input_tokens:
        e.cache_creation.ephemeral_1h_input_tokens + t.cache_creation.ephemeral_1h_input_tokens,
      ephemeral_5m_input_tokens:
        e.cache_creation.ephemeral_5m_input_tokens + t.cache_creation.ephemeral_5m_input_tokens,
    },
    inference_geo: t.inference_geo,
    iterations: t.iterations,
    speed: t.speed,
  };
}
function knm(e, t, n, r = false, o) {
  let s = (u) => {
      let d = u;
      while (d >= 0 && e[d].type === "api_system") d--;
      return d;
    },
    i = s(e.length - 1);
  if (r) i = s(i - 1);
  let a = new Set();
  if (i >= 0) a.add(i);
  let l = false;
  if (hSt()) {
    if (o) {
      let u = e.findLastIndex((d) => d.uuid === o);
      if (u >= 0 && u <= i) {
        let d = r && u === i && CIl() ? s(u - 1) : u;
        if (d >= 0) (a.add(d), (l = true));
      }
    } else if (!r) {
      let u = s(i - 1);
      if (u >= 0) (a.add(u), (l = true));
    }
  }
  return (
    G("tengu_api_cache_breakpoints", {
      totalMessageCount: e.length,
      cachingEnabled: t,
      skipCacheWrite: r,
      forkPointPinned: l,
      markerCount: a.size,
    }),
    e.map((u, d) => {
      let p = a.has(d);
      if (u.type === "user") return hnm(u, p, t, n);
      if (u.type === "api_system")
        return {
          role: "system",
          content: u.message.content,
        };
      return ynm(u, p, t, n);
    })
  );
}
function Rnm(e, t, n) {
  return dqo(e, {
    skipGlobalCacheForSystemPrompt: n?.skipGlobalCacheForSystemPrompt,
  }).map((r) => ({
    type: "text",
    text: r.text,
    ...(t &&
      r.cacheScope !== null && {
        cache_control: Toe({
          scope: r.cacheScope,
          ttl: n?.cacheTtl,
        }),
      }),
  }));
}
async function R$({
  systemPrompt: e = Sc([]),
  userPrompt: t,
  outputFormat: n,
  signal: r,
  options: o,
}) {
  return (
    await EZn(
      [
        Rn({
          content: e.map((i) => ({
            type: "text",
            text: i,
          })),
        }),
        Rn({
          content: t,
        }),
      ],
      async () => {
        let i = [
          Rn({
            content: t,
          }),
        ];
        return [
          await yYe({
            messages: i,
            systemPrompt: e,
            thinkingConfig: {
              type: "disabled",
            },
            tools: [],
            signal: r,
            options: {
              ...o,
              stickyBetas: o.stickyBetas ?? RR(u0()),
              agentContext: o.agentContext,
              model: Fw(),
              enablePromptCaching: o.enablePromptCaching ?? false,
              outputFormat: n,
              async getToolPermissionContext() {
                return b1();
              },
            },
          }),
        ];
      },
    )
  )[0];
}
async function hbt({
  systemPrompt: e = Sc([]),
  userPrompt: t,
  outputFormat: n,
  signal: r,
  options: o,
}) {
  return (
    await EZn(
      [
        Rn({
          content: e.map((i) => ({
            type: "text",
            text: i,
          })),
        }),
        Rn({
          content: t,
        }),
      ],
      async () => {
        let i = [
          Rn({
            content: t,
          }),
        ];
        return [
          await yYe({
            messages: i,
            systemPrompt: e,
            thinkingConfig: {
              type: "disabled",
            },
            tools: [],
            signal: r,
            options: {
              ...o,
              stickyBetas: o.stickyBetas ?? RR(u0()),
              agentContext: o.agentContext,
              enablePromptCaching: o.enablePromptCaching ?? false,
              outputFormat: n,
              async getToolPermissionContext() {
                return b1();
              },
            },
          }),
        ];
      },
    )
  )[0];
}
function Dnm(e, t) {
  let n = Math.min(e.max_tokens, t),
    r = {
      ...e,
    };
  if (r.thinking?.type === "enabled" && r.thinking.budget_tokens)
    r.thinking = {
      ...r.thinking,
      budget_tokens: Math.min(r.thinking.budget_tokens, n - 1),
    };
  return {
    ...r,
    max_tokens: n,
  };
}
function qct(e) {
  let t = Xxe(e);
  return Fue(
    "CLAUDE_CODE_MAX_OUTPUT_TOKENS",
    process.env.CLAUDE_CODE_MAX_OUTPUT_TOKENS,
    t.default,
    t.upperLimit,
  ).effective;
}
var ZHt,
  fqo,
  unm = "anthropic-dispatch-id",
  dnm = "v2s",
  Tnm = 10000 /* 1e4 */,
  gqo = 20000,
  vnm = 30,
  Lnm = 64000;
