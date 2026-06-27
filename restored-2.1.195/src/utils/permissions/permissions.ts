// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xqo
// matched 2.1.88 source: src/utils/permissions/permissions.ts
// class=modified  jaccard=0.2158  score=0.2582  fileCov=0.5677
// note: deminified; 28 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: toolAlwaysAllowedRule, syncPermissionRulesFromDisk, sameTurnSiblingContextEnabledWithSource, permissionRuleSourceDisplayString, isNonDeniableTool, hasPermissionsToUseToolWithSink, hasPermissionsToUseTool, guardHookUpdatedInput, getRuleByContentsForToolName, getRuleByContentsForTool, getInputParamRule, getDenyRules, getDenyRuleForTool, getDenyRuleForAgent, getAskRules, getAskRuleForTool, getAllowRules, findSafetyCheckReason, filterDeniedAgents, deletePermissionRule, createPermiss …
// [unwrapped __esm module xqo] deps: tools/AskUserQuestionTool/prompt.ts, tools/GlobTool/prompt.ts, tools/ExitPlanModeTool/constants.ts, tools/PowerShellTool/PowerShellTool.tsx, tools/ReadMcpResourceTool/UI.tsx, @xmldom/xmldom/lib/entities.js, utils/fingerprint.ts
((dlc = ro(voa).WORKFLOW_TOOL_NAME),
  (Vnm = []),
  (znm = new Set([
    Ds,
    qc,
    wu,
    byt,
    _h,
    Kue,
    ide,
    aJ,
    FRe,
    s$,
    cC,
    kX,
    ZD,
    yL,
    QD,
    U8,
    mf,
    kct,
    xX,
    Xx,
    Ly,
    ...(dlc ? [dlc] : []),
    ...(ulc ? [ulc] : []),
    ...(plc ? [plc] : []),
    ...(flc ? [flc] : []),
    $7n,
    ...(mlc ? [mlc] : []),
    ...Vnm,
    UXa,
  ])),
  (ocr = ["mcp__claude-in-chrome__", "mcp__Claude_in_Chrome__"]));
((Ynm = new Set(
  [
    "find",
    "get_page_text",
    "gif_creator",
    "list_connected_browsers",
    "read_console_messages",
    "read_network_requests",
    "read_page",
    "resize_window",
    "select_browser",
    "shortcuts_list",
    "switch_browser",
    "tabs_close_mcp",
    "tabs_context_mcp",
  ].flatMap((e) => ocr.map((t) => t + e)),
)),
  (Xnm = new Set(ocr.map((e) => `${e}computer`))),
  (Jnm = new Set(ocr.map((e) => `${e}browser_batch`))),
  (Qnm = new Set([
    "screenshot",
    "zoom",
    "wait",
    "get_page_text",
    "find",
    "scroll",
    "scroll_to",
    "hover",
    "mouse_move",
    "cursor_position",
    "left_click",
    "right_click",
    "middle_click",
    "double_click",
    "triple_click",
    "left_click_drag",
  ])));
