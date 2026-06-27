// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cdc
// matched 2.1.88 source: src/commands/mcp/xaaIdpCommand.ts
// class=modified  jaccard=0.6256  score=0.823  fileCov=0.7228
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function registerMcpXaaIdpCommand(mcp) {
  let xaaIdp = mcp.command("xaa").description("Manage the XAA (SEP-990) IdP connection");
  (xaaIdp
    .command("setup")
    .description("Configure the IdP connection (one-time setup for all XAA-enabled servers)")
    .requiredOption("--issuer <url>", "IdP issuer URL (OIDC discovery)")
    .requiredOption("--client-id <id>", "Claude Code's client_id at the IdP")
    .option("--client-secret", "Read IdP client secret from MCP_XAA_IDP_CLIENT_SECRET env var")
    .option(
      "--callback-port <port>",
      "Fixed loopback callback port (only if IdP does not honor RFC 8252 port-any matching)",
    )
    .action(async (n) => {
      let r;
      try {
        r = new URL(n.issuer);
      } catch {
        return ws(`Error: --issuer must be a valid URL (got "${n.issuer}")`);
      }
      if (
        r.protocol !== "https:" &&
        !(
          r.protocol === "http:" &&
          (r.hostname === "localhost" || r.hostname === "127.0.0.1" || r.hostname === "[::1]")
        )
      )
        return ws(`Error: --issuer must use https:// (got "${r.protocol}//${r.host}")`);
      let o = n.callbackPort ? parseInt(n.callbackPort, 10) : void 0;
      if (o !== void 0 && (!Number.isInteger(o) || o <= 0))
        return ws("Error: --callback-port must be a positive integer");
      let s = n.clientSecret ? process.env.MCP_XAA_IDP_CLIENT_SECRET : void 0;
      if (n.clientSecret && !s)
        return ws("Error: --client-secret requires MCP_XAA_IDP_CLIENT_SECRET env var");
      let i = Kle(),
        a = i?.issuer,
        l = i?.clientId,
        { error: c } = io("userSettings", {
          xaaIdp: {
            issuer: n.issuer,
            clientId: n.clientId,
            callbackPort: o,
          },
        });
      if (c) return ws(`Error writing settings: ${c.message}`);
      if (a) {
        if (p_e(a) !== p_e(n.issuer)) (await ske(a), await fIn(a));
        else if (l !== n.clientId) (await ske(a), await fIn(a));
      }
      if (s) {
        let { success: u, warning: d } = await Bwi(n.issuer, s);
        if (!u)
          return ws(
            `Error: settings written but keychain save failed${d ? ` \u2014 ${d}` : ""}. Re-run with --client-secret once keychain is available.`,
          );
      }
      _R(`XAA IdP connection configured for ${n.issuer}`);
    }),
    xaaIdp
      .command("login")
      .description(
        "Cache an IdP id_token so XAA-enabled MCP servers authenticate silently. Default: run the OIDC browser login. With --id-token: write a pre-obtained JWT directly (used by conformance/e2e tests where the mock IdP does not serve /authorize).",
      )
      .option(
        "--force",
        "Ignore any cached id_token and re-login (useful after IdP-side revocation)",
      )
      .option(
        "--id-token <jwt>",
        "Write this pre-obtained id_token directly to cache, skipping the OIDC browser login",
      )
      .action(async (n) => {
        let r = Kle();
        if (!r) return ws("Error: no XAA IdP connection. Run 'claude mcp xaa setup' first.");
        if (n.idToken)
          try {
            let s = await Nwi(r.issuer, n.idToken);
            return _R(`id_token cached for ${r.issuer} (expires ${new Date(s).toISOString()})`);
          } catch (s) {
            return ws(`id_token cache write failed: ${be(s)}`);
          }
        if (n.force) await ske(r.issuer);
        if ((await Q4e(r.issuer)) !== void 0)
          return _R(
            `Already logged in to ${r.issuer} (cached id_token still valid). Use --force to re-login.`,
          );
        process.stdout.write(`Opening browser for IdP login at ${r.issuer}\u2026
`);
        try {
          (await gIn({
            idpIssuer: r.issuer,
            idpClientId: r.clientId,
            idpClientSecret: await rst(r.issuer),
            callbackPort: r.callbackPort,
            onAuthorizationUrl: (s) => {
              process.stdout.write(`If the browser did not open, visit:
  ${s}
`);
            },
          }),
            _R("Logged in. MCP servers with --xaa will now authenticate silently."));
        } catch (s) {
          ws(`IdP login failed: ${be(s)}`);
        }
      }),
    xaaIdp
      .command("show")
      .description("Show the current IdP connection config")
      .action(async () => {
        let n = Kle();
        if (!n) return _R("No XAA IdP connection configured.");
        let r = (await rst(n.issuer)) !== void 0,
          o = (await Q4e(n.issuer)) !== void 0;
        if (
          (process.stdout.write(`Issuer:        ${n.issuer}
`),
          process.stdout.write(`Client ID:     ${n.clientId}
`),
          n.callbackPort !== void 0)
        )
          process.stdout.write(`Callback port: ${n.callbackPort}
`);
        (process.stdout
          .write(`Client secret: ${r ? "(stored in keychain)" : "(not set \u2014 PKCE-only)"}
`),
          process.stdout
            .write(`Logged in:     ${o ? "yes (id_token cached)" : "no \u2014 run 'claude mcp xaa login'"}
`),
          _R());
      }),
    xaaIdp
      .command("clear")
      .description("Clear the IdP connection config and cached id_token")
      .action(async () => {
        let n = Kle(),
          { error: r } = io("userSettings", {
            xaaIdp: void 0,
          });
        if (r) return ws(`Error writing settings: ${r.message}`);
        if (n) (await ske(n.issuer), await fIn(n.issuer));
        _R("XAA IdP connection cleared");
      }));
}
