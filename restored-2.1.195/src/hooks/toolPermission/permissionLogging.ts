// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eVe
// matched 2.1.88 source: src/hooks/toolPermission/permissionLogging.ts
// class=modified  jaccard=0.2644  score=0.3291  fileCov=0.5735
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module eVe] deps: iu, eco
((P$a = require("path")),
  ($Lp = {
    keyword: wt.blue,
    built_in: wt.cyan,
    type: wt.cyan.dim,
    literal: wt.blue,
    number: wt.green,
    regexp: wt.red,
    string: wt.red,
    subst: wt.reset,
    symbol: wt.reset,
    class: wt.blue,
    function: wt.yellow,
    title: wt.reset,
    params: wt.reset,
    comment: wt.green,
    doctag: wt.green,
    meta: wt.grey,
    "meta-keyword": wt.reset,
    "meta-string": wt.reset,
    section: wt.reset,
    tag: wt.grey,
    name: wt.blue,
    attr: wt.cyan,
    attribute: wt.reset,
    variable: wt.reset,
    bullet: wt.reset,
    code: wt.reset,
    emphasis: wt.italic,
    strong: wt.bold,
    link: wt.underline,
    quote: wt.reset,
    addition: wt.green,
    deletion: wt.red,
  }));
BLp = {
  highlight: OLp,
  supportsLanguage: NLp,
};
function Igo(e) {
  return ULp.includes(e);
}
async function xgo(e, t, n, r) {
  let o;
  if (e.getPath && t) {
    let s = e.inputSchema.safeParse(t);
    if (s.success) {
      let i = e.getPath(s.data);
      if (i) o = await Zqe(i);
    }
  }
  return {
    decision: n,
    source: r,
    tool_name: e.name,
    ...(o && {
      language: o,
    }),
  };
}
function FLp(e) {
  if (e.type === "classifier") return "classifier";
  switch (e.type) {
    case "hook":
      return "hook";
    case "user":
      return e.permanent ? "user_permanent" : "user_temporary";
    case "user_abort":
      return "user_abort";
    case "user_reject":
      return "user_reject";
    default:
      return "unknown";
  }
}
function nft(e, t, n) {
  return {
    messageID: Hr(e),
    toolName: Ui(t),
    sandboxEnabled: xo.isSandboxingEnabled(),
    ...(n !== void 0 && {
      waiting_for_user_permission_ms: n,
    }),
  };
}
function jLp(e, t, n) {
  let r = e.name === Co;
  if (!r && e.name !== Ss) return;
  if (t === null || typeof t !== "object" || !("command" in t) || typeof t.command !== "string")
    return;
  let o = r ? Zst(t.command) : tft(t.command);
  return {
    destructive_category: $e(o ?? "none"),
    destructive_target_scope: $e(mce(t.command, $t(), o)),
    permission_mode: $e(n),
  };
}
function GLp(e, t, n, r, o) {
  if (n === "config") {
    (G("tengu_tool_use_granted_in_config", {
      ...nft(t, e.name, void 0),
      ...o,
    }),
      xe("permission_auto_approve_config"));
    return;
  }
  if (n.type === "classifier") {
    G("tengu_tool_use_granted_by_classifier", {
      ...nft(t, e.name, r),
      ...o,
    });
    return;
  }
  switch (n.type) {
    case "user":
      (G(
        n.permanent
          ? "tengu_tool_use_granted_in_prompt_permanent"
          : "tengu_tool_use_granted_in_prompt_temporary",
        {
          ...nft(t, e.name, r),
          ...o,
        },
      ),
        xe("permission_user_grant"));
      break;
    case "hook":
      (G("tengu_tool_use_granted_by_permission_hook", {
        ...nft(t, e.name, r),
        ...o,
        permanent: n.permanent,
      }),
        xe("permission_auto_approve_hook"));
      break;
    default:
      break;
  }
}
function WLp(e, t, n, r, o) {
  if (n === "config") {
    (G("tengu_tool_use_denied_in_config", {
      ...nft(t, e.name, void 0),
      ...o,
    }),
      xe("permission_auto_deny_config"));
    return;
  }
  (G("tengu_tool_use_rejected_in_prompt", {
    ...nft(t, e.name, r),
    ...o,
    ...(n.type === "hook"
      ? {
          isHook: true,
        }
      : {
          hasFeedback: n.type === "user_reject" ? n.hasFeedback : false,
        }),
  }),
    xe(n.type === "hook" ? "permission_auto_deny_hook" : "permission_user_deny"));
}
function O$a(e, t, n) {
  let { tool: r, input: o, toolUseContext: s, messageId: i, toolUseID: a, permissionMode: l } = e,
    { decision: c, source: u } = t,
    d = n !== void 0 ? Date.now() - n : void 0,
    p = jLp(r, o, l);
  if (t.decision === "accept") GLp(r, i, t.source, d, p);
  else WLp(r, i, t.source, d, p);
  let f = u === "config" ? "config" : FLp(u);
  if (Igo(r.name)) xgo(r, o, c, f).then((g) => fCt()?.add(1, g));
  if (!s.toolDecisions) s.toolDecisions = {};
  s.toolDecisions[a] = {
    source: f,
    decision: c,
    timestamp: Date.now(),
  };
  let m = nNt(r.name, o, r.userFacingName?.(void 0));
  Jc("tool_decision", {
    decision: c,
    source: f,
    tool_name: Ui(r.name),
    tool_use_id: a,
    ...(Object.keys(m).length > 0 && {
      tool_parameters: De(m),
    }),
  });
}
function N$a(e, t, n) {
  if (t !== void 0 && t !== "config") {
    if (t === "hook") return "hook:PermissionRequest";
    if (t === "classifier" && n?.type === "classifier") return $$a(n);
    return t;
  }
  if (n === void 0) return "unknown";
  switch (n.type) {
    case "rule":
      return `rule:${n.rule.source}`;
    case "mode":
      return `mode:${n.mode}`;
    case "hook":
      return `hook:${bi(n.hookName, ":")}`;
    case "classifier":
      return $$a(n);
    case "subcommandResults": {
      let r = new Set();
      for (let s of n.reasons.values())
        if (s.behavior === e && s.decisionReason !== void 0)
          r.add(N$a(e, void 0, s.decisionReason));
      let [o] = r;
      if (r.size === 1 && o !== void 0) return o;
      if (r.size > 1)
        return `subcommands:${[...new Set([...r].map((i) => bi(i, ":")))].sort().join("+")}`;
      return "subcommandResults";
    }
    case "other":
      if (n.reason === t2e) return "sandboxAutoAllow";
      if (n.reason === jRt) return "readOnlyCommand";
      if (n.reason === GRt) return "classifierTranscriptTooLong";
      if (n.bashMissKind !== void 0) return `bashMiss:${n.bashMissKind}`;
      return "other";
    case "asyncAgent":
      if (n.reason === jfn) return "hookRewrittenInputAsk";
      return n.type;
    case "safetyCheck":
      if (n.reason.startsWith(Iet)) return "bashPromptRule";
      return n.type;
    case "permissionPromptTool":
    case "sandboxOverride":
    case "workingDir":
      return n.type;
    default:
      return "unknown";
  }
}
function $$a(e) {
  return e.reason === n2e ? `classifier:${e.classifier}:unavailable` : `classifier:${e.classifier}`;
}
function B$a({
  toolName: e,
  isMcp: t,
  messageId: n,
  toolUseID: r,
  permissionMode: o,
  behavior: s,
  decisionReason: i,
  resolvedSource: a,
}) {
  return;
}
var ULp;
