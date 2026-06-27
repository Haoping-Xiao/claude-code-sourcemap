// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xqo
// matched 2.1.88 source: src/utils/permissions/permissions.ts
// class=modified  jaccard=0.3889  score=0.5459  fileCov=0.5749
// note: deminified; 24 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var xqo = E(() => {
  G1();
  lf();
  EI();
  lC();
  dqe();
  LX();
  pht();
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
});
var cDl = {};
_t(cDl, {
  toolAlwaysAllowedRule: () => toolAlwaysAllowedRule,
  syncPermissionRulesFromDisk: () => syncPermissionRulesFromDisk,
  sameTurnSiblingContextEnabledWithSource: () => sameTurnSiblingContextEnabledWithSource,
  permissionRuleSourceDisplayString: () => permissionRuleSourceDisplayString,
  isNonDeniableTool: () => isNonDeniableTool,
  hasPermissionsToUseToolWithSink: () => hasPermissionsToUseToolWithSink,
  hasPermissionsToUseTool: () => hasPermissionsToUseTool,
  guardHookUpdatedInput: () => guardHookUpdatedInput,
  getRuleByContentsForToolName: () => getRuleByContentsForToolName,
  getRuleByContentsForTool: () => getRuleByContentsForTool,
  getInputParamRule: () => getInputParamRule,
  getDenyRules: () => getDenyRules,
  getDenyRuleForTool: () => getDenyRuleForTool,
  getDenyRuleForAgent: () => getDenyRuleForAgent,
  getAskRules: () => getAskRules,
  getAskRuleForTool: () => getAskRuleForTool,
  getAllowRules: () => getAllowRules,
  findSafetyCheckReason: () => findSafetyCheckReason,
  filterDeniedAgents: () => filterDeniedAgents,
  deletePermissionRule: () => deletePermissionRule,
  createPermissionRequestMessage: () => createPermissionRequestMessage,
  checkRuleBasedPermissions: () => checkRuleBasedPermissions,
  applyPermissionRulesToPermissionContext: () => applyPermissionRulesToPermissionContext,
  PERMISSION_RULE_SOURCES: () => PERMISSION_RULE_SOURCES,
});
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
  return e === "auto" || (e === "plan" && (Znm?.isAutoModeActive() ?? !1));
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
function createPermissionRequestMessage(e, t) {
  if (t) {
    if (t.type === "classifier")
      return `Classifier '${t.classifier}' requires approval for this ${e} command: ${t.reason}`;
    switch (t.type) {
      case "hook":
        return t.reason
          ? `Hook '${t.hookName}' blocked this action: ${t.reason}`
          : `Hook '${t.hookName}' requires approval for this ${e} command`;
      case "rule": {
        let r = Pp(t.rule.ruleValue),
          o = permissionRuleSourceDisplayString(t.rule.source);
        return `Permission rule '${r}' from ${o} requires approval for this ${e} command`;
      }
      case "subcommandResults": {
        let r = [];
        for (let [o, s] of t.reasons)
          if (s.behavior === "ask" || s.behavior === "passthrough")
            if (e === "Bash") {
              let { commandWithoutRedirections: i, redirections: a } = vde(o),
                l = a.length > 0 ? i : o;
              r.push(l);
            } else r.push(o);
        if (r.length > 0) {
          let o = r.length;
          return `This ${e} command contains multiple operations. The following ${bn(o, "part")} ${bn(o, "requires", "require")} approval: ${r.join(", ")}`;
        }
        return `This ${e} command contains multiple operations that require approval`;
      }
      case "permissionPromptTool":
        return `Tool '${t.permissionPromptToolName}' requires approval for this ${e} command`;
      case "sandboxOverride":
        return "Run outside of the sandbox";
      case "workingDir":
        return t.reason;
      case "safetyCheck":
      case "other":
        return t.reason;
      case "mode":
        return `Current permission mode (${_Y(t.mode)}) requires approval for this ${e} command`;
      case "asyncAgent":
        return t.reason;
    }
  }
  return `Claude requested permissions to use ${e}, but you haven't granted it yet.`;
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
function Dqo(e, t, { proxyExpansion: n = !1, globMatching: r = !1, toolAliases: o } = {}) {
  if (t.ruleValue.ruleContent !== void 0) return !1;
  let s = Rhe(e);
  if (t.ruleValue.toolName === s) return !0;
  if (n && omn(t.ruleValue.toolName, o).includes(s)) return !0;
  if (r && HCe(t.ruleValue.toolName) && iLr(t.ruleValue.toolName, s)) return !0;
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
        globMatching: !0,
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
        globMatching: !0,
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
async function nrm(e, t, n, r, o, s) {
  try {
    for await (let i of jAe(e.name, n, t, r, o, s, r.abortController.signal)) {
      if (!i.permissionRequestResult) continue;
      let a = i.permissionRequestResult;
      if (a.behavior === "allow") {
        let l = a.updatedInput ?? t;
        if (a.updatedInput) {
          let c = guardHookUpdatedInput(
            await checkRuleBasedPermissions(e, l, {
              ...r,
              toolUseId: n,
            }),
            e.name,
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
          (Y8(c), r.setToolPermissionContext((u) => T4(u, c)));
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
          (T(`Hook interrupt: tool=${e.name} hookMessage=${a.message}`), r.abortController.abort());
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
    value: !1,
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
function srm(e, t, n, r, o, s) {
  if (!gkl(e)) return null;
  let i = e.totalDenials >= rZn.maxTotal,
    a = Fr(s).shouldAvoidPermissionPrompts,
    l = e.totalDenials,
    c = e.consecutiveDenials,
    u = i
      ? `${l} actions were blocked this session. Please review the transcript before continuing.`
      : `${c} consecutive actions were blocked. Please review the transcript before continuing.`;
  if (
    (G("tengu_auto_mode_denial_limit_exceeded", {
      limit: We(i ? "total" : "consecutive"),
      mode: We(a ? "headless" : "cli"),
      messageID: n.message.id,
      consecutiveDenials: c,
      totalDenials: l,
      toolName: Ui(r.name),
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
    eTt(s, {
      ...e,
      totalDenials: 0,
      consecutiveDenials: 0,
    });
  let d = o.decisionReason?.type === "classifier" ? o.decisionReason.classifier : "auto-mode";
  return {
    ...o,
    decisionReason: {
      type: "classifier",
      classifier: d,
      reason: `${u}

Latest blocked action: ${t}`,
    },
  };
}
function acr(e) {
  if (e?.type === "rule" && e.rule.ruleBehavior === "ask") return !0;
  if (e?.type === "subcommandResults") {
    for (let t of e.reasons.values()) if (t.behavior === "ask" && acr(t.decisionReason)) return !0;
  }
  return !1;
}
function irm(e) {
  return e?.type === "rule" && e.rule.ruleBehavior === "ask" && e.rule.source === "mcpServerPolicy";
}
function Elc(e) {
  return e?.type === "mode" && e.mode === "plan";
}
async function checkRuleBasedPermissions(e, t, n) {
  let r = Fr(n),
    o = getDenyRuleForTool(r, e);
  if (o)
    return {
      behavior: "deny",
      decisionReason: {
        type: "rule",
        rule: o,
      },
      message: `Permission to use ${e.name} has been denied.`,
    };
  let s = getInputParamRule(r, e, t, "deny");
  if (s)
    return {
      behavior: "deny",
      decisionReason: {
        type: "rule",
        rule: s,
      },
      message: `Permission to use ${e.name} with ${s.ruleValue.ruleContent} has been denied.`,
    };
  let i = getAskRuleForTool(r, e);
  if (i) {
    if (
      !(
        e.name === Co &&
        xo.isSandboxingEnabled() &&
        xo.isAutoAllowBashIfSandboxedEnabled() &&
        N$(t)
      )
    )
      return {
        behavior: "ask",
        decisionReason: {
          type: "rule",
          rule: i,
        },
        message: createPermissionRequestMessage(e.name),
      };
  }
  let a = {
    behavior: "passthrough",
    message: createPermissionRequestMessage(e.name),
  };
  try {
    let c = e.inputSchema.parse(t);
    a = await e.checkPermissions(c, n);
  } catch (c) {
    if (c instanceof ru || c instanceof tf) throw c;
    if (!lh(c)) ke(c);
  }
  if (a?.behavior === "deny") return a;
  let l = getInputParamRule(r, e, t, "ask");
  if (l)
    return {
      behavior: "ask",
      decisionReason: {
        type: "rule",
        rule: l,
      },
      message: createPermissionRequestMessage(e.name),
    };
  if (a?.behavior === "ask" && acr(a.decisionReason)) return a;
  if (e.mcpInfo?.effectiveMaxPermission === "ask") {
    let c = {
      type: "other",
      reason: blc,
    };
    return {
      behavior: "ask",
      message: createPermissionRequestMessage(e.name, c),
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
async function arm(e, t, n, r) {
  if (n.abortController.signal.aborted) throw new ru();
  let o = Fr(n),
    s = getDenyRuleForTool(o, e);
  if (s)
    return {
      behavior: "deny",
      decisionReason: {
        type: "rule",
        rule: s,
      },
      message: `Permission to use ${e.name} has been denied.`,
    };
  let i = getInputParamRule(o, e, t, "deny");
  if (i)
    return {
      behavior: "deny",
      decisionReason: {
        type: "rule",
        rule: i,
      },
      message: `Permission to use ${e.name} with ${i.ruleValue.ruleContent} has been denied.`,
    };
  let a = getAskRuleForTool(o, e);
  if (a) {
    if (
      !(
        e.name === Co &&
        xo.isSandboxingEnabled() &&
        xo.isAutoAllowBashIfSandboxedEnabled() &&
        N$(t)
      )
    )
      return {
        behavior: "ask",
        decisionReason: {
          type: "rule",
          rule: a,
        },
        message: createPermissionRequestMessage(e.name),
      };
  }
  let l = {
    behavior: "passthrough",
    message: createPermissionRequestMessage(e.name),
  };
  try {
    let h = e.inputSchema.parse(t);
    l = await e.checkPermissions(h, n);
  } catch (h) {
    if (h instanceof ru || h instanceof tf) throw h;
    if (!lh(h)) ke(h);
  }
  if (l?.behavior === "deny") return l;
  let c = getInputParamRule(o, e, t, "ask");
  if (c)
    return {
      behavior: "ask",
      decisionReason: {
        type: "rule",
        rule: c,
      },
      message: createPermissionRequestMessage(e.name),
    };
  if (e.requiresUserInteraction?.() && l?.behavior === "ask") return l;
  if (l?.behavior === "ask" && acr(l.decisionReason)) return l;
  if (e.mcpInfo?.effectiveMaxPermission === "ask") {
    let h = {
      type: "other",
      reason: blc,
    };
    return {
      behavior: "ask",
      message: createPermissionRequestMessage(e.name, h),
      decisionReason: h,
    };
  }
  let u = Fr(n),
    d = Hqe(e, u),
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
      updatedInput: _lc(l, t),
      decisionReason: {
        type: "mode",
        mode: d,
      },
    };
  let m = toolAlwaysAllowedRule(Fr(n), e);
  if (m && !(Fr(n).chromeClassifierFloorEnabled === !0 && kqo.isChromeMcpToolName(Rhe(e))))
    return {
      behavior: "allow",
      updatedInput: _lc(l, t),
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
          message: createPermissionRequestMessage(e.name, l.decisionReason),
        }
      : l;
  if (g.behavior === "ask" && g.suggestions)
    T(`Permission suggestions for ${e.name}: ${De(g.suggestions, null, 2)}`);
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
function _lc(e, t) {
  return ("updatedInput" in e ? e.updatedInput : void 0) ?? t;
}
function findSafetyCheckReason(e, t = () => !0) {
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
          ...!1,
        }
      : a;
  },
  orm = async (e, t, n, r, o, s, i) => {
    let a = await arm(
      e,
      t,
      {
        ...n,
        toolUseId: o,
      },
      s,
    );
    if (a.behavior === "allow") {
      let l = n.getAppState();
      {
        let c = n.localDenialTracking ?? l.denialTracking;
        if (Hqe(e, Fr(n)) === "auto" && c && c.consecutiveDenials > 0) {
          let u = uYt(c);
          eTt(n, u);
        }
      }
      return a;
    }
    if (a.behavior === "ask") {
      let l = n.getAppState(),
        c = Fr(n),
        u = Hqe(e, c),
        d = kqo?.isChromeMcpToolName(Rhe(e)) ?? !1,
        p =
          c.chromeClassifierFloorEnabled === !0 &&
          c.canAutoClassifierRun === !0 &&
          d &&
          (a.metadata?.command?.chrome?.domainAllowed === !0 ||
            toolAlwaysAllowedRule(c, e) !== null);
      if (u === "dontAsk" && !p)
        return {
          behavior: "deny",
          decisionReason: {
            type: "mode",
            mode: "dontAsk",
          },
          message: icr(e.name),
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
            !0 &&
            !(irm(a.decisionReason) && !(e.isDestructive?.(t) ?? !1)),
          _ = e.mcpInfo?.effectiveMaxPermission === "ask",
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
                toolName: Ui(e.name),
              }),
              a
            );
        }
        if (e.requiresUserInteraction?.() && a.behavior === "ask")
          return (
            G("tengu_auto_mode_fallback_to_ask", {
              reason: We("requires_user_interaction"),
              toolName: Ui(e.name),
            }),
            a
          );
        if (erm?.workflowNeedsUsageConsentPrompt(e.name, n))
          return (
            G("tengu_auto_mode_fallback_to_ask", {
              reason: We("workflow_usage_consent"),
              toolName: Ui(e.name),
            }),
            a
          );
        let A = n.localDenialTracking ?? l.denialTracking ?? oZn();
        if ((e.name, Ss, e.name !== ss && !y))
          try {
            let P = e.inputSchema.parse(t),
              O = (B) => {
                let $ = Ig(B);
                return !C6e($.toolName, $.ruleContent);
              },
              L = xw(c.alwaysAllowRules, (B) => (B ?? []).filter(O)),
              M = n.permissionLayers?.map((B) =>
                B.kind === "allowed_tools"
                  ? {
                      ...B,
                      allowedTools: B.allowedTools.filter(O),
                    }
                  : B,
              ),
              N = await e.checkPermissions(P, {
                ...n,
                permissionLayers: M,
                getAppState: () => {
                  let B = n.getAppState();
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
                eTt(n, B),
                T(
                  `Skipping auto mode classifier for ${e.name}: would be allowed in acceptEdits mode`,
                ),
                G("tengu_auto_mode_decision", {
                  decision: We("allowed"),
                  toolName: Ui(e.name),
                  inProtectedNamespace: $V(),
                  chromeAutomode: d,
                  agentMsgId: r.message.id,
                  confidence: We("high"),
                  fastPath: We("acceptEdits"),
                  ...scr(e.name, t),
                }),
                g({
                  updatedInput: N.updatedInput ?? t,
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
              toolName: Ui(e.name),
              inProtectedNamespace: $V(),
              chromeAutomode: d,
              agentMsgId: r.message.id,
              fastPath: We("acceptEdits"),
              error: P instanceof Error ? P.name : "unknown",
              ...scr(e.name, t),
            });
          }
        if (kqo.isAutoModeAllowlistedTool(e.name, t)) {
          let P = uYt(A);
          return (
            eTt(n, P),
            T(`Skipping auto mode classifier for ${e.name}: tool is on the safe allowlist`),
            Iqo({
              tool: e.name,
              allowlisted: !0,
              decision: "allowed",
              durationMs: 0,
            }),
            G("tengu_auto_mode_decision", {
              decision: We("allowed"),
              toolName: Ui(e.name),
              inProtectedNamespace: $V(),
              chromeAutomode: d,
              agentMsgId: r.message.id,
              confidence: We("high"),
              fastPath: We("allowlist"),
              ...scr(e.name, t),
            }),
            g({
              updatedInput: a.updatedInput ?? t,
              decisionReason: {
                type: "mode",
                mode: "auto",
              },
            })
          );
        }
        let v = rrm() ? (n.sameTurnToolUses ?? []) : [],
          C = z6n(e.name, t);
        ull(i, o);
        let x;
        try {
          x = await Hyt(
            v.length > 0 ? [...n.messages, ...v] : n.messages,
            C,
            n.options.tools,
            Fr(n),
            n.abortController.signal,
            {
              isSubagentLoop: aje(n.agentId),
              recordPresumed: n.agentId === void 0,
            },
          );
        } finally {
          VMe(i, o);
        }
        let I = x.unavailable ? "unavailable" : x.shouldBlock ? "blocked" : "allowed",
          k = x.usage && x.model ? eje(x.model, x.usage) : void 0;
        if (
          (Iqo({
            tool: e.name,
            allowlisted: !1,
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
            toolName: Ui(e.name),
            inProtectedNamespace: $V(),
            chromeAutomode: d,
            ...scr(e.name, t),
            stripAllBashFlag: vko(),
            originalDecisionReasonType: Oo(a.decisionReason?.type),
            agentMsgId: r.message.id,
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
            if (e.name === ss)
              return {
                behavior: "allow",
                updatedInput: t,
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
                toolName: Ui(e.name),
              }),
              u === "dontAsk")
            )
              return {
                behavior: "deny",
                decisionReason: {
                  type: "mode",
                  mode: "dontAsk",
                },
                message: icr(e.name),
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
                message: vlc(e.name, x.model, x.httpStatus, x.errorKind),
              }
            );
          let P = mkl(A);
          (eTt(n, P),
            T(`Auto mode classifier blocked action: ${x.reason}`, {
              level: "warn",
            }));
          let O = srm(P, x.reason, r, e, a, n);
          if (O) {
            if (u === "dontAsk")
              return {
                behavior: "deny",
                decisionReason: {
                  type: "mode",
                  mode: "dontAsk",
                },
                message: icr(e.name),
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
          eTt(n, D),
          g({
            updatedInput: a.updatedInput ?? t,
            decisionReason: {
              type: "classifier",
              classifier: "auto-mode",
              reason: x.reason,
            },
          })
        );
      }
      let f = Fr(n);
      if (f.shouldAvoidPermissionPrompts) {
        let m = await nrm(e, a.updatedInput ?? t, o, n, Hqe(e, f), a.suggestions);
        if (m) return m;
        return {
          behavior: "deny",
          decisionReason: {
            type: "asyncAgent",
            reason: "Permission prompts are not available in this context",
          },
          message: Hlc(e.name),
        };
      }
    }
    return a;
  };
