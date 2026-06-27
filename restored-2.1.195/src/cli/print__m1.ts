// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jfc
// matched 2.1.88 source: src/cli/print.ts
// class=modified (alt of src/cli/print.ts)  jaccard=0.0676  score=0.2343  fileCov=0.0867
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Jfc]
bur = class bur extends TypeError {
  violations;
  frameType;
  constructor(e, t) {
    let n = e[0];
    super(
      `[shoji] non-serializable value on the wire: ${e.length} hard violation(s); first: ${n.kind} ${n.preview} at ${n.path}. ` +
        "The wire cannot carry this \u2014 it must become data (an Input/Event/RPC/Handle) before it can cross the seam.",
    );
    ((this.name = "WireViolationError"), (this.violations = e), (this.frameType = t));
  }
};
async function* Scm(e, t, n) {
  let r = t.messages.filter((l) => l.uuid !== e.messageUuid),
    { messages: o } = await bTt({
      input: e.text,
      mode: "prompt",
      setToolJSX: () => {},
      context: {
        ...t.toolUseContext,
        abortController: n,
        messages: r,
        canUseTool: t.canUseTool,
        setMessages: () => {},
        applyMessageOp: () => {},
        onChangeAPIKey: () => {},
        options: {
          ...t.toolUseContext.options,
          ideInstallationStatus: null,
          theme: "dark",
        },
      },
      messages: r,
      querySource: t.querySource,
    }),
    i = o.find(pA)?.compactMetadata.preservedMessages,
    a = new Set(i?.allUuids ?? i?.uuids ?? []);
  for (let l of o) if (!a.has(l.uuid)) yield l;
  return {
    reason: "completed",
  };
}
function Aur({
  run: e,
  queryParams: t,
  commands: n = [],
  models: r = [],
  unavailableModels: o = [],
  agents: s = [],
  account: i = {},
  outputStyle: a,
  availableOutputStyles: l,
  mcpServers: c = () => [],
  mcpDelegate: u,
  excludeDynamicSections: d,
  settings: p = bcm(),
  authDelegate: f,
  mcpAuthDelegate: m,
  ambient: g,
  tools: h = [],
  skills: y = [],
  plugins: b = [],
  pluginErrors: _ = [],
  pluginWarnings: S = [],
  initialModel: A,
  initialPermissionMode: v,
  fastModeState: C,
  hostOwnsPermissionMode: x = false,
}) {
  let I = kfc({
      commands: typeof n === "function" ? n() : n,
      models: typeof r === "function" ? r() : r,
      unavailableModels: typeof o === "function" ? o() : o,
      agents: typeof s === "function" ? s() : s,
      account: i,
      outputStyle: a,
      availableOutputStyles: l,
    }),
    k = new E4(),
    D = 0,
    P = null,
    O = null,
    L = null,
    M = null,
    N = null,
    B = Rt(),
    $ = fua();
  if ($ !== B && $ !== Vao)
    T(
      `[shoji-engine] sdkEventQueue push key '${$}' \u2260 engine sessionId '${B}' \u2014 host ALS wiring likely incorrect; enqueued SdkEvents will not drain here`,
    );
  let q = (ie) => ({
      ...ie,
      session_id: B,
      uuid: "uuid" in ie && typeof ie.uuid === "string" ? ie.uuid : Sur.randomUUID(),
    }),
    W = (ie) => (typeof ie === "function" ? ie() : ie),
    V = () => {
      let ie = W(g);
      if (!ie) return null;
      let le = typeof n === "function" ? n() : n,
        He = typeof s === "function" ? s() : s;
      return gTt({
        ...ie,
        sessionId: B,
        tools: h,
        mcpClients: c().map((ye) => ({
          name: ye.name,
          type: ye.status,
        })),
        model: O ?? W(A) ?? "",
        permissionMode: L ?? W(v) ?? "default",
        commands: le,
        agents: He.map((ye) => ({
          agentType: ye.name,
        })),
        skills: y,
        plugins: b,
        pluginErrors: _,
        pluginWarnings: S,
        fastModeState: W(C) ?? "off",
      });
    },
    Y = false,
    z = false,
    K = 0,
    Z = null,
    J = false,
    ne = QU(V1),
    oe = [],
    re = false,
    ee = [],
    ce = false,
    ae = (ie) => {
      if (oe.length >= _cm) {
        if ((oe.shift(), !re))
          ((re = true),
            ke(
              Error(
                "[shoji-engine] pendingDenialFrames buffer is full; dropping oldest permission_denied advisory frames",
              ),
            ));
      }
      oe.push(ie);
    };
  function* de() {
    while (oe.length > 0) {
      let ie = oe.shift();
      (T(`[shoji-engine] yield ${ie.type}/${ie.subtype}`), yield q(ie));
    }
  }
  function* Ee() {
    yield* de();
    for (let ie of Kao(B)) (T(`[shoji-engine] yield sdk-queue system/${ie.subtype}`), yield q(ie));
  }
  function* me() {
    while (ee.length > 0) yield ee.shift();
  }
  let pe = () => {
    if (!ce) return false;
    let ie = Z?.toolUseContext?.getAppState;
    return ie !== void 0 && Ubt(ie()).some((le) => zJ(le) && wH(le));
  };
  async function* ge() {
    Y = false;
    let ie = V();
    if (ie) (T("[shoji-engine] yield system/init (first)"), yield q(ie));
    for await (let le of k) {
      if (Y) {
        Y = false;
        let Te = V();
        if (Te) (T("[shoji-engine] yield system/init (re-emit)"), yield q(Te));
      }
      yield* Ee();
      let He = Date.now(),
        ye = {
          origin: le.origin,
          parent_tool_use_id: le.parent_tool_use_id,
          priority: le.priority,
          shouldQuery: le.shouldQuery,
          timestamp: le.timestamp,
        },
        ue;
      try {
        ue = await t(le);
      } catch (Te) {
        (ke(Te), yield* Ee());
        let Re = {
          type: "result",
          subtype: "error_during_execution",
          is_error: true,
          errors: [`queryParams builder failed: ${be(Te)}`],
          duration_ms: Date.now() - He,
          duration_api_ms: WH(),
          num_turns: 0,
          stop_reason: null,
          total_cost_usd: jb(),
          usage: f8o(),
          modelUsage: WC(),
          permission_denials: [],
          uuid: Sur.randomUUID(),
          session_id: B,
          fast_mode_state: W(C),
          ...ye,
        };
        if (pe()) ee.push(Re);
        else (yield* me(), yield Re);
        continue;
      }
      (D++, (Z = ue));
      let we = new AbortController();
      P = we;
      let Ce = ue.toolUseContext?.abortController?.signal,
        Ie = () => we.abort(Ce?.reason);
      if (Ce?.aborted) we.abort(Ce.reason);
      else
        Ce?.addEventListener("abort", Ie, {
          once: true,
        });
      T(`[shoji-engine] turn ${D} start`);
      let Ve = [],
        Ze = (Te, Re, Ne) => {
          if (Ve.some((it) => it.tool_use_id === Re)) return;
          Ve.push({
            tool_name: KZt(Te.name),
            tool_use_id: Re,
            tool_input: Ne,
          });
        },
        Be = ue.canUseTool,
        Me = async (Te, Re, Ne, it, Tt, un) => {
          let ze = await Be(Te, Re, Ne, it, Tt, un);
          if (ze.behavior !== "allow") Ze(Te, Tt, Re);
          if (ze.behavior === "deny" && URr(ze))
            ae({
              type: "system",
              subtype: "permission_denied",
              tool_name: Te.name,
              tool_use_id: Tt,
              agent_id: Ne.agentId,
              decision_reason_type: ze.decisionReason?.type,
              decision_reason: fzt(ze.decisionReason),
              message: ze.message,
            });
          return ze;
        };
      if (ne.size > 0 && ue.toolUseContext?.readFileState) {
        for (let [Te, Re] of ne.entries()) {
          let Ne = ue.toolUseContext.readFileState.get(Te);
          if (!Ne || Re.timestamp > Ne.timestamp) ue.toolUseContext.readFileState.set(Te, Re);
        }
        ne.clear();
      }
      let Ue = ue.engineDeferredSlash
          ? Scm(ue.engineDeferredSlash, ue, we)
          : e({
              ...ue,
              canUseTool: Me,
              keepPartialMessageOnAbort: true,
              toolUseContext: {
                ...ue.toolUseContext,
                abortController: we,
                onPermissionDenial: Ze,
                permissionLayers:
                  O !== null || (!x && L !== null) || M !== null || N !== null
                    ? [
                        ...(ue.toolUseContext?.permissionLayers ?? []),
                        ...(O !== null
                          ? [
                              {
                                kind: "model",
                                mainLoopModel: O,
                              },
                            ]
                          : []),
                        ...(!x && L !== null
                          ? [
                              {
                                kind: "permission_mode",
                                mode: L,
                              },
                            ]
                          : []),
                        ...(M !== null
                          ? [
                              {
                                kind: "max_thinking_tokens",
                                maxThinkingTokens: M,
                              },
                            ]
                          : []),
                        ...(N !== null
                          ? [
                              {
                                kind: "flag_settings",
                                settings: N,
                              },
                            ]
                          : []),
                      ]
                    : ue.toolUseContext?.permissionLayers,
              },
            }),
        tt = null,
        bt = ue.engineDeferredSlash ? 0 : 1,
        Ke = null,
        Et = [],
        ct,
        Je = "",
        gt = false,
        st = null,
        xt = "",
        vt = false,
        jt = [],
        en = new Set(),
        Dn = null,
        nn,
        Ln;
      try {
        let Te = await Ue.next();
        while (!Te.done) {
          let Re = Te.value;
          try {
            let Ne = p8o(Re, "output");
            if (Ne.length > 0 && !vt)
              ((vt = true),
                It("shoji_engine", "wire_violation", {
                  frame_type: $e(Re.type),
                  violation_kind: $e(Ne[0].kind),
                }),
                ke(new bur(Ne, Re.type)));
          } catch (Ne) {
            if (!vt)
              ((vt = true),
                It("shoji_engine", "wire_violation", {
                  frame_type: $e(Re.type),
                  violation_kind: We("walker_threw"),
                }),
                ke(Ne));
          }
          if (Re.type === "user") {
            if (!ue.engineDeferredSlash) bt++;
            (Et.push(Re), (Je = ""), (gt = false), (st = null), (xt = ""));
          } else if (Re.type === "tombstone") {
            {
              let Ne = Re.message?.uuid,
                it = Ne !== void 0 ? Et.findLastIndex((Tt) => Tt.uuid === Ne) : Et.length - 1;
              if (it >= 0) Et.splice(it, 1);
            }
            {
              let Ne = Re.message;
              if (Ne?.type === "assistant") {
                let it = Ne.message.content,
                  Tt = Array.isArray(it)
                    ? it.flatMap((un) => (un.type === "tool_use" && un.name === Ip ? [un.id] : []))
                    : [];
                if (Tt.length > 0) {
                  for (let ze of Tt) en.add(ze);
                  let un = (ze) => ze.toolUseID === void 0 || Tt.includes(ze.toolUseID);
                  jt = jt.filter((ze) => !un(ze));
                }
              }
            }
            ((Je = ""), (gt = false), (st = null), (xt = ""));
          } else if (Re.type === "assistant") {
            if (((Dn ??= Date.now()), Et.push(Re), Re.message.stop_reason != null))
              Ke = Re.message.stop_reason;
            ((gt = Re.isApiErrorMessage === true), (st = Re.apiErrorStatus ?? null));
            let Ne = EU(Re.message.content),
              it = Ne?.type === "text" ? Ne.text : "";
            if (gt) ((xt = it), (Je = ""));
            else Je = a5e.has(it) ? "" : it;
          } else if (
            Re.type === "stream_event" &&
            Re.event.type === "message_delta" &&
            Re.event.delta.stop_reason != null
          )
            Ke = Re.event.delta.stop_reason;
          else if (Re.type === "attachment" && Re.attachment.type === "structured_output") {
            if (
              !(Re.attachment.toolUseID !== void 0 ? en.has(Re.attachment.toolUseID) : en.size > 0)
            )
              jt = [
                ...jt,
                {
                  toolUseID: Re.attachment.toolUseID,
                  data: Re.attachment.data,
                },
              ];
          } else if (Re.type === "attachment" && Re.attachment.type === "max_turns_reached")
            ct = {
              turnCount: Re.attachment.turnCount,
              maxTurns: Re.attachment.maxTurns,
            };
          else if (Re.type === "attachment" && Re.attachment.type === "hook_deferred_tool")
            ((nn = {
              id: Re.attachment.toolUseID,
              name: Re.attachment.toolName,
              input: Re.attachment.toolInput,
            }),
              (Ke = "tool_deferred"));
          if (oe.length > 0) yield* de();
          if (
            (T(`[shoji-engine] yield ${Re.type}/${"subtype" in Re ? Re.subtype : "-"}`),
            Re.type === "notification")
          ) {
            let Ne = Re.notification;
            yield q({
              type: "system",
              subtype: "notification",
              key: Ne.key,
              text: Ne.text,
              priority: Ne.priority,
              ...(Ne.color !== void 0 && {
                color: Ne.color,
              }),
              ...(Ne.timeoutMs !== void 0 && {
                timeout_ms: Ne.timeoutMs,
              }),
            });
          } else if (Re.type === "sdk_status")
            yield q({
              type: "system",
              subtype: "status",
              status: Re.status,
              ...(Re.metadata?.compactResult !== void 0 && {
                compact_result: Re.metadata.compactResult,
              }),
              ...(Re.metadata?.compactError !== void 0 && {
                compact_error: Re.metadata.compactError,
              }),
            });
          else if (Re.type === "stream_request_start")
            yield q({
              type: "system",
              subtype: "status",
              status: "requesting",
            });
          else if (Re.type === "system" && Re.subtype === "compact_boundary")
            yield q({
              type: "system",
              subtype: "compact_boundary",
              uuid: Re.uuid,
              compact_metadata: MAt(Re.compactMetadata),
              ...(Re.logicalParentUuid !== void 0 && {
                logical_parent_uuid: Re.logicalParentUuid,
              }),
            });
          else if (Re.type === "system" && Re.subtype === "model_refusal_fallback")
            yield q({
              type: "system",
              subtype: "model_refusal_fallback",
              uuid: Re.uuid,
              trigger: Re.trigger,
              direction: Re.direction,
              original_model: Re.originalModel,
              fallback_model: Re.fallbackModel,
              request_id: Re.requestId,
              api_refusal_category: Re.apiRefusalCategory ?? null,
              api_refusal_explanation: Re.apiRefusalExplanation ?? null,
              ...(Re.retractedMessageUuids !== void 0 && {
                retracted_message_uuids: Re.retractedMessageUuids,
              }),
              refused_user_message_uuid: Re.refusedUserMessageUuid ?? null,
              content: Re.content,
            });
          else if (Re.type === "system" && Re.subtype === "model_refusal_no_fallback")
            yield q({
              type: "system",
              subtype: "model_refusal_no_fallback",
              uuid: Re.uuid,
              original_model: Re.originalModel,
              request_id: Re.requestId,
              api_refusal_category: Re.apiRefusalCategory ?? null,
              api_refusal_explanation: Re.apiRefusalExplanation ?? null,
              refused_user_message_uuid: Re.refusedUserMessageUuid ?? null,
              content: Re.content,
            });
          else if (Re.type === "system" && Re.subtype === "model_fallback")
            yield q({
              type: "system",
              subtype: "model_fallback",
              uuid: Re.uuid,
              trigger: Re.trigger,
              original_model: Re.originalModel,
              fallback_model: Re.fallbackModel,
              content: Re.content,
            });
          else if (Re.type === "system" && Re.subtype === "read_divider");
          else yield q(Re);
          if (Re.type === "system" && Re.subtype === "api_error")
            yield q({
              type: "system",
              subtype: "api_retry",
              attempt: Re.retryAttempt,
              max_retries: Re.maxRetries,
              retry_delay_ms: Re.retryInMs,
              error_status: Re.error.status ?? null,
              error: q1n(Re.error),
            });
          if (Re.type === "attachment" && Re.attachment.type === "relevant_memories") {
            let Ne = dur(Re.attachment.memories);
            if (Ne) {
              let { uuid: it, session_id: Tt, ...un } = Ne;
              yield q(un);
            }
          }
          if (Re.type === "stream_event") {
            if (Re.event.type === "content_block_start") K = 0;
            else if (Re.event.type === "content_block_delta") {
              let { delta: Ne } = Re.event;
              if (Ne.type === "thinking_delta") {
                let it;
                if ("estimated_tokens" in Ne && typeof Ne.estimated_tokens === "number")
                  it = Ne.estimated_tokens;
                else if (typeof Ne.thinking === "string" && Ne.thinking.length > 0)
                  it = bZt(Ne.thinking);
                if (it !== void 0)
                  ((K += it),
                    yield q({
                      type: "system",
                      subtype: "thinking_tokens",
                      estimated_tokens: K,
                      estimated_tokens_delta: it,
                    }),
                    T("[shoji-engine] yield-twin system/thinking_tokens"));
              } else if (Ne.type === "signature_delta" && K > 0) {
                let it = Math.ceil(l5e(Ne.signature.length) / 4);
                if (it > K) {
                  let Tt = it - K;
                  ((K = it),
                    yield q({
                      type: "system",
                      subtype: "thinking_tokens",
                      estimated_tokens: K,
                      estimated_tokens_delta: Tt,
                    }),
                    T("[shoji-engine] yield-twin system/thinking_tokens"));
                }
              }
            }
          }
          if (
            Re.type === "system" &&
            Re.subtype === "local_command" &&
            typeof Re.content === "string" &&
            (Re.content.includes(`<${KC}>`) || Re.content.includes(`<${aY}>`))
          )
            (yield q(mJt(Re.content, Re.uuid)),
              T("[shoji-engine] yield-twin assistant (local_command)"));
          if (
            Re.type === "progress" &&
            (Re.data.type === "bash_progress" || Re.data.type === "powershell_progress")
          )
            (yield q({
              type: "tool_progress",
              tool_use_id: Re.toolUseID,
              tool_name: Re.data.type === "bash_progress" ? Co : Ss,
              parent_tool_use_id: Re.parentToolUseID || null,
              elapsed_time_seconds: Re.data.elapsedTimeSeconds,
              task_id: Re.data.taskId,
            }),
              T("[shoji-engine] yield-twin tool_progress"));
          if (Re.type === "progress" && Re.data.type === "repl_tool_call")
            (yield q({
              type: "tool_progress",
              tool_use_id: Re.toolUseID,
              tool_name: Fm,
              parent_tool_use_id: Re.parentToolUseID || null,
              elapsed_time_seconds: 0,
              repl_call: {
                inner_tool_name: Re.data.toolName,
                inner_tool_input: Re.data.toolInput,
                inner_tool_use_id: Re.data.toolUseId,
                phase: Re.data.phase,
              },
            }),
              T("[shoji-engine] yield-twin tool_progress repl_call"));
          for (let Ne of Kao(B))
            (T(`[shoji-engine] yield sdk-queue system/${Ne.subtype}`), yield q(Ne));
          Te = await Ue.next();
        }
        if (!vt) xe("shoji_engine");
        Ln = Te.value ? Te.value.reason : void 0;
      } catch (Te) {
        tt = be(Te);
      } finally {
        (await Ue.return(void 0).catch(() => {}), Ce?.removeEventListener("abort", Ie));
        let Te = f8o();
        T(
          `[shoji-engine] turn ${D} end (turns=${bt} usage in=${Te.input_tokens} out=${Te.output_tokens} cost=$${jb().toFixed(4)} api=${WH()}ms stop=${Ke} resultLen=${Je.length})`,
        );
      }
      let Hn = Et.at(-1) ?? {
          type: "user",
          message: le.message,
        },
        kr =
          tt !== null
            ? [tt]
            : zZt(Ln) && nn === void 0 && !ZXn(Hn, Ke)
              ? [`[ede_diagnostic] turn aborted (${Ln}) stop_reason=${Ke}`]
              : null;
      if (Je === "") {
        let Te = jt.at(-1)?.data;
        if (Te !== void 0) Je = JSON.stringify(Te);
      }
      let Mr = {
          duration_ms: Date.now() - He,
          duration_api_ms: WH(),
          num_turns: bt,
          stop_reason: Ke,
          total_cost_usd: jb(),
          usage: f8o(),
          modelUsage: WC(),
          permission_denials: Ve,
          uuid: Sur.randomUUID(),
          session_id: B,
          terminal_reason: Ln,
          fast_mode_state: W(C),
          ...ye,
        },
        fe =
          tt === null && nn === void 0 && ct
            ? {
                type: "result",
                subtype: "error_max_turns",
                is_error: true,
                errors: [`Reached maximum number of turns (${ct.maxTurns})`],
                ...Mr,
                num_turns: ct.turnCount,
              }
            : kr !== null
              ? {
                  type: "result",
                  subtype: "error_during_execution",
                  is_error: true,
                  errors: kr,
                  ...Mr,
                }
              : {
                  type: "result",
                  subtype: "success",
                  is_error: gt,
                  api_error_status: st,
                  result: gt ? xt : Je,
                  structured_output: jt.at(-1)?.data,
                  ttft_ms: !gt && Dn !== null ? Math.max(0, Dn - He) : void 0,
                  deferred_tool_use: nn,
                  ...Mr,
                };
      if ((yield* Ee(), pe())) ee.push(fe);
      else (yield* me(), yield fe);
    }
    while (ee.length > 0 && !P?.signal.aborted && pe()) (yield* Ee(), await Nn(100));
    if (ee.length > 0 && P?.signal.aborted && Z?.toolUseContext?.taskRegistry) {
      let { taskRegistry: le, setAppState: He } = Z.toolUseContext;
      lzt({
        taskRegistry: le,
        setAppState: He,
      });
    }
    (yield* Ee(), yield* me());
  }
  function he(ie) {
    try {
      let le = p8o(ie, "input");
      if (le.length > 0 && !z)
        ((z = true),
          It("shoji_engine", "wire_violation", {
            frame_type: $e(ie.type),
            violation_kind: $e(le[0].kind),
          }),
          ke(new bur(le, ie.type)));
    } catch (le) {
      if (!z)
        ((z = true),
          It("shoji_engine", "wire_violation", {
            frame_type: $e(ie.type),
            violation_kind: We("walker_threw"),
          }),
          ke(le));
    }
    switch (ie.type) {
      case "turn":
        k.enqueue(ie);
        break;
      case "interrupt":
        P?.abort(ie.reason !== void 0 ? new DOMException(ie.reason, "AbortError") : void 0);
        break;
      case "set_model":
        ((O = ie.model ?? null), (Y = true), T(`[shoji-engine] send set_model model=${ie.model}`));
        break;
      case "set_permission_mode": {
        if (ie.mode === "bypassPermissions" && wU()) {
          T(
            "[shoji-engine] set_permission_mode:bypassPermissions rejected \u2014 disabled by settings",
          );
          break;
        }
        if (ie.mode === "auto" && !Zv()) {
          T("[shoji-engine] set_permission_mode:auto rejected \u2014 gate not enabled");
          break;
        }
        ((L = ie.mode), (Y = true));
        break;
      }
      case "set_max_thinking_tokens":
        ((M = ie.max_thinking_tokens),
          T(`[shoji-engine] send set_max_thinking_tokens max=${ie.max_thinking_tokens}`));
        break;
      case "apply_flag_settings":
        ((N = {
          ...(N ?? {}),
          ...ie.settings,
        }),
          T(`[shoji-engine] send apply_flag_settings keys=${Object.keys(ie.settings).join(",")}`));
        break;
      case "seed_read_state":
        (ne.set(ie.path, ie.seed), T(`[shoji-engine] send seed_read_state path=${ie.path}`));
        break;
    }
  }
  return Object.assign(ge(), {
    interrupt: async (ie) =>
      he({
        type: "interrupt",
        reason: ie,
      }),
    setModel: async (ie) =>
      he({
        type: "set_model",
        model: ie,
      }),
    setPermissionMode: async (ie) =>
      he({
        type: "set_permission_mode",
        mode: ie,
      }),
    setMaxThinkingTokens: async (ie) =>
      he({
        type: "set_max_thinking_tokens",
        max_thinking_tokens: ie,
      }),
    applyFlagSettings: (ie) => (
      he({
        type: "apply_flag_settings",
        settings: ie,
      }),
      Promise.resolve()
    ),
    seedReadState: async (ie, le) => {
      try {
        let He = ds(ie),
          ye = Math.floor((await Eur.stat(He)).mtimeMs);
        if (ye <= le) {
          let ue = await Eur.readFile(He, "utf-8"),
            we = (ue.charCodeAt(0) === 65279 ? ue.slice(1) : ue).replaceAll(
              `\r
`,
              `
`,
            );
          he({
            type: "seed_read_state",
            path: He,
            seed: {
              content: we,
              timestamp: ye,
              offset: void 0,
              limit: void 0,
            },
          });
        }
      } catch {}
    },
    turnCount: () => D,
    initializationResult: () => Promise.resolve(I),
    accountInfo: () => Promise.resolve(I.account),
    claudeAuthenticate: async (ie) => {
      if (!f) throw Error("claudeAuthenticate: no authDelegate wired");
      return f.authenticate(ie);
    },
    claudeOAuthCallback: async (ie, le) => {
      if (!f) throw Error("claudeOAuthCallback: no authDelegate wired");
      return f.oauthCallback(ie, le);
    },
    claudeOAuthWaitForCompletion: async () => {
      if (!f) throw Error("claudeOAuthWaitForCompletion: no authDelegate wired");
      return f.oauthWaitForCompletion();
    },
    supportedModels: () => Promise.resolve(typeof r === "function" ? r() : I.models),
    supportedCommands: () => Promise.resolve(typeof n === "function" ? n() : I.commands),
    supportedAgents: () => Promise.resolve(typeof s === "function" ? s() : I.agents),
    mcpServerStatus: () => Promise.resolve(c()),
    reconnectMcpServer: async (ie) => {
      if (!u) throw Error(`reconnectMcpServer: no mcpDelegate wired (server: ${ie})`);
      await u.reconnect(ie);
    },
    toggleMcpServer: async (ie, le) => {
      if (!u) throw Error(`toggleMcpServer: no mcpDelegate wired (server: ${ie})`);
      await u.toggle(ie, le);
    },
    setMcpServers: async (ie) => {
      if (!u)
        throw Error(`setMcpServers: no mcpDelegate wired (${Object.keys(ie).length} server(s))`);
      return u.setServers(ie);
    },
    reloadPlugins: async () => {
      if (!u) throw Error("reloadPlugins: no mcpDelegate wired");
      return u.reloadPlugins();
    },
    mcpAuthenticate: async (ie, le) => {
      if (!m) throw Error(`mcpAuthenticate: no mcpAuthDelegate wired (server: ${ie})`);
      return m.authenticate(ie, le);
    },
    mcpClearAuth: async (ie) => {
      if (!m) throw Error(`mcpClearAuth: no mcpAuthDelegate wired (server: ${ie})`);
      return m.clearAuth(ie);
    },
    mcpSubmitOAuthCallbackUrl: async (ie, le) => {
      if (!m) throw Error(`mcpSubmitOAuthCallbackUrl: no mcpAuthDelegate wired (server: ${ie})`);
      return m.submitOAuthCallbackUrl(ie, le);
    },
    getContextUsage: async () => {
      if (Z === null) throw Error("getContextUsage: no turn received yet");
      let { messages: ie, toolUseContext: le } = Z;
      return await gEt({
        messages: ie,
        getAppState: le.getAppState,
        options: {
          mainLoopModel: le.options.mainLoopModel,
          tools: le.options.tools,
          agentDefinitions: le.options.agentDefinitions,
          customSystemPrompt: le.options.customSystemPrompt,
          appendSystemPrompt: le.options.appendSystemPrompt,
          excludeDynamicSections: d,
        },
      });
    },
    stopTask: async (ie) => {
      if (Z === null) throw Error("stopTask: no turn received yet");
      let { taskRegistry: le, setAppState: He } = Z.toolUseContext;
      await mbt(ie, {
        taskRegistry: le,
        setAppState: He,
        source: "user",
      });
    },
    backgroundTasks: async (ie) => {
      if (Z === null) return !ie;
      let { taskRegistry: le } = Z.toolUseContext;
      if (ie) return xJn(ie, le);
      return (j$e(le), true);
    },
    getSettings: () => Promise.resolve(p),
    generateSessionTitle: async (ie, le) => {
      if (le?.persist) J = true;
      let He = (P && !P.signal.aborted ? P : new AbortController()).signal,
        ye = await vse(ie, He);
      if (ye && le?.persist)
        try {
          DQ(Rt(), ye);
        } catch (ue) {
          if (Vo(ue)) T(`saveAiGeneratedTitle failed: ${ue}`);
          else ke(ue);
        }
      return ye;
    },
    messageRated: async ({
      messageUuid: ie,
      sentiment: le,
      surface: He = "tool_use",
      cleared: ye = false,
    }) => {
      if (Us("allow_product_feedback"))
        G("tengu_message_rated", {
          message_uuid: Hr(ie),
          sentiment: $e(le),
          surface: $e(He),
          cleared: ye,
        });
    },
    askSideQuestion: async (ie) => {
      let { getLastCacheSafeParams: le } = await Promise.resolve().then(() => (q0(), yMo)),
        He = le();
      if (He === null) return null;
      let { runSideQuestion: ye } = await Promise.resolve().then(() => (VYt(), YLl)),
        { createAbortController: ue } = await Promise.resolve().then(() => (fp(), cio)),
        we = await ye({
          question: ie,
          cacheSafeParams: {
            ...He,
            toolUseContext: {
              ...He.toolUseContext,
              abortController: ue(),
            },
          },
          threadHistory: false,
        });
      return we.response === null
        ? null
        : {
            response: we.response,
            synthetic: we.synthetic,
          };
    },
    rewindFiles: async (ie, le) => {
      if (Z === null)
        return {
          canRewind: false,
          error: "rewindFiles: no turn received yet",
        };
      let {
          fileHistoryEnabled: He,
          fileHistoryCanRestore: ye,
          fileHistoryGetDiffStats: ue,
          fileHistoryRewind: we,
        } = await Promise.resolve().then(() => (Y4(), VQa)),
        Ce = Z.toolUseContext.getAppState();
      if (!He())
        return {
          canRewind: false,
          error: "File rewinding is not enabled.",
        };
      if (!ye(Ce.fileHistory, ie))
        return {
          canRewind: false,
          error: "No file checkpoint found for this message.",
        };
      if (le?.dryRun ?? false) {
        let Ie = await ue(Ce.fileHistory, ie);
        return {
          canRewind: true,
          filesChanged: Ie?.filesChanged,
          insertions: Ie?.insertions,
          deletions: Ie?.deletions,
        };
      }
      try {
        await we(() => Ce.fileHistory, ie);
      } catch (Ie) {
        return {
          canRewind: false,
          error: `Failed to rewind: ${be(Ie)}`,
        };
      }
      return {
        canRewind: true,
      };
    },
    submitFeedback: async (ie, le) => {
      let He = Mer();
      if (He)
        return {
          feedback_id: null,
          unavailable_reason: He,
        };
      if (Z === null)
        return {
          feedback_id: null,
          unavailable_reason: "no turn received yet",
        };
      let ye = await KSt({
        messages: Z.messages,
        description: ie,
        surface: le?.surface ?? "sdk",
      });
      return ye.success
        ? {
            feedback_id: ye.feedbackId,
          }
        : {
            feedback_id: null,
            is_zdr_org: ye.isZdrOrg,
            failure_reason: ye.failureReason,
            status_code: ye.statusCode,
          };
    },
    streamInput: async (ie) => {
      try {
        for await (let le of ie) {
          let { type: He, ...ye } = le;
          he({
            type: "turn",
            ...ye,
          });
        }
      } finally {
        ((ce = true), k.done());
      }
    },
    readFile: async (ie, le) => {
      if (Z === null) return null;
      try {
        return await ZZt(
          ie,
          le?.maxBytes,
          Z.toolUseContext.getAppState().toolPermissionContext,
          le?.encoding,
        );
      } catch {
        return null;
      }
    },
    launchUltrareview: async (ie, le) => {
      if (Z === null)
        return {
          status: "error",
          message: "launchUltrareview: no turn received yet",
        };
      let { runUltrareviewHeadless: He } = await Promise.resolve().then(() => (kAt(), i9l)),
        { createAbortController: ye } = await Promise.resolve().then(() => (fp(), cio)),
        { taskRegistry: ue } = Z.toolUseContext;
      return await He(ie, {
        confirm: le?.confirm ?? false,
        context: {
          abortController: ye(),
          taskRegistry: ue,
        },
      });
    },
    close: () => {
      ((ce = true), k.done());
    },
  });
}
function f8o() {
  let e = Object.values(WC()),
    t = (n) => e.reduce((r, o) => r + n(o), 0);
  return {
    ...xb,
    input_tokens: t((n) => n.inputTokens),
    output_tokens: t((n) => n.outputTokens),
    cache_read_input_tokens: t((n) => n.cacheReadInputTokens),
    cache_creation_input_tokens: t((n) => n.cacheCreationInputTokens),
    server_tool_use: {
      ...xb.server_tool_use,
      web_search_requests: t((n) => n.webSearchRequests),
    },
  };
}
function Rme() {
  return ut(process.env.CLAUDE_CODE_SHOJI_ENGINE) || at("tengu_shoji_engine", false);
}
var Sur,
  Eur,
  _cm = 1000,
  bcm = () => ({
    effective: {},
    sources: [],
  });
