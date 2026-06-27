// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module m4o
// matched 2.1.88 source: src/utils/plugins/refresh.ts
// class=modified  jaccard=0.4017  score=0.6511  fileCov=0.5119
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
async function refreshActivePlugins(e) {
  (T("refreshActivePlugins: clearing all plugin caches"), vRl(), Ah(), Mtl());
  let t = await OT();
  mMa();
  let [n, r] = await Promise.all([Vze(), CP(yr())]),
    { enabled: o, disabled: s, errors: i, warnings: a } = t,
    [l, c] = await Promise.all([
      Promise.all(
        o.map(async (g) => {
          if (g.mcpServers) return Object.keys(g.mcpServers).length;
          let h = await wre(g, i);
          if (h) g.mcpServers = h;
          return h ? Object.keys(h).length : 0;
        }),
      ),
      Promise.all(
        o.map(async (g) => {
          if (g.lspServers) return Object.keys(g.lspServers).length;
          let h = await Mqe(g, i);
          if (h) g.lspServers = h;
          return h ? Object.keys(h).length : 0;
        }),
      ),
    ]),
    u = l.reduce((g, h) => g + h, 0),
    d = c.reduce((g, h) => g + h, 0),
    p = [...a, ...p2n(o)];
  (e((g) => ({
    ...g,
    plugins: {
      ...g.plugins,
      enabled: o,
      disabled: s,
      commands: n,
      errors: mergePluginErrors(g.plugins.errors, i),
      warnings: B9f(g.plugins.warnings, p),
      needsRefresh: false,
    },
    agentDefinitions: r,
    mcp: {
      ...g.mcp,
      pluginReconnectKey: g.mcp.pluginReconnectKey + 1,
    },
  })),
    I2n());
  let f = false;
  try {
    await bSe();
  } catch (g) {
    ((f = true), ke(g), T(`refreshActivePlugins: loadPluginHooks failed: ${be(g)}`));
  }
  let m = o.reduce((g, h) => {
    if (!h.hooksConfig) return g;
    return (
      g +
      Object.values(h.hooksConfig).reduce(
        (y, b) => y + (b?.reduce((_, S) => _ + S.hooks.length, 0) ?? 0),
        0,
      )
    );
  }, 0);
  return (
    rF.emit(),
    T(
      `refreshActivePlugins: ${o.length} enabled, ${n.length} commands, ${r.allAgents.length} agents, ${m} hooks, ${u} MCP, ${d} LSP`,
    ),
    {
      enabled_count: o.length,
      disabled_count: s.length,
      command_count: n.length,
      agent_count: r.allAgents.length,
      hook_count: m,
      mcp_count: u,
      lsp_count: d,
      error_count: i.length + (f ? 1 : 0),
      errors: i,
      warnings: p,
      agentDefinitions: r,
      pluginCommands: n,
    }
  );
}
function mergePluginErrors(e, t) {
  let n = e.filter((s) => s.source === "lsp-manager" || s.source.startsWith("plugin:")),
    r = new Set(t.map(errorKey));
  return [...n.filter((s) => !r.has(errorKey(s))), ...t];
}
function errorKey(e) {
  return e.type === "generic-error"
    ? `generic-error:${e.source}:${e.error}`
    : `${e.type}:${e.source}`;
}
function B9f(e, t) {
  let n = e.filter((s) => s.source.startsWith("plugin:")),
    r = new Set(t.map((s) => `${s.type}:${s.source}`));
  return [...n.filter((s) => !r.has(`${s.type}:${s.source}`)), ...t];
}
async function P7l(e) {
  let t = new Set(e.mcpClients.filter((l) => l.config.pluginSource !== void 0).map((l) => l.name)),
    n = await bdo(e.dynamicMcpConfig ?? {}),
    r = [...n].filter((l) => !t.has(l)).sort(),
    o = [...t].filter((l) => !n.has(l)).sort(),
    s = r.length > 0 || o.length > 0,
    i = o$() && CX(e.model),
    a = s && !i && Gb() > 0;
  return {
    mcpServersAdded: r,
    mcpServersRemoved: o,
    toolSearchEnabled: i,
    wouldInvalidateCache: a,
  };
}
function M7l(e, t) {
  G("tengu_reload_plugins_cache_impact", {
    mcp_changed: e.mcpServersAdded.length > 0 || e.mcpServersRemoved.length > 0,
    tool_search_on: e.toolSearchEnabled,
    warned: t.warned,
    forced: t.forced,
  });
}