function isNonDeniableTool(e) {
  return !e.mcpInfo && trm.has(e.name);
}
function permissionRuleSourceDisplayString(e) {
  return fvs(e);
}
function scr(e, t) {
  let n = e === Co;
  if (!n && e !== Ss) return;
  if (t === null || typeof t !== "object" || !("command" in t) || typeof t.command !== "string")
    return;
  let r = n ? Zst(t.command) : tft(t.command);
  return {
    destructive_category: $e(r ?? "none"),
    destructive_target_scope: $e(mce(t.command, $t(), r)),
  };
}
function Slc(e) {
  return e === "auto" || (e === "plan" && (Znm?.isAutoModeActive() ?? false));
}
function getAllowRules(e) {
  if (Slc(e.mode)) {
    let t = e.alwaysAllowRules,
      n = [];
    for (let r of PERMISSION_RULE_SOURCES) {
      let o = t[r];
      if (o === void 0) continue;
      for (let s of o) {
        let i = Ig(s);
        if (C6e(i.toolName, i.ruleContent)) continue;
        n.push({
          source: r,
          ruleBehavior: "allow",
          ruleValue: i,
        });
      }
    }
    return n;
  }
  return Lqo(e.alwaysAllowRules, "allow");
}
function createPermissionRequestMessage(toolName, decisionReason) {
  if (decisionReason) {
    if (decisionReason.type === "classifier")
      return `Classifier '${decisionReason.classifier}' requires approval for this ${toolName} command: ${decisionReason.reason}`;
    switch (decisionReason.type) {
      case "hook":
        return decisionReason.reason
          ? `Hook '${decisionReason.hookName}' blocked this action: ${decisionReason.reason}`
          : `Hook '${decisionReason.hookName}' requires approval for this ${toolName} command`;
      case "rule": {
        let r = Pp(decisionReason.rule.ruleValue),
          o = permissionRuleSourceDisplayString(decisionReason.rule.source);
        return `Permission rule '${r}' from ${o} requires approval for this ${toolName} command`;
      }
      case "subcommandResults": {
        let r = [];
        for (let [o, s] of decisionReason.reasons)
          if (s.behavior === "ask" || s.behavior === "passthrough")
            if (toolName === "Bash") {
              let { commandWithoutRedirections: i, redirections: a } = vde(o),
                l = a.length > 0 ? i : o;
              r.push(l);
            } else r.push(o);
        if (r.length > 0) {
          let o = r.length;
          return `This ${toolName} command contains multiple operations. The following ${bn(o, "part")} ${bn(o, "requires", "require")} approval: ${r.join(", ")}`;
        }
        return `This ${toolName} command contains multiple operations that require approval`;
      }
      case "permissionPromptTool":
        return `Tool '${decisionReason.permissionPromptToolName}' requires approval for this ${toolName} command`;
      case "sandboxOverride":
        return "Run outside of the sandbox";
      case "workingDir":
        return decisionReason.reason;
      case "safetyCheck":
      case "other":
        return decisionReason.reason;
      case "mode":
        return `Current permission mode (${_Y(decisionReason.mode)}) requires approval for this ${toolName} command`;
      case "asyncAgent":
        return decisionReason.reason;
    }
  }
  return `Claude requested permissions to use ${toolName}, but you haven't granted it yet.`;
}
function Lqo(e, t) {
  let n = [];
  for (let r of PERMISSION_RULE_SOURCES) {
    let o = e[r];
    if (o === void 0) continue;
    for (let s of o)
      n.push({
        source: r,
        ruleBehavior: t,
        ruleValue: Ig(s),
      });
  }
  return n;
}
function getDenyRules(e) {
  return Lqo(e.alwaysDenyRules, "deny");
}
function getAskRules(e) {
  return Lqo(e.alwaysAskRules, "ask");
}
function Dqo(e, t, { proxyExpansion: n = false, globMatching: r = false, toolAliases: o } = {}) {
  if (t.ruleValue.ruleContent !== void 0) return false;
  let s = Rhe(e);
  if (t.ruleValue.toolName === s) return true;
  if (n && omn(t.ruleValue.toolName, o).includes(s)) return true;
  if (r && HCe(t.ruleValue.toolName) && iLr(t.ruleValue.toolName, s)) return true;
  let i = eI(t.ruleValue.toolName),
    a = eI(s);
  return (
    i !== null &&
    a !== null &&
    i.serverName === a.serverName &&
    (i.toolName === void 0 ||
      i.toolName === "*" ||
      (a.toolName !== void 0 && HCe(i.toolName) && iLr(i.toolName, a.toolName)))
  );
}
function toolAlwaysAllowedRule(e, t) {
  return getAllowRules(e).find((n) => Dqo(t, n)) || null;
}
function Mqo(e) {
  return e.source !== "cliArg" && e.source !== "toolsNarrowing";
}
function getDenyRuleForTool(e, t) {
  if (isNonDeniableTool(t)) return null;
  return (
    getDenyRules(e).find((n) =>
      Dqo(t, n, {
        proxyExpansion: Mqo(n),
        globMatching: true,
        toolAliases: e.toolAliases,
      }),
    ) || null
  );
}
function getAskRuleForTool(e, t) {
  if (isNonDeniableTool(t)) return null;
  return (
    getAskRules(e).find((n) =>
      Dqo(t, n, {
        proxyExpansion: Mqo(n),
        globMatching: true,
        toolAliases: e.toolAliases,
      }),
    ) || null
  );
}
function getInputParamRule(e, t, n, r) {
  let o = Rhe(t);
  for (let s of [o, ...smn(o, e.toolAliases)])
    for (let [i, a] of getRuleByContentsForToolName(e, s, r)) {
      if (s !== o && !Mqo(a)) continue;
      let l = i.indexOf(":");
      if (l <= 0) continue;
      let c = i.slice(0, l).trim(),
        u = i.slice(l + 1).trim();
      if (c === "" || u === "") continue;
      if (c === t.ruleContentField) continue;
      if (!Object.hasOwn(n, c)) continue;
      let d = n[c];
      if (d === void 0 || d === null || typeof d === "object") continue;
      if (sLr(u, String(d).trim())) return a;
    }
  return null;
}
function getDenyRuleForAgent(e, t, n) {
  return (
    getDenyRules(e).find((r) => r.ruleValue.toolName === t && r.ruleValue.ruleContent === n) || null
  );
}
function filterDeniedAgents(e, t, n) {
  let r = new Set();
  for (let o of getDenyRules(t))
    if (o.ruleValue.toolName === n && o.ruleValue.ruleContent !== void 0)
      r.add(o.ruleValue.ruleContent);
  return e.filter((o) => !r.has(o.agentType));
}
function getRuleByContentsForTool(e, t, n) {
  return getRuleByContentsForToolName(e, Rhe(t), n);
}
function getRuleByContentsForToolName(e, t, n) {
  let r = new Map(),
    o = [];
  switch (n) {
    case "allow":
      o = getAllowRules(e);
      break;
    case "deny":
      o = getDenyRules(e);
      break;
    case "ask":
      o = getAskRules(e);
      break;
  }
  for (let s of o)
    if (s.ruleValue.toolName === t && s.ruleValue.ruleContent !== void 0 && s.ruleBehavior === n)
      r.set(s.ruleValue.ruleContent, s);
  return r;
}
function guardHookUpdatedInput(e, t) {
  if (e?.behavior === "deny" || e?.behavior === "ask")
    return (
      T(
        `PermissionRequest hook allowed ${t} with updatedInput, but ${e.behavior} rule overrides: ${e.message}`,
      ),
      e
    );
  return null;
}
async function runPermissionRequestHooksForHeadlessAgent(
  tool,
  input,
  toolUseID,
  context,
  permissionMode,
  suggestions,
) {
  try {
    for await (let i of jAe(
      tool.name,
      toolUseID,
      input,
      context,
      permissionMode,
      suggestions,
      context.abortController.signal,
    )) {
      if (!i.permissionRequestResult) continue;
      let a = i.permissionRequestResult;
      if (a.behavior === "allow") {
        let l = a.updatedInput ?? input;
        if (a.updatedInput) {
          let c = guardHookUpdatedInput(
            await checkRuleBasedPermissions(tool, l, {
              ...context,
              toolUseId: toolUseID,
            }),
            tool.name,
          );
          if (c)
            return c.behavior === "ask"
              ? {
                  behavior: "deny",
                  message: c.message,
                  decisionReason: c.decisionReason ?? WRt,
                }
              : c;
        }
        if (a.updatedPermissions?.length) {
          let c = a.updatedPermissions;
          (Y8(c), context.setToolPermissionContext((u) => T4(u, c)));
        }
        return {
          behavior: "allow",
          updatedInput: l,
          decisionReason: {
            type: "hook",
            hookName: "PermissionRequest",
          },
        };
      }
      if (a.behavior === "deny") {
        if (a.interrupt)
          (T(`Hook interrupt: tool=${tool.name} hookMessage=${a.message}`),
            context.abortController.abort());
        return {
          behavior: "deny",
          message: a.message || "Permission denied by hook",
          decisionReason: {
            type: "hook",
            hookName: "PermissionRequest",
            reason: a.message,
          },
        };
      }
    }
  } catch (i) {
    T(`PermissionRequest hook failed for headless agent: ${Zr(i).message}`, {
      level: "error",
    });
  }
  return null;
}
function rrm() {
  return sameTurnSiblingContextEnabledWithSource().value;
}
function sameTurnSiblingContextEnabledWithSource() {
  let e = J2.CLAUDE_CODE_AUTO_MODE_SIBLING_CONTEXT;
  if (e !== void 0)
    return {
      value: e,
      src: "env",
    };
  let t = at("tengu_auto_mode_config", {});
  if (typeof t?.sameTurnSiblingContext === "boolean")
    return {
      value: t.sameTurnSiblingContext,
      src: "gb",
    };
  return {
    value: false,
    src: "default",
  };
}
function eTt(e, t) {
  if (e.localDenialTracking) Object.assign(e.localDenialTracking, t);
  else
    e.setAppState((n) => {
      if (n.denialTracking === t) return n;
      return {
        ...n,
        denialTracking: t,
      };
    });
}
function handleDenialLimitExceeded(
  denialState,
  appState,
  classifierReason,
  assistantMessage,
  tool,
  result,
) {
  if (!gkl(denialState)) return null;
  let i = denialState.totalDenials >= rZn.maxTotal,
    a = Fr(result).shouldAvoidPermissionPrompts,
    l = denialState.totalDenials,
    c = denialState.consecutiveDenials,
    u = i
      ? `${l} actions were blocked this session. Please review the transcript before continuing.`
      : `${c} consecutive actions were blocked. Please review the transcript before continuing.`;
  if (
    (G("tengu_auto_mode_denial_limit_exceeded", {
      limit: We(i ? "total" : "consecutive"),
      mode: We(a ? "headless" : "cli"),
      messageID: classifierReason.message.id,
      consecutiveDenials: c,
      totalDenials: l,
      toolName: Ui(assistantMessage.name),
    }),
    a)
  )
    throw new ru("Agent aborted: too many classifier denials in headless mode");
  if (
    (T(`Classifier denial limit exceeded, falling back to prompting: ${u}`, {
      level: "warn",
    }),
    i)
  )
    eTt(result, {
      ...denialState,
      totalDenials: 0,
      consecutiveDenials: 0,
    });
  let d = tool.decisionReason?.type === "classifier" ? tool.decisionReason.classifier : "auto-mode";
  return {
    ...tool,
    decisionReason: {
      type: "classifier",
      classifier: d,
      reason: `${u}

Latest blocked action: ${appState}`,
    },
  };
}
function acr(e) {
  if (e?.type === "rule" && e.rule.ruleBehavior === "ask") return true;
  if (e?.type === "subcommandResults") {
    for (let t of e.reasons.values())
      if (t.behavior === "ask" && acr(t.decisionReason)) return true;
  }
  return false;
}
function irm(e) {
  return e?.type === "rule" && e.rule.ruleBehavior === "ask" && e.rule.source === "mcpServerPolicy";
}
function Elc(e) {
  return e?.type === "mode" && e.mode === "plan";
}
async function checkRuleBasedPermissions(tool, input, context) {
  let r = Fr(context),
    o = getDenyRuleForTool(r, tool);
  if (o)
    return {
      behavior: "deny",
      decisionReason: {
        type: "rule",
        rule: o,
      },
      message: `Permission to use ${tool.name} has been denied.`,
    };
  let s = getInputParamRule(r, tool, input, "deny");
  if (s)
    return {
      behavior: "deny",
      decisionReason: {
        type: "rule",
        rule: s,
      },
      message: `Permission to use ${tool.name} with ${s.ruleValue.ruleContent} has been denied.`,
    };
  let i = getAskRuleForTool(r, tool);
  if (i) {
    if (
      !(
        tool.name === Co &&
        xo.isSandboxingEnabled() &&
        xo.isAutoAllowBashIfSandboxedEnabled() &&
        N$(input)
      )
    )
      return {
        behavior: "ask",
        decisionReason: {
          type: "rule",
          rule: i,
        },
        message: createPermissionRequestMessage(tool.name),
      };
  }
  let a = {
    behavior: "passthrough",
    message: createPermissionRequestMessage(tool.name),
  };
  try {
    let c = tool.inputSchema.parse(input);
    a = await tool.checkPermissions(c, context);
  } catch (c) {
    if (c instanceof ru || c instanceof tf) throw c;
    if (!lh(c)) ke(c);
  }
  if (a?.behavior === "deny") return a;
  let l = getInputParamRule(r, tool, input, "ask");
  if (l)
    return {
      behavior: "ask",
      decisionReason: {
        type: "rule",
        rule: l,
      },
      message: createPermissionRequestMessage(tool.name),
    };
  if (a?.behavior === "ask" && acr(a.decisionReason)) return a;
  if (tool.mcpInfo?.effectiveMaxPermission === "ask") {
    let c = {
      type: "other",
      reason: blc,
    };
    return {
      behavior: "ask",
      message: createPermissionRequestMessage(tool.name, c),
      decisionReason: c,
    };
  }
  if (
    a?.behavior === "ask" &&
    (findSafetyCheckReason(a.decisionReason) || a.decisionReason?.type === "sandboxOverride")
  )
    return a;
  return null;
}
async function hasPermissionsToUseToolInner(tool, input, context, r) {
  if (context.abortController.signal.aborted) throw new ru();
  let o = Fr(context),
    s = getDenyRuleForTool(o, tool);
  if (s)
    return {
      behavior: "deny",
      decisionReason: {
        type: "rule",
        rule: s,
      },
      message: `Permission to use ${tool.name} has been denied.`,
    };
  let i = getInputParamRule(o, tool, input, "deny");
  if (i)
    return {
      behavior: "deny",
      decisionReason: {
        type: "rule",
        rule: i,
      },
      message: `Permission to use ${tool.name} with ${i.ruleValue.ruleContent} has been denied.`,
    };
  let a = getAskRuleForTool(o, tool);
  if (a) {
    if (
      !(
        tool.name === Co &&
        xo.isSandboxingEnabled() &&
        xo.isAutoAllowBashIfSandboxedEnabled() &&
        N$(input)
      )
    )
      return {
        behavior: "ask",
        decisionReason: {
          type: "rule",
          rule: a,
        },
        message: createPermissionRequestMessage(tool.name),
      };
  }
  let l = {
    behavior: "passthrough",
    message: createPermissionRequestMessage(tool.name),
  };
  try {
    let h = tool.inputSchema.parse(input);
    l = await tool.checkPermissions(h, context);
  } catch (h) {
    if (h instanceof ru || h instanceof tf) throw h;
    if (!lh(h)) ke(h);
  }
  if (l?.behavior === "deny") return l;
  let c = getInputParamRule(o, tool, input, "ask");
  if (c)
    return {
      behavior: "ask",
      decisionReason: {
        type: "rule",
        rule: c,
      },
      message: createPermissionRequestMessage(tool.name),
    };
  if (tool.requiresUserInteraction?.() && l?.behavior === "ask") return l;
  if (l?.behavior === "ask" && acr(l.decisionReason)) return l;
  if (tool.mcpInfo?.effectiveMaxPermission === "ask") {
    let h = {
      type: "other",
      reason: blc,
    };
    return {
      behavior: "ask",
      message: createPermissionRequestMessage(tool.name, h),
      decisionReason: h,
    };
  }
  let u = Fr(context),
    d = Hqe(tool, u),
    p = d === "bypassPermissions" || (d === "plan" && u.isBypassPermissionsModeAvailable),
    f =
      p && l?.behavior === "ask"
        ? findSafetyCheckReason(
            l.decisionReason,
            (h) =>
              h.reason.startsWith("Dangerous rm operation") ||
              h.reason.startsWith("Dangerous rmdir operation"),
          )
        : void 0;
  if (
    l?.behavior === "ask" &&
    (f ||
      (!p &&
        (findSafetyCheckReason(l.decisionReason) ||
          l.decisionReason?.type === "sandboxOverride" ||
          Elc(l.decisionReason))))
  )
    return l;
  if (p)
    return {
      behavior: "allow",
      updatedInput: getUpdatedInputOrFallback(l, input),
      decisionReason: {
        type: "mode",
        mode: d,
      },
    };
  let m = toolAlwaysAllowedRule(Fr(context), tool);
  if (
    m &&
    !(Fr(context).chromeClassifierFloorEnabled === true && kqo.isChromeMcpToolName(Rhe(tool)))
  )
    return {
      behavior: "allow",
      updatedInput: getUpdatedInputOrFallback(l, input),
      decisionReason: {
        type: "rule",
        rule: m,
      },
    };
  let g =
    l.behavior === "passthrough"
      ? {
          ...l,
          behavior: "ask",
          message: createPermissionRequestMessage(tool.name, l.decisionReason),
        }
      : l;
  if (g.behavior === "ask" && g.suggestions)
    T(`Permission suggestions for ${tool.name}: ${De(g.suggestions, null, 2)}`);
  return g;
}
async function deletePermissionRule({ rule: e, initialContext: t, setToolPermissionContext: n }) {
  if (e.source === "policySettings" || e.source === "flagSettings" || e.source === "command")
    throw Error("Cannot delete permission rules from read-only settings");
  let r = My(t, {
    type: "removeRules",
    rules: [e.ruleValue],
    behavior: e.ruleBehavior,
    destination: e.source,
  });
  switch (e.source) {
    case "localSettings":
    case "userSettings":
    case "projectSettings": {
      Fca(e);
      break;
    }
    case "cliArg":
    case "session":
      break;
  }
  n(r);
}
function Alc(e, t) {
  let n = new Map();
  for (let o of e) {
    let s = `${o.source}:${o.ruleBehavior}`;
    if (!n.has(s)) n.set(s, []);
    n.get(s).push(o.ruleValue);
  }
  let r = [];
  for (let [o, s] of n) {
    let [i, a] = o.split(":");
    r.push({
      type: t,
      rules: s,
      behavior: a,
      destination: i,
    });
  }
  return r;
}
function applyPermissionRulesToPermissionContext(e, t) {
  let n = Alc(t, "addRules");
  return T4(e, n);
}
function syncPermissionRulesFromDisk(e, t) {
  let n = e;
  if (T5e()) {
    let o = [...OO, "cliArg", "session"],
      s = ["allow", "deny", "ask"];
    for (let i of o)
      for (let a of s)
        n = My(n, {
          type: "replaceRules",
          rules: [],
          behavior: a,
          destination: i,
        });
  }
  for (let o of fv)
    for (let s of ["allow", "deny", "ask"])
      n = My(n, {
        type: "replaceRules",
        rules: [],
        behavior: s,
        destination: o,
      });
  let r = Alc(t, "replaceRules");
  return T4(n, r);
}
function getUpdatedInputOrFallback(permissionResult, fallback) {
  return ("updatedInput" in permissionResult ? permissionResult.updatedInput : void 0) ?? fallback;
}
function findSafetyCheckReason(e, t = () => true) {
  if (!e) return;
  if (e.type === "safetyCheck") return t(e) ? e : void 0;
  if (e.type === "subcommandResults")
    for (let n of e.reasons.values()) {
      let r = findSafetyCheckReason(n.decisionReason, t);
      if (r) return r;
    }
  return;
}
var kqo,
  Znm,
  erm,
  blc = "Your organization requires approval for this tool",
  PERMISSION_RULE_SOURCES,
  trm,
  hasPermissionsToUseTool = async (e, t, n, r, o) =>
    hasPermissionsToUseToolWithSink(e, t, n, r, o, void 0),
  hasPermissionsToUseToolWithSink = async (e, t, n, r, o, s, i) => {
    let a = await orm(e, t, n, r, o, s, i);
    return a.behavior === "deny"
      ? {
          ...a,
          decideLocation: "pre-ask",
          ...false,
        }
      : a;
  },
  orm = async (tool, input, context, assistantMessage, toolUseID, s, i) => {
    let a = await hasPermissionsToUseToolInner(
      tool,
      input,
      {
        ...context,
        toolUseId: toolUseID,
      },
      s,
    );
    if (a.behavior === "allow") {
      let l = context.getAppState();
      {
        let c = context.localDenialTracking ?? l.denialTracking;
        if (Hqe(tool, Fr(context)) === "auto" && c && c.consecutiveDenials > 0) {
          let u = uYt(c);
          eTt(context, u);
        }
      }
      return a;
    }
    if (a.behavior === "ask") {
      let l = context.getAppState(),
        c = Fr(context),
        u = Hqe(tool, c),
        d = kqo?.isChromeMcpToolName(Rhe(tool)) ?? false,
        p =
          c.chromeClassifierFloorEnabled === true &&
          c.canAutoClassifierRun === true &&
          d &&
          (a.metadata?.command?.chrome?.domainAllowed === true ||
            toolAlwaysAllowedRule(c, tool) !== null);
      if (u === "dontAsk" && !p)
        return {
          behavior: "deny",
          decisionReason: {
            type: "mode",
            mode: "dontAsk",
          },
          message: icr(tool.name),
        };
      if (Slc(u) || p) {
        let g = (P) => ({
            behavior: "allow",
            ...P,
          }),
          h = findSafetyCheckReason(a.decisionReason, (P) => !P.classifierApprovable),
          y = a.decisionReason?.type === "sandboxOverride",
          b =
            acr(a.decisionReason) &&
            true &&
            !(irm(a.decisionReason) && !(tool.isDestructive?.(input) ?? false)),
          _ = tool.mcpInfo?.effectiveMaxPermission === "ask",
          S = Elc(a.decisionReason);
        if (h || y || b || _ || S) {
          if (c.shouldAvoidPermissionPrompts)
            return {
              behavior: "deny",
              message: a.message,
              decisionReason: {
                type: "asyncAgent",
                reason:
                  "Action requires interactive approval and permission prompts are not available in this context",
              },
            };
          if (h || b || _ || S)
            return (
              G("tengu_auto_mode_fallback_to_ask", {
                reason: We(
                  h ? "safety_check" : b ? "ask_rule" : S ? "plan_mode_floor" : "org_ask_ceiling",
                ),
                toolName: Ui(tool.name),
              }),
              a
            );
        }
        if (tool.requiresUserInteraction?.() && a.behavior === "ask")
          return (
            G("tengu_auto_mode_fallback_to_ask", {
              reason: We("requires_user_interaction"),
              toolName: Ui(tool.name),
            }),
            a
          );
        if (erm?.workflowNeedsUsageConsentPrompt(tool.name, context))
          return (
            G("tengu_auto_mode_fallback_to_ask", {
              reason: We("workflow_usage_consent"),
              toolName: Ui(tool.name),
            }),
            a
          );
        let A = context.localDenialTracking ?? l.denialTracking ?? oZn();
        if ((tool.name, Ss, tool.name !== ss && !y))
          try {
            let P = tool.inputSchema.parse(input),
              O = (B) => {
                let $ = Ig(B);
                return !C6e($.toolName, $.ruleContent);
              },
              L = xw(c.alwaysAllowRules, (B) => (B ?? []).filter(O)),
              M = context.permissionLayers?.map((B) =>
                B.kind === "allowed_tools"
                  ? {
                      ...B,
                      allowedTools: B.allowedTools.filter(O),
                    }
                  : B,
              ),
              N = await tool.checkPermissions(P, {
                ...context,
                permissionLayers: M,
                getAppState: () => {
                  let B = context.getAppState();
                  return {
                    ...B,
                    toolPermissionContext: {
                      ...B.toolPermissionContext,
                      mode: "acceptEdits",
                      alwaysAllowRules: L,
                    },
                  };
                },
              });
            if (N.behavior === "allow") {
              let B = uYt(A);
              return (
                eTt(context, B),
                T(
                  `Skipping auto mode classifier for ${tool.name}: would be allowed in acceptEdits mode`,
                ),
                G("tengu_auto_mode_decision", {
                  decision: We("allowed"),
                  toolName: Ui(tool.name),
                  inProtectedNamespace: $V(),
                  chromeAutomode: d,
                  agentMsgId: assistantMessage.message.id,
                  confidence: We("high"),
                  fastPath: We("acceptEdits"),
                  ...scr(tool.name, input),
                }),
                g({
                  updatedInput: N.updatedInput ?? input,
                  decisionReason: {
                    type: "mode",
                    mode: "auto",
                  },
                })
              );
            }
          } catch (P) {
            if (P instanceof ru || P instanceof tf) throw P;
            if (!lh(P)) ke(P);
            G("tengu_auto_mode_decision", {
              decision: We("fastpath_error"),
              toolName: Ui(tool.name),
              inProtectedNamespace: $V(),
              chromeAutomode: d,
              agentMsgId: assistantMessage.message.id,
              fastPath: We("acceptEdits"),
              error: P instanceof Error ? P.name : "unknown",
              ...scr(tool.name, input),
            });
          }
        if (kqo.isAutoModeAllowlistedTool(tool.name, input)) {
          let P = uYt(A);
          return (
            eTt(context, P),
            T(`Skipping auto mode classifier for ${tool.name}: tool is on the safe allowlist`),
            Iqo({
              tool: tool.name,
              allowlisted: true,
              decision: "allowed",
              durationMs: 0,
            }),
            G("tengu_auto_mode_decision", {
              decision: We("allowed"),
              toolName: Ui(tool.name),
              inProtectedNamespace: $V(),
              chromeAutomode: d,
              agentMsgId: assistantMessage.message.id,
              confidence: We("high"),
              fastPath: We("allowlist"),
              ...scr(tool.name, input),
            }),
            g({
              updatedInput: a.updatedInput ?? input,
              decisionReason: {
                type: "mode",
                mode: "auto",
              },
            })
          );
        }
        let v = rrm() ? (context.sameTurnToolUses ?? []) : [],
          C = z6n(tool.name, input);
        ull(i, toolUseID);
        let x;
        try {
          x = await Hyt(
            v.length > 0 ? [...context.messages, ...v] : context.messages,
            C,
            context.options.tools,
            Fr(context),
            context.abortController.signal,
            {
              isSubagentLoop: aje(context.agentId),
              recordPresumed: context.agentId === void 0,
            },
          );
        } finally {
          VMe(i, toolUseID);
        }
        let I = x.unavailable ? "unavailable" : x.shouldBlock ? "blocked" : "allowed",
          k = x.usage && x.model ? eje(x.model, x.usage) : void 0;
        if (
          (Iqo({
            tool: tool.name,
            allowlisted: false,
            decision: I,
            classifierModel: x.model,
            inputTokens: x.usage?.inputTokens,
            outputTokens: x.usage?.outputTokens,
            cacheReadInputTokens: x.usage?.cacheReadInputTokens,
            cacheCreationInputTokens: x.usage?.cacheCreationInputTokens,
            durationMs: x.durationMs,
            costUSD: k,
            stage: x.stage,
          }),
          G("tengu_auto_mode_decision", {
            decision: $e(I),
            toolName: Ui(tool.name),
            inProtectedNamespace: $V(),
            chromeAutomode: d,
            ...scr(tool.name, input),
            stripAllBashFlag: vko(),
            originalDecisionReasonType: Oo(a.decisionReason?.type),
            agentMsgId: assistantMessage.message.id,
            sameTurnSiblings: v.length,
            classifierModel: x.model,
            consecutiveDenials: x.shouldBlock ? A.consecutiveDenials + 1 : 0,
            totalDenials: x.shouldBlock ? A.totalDenials + 1 : A.totalDenials,
            classifierInputTokens: x.usage?.inputTokens,
            classifierOutputTokens: x.usage?.outputTokens,
            classifierCacheReadInputTokens: x.usage?.cacheReadInputTokens,
            classifierCacheCreationInputTokens: x.usage?.cacheCreationInputTokens,
            classifierDurationMs: x.durationMs,
            classifierSystemPromptLength: x.promptLengths?.systemPrompt,
            classifierToolCallsLength: x.promptLengths?.toolCalls,
            classifierUserPromptsLength: x.promptLengths?.userPrompts,
            sessionInputTokens: eCt(),
            sessionOutputTokens: Gb(),
            sessionCacheReadInputTokens: tCt(),
            sessionCacheCreationInputTokens: nCt(),
            classifierCostUSD: k,
            classifierStage: Oo(x.stage),
            classifierFailureMode: Oo(x.failureMode),
            classifierStage1InputTokens: x.stage1Usage?.inputTokens,
            classifierStage1OutputTokens: x.stage1Usage?.outputTokens,
            classifierStage1CacheReadInputTokens: x.stage1Usage?.cacheReadInputTokens,
            classifierStage1CacheCreationInputTokens: x.stage1Usage?.cacheCreationInputTokens,
            classifierStage1DurationMs: x.stage1DurationMs,
            classifierStage1RequestId: Hr(x.stage1RequestId),
            classifierStage1MsgId: Hr(x.stage1MsgId),
            classifierStage1CostUSD:
              x.stage1Usage && x.model ? eje(x.model, x.stage1Usage) : void 0,
            classifierStage2InputTokens: x.stage2Usage?.inputTokens,
            classifierStage2OutputTokens: x.stage2Usage?.outputTokens,
            classifierStage2CacheReadInputTokens: x.stage2Usage?.cacheReadInputTokens,
            classifierStage2CacheCreationInputTokens: x.stage2Usage?.cacheCreationInputTokens,
            classifierStage2DurationMs: x.stage2DurationMs,
            classifierStage2RequestId: Hr(x.stage2RequestId),
            classifierStage2MsgId: Hr(x.stage2MsgId),
            classifierStage2CostUSD:
              x.stage2Usage && x.model ? eje(x.model, x.stage2Usage) : void 0,
          }),
          x.shouldBlock)
        ) {
          if (x.transcriptTooLong) {
            if (tool.name === ss)
              return {
                behavior: "allow",
                updatedInput: input,
                decisionReason: {
                  type: "mode",
                  mode: "auto",
                },
              };
            if (c.shouldAvoidPermissionPrompts)
              throw new ru(
                "Agent aborted: auto mode classifier transcript exceeded context window in headless mode",
              );
            if (
              (T(
                "Auto mode classifier transcript too long, falling back to normal permission handling",
                {
                  level: "warn",
                },
              ),
              G("tengu_auto_mode_fallback_to_ask", {
                reason: We("transcript_too_long"),
                toolName: Ui(tool.name),
              }),
              u === "dontAsk")
            )
              return {
                behavior: "deny",
                decisionReason: {
                  type: "mode",
                  mode: "dontAsk",
                },
                message: icr(tool.name),
              };
            return {
              ...a,
              decisionReason: {
                type: "other",
                reason: GRt,
              },
            };
          }
          if (x.unavailable)
            return (
              T("Auto mode classifier unavailable, denying with retry guidance (fail closed)", {
                level: "warn",
              }),
              {
                behavior: "deny",
                decisionReason: {
                  type: "classifier",
                  classifier: "auto-mode",
                  reason: n2e,
                },
                message: vlc(tool.name, x.model, x.httpStatus, x.errorKind),
              }
            );
          let P = mkl(A);
          (eTt(context, P),
            T(`Auto mode classifier blocked action: ${x.reason}`, {
              level: "warn",
            }));
          let O = handleDenialLimitExceeded(P, x.reason, assistantMessage, tool, a, context);
          if (O) {
            if (u === "dontAsk")
              return {
                behavior: "deny",
                decisionReason: {
                  type: "mode",
                  mode: "dontAsk",
                },
                message: icr(tool.name),
              };
            return O;
          }
          return {
            behavior: "deny",
            decisionReason: {
              type: "classifier",
              classifier: "auto-mode",
              reason: x.reason,
            },
            message: Tlc(x.reason),
          };
        }
        let D = uYt(A);
        return (
          eTt(context, D),
          g({
            updatedInput: a.updatedInput ?? input,
            decisionReason: {
              type: "classifier",
              classifier: "auto-mode",
              reason: x.reason,
            },
          })
        );
      }
      let f = Fr(context);
      if (f.shouldAvoidPermissionPrompts) {
        let m = await runPermissionRequestHooksForHeadlessAgent(
          tool,
          a.updatedInput ?? input,
          toolUseID,
          context,
          Hqe(tool, f),
          a.suggestions,
        );
        if (m) return m;
        return {
          behavior: "deny",
          decisionReason: {
            type: "asyncAgent",
            reason: "Permission prompts are not available in this context",
          },
          message: Hlc(tool.name),
        };
      }
    }
    return a;
  };
