// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vA
// matched 2.1.88 source: src/components/mcp/MCPRemoteServerMenu.tsx
// class=modified (alt of src/components/mcp/MCPRemoteServerMenu.tsx)  jaccard=0.0306  score=0.0806  fileCov=0.0471
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module vA] deps: FZt, U9o, Ye, S6, dn, kt, Yfe, cTt, C5, uTt, oo, wr, Gre
((dpc = R(lt(), 1)), (ppc = require("process")), (sur = R(rt(), 1)), (QN = R(se(), 1)));
vam = sur.lazy(() =>
  Promise.resolve()
    .then(() => (xnr(), YNo))
    .then((e) => ({
      default: e.Doctor,
    })),
);
var F9o = {};
_t(F9o, {
  mcpLogoutHandler: () => mcpLogoutHandler,
  mcpLoginHandler: () => mcpLoginHandler,
});
async function gpc(e, t) {
  await oV({
    hasDynamicMcpConfig: false,
  });
  let {
      servers: n,
      pendingProjectServers: r,
      rejectedProjectServers: o,
    } = await M4({
      includePendingProjectServers: true,
      includeRejectedProjectServers: true,
    }),
    s = n[e];
  if (!s) {
    await Qu(t, "not_found");
    let i = Object.keys(n).filter((a) => !r.has(a) && !o.has(a));
    return yg(Vcr(e, i, r.size > 0));
  }
  if (o.has(e))
    return (
      await Qu(t, "rejected"),
      yg(
        `"${e}" is from .mcp.json and was rejected. Run \`claude mcp reset-project-choices\` to review it again.`,
      )
    );
  if (r.has(e))
    return (
      await Qu(t, "pending_approval"),
      yg(
        `"${e}" is from .mcp.json and awaiting approval. Run \`claude\` in this directory to review it first.`,
      )
    );
  if (s.configError)
    return (
      await Qu(t, "config_error"),
      yg(`"${e}" has a configuration problem: ${s.configError}`)
    );
  return s;
}
function hpc(e) {
  if (e3e(e)) return "static_auth_header";
  if (X9(e.url) && Jl()) {
    if (Ws()?.accessToken) return "first_party_auth";
    if (KSe()) return "first_party_design_auth";
  }
  return null;
}
function fpc(e, t) {
  return `${e ? "If the browser didn't open, visit:" : "Visit this URL to authorize:"}
  ${sP(t)}

`;
}
async function mcpLoginHandler(e, t) {
  await my("tengu_mcp_login", {});
  let n = await gpc(e, "cli_mcp_login"),
    r = r6(e, n);
  switch (r.kind) {
    case "claudeai-proxy": {
      let o = oDe(r.config);
      if (!o)
        return (
          await Qu("cli_mcp_login", "claudeai_no_auth_url"),
          yg(
            `Couldn't build the claude.ai authorization link for "${e}". Make sure you're signed in (\`claude login\`).`,
          )
        );
      if ((await my("tengu_claudeai_mcp_auth_started", {}), t.browser))
        (process.stdout.write(`Opening browser to authorize "${e}"\u2026
`),
          await ac(o));
      return (
        process.stdout.write(
          fpc(t.browser, o) +
            `Once authorized on claude.ai, the connector will be available the next time you start Claude Code.
`,
        ),
        await hGt(e),
        await uv("cli_mcp_login"),
        nV()
      );
    }
    case "unsupported-transport":
      return (
        await Qu("cli_mcp_login", "unsupported_transport"),
        yg(
          `"${e}" doesn't support OAuth login \u2014 it's only available for HTTP and SSE servers.`,
        )
      );
    case "anthropic-hosted":
      return (await Qu("cli_mcp_login", "anthropic_hosted_blocked"), yg(r.message));
    case "oauth": {
      let o = hpc(r.config);
      if (o === "static_auth_header")
        return (
          await Qu("cli_mcp_login", "static_auth_header"),
          yg(
            `"${e}" authenticates with the \`Authorization\` header in its configuration, so there's no separate login. Update that header to change its credentials.`,
          )
        );
      if (o === "first_party_auth")
        return (
          await Qu("cli_mcp_login", "first_party_auth"),
          yg(
            `"${e}" authenticates automatically with your Claude login. Run \`claude login\` if you're not signed in.`,
          )
        );
      if (o === "first_party_design_auth")
        return (
          await Qu("cli_mcp_login", "first_party_design_auth"),
          yg(
            `"${e}" authenticates automatically with your stored /design-login credential. Run /design-login from an interactive session to re-authorize it.`,
          )
        );
      process.stdout.write(`Starting authentication for "${e}"\u2026
`);
      let s = "Or paste the redirect URL here: ",
        i = new AbortController(),
        a,
        l = false,
        c = setInterval(() => {}, 60000),
        u = new Promise((d, p) => {
          i.signal.addEventListener("abort", () => p(new N4()), {
            once: true,
          });
        });
      u.catch(() => {});
      try {
        (await FSe(e, r.config, {
          preserveStepUpState: true,
        }),
          await Promise.race([
            u,
            sJ(
              e,
              r.config,
              (d) => {
                if (
                  (process.stdout.write(
                    fpc(t.browser, d) +
                      `Waiting for authorization\u2026 (^C to cancel)
`,
                  ),
                  a)
                )
                  a.prompt();
              },
              i.signal,
              {
                skipBrowserOpen: !t.browser,
                onWaitingForCallback: (d) => {
                  if (!process.stdin.isTTY) {
                    ((l = true), i.abort());
                    return;
                  }
                  if (!process.stdout.isTTY) return;
                  (Ice(),
                    (a = mpc.createInterface({
                      input: process.stdin,
                      output: process.stdout,
                      prompt: s,
                    })),
                    a.on("SIGINT", () => i.abort()),
                    a.on("close", () => i.abort()),
                    a.on("line", (p) => {
                      let f = p.trim();
                      if (f && d(f)) return;
                      if (f)
                        process.stdout
                          .write(`That doesn't look like a redirect URL \u2014 paste the full address from your browser's address bar.
`);
                      a?.prompt();
                    }));
                },
              },
            ),
          ]));
      } catch (d) {
        if (d instanceof N4) {
          if (l)
            return (
              await Qu("cli_mcp_login", "no_tty_stdin"),
              yg(
                `Couldn't complete authentication for "${e}": stdin isn't a terminal, so authentication can't be completed here. ` +
                  "Re-run in an interactive terminal \u2014 e.g. `ssh -t` \u2014 and paste the redirect URL when prompted.",
              )
            );
          return (await iY("cli_mcp_login", "cancelled"), XN(130));
        }
        return (
          await Qu("cli_mcp_login", "oauth_flow_threw"),
          yg(`Couldn't complete authentication for "${e}": ${be(d)}`)
        );
      } finally {
        if ((clearInterval(c), a))
          (a.close(),
            process.stdout.write(`
`));
      }
      return (
        await hGt(e),
        await uv("cli_mcp_login"),
        nV(
          mk(e)
            ? `Authenticated with "${e}", but it's currently disabled. Enable it in /mcp for its tools to load.`
            : `Authenticated with "${e}". Its tools are now available in Claude Code.`,
        )
      );
    }
    default: {
      let o = r;
    }
  }
}
async function mcpLogoutHandler(e) {
  await my("tengu_mcp_logout", {});
  let t = await gpc(e, "cli_mcp_logout"),
    n = r6(e, t);
  switch (n.kind) {
    case "claudeai-proxy":
      return (
        await iY("cli_mcp_logout", "claudeai_proxy"),
        nV(
          `"${e}" is a claude.ai connector \u2014 its credentials live on claude.ai, not this machine. ` +
            `Disconnect it at ${sP(OSe())}`,
        )
      );
    case "unsupported-transport":
      return (
        await Qu("cli_mcp_logout", "unsupported_transport"),
        yg(`"${e}" doesn't use OAuth \u2014 there are no stored credentials to clear.`)
      );
    case "anthropic-hosted":
      return (
        await FSe(e, n.config),
        await iY("cli_mcp_logout", "anthropic_hosted"),
        nV(`Cleared local credentials for "${e}". ${n.message}`)
      );
    case "oauth": {
      (await FSe(e, n.config), await uv("cli_mcp_logout"));
      let r = hpc(n.config) === null ? xy("mcp login", e) : null,
        o = r ? ` Run \`${r}\` to authenticate again.` : "";
      return nV(`Signed out of "${e}".${o}`);
    }
    default: {
      let r = n;
    }
  }
}
var mpc;
