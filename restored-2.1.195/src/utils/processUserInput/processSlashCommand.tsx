// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module acl
// matched 2.1.88 source: src/utils/processUserInput/processSlashCommand.tsx
// class=modified  jaccard=0.2787  score=0.5092  fileCov=0.381
// note: deminified; 6 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var z8t = {};
_t(z8t, {
  runUserPromptExpansionHook: () => runUserPromptExpansionHook,
  processSlashCommand: () => processSlashCommand,
  processPromptSlashCommand: () => processPromptSlashCommand,
  looksLikeCommand: () => looksLikeCommand,
  isSlashCommandBlockedByEndedByModel: () => isSlashCommandBlockedByEndedByModel,
  formatSkillLoadingMetadata: () => formatSkillLoadingMetadata,
});
function isSlashCommandBlockedByEndedByModel(e, t) {
  if (!t) return false;
  return !(e && e.type !== "prompt" && Gif.has(e.name));
}
async function qif(e, t, n, r, o, s, i = []) {
  let a = rM(),
    { sanitizedName: l, skillNameHash: c } = Elt({
      rawName: e.name,
      canonicalName: e.name,
      isMcp: e.loadedFrom === "mcp",
      isBuiltIn: mQ().has(e.name),
      isBundled: e.source === "bundled",
      isOfficial:
        e.source === "plugin" &&
        !!e.pluginInfo?.repository &&
        zD(Qo(e.pluginInfo.repository).marketplace),
    });
  G("tengu_slash_command_forked", {
    command_name: l,
    ...c,
    _PROTO_skill_name: e.name,
    invocation_trigger: We("user-slash"),
    ...Hbe(e.source, e.loadedFrom, e.kind, e.createdBy),
    ...L8e(e.source, e.name),
    ...(e.pluginInfo && Tbe(e.pluginInfo)),
  });
  let {
      skillContent: u,
      modifiedGetAppState: d,
      contextLayers: p,
      baseAgent: f,
      promptMessages: m,
    } = await K8t(e, t, n),
    g = p.length > 0 ? [...(n.permissionLayers ?? []), ...p] : n.permissionLayers;
  m.push(...i);
  let h = e.getEffort?.(t) ?? e.effort,
    y =
      h !== void 0
        ? {
            ...f,
            effort: h,
          }
        : f;
  T(`Executing forked slash command /${e.name} with agent ${y.agentType}`);
  let b = [],
    _ = [],
    S = `forked-command-${e.name}`,
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
          description: e.description,
        },
        parentToolUseID: S,
        toolUseID: `${S}-${A}`,
        timestamp: new Date().toISOString(),
        uuid: g_t.randomUUID(),
      }
    ),
    C = () => {
      (o({
        jsx: KMe(_, {
          tools: n.options.tools,
          verbose: false,
        }),
        shouldHidePromptInput: false,
        shouldContinueAnimation: true,
        showSpinner: true,
      }),
        n.emitToolProgress?.({
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
        ...n,
        getAppState: d,
        permissionLayers: g,
      },
      canUseTool: s,
      isAsync: false,
      querySource: "agent:custom",
      spawnedBySkill: t$e(e),
      model: e.model,
      availableTools: n.options.tools,
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
          n.onQueryEvent?.({
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
    (o(null),
      n.emitToolProgress?.({
        kind: "clear",
        toolUseId: S,
      }));
  }
  let x = h_t(b, "Command completed");
  return (
    T(`Forked slash command /${e.name} completed with agent ${a}`),
    {
      messages: [
        Rn({
          content: Y6({
            inputString: `/${xu(e)} ${t}`.trim(),
            precedingInputBlocks: r,
          }),
        }),
        Rn({
          content: `<local-command-stdout>
${x}
</local-command-stdout>`,
        }),
      ],
      shouldQuery: false,
      command: e,
      resultText: x,
    }
  );
}
function looksLikeCommand(e) {
  return !/[^a-zA-Z0-9:\-_]/.test(e);
}
async function processSlashCommand(e, t, n, r, o, s, i, a, l, c) {
  function u() {
    let Z = g_t.randomUUID();
    _Je(Z);
    let J = lL(o.options.mainLoopModel, gg(o));
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
        prompt_length: String(e.length),
        prompt: iFt(e),
        "prompt.id": Z,
      }),
      {
        messages: [
          Rn({
            content: Y6({
              inputString: e,
              precedingInputBlocks: t,
            }),
            uuid: i,
            promptSource: c,
          }),
          ...r,
        ],
        shouldQuery: true,
      }
    );
  }
  let d = JMe(e);
  if (!d) {
    if ((G("tengu_input_slash_missing", {}), o.options.isNonInteractiveSession)) return u();
    Le("cmd_dispatch", "cmd_parse_failed");
    let Z = "Commands are in the form `/command [args]`";
    return {
      messages: [
        Doe(),
        ...r,
        Rn({
          content: Y6({
            inputString: Z,
            precedingInputBlocks: t,
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
    let Z = szn(p, o.options.commands);
    if (Z) ((p = Z.commandName), (f = Z.args));
    else if (p.includes("://")) g = true;
  }
  let h = fA(p, o.options.commands);
  if (h && !Ik(h)) h = void 0;
  if (!h && !m && f.trim()) {
    let Z = f.trimStart(),
      J = Z.search(/\s/),
      ne = J === -1 ? Z : Z.slice(0, J),
      oe = `${p}:${ne}`,
      re = fA(oe, o.options.commands);
    if (re) ((h = re), (p = oe), (f = J === -1 ? "" : Z.slice(J + 1).trimStart()));
  }
  let y;
  if (h && !Poe(h)) {
    let Z = _Kn(h, f);
    if (Z) {
      let J = fA(Z.targetName, o.options.commands);
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
      if (o.options.isNonInteractiveSession && mQ().has(p)) {
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
        o.options.commands
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
      if (o.options.isNonInteractiveSession)
        return {
          messages: [
            ...r,
            nw(`/${p}${f ? ` ${f}` : ""}`),
            nw(`<local-command-stdout>${ne}</local-command-stdout>`),
          ],
          shouldQuery: false,
          resultText: ne,
        };
      return {
        messages: [
          ...r,
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
    C = h.isSensitive && f.trim() ? `/${p} ***` : e;
  if (!(o.deferSlashToEngine?.(h) ?? false)) {
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
      messages: I,
      shouldQuery: k,
      allowedTools: D,
      disallowedTools: P,
      model: O,
      effort: L,
      command: M,
      resultText: N,
      nextInput: B,
      submitNextInput: $,
      engineDeferredSlash: q,
    } = await zif(p, f, s, o, t, n, a, l, i),
    { sanitizedName: W, skillNameHash: V } = Elt({
      rawName: p,
      canonicalName: M.name,
      isMcp: A || M.loadedFrom === "mcp",
      isBuiltIn: b,
      isBundled: _,
      isOfficial: S,
    });
  if (I.length === 0) {
    let Z = {
      input: W,
      ...V,
    };
    if (M.type === "prompt" && M.pluginInfo) {
      let { pluginManifest: J, repository: ne } = M.pluginInfo,
        { marketplace: oe } = Qo(ne),
        re = zD(oe);
      if (
        ((Z.plugin_repository = re ? ne : "third-party"),
        (Z.plugin_name = re ? J.name : "third-party"),
        re && J.version)
      )
        Z.plugin_version = tS(J.version);
      Object.assign(Z, Tbe(M.pluginInfo));
    }
    return (
      G("tengu_input_command", {
        ...Z,
        invocation_trigger: We("user-slash"),
        ...Hbe(
          M.type === "prompt" ? M.source : void 0,
          M.loadedFrom,
          M.kind,
          M.type === "prompt" ? M.createdBy : void 0,
        ),
        ...L8e(M.type === "prompt" ? M.source : void 0, p),
        ...(M.type === "prompt" && {
          command_content_chars: M.contentLength,
        }),
        ...(M.type === "prompt" && {
          _PROTO_skill_name: M.name,
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
    I.length === 2 &&
    I[1].type === "user" &&
    typeof I[1].message.content === "string" &&
    I[1].message.content.startsWith("Unknown command:")
  ) {
    if (!(e.startsWith("/var") || e.startsWith("/tmp") || e.startsWith("/private")))
      (G("tengu_input_slash_invalid", {
        input_length: p.length,
        had_suggestion: false,
      }),
        Le("cmd_dispatch", "cmd_unknown"));
    return {
      messages: [Doe(), ...I],
      shouldQuery: k,
      allowedTools: D,
      disallowedTools: P,
      model: O,
    };
  }
  if (!q) xe("cmd_dispatch");
  let Y = {
    input: W,
    ...V,
  };
  if (M.type === "prompt" && M.pluginInfo) {
    let { pluginManifest: Z, repository: J } = M.pluginInfo,
      { marketplace: ne } = Qo(J),
      oe = zD(ne);
    if (
      ((Y.plugin_repository = oe ? J : "third-party"),
      (Y.plugin_name = oe ? Z.name : "third-party"),
      oe && Z.version)
    )
      Y.plugin_version = tS(Z.version);
    Object.assign(Y, Tbe(M.pluginInfo));
  }
  if (!q)
    G("tengu_input_command", {
      ...Y,
      invocation_trigger: We("user-slash"),
      ...Hbe(
        M.type === "prompt" ? M.source : void 0,
        M.loadedFrom,
        M.kind,
        M.type === "prompt" ? M.createdBy : void 0,
      ),
      ...L8e(M.type === "prompt" ? M.source : void 0, p),
      ...(M.type === "prompt" && {
        command_content_chars: M.contentLength,
      }),
      ...(M.type === "prompt" && {
        _PROTO_skill_name: M.name,
      }),
      ...false,
    });
  let z = I.length > 0 && I[0] && pA(I[0]),
    K =
      k ||
      I.every(
        (Z) =>
          xIo(Z) ||
          (Z.type === "system" && Z.subtype === "informational") ||
          (Z.type === "user" && Z.isMeta),
      ) ||
      z ||
      q
        ? I
        : [Doe(), ...I];
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
async function zif(e, t, n, r, o, s, i, a, l) {
  let c = h6e(e, r.options.commands),
    u = cSs(Y8t().has(e) ? e : "custom");
  if (!Ik(c)) {
    Le(u, "cmd_policy_disabled");
    let d = `/${e} isn't available in this session.`;
    if (r.options.isNonInteractiveSession)
      return {
        messages: [nw(ZMe(c, t)), nw(`<local-command-stdout>${d}</local-command-stdout>`)],
        shouldQuery: false,
        command: c,
        resultText: d,
      };
    return {
      messages: [cc(d, "warning")],
      shouldQuery: false,
      command: c,
      resultText: d,
    };
  }
  if (Poe(c)) {
    if ((Le(u, "cmd_skill_override_off"), r.options.isNonInteractiveSession)) {
      let p = `Skill "${c.name}" is disabled via skillOverrides. Remove the override from your settings to run it.`;
      return {
        messages: [nw(ZMe(c, t)), nw(`<local-command-stdout>${p}</local-command-stdout>`)],
        shouldQuery: false,
        command: c,
        resultText: p,
      };
    }
    let d = `Skill "${c.name}" is disabled via skillOverrides. Re-enable it in /skills or remove the override from your settings to run it.`;
    return {
      messages: [cc(d, "warning"), ...(t ? [cc(`Args from disabled skill: ${t}`, "warning")] : [])],
      shouldQuery: false,
      command: c,
      resultText: d,
    };
  }
  if (c.type === "prompt" && c.userInvocable !== false) x6n(c.name);
  if (c.type === "prompt" && c.pluginInfo) Zj(c.pluginInfo.repository);
  if (!r.deferSlashToEngine?.(c))
    icl({
      commandName: c.name,
      agentId: r.agentId,
      isNonInteractiveSession: Boolean(r.options.isNonInteractiveSession),
      setAppState: r.setAppState,
    });
  if (c.userInvocable === false)
    return (
      Le(u, "cmd_not_user_invocable"),
      {
        messages: [
          Rn({
            content: Y6({
              inputString: `/${e}`,
              precedingInputBlocks: o,
            }),
          }),
          Rn({
            content: `This skill can only be invoked by Claude, not directly by users. Ask Claude to use the "${e}" skill for you.`,
          }),
        ],
        shouldQuery: false,
        command: c,
      }
    );
  if (c.type === "local-jsx" && r.options.isNonInteractiveSession) {
    Le(u, "cmd_local_jsx_headless");
    let d = `/${xu(c)} opens an interactive panel and isn't available in this environment. Run it from the Claude Code terminal instead.`;
    return {
      messages: [nw(ZMe(c, t)), nw(`<local-command-stdout>${d}</local-command-stdout>`)],
      shouldQuery: false,
      command: c,
      resultText: d,
    };
  }
  try {
    switch (c.type) {
      case "local-jsx":
        return new Promise((d) => {
          let p = false,
            f = (m, g) => {
              if (((p = true), xe(u), g?.display === "skip")) {
                d({
                  messages: [],
                  shouldQuery: false,
                  command: c,
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
                          nw(ZMe(c, t)),
                          nw(`<local-command-stdout>${m}</local-command-stdout>`),
                          ...h,
                        ]
                    : [
                        Rn({
                          content: Y6({
                            inputString: ZMe(c, t),
                            precedingInputBlocks: o,
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
                command: c,
                nextInput: g?.nextInput,
                submitNextInput: g?.submitNextInput,
              });
            };
          c.load()
            .then((m) =>
              m.call(
                f,
                {
                  ...r,
                  canUseTool: a,
                },
                t,
                e,
              ),
            )
            .then((m) => {
              if (m == null) return;
              if (p) return;
              n({
                jsx: m,
                shouldHidePromptInput: true,
                showSpinner: false,
                isLocalJSXCommand: true,
                isImmediate: YMe(c, t),
              });
            })
            .catch((m) => {
              if ((ke(m), Le(u, "cmd_local_jsx_threw"), p)) return;
              ((p = true),
                n({
                  jsx: null,
                  shouldHidePromptInput: false,
                  clearLocalJSX: true,
                }),
                d({
                  messages: [],
                  shouldQuery: false,
                  command: c,
                }));
            });
        });
      case "local": {
        if (r.deferSlashToEngine?.(c)) {
          let f = `/${xu(c)} ${t}`.trim(),
            m = Rn({
              content: Y6({
                inputString: f,
                precedingInputBlocks: o,
              }),
            });
          return {
            messages: [m],
            shouldQuery: false,
            command: c,
            engineDeferredSlash: {
              text: f,
              messageUuid: m.uuid,
            },
          };
        }
        let d = c.isSensitive && t.trim() ? "***" : t,
          p = Rn({
            content: Y6({
              inputString: ZMe(c, d),
              precedingInputBlocks: o,
            }),
          });
        try {
          let f = Doe(),
            g = await (await c.load()).call(t, r);
          if ((xe(u), g.type === "skip"))
            return {
              messages: [],
              shouldQuery: false,
              command: c,
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
              command: c,
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
              command: c,
              resultText: g.value,
            };
          return {
            messages: [p, nw(`<local-command-stdout>${g.value}</local-command-stdout>`)],
            shouldQuery: false,
            command: c,
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
              command: c,
            }
          );
        }
      }
      case "prompt": {
        if (!(c.isMcp && c.loadedFrom !== "mcp")) aFt(c.name, c, "user-slash");
        try {
          let d = await runUserPromptExpansionHook(c, t, r);
          if ("blocked" in d) return (Le(u, "cmd_hook_blocked"), d.blocked);
          if (c.getEffort?.(t) !== void 0 && !r.options.isNonInteractiveSession) Dj();
          if (c.context === "fork") {
            let f = await qif(c, t, r, o, n, a ?? RL, d.hookMessages);
            return (xe(u), f);
          }
          let p = await pcl(c, t, r, o, s, l, d.hookMessages);
          return (xe(u), p);
        } catch (d) {
          if (d instanceof ru)
            return (
              Le(u, "cmd_prompt_aborted"),
              {
                messages: [
                  Rn({
                    content: Y6({
                      inputString: ZMe(c, t),
                      precedingInputBlocks: o,
                    }),
                  }),
                  gQ({
                    toolUse: false,
                  }),
                ],
                shouldQuery: false,
                command: c,
              }
            );
          return (
            Le(u, "cmd_prompt_threw"),
            {
              messages: [
                Rn({
                  content: Y6({
                    inputString: ZMe(c, t),
                    precedingInputBlocks: o,
                  }),
                }),
                Rn({
                  content: `<local-command-stderr>${String(d)}</local-command-stderr>`,
                }),
              ],
              shouldQuery: false,
              command: c,
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
                precedingInputBlocks: o,
              }),
            }),
          ],
          shouldQuery: false,
          command: c,
        }
      );
    throw d;
  }
}
function ZMe(e, t) {
  return n$e(xu(e), t);
}
function formatSkillLoadingMetadata(e, t = "loading") {
  return [`<${zC}>${e}</${zC}>`, `<${rj}>${e}</${rj}>`, "<skill-format>true</skill-format>"].join(`
`);
}
function lcl(e, t) {
  return [
    `<${zC}>${e}</${zC}>`,
    `<${rj}>/${e}</${rj}>`,
    t ? `<command-args>${t}</command-args>` : null,
  ].filter(Boolean).join(`
`);
}
function ccl(e, t) {
  if (e.userInvocable !== false) return lcl(e.name, t);
  if (e.loadedFrom === "skills" || e.loadedFrom === "plugin" || e.loadedFrom === "mcp")
    return formatSkillLoadingMetadata(e.name, e.progressMessage);
  return lcl(e.name, t);
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
async function processPromptSlashCommand(e, t, n, r, o = []) {
  let s = fA(e, n);
  if (!s) throw new NK(`Unknown command: ${e}`);
  if (s.type !== "prompt")
    throw Error(
      `Unexpected ${s.type} command. Expected 'prompt' command. Use /${e} directly in the main conversation.`,
    );
  return pcl(s, t, r, [], o);
}
async function pcl(e, t, n, r = [], o = [], s, i = []) {
  if (Gv() && !n.agentId) {
    let b = ccl(e, t),
      _ = [`Skill "/${e.name}" is available for workers.`];
    if (e.description) _.push(`Description: ${e.description}`);
    if (e.whenToUse) _.push(`When to use: ${e.whenToUse}`);
    let S = e.allowedTools ?? [];
    if (S.length > 0)
      _.push(`This skill grants workers additional tool permissions: ${S.join(", ")}`);
    _.push(`
Instruct a worker to use this skill by including "Use the /${e.name} skill" in your Agent prompt. The worker has access to the Skill tool and will receive the skill's content and permissions when it invokes it.`);
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
          uuid: s,
        }),
        Rn({
          content: A,
          isMeta: true,
        }),
      ],
      shouldQuery: true,
      disallowedTools: wN(e.disallowedTools ?? []),
      model: e.model,
      effort: e.getEffort?.(t) ?? e.effort,
      command: e,
    };
  }
  let a = await e.getPromptForCommand(t, n),
    l = !VE("hooks") || L_e(e.source);
  if (e.hooks && l) {
    let b = Rt();
    Kll(n.setAppState, b, e.hooks, e.name, e.type === "prompt" ? e.skillRoot : void 0);
  }
  let c = e.source ? `${e.source}:${e.name}` : e.name,
    u = a.filter((b) => b.type === "text").map((b) => b.text).join(`

`);
  PCt(e.name, c, u, n.agentId ?? null);
  let d = Jll(e.name);
  if (d)
    n.applyAttributionOp({
      kind: "recordVerification",
      method: d,
    });
  n.options.activeSkill = t$e(e);
  let p = ccl(e, t),
    f = wN(e.allowedTools ?? []),
    m = wN(e.disallowedTools ?? []);
  if (m.length > 0) yKn(n.setToolPermissionContext, m, "union");
  let g = o.length > 0 || r.length > 0 ? [...o, ...r, ...a] : a,
    h = await mKn(
      g6e(
        a
          .filter((b) => b.type === "text")
          .map((b) => b.text)
          .join(" "),
        n,
        null,
        [],
        {
          now: () => new Date().toISOString(),
          uuid: () => g_t.randomUUID(),
        },
        n.messages,
        "repl_main_thread",
        {
          planSlugSeed: t,
        },
      ),
    );
  return {
    messages: [
      Rn({
        content: p,
        uuid: s,
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
        model: e.model,
      }),
    ],
    shouldQuery: true,
    allowedTools: f,
    disallowedTools: m,
    model: e.model,
    effort: e.getEffort?.(t) ?? e.effort,
    command: e,
  };
}
var g_t, Gif;
