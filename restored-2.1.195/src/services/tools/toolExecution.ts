// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ALo
// matched 2.1.88 source: src/services/tools/toolExecution.ts
// class=modified  jaccard=0.2864  score=0.362  fileCov=0.5784
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ALo]
s_f = Object.freeze({
  _meta: Object.freeze({
    ["claude/endTurn"]: !0,
  }),
});
function XXn(e) {
  if (e instanceof Error) {
    let t = xd(e);
    if (t) return `Error:${t}`;
    if (typeof e.name === "string" && /^[A-Za-z]{4,60}$/.test(e.name)) return e.name;
    return "Error";
  }
  return "UnknownError";
}
function TLo(e) {
  return lSs(String(Ui(e)));
}
function Mbt(e) {
  return lh(e) || dM(e);
}
function i_f(e, t) {
  return Mbt(e) && t.aborted && h_(t.reason) === "background" ? d$e(uQ) : YAe(e);
}
function lHl(e) {
  if (e instanceof Rqe)
    return {
      code: "tool_mcp_auth_error",
      isSad: !0,
    };
  if (
    e instanceof Error &&
    "errorCode" in e &&
    typeof e.errorCode === "string" &&
    /^HTTP 40[13]\b/.test(e.message)
  )
    return {
      code: "tool_mcp_oauth_error",
      isSad: !0,
    };
  if (e instanceof oM)
    return {
      code: "tool_shell_error",
      isSad: !0,
    };
  if (e instanceof gGt)
    return {
      code: "tool_mcp_call_error",
      isSad: !0,
    };
  let t = on(e);
  if (Vo(e) || Qie(e) || t === "ENOSPC" || t === "EDQUOT" || t === "ENFILE" || t === "EIO")
    return {
      code: "tool_fs_error",
      isSad: !0,
    };
  if (e instanceof ade)
    return {
      code: "tool_read_budget_exceeded",
      isSad: !0,
    };
  if (e instanceof mi)
    return {
      code: "tool_telemetry_safe_error",
      isSad: !0,
    };
  if (e instanceof NK)
    return {
      code: "tool_malformed_command",
      isSad: !0,
    };
  if (e instanceof Error) {
    let r = e.name !== "Error" ? e.name : (e.constructor?.name ?? "");
    if (a_f.has(r))
      return {
        code:
          "reasonCode" in e &&
          typeof e.reasonCode === "string" &&
          /^[a-z][a-z0-9_]{2,39}$/.test(e.reasonCode)
            ? e.reasonCode
            : "tool_expected_error",
        isSad: !0,
      };
  }
  if (e instanceof DOMException && e.name === "TimeoutError")
    return {
      code: "tool_mcp_transport_error",
      isSad: !0,
    };
  let n = on(e);
  if (n !== void 0 && Tdo.has(n))
    return {
      code: "tool_mcp_transport_error",
      isSad: !0,
    };
  return {
    code: "tool_call_threw",
    isSad: !1,
  };
}
function l_f(e, t) {
  switch (e) {
    case "session":
      return t === "allow" ? "user_temporary" : "user_reject";
    case "localSettings":
    case "userSettings":
      return t === "allow" ? "user_permanent" : "user_reject";
    default:
      return "config";
  }
}
function c_f(e, t) {
  if (!e) return "config";
  switch (e.type) {
    case "permissionPromptTool": {
      let r = e.toolResult?.decisionClassification;
      if (r === "user_temporary" || r === "user_permanent" || r === "user_reject") return r;
      return t === "allow" ? "user_temporary" : "user_reject";
    }
    case "rule":
      return l_f(e.rule.source, t);
    case "hook":
      return "hook";
    case "mode":
    case "classifier":
    case "subcommandResults":
    case "asyncAgent":
    case "sandboxOverride":
    case "workingDir":
    case "safetyCheck":
    case "other":
      return "config";
    default:
      return "config";
  }
}
function vLo(e, t, n, r) {
  if (LI() && Pct.has(e) && _l(t, Fm))
    return `. ${e} is only available inside ${Fm}. Use ${Fm} with code: await ${e}({...}).`;
  let o = _l(c3(), e);
  if (n && o && jRe.has(o.name))
    return `. ${e} is not available inside subagents. Complete the task with the tools provided and return findings to the orchestrator.`;
  if (o?.name === j1)
    return `. ${e} is not enabled in this session \u2014 write your message as normal assistant text instead.`;
  if (o)
    return `. ${e} exists but is not enabled in this context. Use one of the available tools instead.`;
  if (Fpt().has(e)) {
    let i = e === wu ? wu : qc;
    if (!_l(t, Co))
      return `. ${i} is not available in this context. Use one of the available tools instead.`;
    return i === wu
      ? `. ${wu} is not available in this session \u2014 find files with \`find\` via the ${Co} tool instead.`
      : `. ${qc} is not available in this session \u2014 search file contents with \`grep\` via the ${Co} tool instead.`;
  }
  let s = n ? "" : u_f(e, r);
  if (s) return s;
  return "";
}
function u_f(e, t) {
  let r = /^mcp__(.+?)__/.exec(e)?.[1];
  if (!r) return "";
  if (!Lgo(t)) return "";
  let o = hc(r),
    s = (tUe() ?? []).find((i) => i.type === "pending" && (i.name === r || hc(i.name) === o));
  if (!s) return "";
  return `. The MCP server '${s.name}' is still connecting. Call ${FRe} to wait for it, then try again.`;
}
function aHl(e) {
  let t = 0;
  for (let n of e)
    if (n.type === "user" && n.imagePasteIds) {
      for (let r of n.imagePasteIds) if (r > t) t = r;
    }
  return t + 1;
}
function tz(e) {
  return "type" in e;
}
function d_f(e, t) {
  if (!e.startsWith("mcp__")) return;
  let n = eI(e);
  if (!n) return;
  return t.find((r) => hc(r.name) === n.serverName);
}
async function* eKt(e, t, n, r, o) {
  let s = e.name,
    i = _l(r.options.tools, s, r.options.toolAliases);
  if (!i) {
    let h = _l(c3(), s);
    if (h && h.aliases?.includes(s)) i = h;
  }
  let a = t.message.id,
    l = t.requestId,
    c = d_f(s, r.options.mcpClients),
    u = c?.type === "connected" ? c : void 0,
    d = u ? (u.config.type ?? "stdio") : void 0,
    p = u ? dke(u.config) : void 0,
    f = fke(fkn(s)?.serverName ?? "", u?.config);
  if (!i) {
    let h = Ui(s),
      y = vLo(s, r.options.tools, r.agentId, r.options.mainLoopModel);
    (T(`Unknown tool ${s}: ${e.id}`),
      Le(TLo(s), "tool_not_found"),
      G("tengu_tool_use_error", {
        error: `No such tool available: ${h}`,
        errorCode: We("NO_SUCH_TOOL"),
        toolName: h,
        toolUseID: e.id,
        isMcp: s.startsWith("mcp__"),
        ...rje(r.agentContext),
        queryChainId: Hr(r.queryTracking?.chainId),
        queryDepth: r.queryTracking?.depth,
        ...(r.options.messageClientPlatform && {
          messageClientPlatform: r.options.messageClientPlatform,
        }),
        ...(d && {
          mcpServerType: $e(d),
        }),
        ...(p && {
          mcpServerBaseUrl: O4(p),
        }),
        ...(l && {
          requestId: Hr(l),
        }),
        ...lW(s, f),
      }),
      yield {
        message: Rn({
          content: [
            {
              type: "tool_result",
              content: `<tool_use_error>Error: No such tool available: ${s}${y}</tool_use_error>`,
              is_error: !0,
              tool_use_id: e.id,
            },
          ],
          toolUseResult: `Error: No such tool available: ${s}${y}`,
          sourceToolAssistantUUID: t.uuid,
          now: o,
        }),
      });
    return;
  }
  let m = TLo(i.name),
    g = e.input;
  try {
    if (r.abortController.signal.aborted) {
      G("tengu_tool_use_cancelled", {
        toolName: Ui(i.name),
        toolUseID: e.id,
        isMcp: i.isMcp ?? !1,
        phase: We("entry"),
        abortKind: $e(zct(r.abortController.signal.reason)),
        queryChainId: Hr(r.queryTracking?.chainId),
        queryDepth: r.queryTracking?.depth,
        ...(d && {
          mcpServerType: $e(d),
        }),
        ...(p && {
          mcpServerBaseUrl: O4(p),
        }),
        ...(l && {
          requestId: Hr(l),
        }),
        ...lW(i.name, f),
      });
      let y = JXn(e.id);
      ((y.content = d$e(uQ)),
        yield {
          message: Rn({
            content: [y],
            toolUseResult: uQ,
            sourceToolAssistantUUID: t.uuid,
            now: o,
          }),
        });
      return;
    }
    let h = Hzt(i, r);
    if (h.denyMessage) {
      (It(m, "tool_isolation_denied"),
        G("tengu_tool_use_isolation_latch_denied", {
          toolName: Ui(i.name),
          toolUseID: e.id,
          isMcp: i.isMcp ?? !1,
          isolationLatch: Oo(h.activeLatch),
          isolationClassifiedAs: Oo(h.classifiedAs),
          queryChainId: Hr(r.queryTracking?.chainId),
          queryDepth: r.queryTracking?.depth,
          ...(d && {
            mcpServerType: $e(d),
          }),
          ...(p && {
            mcpServerBaseUrl: O4(p),
          }),
          ...(l && {
            requestId: Hr(l),
          }),
          ...lW(i.name, f),
        }),
        yield {
          message: Rn({
            content: [
              {
                type: "tool_result",
                content: `<tool_use_error>${h.denyMessage}</tool_use_error>`,
                is_error: !0,
                tool_use_id: e.id,
              },
            ],
            toolUseResult: `Error: ${h.denyMessage}`,
            sourceToolAssistantUUID: t.uuid,
            now: o,
          }),
        });
      return;
    }
    for await (let y of p_f(i, e.id, g, r, n, t, a, l, d, p, f, o)) yield y;
  } catch (h) {
    let y = h instanceof Error ? h.message : String(h),
      b = i ? ` (${i.name})` : "";
    if (!Mbt(h)) {
      T(`runToolUse error${b}: ${y.slice(0, 200)}`);
      let { code: S, isSad: A } = lHl(h);
      if (A) It(m, S);
      else (ke(h), Le(m, "tool_unexpected_error"));
    }
    let _ = `Error calling tool${b}: ${y}`;
    yield {
      message: Rn({
        content: [
          {
            type: "tool_result",
            content: `<tool_use_error>${_}</tool_use_error>`,
            is_error: !0,
            tool_use_id: e.id,
          },
        ],
        toolUseResult: _,
        sourceToolAssistantUUID: t.uuid,
        now: o,
      }),
    };
  }
}
function p_f(e, t, n, r, o, s, i, a, l, c, u, d) {
  let p = new E4();
  return (
    m_f(e, t, n, r, o, s, i, a, l, c, u, d, (f) => {
      if (f.type !== "progress") {
        p.enqueue(f);
        return;
      }
      (G("tengu_tool_use_progress", {
        messageID: Hr(i),
        toolName: Ui(e.name),
        isMcp: e.isMcp ?? !1,
        queryChainId: Hr(r.queryTracking?.chainId),
        queryDepth: r.queryTracking?.depth,
        ...(l && {
          mcpServerType: $e(l),
        }),
        ...(c && {
          mcpServerBaseUrl: O4(c),
        }),
        ...(a && {
          requestId: Hr(a),
        }),
        ...lW(e.name, u),
      }),
        p.enqueue({
          message: RKn({
            toolUseID: f.toolUseID,
            parentToolUseID: t,
            data: f.data,
            now: d,
          }),
        }));
    })
      .then((f) => {
        for (let m of f) p.enqueue(m);
      })
      .catch((f) => {
        p.error(f);
      })
      .finally(() => {
        p.done();
      }),
    p
  );
}
function f_f(e, t, n) {
  if (!o$()) return null;
  if (!F$e(n)) return null;
  if (!y4(e)) return null;
  if (xQ(t).has(e.name)) return null;
  let o = "";
  try {
    o = ` For reference, this tool's input schema is: ${De(H.toJSONSchema(e.inputSchema))}`;
  } catch {}
  return (
    `

This tool's schema was not sent to the API \u2014 it was not in the discovered-tool set derived from message history. ` +
    `Without the schema in your prompt, typed parameters (arrays, numbers, booleans) get emitted as strings and the client-side parser rejects them. Load the tool first: call ${_h} with query "select:${e.name}", then retry this call.${o}`
  );
}
function YXn(e) {
  let {
    phase: t,
    tool: n,
    toolUseID: r,
    toolUseContext: o,
    assistantMessage: s,
    mcpServerType: i,
    mcpServerBaseUrl: a,
    mcpNameLoggable: l,
    requestId: c,
    now: u,
  } = e;
  G("tengu_tool_use_cancelled", {
    toolName: Ui(n.name),
    toolUseID: r,
    isMcp: n.isMcp ?? !1,
    phase: $e(t),
    abortKind: $e(zct(o.abortController.signal.reason)),
    queryChainId: Hr(o.queryTracking?.chainId),
    queryDepth: o.queryTracking?.depth,
    ...(i && {
      mcpServerType: $e(i),
    }),
    ...(a && {
      mcpServerBaseUrl: O4(a),
    }),
    ...(c && {
      requestId: Hr(c),
    }),
    ...lW(n.name, l),
  });
  let d = JXn(r);
  return (
    (d.content = d$e(uQ)),
    [
      {
        message: Rn({
          content: [d],
          toolUseResult: uQ,
          sourceToolAssistantUUID: s.uuid,
          now: u,
        }),
      },
    ]
  );
}
function cHl(e, t) {
  let n = e.safeParse(t);
  if (n.success) return null;
  let r = n.error.issues.filter((o) => o.code !== "unrecognized_keys");
  return r.length > 0 ? r : null;
}
async function m_f(e, t, n, r, o, s, i, a, l, c, u, d, p) {
  let f = TLo(e.name),
    m = De(n).length;
  if (QFe(n)) {
    let { raw: J, len: ne } = n[Aet],
      oe = Ix(J, 200),
      re = `${e.name} was called with input that could not be parsed as JSON.
You sent (first ${oe.length} of ${ne} bytes): ${oe}
Common causes: unescaped backslashes in file paths (use / or \\\\), unescaped control characters, or truncated output. Retry with valid JSON.`;
    return (
      It(f, "tool_input_validation_failed"),
      G("tengu_tool_use_error", {
        error: We("InputValidationError"),
        errorCode: We("JSON_PARSE"),
        errorDetailsHash: Dd(`${e.name}: unparsed tool input`),
        messageID: Hr(i),
        toolName: Ui(e.name),
        isMcp: e.isMcp ?? !1,
        ...rje(r.agentContext),
        toolInputSizeBytes: ne,
        queryChainId: Hr(r.queryTracking?.chainId),
        queryDepth: r.queryTracking?.depth,
        ...(l && {
          mcpServerType: $e(l),
        }),
        ...(c && {
          mcpServerBaseUrl: O4(c),
        }),
        ...(a && {
          requestId: Hr(a),
        }),
        ...lW(e.name, u),
      }),
      [
        {
          message: Rn({
            content: [
              {
                type: "tool_result",
                content: `<tool_use_error>InputValidationError: ${re}</tool_use_error>`,
                is_error: !0,
                tool_use_id: t,
              },
            ],
            toolUseResult: `InputValidationError: JSON parse failed (${ne} bytes)`,
            sourceToolAssistantUUID: s.uuid,
            now: d,
          }),
        },
      ]
    );
  }
  let g = n,
    h = null;
  if (e.coerceInput) {
    if (((h = e.coerceInput(n)), h !== null)) g = h.input;
  }
  let y = e.inputSchema.safeParse(g);
  if (h !== null)
    G("tengu_tool_input_coerced", {
      toolName: Ui(e.name),
      shapeClass: h.shapeClass,
      outcome: We(y.success ? "coerced_valid" : "coerced_still_invalid"),
      toolInputSizeBytes: m,
    });
  if (!y.success) {
    let J = Y6e(e.name, y.error),
      ne = !1;
    if (s1i() && Zzr(n)) {
      let ee = a1i(e.name, e.inputSchema);
      if (ee !== null) ((J = ee), (ne = !0));
    }
    let oe = e.validationErrorSteer?.(n);
    if (oe)
      J += `

${oe}`;
    let re = f_f(e, r.messages, r.options.tools);
    if (re)
      (G("tengu_deferred_tool_schema_not_sent", {
        toolName: Ui(e.name),
        isMcp: e.isMcp ?? !1,
      }),
        (J += re));
    return (
      T(`${e.name} tool input error: ${J.slice(0, 200)}`),
      It(f, "tool_input_validation_failed"),
      G("tengu_tool_use_error", {
        error: We("InputValidationError"),
        errorCode: We("ZOD_VALIDATION"),
        zodIssueCodes: Uo(y.error.issues.map((ee) => ee.code)).join(","),
        errorDetailsHash: Dd(J),
        messageID: Hr(i),
        toolName: Ui(e.name),
        isMcp: e.isMcp ?? !1,
        ...rje(r.agentContext),
        toolInputSizeBytes: m,
        ...(ne && {
          emptyInputRepaired: !0,
        }),
        queryChainId: Hr(r.queryTracking?.chainId),
        queryDepth: r.queryTracking?.depth,
        ...(r.options.messageClientPlatform && {
          messageClientPlatform: r.options.messageClientPlatform,
        }),
        ...(l && {
          mcpServerType: $e(l),
        }),
        ...(c && {
          mcpServerBaseUrl: O4(c),
        }),
        ...(a && {
          requestId: Hr(a),
        }),
        ...lW(e.name, u),
      }),
      [
        {
          message: Rn({
            content: [
              {
                type: "tool_result",
                content: `<tool_use_error>InputValidationError: ${J}</tool_use_error>`,
                is_error: !0,
                tool_use_id: t,
              },
            ],
            toolUseResult: `InputValidationError: ${y.error.message}`,
            sourceToolAssistantUUID: s.uuid,
            now: d,
          }),
        },
      ]
    );
  }
  let b = await e.validateInput?.(y.data, r);
  if (cSe(r.abortController.signal))
    return YXn({
      phase: "validate_input",
      tool: e,
      toolUseID: t,
      toolUseContext: r,
      assistantMessage: s,
      mcpServerType: l,
      mcpServerBaseUrl: c,
      mcpNameLoggable: u,
      requestId: a,
      now: d,
    });
  if (b?.result === !1)
    return (
      T(`${e.name} tool validation error: ${b.message?.slice(0, 200)}`),
      It(f, "tool_validate_input_rejected"),
      G("tengu_tool_use_error", {
        messageID: Hr(i),
        toolName: Ui(e.name),
        error: We("ValidateInputError"),
        ...LM(b.message),
        errorCode: b.errorCode,
        isMcp: e.isMcp ?? !1,
        ...rje(r.agentContext),
        queryChainId: Hr(r.queryTracking?.chainId),
        queryDepth: r.queryTracking?.depth,
        ...(r.options.messageClientPlatform && {
          messageClientPlatform: r.options.messageClientPlatform,
        }),
        ...(l && {
          mcpServerType: $e(l),
        }),
        ...(c && {
          mcpServerBaseUrl: O4(c),
        }),
        ...(a && {
          requestId: Hr(a),
        }),
        ...lW(e.name, u),
      }),
      [
        {
          message: Rn({
            content: [
              {
                type: "tool_result",
                content: `<tool_use_error>${b.message}</tool_use_error>`,
                is_error: !0,
                tool_use_id: t,
              },
            ],
            toolUseResult: `Error: ${b.message}`,
            sourceToolAssistantUUID: s.uuid,
            now: d,
          }),
        },
      ]
    );
  if (e.name === Co && y.data && "command" in y.data)
    uHl(y.data.command, Fr(r), r.abortController.signal, r.options.isNonInteractiveSession);
  let _ = [],
    S = y.data;
  if (e.name === Co && S && typeof S === "object" && "_simulatedSedEdit" in S) {
    let { _simulatedSedEdit: J, ...ne } = S;
    S = ne;
  }
  let A = S,
    v =
      e.backfillObservableInput && typeof S === "object" && S !== null
        ? {
            ...S,
          }
        : null;
  if (v) (e.backfillObservableInput(v), (S = v));
  let C = !1,
    x,
    I,
    k = [],
    D = Date.now();
  for await (let J of _zt(r, e, S, t, s.message.id, a, l, c))
    switch (J.type) {
      case "message":
        if (J.message.message.type === "progress") p(J.message.message);
        else {
          _.push(J.message);
          let ne = J.message.message.attachment;
          if (
            ne &&
            "command" in ne &&
            ne.command !== void 0 &&
            "durationMs" in ne &&
            ne.durationMs !== void 0
          )
            k.push({
              command: ne.command,
              durationMs: ne.durationMs,
            });
        }
        break;
      case "hookPermissionResult":
        I = J.hookPermissionResult;
        break;
      case "hookUpdatedInput":
        S = J.updatedInput;
        break;
      case "preventContinuation":
        C = J.shouldPreventContinuation;
        break;
      case "stopReason":
        x = J.stopReason;
        break;
      case "additionalContext":
        _.push(J.message);
        break;
      case "defer": {
        if (
          (Kve()?.observe("pre_tool_hook_duration_ms", Date.now() - D),
          !r.options.isNonInteractiveSession)
        ) {
          T(
            `Hook ${J.hookName} returned permissionDecision=defer in interactive mode; ignoring (defer is print-mode only)`,
            {
              level: "warn",
            },
          );
          break;
        }
        let ne = Array.isArray(s.message.content)
          ? On(s.message.content, (oe) => oe.type === "tool_use")
          : 1;
        if (ne > 1) {
          T(
            `Hook ${J.hookName} returned permissionDecision=defer but ${ne} tool calls are in this batch; ignoring (defer is solo-only \u2014 siblings would be orphaned on resume)`,
            {
              level: "warn",
            },
          );
          break;
        }
        return (
          G("tengu_pre_tool_hook_deferred", {
            toolName: Ui(e.name),
            queryChainId: Hr(r.queryTracking?.chainId),
            queryDepth: r.queryTracking?.depth,
          }),
          _.push({
            message: ai({
              type: "hook_deferred_tool",
              toolUseID: t,
              toolName: e.name,
              toolInput: S,
              hookName: J.hookName,
              hookEvent: "PreToolUse",
              permissionMode: Fr(r).mode,
            }),
          }),
          _
        );
      }
      case "stop":
        return (
          Kve()?.observe("pre_tool_hook_duration_ms", Date.now() - D),
          _.push({
            message: Rn({
              content: [JXn(t)],
              toolUseResult: `Error: ${x}`,
              sourceToolAssistantUUID: s.uuid,
              now: d,
            }),
          }),
          _
        );
    }
  let P = Date.now() - D;
  if ((Kve()?.observe("pre_tool_hook_duration_ms", P), P >= HLo))
    T(`Slow PreToolUse hooks: ${P}ms for ${e.name} (${k.length} hooks)`, {
      level: "info",
    });
  let O = {};
  if (S && typeof S === "object") {
    if (e.name === Ds && "file_path" in S && sg()) O.file_path = String(S.file_path);
    else if ((e.name === ka || e.name === Wc) && "file_path" in S && sg())
      O.file_path = String(S.file_path);
    else if (e.name === Co && "command" in S && sg()) {
      let J = S;
      O.full_command = J.command;
    } else if (sg()) {
      let J = kzr(e.name, S, e.userFacingName?.(void 0));
      if (J) O.skill_name = J;
      let ne = Rzr(e.name, S);
      if (ne) O.subagent_type = ne;
    }
  }
  let L = oka(e.name, r.agentContext, O, ude() || (mC() && sg()) ? De(S) : void 0, t);
  ska();
  let M = Fr(r).mode,
    N = Date.now(),
    B = await yzt(I, e, S, r, o, s, t),
    $ = B.decision;
  if (((S = B.input), $.behavior !== "allow" && cSe(r.abortController.signal)))
    return (
      N3t("cancelled", "server_fallback_tombstone"),
      Qdt(L),
      YXn({
        phase: "permission",
        tool: e,
        toolUseID: t,
        toolUseContext: r,
        assistantMessage: s,
        mcpServerType: l,
        mcpServerBaseUrl: c,
        mcpNameLoggable: u,
        requestId: a,
        now: d,
      })
    );
  if ($.behavior !== "allow") r.onPermissionDenial?.(e, t, S);
  let q = Date.now() - N;
  if (q >= HLo && M === "auto")
    T(`Slow permission decision: ${q}ms for ${e.name} (mode=${M}, behavior=${$.behavior})`, {
      level: "info",
    });
  if (
    (B$a({
      toolName: e.name,
      isMcp: e.isMcp ?? !1,
      messageId: i,
      toolUseID: t,
      permissionMode: Fr(r).mode,
      behavior: $.behavior,
      decisionReason: $.decisionReason,
      resolvedSource: r.toolDecisions?.[t]?.source,
    }),
    $.behavior !== "ask" && r.toolDecisions?.[t] === void 0)
  ) {
    let J = $.behavior === "allow" ? "accept" : "reject",
      ne = c_f($.decisionReason, $.behavior),
      oe = nNt(e.name, S, e.userFacingName?.(void 0));
    if (
      (Jc("tool_decision", {
        decision: J,
        source: ne,
        tool_name: Ui(e.name),
        tool_use_id: t,
        ...(Object.keys(oe).length > 0 && {
          tool_parameters: De(oe),
        }),
      }),
      Igo(e.name))
    )
      xgo(e, S, J, ne).then((re) => fCt()?.add(1, re));
  }
  if (
    $.decisionReason?.type === "hook" &&
    $.decisionReason.hookName === "PermissionRequest" &&
    $.behavior !== "ask"
  )
    _.push({
      message: ai({
        type: "hook_permission_decision",
        decision: $.behavior,
        toolUseID: t,
        hookEvent: "PermissionRequest",
      }),
    });
  if ($.behavior !== "allow") {
    T(`${e.name} tool permission denied`);
    let J = r.toolDecisions?.[t];
    (N3t("reject", J?.source || "unknown"),
      Qdt(L),
      G("tengu_tool_use_can_use_tool_rejected", {
        messageID: Hr(i),
        toolName: Ui(e.name),
        queryChainId: Hr(r.queryTracking?.chainId),
        queryDepth: r.queryTracking?.depth,
        ...(r.options.messageClientPlatform && {
          messageClientPlatform: r.options.messageClientPlatform,
        }),
        ...(l && {
          mcpServerType: $e(l),
        }),
        ...(c && {
          mcpServerBaseUrl: O4(c),
        }),
        ...(a && {
          requestId: Hr(a),
        }),
        ...lW(e.name, u),
      }));
    let ne = $.message;
    if (C && !ne) ne = `Execution stopped by PreToolUse hook${x ? `: ${x}` : ""}`;
    let oe = [
        {
          type: "tool_result",
          content: ne,
          is_error: !0,
          tool_use_id: t,
        },
      ],
      re = $.behavior === "ask" ? $.contentBlocks : void 0;
    if (re?.length) oe.push(...re);
    let ee;
    if (re?.length) {
      let ce = On(re, (ae) => ae.type === "image");
      if (ce > 0) {
        let ae = aHl(r.messages);
        ee = Array.from(
          {
            length: ce,
          },
          (de, Ee) => ae + Ee,
        );
      }
    }
    if (
      (_.push({
        message: Rn({
          content: oe,
          imagePasteIds: ee,
          toolUseResult: `Error: ${ne}`,
          toolDenialKind: AAe() ? Frl($) : void 0,
          sourceToolAssistantUUID: s.uuid,
          now: d,
        }),
      }),
      $.decisionReason?.type === "classifier" && $.decisionReason.classifier === "auto-mode")
    ) {
      let ce = !1;
      for await (let ae of tKt(
        e.name,
        t,
        S,
        $.decisionReason.reason ?? "Permission denied",
        r,
        M,
        r.abortController.signal,
      ))
        if (ae.retry) ce = !0;
      if (ce)
        _.push({
          message: Rn({
            content: "The PermissionDenied hook indicated you may retry this tool call.",
            isMeta: !0,
            now: d,
          }),
        });
    }
    return _;
  }
  if (
    (G("tengu_tool_use_can_use_tool_allowed", {
      messageID: Hr(i),
      toolName: Ui(e.name),
      queryChainId: Hr(r.queryTracking?.chainId),
      queryDepth: r.queryTracking?.depth,
      ...(l && {
        mcpServerType: $e(l),
      }),
      ...(c && {
        mcpServerBaseUrl: O4(c),
      }),
      ...(a && {
        requestId: Hr(a),
      }),
      ...lW(e.name, u),
    }),
    $.updatedInput !== void 0 && !Zzr($.updatedInput))
  ) {
    let J = cHl(e.inputSchema, $.updatedInput);
    if (J !== null) {
      let ne = new H.ZodError(J),
        oe = `The permission handler returned updatedInput for ${e.name} that failed schema validation: ${Y6e(e.name, ne)}
This is a configuration issue in your canUseTool callback, PermissionRequest hook, or permission-prompt tool \u2014 updatedInput must satisfy the tool's input schema. The tool input from the model was valid.`,
        re = Uo(J.map((ee) => ee.code));
      return (
        N3t("reject", "permission_updated_input_invalid"),
        Qdt(L),
        T(
          `Permission handler updatedInput for ${e.name} failed schema validation (${re.join(",")})`,
          {
            level: "warn",
          },
        ),
        It(f, "tool_permission_updated_input_invalid"),
        G("tengu_tool_use_error", {
          error: We("InputValidationError"),
          errorCode: We("PERMISSION_UPDATED_INPUT"),
          zodIssueCodes: HK(re),
          errorDetailsHash: Dd(oe),
          messageID: Hr(i),
          toolName: Ui(e.name),
          isMcp: e.isMcp ?? !1,
          ...rje(r.agentContext),
          toolInputSizeBytes: m,
          queryChainId: Hr(r.queryTracking?.chainId),
          queryDepth: r.queryTracking?.depth,
          ...(l && {
            mcpServerType: $e(l),
          }),
          ...(c && {
            mcpServerBaseUrl: O4(c),
          }),
          ...(a && {
            requestId: Hr(a),
          }),
          ...lW(e.name, u),
        }),
        _.push({
          message: Rn({
            content: [
              {
                type: "tool_result",
                content: `<tool_use_error>${oe}</tool_use_error>`,
                is_error: !0,
                tool_use_id: t,
              },
            ],
            toolUseResult: `InputValidationError: permission handler updatedInput failed schema for ${e.name}`,
            sourceToolAssistantUUID: s.uuid,
            now: d,
          }),
        }),
        _
      );
    }
    S = $.updatedInput;
  }
  let W = SOi(S),
    V = nNt(e.name, S, e.userFacingName?.(void 0)),
    Y = r.toolDecisions?.[t];
  (N3t(Y?.decision || "unknown", Y?.source || "unknown"), ika(t));
  let z = Date.now(),
    K = process.memoryUsage();
  if (
    v &&
    S !== A &&
    typeof S === "object" &&
    S !== null &&
    "file_path" in S &&
    "file_path" in A &&
    S.file_path === v.file_path
  )
    A = {
      ...S,
      file_path: A.file_path,
    };
  else if (S !== v) A = S;
  if (cSe(r.abortController.signal))
    return YXn({
      phase: "pre_call",
      tool: e,
      toolUseID: t,
      toolUseContext: r,
      assistantMessage: s,
      mcpServerType: l,
      mcpServerBaseUrl: c,
      mcpNameLoggable: u,
      requestId: a,
      now: d,
    });
  (p({
    type: "set_in_progress_tool_use_ids",
    op: {
      action: "add",
      ids: [t],
    },
  }),
    T(`[Stall] tool_dispatch_start tool=${e.name} toolUseId=${t} permissionDecisionMs=${q}`, {
      level: "info",
    }));
  let Z = !1;
  try {
    zXn("tool_exec", r.agentId);
    let J = await e.call(
        A,
        {
          ...r,
          toolUseId: t,
          userModified: $.userModified ?? !1,
        },
        o,
        s,
        p,
      ),
      ne = Date.now() - z,
      oe = process.memoryUsage();
    if (
      (Qon(ne),
      T(`[Stall] tool_dispatch_end tool=${e.name} toolUseId=${t} outcome=ok durationMs=${ne}`, {
        level: "info",
      }),
      (Z = !0),
      J.data && typeof J.data === "object")
    ) {
      let Ue = {};
      if (e.name === Ds) {
        let tt = J.data;
        if (tt.type === "text") {
          if (sg() && "file_path" in S) Ue.file_path = String(S.file_path);
          Ue.content = tt.file.content;
        }
      }
      if ((e.name === ka || e.name === Wc) && "file_path" in S) {
        if (sg()) Ue.file_path = String(S.file_path);
        if (sg() && e.name === ka && "structuredPatch" in J.data)
          Ue.diff = De(J.data.structuredPatch);
        if (sg() && e.name === Wc && "content" in S) Ue.content = String(S.content);
      }
      if (e.name === Co && "command" in S) {
        let tt = S;
        if (sg()) Ue.bash_command = tt.command;
        if ("stdout" in J.data) Ue.output = String(J.data.stdout);
      }
      if (Object.keys(Ue).length > 0) aka("tool.output", Ue);
    }
    if (typeof J === "object" && "structured_output" in J)
      _.push({
        message: ai({
          type: "structured_output",
          data: J.structured_output,
          toolUseID: t,
        }),
      });
    upo({
      success: !0,
    });
    let re =
      ude() || (mC() && Rst())
        ? J.data && typeof J.data === "object"
          ? De(J.data)
          : String(J.data ?? "")
        : void 0;
    Qdt(L, re);
    let ee = e.mapToolResultToToolResultBlockParam(J.data, t),
      ce = ee.content,
      ae = !ce ? 0 : typeof ce === "string" ? ce.length : De(ce).length,
      de = AOi(J.newMessages),
      Ee,
      me,
      pe,
      ge,
      he;
    if (S && typeof S === "object") {
      if ((e.name === Ds || e.name === ka || e.name === Wc) && "file_path" in S)
        ((Ee = jte(String(S.file_path))), (pe = String(A.file_path).length));
      else if (e.name === RI && "notebook_path" in S) {
        let Ue = String(S.notebook_path);
        ((Ee = jte(Ue)), (pe = Ue.length));
      } else if (e.name === g4 && "file_path" in S) {
        let Ue = String(S.file_path);
        ((Ee = jte(Ue)), (pe = Ue.length));
      } else if (e.name === Co && "command" in S) {
        let Ue = S;
        ((Ee = EOi(Ue.command, Ue._simulatedSedEdit?.filePath)),
          (me = Lzr(Ue.command)),
          (ge = Ue.command.length));
      } else if (
        (e.name === rLt || e.name === Ss) &&
        "command" in S &&
        typeof S.command === "string"
      )
        me = Lzr(S.command);
      else if (e.name === nWt) {
        let Ue = S,
          tt = (Ke) => (Array.isArray(Ke) ? Ke.length : void 0),
          bt = Ue.method === "report_validate" ? Ue.counts : void 0;
        he = {
          dsMethod: String(Ue.method),
          ...(typeof Ue.projectId === "string" && {
            dsProjectIdHash: Dd(Ue.projectId),
          }),
          ...(tt(Ue.assets) !== void 0 && {
            dsAssetCount: tt(Ue.assets),
          }),
          ...(tt(Ue.files) !== void 0 && {
            dsFileCount: tt(Ue.files),
          }),
          ...(tt(Ue.paths) !== void 0 && {
            dsPathCount: tt(Ue.paths),
          }),
          ...(tt(Ue.writes) !== void 0 && {
            dsWriteCount: tt(Ue.writes),
          }),
          ...(tt(Ue.deletes) !== void 0 && {
            dsDeleteCount: tt(Ue.deletes),
          }),
          ...(bt && {
            dsValidateTotal: bt.total,
            dsValidateBad: bt.bad,
            dsValidateThin: bt.thin,
            dsValidateVi: bt.variantsIdentical,
            dsValidateIterations: bt.iterations,
          }),
        };
      }
    }
    if (
      (xe(f),
      G("tengu_tool_use_success", {
        messageID: Hr(i),
        toolName: Ui(e.name),
        isMcp: e.isMcp ?? !1,
        durationMs: ne,
        rssDeltaBytes: oe.rss - K.rss,
        heapUsedDeltaBytes: oe.heapUsed - K.heapUsed,
        externalDeltaBytes: oe.external - K.external,
        preToolHookDurationMs: P,
        permissionDurationMs: q,
        toolResultSizeBytes: ae,
        ...(de > 0 && {
          toolResultAttachmentBytes: de,
        }),
        toolInputSizeBytes: m,
        ...(Ee !== void 0 && {
          fileExtension: Ee,
        }),
        ...(me !== void 0 && {
          bashCommandFileExtensions: me,
        }),
        ...(pe !== void 0 && {
          filePathLen: pe,
        }),
        ...(ge !== void 0 && {
          bashCommandLen: ge,
        }),
        ...he,
        ...(e.name === Ds &&
          S &&
          typeof S === "object" && {
            readHasLimit: S.limit !== void 0,
            readHasOffset: S.offset !== void 0,
          }),
        queryChainId: Hr(r.queryTracking?.chainId),
        queryDepth: r.queryTracking?.depth,
        ...(r.options.messageClientPlatform && {
          messageClientPlatform: r.options.messageClientPlatform,
        }),
        ...(l && {
          mcpServerType: $e(l),
        }),
        ...(c && {
          mcpServerBaseUrl: O4(c),
        }),
        ...(a && {
          requestId: Hr(a),
        }),
        ...(e.readOnlyHint !== void 0 && {
          readOnlyHint: e.readOnlyHint,
        }),
        ...lW(e.name, u),
      }),
      sg() &&
        (e.name === Co || e.name === Ss) &&
        "command" in S &&
        typeof S.command === "string" &&
        S.command.match(/\bgit\s+commit\b/) &&
        J.data &&
        typeof J.data === "object" &&
        "stdout" in J.data)
    ) {
      let Ue = Bgo(String(J.data.stdout));
      if (Ue) V.git_commit_id = Ue;
    }
    let ie = wdo(e);
    Jc("tool_result", {
      tool_name: Ui(e.name),
      tool_use_id: t,
      success: "true",
      duration_ms: String(ne),
      ...(Object.keys(V).length > 0 && {
        tool_parameters: De(V),
      }),
      ...(W && {
        tool_input: W,
      }),
      tool_input_size_bytes: String(m),
      tool_result_size_bytes: String(ae),
      ...(Y && {
        decision_source: Y.source,
        decision_type: Y.decision,
      }),
      ...(ie && {
        mcp_server_scope: ie,
      }),
    });
    let le = J.data,
      He = [],
      ye = J.contextLayers,
      ue = J.mcpMeta,
      we = J.endsTurn;
    async function Ce(Ue, tt) {
      let Ke = [
        tt
          ? await gIa(tt, e.name, e.maxResultSizeChars, e.persistenceThresholdCeiling)
          : await Wdt(e, Ue, t),
      ];
      if ("acceptFeedback" in $ && $.acceptFeedback)
        Ke.push({
          type: "text",
          text: $.acceptFeedback,
        });
      let Et = "contentBlocks" in $ ? $.contentBlocks : void 0;
      if (Et?.length) Ke.push(...Et);
      let ct;
      if (Et?.length) {
        let Je = On(Et, (gt) => gt.type === "image");
        if (Je > 0) {
          let gt = aHl(r.messages);
          ct = Array.from(
            {
              length: Je,
            },
            (st, xt) => gt + xt,
          );
        }
      }
      _.push({
        message: Rn({
          content: Ke,
          imagePasteIds: ct,
          toolUseResult:
            r.agentId && !r.preserveToolUseResults && !e.preserveToolUseResultInSubagents
              ? void 0
              : Ue,
          mcpMeta: ELo(r.agentId, ue),
          toolEndsTurn: we,
          sourceToolAssistantUUID: s.uuid,
          now: d,
        }),
        contextLayers:
          ye && ye.length > 0
            ? {
                toolUseID: t,
                layers: ye,
              }
            : void 0,
      });
    }
    let Ie = [],
      Ve = Date.now(),
      Ze = !1,
      Be = !1;
    for await (let Ue of gzt(r, e, t, s.message.id, S, le, a, l, c, ne))
      if (((Ze = !0), "updatedToolOutput" in Ue)) ((le = Ue.updatedToolOutput), (Be = !0));
      else if ((He.push(Ue), Ue.message.type === "attachment")) {
        let tt = Ue.message.attachment;
        if (
          "command" in tt &&
          tt.command !== void 0 &&
          "durationMs" in tt &&
          tt.durationMs !== void 0
        )
          Ie.push({
            command: tt.command,
            durationMs: tt.durationMs,
          });
      }
    let Me = Date.now() - Ve;
    if (Ze) {
      let Ue = Z7n(e.name, t, S, r.readFileState);
      if (Ue)
        He.push({
          message: Ue,
        });
    }
    if (Me >= HLo)
      T(`Slow PostToolUse hooks: ${Me}ms for ${e.name} (${Ie.length} hooks)`, {
        level: "info",
      });
    if (gk(e)) await Ce(le);
    else {
      let Ue = ee;
      if (Be) {
        let tt = e.outputSchema?.safeParse(le),
          bt = (Ke) => {
            (T(
              `PostToolUse hook returned updatedToolOutput that does not match ${e.name}'s output shape: ${Ke}`,
              {
                level: "error",
              },
            ),
              (le = J.data),
              He.push({
                message: ai({
                  type: "hook_error_during_execution",
                  content: `PostToolUse hook returned updatedToolOutput that does not match ${e.name}'s output shape; using original output. ${Ke}`,
                  hookName: `PostToolUse:${e.name}`,
                  toolUseID: t,
                  hookEvent: "PostToolUse",
                }),
              }));
          };
        if (tt && !tt.success) bt(tt.error.message);
        else
          try {
            let Ke = e.mapToolResultToToolResultBlockParam(le, t);
            if (Ke === void 0) bt("mapper returned undefined");
            else Ue = Ke;
          } catch (Ke) {
            bt(YAe(Ke));
          }
      }
      await Ce(le, Ue);
    }
    for (let Ue of He) _.push(Ue);
    if (J.newMessages && J.newMessages.length > 0)
      for (let Ue of J.newMessages)
        _.push({
          message: Ue,
        });
    if (C)
      _.push({
        message: ai({
          type: "hook_stopped_continuation",
          message: x || "Execution stopped by hook",
          hookName: `PreToolUse:${e.name}`,
          toolUseID: t,
          hookEvent: "PreToolUse",
        }),
      });
    return _;
  } catch (J) {
    let ne = Date.now() - z,
      oe = process.memoryUsage();
    if ((Qon(ne), !Z))
      T(
        `[Stall] tool_dispatch_end tool=${e.name} toolUseId=${t} outcome=${Mbt(J) ? "aborted" : "error"} durationMs=${ne}`,
        {
          level: Mbt(J) ? "info" : "warn",
        },
      );
    else
      T(`[Stall] tool_dispatch_post_error tool=${e.name} toolUseId=${t} durationMs=${ne}`, {
        level: "warn",
      });
    let re = be(J),
      ee = XXn(J);
    if (
      (upo({
        success: !1,
        error: sg() ? re : ee,
      }),
      Qdt(L),
      J instanceof Rqe)
    )
      r2n(J.serverName, r.setAppState);
    let ce = cSe(r.abortController.signal);
    if (!ce && !Mbt(J)) {
      T(`${e.name} tool error (${ne}ms): ${re.slice(0, 200)}`);
      let { code: pe, isSad: ge } = lHl(J);
      if (ge) It(f, pe);
      else (ke(J), Le(f, pe));
      G("tengu_tool_use_error", {
        messageID: Hr(i),
        toolName: Ui(e.name),
        error: ee,
        ...LM(J),
        errorCode: ee,
        isMcp: e.isMcp ?? !1,
        ...rje(r.agentContext),
        rssDeltaBytes: oe.rss - K.rss,
        heapUsedDeltaBytes: oe.heapUsed - K.heapUsed,
        externalDeltaBytes: oe.external - K.external,
        ...(e.name === nWt && {
          dsMethod: String(S.method),
        }),
        queryChainId: Hr(r.queryTracking?.chainId),
        queryDepth: r.queryTracking?.depth,
        ...(r.options.messageClientPlatform && {
          messageClientPlatform: r.options.messageClientPlatform,
        }),
        ...(l && {
          mcpServerType: $e(l),
        }),
        ...(c && {
          mcpServerBaseUrl: O4(c),
        }),
        ...(a && {
          requestId: Hr(a),
        }),
        ...(e.readOnlyHint !== void 0 && {
          readOnlyHint: e.readOnlyHint,
        }),
        ...lW(e.name, u),
      });
      let he = wdo(e);
      Jc("tool_result", {
        tool_name: Ui(e.name),
        tool_use_id: t,
        success: "false",
        duration_ms: String(ne),
        error_type: ee,
        ...(sg() && {
          error: re,
        }),
        ...(Object.keys(V).length > 0 && {
          tool_parameters: De(V),
        }),
        ...(W && {
          tool_input: W,
        }),
        tool_input_size_bytes: String(m),
        ...(Y && {
          decision_source: Y.source,
          decision_type: Y.decision,
        }),
        ...(he && {
          mcp_server_scope: he,
        }),
      });
    }
    let ae = i_f(J, r.abortController.signal),
      de = J instanceof gGt ? J.mcpMeta : void 0,
      Ee = Mbt(J),
      me = [];
    for await (let pe of hzt(r, e, t, i, S, ae, Ee || ce, a, l, c, ne)) me.push(pe);
    if (ce)
      return YXn({
        phase: "call",
        tool: e,
        toolUseID: t,
        toolUseContext: r,
        assistantMessage: s,
        mcpServerType: l,
        mcpServerBaseUrl: c,
        mcpNameLoggable: u,
        requestId: a,
        now: d,
      });
    return (
      _.push(
        {
          message: Rn({
            content: [
              {
                type: "tool_result",
                content: ae,
                is_error: !0,
                tool_use_id: t,
              },
            ],
            toolUseResult: `Error: ${ae}`,
            mcpMeta: ELo(r.agentId, de),
            sourceToolAssistantUUID: s.uuid,
            now: d,
          }),
        },
        ...me,
      ),
      _
    );
  } finally {
    if ((KXn("tool_exec", r.agentId), Y && r.toolDecisions)) delete r.toolDecisions[t];
  }
}
var HLo = 2000,
  a_f;
