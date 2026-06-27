// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module co
// matched 2.1.88 source: src/utils/messages.ts
// class=partial  jaccard=0.0645  score=0.2762  fileCov=0.0776
// note: low-confidence suggestion: src/utils/messages.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var co = E(() => {
  D2();
  Gst();
  kt();
  Du();
  fb();
  G4();
  Nht();
  Uh();
  Un();
  tP();
  Awo();
  O6n();
  _oe();
  sA();
  Vv();
  Vw();
  Lx();
  fn();
  es();
  sF();
  fre();
  Jt();
  vAe();
  B$o();
  G1();
  RN();
  R8e();
  xMe();
  lf();
  Ppe();
  ft();
  np();
  Pqe();
  ii();
  $pe();
  jv();
  Fze();
  je();
  jZe();
  es();
  Rd();
  vn();
  QH();
  qlc();
  sr();
  bk();
  OCo();
  GX();
  IX();
  IXn();
  IXn();
  rO = require("crypto");
  a5e = new Set([_N, Jv, uQ, d6e, zte]);
  Q4o = `<${KC}>Set model to `;
  LAe = {
    siblingToolUseIDs: new Map(),
    progressMessagesByToolUseID: new Map(),
    inProgressHookCounts: new Map(),
    resolvedHookCounts: new Map(),
    toolResultByToolUseID: new Map(),
    assistantUuidByToolUseID: new Map(),
    firstTextBlockUuidByMessageID: new Map(),
    toolUseByToolUseID: new Map(),
    normalizedMessageCount: 0,
    resolvedToolUseIDs: new Set(),
    erroredToolUseIDs: new Set()
  }, _or = Object.freeze(new Set());
  $rm = new Set(["image", "document"]);
  qrm = /<(commit_analysis|context|function_analysis|pr_analysis)>.*?<\/\1>\n?/gs;
  Yrm = new Set(["claude-in-chrome"]), Xrm = new Set(["You used a single tool call this turn. Prefer browser_batch to execute multiple actions in one call \u2014 it is significantly faster. Batch your next sequence of clicks, types, navigations, and screenshots together."]);
  tcc = {
    directory: e => yp([gZt(cl.name, {
      command: `ls ${ja([e.path])}`,
      description: `Lists files in ${e.path}`
    }), mZt(cl, {
      stdout: e.content,
      stderr: "",
      interrupted: !1
    })]),
    edited_text_file: e => yp([Rn({
      content: e.snippet === "" ? `Note: ${e.filename} was modified, either by the user or by a linter. This change was intentional, so make sure to take it into account as you proceed (ie. don't revert it unless the user asks you to). Don't tell the user this, since they are already aware. The diff was omitted because other modified files in this turn already exceeded the snippet budget; use the Read tool if you need the current content.` : `Note: ${e.filename} was modified, either by the user or by a linter. This change was intentional, so make sure to take it into account as you proceed (ie. don't revert it unless the user asks you to). Don't tell the user this, since they are already aware. Here are the relevant changes (shown with line numbers):
${e.snippet}`,
      isMeta: !0
    })]),
    compact_file_reference: e => yp([Rn({
      content: `Note: ${e.filename} was read before the last conversation was summarized, but the contents are too large to include. Use ${Vg.name} tool if you need to access it.`,
      isMeta: !0
    })]),
    pdf_reference: e => yp([Rn({
      content: `PDF file: ${e.filename} (${e.pageCount} pages, ${Ra(e.fileSize)}). This PDF is too large to read all at once. You MUST use the ${Ds} tool with the pages parameter to read specific page ranges (e.g., pages: "1-5"). Do NOT call ${Ds} without the pages parameter or it will fail. Start by reading the first few pages to understand the structure, then read more as needed. Maximum 20 pages per request.`,
      isMeta: !0
    })]),
    selected_lines_in_ide: e => yp([Rn({
      content: `The user selected the lines ${e.lineStart} to ${e.lineEnd} from ${e.filename}:
${ecc(e.content)}

This may or may not be related to the current task.`,
      isMeta: !0
    })]),
    selected_lines_in_diff: e => yp([Rn({
      content: `The user selected the following ${e.lineCount} ${e.lineCount === 1 ? "line" : "lines"} from the diff view:
${ecc(e.content)}

This may or may not be related to the current task.`,
      isMeta: !0
    })]),
    opened_file_in_ide: e => yp([Rn({
      content: `The user opened the file ${e.filename} in the IDE. This may or may not be related to the current task.`,
      isMeta: !0
    })]),
    plan_file_reference: e => yp([Rn({
      content: `A plan file exists from plan mode at: ${e.planFilePath}

Plan contents:

${e.planContent}

If this plan is relevant to the current work and not already complete, continue working on it.`,
      isMeta: !0
    })]),
    nested_memory: e => yp([Rn({
      content: `Contents of ${e.content.path}:

${e.content.content}`,
      isMeta: !0
    })]),
    agent_mention: e => yp([Rn({
      content: `The user has expressed a desire to invoke the agent "${e.agentType}". Please invoke the agent appropriately, passing in the required context to it. `,
      isMeta: !0
    })]),
    skill_listing: e => {
      if (!e.content) return [];
      return yp([Rn({
        content: `The following skills are available for use with the Skill tool:

${e.content}`,
        isMeta: !0
      })]);
    },
    output_style: e => {
      let t = yJ[e.style];
      if (!t) return [];
      return yp([Rn({
        content: `${t.name} output style is active. ${e.turnReminder ?? "Remember to follow the specific guidelines for this style."}`,
        isMeta: !0
      })]);
    },
    critical_system_reminder: e => yp([Rn({
      content: e.content,
      isMeta: !0
    })]),
    plan_mode_exit: e => {
      let t = e.planExists ? ` The plan file is located at ${e.planFilePath} if you need to reference it.` : "";
      return yp([Rn({
        content: `## Exited Plan Mode

You have exited plan mode. You can now make edits, run tools, and take actions.${t}`,
        isMeta: !0
      })]);
    },
    auto_mode_exit: () => yp([Rn({
      content: `## Exited Auto Mode

You have exited auto mode. The user may now want to interact more directly. You should ask clarifying questions when the approach is ambiguous rather than making assumptions.`,
      isMeta: !0
    })]),
    token_usage: e => [Rn({
      content: aw(`Token usage: ${e.used}/${e.total}; ${e.remaining} remaining`),
      isMeta: !0
    })],
    total_tokens_reminder: e => [Rn({
      content: aw(e.text),
      isMeta: !0
    })],
    budget_usd: e => [Rn({
      content: aw(`USD budget: $${e.used}/$${e.total}; $${e.remaining} remaining`),
      isMeta: !0
    })],
    output_token_usage: e => {
      let t = e.budget !== null ? `${ou(e.turn)} / ${ou(e.budget)}` : ou(e.turn);
      return [Rn({
        content: aw(`Output tokens \u2014 turn: ${t} \xB7 session: ${ou(e.session)}`),
        isMeta: !0
      })];
    },
    hook_blocking_error: e => [Rn({
      content: aw(`${e.hookName} hook blocking error from command: "${e.blockingError.command}": ${e.blockingError.blockingError}`),
      isMeta: !0
    })],
    hook_additional_context: e => {
      if (e.content.length === 0) return [];
      return [Rn({
        content: aw(`${e.hookName} hook additional context: ${e.content.join(`
`)}`),
        isMeta: !0
      })];
    },
    hook_stopped_continuation: e => [Rn({
      content: aw(`${e.hookName} hook stopped continuation: ${e.message}`),
      isMeta: !0
    })],
    date_change: e => yp([Rn({
      content: `The date has changed. Today's date is now ${e.newDate}. DO NOT mention this to the user explicitly because they are already aware.`,
      isMeta: !0
    })]),
    ultrathink_effort: () => yp([Rn({
      content: 'The user included the keyword "ultrathink", requesting deeper reasoning on this turn. Reason as thoroughly as the task warrants.',
      isMeta: !0
    })]),
    workflow_keyword_request: () => yp([Rn({
      content: 'The user included the keyword "ultracode", opting this turn into multi-agent orchestration \u2014 use the Workflow tool to fulfill the request.',
      isMeta: !0
    })]),
    ultra_effort_enter: ({
      reminderType: e
    }) => yp([Rn({
      content: e === "full" ? "Ultracode is on: optimize for the most exhaustive, correct answer \u2014 not the fastest or cheapest. Use the Workflow tool on every substantive task; token cost is not a constraint. See the Workflow tool's **Ultracode** section and quality patterns. Solo only on conversational/trivial turns." : "Ultracode is still on \u2014 use the Workflow tool; see its Ultracode section.",
      isMeta: !0
    })]),
    ultra_effort_exit: () => yp([Rn({
      content: "Ultracode is off \u2014 the Workflow tool's standard opt-in rule applies again.",
      isMeta: !0
    })]),
    context_tip: () => [],
    dynamic_skill: () => [],
    already_read_file: () => [],
    command_permissions: () => [],
    edited_image_file: () => [],
    hook_cancelled: () => [],
    hook_error_during_execution: () => [],
    hook_non_blocking_error: () => [],
    hook_system_message: () => [],
    hook_permission_decision: () => [],
    hook_deferred_tool: () => [],
    goal_status: () => [],
    structured_output: () => [],
    max_turns_reached: () => [],
    teammate_shutdown_batch: () => []
  };
  iom = {
    dream: "Background memory consolidation"
  };
});
function _cc() {
  return process.env.CLAUDE_CODE_HOST_AUTH_ENV_VAR || "ANTHROPIC_AUTH_TOKEN";
}
function bqo(e) {
  if (e === void 0) return !0;
  if (e.startsWith("agent:")) return !0;
  return Eom.has(e);
}
function vTe() {
  return ut(process.env.CLAUDE_CODE_RETRY_WATCHDOG);
}
function Hcc(e) {
  return TTe(e) || e instanceof Fo && e.status === 429;
}
function SZt(e) {
  return ut(process.env.CLAUDE_CODE_REMOTE) && e instanceof Fo && (e.status === 401 || e.status === 403);
}
function Hom(e) {
  if (!(e instanceof Hx)) return !1;
  let t = tF(e);
  return t !== null && que.has(t.code);
}
async function* tcr(e, t, n) {
  let r = Pom(n),
    o = {
      model: n.model,
      thinkingConfig: n.thinkingConfig,
      ...(sc() && {
        fastMode: n.fastMode
      })
    },
    s = null,
    i = n.initialConsecutive529Errors ?? 0,
    a,
    l = 0,
    c = 0,
    u = 0,
    d = 0,
    p,
    f = new Set(),
    m = !1;
  try {
    for (let g = 1; g <= r + 1; g++) {
      if (n.signal?.aborted) throw new tf();
      let h = Date.now(),
        y = sc() ? o.fastMode && !cle() : !1;
      try {
        let b = Hom(a);
        if (b && at("tengu_disable_keepalive_on_econnreset", !1)) T("Stale connection \u2014 disabling keep-alive for retry"), DOr();
        if (s === null || a instanceof Fo && a.status === 401 || a instanceof Fo && a.status === 407 && x2e() || EZt(a) || Ccc(a) || Icc(a) || b) {
          if (a instanceof Fo && a.status === 401 || EZt(a)) {
            if (!lI() && iH()) await xjr(s?.authToken);
            if (p) {
              if (await ZB(p), Ws()?.accessToken === p) {
                if (cCt() !== null || !SZt(a) && ++u >= yom) throw Le("api_request", "api_request_oauth_refresh_exhausted"), new tO(a, o);
              } else u = 0;
            } else if (uCt() && !(Jl() && _u())) {
              let S = process.env[_cc()],
                A = uCt(),
                v = null;
              try {
                v = await A();
              } catch (C) {
                throw T(`host getHostAuthToken callback failed: ${be(C)}`, {
                  level: "error"
                }), Le("host_auth_401_recovery", "host_auth_callback_failed"), new tO(a, o);
              }
              if (v && v !== S) process.env[_cc()] = v, d = 0, xe("host_auth_401_recovery");else if (++d >= _om) throw Le("host_auth_401_recovery", v === null ? "host_auth_callback_returned_null" : "host_auth_callback_returned_same_token"), new tO(a, o);
            } else if (ut(process.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) && Jl() && !iH() && aI().source !== "apiKeyHelper" && !SZt(a)) throw Le("api_request", "api_request_host_managed_auth_fail"), new tO(a, o);
          }
          s = await e(), p = eS() ? Ws()?.accessToken : void 0;
        }
        let _ = await t(s, g, o);
        return xe("api_request"), _;
      } catch (b) {
        if (b instanceof tO) throw b;
        if (b instanceof tf) throw b;
        a = b, T(`API error (attempt ${g}/${r + 1}): ${b instanceof Fo ? `${b.status} ${b.message}` : be(b)}`, {
          level: "error"
        });
        let _ = await n.onError?.(b);
        if (_ && !f.has(_)) {
          f.add(_), g--;
          continue;
        }
        if ((Scc(b) || Ecc(b) || !vTe() && Com(b)) && n.fallbackModel && n.fallbackModel !== n.model) {
          let k = Scc(b) ? "model_not_found" : Ecc(b) ? "permission_denied" : "server_error";
          throw G("tengu_api_model_not_found_fallback_triggered", {
            original_model: n.model,
            fallback_model: n.fallbackModel,
            provider: gj(),
            reason: $e(k)
          }), new NN(n.model, n.fallbackModel, k, b);
        }
        if (y && !vTe() && b instanceof Fo && (b.status === 429 || TTe(b))) {
          let k = b.headers?.get("anthropic-ratelimit-unified-overage-disabled-reason");
          if (k !== null && k !== void 0) {
            voi(k), o.fastMode = !1;
            continue;
          }
          let D = Nom(b);
          if (D !== null && D < $om) {
            await Nn(D, n.signal, {
              abortError: pVo
            });
            continue;
          }
          let P = Math.max(D ?? Mom, Oom),
            O = TTe(b) ? "overloaded" : "rate_limit";
          if (Eoi(Date.now() + P, O), sc()) o.fastMode = !1;
          continue;
        }
        if (y && wcc(b)) {
          Aoi(), o.fastMode = !1;
          continue;
        }
        if (TTe(b) && !bqo(n.querySource) && !vTe()) throw G("tengu_api_529_background_dropped", {
          query_source: n.querySource
        }), Le("api_request", "api_request_overload_background_dropped"), new tO(b, o);
        let S = mo(n.model);
        if (TTe(b) && (process.env.FALLBACK_FOR_ALL_PRIMARY_MODELS || n.fallbackModel !== void 0 || !bo() && (dte(S) || Qnt(S) || Znt(S)))) {
          if (i++, i >= ecr) {
            if (n.fallbackModel) throw G("tengu_api_opus_fallback_triggered", {
              original_model: n.model,
              fallback_model: n.fallbackModel,
              provider: gj()
            }), It("api_request", "api_request_fallback_triggered"), new NN(n.model, n.fallbackModel, "overloaded", b);
            if (!process.env.IS_SANDBOX && !vTe()) throw G("tengu_api_custom_529_overloaded_error", {}), Le("api_request", "api_request_overload_repeated"), new tO(Error(Rjt), o);
          }
        }
        let A = vTe() && Hcc(b);
        if (g > r && !A) throw Le("api_request", "api_request_retry_exhausted"), new tO(b, o);
        if (SZt(b)) {
          if (c >= gom) throw Le("api_request", "api_request_ccr_auth_exhausted"), new tO(b, o);
          c++;
        }
        if (!(Iom(b) || kom(b) || (await Rom(b))) && (!(b instanceof Fo) || !Lom(b))) {
          let k = b instanceof Fo && (b.status !== void 0 && vom.has(b.status) && !(b.status === 404 && n.isNonStreamingRequest) || b.type === "billing_error" || wom.some(D => D(b)));
          if (b instanceof Fo && b.status !== void 0 && !k && n.fallbackModel && n.fallbackModel !== n.model) {
            let D = b.type;
            throw G("tengu_api_fallback_last_resort", {
              status: b.status,
              errorType: $e(Tom.find(P => P === D) ?? "other"),
              provider: gj(),
              fastMode: o.fastMode ?? !1
            }), It("api_request", "api_request_last_resort_fallback"), new NN(n.model, n.fallbackModel, "last_resort", b);
          }
          throw Le("api_request", "api_request_non_retryable"), new tO(b, o);
        }
        if (b instanceof Fo) {
          let k = vcc(b);
          if (k) {
            let {
                inputTokens: D,
                contextLimit: P
              } = k,
              O = 1000,
              L = Math.max(0, P - D - 1000);
            if (L < mVo) throw ke(Error(`availableContext ${L} is less than FLOOR_OUTPUT_TOKENS ${mVo}`)), b;
            let M = (o.thinkingConfig.type === "enabled" ? o.thinkingConfig.budgetTokens : 0) + 1,
              N = Math.max(mVo, L, M);
            o.maxTokensOverride = N, G("tengu_max_tokens_context_overflow_adjustment", {
              inputTokens: D,
              contextLimit: P,
              adjustedMaxTokens: N,
              attempt: g
            });
            continue;
          }
        }
        let C = Tcc(b),
          x;
        if (A && b instanceof Fo && b.status === 429) l++, x = Bom(b) ?? Math.min(TJ(l, C, bcc), gVo);else if (A) l++, x = Math.min(TJ(l, C, bcc), gVo);else if (SZt(b)) x = hom;else if (x = TJ(g, C), !vTe() && x > Som) throw G("tengu_api_retry_after_too_long", {
          delayMs: x,
          status: b.status,
          provider: gj()
        }), Le("api_request", "api_request_retry_after_too_long"), new tO(b, o);
        let I = A ? l : g;
        if (G("tengu_api_retry", {
          attempt: I,
          delayMs: x,
          error: H4(be(b)),
          status: b.status,
          provider: gj(),
          attempt_duration_ms: Date.now() - h
        }), A) {
          if (x > 60000) G("tengu_api_persistent_retry_wait", {
            status: b.status,
            delayMs: x,
            attempt: I,
            provider: gj()
          });
          let k = x;
          while (k > 0) {
            if (n.signal?.aborted) throw new tf();
            if (b instanceof Fo) {
              let P = Pio(b);
              m = !0, n.onRetryStatus?.({
                kind: "retrying",
                error: P,
                attempt: I,
                maxRetries: r,
                retryInMs: k,
                deadline: Date.now() + k
              }), yield iVo(P, k, I, r);
            }
            let D = Math.min(k, Aom);
            await Nn(D, n.signal, {
              abortError: pVo
            }), k -= D;
          }
          if (g >= r) g = r;
        } else {
          if (b instanceof Fo) {
            let k = Pio(b);
            m = !0, n.onRetryStatus?.({
              kind: "retrying",
              error: k,
              attempt: g,
              maxRetries: r,
              retryInMs: x,
              deadline: Date.now() + x
            }), yield iVo(k, x, g, r);
          }
          await Nn(x, n.signal, {
            abortError: pVo
          });
        }
      }
    }
    throw Le("api_request", "api_request_retry_exhausted"), new tO(a, o);
  } finally {
    if (m) n.onRetryStatus?.(null);
  }
}
function Tcc(e) {
  return (e.headers?.["retry-after"] || e.headers?.get?.("retry-after")) ?? null;
}
function TJ(e, t, n = 32000) {
  let r = Math.min(bom * Math.pow(2, e - 1), n),
    o = r + Math.random() * 0.25 * r;
  if (t) {
    let s = parseInt(t, 10);
    if (!isNaN(s)) return Math.max(s * 1000, o);
  }
  return o;
}
function vcc(e) {
  if (e.status !== 400 || !e.message) return;
  if (!Djt(e)) return;
  let t = /input length and `max_tokens` exceed context limit: (\d+) \+ (\d+) > (\d+)/,
    n = e.message.match(t);
  if (!n || n.length !== 4) return;
  if (!n[1] || !n[2] || !n[3]) {
    ke(Error("Unable to parse max_tokens from max_tokens exceed context limit error message"));
    return;
  }
  let r = parseInt(n[1], 10),
    o = parseInt(n[2], 10),
    s = parseInt(n[3], 10);
  if (isNaN(r) || isNaN(o) || isNaN(s)) return;
  return {
    inputTokens: r,
    maxTokens: o,
    contextLimit: s
  };
}
function wcc(e) {
  if (!(e instanceof Fo)) return !1;
  return e.status === 400 && (e.message?.includes("Fast mode is not enabled") ?? !1);
}
function TTe(e) {
  if (!(e instanceof Fo)) return !1;
  return e.status === 529 || (e.message?.includes('"type":"overloaded_error"') ?? !1);
}
function Scc(e) {
  if (!(e instanceof Fo) || e.status !== 404) return !1;
  let t = e.message ?? "";
  return (e.type === "not_found_error" || t.includes('"type":"not_found_error"')) && t.includes("model:");
}
function Ecc(e) {
  if (!(e instanceof Fo) || e.status !== 403) return !1;
  let t = e.message ?? "";
  return (e.type === "permission_error" || t.includes('"type":"permission_error"')) && t.includes("model:");
}
function Com(e) {
  return e instanceof Fo && e.status !== void 0 && e.status >= 500 && e.status < 600 && e.status !== 529;
}
function EZt(e) {
  return e instanceof Fo && e.status === 403 && (e.message?.includes("OAuth token has been revoked") ?? !1);
}
function Ccc(e) {
  if (ut(process.env.CLAUDE_CODE_USE_BEDROCK) || ut(process.env.CLAUDE_CODE_USE_ANTHROPIC_AWS) || ut(process.env.CLAUDE_CODE_USE_MANTLE)) {
    if (ioi(e) || e instanceof Fo && e.status === 403) return !0;
  }
  return !1;
}
function Iom(e) {
  if (Ccc(e)) return Fle(), !0;
  return !1;
}
function xom(e) {
  if (!(e instanceof Error)) return !1;
  let t = e.message;
  return t.includes("Could not load the default credentials") || t.includes("Could not refresh access token") || t.includes("invalid_grant");
}
function Icc(e) {
  if (ut(process.env.CLAUDE_CODE_USE_VERTEX)) {
    if (xom(e)) return !0;
    if (e instanceof Fo && e.status === 401) return !0;
  }
  return !1;
}
function kom(e) {
  if (Icc(e)) return Zxe(), !0;
  return !1;
}
async function Rom(e) {
  if (e instanceof nf && (e.statusCode === null || e.statusCode === 401 || e.statusCode >= 500)) {
    let t = await sxe().catch(() => null);
    if (t === null) return !1;
    return t.invalidate(), !0;
  }
  return !1;
}
function Lom(e) {
  if (Haa(e)) return !1;
  if (e.status === 429 && (e.error?.error?.details?.error_code === "credits_required" || e.message?.toLowerCase().includes("usage credits are required") || e.message?.toLowerCase().includes("extra usage is required"))) {
    let n = e.headers?.get("anthropic-ratelimit-unified-overage-disabled-reason");
    if (n !== "fetch_error" && n !== "org_level_disabled_until") return !1;
  }
  if (vTe() && Hcc(e)) return !0;
  if (SZt(e)) return !0;
  if (e.message?.includes('"type":"overloaded_error"')) return !0;
  if (vcc(e)) return !0;
  if (eS() && Ws()?.accessToken && (e.status === 401 || EZt(e))) return !0;
  if (!lI() && iH() && (e.status === 401 || EZt(e))) return !0;
  if (uCt() && !(Jl() && _u()) && e.status === 401) return !0;
  if (e.status === 407 && x2e()) return OOr(e.headers?.get("proxy-authenticate") ?? void 0), !0;
  let t = e.headers?.get("x-should-retry");
  if (t === "true" && (!bo() || Yot())) return !0;
  if (t === "false") {
    let n = e.status !== void 0 && e.status >= 500;
    return !1;
  }
  if (e instanceof Hx) return !0;
  if (!e.status) return !1;
  if (e.status === 408) return !0;
  if (e.status === 409) return !0;
  if (e.status === 401) return zot(), !0;
  if (EZt(e)) return !0;
  if (e.status === 429) return !bo() || Yot();
  if (e.status && e.status >= 500) return !0;
  return !1;
}
function Dom() {
  if (process.env.CLAUDE_CODE_MAX_RETRIES) {
    let e = parseInt(process.env.CLAUDE_CODE_MAX_RETRIES, 10);
    if (Number.isFinite(e) && e >= 0) {
      if (e > fVo) {
        if (!Acc) Acc = !0, T(`CLAUDE_CODE_MAX_RETRIES=${e} clamped to ${fVo}`, {
          level: "warn"
        });
        return fVo;
      }
      return e;
    }
  }
  return mom;
}
function Pom(e) {
  return e.maxRetries ?? Dom();
}
function Nom(e) {
  let t = Tcc(e);
  if (t) {
    let n = parseInt(t, 10);
    if (!isNaN(n)) return n * 1000;
  }
  return null;
}
function Bom(e) {
  let t = e.headers?.get?.("anthropic-ratelimit-unified-reset");
  if (!t) return null;
  let n = Number(t);
  if (!Number.isFinite(n)) return null;
  let r = n * 1000 - Date.now();
  if (r <= 0) return null;
  return Math.min(r, gVo);
}
var pVo = () => new tf(),
  mom = 10,
  fVo = 15,
  mVo = 3000,
  ecr = 3,
  gom = 2,
  hom = 1000,
  yom = 2,
  _om = 2,
  bom = 500,
  Som = 60000,
  Eom,
  bcc = 300000,
  gVo = 21600000,
  Aom = 30000,
  tO,
  Tom,
  vom,
  wom,
  Acc = !1,
  Mom = 1800000,
  $om = 20000,
  Oom = 600000;