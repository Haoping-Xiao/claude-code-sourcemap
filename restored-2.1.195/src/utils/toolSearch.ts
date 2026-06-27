// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yZn
// matched 2.1.88 source: src/utils/toolSearch.ts
// class=modified  jaccard=0.4108  score=0.6837  fileCov=0.5071
// note: deminified; 12 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: summarizeByServerPrefix, isToolSearchToolAvailable, isToolSearchEnabled, isToolReferenceBlock, isMcpLadderNonblockingEnabled, getDeferredToolsDelta, getAutoToolSearchCharThreshold, extractDiscoveredToolNames, DEFERRED_DELTA_LIST_CAP
// [unwrapped __esm module yZn] deps: @modelcontextprotocol/sdk/dist/esm/types.js, services/analytics/growthbook.ts
Pkl = new WeakMap();
function CMo() {
  let e = process.env.ENABLE_TOOL_SEARCH;
  if (!e) return wMo;
  if (e === "auto") return wMo;
  let t = Foo(e);
  if (t !== null) return t;
  return wMo;
}
function Mkl(e) {
  let t = nH(e, fI(jot(e))),
    n = CMo() / 100;
  return Math.floor(t * n);
}
function getAutoToolSearchCharThreshold(e) {
  return Math.floor(Mkl(e) * Jwf);
}
function isMcpLadderNonblockingEnabled() {
  if (ml(process.env.MCP_CONNECTION_NONBLOCKING)) return false;
  return true;
}
function isToolSearchToolAvailable(e) {
  return e.some((t) => Ql(t, _h));
}
async function Zwf(e, t, n, r) {
  let o = e.filter((i) => y4(i));
  if (o.length === 0) return 0;
  return (
    await Promise.all(
      o.map(async (i) => {
        let a = await i.prompt({
            getToolPermissionContext: t,
            tools: e,
            agents: n,
            model: r,
          }),
          l = i.inputJSONSchema
            ? De(i.inputJSONSchema)
            : i.inputSchema
              ? De(aOe(i.inputSchema))
              : "";
        return i.name.length + a.length + l.length;
      }),
    )
  ).reduce((i, a) => i + a, 0);
}
async function isToolSearchEnabled(model, tools, getToolPermissionContext, agents, source) {
  let s = On(tools, (l) => l.isMcp);
  function i(l, c, u, d) {
    G("tengu_tool_search_mode_decision", {
      enabled: l,
      mode: $e(c),
      reason: u,
      checkedModel: model,
      mcpToolCount: s,
      mcpNonBlocking: Vve(),
      userType: "external",
      ...d,
    });
  }
  if (!CX(model))
    return (
      T(
        `Tool search disabled for model '${model}': model does not support tool_reference blocks. This feature is available on Claude Sonnet 4+, Opus 4+, Haiku 4.5+, and newer models.`,
      ),
      i(false, "standard", "model_unsupported"),
      false
    );
  if (!gle(model, "tool_search_server") || !gle(model, "tool_search"))
    return (
      T(`Tool search disabled: Foundry deployment for '${model}' does not support tool search.`),
      i(false, "standard", "foundry_deployment_unsupported"),
      false
    );
  if (!isToolSearchToolAvailable(tools))
    return (
      T(
        "Tool search disabled: ToolSearchTool is not available (may have been disallowed via disallowedTools).",
      ),
      i(false, "standard", "mcp_search_unavailable"),
      false
    );
  let a = V2t();
  switch (a) {
    case "tst":
      return (i(true, a, "tst_enabled"), true);
    case "tst-auto": {
      let {
        enabled: l,
        debugDescription: c,
        metrics: u,
      } = await checkAutoThreshold(tools, getToolPermissionContext, agents, model);
      if (l)
        return (
          T(`Auto tool search enabled: ${c}` + (source ? ` [source: ${source}]` : "")),
          i(true, a, "auto_above_threshold", u),
          true
        );
      return (
        T(`Auto tool search disabled: ${c}` + (source ? ` [source: ${source}]` : "")),
        i(false, a, "auto_below_threshold", u),
        false
      );
    }
    case "standard":
      return (i(false, a, "standard_mode"), false);
  }
}
function isToolReferenceBlock(obj) {
  return typeof obj === "object" && obj !== null && "type" in obj && obj.type === "tool_reference";
}
function isToolReferenceWithName(obj) {
  return isToolReferenceBlock(obj) && "tool_name" in obj && typeof obj.tool_name === "string";
}
function isToolResultBlockWithContent(obj) {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "type" in obj &&
    obj.type === "tool_result" &&
    "content" in obj &&
    Array.isArray(obj.content)
  );
}
function extractDiscoveredToolNames(messages) {
  let discoveredTools = new Set(),
    n = 0;
  for (let r of messages) {
    if (r.type === "system" && r.subtype === "compact_boundary") {
      let s = r.compactMetadata?.preCompactDiscoveredTools;
      if (s) {
        for (let i of s) discoveredTools.add(i);
        n += s.length;
      }
      continue;
    }
    if (r.type !== "user") continue;
    let o = r.message?.content;
    if (!Array.isArray(o)) continue;
    for (let s of o)
      if (isToolResultBlockWithContent(s)) {
        for (let i of s.content) if (isToolReferenceWithName(i)) discoveredTools.add(i.tool_name);
      }
  }
  if (discoveredTools.size > 0)
    T(
      `Dynamic tool loading: found ${discoveredTools.size} discovered tools in message history` +
        (n > 0 ? ` (${n} carried from compact boundary)` : ""),
    );
  return discoveredTools;
}
function getDeferredToolsDelta(tools, messages, scanContext, r) {
  let announced = new Set(),
    s = new Set(),
    i = [],
    a = 0,
    l = 0,
    c = new Set();
  for (let S of messages) {
    if (S.type !== "attachment") continue;
    if ((a++, c.add(S.attachment.type), S.attachment.type !== "deferred_tools_delta")) continue;
    l++;
    let A = new Set(S.attachment.readdedNames ?? []);
    for (let v of S.attachment.addedNames) {
      if (O2t.has(v)) continue;
      if ((announced.add(v), !A.has(v))) s.add(v);
    }
    for (let v of S.attachment.removedNames) announced.delete(v);
    if (S.attachment.pendingMcpServers !== void 0) i = S.attachment.pendingMcpServers;
  }
  let u = tools.filter(y4),
    d = new Set(u.map((S) => S.name)),
    p = new Set(tools.map((S) => S.name)),
    f = u.filter((S) => !announced.has(S.name)),
    added = u.filter((S) => !s.has(S.name)),
    g = f.filter((S) => s.has(S.name)).map((S) => S.name),
    removed = [];
  for (let S of announced) {
    if (d.has(S)) continue;
    if (!p.has(S)) removed.push(S);
  }
  let y = r !== void 0 ? [...r].sort() : [],
    b = r !== void 0 && (y.length !== i.length || y.some((S, A) => S !== i[A]));
  if (f.length === 0 && removed.length === 0 && added.length === 0 && !b) return null;
  let _ = Uo([...f, ...added].map((S) => S.name));
  return (
    G("tengu_deferred_tools_pool_change", {
      addedCount: f.length,
      readdedCount: g.length,
      unlistedCount: added.length,
      removedCount: removed.length,
      pendingChanged: b,
      pendingCount: y.length,
      lastPendingCount: i.length,
      priorAnnouncedCount: announced.size,
      messagesLength: messages.length,
      attachmentCount: a,
      dtdCount: l,
      callSite: $e(scanContext?.callSite ?? "unknown"),
      querySource: Bh(scanContext?.querySource) ?? "unknown",
      attachmentTypesSeen: [...c].sort().join(","),
    }),
    {
      addedNames: _.sort(),
      addedLines: added.map(pso).sort(),
      removedNames: removed.sort(),
      readdedNames: g.sort(),
      ...(r !== void 0 && {
        pendingMcpServers: y,
      }),
    }
  );
}
function summarizeByServerPrefix(e) {
  let t = new Map();
  for (let n of e) {
    let r = n.startsWith("mcp__") ? `${n.split("__", 2).join("__")}__*` : n;
    t.set(r, (t.get(r) ?? 0) + 1);
  }
  return [...t.entries()]
    .sort(([n], [r]) => n.localeCompare(r))
    .map(([n, r]) => (r > 1 ? `${n} (${r})` : n))
    .join(", ");
}
async function checkAutoThreshold(tools, getToolPermissionContext, agents, model) {
  let o = await Qwf(tools, getToolPermissionContext, agents, model);
  if (o !== null) {
    let a = Mkl(model);
    return {
      enabled: o >= a,
      debugDescription: `${o} tokens (threshold: ${a}, ${CMo()}% of context)`,
      metrics: {
        deferredToolTokens: o,
        threshold: a,
      },
    };
  }
  let s = await Zwf(tools, getToolPermissionContext, agents, model),
    i = getAutoToolSearchCharThreshold(model);
  return {
    enabled: s >= i,
    debugDescription: `${s} chars (threshold: ${i}, ${CMo()}% of context) (char fallback)`,
    metrics: {
      deferredToolDescriptionChars: s,
      charThreshold: i,
    },
  };
}
var wMo = 10,
  Jwf = 2.5,
  Qwf,
  DEFERRED_DELTA_LIST_CAP = 30;
