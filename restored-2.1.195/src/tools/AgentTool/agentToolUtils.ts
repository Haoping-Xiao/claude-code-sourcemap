// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module K6n
// matched 2.1.88 source: src/tools/AgentTool/agentToolUtils.ts
// class=modified  jaccard=0.2657  score=0.3576  fileCov=0.5082
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function Hol(e) {
  if (e) return false;
  return at("tengu_shale_finch", false);
}
function Owo(e) {
  if (e === void 0) return {};
  if (!e.includes("*")) return null;
  let t;
  for (let n of e) {
    if (n === "*") continue;
    let { toolName: r, ruleContent: o } = Ig(n);
    if (r !== ss || !o) return null;
    ((t ??= []),
      t.push(
        ...o
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      ));
  }
  return t
    ? {
        allowedAgentTypes: t,
      }
    : {};
}
function Nwo({
  tools: e,
  isBuiltIn: t,
  isAsync: n = false,
  isTeammate: r = false,
  permissionMode: o,
  agentDepth: s = 0,
}) {
  let i = e.filter((a) => {
    if (gk(a)) return true;
    if (Ql(a, jD) && o === "plan") return true;
    if (jRe.has(a.name)) return false;
    if (!t && aso.has(a.name)) return false;
    if (Ql(a, ss)) return s < tjt;
    if (n && !ejt.has(a.name)) {
      if (el() && r && Doa.has(a.name)) return true;
      return false;
    }
    return true;
  });
  if (o === "plan" && !i.some((a) => Ql(a, jD))) i.push(EP);
  return i;
}
function Bwo(e) {
  let t = new Set(),
    n = new Set(),
    r = new Set(),
    o = false;
  for (let a of e ?? []) {
    let { toolName: l, ruleContent: c } = Ig(a);
    if ((t.add(l), !c)) n.add(l);
    let u = eI(l);
    if (u !== null && (u.toolName === void 0 || u.toolName === "*"))
      if (u.serverName === "*") o = true;
      else r.add(u.serverName);
  }
  let s = (a) => {
    if (!o && r.size === 0) return false;
    let l = eI(a)?.serverName;
    return l !== void 0 && (o || r.has(l));
  };
  return {
    disallowedToolSet: t,
    bareDisallowedToolSet: n,
    isServerLevelDisallowed: s,
    isToolDisallowed: (a) => {
      let l = Rhe(a);
      return t.has(a.name) || t.has(l) || s(l);
    },
  };
}
function voe(e, t, n = false, r = false, o = false, s = 0) {
  let { tools: i, disallowedTools: a, source: l, permissionMode: c } = e,
    u = r
      ? t
      : Nwo({
          tools: t,
          isBuiltIn: l === "built-in",
          isAsync: n,
          isTeammate: o,
          permissionMode: c,
          agentDepth: s,
        }),
    {
      disallowedToolSet: d,
      bareDisallowedToolSet: p,
      isToolDisallowed: f,
      isServerLevelDisallowed: m,
    } = Bwo(a),
    g = u.filter((k) => {
      if (f(k)) return false;
      return true;
    });
  if (i === void 0)
    return {
      hasWildcard: true,
      validTools: [],
      invalidTools: [],
      unavailableTools: [],
      resolvedTools: g,
    };
  let h = Owo(i);
  if (h)
    return {
      hasWildcard: true,
      validTools: [],
      invalidTools: [],
      unavailableTools: [],
      resolvedTools: g,
      ...(h.allowedAgentTypes && {
        allowedAgentTypes: h.allowedAgentTypes,
      }),
    };
  let y = new Map();
  for (let k of g) y.set(k.name, k);
  let b = new Set(t.map((k) => k.name)),
    _ = LI() && !d.has(Fm) ? y.get(Fm) : void 0,
    S = [],
    A = [],
    v = [],
    C = [],
    x = new Set(),
    I;
  for (let k of i) {
    let { toolName: D, ruleContent: P } = Ig(k);
    if (D === ss) {
      if (P) {
        let N = P.split(",")
          .map((B) => B.trim())
          .filter(Boolean);
        I = I ? [...I, ...N] : N;
      }
      if (!r && !y.has(ss)) {
        S.push(k);
        continue;
      }
    }
    let O = eI(D);
    if (O !== null && O.serverName !== "*" && (O.toolName === void 0 || O.toolName === "*")) {
      S.push(k);
      for (let N of g)
        if (eI(Rhe(N))?.serverName === O.serverName && !x.has(N)) (C.push(N), x.add(N));
      continue;
    }
    let M = y.get(D);
    if (M) {
      if ((S.push(k), !x.has(M))) (C.push(M), x.add(M));
    } else if (_ && Pct.has(D)) {
      if ((S.push(k), !x.has(_))) (C.push(_), x.add(_));
    } else if (p.has(D) || m(D));
    else if (b.has(D)) v.push(k);
    else A.push(k);
  }
  if (hC() && !C.some((k) => Ql(k, Co))) {
    let k = {
        [wu]: Z4,
        [qc]: L$,
      },
      D = [];
    for (let P of A) {
      let { toolName: O } = Ig(P),
        L = k[O];
      if (!L || d.has(O)) {
        D.push(P);
        continue;
      }
      if ((S.push(P), !x.has(L))) (C.push(L), x.add(L));
    }
    A.splice(0, A.length, ...D);
  }
  return {
    hasWildcard: false,
    validTools: S,
    invalidTools: A,
    unavailableTools: v,
    resolvedTools: C,
    allowedAgentTypes: I,
  };
}
function countToolUses(e) {
  let t = 0;
  for (let n of e)
    if (n.type === "assistant") {
      for (let r of n.message.content) if (r.type === "tool_use") t++;
    }
  return t;
}
function Fnf(e) {
  let t = {
    readCount: 0,
    searchCount: 0,
    bashCount: 0,
    editFileCount: 0,
    linesAdded: 0,
    linesRemoved: 0,
    otherToolCount: 0,
  };
  for (let r of e)
    if (r.type === "assistant")
      for (let o of r.message.content) {
        if (o.type !== "tool_use") continue;
        switch (o.name) {
          case Ds:
            t.readCount++;
            break;
          case qc:
          case wu:
            t.searchCount++;
            break;
          case Co:
            t.bashCount++;
            break;
          case ss:
          case r8:
            break;
          default:
            if (B6n.has(o.name)) {
              let { added: s, removed: i } = U6n(o.name, o.input);
              (t.editFileCount++, (t.linesAdded += s), (t.linesRemoved += i));
            } else if (o.name === Bnf) t.frameCount = (t.frameCount ?? 0) + 1;
            else t.otherToolCount++;
        }
      }
    else if (r.type === "user") {
      let o = r.toolUseResult?.toolStats;
      if (o) {
        if (
          ((t.readCount += o.readCount),
          (t.searchCount += o.searchCount),
          (t.bashCount += o.bashCount),
          (t.editFileCount += o.editFileCount),
          (t.linesAdded += o.linesAdded),
          (t.linesRemoved += o.linesRemoved),
          (t.otherToolCount += o.otherToolCount),
          o.frameCount)
        )
          t.frameCount = (t.frameCount ?? 0) + o.frameCount;
      }
    }
  return t.readCount +
    t.searchCount +
    t.bashCount +
    t.editFileCount +
    t.otherToolCount +
    (t.frameCount ?? 0) >
    0
    ? t
    : void 0;
}
function finalizeAgentTool(e, t, n, { suppressTelemetry: r = false } = {}) {
  let {
      prompt: o,
      resolvedAgentModel: s,
      isBuiltInAgent: i,
      startTime: a,
      agentType: l,
      isAsync: c,
      agentDepth: u,
      source: d,
      pluginId: p,
    } = n,
    f = MI(e);
  if (f === void 0) throw Error("No assistant messages found");
  let m = f.message.content.filter((_) => _.type === "text");
  if (m.length === 0)
    for (let _ = e.length - 1; _ >= 0; _--) {
      let S = e[_];
      if (S.type !== "assistant") continue;
      let A = S.message.content.filter((v) => v.type === "text");
      if (A.length > 0) {
        m = A;
        break;
      }
    }
  let g = cre(f.message.usage),
    h = countToolUses(e),
    y = Date.now() - a,
    b = new Set();
  for (let _ of e) if (_.type === "assistant") b.add(_.message.id);
  if (!r) {
    G("tengu_agent_tool_completed", {
      agent_type: l,
      model: s,
      prompt_char_count: o.length,
      response_char_count: m.reduce((C, x) => C + x.text.length, 0),
      assistant_message_count: b.size,
      total_tool_uses: h,
      duration_ms: y,
      total_tokens: g,
      is_built_in_agent: i,
      is_async: c,
      agent_depth: u,
    });
    let _ = sg(),
      S = p && zD(p.marketplace);
    Jc("subagent_completed", {
      agent_type: i || S || _ ? l : "custom",
      ...(d && {
        "agent.source": d,
      }),
      is_built_in: i,
      is_async: c,
      total_tokens: g,
      total_tool_uses: h,
      duration_ms: y,
      model: s,
      ...(p && {
        plugin_id_hash: Abe(p.name, p.marketplace),
        "plugin.name": S || _ ? p.name : Qj,
      }),
    });
    let v = f.requestId;
    if (v)
      G("tengu_cache_eviction_hint", {
        scope: We("subagent_end"),
        last_request_id: Hr(v),
      });
  }
  return {
    agentId: t,
    agentType: l,
    content: m,
    resolvedModel: s,
    totalDurationMs: Date.now() - a,
    totalTokens: g,
    totalToolUseCount: h,
    usage: f.message.usage,
    toolStats: Fnf(e),
  };
}
function jnf(e) {
  if (e.type !== "assistant") return;
  let t = e.message.content.findLast((n) => n.type === "tool_use");
  return t?.type === "tool_use" ? t.name : void 0;
}
function Gnf(e, t, n, r, o, s, i) {
  let a = g8t(e);
  vyt({
    taskId: t,
    toolUseId: n,
    description: a.lastActivity?.activityDescription ?? r,
    subagentType: i,
    startTime: o,
    totalTokens: a.tokenCount,
    toolUses: a.toolUseCount,
    lastToolName: s,
  });
}
async function classifyHandoffIfNeeded({
  agentMessages: e,
  tools: t,
  toolPermissionContext: n,
  abortSignal: r,
  subagentType: o,
  totalToolUseCount: s,
}) {
  {
    if (n.mode !== "auto") return null;
    if (!fol(e, t)) return null;
    let a = await Hyt(
        e,
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Subagent has finished and is handing back control to the main agent. Review the subagent's work based on the block rules and let the main agent know if any file is dangerous (the main agent will see the reason).",
            },
          ],
        },
        t,
        n,
        r,
        {
          isSubagentLoop: true,
        },
      ),
      l = a.unavailable ? "unavailable" : a.shouldBlock ? "blocked" : "allowed";
    if (
      (G("tengu_auto_mode_decision", {
        decision: $e(l),
        toolName: $e(r8),
        inProtectedNamespace: $V(),
        classifierModel: a.model,
        agentType: o,
        toolUseCount: s,
        isHandoff: true,
        agentMsgId: MI(e)?.message.id,
        classifierStage: Oo(a.stage),
        classifierFailureMode: Oo(a.failureMode),
        classifierStage1RequestId: Hr(a.stage1RequestId),
        classifierStage1MsgId: Hr(a.stage1MsgId),
        classifierStage2RequestId: Hr(a.stage2RequestId),
        classifierStage2MsgId: Hr(a.stage2MsgId),
      }),
      a.shouldBlock)
    ) {
      if (a.unavailable)
        return (
          T("Handoff classifier unavailable, allowing sub-agent output with warning", {
            level: "warn",
          }),
          Col(a.model, a.httpStatus, a.errorKind)
        );
      return (
        T(`Handoff classifier flagged sub-agent output: ${a.reason}`, {
          level: "warn",
        }),
        `SECURITY WARNING: This subagent performed actions that may violate security policy. Reason: ${a.reason}. Review the subagent's actions carefully before acting on its output.`
      );
    }
  }
  return null;
}
function Y6n(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n.type !== "assistant") continue;
    let r = zl(
      n.message.content,
      `
`,
    );
    if (r) return r;
  }
  return;
}
async function runAsyncAgentLifecycle({
  taskId: e,
  abortController: t,
  makeStream: n,
  metadata: r,
  description: o,
  toolUseContext: s,
  taskRegistry: i,
  agentIdForCleanup: a,
  enableSummarization: l,
  getWorktreeResult: c,
  onMessage: u,
  shouldNotifyOwner: d,
}) {
  let p = d ?? (() => true),
    f,
    m = () => {
      if (h_(t.signal.reason) !== "background" || !p()) return false;
      return (f?.(), HAe(e, i), Iyt(e, i), true);
    },
    g = [],
    h = i.get(e),
    y = El(h) ? h.ownerAgentId : void 0,
    b = Oe.CLAUDE_ASYNC_AGENT_STALL_TIMEOUT_MS || 600000,
    _ = null,
    S = "none",
    A = false,
    v = Date.now();
  _yt(i, e, {
    turnStartTime: v,
  });
  let C = Ade(e);
  C.setMode("responding");
  let x = 0,
    I,
    k,
    D,
    P = new Set(),
    O = new Set(),
    L = () => {
      let z = O.size > 0 && O.size === P.size;
      i.update(e, (K) =>
        K.isIdle === z
          ? K
          : {
              ...K,
              isIdle: z,
            },
      );
    },
    M,
    N = Date.now(),
    B = (z, K) => {
      let Z = Date.now(),
        J = M?.type === "assistant" ? (M.message.stop_reason ?? "null") : "none",
        ne = [
          `agentId=${e}`,
          `agentType=${r.agentType ?? "unknown"}`,
          `exitPath=${z}`,
          `durationMs=${Z - v}`,
          `turns=${x}`,
          `finalStopReason=${J}`,
          `lastChunkAgeMs=${Z - N}`,
          `lastToolUseId=${k ?? "none"}`,
          `lastToolResultSeen=${D ?? "none"}`,
        ];
      if (K?.errorKind) ne.push(`errorKind=${K.errorKind}`);
      T(`[Stall] agent_completion ${ne.join(" ")}`, {
        level: z === "watchdog_stall" || z === "error" ? "warn" : "info",
      });
    },
    $ = () => {
      if (_ !== null) (clearTimeout(_), (_ = null));
    },
    q = () => {
      ($(),
        (_ = setTimeout(() => {
          if (((_ = null), A)) return;
          if (m()) return;
          if (P.size > 0) {
            (T(
              `[AsyncAgent ${e}] stall watchdog deferred \u2014 ${P.size} tool(s) in flight (toolUseIds=${[...P].join(",")})`,
            ),
              q());
            return;
          }
          ((A = true),
            T(
              `[AsyncAgent ${e}] stall watchdog fired after ${b}ms with no progress (last message: ${S}); aborting`,
              {
                level: "error",
              },
            ),
            G("tengu_async_agent_stall_timeout", {
              agent_type: r.agentType,
              stall_ms: b,
              last_message_type: S,
              message_count: g.length,
            }),
            t.abort(),
            f?.(),
            B("watchdog_stall"));
          let z = `Agent stalled: no progress for ${b / 1000}s (stream watchdog did not recover)`;
          if ((Le("subagent_complete", "subagent_stall_timeout"), X6n(e, z, i), c(), p()))
            q8e({
              taskId: e,
              description: o,
              status: "failed",
              error: z,
              taskRegistry: i,
              toolUseId: s.toolUseId,
              finalMessage: Y6n(g),
              ownerAgentId: y,
            });
        }, b)),
        _.unref?.());
    },
    W = 0,
    V = Math.min(b * 0.1, 1000),
    Y = () => {
      let z = Date.now();
      if (((N = z), z - W < V)) return;
      ((W = z), (S = "query_progress"), q());
    };
  try {
    let z = J6n(),
      K = Z6n(s.options.tools),
      Z = l
        ? (ae, de) => {
            let { stop: Ee } = Nrl(e, Bu(e), ae, de, i);
            f = Ee;
          }
        : void 0;
    q();
    for await (let ae of n(Z, Y)) {
      if ((u?.(ae), ae.type === "spinner_mode")) {
        C.setMode(ae.mode);
        continue;
      }
      if (ae.type === "api_metrics") continue;
      if (ae.type === "set_in_progress_tool_use_ids") {
        let me = 0;
        if (ae.op.action === "remove")
          for (let pe of ae.op.ids) {
            if (P.delete(pe)) me++;
            O.delete(pe);
          }
        if (me > 0 && ae.reason === "fallback_sweep")
          G("tengu_async_agent_stranded_tools_cleared", {
            is_built_in_agent: r.isBuiltInAgent,
            cleared_count: me,
            in_flight_remaining: P.size,
          });
        if (me > 0)
          i.updateTranscript(e, (pe) => ({
            ...pe,
            inProgressToolUseIDs: new Set(P),
          }));
        L();
        continue;
      }
      S = ae.type === "system" && "subtype" in ae ? `system:${ae.subtype}` : ae.type;
      let de = false;
      if (ae.type === "assistant") {
        if (ae.message.id !== I) ((x += 1), (I = ae.message.id));
        M = ae;
        for (let me of ae.message.content)
          if (me.type === "tool_use") {
            if (((k = me.id), P.add(me.id), Wnf.has(me.name))) O.add(me.id);
            de = true;
          }
      } else if (ae.type === "user") {
        let me = ae.message.content;
        if (Array.isArray(me)) {
          for (let pe of me)
            if (typeof pe === "object" && pe?.type === "tool_result")
              ((D = pe.tool_use_id),
                (de = P.delete(pe.tool_use_id) || de),
                O.delete(pe.tool_use_id));
        }
      }
      if ((q(), ae.type === "system" && ae.subtype === "api_error")) continue;
      (g.push(ae),
        i.updateTranscript(e, (me) => ({
          ...me,
          messages: tzn(me.messages, ae),
          ...(de && {
            inProgressToolUseIDs: new Set(P),
          }),
        })),
        L(),
        Q6n(z, ae, K, s.options.tools),
        vol(e, g8t(z), i));
      let Ee = jnf(ae);
      if (Ee) Gnf(z, e, s.toolUseId, o, r.startTime, Ee, r.agentType);
    }
    if (($(), A)) {
      if (!p()) throw Error("Agent stalled (stream watchdog)");
      return;
    }
    ((A = true), f?.(), ezn(e, i));
    let J = Cyt(e, i);
    if (!J) B("completed");
    let ne = i.getTranscript(e),
      oe = ne && ne.messages.length > g.length ? ne.messages : g,
      re = finalizeAgentTool(oe, e, r, {
        suppressTelemetry: J,
      });
    if ((wol(re, i), J)) {
      let ae = 0,
        de = i.get(e);
      if (El(de) && de.keepaliveReasons) {
        for (let Ee of de.keepaliveReasons) if (Ee.startsWith("agent:")) ae++;
      }
      (i.updateTranscript(e, (Ee) => ({
        ...Ee,
        messages: [
          ...Ee.messages.filter((me) => !(me.type === "system" && me.subtype === "turn_duration")),
          h8t(Date.now() - v, void 0, void 0, ae || void 0),
        ],
      })),
        T(
          `[AsyncAgent ${e}] parked on keepalive \u2014 deferring owner notification until resume`,
        ));
      return;
    }
    if ((xe("subagent_complete"), !p())) {
      await c();
      return;
    }
    let ee = zl(
      re.content,
      `
`,
    );
    {
      let ae = await classifyHandoffIfNeeded({
        agentMessages: g,
        tools: s.options.tools,
        toolPermissionContext: Fr(s),
        abortSignal: t.signal,
        subagentType: r.agentType,
        totalToolUseCount: re.totalToolUseCount,
      });
      if (ae)
        ee = `${ae}

${ee}`;
    }
    let ce = await c();
    q8e({
      taskId: e,
      description: o,
      status: "completed",
      taskRegistry: i,
      finalMessage: ee,
      usage: {
        totalTokens: Gwo(z),
        toolUses: re.totalToolUseCount,
        durationMs: re.totalDurationMs,
      },
      toolUseId: s.toolUseId,
      ownerAgentId: y,
      ...ce,
    });
  } catch (z) {
    if (($(), A)) {
      let J = be(z);
      if (
        (T(`[AsyncAgent ${e}] completion sequence threw after finalize: ${J}`, {
          level: "error",
        }),
        X6n(e, J, i),
        p())
      ) {
        let ne = i.get(e),
          oe = ne?.status;
        q8e({
          taskId: e,
          description: o,
          status: oe === "completed" ? "completed" : oe === "killed" ? "killed" : "failed",
          killedBy: El(ne) ? ne.killedBy : void 0,
          error: oe === "completed" ? void 0 : J,
          taskRegistry: i,
          toolUseId: s.toolUseId,
          ownerAgentId: y,
          finalMessage: Y6n(g),
        });
      } else throw z;
      return;
    }
    if (((A = true), f?.(), z instanceof ru)) {
      if (m()) return;
      (B("cancelled"), HAe(e, i));
      let J = i.get(e),
        ne = El(J) ? J.killedBy : void 0,
        oe = await c();
      if (!p()) throw z;
      (G("tengu_agent_tool_terminated", {
        agent_type: r.agentType,
        model: r.resolvedAgentModel,
        duration_ms: Date.now() - r.startTime,
        is_async: true,
        is_built_in_agent: r.isBuiltInAgent,
        agent_depth: r.agentDepth,
        reason:
          ne === "parent"
            ? We("parent_kill_async")
            : ne === "system"
              ? We("system_kill_async")
              : We("user_kill_async"),
      }),
        q8e({
          taskId: e,
          description: o,
          status: "killed",
          killedBy: ne,
          taskRegistry: i,
          toolUseId: s.toolUseId,
          finalMessage: Y6n(g),
          ownerAgentId: y,
          ...oe,
        }));
      return;
    }
    let K = be(z);
    (B("error", {
      errorKind: z instanceof Error ? `${z.name}:${K.slice(0, 80)}` : "unknown",
    }),
      X6n(e, K, i));
    let Z = await c();
    if (!p()) throw z;
    (Le("subagent_complete", "subagent_async_errored"),
      q8e({
        taskId: e,
        description: o,
        status: "failed",
        error: K,
        taskRegistry: i,
        toolUseId: s.toolUseId,
        finalMessage: Y6n(g),
        ownerAgentId: y,
        ...Z,
      }));
  } finally {
    ($(), MCt(a), Arl(a));
  }
}
var Bnf, Aol, Tol, Fwo, Wnf;
