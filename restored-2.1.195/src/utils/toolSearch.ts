// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yZn
// matched 2.1.88 source: src/utils/toolSearch.ts
// class=modified  jaccard=0.4108  score=0.6837  fileCov=0.5071
// note: deminified; 9 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module yZn] deps: Xr, Un
Pkl = new WeakMap();
var TMo = {};
_t(TMo, {
  summarizeByServerPrefix: () => summarizeByServerPrefix,
  isToolSearchToolAvailable: () => isToolSearchToolAvailable,
  isToolSearchEnabled: () => isToolSearchEnabled,
  isToolReferenceBlock: () => isToolReferenceBlock,
  isMcpLadderNonblockingEnabled: () => isMcpLadderNonblockingEnabled,
  getDeferredToolsDelta: () => getDeferredToolsDelta,
  getAutoToolSearchCharThreshold: () => getAutoToolSearchCharThreshold,
  extractDiscoveredToolNames: () => extractDiscoveredToolNames,
  DEFERRED_DELTA_LIST_CAP: () => DEFERRED_DELTA_LIST_CAP,
});
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
async function isToolSearchEnabled(e, t, n, r, o) {
  let s = On(t, (l) => l.isMcp);
  function i(l, c, u, d) {
    G("tengu_tool_search_mode_decision", {
      enabled: l,
      mode: $e(c),
      reason: u,
      checkedModel: e,
      mcpToolCount: s,
      mcpNonBlocking: Vve(),
      userType: "external",
      ...d,
    });
  }
  if (!CX(e))
    return (
      T(
        `Tool search disabled for model '${e}': model does not support tool_reference blocks. This feature is available on Claude Sonnet 4+, Opus 4+, Haiku 4.5+, and newer models.`,
      ),
      i(false, "standard", "model_unsupported"),
      false
    );
  if (!gle(e, "tool_search_server") || !gle(e, "tool_search"))
    return (
      T(`Tool search disabled: Foundry deployment for '${e}' does not support tool search.`),
      i(false, "standard", "foundry_deployment_unsupported"),
      false
    );
  if (!isToolSearchToolAvailable(t))
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
      let { enabled: l, debugDescription: c, metrics: u } = await nCf(t, n, r, e);
      if (l)
        return (
          T(`Auto tool search enabled: ${c}` + (o ? ` [source: ${o}]` : "")),
          i(true, a, "auto_above_threshold", u),
          true
        );
      return (
        T(`Auto tool search disabled: ${c}` + (o ? ` [source: ${o}]` : "")),
        i(false, a, "auto_below_threshold", u),
        false
      );
    }
    case "standard":
      return (i(false, a, "standard_mode"), false);
  }
}
function isToolReferenceBlock(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "tool_reference";
}
function eCf(e) {
  return isToolReferenceBlock(e) && "tool_name" in e && typeof e.tool_name === "string";
}
function tCf(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "type" in e &&
    e.type === "tool_result" &&
    "content" in e &&
    Array.isArray(e.content)
  );
}
function extractDiscoveredToolNames(e) {
  let t = new Set(),
    n = 0;
  for (let r of e) {
    if (r.type === "system" && r.subtype === "compact_boundary") {
      let s = r.compactMetadata?.preCompactDiscoveredTools;
      if (s) {
        for (let i of s) t.add(i);
        n += s.length;
      }
      continue;
    }
    if (r.type !== "user") continue;
    let o = r.message?.content;
    if (!Array.isArray(o)) continue;
    for (let s of o)
      if (tCf(s)) {
        for (let i of s.content) if (eCf(i)) t.add(i.tool_name);
      }
  }
  if (t.size > 0)
    T(
      `Dynamic tool loading: found ${t.size} discovered tools in message history` +
        (n > 0 ? ` (${n} carried from compact boundary)` : ""),
    );
  return t;
}
function getDeferredToolsDelta(e, t, n, r) {
  let o = new Set(),
    s = new Set(),
    i = [],
    a = 0,
    l = 0,
    c = new Set();
  for (let S of t) {
    if (S.type !== "attachment") continue;
    if ((a++, c.add(S.attachment.type), S.attachment.type !== "deferred_tools_delta")) continue;
    l++;
    let A = new Set(S.attachment.readdedNames ?? []);
    for (let v of S.attachment.addedNames) {
      if (O2t.has(v)) continue;
      if ((o.add(v), !A.has(v))) s.add(v);
    }
    for (let v of S.attachment.removedNames) o.delete(v);
    if (S.attachment.pendingMcpServers !== void 0) i = S.attachment.pendingMcpServers;
  }
  let u = e.filter(y4),
    d = new Set(u.map((S) => S.name)),
    p = new Set(e.map((S) => S.name)),
    f = u.filter((S) => !o.has(S.name)),
    m = u.filter((S) => !s.has(S.name)),
    g = f.filter((S) => s.has(S.name)).map((S) => S.name),
    h = [];
  for (let S of o) {
    if (d.has(S)) continue;
    if (!p.has(S)) h.push(S);
  }
  let y = r !== void 0 ? [...r].sort() : [],
    b = r !== void 0 && (y.length !== i.length || y.some((S, A) => S !== i[A]));
  if (f.length === 0 && h.length === 0 && m.length === 0 && !b) return null;
  let _ = Uo([...f, ...m].map((S) => S.name));
  return (
    G("tengu_deferred_tools_pool_change", {
      addedCount: f.length,
      readdedCount: g.length,
      unlistedCount: m.length,
      removedCount: h.length,
      pendingChanged: b,
      pendingCount: y.length,
      lastPendingCount: i.length,
      priorAnnouncedCount: o.size,
      messagesLength: t.length,
      attachmentCount: a,
      dtdCount: l,
      callSite: $e(n?.callSite ?? "unknown"),
      querySource: Bh(n?.querySource) ?? "unknown",
      attachmentTypesSeen: [...c].sort().join(","),
    }),
    {
      addedNames: _.sort(),
      addedLines: m.map(pso).sort(),
      removedNames: h.sort(),
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
async function nCf(e, t, n, r) {
  let o = await Qwf(e, t, n, r);
  if (o !== null) {
    let a = Mkl(r);
    return {
      enabled: o >= a,
      debugDescription: `${o} tokens (threshold: ${a}, ${CMo()}% of context)`,
      metrics: {
        deferredToolTokens: o,
        threshold: a,
      },
    };
  }
  let s = await Zwf(e, t, n, r),
    i = getAutoToolSearchCharThreshold(r);
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
