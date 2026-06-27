// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Tcl
// matched 2.1.88 source: src/tools/SkillTool/SkillTool.ts
// class=partial  jaccard=0.147  score=0.7224  fileCov=0.1558
// note: low-confidence suggestion: src/tools/SkillTool/SkillTool.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Tcl = E(() => {
  Q8();
  E5();
  b8t();
  Bs();
  zX();
  d_t();
  ql();
  Ye();
  s8t();
  co();
  sr();
  JI = R(se(), 1);
});
function saf(e) {
  let t = new Map();
  for (let n of e) {
    let r = t.get(n.name);
    if (r === void 0 || r.disableModelInvocation && !n.disableModelInvocation) t.set(n.name, n);
  }
  return [...t.values()];
}
async function PIo(e) {
  let t = e.getAppState().mcp.commands.filter(r => r.type === "prompt" && r.loadedFrom === "mcp"),
    n = await mA(rc());
  return yQ(saf([...n, ...t]));
}
function vcl(e, t) {
  if (t.agentId !== void 0) return !1;
  let n = new RegExp(`(?<!\\S)/${wx(e)}(?=$|\\s)`);
  for (let r = t.messages.length - 1; r >= t.turnStartIndex; r--) {
    let o = t.messages[r];
    if (o.type !== "user" || o.isMeta) continue;
    let s = o.message.content;
    if (typeof s === "string") {
      if (s.includes(`<${zC}>`)) continue;
    } else if (s.some(i => i.type === "tool_result")) continue;
    if (n.test(P$(o) ?? "")) return !0;
  }
  return !1;
}
async function iaf(e, t, n, r, o, s, i) {
  let a = Date.now(),
    l = rM(),
    c = mQ().has(t),
    u = wcl(e),
    d = e.source === "bundled",
    {
      sanitizedName: p,
      skillNameHash: f
    } = Elt({
      rawName: t,
      canonicalName: e.name,
      isMcp: e.loadedFrom === "mcp",
      isBuiltIn: c,
      isBundled: d,
      isOfficial: u
    }),
    m = r.queryTracking?.depth ?? 0,
    g = m > 0 ? "nested-skill" : "claude-proactive",
    h = r.agentId;
  G("tengu_skill_tool_invocation", {
    command_name: p,
    _PROTO_skill_name: t,
    ...f,
    execution_context: We("fork"),
    invocation_trigger: $e(g),
    query_depth: m,
    ...(h && {
      parent_agent_id: Hr(h)
    }),
    ...Hbe(e.source, e.loadedFrom, e.kind, e.createdBy),
    ...L8e(e.source, t),
    attribution_shown: o8t(e.source, t) !== null,
    skill_content_chars: e.contentLength,
    ...!1,
    ...(e.pluginInfo && {
      ...Tbe(e.pluginInfo),
      plugin_name: u ? e.pluginInfo.pluginManifest.name : "third-party",
      plugin_repository: u ? e.pluginInfo.repository : "third-party"
    })
  }), aFt(t, e, g);
  let {
      modifiedGetAppState: y,
      contextLayers: b,
      baseAgent: _,
      promptMessages: S,
      skillContent: A
    } = await K8t(e, n || "", r),
    v = e.getEffort?.(n || "") ?? e.effort,
    C = v !== void 0 ? {
      ..._,
      effort: v
    } : _,
    x = [];
  T(`SkillTool executing forked skill ${t} with agent ${C.agentType}`);
  try {
    for await (let D of o3({
      agentDefinition: C,
      promptMessages: S,
      toolUseContext: {
        ...r,
        getAppState: y,
        permissionLayers: b.length > 0 ? [...(r.permissionLayers ?? []), ...b] : r.permissionLayers
      },
      canUseTool: o,
      isAsync: !1,
      querySource: "agent:custom",
      spawnedBySkill: t$e(e),
      model: e.model,
      availableTools: r.options.tools,
      override: {
        agentId: l
      }
    })) {
      if (D.type === "api_metrics") {
        i?.(D);
        continue;
      }
      if (D.type === "set_in_progress_tool_use_ids" || D.type === "spinner_mode") continue;
      if (x.push(D), (D.type === "assistant" || D.type === "user") && i) {
        let P = mS([D]);
        for (let O of P) if (O.message.content.some(M => M.type === "tool_use" || M.type === "tool_result")) i({
          type: "progress",
          toolUseID: `skill_${s.message.id}`,
          data: {
            message: O,
            type: "skill_progress",
            prompt: A,
            agentId: l,
            agentType: C.agentType,
            description: e.description
          }
        });
      }
    }
    let I = h_t(x, "Skill execution completed");
    x.length = 0;
    let k = Date.now() - a;
    return T(`SkillTool forked skill ${t} completed in ${k}ms`), xe("skill_invoke"), {
      data: {
        success: !0,
        commandName: t,
        status: "forked",
        agentId: l,
        result: I
      }
    };
  } finally {
    MCt(l);
  }
}
function uaf(e) {
  for (let t of Object.keys(e)) {
    if (caf.has(t)) continue;
    let n = e[t];
    if (n === void 0 || n === null) continue;
    if (Array.isArray(n) && n.length === 0) continue;
    if (typeof n === "object" && !Array.isArray(n) && Object.keys(n).length === 0) continue;
    return !1;
  }
  return !0;
}
function wcl(e) {
  if (e.source !== "plugin" || !e.pluginInfo?.repository) return !1;
  return zD(Qo(e.pluginInfo.repository).marketplace);
}
var aaf, laf, b_t, caf;