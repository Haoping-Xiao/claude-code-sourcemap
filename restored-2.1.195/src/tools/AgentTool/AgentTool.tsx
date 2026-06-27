// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module AIo
// matched 2.1.88 source: src/tools/AgentTool/AgentTool.tsx
// class=modified  jaccard=0.3356  score=0.5279  fileCov=0.4795
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var AIo = E(() => {
  ii();
  uft();
  Xr();
  ft();
  X6();
  ZWe();
  F8();
  l$();
  dn();
  Un();
  kt();
  S_();
  JJ();
  LL();
  $S();
  fp();
  og();
  xht();
  sA();
  c9t();
  Lo();
  je();
  wr();
  fn();
  At();
  co();
  kpe();
  DE();
  Gy();
  $g();
  tA();
  sr();
  I8();
  hN();
  l8e();
  bH();
  Mp();
  II();
  gP();
  u$();
  HO();
  aR();
  szt();
  lf();
  jv();
  Nhl();
  IL();
  tQ();
  vAe();
  N8t();
  fh();
  qRe();
  ty();
  N0o();
  O0o();
  SAe();
  F8t();
  Il();
  qhl = R(se(), 1);
  j6e = class j6e extends Error {
    constructor(e) {
      super(e);
      this.name = "AgentTypeError";
    }
  };
  B0o = class B0o extends Error {
    constructor(e) {
      super(e);
      this.name = "RemoteAgentPreconditionError";
    }
  };
  H$e = class H$e extends Error {
    constructor(e) {
      super(e);
      this.name = "AgentPreconditionError";
    }
  };
  ozt = Oe.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS;
  ((Nff = ve(() =>
    H.object({
      description: H.string().describe("A short (3-5 word) description of the task"),
      prompt: H.string().describe("The task for the agent to perform"),
      subagent_type: H.string()
        .optional()
        .describe("The type of specialized agent to use for this task"),
      model: H.enum(["sonnet", "opus", "haiku", "fable"])
        .optional()
        .describe(
          `Optional model override for this agent. Takes precedence over the agent definition's model frontmatter. If omitted, uses the agent definition's model, or inherits from the parent. Ignored for subagent_type: "fork" \u2014 forks always inherit the parent model.`,
        ),
      run_in_background: H.boolean()
        .optional()
        .describe(
          "Set to true to run this agent in the background. You will be notified when it completes.",
        ),
    }),
  )),
    (Bff = ve(() => {
      let e = H.object({
        name: H.string()
          .regex(TXa, {
            message:
              "name must start with a letter or digit and contain only letters, digits, underscores, or hyphens (max 64 chars)",
          })
          .refine((t) => t !== Q5, {
            message: `"${Q5}" is reserved \u2014 SendMessage routes it to the main conversation`,
          })
          .optional()
          .describe(
            "Name for the spawned agent. Makes it addressable via SendMessage({to: name}) while running.",
          ),
        team_name: H.string()
          .optional()
          .describe("Deprecated; ignored. The session has a single implicit team."),
        mode: ews()
          .optional()
          .describe(
            'Permission mode for spawned teammate (e.g., "plan" to require plan approval).',
          ),
      });
      return Nff()
        .merge(e)
        .extend({
          isolation: H.enum(["worktree", "remote"])
            .optional()
            .describe(
              'Isolation mode. "worktree" creates a temporary git worktree so the agent works on an isolated copy of the repo. "remote" launches the agent in a remote cloud environment (always runs in background; availability is gated).',
            ),
          cwd: H.string()
            .optional()
            .describe(
              'Absolute path to run the agent in. Overrides the working directory for all filesystem and shell operations within this agent. Mutually exclusive with isolation: "worktree".',
            ),
        });
    })),
    (EIo = ve(() => {
      let e = Bff().omit({
        cwd: !0,
      });
      return ozt || DX()
        ? e.omit({
            run_in_background: !0,
          })
        : e;
    })),
    (Uff = ve(() => {
      let e = Tol().extend({
          status: H.literal("completed"),
          prompt: H.string(),
        }),
        t = H.object({
          status: H.literal("async_launched"),
          agentId: H.string().describe("The ID of the async agent"),
          description: H.string().describe("The description of the task"),
          resolvedModel: H.string()
            .optional()
            .describe("Model the spawn resolved (may differ from the requested one)"),
          prompt: H.string().describe("The prompt for the agent"),
          outputFile: H.string().describe("Path to the output file for checking agent progress"),
          canReadOutputFile: H.boolean()
            .optional()
            .describe("Whether the calling agent has Read/Bash tools to check progress"),
        }),
        n = H.object({
          status: H.literal("remote_launched"),
          taskId: H.string().describe("The ID of the remote agent task"),
          sessionUrl: H.string().describe("The URL of the cloud session"),
          description: H.string().describe("The description of the task"),
          prompt: H.string().describe("The prompt for the agent"),
          outputFile: H.string().describe("Path to the output file for checking agent progress"),
        });
      return H.union([e, t, n]);
    })),
    (P7n = ti({
      async prompt({ agents: e, getToolPermissionContext: t, allowedAgentTypes: n, model: r }) {
        let o = await t(),
          s = Gv(),
          { available: i } = Whl(e, n, {
            toolPermissionContext: o,
          });
        return await Ghl(r, s, i);
      },
      name: ss,
      searchHint: "delegate work to a subagent",
      aliases: [r8],
      maxResultSizeChars: 1e5,
      async description() {
        return "Launch a new agent";
      },
      get inputSchema() {
        return EIo();
      },
      get outputSchema() {
        return Uff();
      },
      async call(
        {
          prompt: e,
          subagent_type: t,
          description: n,
          model: r,
          run_in_background: o,
          name: s,
          mode: i,
          isolation: a,
          cwd: l,
        },
        c,
        u,
        d,
        p,
      ) {
        let f = Date.now(),
          m = j8() ? void 0 : r,
          g = qG(c.agentContext);
        if (g >= tjt)
          throw (
            Le("subagent_launch", "subagent_depth_cap"),
            new H$e(
              `Subagent nesting limit reached (depth ${g} of ${tjt}). Complete this task directly using your tools instead of spawning another agent.`,
            )
          );
        n = n.replace(/\s+/g, " ").trim();
        let h = c.getAppState(),
          y = Fr(c),
          b = y.mode,
          _ = Gfn(i, b),
          { taskRegistry: S } = c,
          A = el() ? h.teamContext : void 0,
          v = !!c.teammateContext;
        if ((v || !!ije()) && s)
          throw (
            Le("subagent_launch", "subagent_nested_teammate"),
            new H$e(
              "Teammates cannot spawn other teammates \u2014 the team roster is flat. To spawn a subagent instead, omit the `name` parameter.",
            )
          );
        if (v && o === !0)
          throw (
            Le("subagent_launch", "subagent_teammate_background_denied"),
            new H$e(
              "In-process teammates cannot spawn background agents. Use run_in_background=false for synchronous subagents.",
            )
          );
        let { activeAgents: x, allowedAgentTypes: I } = c.options.agentDefinitions,
          k = t !== void 0 && cbt(t) === PX,
          { available: D, denyRule: P } = Whl(x, I, {
            toolPermissionContext: y,
          });
        if (k && P)
          throw (
            Le("subagent_launch", "subagent_type_denied"),
            new j6e(
              `Agent type '${PX}' has been denied by permission rule '${ss}(${PX})' from ${P.source}.`,
            )
          );
        let O = k && D;
        if (t !== void 0 && !k) {
          let ye = $6e(y, ss, t);
          if (ye)
            throw (
              Le("subagent_launch", "subagent_type_denied"),
              new j6e(
                `Agent type '${t}' has been denied by permission rule '${ss}(${t})' from ${ye.source}.`,
              )
            );
          if (I && !I.includes(t)) {
            Le("subagent_launch", "subagent_type_not_found");
            let ue = _$e(
              x.filter((we) => I.includes(we.agentType)),
              y,
              ss,
            ).map((we) => we.agentType);
            throw new j6e(`Agent type '${t}' not found. Available agents: ${ue.join(", ")}`);
          }
        }
        if (A && s && !O && !a && !l) {
          let ye = t
            ? c.options.agentDefinitions.activeAgents.find((Ce) => Ce.agentType === t)
            : void 0;
          if (ye?.color) QPe(t, ye.color);
          let ue = await Ohl(
              {
                name: s,
                prompt: e,
                description: n,
                use_splitpane: !0,
                plan_mode_required: _ === "plan",
                model: m ?? (ye ? TAe(ye, c.options.mainLoopModel) : void 0),
                agent_type: t,
                invokingRequestId: d?.requestId,
              },
              c,
              p,
            ),
            we = {
              status: "teammate_spawned",
              prompt: e,
              ...ue.data,
            };
          return (
            xe("subagent_launch"),
            {
              data: we,
            }
          );
        }
        let L;
        if (O) {
          if (a === "remote")
            throw (
              Le("subagent_launch", "subagent_fork_remote_isolation"),
              new H$e(
                'Fork cannot use isolation: "remote" \u2014 a remote session cannot inherit the conversation context. Omit isolation (or use "worktree"), or spawn a named agent type for remote work.',
              )
            );
          if (c.options.querySource === `agent:builtin:${h4.agentType}` || cso(c.messages))
            throw (
              Le("subagent_launch", "subagent_recursive_fork"),
              new H$e(
                "Fork is not available inside a forked worker. Complete your task directly using your tools.",
              )
            );
          L = h4;
        } else {
          let ye = t ?? RAe.agentType,
            ue = _$e(I ? x.filter((Ce) => I.includes(Ce.agentType)) : x, y, ss),
            we = ue.find((Ce) => Ce.agentType === ye);
          if (!we) {
            let Ce = cbt(ye),
              Ie = mwe(Ce, 60),
              Ve = ue.map((Me) => Me.agentType),
              Ze = new Set(Ve),
              Be = Ce ? x.filter((Me) => cbt(Me.agentType) === Ce) : [];
            if (Be.length > 1) {
              (G("tengu_subagent_type_miss", {
                requestedNormalized: Ie,
                availableCount: ue.length,
                ambiguousCount: Be.length,
              }),
                Le("subagent_launch", "subagent_type_ambiguous"));
              let Me = Be.map((Ue) => Ue.agentType).filter((Ue) => Ze.has(Ue));
              throw new j6e(
                `Agent type '${ye}' is ambiguous \u2014 matches ${Be.map((Ue) => (Ze.has(Ue.agentType) ? Ue.agentType : `${Ue.agentType} (unavailable)`)).join(", ")}. ${Me.length > 0 ? `Use the exact name: ${Me.join(" or ")}` : `None of these are available. Available agents: ${Ve.join(", ")}`}`,
              );
            }
            if (Be.length === 1) {
              let Me = Be[0];
              if (Ze.has(Me.agentType)) {
                if (((we = Me), we.color)) QPe(ye, we.color);
                G("tengu_subagent_type_normalized", {
                  requestedNormalized: Ie,
                  matched: we.agentType,
                });
              } else {
                let Ue = Me.agentType,
                  tt = $6e(y, ss, Ue);
                if (tt)
                  throw (
                    Le("subagent_launch", "subagent_type_denied"),
                    new j6e(
                      `Agent type '${Ue}' has been denied by permission rule '${ss}(${Ue})' from ${tt.source}.`,
                    )
                  );
              }
            }
            if (!we)
              throw (
                G("tengu_subagent_type_miss", {
                  requestedNormalized: Ie,
                  availableCount: ue.length,
                }),
                Le("subagent_launch", "subagent_type_not_found"),
                new j6e(`Agent type '${ye}' not found. Available agents: ${Ve.join(", ")}`)
              );
          }
          L = we;
        }
        if (v && L.background === !0)
          throw (
            Le("subagent_launch", "subagent_teammate_background_denied"),
            new H$e(
              `In-process teammates cannot spawn background agents. Agent '${L.agentType}' has background: true in its definition.`,
            )
          );
        let M = L.requiredMcpServers,
          N = c.options.tools.filter(gk);
        if (M?.length) {
          let ye = h.mcp.clients.some(
              (Ce) =>
                Ce.type === "pending" &&
                M.some((Ie) => Ce.name.toLowerCase().includes(Ie.toLowerCase())),
            ),
            ue = h;
          if (ye) {
            let Ve = Date.now() + 30000;
            while (Date.now() < Ve) {
              if (
                (await Nn(500),
                (ue = c.getAppState()),
                ue.mcp.clients.some(
                  (Me) =>
                    Me.type === "failed" &&
                    M.some((Ue) => Me.name.toLowerCase().includes(Ue.toLowerCase())),
                ))
              )
                break;
              if (
                !ue.mcp.clients.some(
                  (Me) =>
                    Me.type === "pending" &&
                    M.some((Ue) => Me.name.toLowerCase().includes(Ue.toLowerCase())),
                )
              )
                break;
            }
          }
          let we = [];
          for (let Ce of ue.mcp.tools.concat(N)) {
            let Ie = iDe(Ce);
            if (Ie && !we.includes(Ie)) we.push(Ie);
          }
          if (!M7n(L, we)) {
            let Ce = M.filter(
              (Ie) => !we.some((Ve) => Ve.toLowerCase().includes(Ie.toLowerCase())),
            );
            throw (
              Le("subagent_launch", "subagent_mcp_required_missing"),
              new H$e(
                `Agent '${L.agentType}' requires MCP servers matching: ${Ce.join(", ")}. MCP servers with tools: ${we.length > 0 ? we.join(", ") : "none"}. Use /mcp to configure and authenticate the required MCP servers.`,
              )
            );
          }
        }
        if (L.color) QPe(L.agentType, L.color);
        let B = nq(c),
          $ = foe(TAe(L, B), B, O ? void 0 : m, b);
        c.agentLifecycle.markTypeInvoked(L.agentType);
        let q = L.getSystemPrompt({
            toolUseContext: c,
          }),
          W = sfe(L) ? Qo(L.plugin) : void 0;
        if (sfe(L)) Zj(L.plugin);
        let V = Gv(),
          Y = DX(),
          z = a ?? L.isolation;
        if (z === "remote" && !rzt())
          ((z = Oe.CLAUDE_CODE_REMOTE || !Bhl() ? void 0 : "worktree"),
            T(
              "[remote agent] isolation:'remote' is unavailable " +
                (Oe.CLAUDE_CODE_REMOTE
                  ? "(already inside a CCR session); running as a local agent"
                  : z === "worktree"
                    ? "(no claude.ai login or feature gate off); falling back to isolation:'worktree'"
                    : "(no claude.ai login or feature gate off) and no git root; running as a local agent"),
            ));
        let K = z === "remote",
          Z =
            K ||
            ((o === !0 ||
              L.background === !0 ||
              V ||
              Y ||
              (!v && o !== !1 && at("tengu_amber_heron", !1))) &&
              !ozt),
          J = qG(c.agentContext) + 1;
        if (
          (G("tengu_agent_tool_selected", {
            agent_type: L.agentType,
            model: $,
            source: $e(L.source),
            color: Oo(L.color),
            is_built_in_agent: Sh(L),
            is_resume: !1,
            is_async: Z,
            is_fork: O,
            agent_depth: J,
            agent_system_prompt_chars: q.length,
            ...(W && x8(W.name, W.marketplace)),
          }),
          K)
        ) {
          let ye = await Ipe();
          if (!ye.eligible) {
            let Ze = ye.errors.map(poe).join(`
`);
            throw (
              Le("subagent_launch", "subagent_remote_ineligible"),
              new B0o(`Cannot launch cloud agent:
${Ze}`)
            );
          }
          let ue,
            we = await Y5({
              initialMessage: e,
              source: "remote_agent",
              description: n,
              model: $,
              permissionMode: Fhl(_ ?? L.permissionMode ?? "acceptEdits"),
              branchName: await Uhl(),
              signal: c.abortController.signal,
              onBundleFail: (Ze) => {
                ue = Ze;
              },
              onCreateFail: (Ze) => {
                ue = Ze;
              },
            });
          if (!we)
            throw (
              Le("subagent_launch", "subagent_remote_session_failed"),
              new B0o(ue ?? "Failed to create cloud session")
            );
          let { taskId: Ce, sessionId: Ie } = lAe({
            remoteTaskType: "remote-agent",
            session: {
              id: we.id,
              title: we.title || n,
            },
            command: e,
            context: c,
            toolUseId: c.toolUseId,
          });
          return (
            G("tengu_agent_tool_remote_launched", {
              agent_type: L.agentType,
            }),
            xe("subagent_launch"),
            {
              data: {
                status: "remote_launched",
                taskId: Ce,
                sessionUrl: xpe(Ie),
                description: n,
                prompt: e,
                outputFile: jm(Ce),
              },
            }
          );
        }
        let ne, oe, re;
        if (O) {
          if (c.renderedSystemPrompt) oe = c.renderedSystemPrompt;
          else {
            let ye = h.agent
                ? h.agentDefinitions.activeAgents.find((Ce) => Ce.agentType === h.agent)
                : void 0,
              ue = Array.from(y.additionalWorkingDirectories.keys()),
              we = await DL(c.options.tools, c.options.mainLoopModel, ue);
            oe = Z5({
              mainThreadAgentDefinition: ye,
              toolUseContext: c,
              customSystemPrompt: c.options.customSystemPrompt,
              defaultSystemPrompt: we,
              appendSystemPrompt: c.options.appendSystemPrompt,
            });
          }
          re = uso(e, d);
        } else {
          try {
            let ye = Array.from(y.additionalWorkingDirectories.keys());
            if (L.memory)
              G("tengu_agent_memory_loaded", {
                ...!1,
                scope: $e(L.memory),
                source: We("subagent"),
              });
            ne = await X8t([q], $, ye);
          } catch (ye) {
            T(`Failed to get system prompt for agent ${L.agentType}: ${be(ye)}`);
          }
          re = [
            Rn({
              content: e,
            }),
          ];
        }
        let ee = {
            prompt: e,
            resolvedAgentModel: $,
            isBuiltInAgent: Sh(L),
            startTime: f,
            agentType: L.agentType,
            isAsync: Z,
            agentDepth: J,
            source: L.source,
            pluginId: W,
          },
          ce = {
            ...y,
            mode: _ ?? L.permissionMode ?? "acceptEdits",
          },
          ae = c.getAppState(),
          de = TQ(ce, kht(ae.mcp.tools.concat(N)), {
            skipReplFilter: !0,
            skillTools: ae.skillTools,
          }),
          Ee = rM(),
          me = c.agentId,
          pe = Vhl(me, S) ?? ls(),
          ge = null;
        if (z === "worktree") ge = await M6e(U0o(Ee));
        if (O && ge)
          re.push(
            Rn({
              content: dso($t(), ge.worktreePath),
            }),
          );
        let he = {
            agentDefinition: L,
            promptMessages: re,
            toolUseContext: c,
            canUseTool: u,
            name: s,
            isAsync: Z,
            querySource: c.options.querySource ?? WDe(L.agentType, Sh(L)),
            spawnedBySkill: c.options.spawnedBySkill ?? c.options.activeSkill,
            model: O ? void 0 : m,
            override: O
              ? {
                  systemPrompt: oe,
                  replHydration: {
                    kind: "fork",
                    log: [...(c.getReplContexts()[c.agentId ?? JWe]?.replayLog ?? [])],
                  },
                }
              : ne && !ge && !l
                ? {
                    systemPrompt: Sc(ne),
                  }
                : void 0,
            availableTools: O ? c.options.tools : de,
            forkContextMessages: O ? c.messages : void 0,
            ...(O && {
              useExactTools: !0,
            }),
            worktreePath: ge?.worktreePath,
            worktreeBranch: ge?.worktreeBranch,
            cwd: l,
            spawnMode: _,
            description: n,
            preserveToolUseResults: !Ir(),
            toolUseId: c.toolUseId,
            onMcpServersBlocked: (ye, ue) =>
              p?.({
                type: "notification",
                notification: {
                  key: `agent-mcp-blocked-${Ee}`,
                  text: `${L.agentType} agent MCP ${bn(ye.length, "server")} blocked by ${ue}: ${ye.join(", ")}`,
                  priority: "medium",
                  color: "warning",
                  timeoutMs: 1e4,
                },
              }),
            onModelRestricted: (ye, ue) =>
              p?.({
                type: "notification",
                notification: {
                  key: `agent-model-restricted-${L.agentType}-${Rht(ye)}`,
                  text: `${L.agentType} agent: ${moe(ye, ue)}`,
                  priority: "medium",
                  color: "warning",
                  timeoutMs: 1e4,
                },
              }),
          },
          ie = l ?? ge?.worktreePath,
          le = async () => {
            if (!ge) return {};
            let {
              worktreePath: ye,
              worktreeBranch: ue,
              headCommit: we,
              gitRoot: Ce,
              hookBased: Ie,
            } = ge;
            if (((ge = null), Ie))
              return (
                T(`Hook-based agent worktree kept at: ${ye}`),
                {
                  worktreePath: ye,
                }
              );
            if (we) {
              if (!(await N6t(ye, we)) && (await joe(ye, ue, Ce, !1, "agent_tool")))
                return (
                  gcl({
                    agentId: Bu(Ee),
                    removedWorktreePath: ye,
                    spawnMetadata: {
                      agentType: L.agentType,
                      ...(L.agentType === PX && {
                        isFork: Sh(L),
                      }),
                      ...(l && {
                        cwd: l,
                      }),
                      description: n,
                      ...(s && {
                        name: s,
                      }),
                      ...(_ && {
                        spawnMode: _,
                      }),
                      ...(c.toolUseId && {
                        toolUseId: c.toolUseId,
                      }),
                      spawnDepth: J,
                    },
                  }).catch((Ze) => T(`Failed to clear worktree metadata: ${Ze}`)),
                  {}
                );
            }
            if (Ce) await y$e(ye, Ce);
            return (
              T(`Agent worktree kept at: ${ye}`),
              {
                worktreePath: ye,
                worktreeBranch: ue,
              }
            );
          };
        if (s && s !== Q5) c.agentLifecycle.registerName(s, Bu(Ee));
        let He = s && s !== Q5 ? s : void 0;
        if (Z) {
          let ye = Ee,
            ue = ubt({
              agentId: ye,
              ownerAgentId: pe,
              parentAgentId: me,
              spawnDepth: J,
              description: n,
              prompt: e,
              selectedAgent: L,
              taskRegistry: S,
              toolUseId: c.toolUseId,
              cwd: ie,
            });
          if (!Ir()) VAe(pe, `agent:${ye}`, S);
          let we = {
            agentId: ye,
            parentAgentId: me,
            depth: J,
            parentSessionId: VG(),
            agentType: "subagent",
            subagentName: L.agentType,
            displayName: He,
            isAsync: !0,
            isBuiltIn: Sh(L),
            invokingRequestId: d?.requestId,
            invocationKind: "spawn",
            invocationEmitted: !1,
          };
          x9(we, () =>
            Ehe(ie, () =>
              V8e({
                taskId: ue.agentId,
                abortController: ue.abortController,
                makeStream: (Ie, Ve) =>
                  o3({
                    ...he,
                    override: {
                      ...he.override,
                      agentId: Bu(ue.agentId),
                      agentContext: we,
                      abortController: ue.abortController,
                    },
                    onCacheSafeParams: Ie,
                    onQueryProgress: Ve,
                  }),
                metadata: ee,
                description: n,
                toolUseContext: c,
                taskRegistry: S,
                agentIdForCleanup: ye,
                enableSummarization: V || Y || Jve(),
                getWorktreeResult: le,
              }),
            ),
          );
          let Ce = c.options.tools.some((Ie) => Ql(Ie, Ds) || Ql(Ie, Co));
          return (
            xe("subagent_launch"),
            {
              data: {
                isAsync: !0,
                status: "async_launched",
                agentId: ue.agentId,
                description: n,
                resolvedModel: $,
                prompt: e,
                outputFile: jm(ue.agentId),
                canReadOutputFile: Ce,
              },
            }
          );
        } else {
          let ye = Bu(Ee),
            ue = {
              agentId: ye,
              parentAgentId: me,
              depth: J,
              parentSessionId: VG(),
              agentType: "subagent",
              subagentName: L.agentType,
              displayName: He,
              isAsync: !1,
              isBuiltIn: Sh(L),
              invokingRequestId: d?.requestId,
              invocationKind: "spawn",
              invocationEmitted: !1,
            };
          return x9(ue, () =>
            Ehe(ie, async () => {
              let we = Date.now();
              if (re.length > 0) {
                let xt = mS(re).find((vt) => vt.type === "user");
                if (xt && xt.type === "user" && p)
                  p({
                    type: "progress",
                    toolUseID: `agent_${d.message.id}`,
                    data: {
                      message: xt,
                      type: "agent_progress",
                      prompt: e,
                      agentId: ye,
                      agentType: L.agentType,
                      description: n,
                      resolvedModel: $,
                    },
                  });
              }
              let Ce = zhl({
                  agentId: ye,
                  ownerAgentId: pe,
                  parentAgentId: me,
                  spawnDepth: J,
                  description: n,
                  prompt: e,
                  selectedAgent: L,
                  taskRegistry: S,
                  toolUseId: c.toolUseId,
                  autoBackgroundMs: ozt ? void 0 : Off() || void 0,
                  cwd: ie,
                }),
                Ie = Ce.taskId,
                Ve = Ce.cancelAutoBackground,
                Ze = Ce.abortController,
                Be = iio(c.abortController, Ze),
                Me = !1;
              xe("subagent_launch");
              let Ue = [],
                tt = c.options.forwardSubagentText,
                bt = (st) => {
                  if (Me) return;
                  if (st.type === "spinner_mode") return;
                  if (st.type !== "api_metrics" && st.type !== "set_in_progress_tool_use_ids")
                    Ue.push(st);
                  if (!p) return;
                  if (st.type === "api_metrics") {
                    p(st);
                    return;
                  }
                  if (st.type === "set_in_progress_tool_use_ids") return;
                  if (
                    st.type === "progress" &&
                    (st.data.type === "bash_progress" || st.data.type === "powershell_progress")
                  )
                    p({
                      type: "progress",
                      toolUseID: st.toolUseID,
                      data: st.data,
                    });
                  if (st.type !== "assistant" && st.type !== "user") return;
                  if (st.type === "assistant") {
                    let xt = h1n(st);
                    if (xt > 0)
                      p({
                        type: "response_length",
                        op: "add",
                        delta: xt,
                      });
                  }
                  for (let xt of mS([st])) {
                    let vt = xt.message.content[0];
                    if (!tt && vt.type !== "tool_use" && vt.type !== "tool_result") continue;
                    p({
                      type: "progress",
                      toolUseID: `agent_${d.message.id}`,
                      data: {
                        message: xt,
                        type: "agent_progress",
                        prompt: "",
                        agentId: ye,
                        agentType: L.agentType,
                        description: n,
                        resolvedModel: $,
                      },
                    });
                  }
                },
                Ke = ozt
                  ? void 0
                  : setTimeout(
                      (st) => {
                        if (
                          (st.setToolJSX?.({
                            jsx: qhl.jsx(T$e, {}),
                            shouldHidePromptInput: !1,
                            shouldContinueAnimation: !0,
                            showSpinner: !0,
                          }),
                          st.toolUseId)
                        )
                          st.emitToolProgress?.({
                            kind: "background_hint",
                            toolUseId: st.toolUseId,
                          });
                      },
                      $ff,
                      c,
                    ),
                Et = {},
                ct = async () => ((Et = await le()), Et),
                Je = V8e({
                  taskId: Ie,
                  abortController: Ze,
                  makeStream: (st, xt) =>
                    o3({
                      ...he,
                      override: {
                        ...he.override,
                        agentId: ye,
                        agentContext: ue,
                        abortController: Ze,
                      },
                      onCacheSafeParams: st,
                      onQueryProgress: xt,
                    }),
                  metadata: ee,
                  description: n,
                  toolUseContext: c,
                  taskRegistry: S,
                  agentIdForCleanup: ye,
                  enableSummarization: Jve(),
                  getWorktreeResult: ct,
                  onMessage: bt,
                  shouldNotifyOwner: () => Me,
                }),
                gt;
              try {
                let st;
                try {
                  st = ozt
                    ? await Je.then(() => "done")
                    : await Promise.race([
                        Je.then(() => "done"),
                        Ce.backgroundSignal.then(() => "backgrounded"),
                      ]);
                } catch (nn) {
                  if (((st = "done"), nn instanceof ru)) {
                    if (
                      (G("tengu_agent_tool_terminated", {
                        agent_type: ee.agentType,
                        model: ee.resolvedAgentModel,
                        duration_ms: Date.now() - ee.startTime,
                        is_async: !1,
                        is_built_in_agent: ee.isBuiltInAgent,
                        agent_depth: ee.agentDepth,
                        reason: We("user_cancel_sync"),
                      }),
                      !(Ze.signal.aborted && !c.abortController.signal.aborted))
                    )
                      throw nn;
                    gt = Zr(nn);
                  } else
                    (T(`Sync agent error: ${be(nn)}`, {
                      level: "error",
                    }),
                      Le("subagent_complete", "subagent_sync_errored"),
                      (gt = Zr(nn)));
                }
                let xt = st === "done" && !gt && Cyt(Ie, S);
                if (xt) izt(Ie, S);
                let vt = S.get(Ie)?.status,
                  jt =
                    st === "backgrounded" &&
                    !xt &&
                    vt !== void 0 &&
                    vt !== "running" &&
                    !Cyt(Ie, S);
                if ((st === "backgrounded" && !jt) || xt) {
                  if (((Me = !0), Be(), !Ir())) VAe(pe, `agent:${Ie}`, S);
                  let nn = c.options.tools.some((Ln) => Ql(Ln, Ds) || Ql(Ln, Co));
                  return {
                    data: {
                      isAsync: !0,
                      status: "async_launched",
                      agentId: Ie,
                      description: n,
                      resolvedModel: $,
                      prompt: e,
                      outputFile: jm(Ie),
                      canReadOutputFile: nn,
                    },
                  };
                }
                let en = Ue.findLast((nn) => nn.type !== "system" && nn.type !== "progress");
                if (en && KAe(en))
                  throw (
                    G("tengu_agent_tool_terminated", {
                      agent_type: ee.agentType,
                      model: ee.resolvedAgentModel,
                      duration_ms: Date.now() - ee.startTime,
                      is_async: !1,
                      is_built_in_agent: ee.isBuiltInAgent,
                      agent_depth: ee.agentDepth,
                      reason: We("user_cancel_sync"),
                    }),
                    new ru()
                  );
                if (gt) {
                  if (!Ue.some((nn) => nn.type === "assistant")) throw gt;
                  T(`Sync agent recovering from error with ${Ue.length} messages`);
                }
                let Dn = Uwo(Ue, ye, ee, {
                  suppressTelemetry: !gt,
                });
                {
                  let nn = await jwo({
                    agentMessages: Ue,
                    tools: c.options.tools,
                    toolPermissionContext: Fr(c),
                    abortSignal: c.abortController.signal,
                    subagentType: L.agentType,
                    totalToolUseCount: Dn.totalToolUseCount,
                  });
                  if (nn)
                    Dn.content = [
                      {
                        type: "text",
                        text: nn,
                      },
                      ...Dn.content,
                    ];
                }
                return {
                  data: {
                    status: "completed",
                    prompt: e,
                    ...Dn,
                    ...Et,
                  },
                };
              } finally {
                if (Ke) clearTimeout(Ke);
                if ((c.setToolJSX?.(null), c.toolUseId))
                  c.emitToolProgress?.({
                    kind: "clear",
                    toolUseId: c.toolUseId,
                  });
                if ((Ve?.(), Be(), !Me)) {
                  let st = S.get(Ie),
                    xt = El(st) ? st.progress : void 0;
                  (Khl(Ie, S),
                    zv({
                      type: "system",
                      subtype: "task_notification",
                      task_id: Ie,
                      tool_use_id: c.toolUseId,
                      status:
                        st?.status === "failed"
                          ? "failed"
                          : st?.status === "killed"
                            ? "stopped"
                            : "completed",
                      output_file: "",
                      summary: n,
                      usage: {
                        total_tokens: xt?.tokenCount ?? 0,
                        tool_uses: xt?.toolUseCount ?? 0,
                        duration_ms: Date.now() - we,
                      },
                    }));
                }
              }
            }),
          );
        }
      },
      isReadOnly() {
        return !0;
      },
      toAutoClassifierInput(e) {
        let t = e,
          n = [t.subagent_type, t.mode ? `mode=${t.mode}` : void 0].filter((o) => o !== void 0);
        return `${n.length > 0 ? `(${n.join(", ")}): ` : ": "}${t.prompt}`;
      },
      isConcurrencySafe() {
        return !0;
      },
      userFacingName: bIo,
      userFacingNameBackgroundColor: SIo,
      getActivityDescription(e) {
        return e?.description?.replace(/\s+/g, " ").trim() || "Running task";
      },
      async checkPermissions(e, t) {
        if (Fr(t).mode === "auto")
          return {
            behavior: "passthrough",
            message: "Agent tool requires permission to spawn subagents.",
          };
        return {
          behavior: "allow",
          updatedInput: e,
        };
      },
      mapToolResultToToolResultBlockParam(e, t) {
        let n = e;
        if (
          typeof n === "object" &&
          n !== null &&
          "status" in n &&
          n.status === "teammate_spawned"
        ) {
          let r = n;
          return {
            tool_use_id: t,
            type: "tool_result",
            content: [
              {
                type: "text",
                text: `Spawned successfully.
agent_id: ${r.teammate_id}
name: ${r.name}
The agent is now running and will receive instructions via mailbox.`,
              },
            ],
          };
        }
        if (e.status === "remote_launched") {
          let r = e;
          return {
            tool_use_id: t,
            type: "tool_result",
            content: [
              {
                type: "text",
                text: `Cloud agent launched.
taskId: ${r.taskId}
session_url: ${r.sessionUrl}
output_file: ${r.outputFile}
The agent is running in the cloud. You will be notified automatically when it completes.
Briefly tell the user what you launched and end your response.`,
              },
            ],
          };
        }
        if (e.status === "async_launched") {
          let r = `Async agent launched successfully.
agentId: ${e.agentId} (internal ID - do not mention to user. Use SendMessage with to: '${e.agentId}', summary: '<5-10 word recap>' to continue this agent.)
The agent is working in the background. You will be notified automatically when it completes.`,
            o = e.canReadOutputFile
              ? `Do not duplicate this agent's work \u2014 avoid working with the same files or topics it is using.
output_file: ${e.outputFile}
Do NOT ${Ds} or tail this file via the shell tool \u2014 it is the full subagent JSONL transcript and reading it will overflow your context. If the user asks for progress, say the agent is still running; you'll get a completion notification.`
              : "Briefly tell the user what you launched. Agent results will arrive in a subsequent message.",
            s = `${r}
${o}`;
          return {
            tool_use_id: t,
            type: "tool_result",
            content: [
              {
                type: "text",
                text: s,
              },
            ],
          };
        }
        if (e.status === "completed") {
          let r = e,
            o = r.worktreePath
              ? `
worktreePath: ${r.worktreePath}
worktreeBranch: ${r.worktreeBranch}`
              : "",
            s =
              e.content.length > 0
                ? e.content
                : [
                    {
                      type: "text",
                      text: "(Subagent completed but returned no output.)",
                    },
                  ];
          if (e.agentType && Y1i.has(e.agentType) && !o)
            return {
              tool_use_id: t,
              type: "tool_result",
              content: s,
            };
          return {
            tool_use_id: t,
            type: "tool_result",
            content: [
              ...s,
              {
                type: "text",
                text: `agentId: ${e.agentId} (use SendMessage with to: '${e.agentId}', summary: '<5-10 word recap>' to continue this agent)${o}
<usage>subagent_tokens: ${e.totalTokens}
tool_uses: ${e.totalToolUseCount}
duration_ms: ${e.totalDurationMs}</usage>`,
              },
            ],
          };
        }
        throw (
          Le("subagent_launch", "subagent_unexpected_result_status"),
          Error(`Unexpected agent tool result status: ${e.status}`)
        );
      },
      renderToolResultMessage: Ill,
      renderToolUseMessage: xll,
      renderToolUseTag: kll,
      renderToolUseProgressMessage: KMe,
      renderToolUseRejectedMessage: Rll,
      renderToolUseErrorMessage: Lll,
      renderGroupedToolUse: Dll,
    })));
});
var $7n = "ShowOnboardingRolePicker",
  Yhl =
    "Render a clickable role-picker chip row during Cowork onboarding so the user can pick their role and get a matching plugin installed.",
  Xhl = `Render a clickable role-picker chip row during Cowork onboarding. Call this when asking the user what kind of work they do so they can pick their role and get a matching plugin installed. The role list is hardcoded in the frontend \u2014 call with no args.

The call blocks until the user responds. Three resolution paths all land in the tool result: chip click or free-form typed answer \u2192 {"role": "Legal"} or {"role": "paralegal"}; X button \u2192 {"dismissed": true}. An empty object {} means the user approved without picking a role \u2014 treat it like a dismissal. Free-form roles may not match the chip list \u2014 search the marketplace with whatever string you get.

Do NOT call this in normal conversation. Only call this when explicitly helping the user set up Cowork for their role/job function.`;
function Gff() {
  return Oe.CLAUDE_CODE_REMOTE;
}
var F0o, Fff, jff, Jhl;
