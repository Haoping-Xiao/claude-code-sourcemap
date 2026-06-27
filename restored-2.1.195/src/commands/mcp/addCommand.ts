// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jcr
// matched 2.1.88 source: src/commands/mcp/addCommand.ts
// class=modified  jaccard=0.4644  score=0.7934  fileCov=0.5283
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function ldc(e) {
  e.command("add <name> <commandOrUrl> [args...]")
    .description(
      `Add an MCP server to Claude Code.

Examples:
  # Add HTTP server:
  claude mcp add --transport http sentry https://mcp.sentry.dev/mcp

  # Add HTTP server with headers:
  claude mcp add --transport http corridor https://app.corridor.dev/api/mcp --header "Authorization: Bearer ..."

  # Add stdio server with environment variables:
  claude mcp add my-server -e API_KEY=xxx -- npx my-mcp-server

  # Add stdio server with subprocess flags:
  claude mcp add my-server -- my-command --some-flag arg1`,
    )
    .option("-s, --scope <scope>", "Configuration scope (local, user, or project)", "local")
    .option(
      "-t, --transport <transport>",
      "Transport type (stdio, sse, http). Defaults to stdio if not specified.",
    )
    .option("-e, --env <env...>", "Set environment variables (e.g. -e KEY=value)")
    .option(
      "-H, --header <header...>",
      'Set WebSocket headers (e.g. -H "X-Api-Key: abc123" -H "X-Custom: value")',
    )
    .option("--client-id <clientId>", "OAuth client ID for HTTP/SSE servers")
    .option("--client-secret", "Prompt for OAuth client secret (or set MCP_CLIENT_SECRET env var)")
    .option(
      "--callback-port <port>",
      "Fixed port for OAuth callback (for servers requiring pre-registered redirect URIs)",
    )
    .helpOption("-h, --help", "Display help for command")
    .addOption(
      new Ec(
        "--xaa",
        "Enable XAA (SEP-990) for this server. Requires 'claude mcp xaa setup' first. Also requires --client-id and --client-secret (for the MCP server's AS).",
      ).hideHelp(!y7()),
    )
    .action(async (t, n, r, o) => {
      let s = n,
        i = r;
      if (!t)
        ws(`Error: Server name is required.
Usage: claude mcp add <name> <command> [args...]`);
      else if (!s)
        ws(`Error: Command is required when server name is provided.
Usage: claude mcp add <name> <command> [args...]`);
      try {
        let a = Ndt(o.scope),
          l = PCa(o.transport);
        if (o.xaa && !y7())
          ws("Error: --xaa requires CLAUDE_CODE_ENABLE_XAA=1 in your environment");
        let c = Boolean(o.xaa);
        if (c) {
          let p = [];
          if (!o.clientId) p.push("--client-id");
          if (!o.clientSecret) p.push("--client-secret");
          if (!Kle()) p.push("'claude mcp xaa setup' (settings.xaaIdp not configured)");
          if (p.length) ws(`Error: --xaa requires: ${p.join(", ")}`);
        }
        let u = o.transport !== void 0,
          d =
            s.startsWith("http://") ||
            s.startsWith("https://") ||
            s.startsWith("localhost") ||
            s.endsWith("/sse") ||
            s.endsWith("/mcp");
        if (
          (await my("tengu_mcp_add", {
            type: $e(l),
            scope: $e(a),
            source: We("command"),
            transport: $e(l),
            transportExplicit: u,
            looksLikeUrl: d,
          }),
          l === "sse")
        ) {
          if (!s) return yg("Error: URL is required for SSE transport.");
          let p = o.header ? vdo(o.header) : void 0,
            f = o.callbackPort ? parseInt(o.callbackPort, 10) : void 0,
            m =
              o.clientId || f || c
                ? {
                    ...(o.clientId && {
                      clientId: o.clientId,
                    }),
                    ...(f && {
                      callbackPort: f,
                    }),
                    ...(c && {
                      xaa: true,
                    }),
                  }
                : void 0,
            g = o.clientSecret && o.clientId ? await _3t() : void 0,
            h = {
              type: "sse",
              url: s,
              headers: p,
              oauth: m,
            };
          if ((await BSe(t, h, a), g)) {
            let y = await b3t(t, h, g);
            if (!y.success)
              process.stderr
                .write(`Server added, but the client secret could not be stored${y.warning ? ` (${y.warning})` : ""}. Re-run with --client-secret once secure storage is available.
`);
          }
          if (
            (process.stdout.write(`Added SSE MCP server ${t} with URL: ${zge(s)} to ${a} config
`),
            p)
          )
            process.stdout.write(`Headers: ${De(WEr(p), null, 2)}
`);
        } else if (l === "http") {
          if (!s) return yg("Error: URL is required for HTTP transport.");
          let p = o.header ? vdo(o.header) : void 0,
            f = o.callbackPort ? parseInt(o.callbackPort, 10) : void 0,
            m =
              o.clientId || f || c
                ? {
                    ...(o.clientId && {
                      clientId: o.clientId,
                    }),
                    ...(f && {
                      callbackPort: f,
                    }),
                    ...(c && {
                      xaa: true,
                    }),
                  }
                : void 0,
            g = o.clientSecret && o.clientId ? await _3t() : void 0,
            h = {
              type: "http",
              url: s,
              headers: p,
              oauth: m,
            };
          if ((await BSe(t, h, a), g)) {
            let y = await b3t(t, h, g);
            if (!y.success)
              process.stderr
                .write(`Server added, but the client secret could not be stored${y.warning ? ` (${y.warning})` : ""}. Re-run with --client-secret once secure storage is available.
`);
          }
          if (
            (process.stdout.write(`Added HTTP MCP server ${t} with URL: ${zge(s)} to ${a} config
`),
            p)
          )
            process.stdout.write(`Headers: ${De(WEr(p), null, 2)}
`);
        } else {
          if (o.clientId || o.clientSecret || o.callbackPort || o.xaa)
            process.stderr
              .write(`Warning: --client-id, --client-secret, --callback-port, and --xaa are only supported for HTTP/SSE transports and will be ignored for stdio.
`);
          let p = d ? zge(s) : s;
          if (!u && d) {
            process.stderr.write(`
Warning: The command "${p}" looks like a URL, but is being interpreted as a stdio server as --transport was not specified.
`);
            let m = xy("mcp add --transport http", t),
              g = xy("mcp add --transport sse", t);
            if (m && g)
              (process.stderr.write(`If this is an HTTP server, use: ${m} ${p}
`),
                process.stderr.write(`If this is an SSE server, use: ${g} ${p}
`));
            else
              process.stderr
                .write(`If this is a remote server, re-run with --transport http (or sse).
`);
          }
          let f = Nrs(o.env);
          (await BSe(
            t,
            {
              type: "stdio",
              command: s,
              args: i,
              env: f,
            },
            a,
          ),
            process.stdout
              .write(`Added stdio MCP server ${t} with command: ${p} ${i.join(" ")} to ${a} config
`));
        }
        return nV(`File modified: ${cF(a)}`);
      } catch (a) {
        return yg(be(a));
      }
    });
}
