// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ALo
// matched 2.1.88 source: src/services/tools/toolExecution.ts
// class=modified  jaccard=0.2864  score=0.362  fileCov=0.5784
// note: deminified; 7 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ALo]
s_f = Object.freeze({
  _meta: Object.freeze({
    ["claude/endTurn"]: !0,
  }),
});
function classifyToolError(error) {
  if (error instanceof Error) {
    let t = xd(error);
    if (t) return `Error:${t}`;
    if (typeof error.name === "string" && /^[A-Za-z]{4,60}$/.test(error.name)) return error.name;
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
function ruleSourceToOTelSource(ruleSource, behavior) {
  switch (ruleSource) {
    case "session":
      return behavior === "allow" ? "user_temporary" : "user_reject";
    case "localSettings":
    case "userSettings":
      return behavior === "allow" ? "user_permanent" : "user_reject";
    default:
      return "config";
  }
}
function decisionReasonToOTelSource(reason, behavior) {
  if (!reason) return "config";
  switch (reason.type) {
    case "permissionPromptTool": {
      let r = reason.toolResult?.decisionClassification;
      if (r === "user_temporary" || r === "user_permanent" || r === "user_reject") return r;
      return behavior === "allow" ? "user_temporary" : "user_reject";
    }
    case "rule":
      return ruleSourceToOTelSource(reason.rule.source, behavior);
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
async function* runToolUse(toolUse, assistantMessage, canUseTool, toolUseContext, o) {
  let s = toolUse.name,
    i = _l(toolUseContext.options.tools, s, toolUseContext.options.toolAliases);
  if (!i) {
    let h = _l(c3(), s);
    if (h && h.aliases?.includes(s)) i = h;
  }
  let a = assistantMessage.message.id,
    l = assistantMessage.requestId,
    c = d_f(s, toolUseContext.options.mcpClients),
    u = c?.type === "connected" ? c : void 0,
    d = u ? (u.config.type ?? "stdio") : void 0,
    p = u ? dke(u.config) : void 0,
    f = fke(fkn(s)?.serverName ?? "", u?.config);
  if (!i) {
    let h = Ui(s),
      y = vLo(
        s,
        toolUseContext.options.tools,
        toolUseContext.agentId,
        toolUseContext.options.mainLoopModel,
      );
    (T(`Unknown tool ${s}: ${toolUse.id}`),
      Le(TLo(s), "tool_not_found"),
      G("tengu_tool_use_error", {
        error: `No such tool available: ${h}`,
        errorCode: We("NO_SUCH_TOOL"),
        toolName: h,
        toolUseID: toolUse.id,
        isMcp: s.startsWith("mcp__"),
        ...rje(toolUseContext.agentContext),
        queryChainId: Hr(toolUseContext.queryTracking?.chainId),
        queryDepth: toolUseContext.queryTracking?.depth,
        ...(toolUseContext.options.messageClientPlatform && {
          messageClientPlatform: toolUseContext.options.messageClientPlatform,
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
              tool_use_id: toolUse.id,
            },
          ],
          toolUseResult: `Error: No such tool available: ${s}${y}`,
          sourceToolAssistantUUID: assistantMessage.uuid,
          now: o,
        }),
      });
    return;
  }
  let m = TLo(i.name),
    g = toolUse.input;
  try {
    if (toolUseContext.abortController.signal.aborted) {
      G("tengu_tool_use_cancelled", {
        toolName: Ui(i.name),
        toolUseID: toolUse.id,
        isMcp: i.isMcp ?? !1,
        phase: We("entry"),
        abortKind: $e(zct(toolUseContext.abortController.signal.reason)),
        queryChainId: Hr(toolUseContext.queryTracking?.chainId),
        queryDepth: toolUseContext.queryTracking?.depth,
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
      let y = JXn(toolUse.id);
      ((y.content = d$e(uQ)),
        yield {
          message: Rn({
            content: [y],
            toolUseResult: uQ,
            sourceToolAssistantUUID: assistantMessage.uuid,
            now: o,
          }),
        });
      return;
    }
    let h = Hzt(i, toolUseContext);
    if (h.denyMessage) {
      (It(m, "tool_isolation_denied"),
        G("tengu_tool_use_isolation_latch_denied", {
          toolName: Ui(i.name),
          toolUseID: toolUse.id,
          isMcp: i.isMcp ?? !1,
          isolationLatch: Oo(h.activeLatch),
          isolationClassifiedAs: Oo(h.classifiedAs),
          queryChainId: Hr(toolUseContext.queryTracking?.chainId),
          queryDepth: toolUseContext.queryTracking?.depth,
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
                tool_use_id: toolUse.id,
              },
            ],
            toolUseResult: `Error: ${h.denyMessage}`,
            sourceToolAssistantUUID: assistantMessage.uuid,
            now: o,
          }),
        });
      return;
    }
    for await (let y of streamedCheckPermissionsAndCallTool(
      i,
      toolUse.id,
      g,
      toolUseContext,
      canUseTool,
      assistantMessage,
      a,
      l,
      d,
      p,
      f,
      o,
    ))
      yield y;
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
            tool_use_id: toolUse.id,
          },
        ],
        toolUseResult: _,
        sourceToolAssistantUUID: assistantMessage.uuid,
        now: o,
      }),
    };
  }
}
function streamedCheckPermissionsAndCallTool(
  tool,
  toolUseID,
  input,
  toolUseContext,
  canUseTool,
  assistantMessage,
  messageId,
  requestId,
  mcpServerType,
  mcpServerBaseUrl,
  u,
  d,
) {
  let p = new E4();
  return (
    checkPermissionsAndCallTool(
      tool,
      toolUseID,
      input,
      toolUseContext,
      canUseTool,
      assistantMessage,
      messageId,
      requestId,
      mcpServerType,
      mcpServerBaseUrl,
      u,
      d,
      (f) => {
        if (f.type !== "progress") {
          p.enqueue(f);
          return;
        }
        (G("tengu_tool_use_progress", {
          messageID: Hr(messageId),
          toolName: Ui(tool.name),
          isMcp: tool.isMcp ?? !1,
          queryChainId: Hr(toolUseContext.queryTracking?.chainId),
          queryDepth: toolUseContext.queryTracking?.depth,
          ...(mcpServerType && {
            mcpServerType: $e(mcpServerType),
          }),
          ...(mcpServerBaseUrl && {
            mcpServerBaseUrl: O4(mcpServerBaseUrl),
          }),
          ...(requestId && {
            requestId: Hr(requestId),
          }),
          ...lW(tool.name, u),
        }),
          p.enqueue({
            message: RKn({
              toolUseID: f.toolUseID,
              parentToolUseID: toolUseID,
              data: f.data,
              now: d,
            }),
          }));
      },
    )
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
function buildSchemaNotSentHint(tool, messages, tools) {
  if (!o$()) return null;
  if (!F$e(tools)) return null;
  if (!y4(tool)) return null;
  if (xQ(messages).has(tool.name)) return null;
  let o = "";
  try {
    o = ` For reference, this tool's input schema is: ${De(H.toJSONSchema(tool.inputSchema))}`;
  } catch {}
  return (
    `

This tool's schema was not sent to the API \u2014 it was not in the discovered-tool set derived from message history. ` +
    `Without the schema in your prompt, typed parameters (arrays, numbers, booleans) get emitted as strings and the client-side parser rejects them. Load the tool first: call ${_h} with query "select:${tool.name}", then retry this call.${o}`
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
async function checkPermissionsAndCallTool(
  tool,
  toolUseID,
  input,
  toolUseContext,
  canUseTool,
  assistantMessage,
  messageId,
  requestId,
  mcpServerType,
  mcpServerBaseUrl,
  onToolProgress,
  d,
  p,
) {
  let f = TLo(tool.name),
    m = De(input).length;
  if (QFe(input)) {
    let { raw: J, len: ne } = input[Aet],
      oe = Ix(J, 200),
      re = `${tool.name} was called with input that could not be parsed as JSON.
You sent (first ${oe.length} of ${ne} bytes): ${oe}
Common causes: unescaped backslashes in file paths (use / or \\\\), unescaped control characters, or truncated output. Retry with valid JSON.`;
    return (
      It(f, "tool_input_validation_failed"),
      G("tengu_tool_use_error", {
        error: We("InputValidationError"),
        errorCode: We("JSON_PARSE"),
        errorDetailsHash: Dd(`${tool.name}: unparsed tool input`),
        messageID: Hr(messageId),
        toolName: Ui(tool.name),
        isMcp: tool.isMcp ?? !1,
        ...rje(toolUseContext.agentContext),
        toolInputSizeBytes: ne,
        queryChainId: Hr(toolUseContext.queryTracking?.chainId),
        queryDepth: toolUseContext.queryTracking?.depth,
        ...(mcpServerType && {
          mcpServerType: $e(mcpServerType),
        }),
        ...(mcpServerBaseUrl && {
          mcpServerBaseUrl: O4(mcpServerBaseUrl),
        }),
        ...(requestId && {
          requestId: Hr(requestId),
        }),
        ...lW(tool.name, onToolProgress),
      }),
      [
        {
          message: Rn({
            content: [
              {
                type: "tool_result",
                content: `<tool_use_error>InputValidationError: ${re}</tool_use_error>`,
                is_error: !0,
                tool_use_id: toolUseID,
              },
            ],
            toolUseResult: `InputValidationError: JSON parse failed (${ne} bytes)`,
            sourceToolAssistantUUID: assistantMessage.uuid,
            now: d,
          }),
        },
      ]
    );
  }
  let g = input,
    h = null;
  if (tool.coerceInput) {
    if (((h = tool.coerceInput(input)), h !== null)) g = h.input;
  }
  let y = tool.inputSchema.safeParse(g);
  if (h !== null)
    G("tengu_tool_input_coerced", {
      toolName: Ui(tool.name),
      shapeClass: h.shapeClass,
      outcome: We(y.success ? "coerced_valid" : "coerced_still_invalid"),
      toolInputSizeBytes: m,
    });
  if (!y.success) {
    let J = Y6e(tool.name, y.error),
      ne = !1;
    if (s1i() && Zzr(input)) {
      let ee = a1i(tool.name, tool.inputSchema);
      if (ee !== null) ((J = ee), (ne = !0));
    }
    let oe = tool.validationErrorSteer?.(input);
    if (oe)
      J += `

${oe}`;
    let re = buildSchemaNotSentHint(tool, toolUseContext.messages, toolUseContext.options.tools);
    if (re)
      (G("tengu_deferred_tool_schema_not_sent", {
        toolName: Ui(tool.name),
        isMcp: tool.isMcp ?? !1,
      }),
        (J += re));
    return (
      T(`${tool.name} tool input error: ${J.slice(0, 200)}`),
      It(f, "tool_input_validation_failed"),
      G("tengu_tool_use_error", {
        error: We("InputValidationError"),
        errorCode: We("ZOD_VALIDATION"),
        zodIssueCodes: Uo(y.error.issues.map((ee) => ee.code)).join(","),
        errorDetailsHash: Dd(J),
        messageID: Hr(messageId),
        toolName: Ui(tool.name),
        isMcp: tool.isMcp ?? !1,
        ...rje(toolUseContext.agentContext),
        toolInputSizeBytes: m,
        ...(ne && {
          emptyInputRepaired: !0,
        }),
        queryChainId: Hr(toolUseContext.queryTracking?.chainId),
        queryDepth: toolUseContext.queryTracking?.depth,
        ...(toolUseContext.options.messageClientPlatform && {
          messageClientPlatform: toolUseContext.options.messageClientPlatform,
        }),
        ...(mcpServerType && {
          mcpServerType: $e(mcpServerType),
        }),
        ...(mcpServerBaseUrl && {
          mcpServerBaseUrl: O4(mcpServerBaseUrl),
        }),
        ...(requestId && {
          requestId: Hr(requestId),
        }),
        ...lW(tool.name, onToolProgress),
      }),
      [
        {
          message: Rn({
            content: [
              {
                type: "tool_result",
                content: `<tool_use_error>InputValidationError: ${J}</tool_use_error>`,
                is_error: !0,
                tool_use_id: toolUseID,
              },
            ],
            toolUseResult: `InputValidationError: ${y.error.message}`,
            sourceToolAssistantUUID: assistantMessage.uuid,
            now: d,
          }),
        },
      ]
    );
  }
  let b = await tool.validateInput?.(y.data, toolUseContext);
  if (cSe(toolUseContext.abortController.signal))
    return YXn({
      phase: "validate_input",
      tool: tool,
      toolUseID: toolUseID,
      toolUseContext: toolUseContext,
      assistantMessage: assistantMessage,
      mcpServerType: mcpServerType,
      mcpServerBaseUrl: mcpServerBaseUrl,
      mcpNameLoggable: onToolProgress,
      requestId: requestId,
      now: d,
    });
  if (b?.result === !1)
    return (
      T(`${tool.name} tool validation error: ${b.message?.slice(0, 200)}`),
      It(f, "tool_validate_input_rejected"),
      G("tengu_tool_use_error", {
        messageID: Hr(messageId),
        toolName: Ui(tool.name),
        error: We("ValidateInputError"),
        ...LM(b.message),
        errorCode: b.errorCode,
        isMcp: tool.isMcp ?? !1,
        ...rje(toolUseContext.agentContext),
        queryChainId: Hr(toolUseContext.queryTracking?.chainId),
        queryDepth: toolUseContext.queryTracking?.depth,
        ...(toolUseContext.options.messageClientPlatform && {
          messageClientPlatform: toolUseContext.options.messageClientPlatform,
        }),
        ...(mcpServerType && {
          mcpServerType: $e(mcpServerType),
        }),
        ...(mcpServerBaseUrl && {
          mcpServerBaseUrl: O4(mcpServerBaseUrl),
        }),
        ...(requestId && {
          requestId: Hr(requestId),
        }),
        ...lW(tool.name, onToolProgress),
      }),
      [
        {
          message: Rn({
            content: [
              {
                type: "tool_result",
                content: `<tool_use_error>${b.message}</tool_use_error>`,
                is_error: !0,
                tool_use_id: toolUseID,
              },
            ],
            toolUseResult: `Error: ${b.message}`,
            sourceToolAssistantUUID: assistantMessage.uuid,
            now: d,
          }),
        },
      ]
    );
  if (tool.name === Co && y.data && "command" in y.data)
    uHl(
      y.data.command,
      Fr(toolUseContext),
      toolUseContext.abortController.signal,
      toolUseContext.options.isNonInteractiveSession,
    );
  let _ = [],
    S = y.data;
  if (tool.name === Co && S && typeof S === "object" && "_simulatedSedEdit" in S) {
    let { _simulatedSedEdit: J, ...ne } = S;
    S = ne;
  }
  let A = S,
    v =
      tool.backfillObservableInput && typeof S === "object" && S !== null
        ? {
            ...S,
          }
        : null;
  if (v) (tool.backfillObservableInput(v), (S = v));
  let C = !1,
    x,
    I,
    k = [],
    D = Date.now();
  for await (let J of _zt(
    toolUseContext,
    tool,
    S,
    toolUseID,
    assistantMessage.message.id,
    requestId,
    mcpServerType,
    mcpServerBaseUrl,
  ))
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
          !toolUseContext.options.isNonInteractiveSession)
        ) {
          T(
            `Hook ${J.hookName} returned permissionDecision=defer in interactive mode; ignoring (defer is print-mode only)`,
            {
              level: "warn",
            },
          );
          break;
        }
        let ne = Array.isArray(assistantMessage.message.content)
          ? On(assistantMessage.message.content, (oe) => oe.type === "tool_use")
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
            toolName: Ui(tool.name),
            queryChainId: Hr(toolUseContext.queryTracking?.chainId),
            queryDepth: toolUseContext.queryTracking?.depth,
          }),
          _.push({
            message: ai({
              type: "hook_deferred_tool",
              toolUseID: toolUseID,
              toolName: tool.name,
              toolInput: S,
              hookName: J.hookName,
              hookEvent: "PreToolUse",
              permissionMode: Fr(toolUseContext).mode,
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
              content: [JXn(toolUseID)],
              toolUseResult: `Error: ${x}`,
              sourceToolAssistantUUID: assistantMessage.uuid,
              now: d,
            }),
          }),
          _
        );
    }
  let P = Date.now() - D;
  if ((Kve()?.observe("pre_tool_hook_duration_ms", P), P >= HLo))
    T(`Slow PreToolUse hooks: ${P}ms for ${tool.name} (${k.length} hooks)`, {
      level: "info",
    });
  let O = {};
  if (S && typeof S === "object") {
    if (tool.name === Ds && "file_path" in S && sg()) O.file_path = String(S.file_path);
    else if ((tool.name === ka || tool.name === Wc) && "file_path" in S && sg())
      O.file_path = String(S.file_path);
    else if (tool.name === Co && "command" in S && sg()) {
      let J = S;
      O.full_command = J.command;
    } else if (sg()) {
      let J = kzr(tool.name, S, tool.userFacingName?.(void 0));
      if (J) O.skill_name = J;
      let ne = Rzr(tool.name, S);
      if (ne) O.subagent_type = ne;
    }
  }
  let L = oka(
    tool.name,
    toolUseContext.agentContext,
    O,
    ude() || (mC() && sg()) ? De(S) : void 0,
    toolUseID,
  );
  ska();
  let M = Fr(toolUseContext).mode,
    N = Date.now(),
    B = await yzt(I, tool, S, toolUseContext, canUseTool, assistantMessage, toolUseID),
    $ = B.decision;
  if (((S = B.input), $.behavior !== "allow" && cSe(toolUseContext.abortController.signal)))
    return (
      N3t("cancelled", "server_fallback_tombstone"),
      Qdt(L),
      YXn({
        phase: "permission",
        tool: tool,
        toolUseID: toolUseID,
        toolUseContext: toolUseContext,
        assistantMessage: assistantMessage,
        mcpServerType: mcpServerType,
        mcpServerBaseUrl: mcpServerBaseUrl,
        mcpNameLoggable: onToolProgress,
        requestId: requestId,
        now: d,
      })
    );
  if ($.behavior !== "allow") toolUseContext.onPermissionDenial?.(tool, toolUseID, S);
  let q = Date.now() - N;
  if (q >= HLo && M === "auto")
    T(`Slow permission decision: ${q}ms for ${tool.name} (mode=${M}, behavior=${$.behavior})`, {
      level: "info",
    });
  if (
    (B$a({
      toolName: tool.name,
      isMcp: tool.isMcp ?? !1,
      messageId: messageId,
      toolUseID: toolUseID,
      permissionMode: Fr(toolUseContext).mode,
      behavior: $.behavior,
      decisionReason: $.decisionReason,
      resolvedSource: toolUseContext.toolDecisions?.[toolUseID]?.source,
    }),
    $.behavior !== "ask" && toolUseContext.toolDecisions?.[toolUseID] === void 0)
  ) {
    let J = $.behavior === "allow" ? "accept" : "reject",
      ne = decisionReasonToOTelSource($.decisionReason, $.behavior),
      oe = nNt(tool.name, S, tool.userFacingName?.(void 0));
    if (
      (Jc("tool_decision", {
        decision: J,
        source: ne,
        tool_name: Ui(tool.name),
        tool_use_id: toolUseID,
        ...(Object.keys(oe).length > 0 && {
          tool_parameters: De(oe),
        }),
      }),
      Igo(tool.name))
    )
      xgo(tool, S, J, ne).then((re) => fCt()?.add(1, re));
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
        toolUseID: toolUseID,
        hookEvent: "PermissionRequest",
      }),
    });
  if ($.behavior !== "allow") {
    T(`${tool.name} tool permission denied`);
    let J = toolUseContext.toolDecisions?.[toolUseID];
    (N3t("reject", J?.source || "unknown"),
      Qdt(L),
      G("tengu_tool_use_can_use_tool_rejected", {
        messageID: Hr(messageId),
        toolName: Ui(tool.name),
        queryChainId: Hr(toolUseContext.queryTracking?.chainId),
        queryDepth: toolUseContext.queryTracking?.depth,
        ...(toolUseContext.options.messageClientPlatform && {
          messageClientPlatform: toolUseContext.options.messageClientPlatform,
        }),
        ...(mcpServerType && {
          mcpServerType: $e(mcpServerType),
        }),
        ...(mcpServerBaseUrl && {
          mcpServerBaseUrl: O4(mcpServerBaseUrl),
        }),
        ...(requestId && {
          requestId: Hr(requestId),
        }),
        ...lW(tool.name, onToolProgress),
      }));
    let ne = $.message;
    if (C && !ne) ne = `Execution stopped by PreToolUse hook${x ? `: ${x}` : ""}`;
    let oe = [
        {
          type: "tool_result",
          content: ne,
          is_error: !0,
          tool_use_id: toolUseID,
        },
      ],
      re = $.behavior === "ask" ? $.contentBlocks : void 0;
    if (re?.length) oe.push(...re);
    let ee;
    if (re?.length) {
      let ce = On(re, (ae) => ae.type === "image");
      if (ce > 0) {
        let ae = aHl(toolUseContext.messages);
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
          sourceToolAssistantUUID: assistantMessage.uuid,
          now: d,
        }),
      }),
      $.decisionReason?.type === "classifier" && $.decisionReason.classifier === "auto-mode")
    ) {
      let ce = !1;
      for await (let ae of tKt(
        tool.name,
        toolUseID,
        S,
        $.decisionReason.reason ?? "Permission denied",
        toolUseContext,
        M,
        toolUseContext.abortController.signal,
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
      messageID: Hr(messageId),
      toolName: Ui(tool.name),
      queryChainId: Hr(toolUseContext.queryTracking?.chainId),
      queryDepth: toolUseContext.queryTracking?.depth,
      ...(mcpServerType && {
        mcpServerType: $e(mcpServerType),
      }),
      ...(mcpServerBaseUrl && {
        mcpServerBaseUrl: O4(mcpServerBaseUrl),
      }),
      ...(requestId && {
        requestId: Hr(requestId),
      }),
      ...lW(tool.name, onToolProgress),
    }),
    $.updatedInput !== void 0 && !Zzr($.updatedInput))
  ) {
    let J = cHl(tool.inputSchema, $.updatedInput);
    if (J !== null) {
      let ne = new H.ZodError(J),
        oe = `The permission handler returned updatedInput for ${tool.name} that failed schema validation: ${Y6e(tool.name, ne)}
This is a configuration issue in your canUseTool callback, PermissionRequest hook, or permission-prompt tool \u2014 updatedInput must satisfy the tool's input schema. The tool input from the model was valid.`,
        re = Uo(J.map((ee) => ee.code));
      return (
        N3t("reject", "permission_updated_input_invalid"),
        Qdt(L),
        T(
          `Permission handler updatedInput for ${tool.name} failed schema validation (${re.join(",")})`,
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
          messageID: Hr(messageId),
          toolName: Ui(tool.name),
          isMcp: tool.isMcp ?? !1,
          ...rje(toolUseContext.agentContext),
          toolInputSizeBytes: m,
          queryChainId: Hr(toolUseContext.queryTracking?.chainId),
          queryDepth: toolUseContext.queryTracking?.depth,
          ...(mcpServerType && {
            mcpServerType: $e(mcpServerType),
          }),
          ...(mcpServerBaseUrl && {
            mcpServerBaseUrl: O4(mcpServerBaseUrl),
          }),
          ...(requestId && {
            requestId: Hr(requestId),
          }),
          ...lW(tool.name, onToolProgress),
        }),
        _.push({
          message: Rn({
            content: [
              {
                type: "tool_result",
                content: `<tool_use_error>${oe}</tool_use_error>`,
                is_error: !0,
                tool_use_id: toolUseID,
              },
            ],
            toolUseResult: `InputValidationError: permission handler updatedInput failed schema for ${tool.name}`,
            sourceToolAssistantUUID: assistantMessage.uuid,
            now: d,
          }),
        }),
        _
      );
    }
    S = $.updatedInput;
  }
  let W = SOi(S),
    V = nNt(tool.name, S, tool.userFacingName?.(void 0)),
    Y = toolUseContext.toolDecisions?.[toolUseID];
  (N3t(Y?.decision || "unknown", Y?.source || "unknown"), ika(toolUseID));
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
  if (cSe(toolUseContext.abortController.signal))
    return YXn({
      phase: "pre_call",
      tool: tool,
      toolUseID: toolUseID,
      toolUseContext: toolUseContext,
      assistantMessage: assistantMessage,
      mcpServerType: mcpServerType,
      mcpServerBaseUrl: mcpServerBaseUrl,
      mcpNameLoggable: onToolProgress,
      requestId: requestId,
      now: d,
    });
  (p({
    type: "set_in_progress_tool_use_ids",
    op: {
      action: "add",
      ids: [toolUseID],
    },
  }),
    T(
      `[Stall] tool_dispatch_start tool=${tool.name} toolUseId=${toolUseID} permissionDecisionMs=${q}`,
      {
        level: "info",
      },
    ));
  let Z = !1;
  try {
    zXn("tool_exec", toolUseContext.agentId);
    let J = await tool.call(
        A,
        {
          ...toolUseContext,
          toolUseId: toolUseID,
          userModified: $.userModified ?? !1,
        },
        canUseTool,
        assistantMessage,
        p,
      ),
      ne = Date.now() - z,
      oe = process.memoryUsage();
    if (
      (Qon(ne),
      T(
        `[Stall] tool_dispatch_end tool=${tool.name} toolUseId=${toolUseID} outcome=ok durationMs=${ne}`,
        {
          level: "info",
        },
      ),
      (Z = !0),
      J.data && typeof J.data === "object")
    ) {
      let Ue = {};
      if (tool.name === Ds) {
        let tt = J.data;
        if (tt.type === "text") {
          if (sg() && "file_path" in S) Ue.file_path = String(S.file_path);
          Ue.content = tt.file.content;
        }
      }
      if ((tool.name === ka || tool.name === Wc) && "file_path" in S) {
        if (sg()) Ue.file_path = String(S.file_path);
        if (sg() && tool.name === ka && "structuredPatch" in J.data)
          Ue.diff = De(J.data.structuredPatch);
        if (sg() && tool.name === Wc && "content" in S) Ue.content = String(S.content);
      }
      if (tool.name === Co && "command" in S) {
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
          toolUseID: toolUseID,
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
    let ee = tool.mapToolResultToToolResultBlockParam(J.data, toolUseID),
      ce = ee.content,
      ae = !ce ? 0 : typeof ce === "string" ? ce.length : De(ce).length,
      de = AOi(J.newMessages),
      Ee,
      me,
      pe,
      ge,
      he;
    if (S && typeof S === "object") {
      if ((tool.name === Ds || tool.name === ka || tool.name === Wc) && "file_path" in S)
        ((Ee = jte(String(S.file_path))), (pe = String(A.file_path).length));
      else if (tool.name === RI && "notebook_path" in S) {
        let Ue = String(S.notebook_path);
        ((Ee = jte(Ue)), (pe = Ue.length));
      } else if (tool.name === g4 && "file_path" in S) {
        let Ue = String(S.file_path);
        ((Ee = jte(Ue)), (pe = Ue.length));
      } else if (tool.name === Co && "command" in S) {
        let Ue = S;
        ((Ee = EOi(Ue.command, Ue._simulatedSedEdit?.filePath)),
          (me = Lzr(Ue.command)),
          (ge = Ue.command.length));
      } else if (
        (tool.name === rLt || tool.name === Ss) &&
        "command" in S &&
        typeof S.command === "string"
      )
        me = Lzr(S.command);
      else if (tool.name === nWt) {
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
        messageID: Hr(messageId),
        toolName: Ui(tool.name),
        isMcp: tool.isMcp ?? !1,
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
        ...(tool.name === Ds &&
          S &&
          typeof S === "object" && {
            readHasLimit: S.limit !== void 0,
            readHasOffset: S.offset !== void 0,
          }),
        queryChainId: Hr(toolUseContext.queryTracking?.chainId),
        queryDepth: toolUseContext.queryTracking?.depth,
        ...(toolUseContext.options.messageClientPlatform && {
          messageClientPlatform: toolUseContext.options.messageClientPlatform,
        }),
        ...(mcpServerType && {
          mcpServerType: $e(mcpServerType),
        }),
        ...(mcpServerBaseUrl && {
          mcpServerBaseUrl: O4(mcpServerBaseUrl),
        }),
        ...(requestId && {
          requestId: Hr(requestId),
        }),
        ...(tool.readOnlyHint !== void 0 && {
          readOnlyHint: tool.readOnlyHint,
        }),
        ...lW(tool.name, onToolProgress),
      }),
      sg() &&
        (tool.name === Co || tool.name === Ss) &&
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
    let ie = wdo(tool);
    Jc("tool_result", {
      tool_name: Ui(tool.name),
      tool_use_id: toolUseID,
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
          ? await gIa(tt, tool.name, tool.maxResultSizeChars, tool.persistenceThresholdCeiling)
          : await Wdt(tool, Ue, toolUseID),
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
          let gt = aHl(toolUseContext.messages);
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
            toolUseContext.agentId &&
            !toolUseContext.preserveToolUseResults &&
            !tool.preserveToolUseResultInSubagents
              ? void 0
              : Ue,
          mcpMeta: ELo(toolUseContext.agentId, ue),
          toolEndsTurn: we,
          sourceToolAssistantUUID: assistantMessage.uuid,
          now: d,
        }),
        contextLayers:
          ye && ye.length > 0
            ? {
                toolUseID: toolUseID,
                layers: ye,
              }
            : void 0,
      });
    }
    let Ie = [],
      Ve = Date.now(),
      Ze = !1,
      Be = !1;
    for await (let Ue of gzt(
      toolUseContext,
      tool,
      toolUseID,
      assistantMessage.message.id,
      S,
      le,
      requestId,
      mcpServerType,
      mcpServerBaseUrl,
      ne,
    ))
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
      let Ue = Z7n(tool.name, toolUseID, S, toolUseContext.readFileState);
      if (Ue)
        He.push({
          message: Ue,
        });
    }
    if (Me >= HLo)
      T(`Slow PostToolUse hooks: ${Me}ms for ${tool.name} (${Ie.length} hooks)`, {
        level: "info",
      });
    if (gk(tool)) await Ce(le);
    else {
      let Ue = ee;
      if (Be) {
        let tt = tool.outputSchema?.safeParse(le),
          bt = (Ke) => {
            (T(
              `PostToolUse hook returned updatedToolOutput that does not match ${tool.name}'s output shape: ${Ke}`,
              {
                level: "error",
              },
            ),
              (le = J.data),
              He.push({
                message: ai({
                  type: "hook_error_during_execution",
                  content: `PostToolUse hook returned updatedToolOutput that does not match ${tool.name}'s output shape; using original output. ${Ke}`,
                  hookName: `PostToolUse:${tool.name}`,
                  toolUseID: toolUseID,
                  hookEvent: "PostToolUse",
                }),
              }));
          };
        if (tt && !tt.success) bt(tt.error.message);
        else
          try {
            let Ke = tool.mapToolResultToToolResultBlockParam(le, toolUseID);
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
          hookName: `PreToolUse:${tool.name}`,
          toolUseID: toolUseID,
          hookEvent: "PreToolUse",
        }),
      });
    return _;
  } catch (J) {
    let ne = Date.now() - z,
      oe = process.memoryUsage();
    if ((Qon(ne), !Z))
      T(
        `[Stall] tool_dispatch_end tool=${tool.name} toolUseId=${toolUseID} outcome=${Mbt(J) ? "aborted" : "error"} durationMs=${ne}`,
        {
          level: Mbt(J) ? "info" : "warn",
        },
      );
    else
      T(
        `[Stall] tool_dispatch_post_error tool=${tool.name} toolUseId=${toolUseID} durationMs=${ne}`,
        {
          level: "warn",
        },
      );
    let re = be(J),
      ee = classifyToolError(J);
    if (
      (upo({
        success: !1,
        error: sg() ? re : ee,
      }),
      Qdt(L),
      J instanceof Rqe)
    )
      r2n(J.serverName, toolUseContext.setAppState);
    let ce = cSe(toolUseContext.abortController.signal);
    if (!ce && !Mbt(J)) {
      T(`${tool.name} tool error (${ne}ms): ${re.slice(0, 200)}`);
      let { code: pe, isSad: ge } = lHl(J);
      if (ge) It(f, pe);
      else (ke(J), Le(f, pe));
      G("tengu_tool_use_error", {
        messageID: Hr(messageId),
        toolName: Ui(tool.name),
        error: ee,
        ...LM(J),
        errorCode: ee,
        isMcp: tool.isMcp ?? !1,
        ...rje(toolUseContext.agentContext),
        rssDeltaBytes: oe.rss - K.rss,
        heapUsedDeltaBytes: oe.heapUsed - K.heapUsed,
        externalDeltaBytes: oe.external - K.external,
        ...(tool.name === nWt && {
          dsMethod: String(S.method),
        }),
        queryChainId: Hr(toolUseContext.queryTracking?.chainId),
        queryDepth: toolUseContext.queryTracking?.depth,
        ...(toolUseContext.options.messageClientPlatform && {
          messageClientPlatform: toolUseContext.options.messageClientPlatform,
        }),
        ...(mcpServerType && {
          mcpServerType: $e(mcpServerType),
        }),
        ...(mcpServerBaseUrl && {
          mcpServerBaseUrl: O4(mcpServerBaseUrl),
        }),
        ...(requestId && {
          requestId: Hr(requestId),
        }),
        ...(tool.readOnlyHint !== void 0 && {
          readOnlyHint: tool.readOnlyHint,
        }),
        ...lW(tool.name, onToolProgress),
      });
      let he = wdo(tool);
      Jc("tool_result", {
        tool_name: Ui(tool.name),
        tool_use_id: toolUseID,
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
    let ae = i_f(J, toolUseContext.abortController.signal),
      de = J instanceof gGt ? J.mcpMeta : void 0,
      Ee = Mbt(J),
      me = [];
    for await (let pe of hzt(
      toolUseContext,
      tool,
      toolUseID,
      messageId,
      S,
      ae,
      Ee || ce,
      requestId,
      mcpServerType,
      mcpServerBaseUrl,
      ne,
    ))
      me.push(pe);
    if (ce)
      return YXn({
        phase: "call",
        tool: tool,
        toolUseID: toolUseID,
        toolUseContext: toolUseContext,
        assistantMessage: assistantMessage,
        mcpServerType: mcpServerType,
        mcpServerBaseUrl: mcpServerBaseUrl,
        mcpNameLoggable: onToolProgress,
        requestId: requestId,
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
                tool_use_id: toolUseID,
              },
            ],
            toolUseResult: `Error: ${ae}`,
            mcpMeta: ELo(toolUseContext.agentId, de),
            sourceToolAssistantUUID: assistantMessage.uuid,
            now: d,
          }),
        },
        ...me,
      ),
      _
    );
  } finally {
    if ((KXn("tool_exec", toolUseContext.agentId), Y && toolUseContext.toolDecisions))
      delete toolUseContext.toolDecisions[toolUseID];
  }
}
var HLo = 2000,
  a_f;
