// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KQn
// matched 2.1.88 source: src/query/stopHooks.ts
// class=modified  jaccard=0.2815  score=0.3977  fileCov=0.4906
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module KQn] deps: ft, KKt, U_t, dn, Un, kt, ZE, wX, WW, tSe, Vw, Ld, Lo, je, At, es, vn, co, xUt, Ao, zH, y_, _a, Epe, Jt, sr, m1, FAe, FQn, Oze, ag
((rOe = require("fs/promises")), (VQn = require("path")));
Nvf = /^(unspecified|untitled|unnamed)\b|^(unknown|no) (request|task|job|input)\b/;
jvf = new Set([yh, DI, yT]);
function Cxl(e) {
  return e.findLastIndex((t) => t.type === "user" && !t.isMeta && !bfe(t));
}
async function* JPo(e, t, n, r, o, s, i, a, l, c, u, d) {
  let p = d === "tool",
    f = [...e, ...t, ...n];
  if (a.startsWith("repl_main_thread") || a === "sdk")
    XQn(
      g6({
        messages: f,
        systemPrompt: r,
        userContext: o,
        systemContext: s,
        toolUseContext: i,
        querySource: a,
        stickyBetas: c,
      }),
    );
  if (p || (!Js() && i.sessionState)) yield* Ixl(u, [...e, ...t], t, i, a);
  if (!i.agentId)
    try {
      yield* tOe(i);
    } catch {}
  let m = Date.now();
  try {
    let g = OAe(Fr(i).mode, i.abortController.signal, void 0, l, i.agentId, i, f, i.agentType),
      h = [];
    for await (let y of g) {
      if (y.message) {
        if ((yield y.message, y.message.type === "attachment")) {
          let b = y.message.attachment;
          if ("hookEvent" in b && (b.hookEvent === "Stop" || b.hookEvent === "SubagentStop")) {
            if (b.type === "hook_non_blocking_error") h.push(b.stderr || `Exit code ${b.exitCode}`);
            else if (b.type === "hook_error_during_execution") h.push(b.content);
          }
        }
      }
      if (y.blockingError || y.preventContinuation)
        T(
          `[end-turn] Stop hook block discarded (turn ended by ${d === "tool" ? "tool result" : d === "mcp_meta" ? "MCP end-turn" : "loop tick"}, no model re-invoke): ${y.blockingError?.blockingError ?? y.stopReason ?? "preventContinuation"}`,
        );
    }
    if (h.length > 0)
      yield {
        type: "notification",
        notification: {
          key: "stop-hook-error",
          text: `Stop hook error occurred \xB7 ${eC("app:toggleTranscript", "Global", "ctrl+o")} to see`,
          priority: "immediate",
        },
      };
  } catch (g) {
    (G("tengu_stop_hook_error", {
      duration: Date.now() - m,
      queryChainId: Hr(i.queryTracking?.chainId),
      queryDepth: i.queryTracking?.depth,
    }),
      yield cc(`Stop hook failed: ${be(g)}`, "warning"));
  }
}
async function* Ixl(e, t, n, r, o) {
  let s = rYt ? rYt.detectSurfaces() : null,
    i = s ? rYt.sinksFor(s) : null,
    a = i ? rYt.engineFor(i) : null;
  if (!e || !a || xM(o) !== "main" || r.agentId) return;
  e.lastEmittedDetail = "";
  let l = r.getAppState().postTurnSummary;
  if (i.has("summary"))
    yield {
      type: "post_turn_summary",
      value: null,
    };
  e.onClassified = (m, g) => {
    if (g || !i.has("summary")) return;
    if (m.source === "no-text-turn" && m.detail === "") {
      if (l)
        (r.setAppState((y) =>
          y.postTurnSummary === l
            ? y
            : {
                ...y,
                postTurnSummary: l,
              },
        ),
          r.sessionState?.notifyMetadataChanged({
            post_turn_summary: l,
          }),
          bS()?.reportMetadata({
            post_turn_summary: l,
          }));
      return;
    }
    let h = rYt.classifiedToPostTurnSummary(m);
    (r.setAppState((y) =>
      y.postTurnSummary?.status_category === h.status_category &&
      y.postTurnSummary.status_detail === h.status_detail
        ? y
        : {
            ...y,
            postTurnSummary: h,
          },
    ),
      r.sessionState?.notifyMetadataChanged({
        post_turn_summary: h,
      }),
      bS()?.reportMetadata({
        post_turn_summary: h,
      }),
      zv({
        type: "system",
        subtype: "post_turn_summary",
        summarizes_uuid: n.at(-1)?.uuid ?? "",
        ...h,
      }));
  };
  let c = TO(),
    u = c ? r.options.agentDefinitions.activeAgents.find((m) => m.agentType === c) : void 0,
    d = t.filter((m) => m.type === "assistant"),
    p = XPo.findLatestRealUserAsk(t);
  if (p) XPo.captureLatestAsk(e, p);
  let f = XPo.classifyAndPush(
    e,
    XE(),
    u?.agentType ?? "bg",
    "",
    d,
    Hze(r.taskRegistry.all()),
    a,
    s,
  ).catch((m) => {
    T(`[classifier] error: ${be(m)}`, {
      level: "error",
    });
  });
  if (Js() || o === "sdk") await vc(f, 60000, "classifier write timed out").catch(() => {});
}
async function* xxl(e, t, n, r, o, s, i, a, l, c) {
  let u = Date.now(),
    d = {
      messages: [...e, ...t],
      systemPrompt: n,
      userContext: r,
      systemContext: o,
      toolUseContext: s,
      querySource: i,
      stickyBetas: l,
    };
  if (i.startsWith("repl_main_thread") || i === "sdk") XQn(g6(d));
  if ((yield* Ixl(c, d.messages, t, s, i), !md())) {
    if (!ml(process.env.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION)) YMa(d, c?.lastResult);
    if (!s.agentId && Ckn()) Gvf.executeExtractMemories(d, s.appendSystemMessage);
    if (!s.agentId) KIl(d, s.appendSystemMessage);
  }
  if (!s.agentId)
    try {
      yield* tOe(s);
    } catch {}
  let p = null;
  if (
    (i.startsWith("repl_main_thread") || i === "sdk") &&
    vxl.isBriefEnabled() &&
    !ut(process.env.DISABLE_BRIEF_MODE_STOP_HOOK) &&
    !s.agentId &&
    s.options.tools.some((y) => Ql(y, Bze.BRIEF_TOOL_NAME))
  )
    try {
      let y = Cxl(e),
        b = e.slice(y + 1),
        S =
          b.some(
            (v) =>
              v.type === "assistant" &&
              v.message.content.some(
                (C) =>
                  C.type === "tool_use" &&
                  (C.name === Bze.BRIEF_TOOL_NAME || C.name === Bze.LEGACY_BRIEF_TOOL_NAME),
              ),
          ) ||
          t.some((v) =>
            v.message.content.some(
              (C) =>
                C.type === "tool_use" &&
                (C.name === Bze.BRIEF_TOOL_NAME || C.name === Bze.LEGACY_BRIEF_TOOL_NAME),
            ),
          ),
        A =
          !S &&
          b.some(
            (v) =>
              v.type === "user" &&
              v.isMeta &&
              typeof v.message.content === "string" &&
              v.message.content.includes(Bze.BRIEF_ENFORCE_SENTINEL),
          );
      if (!S && !A)
        ((p = Rn({
          content: `${Bze.BRIEF_ENFORCE_SENTINEL} ${vxl.getBriefEnforceText()}`,
          isMeta: true,
        })),
          yield p);
    } catch (y) {
      T(`Brief mode enforcement failed: ${be(y)}`, {
        level: "error",
      });
    }
  let f = null,
    m = null;
  if (s.options.requiresStructuredOutput && xM(i) !== "auxiliary")
    try {
      let y = Cxl(e),
        b = e.slice(y + 1),
        _ = Lxl([...b, ...t], Ip),
        S =
          !_ &&
          b.some(
            (A) =>
              A.type === "user" &&
              A.isMeta &&
              typeof A.message.content === "string" &&
              A.message.content.includes(wxl),
          );
      if (!_ && !S)
        ((m = Rn({
          content: `${wxl} You MUST call the ${Ip} tool to complete this request. Call this tool now.`,
          isMeta: true,
        })),
          yield m);
    } catch (y) {
      T(`StructuredOutput enforcement failed: ${be(y)}`, {
        level: "error",
      });
    }
  let g = false,
    h;
  try {
    let y = [];
    if (p) y.push(p);
    if (f) y.push(f);
    if (m) y.push(m);
    let b = s.getAppState(),
      _ = Fr(s).mode,
      S = b.activeGoal;
    if (S) {
      let M = s.taskRegistry.all();
      if (Hze(M) || JQn(M)) {
        if (((h = dSt(b, Rt()).find((N) => N.prompt === S.condition)), h))
          (s.sessionHooksRegistry.remove(Rt(), "Stop", h),
            T("[goal] evaluation deferred \u2014 background work still running"));
      }
    }
    let A = (M) => {
        if (!M) return;
        return (XMe(b, Rt(), "Stop").get("Stop") ?? [])
          .flatMap((B) => B.hooks)
          .some((B) => hKn(B, M))
          ? M
          : void 0;
      },
      v = OAe(_, s.abortController.signal, void 0, a, s.agentId, s, d.messages, s.agentType),
      C = "",
      x = 0,
      I = false,
      k = "",
      D = false,
      P = [],
      O = [],
      L = [];
    for await (let M of v) {
      if (M.message) {
        if ((yield M.message, M.message.type === "progress" && M.message.toolUseID)) {
          ((C = M.message.toolUseID), x++);
          let N = M.message.data;
          if (N.command)
            L.push({
              command: N.command,
              promptText: N.promptText,
            });
        }
        if (M.message.type === "attachment") {
          let N = M.message.attachment;
          if ("hookEvent" in N && (N.hookEvent === "Stop" || N.hookEvent === "SubagentStop")) {
            if (N.type === "hook_non_blocking_error")
              (P.push(N.stderr || `Exit code ${N.exitCode}`), (D = true));
            else if (N.type === "hook_error_during_execution") (P.push(N.content), (D = true));
            else if (N.type === "hook_success") {
              if ((N.stdout && N.stdout.trim()) || (N.stderr && N.stderr.trim())) D = true;
              let B = A(M.hook);
              if (N.hookEvent === "Stop" && B) {
                s.sessionHooksRegistry.remove(Rt(), "Stop", B);
                let $ = s.getAppState().activeGoal;
                if ($?.condition === B.prompt) {
                  let q = $.iterations + 1,
                    W = Date.now() - $.setAt,
                    V = Gb() - $.tokensAtStart;
                  if (
                    (yield {
                      type: "active_goal",
                      value: void 0,
                    },
                    M.impossible)
                  )
                    (yield ai({
                      type: "goal_status",
                      met: false,
                      failed: true,
                      condition: B.prompt,
                      reason: M.stopReason,
                      iterations: q,
                      durationMs: W,
                      tokens: V,
                    }),
                      G("tengu_goal_failed", {
                        promptLength: B.prompt.length,
                        reasonLength: M.stopReason?.length ?? 0,
                        iterations: q,
                        durationMs: W,
                        tokens: V,
                      }),
                      Le("goal_met", "impossible"));
                  else
                    (yield ai({
                      type: "goal_status",
                      met: true,
                      condition: B.prompt,
                      reason: M.stopReason,
                      iterations: q,
                      durationMs: W,
                      tokens: V,
                    }),
                      G("tengu_goal_achieved", {
                        promptLength: B.prompt.length,
                        iterations: q,
                        durationMs: W,
                        tokens: V,
                      }),
                      xe("goal_met"),
                      s.sessionState?.notifyMetadataChanged({
                        goal: {
                          condition: B.prompt,
                          set_at: $.setAt,
                          iterations: q,
                          last_reason: null,
                          met: true,
                        },
                      }));
                }
              }
            }
            if ("durationMs" in N && "command" in N) {
              let B = L.find(($) => $.command === N.command && $.durationMs === void 0);
              if (B) B.durationMs = N.durationMs;
            }
          }
        }
      }
      if (M.blockingError) {
        let N = Rn({
          content: QPo(M.blockingError),
          isMeta: true,
        });
        (y.push(N), yield N, (D = true));
        let B = A(M.hook),
          $ = s.getAppState().activeGoal;
        if (B && $?.condition === B.prompt)
          (yield {
            type: "active_goal",
            value: {
              ...$,
              iterations: $.iterations + 1,
              lastReason: M.stopReason,
            },
          },
            yield ai({
              type: "goal_status",
              met: false,
              condition: B.prompt,
              reason: M.stopReason,
            }));
        else P.push(M.blockingError.blockingError);
      }
      if (M.additionalContexts && M.additionalContexts.length > 0) {
        let N = s.agentId ? "SubagentStop" : "Stop",
          B = ai({
            type: "hook_additional_context",
            content: M.additionalContexts,
            hookName: N,
            toolUseID: C,
            hookEvent: N,
          });
        (y.push(B), yield B, (D = true), O.push(...M.additionalContexts));
      }
      if (M.preventContinuation)
        ((I = true),
          (k = M.stopReason || "Stop hook prevented continuation"),
          yield ai({
            type: "hook_stopped_continuation",
            message: k,
            hookName: "Stop",
            toolUseID: C,
            hookEvent: "Stop",
          }));
      if (s.abortController.signal.aborted)
        return (
          G("tengu_pre_stop_hooks_cancelled", {
            queryChainId: Hr(s.queryTracking?.chainId),
            queryDepth: s.queryTracking?.depth,
          }),
          yield gQ({
            toolUse: false,
          }),
          {
            blockingErrors: [],
            preventContinuation: true,
          }
        );
    }
    if (x > 0) {
      if ((yield Rxl(x, L, P, I, k, D, "suggestion", C, void 0, void 0, O), P.length > 0)) {
        let M = eC("app:toggleTranscript", "Global", "ctrl+o");
        if (!a)
          yield {
            type: "notification",
            notification: {
              key: "stop-hook-error",
              text: `Stop hook error occurred \xB7 ${M} to see`,
              priority: "immediate",
            },
          };
      }
    }
    if (I)
      return {
        blockingErrors: [],
        preventContinuation: true,
      };
    if (y.length > 0)
      return {
        blockingErrors: y,
        preventContinuation: false,
      };
    if (wf()) {
      let M = Oh() ?? "",
        N = rp() ?? "",
        B = [],
        $ = false,
        q,
        W = "",
        V = yF(),
        z = (await W4(V)).filter((Z) => Z.status === "in_progress" && Z.owner === M);
      for (let Z of z) {
        let J = Z6e(Z.id, Z.subject, Z.description, M, N, _, s.abortController.signal, void 0, s);
        for await (let ne of J) {
          if (ne.message) {
            if (ne.message.type === "progress" && ne.message.toolUseID) W = ne.message.toolUseID;
            yield ne.message;
          }
          if (ne.blockingError) {
            let oe = Rn({
              content: Lzt(ne.blockingError),
              isMeta: true,
            });
            (B.push(oe), yield oe);
          }
          if (ne.preventContinuation)
            (($ = true),
              (q = ne.stopReason || "TaskCompleted hook prevented continuation"),
              yield ai({
                type: "hook_stopped_continuation",
                message: q,
                hookName: "TaskCompleted",
                toolUseID: W,
                hookEvent: "TaskCompleted",
              }));
          if (s.abortController.signal.aborted)
            return {
              blockingErrors: [],
              preventContinuation: true,
            };
        }
      }
      let K = oYt(M, N, _, s.abortController.signal, void 0, s);
      for await (let Z of K) {
        if (Z.message) {
          if (Z.message.type === "progress" && Z.message.toolUseID) W = Z.message.toolUseID;
          yield Z.message;
        }
        if (Z.blockingError) {
          let J = Rn({
            content: ZPo(Z.blockingError),
            isMeta: true,
          });
          (B.push(J), yield J);
        }
        if (Z.preventContinuation)
          (($ = true),
            (q = Z.stopReason || "TeammateIdle hook prevented continuation"),
            yield ai({
              type: "hook_stopped_continuation",
              message: q,
              hookName: "TeammateIdle",
              toolUseID: W,
              hookEvent: "TeammateIdle",
            }));
        if (s.abortController.signal.aborted)
          return {
            blockingErrors: [],
            preventContinuation: true,
          };
      }
      if ($)
        return {
          blockingErrors: [],
          preventContinuation: true,
        };
      if (B.length > 0)
        return {
          blockingErrors: B,
          preventContinuation: false,
        };
    }
    return {
      blockingErrors: [],
      preventContinuation: false,
    };
  } catch (y) {
    g = true;
    let b = Date.now() - u;
    (G("tengu_stop_hook_error", {
      duration: b,
      queryChainId: Hr(s.queryTracking?.chainId),
      queryDepth: s.queryTracking?.depth,
    }),
      yield cc(`Stop hook failed: ${be(y)}`, "warning"));
    let _ = [];
    if (p) _.push(p);
    if (f) _.push(f);
    if (m) _.push(m);
    return {
      blockingErrors: _,
      preventContinuation: false,
    };
  } finally {
    if (h) s.sessionHooksRegistry.add(Rt(), "Stop", "", h);
    if (g) Le("hook_stop_handler", "hook_stop_handler_failed");
    else xe("hook_stop_handler");
  }
}
var Gvf,
  XPo,
  rYt,
  vxl,
  Bze,
  wxl = "[structured-output-enforce]";
