// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZU
// matched 2.1.88 source: src/utils/analyzeContext.ts
// class=modified  jaccard=0.4985  score=0.9362  fileCov=0.516
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var ZU = E(() => {
  rio();
  EMo();
  ria();
  iia();
  rio();
  EMo();
});
async function ISt(e, t) {
  try {
    let n = await P5e(e, t);
    if (n !== null) return n;
    T(`countTokensWithFallback: API returned null, trying haiku fallback (${t.length} tools)`);
  } catch (n) {
    (T(`countTokensWithFallback: API failed: ${be(n)}`), ke(n));
  }
  try {
    let n = await vMo(e, t);
    if (n === null)
      T(`countTokensWithFallback: haiku fallback also returned null (${t.length} tools)`);
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
async function iOe(e, t, n, r) {
  let o = await Promise.all(
      e.map((i) =>
        hZn(i, {
          getToolPermissionContext: t,
          tools: e,
          agents: n?.activeAgents ?? [],
          model: r,
        }),
      ),
    ),
    s = await ISt([], o);
  if (s === null || s === 0) {
    let i = e.map((a) => a.name).join(", ");
    T(
      `countToolDefinitionTokens returned ${s} for ${e.length} tools: ${i.slice(0, 100)}${i.length > 100 ? "..." : ""}`,
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
        (await ISt(
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
        ISt(
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
      let s = await ISt(
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
async function jwf(e, t, n, r, o) {
  let s = e.filter((h) => !h.isMcp);
  if (s.length < 1)
    return {
      builtInToolTokens: 0,
      deferredBuiltinDetails: [],
      deferredBuiltinTokens: 0,
      systemToolDetails: [],
    };
  let { isToolSearchEnabled: i } = await Promise.resolve().then(() => (GX(), TMo)),
    { isDeferredTool: a } = await Promise.resolve().then(() => (LX(), fso)),
    l = await i(r ?? "", e, t, n?.activeAgents ?? [], "analyzeBuiltIn"),
    c = s.filter((h) => !a(h)),
    u = s.filter((h) => a(h)),
    d = c.length > 0 ? await iOe(c, t, n, r) : 0,
    p = [],
    f = [],
    m = 0,
    g = 0;
  if (u.length > 0 && l) {
    let h = new Set();
    if (o) {
      let b = new Set(u.map((_) => _.name));
      for (let _ of o)
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
    let y = await Promise.all(u.map((b) => iOe([b], t, n, r)));
    for (let [b, _] of u.entries()) {
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
  } else if (u.length > 0) {
    let h = await iOe(u, t, n, r);
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
    slashCommandTokens: await iOe([o], t, n),
    commandInfo: {
      totalCommands: r.totalCommands,
      includedCommands: r.includedCommands,
    },
  };
}
async function Wwf(e, t, n, r) {
  try {
    let o = await VWe($t()),
      s = Dkl(e);
    if (!s)
      return {
        skillTokens: 0,
        skillInfo: {
          totalSkills: 0,
          includedSkills: 0,
          skillFrontmatter: [],
        },
      };
    let i = await iOe([s], t, n),
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
async function qwf(e, t, n, r, o) {
  let s = e.filter((b) => b.isMcp),
    i = [],
    a = await iOe(s, t, n, r),
    l = Math.max(0, (a || 0) - pZn),
    c = await Promise.all(
      s.map(async (b) =>
        If(
          De({
            name: b.name,
            description: await b.prompt({
              getToolPermissionContext: t,
              tools: e,
              agents: n?.activeAgents ?? [],
            }),
            input_schema: b.inputJSONSchema ?? {},
          }),
        ),
      ),
    ),
    u = c.reduce((b, _) => b + _, 0) || 1,
    d = c.map((b) => Math.round((b / u) * l)),
    { isToolSearchEnabled: p } = await Promise.resolve().then(() => (GX(), TMo)),
    { isDeferredTool: f } = await Promise.resolve().then(() => (LX(), fso)),
    m = await p(r, e, t, n?.activeAgents ?? [], "analyzeMcp"),
    g = new Set();
  if (m && o) {
    let b = new Set(s.map((_) => _.name));
    for (let _ of o)
      if (_.type === "assistant") {
        for (let S of _.message.content)
          if (
            "type" in S &&
            S.type === "tool_use" &&
            "name" in S &&
            typeof S.name === "string" &&
            b.has(S.name)
          )
            g.add(S.name);
      }
  }
  for (let [b, _] of s.entries())
    i.push({
      name: _.name,
      serverName: _.name.split("__")[1] || "unknown",
      tokens: d[b],
      isLoaded: g.has(_.name) || !f(_),
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
    loadedMcpToolNames: g,
  };
}
async function Vwf(e) {
  let t = e.activeAgents.filter((s) => s.source !== "built-in"),
    n = [],
    r = 0,
    o = await Promise.all(
      t.map((s) =>
        ISt(
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
  for (let [s, i] of t.entries()) {
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
function Kwf(e, t, n) {
  if (typeof e.message.content === "string") {
    let r = If(e.message.content);
    t.userMessageTokens += r;
    return;
  }
  for (let r of e.message.content) {
    let o = De(r),
      s = If(o);
    if ("type" in r && r.type === "tool_result") {
      t.toolResultTokens += s;
      let i = "tool_use_id" in r ? r.tool_use_id : void 0,
        a = (i ? n.get(i) : void 0) || "unknown";
      t.toolResultsByType.set(a, (t.toolResultsByType.get(a) || 0) + s);
    } else t.userMessageTokens += s;
  }
}
function Ywf(e, t) {
  let n = De(e.attachment),
    r = If(n);
  t.attachmentTokens += r;
  let o = e.attachment.type || "unknown";
  t.attachmentsByType.set(o, (t.attachmentsByType.get(o) || 0) + r);
}
async function Xwf(e, t) {
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
  for (let s of e)
    if (s.type === "assistant") {
      for (let i of s.message.content)
        if ("type" in i && i.type === "tool_use") {
          let a = "id" in i ? i.id : void 0,
            l = ("name" in i ? i.name : void 0) || "unknown";
          if (a) r.set(a, l);
        }
    }
  for (let s of e)
    if (s.type === "assistant") zwf(s, n);
    else if (s.type === "user") Kwf(s, n, r);
    else if (s.type === "attachment") Ywf(s, n);
  let o = t
    ? 0
    : await ISt(
        lk(e).map((s) => {
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
async function fZn(e, t, n, r, o, s, i, a, l, c, u) {
  let d = VR({
      permissionMode: (await n()).mode,
      mainLoopModel: t,
    }),
    p = pC() ? c : void 0,
    { window: f, source: m } = A4(d, p),
    g = await DL(r, d, void 0, {
      excludeDynamicSections: u,
    }),
    h = Z5({
      mainThreadAgentDefinition: a,
      toolUseContext: i ?? {
        options: {},
      },
      customSystemPrompt: i?.options.customSystemPrompt,
      defaultSystemPrompt: g,
      appendSystemPrompt: i?.options.appendSystemPrompt,
    }),
    y = l ?? e,
    b = Kct(y),
    _ =
      b && b.input_tokens + b.cache_creation_input_tokens + b.cache_read_input_tokens > 0
        ? b
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
      { slashCommandTokens: q, commandInfo: W },
      V,
    ] = await Promise.all([
      Uwf(h, u && i?.options.customSystemPrompt === void 0),
      Fwf(),
      jwf(r, n, o, d, e),
      qwf(r, n, o, d, e),
      Vwf(o),
      Gwf(r, n, o),
      Xwf(e, S !== null),
    ]),
    z = (await Wwf(r, n, o, d)).skillInfo,
    K = z.skillFrontmatter.reduce((Et, ct) => Et + ct.tokens, 0),
    Z = V.totalTokens + C,
    J = pC(),
    ne = J ? are(t, p) - lia : void 0,
    oe = [];
  if (A > 0)
    oe.push({
      name: "System prompt",
      tokens: A,
      color: "promptBorder",
    });
  let re = k - K;
  if (re > 0)
    oe.push({
      name: "System tools",
      tokens: re,
      color: "inactive",
    });
  if (L > 0)
    oe.push({
      name: "MCP tools",
      tokens: L,
      color: "cyan_FOR_SUBAGENTS_ONLY",
    });
  if (N > 0)
    oe.push({
      name: "MCP tools (deferred)",
      tokens: N,
      color: "inactive",
      isDeferred: true,
    });
  if (P > 0)
    oe.push({
      name: "System tools (deferred)",
      tokens: P,
      color: "inactive",
      isDeferred: true,
    });
  if (B > 0)
    oe.push({
      name: "Custom agents",
      tokens: B,
      color: "permission",
    });
  if (x > 0)
    oe.push({
      name: "Memory files",
      tokens: x,
      color: "claude",
    });
  if (K > 0)
    oe.push({
      name: "Skills",
      tokens: K,
      color: "warning",
    });
  let ee = 0,
    ce;
  if (!(J && m === "auto")) {
    if (J && ne !== void 0) ((ee = f - ne), (ce = AMo));
    else if (!J) ((ee = cia), (ce = HMo));
  }
  if (S !== null) {
    let Et = oe.reduce((gt, st) => gt + (st.isDeferred ? 0 : st.tokens), 0),
      ct = f - Et - ee,
      Je = via(y, rH(d));
    Z = Math.max(0, Math.min(Math.max(0, S - Et) + Je, ct));
  }
  let de = Math.max(
    0,
    Z -
      V.toolCallTokens -
      V.toolResultTokens -
      V.attachmentTokens -
      V.assistantMessageTokens -
      V.userMessageTokens -
      C,
  );
  if (Z > 0)
    oe.push({
      name: "Messages",
      tokens: Z,
      color: "purple_FOR_SUBAGENTS_ONLY",
    });
  let Ee = oe.reduce((Et, ct) => Et + (ct.isDeferred ? 0 : ct.tokens), 0);
  if (ce)
    oe.push({
      name: ce,
      tokens: ee,
      color: "inactive",
    });
  let me = Math.max(0, f - Ee - ee);
  oe.push({
    name: "Free space",
    tokens: me,
    color: "promptBorder",
  });
  let pe = S ?? Ee,
    ge = s && s < 80,
    he = f >= 1000000 /* 1e6 */ ? (ge ? 5 : 20) : ge ? 5 : 10,
    ie = f >= 1000000 /* 1e6 */ ? 10 : ge ? 5 : 10,
    le = he * ie,
    ye = oe
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
  let we = [],
    Ce = ye.find((Et) => Et.name === AMo || Et.name === HMo),
    Ie = ye.filter((Et) => Et.name !== AMo && Et.name !== HMo && Et.name !== "Free space");
  for (let Et of Ie) {
    let ct = ue(Et);
    for (let Je of ct) if (we.length < le) we.push(Je);
  }
  let Ve = Ce ? Ce.squares : 0,
    Ze = oe.find((Et) => Et.name === "Free space"),
    Be = le - Ve;
  while (we.length < Be)
    we.push({
      color: "promptBorder",
      isFilled: true,
      categoryName: "Free space",
      tokens: Ze?.tokens || 0,
      percentage: Ze ? Math.round((Ze.tokens / f) * 100) : 0,
      squareFullness: 1,
    });
  if (Ce) {
    let Et = ue(Ce);
    for (let ct of Et) if (we.length < le) we.push(ct);
  }
  let Me = [];
  for (let Et = 0; Et < ie; Et++) Me.push(we.slice(Et * he, (Et + 1) * he));
  let Ue = new Map();
  for (let [Et, ct] of V.toolCallsByType.entries()) {
    let Je = Ue.get(Et) || {
      callTokens: 0,
      resultTokens: 0,
    };
    Ue.set(Et, {
      ...Je,
      callTokens: ct,
    });
  }
  for (let [Et, ct] of V.toolResultsByType.entries()) {
    let Je = Ue.get(Et) || {
      callTokens: 0,
      resultTokens: 0,
    };
    Ue.set(Et, {
      ...Je,
      resultTokens: ct,
    });
  }
  let tt = Array.from(Ue.entries())
      .map(([Et, { callTokens: ct, resultTokens: Je }]) => ({
        name: Et,
        callTokens: ct,
        resultTokens: Je,
      }))
      .sort((Et, ct) => ct.callTokens + ct.resultTokens - (Et.callTokens + Et.resultTokens)),
    bt = Array.from(V.attachmentsByType.entries())
      .map(([Et, ct]) => ({
        name: Et,
        tokens: ct,
      }))
      .sort((Et, ct) => ct.tokens - Et.tokens),
    Ke = {
      toolCallTokens: V.toolCallTokens,
      toolResultTokens: V.toolResultTokens,
      attachmentTokens: V.attachmentTokens,
      assistantMessageTokens: V.assistantMessageTokens,
      userMessageTokens: V.userMessageTokens,
      redirectedContextTokens: C,
      unattributedTokens: de,
      toolCallsByType: tt,
      attachmentsByType: bt,
    };
  return {
    categories: oe,
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
            totalCommands: W.totalCommands,
            includedCommands: W.includedCommands,
            tokens: q,
          }
        : void 0,
    skills:
      K > 0
        ? {
            totalSkills: z.totalSkills,
            includedSkills: z.includedSkills,
            tokens: K,
            skillFrontmatter: z.skillFrontmatter,
          }
        : void 0,
    autoCompactThreshold: ne,
    isAutoCompactEnabled: J,
    messageBreakdown: Ke,
    apiUsage: _,
  };
}
var AMo = "Autocompact buffer",
  HMo = "Compact buffer",
  pZn = 500;
