// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module e$e
// matched 2.1.88 source: src/tools/AgentTool/runAgent.ts
// class=modified  jaccard=0.2554  score=0.367  fileCov=0.4563
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module e$e] deps: services/analytics/index.ts, utils/sessionStorage.ts, services/analytics/index.ts, commands/commit-push-pr.ts, env-paths/index.js, coordinator/coordinatorMode.ts, dn, utils/debug.ts, services/analytics/firstPartyEventLoggingExporter.ts, services/compact/autoCompact.ts, services/mcp/client.ts, ink/Ansi.tsx, @anthropic-ai/sandbox-runtime/dist/sandbox/sandbox-utils.js, tools/SkillTool/UI.tsx, utils/generators.ts, services/PromptSuggestion/speculation.ts, Il, utils/debug.ts, utils/tempfile.ts, utils/errors.ts, cli/print.ts, utils/fsOperations.ts, main.tsx, utils/generators.ts, uuid/dist/rng.js, tools/ToolSearchTool/ToolSearchTool.ts, utils/sequential.ts, utils/messages.ts, utils/markdownConfigLoader.ts, utils/permissions/permissionSetup.ts, CIo, utils/plugins/pluginIdentifier.ts, utils/hooks/hooksConfigSnapshot.ts, q8t, utils/telemetryAttributes.ts, @growthbook/growthbook/dist/esm/mongrule.mjs, utils/telemetry/pluginTelemetry.ts, utils/plugins/addDirPluginSettings.ts, utils/model/check1mAccess.ts, utils/sessionUrl.ts, services/mcp/auth.ts, utils/processUserInput/processSlashCommand.tsx
((g_t = require("crypto")), (Gif = new Set(["clear", "resume", "help", "exit", "feedback"])));
async function initializeAgentMcpServers(agentDefinition, parentClients, n) {
  if (!agentDefinition.mcpServers?.length)
    return {
      clients: parentClients,
      agentClients: [],
      tools: [],
      cleanup: async () => {},
    };
  await wft();
  let r = L_e(agentDefinition.source),
    o = null;
  if (VE("mcp") && !r) o = "strictPluginOnlyCustomization";
  else if (zve() && agentDefinition.source !== "flagSettings") o = "--strict-mcp-config";
  else if (lc("mcpAgentFrontmatter")) o = Tl() ? "--safe-mode" : "--bare";
  else if (da()) o = "remote mode";
  else if (Z1()) o = "enterprise MCP config";
  if (o)
    return (
      T(
        `[Agent: ${agentDefinition.agentType}] Skipping frontmatter MCP servers: blocked by ${o} (agent source: ${agentDefinition.source})`,
        {
          level: "warn",
        },
      ),
      n?.(
        agentDefinition.mcpServers.flatMap((p) => (typeof p === "string" ? p : Object.keys(p))),
        o,
      ),
      {
        clients: parentClients,
        agentClients: [],
        tools: [],
        cleanup: async () => {},
      }
    );
  let s = [],
    i = [],
    a = await Promise.all(
      agentDefinition.mcpServers.map(async (p) => {
        let f = null,
          m,
          g = false;
        if (typeof p === "string") {
          if (((m = p), zve()))
            return (
              T(
                `[Agent: ${agentDefinition.agentType}] MCP server '${p}' skipped: string specs resolve from disk config, which --strict-mcp-config ignores`,
                {
                  level: "warn",
                },
              ),
              i.push(p),
              null
            );
          if (((f = P4(p)), !f))
            return (
              T(`[Agent: ${agentDefinition.agentType}] MCP server not found: ${p}`, {
                level: "warn",
              }),
              null
            );
        } else {
          let _ = Object.entries(p);
          if (_.length !== 1)
            return (
              T(
                `[Agent: ${agentDefinition.agentType}] Invalid MCP server spec: expected exactly one key`,
                {
                  level: "warn",
                },
              ),
              null
            );
          let [S, A] = _[0];
          if (mlt(S))
            return (
              T(
                `[Agent: ${agentDefinition.agentType}] Skipping reserved MCP server name '${S}' in frontmatter`,
                {
                  level: "warn",
                },
              ),
              null
            );
          if (A.type === "sse-ide" || A.type === "ws-ide")
            return (
              T(
                `[Agent: ${agentDefinition.agentType}] Skipping internal-only MCP transport '${A.type}' for '${S}' in frontmatter`,
                {
                  level: "warn",
                },
              ),
              null
            );
          ((m = S),
            (f = {
              ...A,
              scope: "dynamic",
            }),
            (g = true));
        }
        let { blocked: h } = l5({
          [m]: f,
        });
        if (h.length > 0)
          return (
            T(
              `[Agent: ${agentDefinition.agentType}] MCP server '${m}' blocked by managed settings MCP policy`,
              {
                level: "warn",
              },
            ),
            s.push(m),
            null
          );
        let y = await aP(m, f),
          b = [];
        if (y.type === "connected")
          ((b = await lP(y)),
            T(
              `[Agent: ${agentDefinition.agentType}] Connected to MCP server '${m}' with ${b.length} tools`,
            ));
        else
          T(
            `[Agent: ${agentDefinition.agentType}] Failed to connect to MCP server '${m}': ${y.type}`,
            {
              level: "warn",
            },
          );
        return {
          client: y,
          tools: b,
          isNewlyCreated: g,
        };
      }),
    );
  if (i.length > 0) n?.(i, "--strict-mcp-config");
  if (s.length > 0) n?.(s, "managed settings MCP policy");
  let l = [],
    c = [],
    u = [];
  for (let p of a) {
    if (!p) continue;
    if ((l.push(p.client), p.isNewlyCreated)) c.push(p.client);
    u.push(...p.tools);
  }
  let d = async () => {
    for (let p of c)
      if (p.type === "connected")
        try {
          await p.cleanup();
        } catch (f) {
          T(
            `[Agent: ${agentDefinition.agentType}] Error cleaning up MCP server '${p.name}': ${f}`,
            {
              level: "warn",
            },
          );
        }
  };
  return {
    clients: [...parentClients, ...l],
    agentClients: l,
    tools: u,
    cleanup: d,
  };
}
function isRecordableMessage(msg) {
  return (
    msg.type === "assistant" ||
    msg.type === "user" ||
    msg.type === "progress" ||
    (msg.type === "system" && "subtype" in msg && msg.subtype === "compact_boundary")
  );
}
function Jif(e) {
  T(`Failed to record fork-context-ref: ${e}`);
}
function mcl(e) {
  T(`Failed to record sidechain transcript: ${e}`);
}
function Qif(e) {
  T(`Failed to write agent metadata: ${e}`);
}
async function* runAgent({
  agentDefinition: agentDefinition,
  promptMessages: t,
  toolUseContext: toolUseContext,
  canUseTool: r,
  isAsync: o,
  canShowPermissionPrompts: s,
  forkContextMessages: i,
  querySource: a,
  spawnedBySkill: l,
  override: override,
  model: u,
  maxTurns: d,
  preserveToolUseResults: p,
  availableTools: f,
  allowedTools: m,
  onCacheSafeParams: g,
  contentReplacementState: h,
  stickyBetas: y,
  useExactTools: b,
  worktreePath: _,
  worktreeBranch: S,
  cwd: A,
  spawnMode: v,
  description: C,
  name: x,
  toolUseId: I,
  transcriptSubdir: k,
  spawnedByWorkflowRunId: D,
  onQueryProgress: P,
  onMcpServersBlocked: O,
  onModelRestricted: L,
  isTeammate: M = false,
  teammateContext: N,
  recordedUuids: B,
  extraMetadata: $,
  requiresStructuredOutput: q,
}) {
  let W = Fr(toolUseContext),
    V = W.mode,
    Y = M ? toolUseContext.rootToolSurface.mainLoopModel : nq(toolUseContext),
    z = foe(TAe(agentDefinition, Y), Y, u, V, L),
    K = override?.agentId ? override.agentId : rM();
  if (k) wca(K, k);
  if (zSe()) {
    let ze = toolUseContext.agentId ?? Rt();
    bFn(K, agentDefinition.agentType, ze);
  }
  let Z,
    initialMessages = i ? filterIncompleteToolCalls(i) : [],
    ne = [...initialMessages, ...t],
    oe = i !== void 0 ? IKn(initialMessages) : void 0,
    re = i !== void 0 ? aSe(toolUseContext.readFileState) : QU(V1),
    [ee, ce] = await Promise.all([
      override?.userContext ?? uS(),
      override?.systemContext ?? hH(toolUseContext.options.cacheBreakerPhrase),
    ]),
    ae =
      agentDefinition.omitClaudeMd &&
      !override?.userContext &&
      at("tengu_slim_subagent_claudemd", true),
    { claudeMd: de, ...Ee } = ee,
    me = ae ? Ee : ee,
    { gitStatus: pe, ...ge } = ce,
    he = agentDefinition.agentType === "Explore" || agentDefinition.agentType === "Plan" ? ge : ce,
    ie = Gfn(v, V),
    le = ie ?? agentDefinition.permissionMode,
    He,
    ye;
  function ue(ze) {
    if (ze === He && ye) return ye;
    He = ze;
    let Mt = ze;
    if (
      le &&
      (ie || (ze.mode !== "bypassPermissions" && ze.mode !== "acceptEdits" && ze.mode !== "auto"))
    )
      Mt = {
        ...Mt,
        mode: le,
      };
    let Qt = toolUseContext.requestDialog !== void 0,
      Er = s !== void 0 ? !s : le === "bubble" || Qt ? false : o;
    if (Er)
      Mt = {
        ...Mt,
        shouldAvoidPermissionPrompts: true,
      };
    if (o && !Er)
      Mt = {
        ...Mt,
        awaitAutomatedChecksBeforeDialog: true,
      };
    if (m !== void 0)
      Mt = {
        ...Mt,
        alwaysAllowRules: {
          cliArg: ze.alwaysAllowRules.cliArg,
          ...(ze.alwaysAllowRules.mcpServerPolicy && {
            mcpServerPolicy: ze.alwaysAllowRules.mcpServerPolicy,
          }),
          session: [...m],
        },
      };
    if (_ && !Mt.additionalWorkingDirectories.has(_))
      Mt = {
        ...Mt,
        additionalWorkingDirectories: new Map([
          ...Mt.additionalWorkingDirectories,
          [
            _,
            {
              path: _,
              source: "session",
            },
          ],
        ]),
      };
    return ((ye = Mt), Mt);
  }
  let we = () => {
      let ze = toolUseContext.getAppState(),
        Mt = ue(ze.toolPermissionContext);
      if (Mt === ze.toolPermissionContext) return ze;
      return {
        ...ze,
        toolPermissionContext: Mt,
      };
    },
    Ce = [
      {
        kind: "model",
        mainLoopModel: z,
      },
      ...(agentDefinition.effort !== void 0
        ? [
            {
              kind: "effort",
              effort: agentDefinition.effort,
            },
          ]
        : []),
    ],
    Ie = b
      ? f
      : voe(
          agentDefinition,
          f,
          o,
          false,
          M,
          qG(override?.agentContext ?? toolUseContext.agentContext),
        ).resolvedTools,
    Ve = !b && Hol(M) ? Ie.filter((ze) => !Aol.has(ze.name)) : Ie,
    Ze = Array.from(W.additionalWorkingDirectories.keys()),
    Be = override?.systemPrompt
      ? override.systemPrompt
      : Sc(await Zif(agentDefinition, toolUseContext, z, Ze)),
    Me = taf(Be, b ?? false),
    Ue =
      !b &&
      ut(process.env.CLAUDE_CODE_ENABLE_APPEND_SUBAGENT_PROMPT) &&
      toolUseContext.options.appendSubagentSystemPrompt
        ? Sc([...Me, toolUseContext.options.appendSubagentSystemPrompt])
        : Me,
    tt = override?.abortController
      ? override.abortController
      : o
        ? new AbortController()
        : toolUseContext.abortController,
    bt = [];
  for await (let ze of J8t(
    K,
    agentDefinition.agentType,
    tt.signal,
    void 0,
    toolUseContext.getAppState,
  ))
    if (ze.additionalContexts && ze.additionalContexts.length > 0)
      bt.push(...ze.additionalContexts);
  if (bt.length > 0) {
    let ze = ai({
      type: "hook_additional_context",
      content: bt,
      hookName: "SubagentStart",
      toolUseID: kIo.randomUUID(),
      hookEvent: "SubagentStart",
    });
    ne.push(ze);
  }
  let Ke = !VE("hooks") || L_e(agentDefinition.source);
  if (agentDefinition.hooks && Ke)
    $rl(
      toolUseContext.sessionHooksRegistry,
      K,
      agentDefinition.hooks,
      `agent '${agentDefinition.agentType}'`,
      true,
    );
  let Et = agentDefinition.skills ?? [];
  if (Et.length > 0) {
    let ze = await aC(rc()),
      Mt = [];
    for (let pt of Et) {
      let ln = naf(pt, ze, agentDefinition);
      if (!ln) {
        T(
          `[Agent: ${agentDefinition.agentType}] Warning: Skill '${pt}' specified in frontmatter was not found`,
          {
            level: "warn",
          },
        );
        continue;
      }
      let pn = h6e(ln, ze);
      if (pn.type !== "prompt") {
        T(
          `[Agent: ${agentDefinition.agentType}] Warning: Skill '${pt}' is not a prompt-based skill`,
          {
            level: "warn",
          },
        );
        continue;
      }
      Mt.push({
        skillName: pt,
        skill: pn,
      });
    }
    let { formatSkillLoadingMetadata: Qt } = await Promise.resolve().then(() => (e$e(), z8t)),
      Er = await Promise.all(
        Mt.map(async ({ skillName: pt, skill: ln }) => ({
          skillName: pt,
          skill: ln,
          content: await ln.getPromptForCommand("", {
            ...toolUseContext,
            options: {
              ...toolUseContext.options,
              isSkillPreload: true,
            },
          }),
        })),
      );
    for (let { skillName: pt, skill: ln, content: pn } of Er) {
      T(`[Agent: ${agentDefinition.agentType}] Preloaded skill '${pt}'`);
      let ir = Qt(pt, ln.progressMessage);
      ne.push(
        Rn({
          content: [
            {
              type: "text",
              text: ir,
            },
            ...pn,
          ],
          isMeta: true,
        }),
      );
    }
  }
  let {
      clients: ct,
      agentClients: Je,
      tools: gt,
      cleanup: st,
    } = await initializeAgentMcpServers(agentDefinition, toolUseContext.options.mcpClients, O),
    { isToolDisallowed: xt } = Bwo(agentDefinition.disallowedTools),
    vt = gt.filter((ze) => !xt(ze)),
    jt = vt.length > 0 ? oE([...Ve, ...vt], "name") : Ve;
  if (!b)
    for (let ze of $Ae(jt, z, ne, {
      callSite: "attachments_subagent",
      querySource: a,
    }))
      ne.push(ai(ze));
  let en = {
      isNonInteractiveSession: b
        ? toolUseContext.options.isNonInteractiveSession
        : o
          ? true
          : (toolUseContext.options.isNonInteractiveSession ?? false),
      appendSystemPrompt: toolUseContext.options.appendSystemPrompt,
      appendSubagentSystemPrompt: toolUseContext.options.appendSubagentSystemPrompt,
      spawnedBySkill: l,
      tools: jt,
      commands: [],
      debug: toolUseContext.options.debug,
      verbose: toolUseContext.options.verbose,
      mainLoopModel: z,
      fallbackModel: toolUseContext.options.fallbackModel,
      thinkingConfig:
        b || false || k6n(z)
          ? toolUseContext.options.thinkingConfig
          : {
              type: "disabled",
            },
      mcpClients: ct,
      refreshMcpClients: toolUseContext.options.refreshMcpClients
        ? () => {
            let ze = toolUseContext.options.refreshMcpClients();
            return Je.length > 0 ? [...ze, ...Je] : ze;
          }
        : void 0,
      mcpResources: toolUseContext.options.mcpResources,
      agentDefinitions: toolUseContext.options.agentDefinitions,
      messageClientPlatform: toolUseContext.options.messageClientPlatform,
      toolAliases: toolUseContext.options.toolAliases,
      autoCompactWindow: toolUseContext.options.autoCompactWindow,
      fastMode: toolUseContext.options.fastMode,
      cacheBreakerPhrase: toolUseContext.options.cacheBreakerPhrase,
      activeGoal: toolUseContext.options.activeGoal,
      ultraplanSessionUrl: toolUseContext.options.ultraplanSessionUrl,
      ...(b && {
        querySource: a,
      }),
      requiresStructuredOutput: q,
    },
    agentToolUseContext = CKn(toolUseContext, {
      options: en,
      agentId: K,
      agentType: agentDefinition.agentType,
      agentContext: override?.agentContext,
      spawnedByWorkflowRunId: D,
      teammateContext: N,
      messages: ne,
      readFileState: re,
      abortController: tt,
      getAppState: we,
      permissionLayers: Ce,
      shareSetAppState: !o,
      criticalSystemReminder_EXPERIMENTAL: agentDefinition.criticalSystemReminder_EXPERIMENTAL,
      contentReplacementState: h,
    });
  if (override?.replHydration) agentToolUseContext.replHydration = override.replHydration;
  if (override?.onRetryStatus) agentToolUseContext.onRetryStatus = override.onRetryStatus;
  if (_) agentToolUseContext.agentWorktree = _;
  {
    let ze = ne.some((Qt) => Qt.type === "attachment" && Qt.attachment.type === "skill_listing"),
      Mt = await xKn(agentToolUseContext).catch(
        (Qt) => (
          T(
            `[Agent: ${agentDefinition.agentType}] Failed to compute skill listing attachment: ${Qt}`,
            {
              level: "error",
            },
          ),
          []
        ),
      );
    if (!ze) for (let Qt of Mt) ne.push(ai(Qt));
  }
  if (p) agentToolUseContext.preserveToolUseResults = true;
  let nn = null,
    Ln = null,
    Hn = y ?? (b ? RR(toolUseContext.stickyBetas ?? u0()) : Fie());
  if (g) {
    let ze = [...ne];
    ((nn = ze),
      g(
        {
          systemPrompt: Ue,
          userContext: me,
          systemContext: he,
          toolUseContext: agentToolUseContext,
          forkContextMessages: ne,
          stickyBetas: Hn,
        },
        () => ze,
      ));
  }
  let kr = ne,
    Mr = null;
  if (B !== void 0) {
    let ze = ne.findLastIndex((Mt) => B.has(Mt.uuid));
    ((kr = ne.slice(ze + 1)), (Mr = ze >= 0 ? ne[ze].uuid : null));
  } else if (i !== void 0 && i === toolUseContext.messages && toolUseContext.agentId === void 0) {
    let ze = initialMessages.at(-1)?.uuid;
    if (ze !== void 0)
      ((kr = ne.slice(initialMessages.length)),
        LIo({
          agentId: K,
          parentSessionId: Rt(),
          parentLastUuid: ze,
          contextLength: initialMessages.length,
        }).catch(Jif));
  }
  (Kpe(kr, K, Mr).catch(mcl),
    Ype(K, {
      agentType: agentDefinition.agentType,
      ...(agentDefinition.agentType === PX && {
        isFork: Sh(agentDefinition),
      }),
      ...(_ && {
        worktreePath: _,
      }),
      ...(_ &&
        S && {
          worktreeBranch: S,
        }),
      ...(A && {
        cwd: A,
      }),
      ...(ie && {
        spawnMode: ie,
      }),
      ...(C && {
        description: C,
      }),
      ...(x && {
        name: x,
      }),
      ...(I && {
        toolUseId: I,
      }),
      ...(override?.agentContext !== void 0 && {
        spawnDepth: qG(override.agentContext),
      }),
      ...$,
    }).catch(Qif));
  let fe = kr.at(-1)?.uuid ?? Mr;
  if (B) for (let ze of kr) B.add(ze.uuid);
  let Te = false,
    Re,
    Ne = [],
    it = {
      onSetStreamMode: (ze) =>
        Ne.push({
          type: "spinner_mode",
          mode: ze,
        }),
      onApiMetrics: (ze) => {
        if (ze.type !== "start" && ze.type !== "end") return;
        if (ze.type === "start")
          ((Re = kIo.randomUUID()),
            Ne.push({
              type: "api_metrics",
              event: {
                type: "start",
                ttftMs: ze.ttftMs,
                id: Re,
              },
            }));
        else if (Re != null)
          (Ne.push({
            type: "api_metrics",
            event: {
              type: "end",
              outputTokens: ze.outputTokens,
              id: Re,
            },
          }),
            (Re = void 0));
      },
    },
    Tt = {
      isSubagent: true,
    },
    un;
  try {
    Z = cka({
      agentId: K,
      agentType: agentDefinition.agentType,
      parentAgentId: toolUseContext.agentId,
    });
    for await (let ze of CN({
      messages: ne,
      systemPrompt: Ue,
      userContext: me,
      systemContext: he,
      canUseTool: r,
      toolUseContext: agentToolUseContext,
      querySource: a,
      spawnedBySkill: l,
      maxTurns: d ?? agentDefinition.maxTurns,
      forkPointUuid: oe,
      stickyBetas: Hn,
    })) {
      if ((P?.(), N8e(ze))) {
        (DIo(ze, it, Tt), yield* Ne, (Ne.length = 0));
        continue;
      }
      if (
        (ze.type === "attachment" &&
          "hookEvent" in ze.attachment &&
          ze.attachment.hookEvent === "SubagentStop") ||
        (ze.type === "progress" &&
          ze.data?.type === "hook_progress" &&
          ze.data.hookEvent === "SubagentStop")
      )
        Te = true;
      if (ze.type === "system" && ze.subtype === "api_error") {
        yield ze;
        continue;
      }
      if (ze.type === "set_in_progress_tool_use_ids") {
        if (ze.op.action === "remove") yield ze;
        continue;
      }
      if (ze.type === "attachment") {
        if (nn) (nn.push(ze), (Ln = Bpe(nn, ze, Ln)));
        if (ze.attachment.type === "max_turns_reached") {
          T(
            `[Agent: ${agentDefinition.agentType}] Reached max turns limit (${ze.attachment.maxTurns})`,
          );
          break;
        }
        yield ze;
        continue;
      }
      if (isRecordableMessage(ze)) {
        if (ze.type !== "progress") {
          if (nn) (nn.push(ze), (Ln = Bpe(nn, ze, Ln)));
        }
        if ((await Kpe([ze], K, fe).catch(mcl), ze.type !== "progress"))
          ((fe = ze.uuid), B?.add(ze.uuid));
        if (o && I && (ze.type === "assistant" || ze.type === "user")) {
          let Mt = Srl();
          if (Mt)
            for (let Qt of mS([ze])) {
              let Er = RKn({
                toolUseID: `agent_${K}`,
                parentToolUseID: I,
                data: {
                  message: Qt,
                  type: "agent_progress",
                  prompt: "",
                  agentId: K,
                  agentType: agentDefinition.agentType,
                  resolvedModel: z,
                  ...(C && {
                    description: C,
                  }),
                },
              });
              for (let pt of __t(Er, jt))
                Mt.write(pt).catch((ln) =>
                  T(`bg-subagent progress write failed: ${ln}`, {
                    level: "warn",
                  }),
                );
            }
        }
        yield ze;
      }
    }
    if (((Te = true), tt.signal.aborted)) throw new ru();
    if (Sh(agentDefinition) && agentDefinition.callback) agentDefinition.callback();
  } catch (ze) {
    throw ((un = ze), ze);
  } finally {
    if (nn && Ln) (nn.push(...Ln.preserved), (Ln = null));
    let ze =
        o &&
        Te &&
        !tt.signal.aborted &&
        (hcl(K, toolUseContext.taskRegistry) || vrl(K, toolUseContext.taskRegistry)),
      Mt = [
        {
          name: "SubagentStop",
          run: async () => {
            if (Te) return;
            try {
              for await (let Qt of OAe(
                void 0,
                void 0,
                5000,
                false,
                K,
                agentToolUseContext,
                void 0,
                agentDefinition.agentType,
              ));
            } catch (Qt) {
              T(`[runAgent] SubagentStop on interrupted query failed: ${Qt}`);
            }
          },
        },
        {
          name: "mcp",
          run: () => st(),
        },
        {
          name: "sessionHooks",
          run: () => {
            if (agentDefinition.hooks) toolUseContext.sessionHooksRegistry.clear(K);
          },
        },
        {
          name: "promptCacheTracking",
          run: () => {
            if (WX()) lca(K);
          },
        },
        {
          name: "propagateNestedMemory",
          run: () => {
            if (Gv() && J2.CLAUDE_CODE_COORDINATOR_PROPAGATE_NESTED_MEMORY) {
              let Qt = toolUseContext.pendingNestedMemoryTriggers;
              if (!Qt)
                T(
                  "propagateNestedMemory: parent context has no pendingNestedMemoryTriggers; skipping",
                );
              else {
                let Er = `${cq.sep}.claude${cq.sep}worktrees${cq.sep}`;
                for (let pt of Object.keys(agentToolUseContext.loadedNestedMemoryPaths ?? {})) {
                  if (!["CLAUDE.md", "CLAUDE.local.md"].includes(cq.basename(pt))) continue;
                  let ln = pt,
                    pn = pt.indexOf(Er);
                  if (pn >= 0) {
                    let ir = pt.slice(0, pn),
                      Rr = pt.slice(pn + Er.length),
                      _o = Rr.indexOf(cq.sep);
                    if (_o < 0) continue;
                    let Xo = Rr.slice(_o + 1);
                    ln = cq.join(ir, Xo);
                    let Pn = cq.resolve(ir);
                    if (!cq.resolve(ln).startsWith(Pn + cq.sep)) continue;
                  } else if (_ && pt.startsWith(_ + cq.sep)) continue;
                  if (toolUseContext.loadedNestedMemoryPaths?.[ln]) continue;
                  if (!Qt.includes(ln)) Qt.push(ln);
                }
              }
            }
          },
        },
        {
          name: "readFileState",
          run: () => agentToolUseContext.readFileState.clear(),
        },
        {
          name: "sentSkillNames",
          run: () => RIo(K),
        },
        {
          name: "initialMessages",
          run: () => {
            ne.length = 0;
          },
        },
        {
          name: "liveMessages",
          run: () => {
            if (nn) nn.length = 0;
          },
        },
        {
          name: "replHydrationSnapshot",
          run: () => {
            agentToolUseContext.replHydration = void 0;
          },
        },
        {
          name: "perfetto",
          run: () => _qe(K),
        },
        {
          name: "otelSubagentSpan",
          run: () => {
            let Qt = tt.signal.aborted;
            uka(Z, {
              success: un === void 0 && !Qt,
              ...(un !== void 0 &&
                !Qt && {
                  error: un instanceof Error ? un.message : String(un),
                }),
            });
          },
        },
        {
          name: "transcriptSubdir",
          run: () => Cca(K),
        },
        {
          name: "todos",
          run: () => toolUseContext.agentLifecycle.clearTodos(K),
        },
        {
          name: "replContext",
          run: () => {
            let Qt = toolUseContext.getReplContexts()[K];
            if (Qt) (Qt.clearAllTimers(), toolUseContext.setReplContext(K, void 0));
          },
        },
        {
          name: "nonShellMonitors",
          keepaliveGated: true,
          run: () => {
            Drl(K, toolUseContext.taskRegistry);
          },
        },
        {
          name: "shellTasks",
          keepaliveGated: true,
          run: () => wrl(K, toolUseContext.taskRegistry),
        },
      ];
    for (let Qt of Mt) {
      if (ze && Qt.keepaliveGated) continue;
      try {
        await Qt.run();
      } catch (Er) {
        T(
          `[runAgent cleanup] stage '${Qt.name}' failed: ${Er instanceof Error ? Er.message : String(Er)}`,
        );
      }
    }
  }
}
function filterIncompleteToolCalls(messages) {
  let toolUseIdsWithResults = new Set();
  for (let n of messages)
    if (n?.type === "user") {
      let o = n.message.content;
      if (Array.isArray(o)) {
        for (let s of o)
          if (s.type === "tool_result" && s.tool_use_id) toolUseIdsWithResults.add(s.tool_use_id);
      }
    }
  return messages.filter((n) => {
    if (n?.type === "assistant") {
      let o = n.message.content;
      if (Array.isArray(o))
        return !o.some((i) => i.type === "tool_use" && i.id && !toolUseIdsWithResults.has(i.id));
    }
    return true;
  });
}
async function Zif(e, t, n, r) {
  try {
    let o = e.getSystemPrompt({
      toolUseContext: t,
    });
    return await X8t([o], n, r);
  } catch (o) {
    return X8t([ycl], n, r);
  }
}
function taf(e, t) {
  if (t) return e;
  let n = kKn();
  if (n === null || e.some((r) => r.includes(eaf))) return e;
  return Sc([...e, n]);
}
function naf(e, t, n) {
  if (y_t(e, t)) return e;
  let r = bi(n.agentType, ":");
  if (r) {
    let i = `${r}:${e}`;
    if (y_t(i, t)) return i;
  }
  let o = `:${e}`,
    s = t.find((i) => i.name.endsWith(o));
  if (s) return s.name;
  return null;
}
async function gcl({ agentId: e, removedWorktreePath: t, spawnMetadata: n }) {
  let r = await Moe(e).catch(() => null),
    o = r?.cwd && r.cwd !== t ? r.cwd : void 0;
  await Ype(e, {
    ...n,
    ...(o && {
      cwd: o,
    }),
    ...(r?.stoppedByUser && {
      stoppedByUser: true,
    }),
  });
}
var kIo,
  cq,
  eaf = "# Scratchpad Directory";
