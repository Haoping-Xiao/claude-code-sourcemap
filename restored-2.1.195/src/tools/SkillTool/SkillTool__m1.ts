// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Tcl
// matched 2.1.88 source: src/tools/SkillTool/SkillTool.ts
// class=modified (alt of src/tools/SkillTool/SkillTool.ts)  jaccard=0.1817  score=0.6092  fileCov=0.2057
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Tcl] deps: react/cjs/react.production.js, components/VirtualMessageList.tsx, components/CompactSummary.tsx, components/CustomSelect/select.tsx, utils/terminal.ts, tools/AgentTool/built-in/generalPurposeAgent.ts, commands/add-dir/validation.ts, hooks/useTerminalSize.ts, @anthropic-ai/sandbox-runtime/dist/sandbox/sandbox-utils.js, utils/messages.ts, services/teamMemorySync/secretScanner.ts
JI = R(se(), 1);
function saf(e) {
  let t = new Map();
  for (let n of e) {
    let r = t.get(n.name);
    if (r === void 0 || (r.disableModelInvocation && !n.disableModelInvocation)) t.set(n.name, n);
  }
  return [...t.values()];
}
async function PIo(e) {
  let t = e.getAppState().mcp.commands.filter((r) => r.type === "prompt" && r.loadedFrom === "mcp"),
    n = await mA(rc());
  return yQ(saf([...n, ...t]));
}
function vcl(e, t) {
  if (t.agentId !== void 0) return false;
  let n = new RegExp(`(?<!\\S)/${wx(e)}(?=$|\\s)`);
  for (let r = t.messages.length - 1; r >= t.turnStartIndex; r--) {
    let o = t.messages[r];
    if (o.type !== "user" || o.isMeta) continue;
    let s = o.message.content;
    if (typeof s === "string") {
      if (s.includes(`<${zC}>`)) continue;
    } else if (s.some((i) => i.type === "tool_result")) continue;
    if (n.test(P$(o) ?? "")) return true;
  }
  return false;
}
async function executeForkedSkill(
  command,
  commandName,
  args,
  context,
  canUseTool,
  parentMessage,
  onProgress,
) {
  let a = Date.now(),
    l = rM(),
    c = mQ().has(commandName),
    u = wcl(command),
    d = command.source === "bundled",
    { sanitizedName: p, skillNameHash: f } = Elt({
      rawName: commandName,
      canonicalName: command.name,
      isMcp: command.loadedFrom === "mcp",
      isBuiltIn: c,
      isBundled: d,
      isOfficial: u,
    }),
    m = context.queryTracking?.depth ?? 0,
    g = m > 0 ? "nested-skill" : "claude-proactive",
    h = context.agentId;
  (G("tengu_skill_tool_invocation", {
    command_name: p,
    _PROTO_skill_name: commandName,
    ...f,
    execution_context: We("fork"),
    invocation_trigger: $e(g),
    query_depth: m,
    ...(h && {
      parent_agent_id: Hr(h),
    }),
    ...Hbe(command.source, command.loadedFrom, command.kind, command.createdBy),
    ...L8e(command.source, commandName),
    attribution_shown: o8t(command.source, commandName) !== null,
    skill_content_chars: command.contentLength,
    ...false,
    ...(command.pluginInfo && {
      ...Tbe(command.pluginInfo),
      plugin_name: u ? command.pluginInfo.pluginManifest.name : "third-party",
      plugin_repository: u ? command.pluginInfo.repository : "third-party",
    }),
  }),
    aFt(commandName, command, g));
  let {
      modifiedGetAppState: y,
      contextLayers: b,
      baseAgent: _,
      promptMessages: S,
      skillContent: A,
    } = await K8t(command, args || "", context),
    v = command.getEffort?.(args || "") ?? command.effort,
    C =
      v !== void 0
        ? {
            ..._,
            effort: v,
          }
        : _,
    x = [];
  T(`SkillTool executing forked skill ${commandName} with agent ${C.agentType}`);
  try {
    for await (let D of o3({
      agentDefinition: C,
      promptMessages: S,
      toolUseContext: {
        ...context,
        getAppState: y,
        permissionLayers:
          b.length > 0 ? [...(context.permissionLayers ?? []), ...b] : context.permissionLayers,
      },
      canUseTool: canUseTool,
      isAsync: false,
      querySource: "agent:custom",
      spawnedBySkill: t$e(command),
      model: command.model,
      availableTools: context.options.tools,
      override: {
        agentId: l,
      },
    })) {
      if (D.type === "api_metrics") {
        onProgress?.(D);
        continue;
      }
      if (D.type === "set_in_progress_tool_use_ids" || D.type === "spinner_mode") continue;
      if ((x.push(D), (D.type === "assistant" || D.type === "user") && onProgress)) {
        let P = mS([D]);
        for (let O of P)
          if (O.message.content.some((M) => M.type === "tool_use" || M.type === "tool_result"))
            onProgress({
              type: "progress",
              toolUseID: `skill_${parentMessage.message.id}`,
              data: {
                message: O,
                type: "skill_progress",
                prompt: A,
                agentId: l,
                agentType: C.agentType,
                description: command.description,
              },
            });
      }
    }
    let I = h_t(x, "Skill execution completed");
    x.length = 0;
    let k = Date.now() - a;
    return (
      T(`SkillTool forked skill ${commandName} completed in ${k}ms`),
      xe("skill_invoke"),
      {
        data: {
          success: true,
          commandName: commandName,
          status: "forked",
          agentId: l,
          result: I,
        },
      }
    );
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
    return false;
  }
  return true;
}
function wcl(e) {
  if (e.source !== "plugin" || !e.pluginInfo?.repository) return false;
  return zD(Qo(e.pluginInfo.repository).marketplace);
}
var aaf, laf, b_t, caf;
