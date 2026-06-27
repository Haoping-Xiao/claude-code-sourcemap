// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module j9o
// matched 2.1.88 source: src/main.tsx
// class=modified (alt of src/main.tsx)  jaccard=0.028  score=0.6853  fileCov=0.0284
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module j9o] deps: dn, kt, Cre, Yle, cqe, a5, BI, Kv, cTt, oo, vy, Kke, At, xLe, Ls, JN, I9o
mpc = require("readline");
function ypc(e) {
  let t = e
    .command("mcp")
    .description("Configure and manage MCP servers")
    .configureHelp(LTe())
    .enablePositionalOptions();
  if (
    (t
      .command("serve")
      .description("Start the Claude Code MCP server")
      .option("-d, --debug", "Enable debug mode", () => true)
      .option("--verbose", "Override verbose mode setting from config", () => true)
      .action(async ({ debug: n, verbose: r }) => {
        let { mcpServeHandler: o } = await Promise.resolve().then(() => (cNe(), lNe));
        await o({
          debug: n,
          verbose: r,
        });
      }),
    ldc(t),
    y7())
  )
    udc(t);
  (t
    .command("remove <name>")
    .description("Remove an MCP server")
    .option(
      "-s, --scope <scope>",
      "Configuration scope (local, user, or project) - if not specified, removes from whichever scope it exists in",
    )
    .action(async (n, r) => {
      let [{ mcpRemoveHandler: o }, { createSubcommandRoot: s }] = await Promise.all([
        Promise.resolve().then(() => (cNe(), lNe)),
        Promise.resolve().then(() => (vA(), TA)),
      ]);
      return (await o(await s(), n, r), nV());
    }),
    t
      .command("list")
      .description(
        "List configured MCP servers. Unapproved .mcp.json servers are shown as \u23F8 Pending approval and not connected to; approved servers are health-checked.",
      )
      .action(async () => {
        let [{ mcpListHandler: n }, { createSubcommandRoot: r }] = await Promise.all([
          Promise.resolve().then(() => (cNe(), lNe)),
          Promise.resolve().then(() => (vA(), TA)),
        ]);
        await n(await r());
      }),
    t
      .command("get <name>")
      .description(
        "Get details about an MCP server. Unapproved .mcp.json servers are shown as \u23F8 Pending approval and not connected to; approved servers are health-checked.",
      )
      .action(async (n) => {
        let [{ mcpGetHandler: r }, { createSubcommandRoot: o }] = await Promise.all([
          Promise.resolve().then(() => (cNe(), lNe)),
          Promise.resolve().then(() => (vA(), TA)),
        ]);
        await r(await o(), n);
      }),
    t
      .command("login <name>")
      .description("Authenticate with an MCP server (HTTP, SSE, or claude.ai connector)")
      .option(
        "--no-browser",
        "Print the authorization URL instead of opening a browser (for SSH/headless sessions \u2014 paste the redirect URL back when prompted)",
      )
      .action(async (n, r) => {
        let { mcpLoginHandler: o } = await Promise.resolve().then(() => (j9o(), F9o));
        await o(n, r);
      }),
    t
      .command("logout <name>")
      .description("Clear stored OAuth credentials for an MCP server")
      .action(async (n) => {
        let { mcpLogoutHandler: r } = await Promise.resolve().then(() => (j9o(), F9o));
        await r(n);
      }),
    t
      .command("add-json <name> <json>")
      .description("Add an MCP server (stdio or SSE) with a JSON string")
      .option("-s, --scope <scope>", "Configuration scope (local, user, or project)", "local")
      .option(
        "--client-secret",
        "Prompt for OAuth client secret (or set MCP_CLIENT_SECRET env var)",
      )
      .action(async (n, r, o) => {
        let [{ mcpAddJsonHandler: s }, { createSubcommandRoot: i }] = await Promise.all([
          Promise.resolve().then(() => (cNe(), lNe)),
          Promise.resolve().then(() => (vA(), TA)),
        ]);
        return (await s(await i(), n, r, o), nV());
      }),
    t
      .command("add-from-claude-desktop")
      .description("Import MCP servers from Claude Desktop (Mac and WSL only)")
      .option("-s, --scope <scope>", "Configuration scope (local, user, or project)", "local")
      .action(async (n) => {
        let { mcpAddFromDesktopHandler: r } = await Promise.resolve().then(() => (cNe(), lNe));
        await r(n);
      }),
    t
      .command("reset-project-choices")
      .description(
        "Reset all approved and rejected project-scoped (.mcp.json) servers within this project",
      )
      .action(async () => {
        let [{ mcpResetChoicesHandler: n }, { createSubcommandRoot: r }] = await Promise.all([
          Promise.resolve().then(() => (cNe(), lNe)),
          Promise.resolve().then(() => (vA(), TA)),
        ]);
        return (await n(await r()), nV());
      }));
}
