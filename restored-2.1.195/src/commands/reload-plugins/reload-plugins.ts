// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zsr
// matched 2.1.88 source: src/commands/reload-plugins/reload-plugins.ts
// class=modified  jaccard=0.0772  score=0.1368  fileCov=0.1505
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
function lZ(e, t) {
  return `${e} ${bn(e, t)}`;
}
function F9f(e) {
  let t = [...e.added, ...e.removed],
    [n] = t;
  return (
    `This reload changes MCP tools (${t.length === 1 && n !== void 0 ? n.split(":").slice(2).join(":") || n : `${t.length} MCP servers`}) \u2014 your next message will re-read ` +
    "the whole conversation instead of using the cache. Run /reload-plugins --force to apply."
  );
}
var call = async (_args, context) => {
  if (NA()) {
    let u = await Ju().sendControlRequest({
        subtype: "reload_plugins",
      }),
      p = `Reloaded on remote: ${[lZ(u.plugins.length, "plugin"), lZ(u.commands.length, "skill"), lZ(u.agents.length, "agent"), lZ(u.mcpServers.length, "plugin MCP server")].join(" \xB7 ")}`;
    if (u.error_count > 0)
      p += `
${lZ(u.error_count, "error")} during load. Run /doctor on the remote for details.`;
    return {
      type: "text",
      value: p,
    };
  }
  let n = _args
      .trim()
      .split(/\s+/)
      .some((u) => u === "--force" || u === "force"),
    r = await P7l({
      model: context.options.mainLoopModel,
      mcpClients: context.getAppState().mcp.clients,
      dynamicMcpConfig: context.options.dynamicMcpConfig,
    }),
    o = r.wouldInvalidateCache && !n;
  if (
    (M7l(r, {
      warned: o,
      forced: n,
    }),
    o)
  )
    return {
      type: "text",
      value: F9f({
        added: r.mcpServersAdded,
        removed: r.mcpServersRemoved,
      }),
    };
  let s = await iTe(context.setAppState),
    i = "",
    a = await MHe(s.errors);
  if (a.installed.length > 0)
    ((i = `${rue(a.installed)} resolved`), (s = await iTe(context.setAppState)));
  let c = `Reloaded: ${[lZ(s.enabled_count, "plugin"), lZ(s.command_count, "skill"), lZ(s.agent_count, "agent"), lZ(s.hook_count, "hook"), lZ(s.mcp_count, "plugin MCP server"), lZ(s.lsp_count, "plugin LSP server")].join(" \xB7 ")}${i}`;
  if (s.error_count > 0)
    c += `
${lZ(s.error_count, "error")} during load. Run /doctor for details.`;
  return {
    type: "text",
    value: c,
  };
};
