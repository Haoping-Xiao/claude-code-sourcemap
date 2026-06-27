// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZU
// matched 2.1.88 source: src/utils/analyzeContext.ts
// class=modified  jaccard=0.5229  score=0.8859  fileCov=0.5606
// note: deminified; 10 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
async function countTokensWithFallback(messages, tools) {
  try {
    let n = await P5e(messages, tools);
    if (n !== null) return n;
    T(`countTokensWithFallback: API returned null, trying haiku fallback (${tools.length} tools)`);
  } catch (n) {
    (T(`countTokensWithFallback: API failed: ${be(n)}`), ke(n));
  }
  try {
    let n = await vMo(messages, tools);
    if (n === null)
      T(`countTokensWithFallback: haiku fallback also returned null (${tools.length} tools)`);
    return n;
  } catch (n) {
    return (
      T(`countTokensWithFallback: haiku fallback failed: ${be(n)}`, {
        level: "error",
      }),
      null
    );
  }
}
async function countToolDefinitionTokens(tools, getToolPermissionContext, agentInfo, model) {
  let o = await Promise.all(
      tools.map((i) =>
        hZn(i, {
          getToolPermissionContext: getToolPermissionContext,
          tools: tools,
          agents: agentInfo?.activeAgents ?? [],
          model: model,
        }),
      ),
    ),
    s = await countTokensWithFallback([], o);
  if (s === null || s === 0) {
    let i = tools.map((a) => a.name).join(", ");
    T(
      `countToolDefinitionTokens returned ${s} for ${tools.length} tools: ${i.slice(0, 100)}${i.length > 100 ? "..." : ""}`,
    );
  }
  return s ?? 0;
}
function Bwf(e) {
  let t = e.match(/^#+\s+(.+)$/m);
  if (t) return t[1].trim();
  let n =
    e
      .split(
        `
`,
      )
      .find((r) => r.trim().length > 0) ?? "";
  return n.length > 40 ? n.slice(0, 40) + "\u2026" : n;
}
async function Uwf(e, t) {
  let n = await hH(),
    r = t ? {} : n,
    o = [
      ...e
        .filter((c) => c.length > 0 && c !== Oae)
        .map((c) => ({
          name: Bwf(c),
          content: c,
        })),
      ...Object.entries(r)
        .filter(([, c]) => c.length > 0)
        .map(([c, u]) => ({
          name: c,
          content: u,
        })),
    ],
    s = 0;
  if (t) {
    let c = await gZn(void 0),
      u = [...Object.values(n), ...Object.values(c)].filter((d) => d.length > 0).join(`
`);
    if (u.length > 0)
      s =
        (await countTokensWithFallback(
          [
            {
              role: "user",
              content: u,
            },
          ],
          [],
        )) || 0;
  }
  if (o.length < 1)
    return {
      systemPromptTokens: 0,
      systemPromptSections: [],
      redirectedContextTokens: s,
    };
  let i = await Promise.all(
      o.map(({ content: c }) =>
        countTokensWithFallback(
          [
            {
              role: "user",
              content: c,
            },
          ],
          [],
        ),
      ),
    ),
    a = o.map((c, u) => ({
      name: c.name,
      tokens: i[u] || 0,
    }));
  return {
    systemPromptTokens: i.reduce((c, u) => c + (u || 0), 0),
    systemPromptSections: a,
    redirectedContextTokens: s,
  };
}
async function Fwf() {
  if (gce())
    return {
      memoryFileDetails: [],
      claudeMdTokens: 0,
    };
  let e = yjt(await Wv()),
    t = [],
    n = 0;
  if (e.length < 1)
    return {
      memoryFileDetails: [],
      claudeMdTokens: 0,
    };
  let r = await Promise.all(
    e.map(async (o) => {
      let s = await countTokensWithFallback(
        [
          {
            role: "user",
            content: o.content,
          },
        ],
        [],
      );
      return {
        file: o,
        tokens: s || 0,
      };
    }),
  );
  for (let { file: o, tokens: s } of r)
    ((n += s),
      t.push({
        path: o.path,
        type: o.type,
        tokens: s,
      }));
  return {
    claudeMdTokens: n,
    memoryFileDetails: t,
  };
}
async function countBuiltInToolTokens(tools, getToolPermissionContext, agentInfo, model, messages) {
  let builtInTools = tools.filter((h) => !h.isMcp);
  if (builtInTools.length < 1)
    return {
      builtInToolTokens: 0,
      deferredBuiltinDetails: [],
      deferredBuiltinTokens: 0,
      systemToolDetails: [],
    };
  let { isToolSearchEnabled: i } = await Promise.resolve().then(() => (GX(), TMo)),
    { isDeferredTool: a } = await Promise.resolve().then(() => (LX(), fso)),
    l = await i(
      model ?? "",
      tools,
      getToolPermissionContext,
      agentInfo?.activeAgents ?? [],
      "analyzeBuiltIn",
    ),
    c = builtInTools.filter((h) => !a(h)),
    deferredBuiltinTools = builtInTools.filter((h) => a(h)),
    d =
      c.length > 0
        ? await countToolDefinitionTokens(c, getToolPermissionContext, agentInfo, model)
        : 0,
    p = [],
    f = [],
    m = 0,
    g = 0;
  if (deferredBuiltinTools.length > 0 && l) {
    let h = new Set();
    if (messages) {
      let b = new Set(deferredBuiltinTools.map((_) => _.name));
      for (let _ of messages)
        if (_.type === "assistant") {
          for (let S of _.message.content)
            if (
              "type" in S &&
              S.type === "tool_use" &&
              "name" in S &&
              typeof S.name === "string" &&
              b.has(S.name)
            )
              h.add(S.name);
        }
    }
    let y = await Promise.all(
      deferredBuiltinTools.map((b) =>
        countToolDefinitionTokens([b], getToolPermissionContext, agentInfo, model),
      ),
    );
    for (let [b, _] of deferredBuiltinTools.entries()) {
      let S = Math.max(0, (y[b] || 0) - pZn),
        A = h.has(_.name);
      if (
        (f.push({
          name: _.name,
          tokens: S,
          isLoaded: A,
        }),
        (g += S),
        A)
      )
        m += S;
    }
  } else if (deferredBuiltinTools.length > 0) {
    let h = await countToolDefinitionTokens(
      deferredBuiltinTools,
      getToolPermissionContext,
      agentInfo,
      model,
    );
    return {
      builtInToolTokens: d + h,
      deferredBuiltinDetails: [],
      deferredBuiltinTokens: 0,
      systemToolDetails: p,
    };
  }
  return {
    builtInToolTokens: d + m,
    deferredBuiltinDetails: f,
    deferredBuiltinTokens: g - m,
    systemToolDetails: p,
  };
}
function Dkl(e) {
  return _l(e, nE);
}
async function Gwf(e, t, n) {
  let r = await voo($t()),
    o = Dkl(e);
  if (!o)
    return {
      slashCommandTokens: 0,
      commandInfo: {
        totalCommands: 0,
        includedCommands: 0,
      },
    };
  return {
    slashCommandTokens: await countToolDefinitionTokens([o], t, n),
    commandInfo: {
      totalCommands: r.totalCommands,
      includedCommands: r.includedCommands,
    },
  };
}
async function countSkillTokens(tools, getToolPermissionContext, agentInfo, r) {
  try {
    let o = await VWe($t()),
      s = Dkl(tools);
    if (!s)
      return {
        skillTokens: 0,
        skillInfo: {
          totalSkills: 0,
          includedSkills: 0,
          skillFrontmatter: [],
        },
      };
    let i = await countToolDefinitionTokens([s], getToolPermissionContext, agentInfo),
      a = rH(r),
      l = o.map((u) => {
        let d = u.type === "prompt" ? u.source : "plugin",
          p = d === "builtin" || d === "bundled" ? "built-in" : d;
        return {
          name: xu(u),
          source: p,
          pluginName: u.type === "prompt" ? u.pluginInfo?.pluginManifest.name : void 0,
          tokens: fKt(u, a),
        };
      }),
      c = (await aC($t())).length;
    return {
      skillTokens: i,
      skillInfo: {
        totalSkills: c,
        includedSkills: o.length,
        skillFrontmatter: l,
      },
    };
  } catch (o) {
    return (
      ke(Zr(o)),
      {
        skillTokens: 0,
        skillInfo: {
          totalSkills: 0,
          includedSkills: 0,
          skillFrontmatter: [],
        },
      }
    );
  }
}
async function countMcpToolTokens(tools, getToolPermissionContext, agentInfo, model, messages) {
  let mcpTools = tools.filter((b) => b.isMcp),
    i = [],
    a = await countToolDefinitionTokens(mcpTools, getToolPermissionContext, agentInfo, model),
    l = Math.max(0, (a || 0) - pZn),
    estimates = await Promise.all(
      mcpTools.map(async (b) =>
        If(
          De({
            name: b.name,
            description: await b.prompt({
              getToolPermissionContext: getToolPermissionContext,
              tools: tools,
              agents: agentInfo?.activeAgents ?? [],
            }),
            input_schema: b.inputJSONSchema ?? {},
          }),
        ),
      ),
    ),
    u = estimates.reduce((b, _) => b + _, 0) || 1,
    d = estimates.map((b) => Math.round((b / u) * l)),
    { isToolSearchEnabled: p } = await Promise.resolve().then(() => (GX(), TMo)),
    { isDeferredTool: f } = await Promise.resolve().then(() => (LX(), fso)),
    m = await p(
      model,
      tools,
      getToolPermissionContext,
      agentInfo?.activeAgents ?? [],
      "analyzeMcp",
    ),
    loadedMcpToolNames = new Set();
  if (m && messages) {
    let b = new Set(mcpTools.map((_) => _.name));
    for (let _ of messages)
      if (_.type === "assistant") {
        for (let S of _.message.content)
          if (
            "type" in S &&
            S.type === "tool_use" &&
            "name" in S &&
            typeof S.name === "string" &&
            b.has(S.name)
          )
            loadedMcpToolNames.add(S.name);
      }
  }
  for (let [b, _] of mcpTools.entries())
    i.push({
      name: _.name,
      serverName: _.name.split("__")[1] || "unknown",
      tokens: d[b],
      isLoaded: loadedMcpToolNames.has(_.name) || !f(_),
    });
  let h = 0,
    y = 0;
  for (let b of i)
    if (b.isLoaded) h += b.tokens;
    else if (m) y += b.tokens;
  return {
    mcpToolTokens: m ? h : l,
    mcpToolDetails: i,
    deferredToolTokens: y,
    loadedMcpToolNames: loadedMcpToolNames,
  };
}
async function Vwf(e) {
  let customAgents = e.activeAgents.filter((s) => s.source !== "built-in"),
    n = [],
    r = 0,
    o = await Promise.all(
      customAgents.map((s) =>
        countTokensWithFallback(
          [
            {
              role: "user",
              content: [s.agentType, s.whenToUse].join(" "),
            },
          ],
          [],
        ),
      ),
    );
  for (let [s, i] of customAgents.entries()) {
    let a = o[s] || 0;
    ((r += a || 0),
      n.push({
        agentType: i.agentType,
        source: i.source,
        tokens: a || 0,
      }));
  }
  return {
    agentTokens: r,
    agentDetails: n,
  };
}
function zwf(e, t) {
  for (let n of e.message.content) {
    let r = De(n),
      o = If(r);
    if ("type" in n && n.type === "tool_use") {
      t.toolCallTokens += o;
      let s = ("name" in n ? n.name : void 0) || "unknown";
      t.toolCallsByType.set(s, (t.toolCallsByType.get(s) || 0) + o);
    } else t.assistantMessageTokens += o;
  }
}
function processUserMessage(msg, breakdown, toolUseIdToName) {
  if (typeof msg.message.content === "string") {
    let r = If(msg.message.content);
    breakdown.userMessageTokens += r;
    return;
  }
  for (let r of msg.message.content) {
    let o = De(r),
      s = If(o);
    if ("type" in r && r.type === "tool_result") {
      breakdown.toolResultTokens += s;
      let i = "tool_use_id" in r ? r.tool_use_id : void 0,
        a = (i ? toolUseIdToName.get(i) : void 0) || "unknown";
      breakdown.toolResultsByType.set(a, (breakdown.toolResultsByType.get(a) || 0) + s);
    } else breakdown.userMessageTokens += s;
  }
}
function Ywf(e, t) {
  let n = De(e.attachment),
    r = If(n);
  t.attachmentTokens += r;
  let o = e.attachment.type || "unknown";
  t.attachmentsByType.set(o, (t.attachmentsByType.get(o) || 0) + r);
}
async function approximateMessageTokens(messages, t) {
  let n = {
      totalTokens: 0,
      toolCallTokens: 0,
      toolResultTokens: 0,
      attachmentTokens: 0,
      assistantMessageTokens: 0,
      userMessageTokens: 0,
      toolCallsByType: new Map(),
      toolResultsByType: new Map(),
      attachmentsByType: new Map(),
    },
    r = new Map();
  for (let s of messages)
    if (s.type === "assistant") {
      for (let i of s.message.content)
        if ("type" in i && i.type === "tool_use") {
          let a = "id" in i ? i.id : void 0,
            l = ("name" in i ? i.name : void 0) || "unknown";
          if (a) r.set(a, l);
        }
    }
  for (let s of messages)
    if (s.type === "assistant") zwf(s, n);
    else if (s.type === "user") processUserMessage(s, n, r);
    else if (s.type === "attachment") Ywf(s, n);
  let o = t
    ? 0
    : await countTokensWithFallback(
        lk(messages).map((s) => {
          if (s.type === "assistant")
            return {
              role: "assistant",
              content: s.message.content,
            };
          return s.message;
        }),
        [],
      );
  return ((n.totalTokens = o ?? 0), n);
}
async function analyzeContextUsage(
  messages,
  model,
  getToolPermissionContext,
  tools,
  agentDefinitions,
  terminalWidth,
  toolUseContext,
  mainThreadAgentDefinition,
  originalMessages,
  c,
  u,
) {
  let d = VR({
      permissionMode: (await getToolPermissionContext()).mode,
      mainLoopModel: model,
    }),
    p = pC() ? c : void 0,
    { window: f, source: m } = A4(d, p),
    g = await DL(tools, d, void 0, {
      excludeDynamicSections: u,
    }),
    h = Z5({
      mainThreadAgentDefinition: mainThreadAgentDefinition,
      toolUseContext: toolUseContext ?? {
        options: {},
      },
      customSystemPrompt: toolUseContext?.options.customSystemPrompt,
      defaultSystemPrompt: g,
      appendSystemPrompt: toolUseContext?.options.appendSystemPrompt,
    }),
    y = originalMessages ?? messages,
    apiUsage = Kct(y),
    _ =
      apiUsage &&
      apiUsage.input_tokens +
        apiUsage.cache_creation_input_tokens +
        apiUsage.cache_read_input_tokens >
        0
        ? apiUsage
        : null,
    S = _ ? _.input_tokens + _.cache_creation_input_tokens + _.cache_read_input_tokens : null,
    [
      { systemPromptTokens: A, systemPromptSections: v, redirectedContextTokens: C },
      { claudeMdTokens: x, memoryFileDetails: I },
      {
        builtInToolTokens: k,
        deferredBuiltinDetails: D,
        deferredBuiltinTokens: P,
        systemToolDetails: O,
      },
      { mcpToolTokens: L, mcpToolDetails: M, deferredToolTokens: N },
      { agentTokens: B, agentDetails: $ },
      { slashCommandTokens: q, commandInfo: commandInfo },
      messageBreakdown,
    ] = await Promise.all([
      Uwf(h, u && toolUseContext?.options.customSystemPrompt === void 0),
      Fwf(),
      countBuiltInToolTokens(tools, getToolPermissionContext, agentDefinitions, d, messages),
      countMcpToolTokens(tools, getToolPermissionContext, agentDefinitions, d, messages),
      Vwf(agentDefinitions),
      Gwf(tools, getToolPermissionContext, agentDefinitions),
      approximateMessageTokens(messages, S !== null),
    ]),
    skillInfo = (await countSkillTokens(tools, getToolPermissionContext, agentDefinitions, d))
      .skillInfo,
    K = skillInfo.skillFrontmatter.reduce((Et, ct) => Et + ct.tokens, 0),
    Z = messageBreakdown.totalTokens + C,
    J = pC(),
    ne = J ? are(model, p) - lia : void 0,
    cats = [];
  if (A > 0)
    cats.push({
      name: "System prompt",
      tokens: A,
      color: "promptBorder",
    });
  let re = k - K;
  if (re > 0)
    cats.push({
      name: "System tools",
      tokens: re,
      color: "inactive",
    });
  if (L > 0)
    cats.push({
      name: "MCP tools",
      tokens: L,
      color: "cyan_FOR_SUBAGENTS_ONLY",
    });
  if (N > 0)
    cats.push({
      name: "MCP tools (deferred)",
      tokens: N,
      color: "inactive",
      isDeferred: true,
    });
  if (P > 0)
    cats.push({
      name: "System tools (deferred)",
      tokens: P,
      color: "inactive",
      isDeferred: true,
    });
  if (B > 0)
    cats.push({
      name: "Custom agents",
      tokens: B,
      color: "permission",
    });
  if (x > 0)
    cats.push({
      name: "Memory files",
      tokens: x,
      color: "claude",
    });
  if (K > 0)
    cats.push({
      name: "Skills",
      tokens: K,
      color: "warning",
    });
  let ee = 0,
    ce;
  if (!(J && m === "auto")) {
    if (J && ne !== void 0) ((ee = f - ne), (ce = RESERVED_CATEGORY_NAME));
    else if (!J) ((ee = cia), (ce = MANUAL_COMPACT_BUFFER_NAME));
  }
  if (S !== null) {
    let Et = cats.reduce((gt, st) => gt + (st.isDeferred ? 0 : st.tokens), 0),
      ct = f - Et - ee,
      Je = via(y, rH(d));
    Z = Math.max(0, Math.min(Math.max(0, S - Et) + Je, ct));
  }
  let de = Math.max(
    0,
    Z -
      messageBreakdown.toolCallTokens -
      messageBreakdown.toolResultTokens -
      messageBreakdown.attachmentTokens -
      messageBreakdown.assistantMessageTokens -
      messageBreakdown.userMessageTokens -
      C,
  );
  if (Z > 0)
    cats.push({
      name: "Messages",
      tokens: Z,
      color: "purple_FOR_SUBAGENTS_ONLY",
    });
  let Ee = cats.reduce((Et, ct) => Et + (ct.isDeferred ? 0 : ct.tokens), 0);
  if (ce)
    cats.push({
      name: ce,
      tokens: ee,
      color: "inactive",
    });
  let me = Math.max(0, f - Ee - ee);
  cats.push({
    name: "Free space",
    tokens: me,
    color: "promptBorder",
  });
  let pe = S ?? Ee,
    ge = terminalWidth && terminalWidth < 80,
    he = f >= 1000000 /* 1e6 */ ? (ge ? 5 : 20) : ge ? 5 : 10,
    ie = f >= 1000000 /* 1e6 */ ? 10 : ge ? 5 : 10,
    le = he * ie,
    ye = cats
      .filter((Et) => !Et.isDeferred)
      .map((Et) => ({
        ...Et,
        squares:
          Et.name === "Free space"
            ? Math.round((Et.tokens / f) * le)
            : Math.max(1, Math.round((Et.tokens / f) * le)),
        percentageOfTotal: Math.round((Et.tokens / f) * 100),
      }));
  function ue(Et) {
    let ct = [],
      Je = (Et.tokens / f) * le,
      gt = Math.floor(Je),
      st = Je - gt;
    for (let xt = 0; xt < Et.squares; xt++) {
      let vt = 1;
      if (xt === gt && st > 0) vt = st;
      ct.push({
        color: Et.color,
        isFilled: true,
        categoryName: Et.name,
        tokens: Et.tokens,
        percentage: Et.percentageOfTotal,
        squareFullness: vt,
      });
    }
    return ct;
  }
  let gridSquares = [],
    Ce = ye.find(
      (Et) => Et.name === RESERVED_CATEGORY_NAME || Et.name === MANUAL_COMPACT_BUFFER_NAME,
    ),
    Ie = ye.filter(
      (Et) =>
        Et.name !== RESERVED_CATEGORY_NAME &&
        Et.name !== MANUAL_COMPACT_BUFFER_NAME &&
        Et.name !== "Free space",
    );
  for (let Et of Ie) {
    let ct = ue(Et);
    for (let Je of ct) if (gridSquares.length < le) gridSquares.push(Je);
  }
  let Ve = Ce ? Ce.squares : 0,
    Ze = cats.find((Et) => Et.name === "Free space"),
    Be = le - Ve;
  while (gridSquares.length < Be)
    gridSquares.push({
      color: "promptBorder",
      isFilled: true,
      categoryName: "Free space",
      tokens: Ze?.tokens || 0,
      percentage: Ze ? Math.round((Ze.tokens / f) * 100) : 0,
      squareFullness: 1,
    });
  if (Ce) {
    let Et = ue(Ce);
    for (let ct of Et) if (gridSquares.length < le) gridSquares.push(ct);
  }
  let Me = [];
  for (let Et = 0; Et < ie; Et++) Me.push(gridSquares.slice(Et * he, (Et + 1) * he));
  let toolsMap = new Map();
  for (let [Et, ct] of messageBreakdown.toolCallsByType.entries()) {
    let Je = toolsMap.get(Et) || {
      callTokens: 0,
      resultTokens: 0,
    };
    toolsMap.set(Et, {
      ...Je,
      callTokens: ct,
    });
  }
  for (let [Et, ct] of messageBreakdown.toolResultsByType.entries()) {
    let Je = toolsMap.get(Et) || {
      callTokens: 0,
      resultTokens: 0,
    };
    toolsMap.set(Et, {
      ...Je,
      resultTokens: ct,
    });
  }
  let tt = Array.from(toolsMap.entries())
      .map(([Et, { callTokens: ct, resultTokens: Je }]) => ({
        name: Et,
        callTokens: ct,
        resultTokens: Je,
      }))
      .sort((Et, ct) => ct.callTokens + ct.resultTokens - (Et.callTokens + Et.resultTokens)),
    bt = Array.from(messageBreakdown.attachmentsByType.entries())
      .map(([Et, ct]) => ({
        name: Et,
        tokens: ct,
      }))
      .sort((Et, ct) => ct.tokens - Et.tokens),
    Ke = {
      toolCallTokens: messageBreakdown.toolCallTokens,
      toolResultTokens: messageBreakdown.toolResultTokens,
      attachmentTokens: messageBreakdown.attachmentTokens,
      assistantMessageTokens: messageBreakdown.assistantMessageTokens,
      userMessageTokens: messageBreakdown.userMessageTokens,
      redirectedContextTokens: C,
      unattributedTokens: de,
      toolCallsByType: tt,
      attachmentsByType: bt,
    };
  return {
    categories: cats,
    totalTokens: pe,
    maxTokens: f,
    rawMaxTokens: f,
    autocompactSource: m,
    percentage: Math.round((pe / f) * 100),
    gridRows: Me,
    model: d,
    memoryFiles: I,
    mcpTools: M,
    deferredBuiltinTools: void 0,
    systemTools: void 0,
    systemPromptSections: void 0,
    agents: $,
    slashCommands:
      q > 0
        ? {
            totalCommands: commandInfo.totalCommands,
            includedCommands: commandInfo.includedCommands,
            tokens: q,
          }
        : void 0,
    skills:
      K > 0
        ? {
            totalSkills: skillInfo.totalSkills,
            includedSkills: skillInfo.includedSkills,
            tokens: K,
            skillFrontmatter: skillInfo.skillFrontmatter,
          }
        : void 0,
    autoCompactThreshold: ne,
    isAutoCompactEnabled: J,
    messageBreakdown: Ke,
    apiUsage: _,
  };
}
var RESERVED_CATEGORY_NAME = "Autocompact buffer",
  MANUAL_COMPACT_BUFFER_NAME = "Compact buffer",
  pZn = 500;
