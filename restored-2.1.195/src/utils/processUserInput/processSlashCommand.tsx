// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module acl
// matched 2.1.88 source: src/utils/processUserInput/processSlashCommand.tsx
// class=modified  jaccard=0.2787  score=0.5092  fileCov=0.381
// note: deminified; 11 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: runUserPromptExpansionHook, processSlashCommand, processPromptSlashCommand, looksLikeCommand, isSlashCommandBlockedByEndedByModel, formatSkillLoadingMetadata
function isSlashCommandBlockedByEndedByModel(e, t) {
  if (!t) return false;
  return !(e && e.type !== "prompt" && Gif.has(e.name));
}
async function executeForkedSlashCommand(
  command,
  args,
  context,
  precedingInputBlocks,
  setToolJSX,
  canUseTool,
  i = [],
) {
  let a = rM(),
    { sanitizedName: l, skillNameHash: c } = Elt({
      rawName: command.name,
      canonicalName: command.name,
      isMcp: command.loadedFrom === "mcp",
      isBuiltIn: mQ().has(command.name),
      isBundled: command.source === "bundled",
      isOfficial:
        command.source === "plugin" &&
        !!command.pluginInfo?.repository &&
        zD(Qo(command.pluginInfo.repository).marketplace),
    });
  G("tengu_slash_command_forked", {
    command_name: l,
    ...c,
    _PROTO_skill_name: command.name,
    invocation_trigger: We("user-slash"),
    ...Hbe(command.source, command.loadedFrom, command.kind, command.createdBy),
    ...L8e(command.source, command.name),
    ...(command.pluginInfo && Tbe(command.pluginInfo)),
  });
  let {
      skillContent: u,
      modifiedGetAppState: d,
      contextLayers: p,
      baseAgent: f,
      promptMessages: m,
    } = await K8t(command, args, context),
    g = p.length > 0 ? [...(context.permissionLayers ?? []), ...p] : context.permissionLayers;
  m.push(...i);
  let h = command.getEffort?.(args) ?? command.effort,
    y =
      h !== void 0
        ? {
            ...f,
            effort: h,
          }
        : f;
  T(`Executing forked slash command /${command.name} with agent ${y.agentType}`);
  let b = [],
    _ = [],
    S = `forked-command-${command.name}`,
    A = 0,
    v = (k) => (
      A++,
      {
        type: "progress",
        data: {
          message: k,
          type: "agent_progress",
          prompt: u,
          agentId: a,
          agentType: y.agentType,
          description: command.description,
        },
        parentToolUseID: S,
        toolUseID: `${S}-${A}`,
        timestamp: new Date().toISOString(),
        uuid: g_t.randomUUID(),
      }
    ),
    C = () => {
      (setToolJSX({
        jsx: KMe(_, {
          tools: context.options.tools,
          verbose: false,
        }),
        shouldHidePromptInput: false,
        shouldContinueAnimation: true,
        showSpinner: true,
      }),
        context.emitToolProgress?.({
          kind: "agent_progress",
          toolUseId: S,
          progressMessages: [..._],
        }));
    };
  C();
  try {
    for await (let k of o3({
      agentDefinition: y,
      promptMessages: m,
      toolUseContext: {
        ...context,
        getAppState: d,
        permissionLayers: g,
      },
      canUseTool: canUseTool,
      isAsync: false,
      querySource: "agent:custom",
      spawnedBySkill: t$e(command),
      model: command.model,
      availableTools: context.options.tools,
    })) {
      if (
        k.type === "api_metrics" ||
        k.type === "set_in_progress_tool_use_ids" ||
        k.type === "spinner_mode"
      )
        continue;
      b.push(k);
      let D = mS([k]);
      if (k.type === "assistant") {
        let P = h1n(k);
        if (P > 0)
          context.onQueryEvent?.({
            type: "response_length",
            op: "add",
            delta: P,
          });
        let O = D[0];
        if (O && O.type === "assistant") (_.push(v(k)), C());
      }
      if (k.type === "user") {
        let P = D[0];
        if (P && P.type === "user") (_.push(v(P)), C());
      }
    }
  } finally {
    (setToolJSX(null),
      context.emitToolProgress?.({
        kind: "clear",
        toolUseId: S,
      }));
  }
  let x = h_t(b, "Command completed");
  return (
    T(`Forked slash command /${command.name} completed with agent ${a}`),
    {
      messages: [
        Rn({
          content: Y6({
            inputString: `/${xu(command)} ${args}`.trim(),
            precedingInputBlocks: precedingInputBlocks,
          }),
        }),
        Rn({
          content: `<local-command-stdout>
${x}
</local-command-stdout>`,
        }),
      ],
      shouldQuery: false,
      command: command,
      resultText: x,
    }
  );
}
function looksLikeCommand(e) {
  return !/[^a-zA-Z0-9:\-_]/.test(e);
}
async function processSlashCommand(
  inputString,
  precedingInputBlocks,
  imageContentBlocks,
  attachmentMessages,
  context,
  setToolJSX,
  uuid,
  isAlreadyProcessing,
  canUseTool,
  c,
) {
  function u() {
    let Z = g_t.randomUUID();
    _Je(Z);
    let J = lL(context.options.mainLoopModel, gg(context));
    return (
      G("tengu_input_prompt", {
        ...(c && {
          prompt_source: $e(c),
        }),
        ...(J && {
          effort_level: $e(J),
        }),
      }),
      Jc("user_prompt", {
        prompt_length: String(inputString.length),
        prompt: iFt(inputString),
        "prompt.id": Z,
      }),
      {
        messages: [
          Rn({
            content: Y6({
              inputString: inputString,
              precedingInputBlocks: precedingInputBlocks,
            }),
            uuid: uuid,
            promptSource: c,
          }),
          ...attachmentMessages,
        ],
        shouldQuery: true,
      }
    );
  }
  let d = JMe(inputString);
  if (!d) {
    if ((G("tengu_input_slash_missing", {}), context.options.isNonInteractiveSession)) return u();
    Le("cmd_dispatch", "cmd_parse_failed");
    let Z = "Commands are in the form `/command [args]`";
    return {
      messages: [
        Doe(),
        ...attachmentMessages,
        Rn({
          content: Y6({
            inputString: Z,
            precedingInputBlocks: precedingInputBlocks,
          }),
        }),
      ],
      shouldQuery: false,
      resultText: Z,
    };
  }
  let { commandName: p, args: f } = d,
    { isMcp: m } = d,
    g = false;
  if (hk()) {
    let Z = szn(p, context.options.commands);
    if (Z) ((p = Z.commandName), (f = Z.args));
    else if (p.includes("://")) g = true;
  }
  let h = fA(p, context.options.commands);
  if (h && !Ik(h)) h = void 0;
  if (!h && !m && f.trim()) {
    let Z = f.trimStart(),
      J = Z.search(/\s/),
      ne = J === -1 ? Z : Z.slice(0, J),
      oe = `${p}:${ne}`,
      re = fA(oe, context.options.commands);
    if (re) ((h = re), (p = oe), (f = J === -1 ? "" : Z.slice(J + 1).trimStart()));
  }
  let y;
  if (h && !Poe(h)) {
    let Z = _Kn(h, f);
    if (Z) {
      let J = fA(Z.targetName, context.options.commands);
      if (J && Ik(J)) ((h = J), (p = Z.targetName), (f = Z.remainingArgs));
      else if (h.name === woe) {
        let ne = nzn();
        if (ne) y = cc(`${ne} Running a local review instead.`, "warning");
      }
    }
  }
  let b = mQ().has(p),
    _ = h?.type === "prompt" && h.source === "bundled",
    S =
      h?.type === "prompt" &&
      h.source === "plugin" &&
      !!h.pluginInfo?.repository &&
      zD(Qo(h.pluginInfo.repository).marketplace),
    A = m || (h?.type === "prompt" && h.source === "mcp");
  if (!h) {
    let Z = false;
    try {
      (await qt().stat(`/${p}`), (Z = true));
    } catch {}
    if ((looksLikeCommand(p) || g) && !Z) {
      if (context.options.isNonInteractiveSession && mQ().has(p)) {
        let oe = `/${p} isn't available in this environment.`;
        return (
          G("tengu_input_slash_invalid", {
            input_length: p.length,
            had_suggestion: false,
          }),
          Le("cmd_dispatch", "cmd_unavailable_headless"),
          {
            messages: [
              nw(`/${p}${f ? ` ${f}` : ""}`),
              nw(`<local-command-stdout>${oe}</local-command-stdout>`),
            ],
            shouldQuery: false,
            resultText: oe,
          }
        );
      }
      let J = Npe(
        p,
        context.options.commands
          .filter((oe) => !oe.isHidden && !Poe(oe) && Ik(oe))
          .map((oe) => ({
            name: xu(oe),
            aliases: oe.aliases,
          })),
        {
          maxEditDistance: 2,
        },
      );
      (G("tengu_input_slash_invalid", {
        input_length: p.length,
        is_mcp_template_unmatched: g,
        had_suggestion: Boolean(J),
        suggestion_distance: J ? i8t(p, J) : void 0,
      }),
        Le("cmd_dispatch", "cmd_unknown"));
      let ne = J ? `Unknown command: /${p}. Did you mean /${J}?` : `Unknown command: /${p}`;
      if (context.options.isNonInteractiveSession)
        return {
          messages: [
            ...attachmentMessages,
            nw(`/${p}${f ? ` ${f}` : ""}`),
            nw(`<local-command-stdout>${ne}</local-command-stdout>`),
          ],
          shouldQuery: false,
          resultText: ne,
        };
      return {
        messages: [
          ...attachmentMessages,
          cc(ne, "warning"),
          ...(f ? [cc(`Args from unknown skill: ${f}`, "warning")] : []),
        ],
        shouldQuery: false,
        resultText: ne,
      };
    }
    return u();
  }
  let v =
      A || h.loadedFrom === "mcp"
        ? "mcp"
        : b || (h.type === "prompt" && (h.source === "bundled" || h.source === "builtin"))
          ? "builtin"
          : "custom",
    C = h.isSensitive && f.trim() ? `/${p} ***` : inputString;
  if (!(context.deferSlashToEngine?.(h) ?? false)) {
    let Z = g_t.randomUUID();
    (_Je(Z),
      Jc("user_prompt", {
        prompt_length: String(C.length),
        prompt: iFt(C),
        "prompt.id": Z,
        command_name: v === "builtin" || sg() ? p : v,
        command_source: v,
      }));
  }
  let {
      messages: newMessages,
      shouldQuery: k,
      allowedTools: D,
      disallowedTools: P,
      model: O,
      effort: L,
      command: returnedCommand,
      resultText: N,
      nextInput: B,
      submitNextInput: $,
      engineDeferredSlash: q,
    } = await getMessagesForSlashCommand(
      p,
      f,
      setToolJSX,
      context,
      precedingInputBlocks,
      imageContentBlocks,
      isAlreadyProcessing,
      canUseTool,
      uuid,
    ),
    { sanitizedName: W, skillNameHash: V } = Elt({
      rawName: p,
      canonicalName: returnedCommand.name,
      isMcp: A || returnedCommand.loadedFrom === "mcp",
      isBuiltIn: b,
      isBundled: _,
      isOfficial: S,
    });
  if (newMessages.length === 0) {
    let Z = {
      input: W,
      ...V,
    };
    if (returnedCommand.type === "prompt" && returnedCommand.pluginInfo) {
      let { pluginManifest: J, repository: ne } = returnedCommand.pluginInfo,
        { marketplace: oe } = Qo(ne),
        re = zD(oe);
      if (
        ((Z.plugin_repository = re ? ne : "third-party"),
        (Z.plugin_name = re ? J.name : "third-party"),
        re && J.version)
      )
        Z.plugin_version = tS(J.version);
      Object.assign(Z, Tbe(returnedCommand.pluginInfo));
    }
    return (
      G("tengu_input_command", {
        ...Z,
        invocation_trigger: We("user-slash"),
        ...Hbe(
          returnedCommand.type === "prompt" ? returnedCommand.source : void 0,
          returnedCommand.loadedFrom,
          returnedCommand.kind,
          returnedCommand.type === "prompt" ? returnedCommand.createdBy : void 0,
        ),
        ...L8e(returnedCommand.type === "prompt" ? returnedCommand.source : void 0, p),
        ...(returnedCommand.type === "prompt" && {
          command_content_chars: returnedCommand.contentLength,
        }),
        ...(returnedCommand.type === "prompt" && {
          _PROTO_skill_name: returnedCommand.name,
        }),
        ...false,
      }),
      {
        messages: [],
        shouldQuery: false,
        model: O,
        nextInput: B,
        submitNextInput: $,
      }
    );
  }
  if (
    newMessages.length === 2 &&
    newMessages[1].type === "user" &&
    typeof newMessages[1].message.content === "string" &&
    newMessages[1].message.content.startsWith("Unknown command:")
  ) {
    if (
      !(
        inputString.startsWith("/var") ||
        inputString.startsWith("/tmp") ||
        inputString.startsWith("/private")
      )
    )
      (G("tengu_input_slash_invalid", {
        input_length: p.length,
        had_suggestion: false,
      }),
        Le("cmd_dispatch", "cmd_unknown"));
    return {
      messages: [Doe(), ...newMessages],
      shouldQuery: k,
      allowedTools: D,
      disallowedTools: P,
      model: O,
    };
  }
  if (!q) xe("cmd_dispatch");
  let eventData = {
    input: W,
    ...V,
  };
  if (returnedCommand.type === "prompt" && returnedCommand.pluginInfo) {
    let { pluginManifest: Z, repository: J } = returnedCommand.pluginInfo,
      { marketplace: ne } = Qo(J),
      oe = zD(ne);
    if (
      ((eventData.plugin_repository = oe ? J : "third-party"),
      (eventData.plugin_name = oe ? Z.name : "third-party"),
      oe && Z.version)
    )
      eventData.plugin_version = tS(Z.version);
    Object.assign(eventData, Tbe(returnedCommand.pluginInfo));
  }
  if (!q)
    G("tengu_input_command", {
      ...eventData,
      invocation_trigger: We("user-slash"),
      ...Hbe(
        returnedCommand.type === "prompt" ? returnedCommand.source : void 0,
        returnedCommand.loadedFrom,
        returnedCommand.kind,
        returnedCommand.type === "prompt" ? returnedCommand.createdBy : void 0,
      ),
      ...L8e(returnedCommand.type === "prompt" ? returnedCommand.source : void 0, p),
      ...(returnedCommand.type === "prompt" && {
        command_content_chars: returnedCommand.contentLength,
      }),
      ...(returnedCommand.type === "prompt" && {
        _PROTO_skill_name: returnedCommand.name,
      }),
      ...false,
    });
  let z = newMessages.length > 0 && newMessages[0] && pA(newMessages[0]),
    K =
      k ||
      newMessages.every(
        (Z) =>
          xIo(Z) ||
          (Z.type === "system" && Z.subtype === "informational") ||
          (Z.type === "user" && Z.isMeta),
      ) ||
      z ||
      q
        ? newMessages
        : [Doe(), ...newMessages];
  return {
    messages: y && k ? [...K, y] : K,
    shouldQuery: k,
    allowedTools: D,
    disallowedTools: P,
    model: O,
    effort: L,
    resultText: N,
    nextInput: B,
    submitNextInput: $,
    engineDeferredSlash: q,
  };
}
async function getMessagesForSlashCommand(
  commandName,
  args,
  setToolJSX,
  context,
  precedingInputBlocks,
  imageContentBlocks,
  _isAlreadyProcessing,
  canUseTool,
  uuid,
) {
  let command = h6e(commandName, context.options.commands),
    u = cSs(Y8t().has(commandName) ? commandName : "custom");
  if (!Ik(command)) {
    Le(u, "cmd_policy_disabled");
    let d = `/${commandName} isn't available in this session.`;
    if (context.options.isNonInteractiveSession)
      return {
        messages: [nw(ZMe(command, args)), nw(`<local-command-stdout>${d}</local-command-stdout>`)],
        shouldQuery: false,
        command: command,
        resultText: d,
      };
    return {
      messages: [cc(d, "warning")],
      shouldQuery: false,
      command: command,
      resultText: d,
    };
  }
  if (Poe(command)) {
    if ((Le(u, "cmd_skill_override_off"), context.options.isNonInteractiveSession)) {
      let p = `Skill "${command.name}" is disabled via skillOverrides. Remove the override from your settings to run it.`;
      return {
        messages: [nw(ZMe(command, args)), nw(`<local-command-stdout>${p}</local-command-stdout>`)],
        shouldQuery: false,
        command: command,
        resultText: p,
      };
    }
    let d = `Skill "${command.name}" is disabled via skillOverrides. Re-enable it in /skills or remove the override from your settings to run it.`;
    return {
      messages: [
        cc(d, "warning"),
        ...(args ? [cc(`Args from disabled skill: ${args}`, "warning")] : []),
      ],
      shouldQuery: false,
      command: command,
      resultText: d,
    };
  }
  if (command.type === "prompt" && command.userInvocable !== false) x6n(command.name);
  if (command.type === "prompt" && command.pluginInfo) Zj(command.pluginInfo.repository);
  if (!context.deferSlashToEngine?.(command))
    icl({
      commandName: command.name,
      agentId: context.agentId,
      isNonInteractiveSession: Boolean(context.options.isNonInteractiveSession),
      setAppState: context.setAppState,
    });
  if (command.userInvocable === false)
    return (
      Le(u, "cmd_not_user_invocable"),
      {
        messages: [
          Rn({
            content: Y6({
              inputString: `/${commandName}`,
              precedingInputBlocks: precedingInputBlocks,
            }),
          }),
          Rn({
            content: `This skill can only be invoked by Claude, not directly by users. Ask Claude to use the "${commandName}" skill for you.`,
          }),
        ],
        shouldQuery: false,
        command: command,
      }
    );
  if (command.type === "local-jsx" && context.options.isNonInteractiveSession) {
    Le(u, "cmd_local_jsx_headless");
    let d = `/${xu(command)} opens an interactive panel and isn't available in this environment. Run it from the Claude Code terminal instead.`;
    return {
      messages: [nw(ZMe(command, args)), nw(`<local-command-stdout>${d}</local-command-stdout>`)],
      shouldQuery: false,
      command: command,
      resultText: d,
    };
  }
  try {
    switch (command.type) {
      case "local-jsx":
        return new Promise((d) => {
          let p = false,
            f = (m, g) => {
              if (((p = true), xe(u), g?.display === "skip")) {
                d({
                  messages: [],
                  shouldQuery: false,
                  command: command,
                  nextInput: g?.nextInput,
                  submitNextInput: g?.submitNextInput,
                });
                return;
              }
              let h = (g?.metaMessages ?? []).map((b) =>
                  Rn({
                    content: b,
                    isMeta: true,
                  }),
                ),
                y = Ns() && typeof m === "string" && m.endsWith(" dismissed");
              d({
                messages:
                  g?.display === "system"
                    ? y
                      ? h
                      : [
                          nw(ZMe(command, args)),
                          nw(`<local-command-stdout>${m}</local-command-stdout>`),
                          ...h,
                        ]
                    : [
                        Rn({
                          content: Y6({
                            inputString: ZMe(command, args),
                            precedingInputBlocks: precedingInputBlocks,
                          }),
                        }),
                        m
                          ? Rn({
                              content: `<local-command-stdout>${m}</local-command-stdout>`,
                            })
                          : Rn({
                              content: `<local-command-stdout>${zw}</local-command-stdout>`,
                            }),
                        ...h,
                      ],
                shouldQuery: g?.shouldQuery ?? false,
                command: command,
                nextInput: g?.nextInput,
                submitNextInput: g?.submitNextInput,
              });
            };
          command
            .load()
            .then((m) =>
              m.call(
                f,
                {
                  ...context,
                  canUseTool: canUseTool,
                },
                args,
                commandName,
              ),
            )
            .then((m) => {
              if (m == null) return;
              if (p) return;
              setToolJSX({
                jsx: m,
                shouldHidePromptInput: true,
                showSpinner: false,
                isLocalJSXCommand: true,
                isImmediate: YMe(command, args),
              });
            })
            .catch((m) => {
              if ((ke(m), Le(u, "cmd_local_jsx_threw"), p)) return;
              ((p = true),
                setToolJSX({
                  jsx: null,
                  shouldHidePromptInput: false,
                  clearLocalJSX: true,
                }),
                d({
                  messages: [],
                  shouldQuery: false,
                  command: command,
                }));
            });
        });
      case "local": {
        if (context.deferSlashToEngine?.(command)) {
          let f = `/${xu(command)} ${args}`.trim(),
            m = Rn({
              content: Y6({
                inputString: f,
                precedingInputBlocks: precedingInputBlocks,
              }),
            });
          return {
            messages: [m],
            shouldQuery: false,
            command: command,
            engineDeferredSlash: {
              text: f,
              messageUuid: m.uuid,
            },
          };
        }
        let d = command.isSensitive && args.trim() ? "***" : args,
          p = Rn({
            content: Y6({
              inputString: ZMe(command, d),
              precedingInputBlocks: precedingInputBlocks,
            }),
          });
        try {
          let f = Doe(),
            g = await (await command.load()).call(args, context);
          if ((xe(u), g.type === "skip"))
            return {
              messages: [],
              shouldQuery: false,
              command: command,
            };
          if (g.type === "compact") {
            let h = [
                f,
                p,
                ...(g.displayText
                  ? [
                      Rn({
                        content: `<local-command-stdout>${g.displayText}</local-command-stdout>`,
                        timestamp: new Date(Date.now() + 100).toISOString(),
                      }),
                    ]
                  : []),
              ],
              y = {
                ...g.compactionResult,
                messagesToKeep: [...g.compactionResult.messagesToKeep, ...h],
              };
            return {
              messages: PAe(y),
              shouldQuery: false,
              command: command,
            };
          }
          if (g.type === "query")
            return {
              messages: [
                p,
                Rn({
                  content: `<local-command-stdout>${g.value}</local-command-stdout>`,
                }),
                Rn({
                  content: g.prompt,
                  isMeta: true,
                }),
              ],
              shouldQuery: true,
              command: command,
              resultText: g.value,
            };
          return {
            messages: [p, nw(`<local-command-stdout>${g.value}</local-command-stdout>`)],
            shouldQuery: false,
            command: command,
            resultText: g.value,
          };
        } catch (f) {
          if (lh(f)) T(`local command aborted: ${f instanceof Error ? f.message : String(f)}`);
          else ke(f);
          return (
            Le(u, "cmd_local_threw"),
            {
              messages: [p, nw(`<local-command-stderr>${String(f)}</local-command-stderr>`)],
              shouldQuery: false,
              command: command,
            }
          );
        }
      }
      case "prompt": {
        if (!(command.isMcp && command.loadedFrom !== "mcp"))
          aFt(command.name, command, "user-slash");
        try {
          let d = await runUserPromptExpansionHook(command, args, context);
          if ("blocked" in d) return (Le(u, "cmd_hook_blocked"), d.blocked);
          if (command.getEffort?.(args) !== void 0 && !context.options.isNonInteractiveSession)
            Dj();
          if (command.context === "fork") {
            let f = await executeForkedSlashCommand(
              command,
              args,
              context,
              precedingInputBlocks,
              setToolJSX,
              canUseTool ?? RL,
              d.hookMessages,
            );
            return (xe(u), f);
          }
          let p = await getMessagesForPromptSlashCommand(
            command,
            args,
            context,
            precedingInputBlocks,
            imageContentBlocks,
            uuid,
            d.hookMessages,
          );
          return (xe(u), p);
        } catch (d) {
          if (d instanceof ru)
            return (
              Le(u, "cmd_prompt_aborted"),
              {
                messages: [
                  Rn({
                    content: Y6({
                      inputString: ZMe(command, args),
                      precedingInputBlocks: precedingInputBlocks,
                    }),
                  }),
                  gQ({
                    toolUse: false,
                  }),
                ],
                shouldQuery: false,
                command: command,
              }
            );
          return (
            Le(u, "cmd_prompt_threw"),
            {
              messages: [
                Rn({
                  content: Y6({
                    inputString: ZMe(command, args),
                    precedingInputBlocks: precedingInputBlocks,
                  }),
                }),
                Rn({
                  content: `<local-command-stderr>${String(d)}</local-command-stderr>`,
                }),
              ],
              shouldQuery: false,
              command: command,
            }
          );
        }
      }
    }
  } catch (d) {
    if (d instanceof NK)
      return (
        Le(u, "cmd_malformed"),
        {
          messages: [
            Rn({
              content: Y6({
                inputString: d.message,
                precedingInputBlocks: precedingInputBlocks,
              }),
            }),
          ],
          shouldQuery: false,
          command: command,
        }
      );
    throw d;
  }
}
function ZMe(e, t) {
  return n$e(xu(e), t);
}
function formatSkillLoadingMetadata(skillName, t = "loading") {
  return [
    `<${zC}>${skillName}</${zC}>`,
    `<${rj}>${skillName}</${rj}>`,
    "<skill-format>true</skill-format>",
  ].join(`
`);
}
function formatSlashCommandLoadingMetadata(commandName, args) {
  return [
    `<${zC}>${commandName}</${zC}>`,
    `<${rj}>/${commandName}</${rj}>`,
    args ? `<command-args>${args}</command-args>` : null,
  ].filter(Boolean).join(`
`);
}
function formatCommandLoadingMetadata(command, args) {
  if (command.userInvocable !== false) return formatSlashCommandLoadingMetadata(command.name, args);
  if (
    command.loadedFrom === "skills" ||
    command.loadedFrom === "plugin" ||
    command.loadedFrom === "mcp"
  )
    return formatSkillLoadingMetadata(command.name, command.progressMessage);
  return formatSlashCommandLoadingMetadata(command.name, args);
}
async function runUserPromptExpansionHook(e, t, n) {
  let r = [],
    o = t ? `/${e.name} ${t}` : `/${e.name}`;
  for await (let s of G8t(
    e.source === "mcp" ? "mcp_prompt" : "slash_command",
    e.name,
    t,
    e.source,
    o,
    Fr(n).mode,
    n,
  )) {
    if (s.message?.type === "progress") continue;
    if (s.blockingError) {
      let i = `UserPromptExpansion operation blocked by hook:
${s.blockingError.blockingError}

Original prompt: ${o}`;
      return {
        blocked: {
          messages: [cc(i, "warning", void 0, true)],
          shouldQuery: false,
          resultText: i,
          command: e,
        },
      };
    }
    if (s.preventContinuation) {
      let i = s.stopReason
        ? `Operation stopped by hook: ${s.stopReason}`
        : "Operation stopped by hook";
      return {
        blocked: {
          messages: [
            Rn({
              content: i,
            }),
            cc(i, "warning", void 0, true),
          ],
          shouldQuery: false,
          resultText: i,
          command: e,
        },
      };
    }
    if (s.additionalContexts?.length)
      r.push(
        ai({
          type: "hook_additional_context",
          content: s.additionalContexts,
          hookName: "UserPromptExpansion",
          toolUseID: `hook-${g_t.randomUUID()}`,
          hookEvent: "UserPromptExpansion",
        }),
      );
    if (
      s.message &&
      !(
        s.message.type === "attachment" &&
        s.message.attachment.type === "hook_success" &&
        s.message.attachment.content === ""
      )
    )
      r.push(s.message);
  }
  return {
    hookMessages: r,
  };
}
async function processPromptSlashCommand(commandName, args, commands, context, o = []) {
  let s = fA(commandName, commands);
  if (!s) throw new NK(`Unknown command: ${commandName}`);
  if (s.type !== "prompt")
    throw Error(
      `Unexpected ${s.type} command. Expected 'prompt' command. Use /${commandName} directly in the main conversation.`,
    );
  return getMessagesForPromptSlashCommand(s, args, context, [], o);
}
async function getMessagesForPromptSlashCommand(
  command,
  args,
  context,
  r = [],
  o = [],
  uuid,
  i = [],
) {
  if (Gv() && !context.agentId) {
    let b = formatCommandLoadingMetadata(command, args),
      _ = [`Skill "/${command.name}" is available for workers.`];
    if (command.description) _.push(`Description: ${command.description}`);
    if (command.whenToUse) _.push(`When to use: ${command.whenToUse}`);
    let S = command.allowedTools ?? [];
    if (S.length > 0)
      _.push(`This skill grants workers additional tool permissions: ${S.join(", ")}`);
    _.push(`
Instruct a worker to use this skill by including "Use the /${command.name} skill" in your Agent prompt. The worker has access to the Skill tool and will receive the skill's content and permissions when it invokes it.`);
    let A = [
      {
        type: "text",
        text: _.join(`
`),
      },
    ];
    return {
      messages: [
        Rn({
          content: b,
          uuid: uuid,
        }),
        Rn({
          content: A,
          isMeta: true,
        }),
      ],
      shouldQuery: true,
      disallowedTools: wN(command.disallowedTools ?? []),
      model: command.model,
      effort: command.getEffort?.(args) ?? command.effort,
      command: command,
    };
  }
  let a = await command.getPromptForCommand(args, context),
    l = !VE("hooks") || L_e(command.source);
  if (command.hooks && l) {
    let b = Rt();
    Kll(
      context.setAppState,
      b,
      command.hooks,
      command.name,
      command.type === "prompt" ? command.skillRoot : void 0,
    );
  }
  let c = command.source ? `${command.source}:${command.name}` : command.name,
    u = a.filter((b) => b.type === "text").map((b) => b.text).join(`

`);
  PCt(command.name, c, u, context.agentId ?? null);
  let d = Jll(command.name);
  if (d)
    context.applyAttributionOp({
      kind: "recordVerification",
      method: d,
    });
  context.options.activeSkill = t$e(command);
  let p = formatCommandLoadingMetadata(command, args),
    f = wN(command.allowedTools ?? []),
    m = wN(command.disallowedTools ?? []);
  if (m.length > 0) yKn(context.setToolPermissionContext, m, "union");
  let g = o.length > 0 || r.length > 0 ? [...o, ...r, ...a] : a,
    h = await mKn(
      g6e(
        a
          .filter((b) => b.type === "text")
          .map((b) => b.text)
          .join(" "),
        context,
        null,
        [],
        {
          now: () => new Date().toISOString(),
          uuid: () => g_t.randomUUID(),
        },
        context.messages,
        "repl_main_thread",
        {
          planSlugSeed: args,
        },
      ),
    );
  return {
    messages: [
      Rn({
        content: p,
        uuid: uuid,
      }),
      Rn({
        content: g,
        isMeta: true,
      }),
      ...h,
      ...i,
      ai({
        type: "command_permissions",
        allowedTools: f,
        model: command.model,
      }),
    ],
    shouldQuery: true,
    allowedTools: f,
    disallowedTools: m,
    model: command.model,
    effort: command.getEffort?.(args) ?? command.effort,
    command: command,
  };
}
var g_t, Gif;
