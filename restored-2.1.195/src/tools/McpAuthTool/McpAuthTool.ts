// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cqe
// matched 2.1.88 source: src/tools/McpAuthTool/McpAuthTool.ts
// class=modified  jaccard=0.2753  score=0.4474  fileCov=0.4171
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function ovp() {
  return Oe.isSSH() || ut(process.env.CLAUDE_CODE_REMOTE) || da();
}
function svp(e) {
  if ("url" in e) return e.url;
  return;
}
function ivp(e) {
  try {
    let t = new URL(e).searchParams.get("redirect_uri");
    if (t) return t;
  } catch {}
  return "http://localhost:<port>/callback";
}
function XUn(e, t) {
  if (Ir()) return [];
  return [avp(e, t), lvp(e)];
}
function avp(e, t) {
  let n = svp(t),
    r = t.type ?? "stdio",
    o = n ? `${r} at ${n}` : r,
    s =
      `The \`${e}\` MCP server (${o}) is installed but requires authentication. ` +
      "Call this tool to start the OAuth flow \u2014 you'll receive an authorization URL to share with the user. " +
      "Once the user completes authorization in their browser, the server's real tools will become available automatically.";
  return {
    name: i9(e, "authenticate"),
    isMcp: true,
    mcpInfo: {
      serverName: e,
      toolName: "authenticate",
    },
    isEnabled: () => true,
    isConcurrencySafe: () => false,
    isReadOnly: () => false,
    toAutoClassifierInput: () => e,
    userFacingName: () => `${e} - authenticate (MCP)`,
    maxResultSizeChars: 10000 /* 1e4 */,
    renderToolUseMessage: () => `Authenticate ${e} MCP server`,
    async description() {
      return s;
    },
    async prompt() {
      return s;
    },
    get inputSchema() {
      return nvp();
    },
    async checkPermissions(i) {
      return {
        behavior: "allow",
        updatedInput: i,
      };
    },
    async call(i, a) {
      let l = r6(e, t);
      if (l.kind === "claudeai-proxy")
        return {
          data: {
            status: "unsupported",
            message: `This is a claude.ai MCP connector. Ask the user to run /mcp and select "${e}" to authenticate.`,
          },
        };
      if (l.kind === "unsupported-transport")
        return {
          data: {
            status: "unsupported",
            message: `Server "${e}" uses ${r} transport which does not support OAuth from this tool. Ask the user to run /mcp and authenticate manually.`,
          },
        };
      if (l.kind === "anthropic-hosted")
        return {
          data: {
            status: "unsupported",
            message: l.message,
          },
        };
      let c,
        u = new Promise((f) => {
          c = f;
        }),
        { setAppState: d } = a,
        p = sJ(e, l.config, (f) => c?.(f), void 0, {
          skipBrowserOpen: true,
        });
      (Udt(e, p),
        p
          .then(async () => {
            JUn();
            let f = await iJ(e, t),
              m = xG(e);
            (d((g) => ({
              ...g,
              mcp: {
                ...g.mcp,
                clients: g.mcp.clients.map((h) => (h.name === e ? f.client : h)),
                tools: [...bL(g.mcp.tools, (h) => h.name?.startsWith(m)), ...f.tools],
                commands: [...bL(g.mcp.commands, (h) => h.name?.startsWith(m)), ...f.commands],
                resources: f.resources
                  ? {
                      ...g.mcp.resources,
                      [e]: f.resources,
                    }
                  : g.mcp.resources,
              },
            })),
              sn(e, `OAuth complete, reconnected with ${f.tools.length} tool(s)`));
          })
          .catch((f) => {
            au(e, `OAuth flow failed after tool-triggered start: ${be(f)}`);
          }));
      try {
        let f = await Promise.race([u, p.then(() => null)]);
        if (f) {
          let m = i9(e, "complete_authentication"),
            g = ivp(f),
            h = ovp()
              ? `

This session is remote, so after authorizing the browser will try to load \`${g}?code=...\` and show a connection error \u2014 that's expected. Ask the user to copy the full URL from the browser's address bar and paste it into chat, then call \`${m}\` with that URL as \`callback_url\`.`
              : `

If the browser shows a connection error on the redirect page, ask the user to paste the full URL from the address bar and call \`${m}\` with it.`;
          return {
            data: {
              status: "auth_url",
              authUrl: f,
              message: `Ask the user to open this URL in their browser to authorize the ${e} MCP server:

${f}

Once they complete the flow, the server's tools will become available automatically.${h}`,
            },
          };
        }
        return {
          data: {
            status: "auth_url",
            message: `Authentication completed silently for ${e}. The server's tools should now be available.`,
          },
        };
      } catch (f) {
        return {
          data: {
            status: "error",
            message: `Failed to start OAuth flow for ${e}: ${be(f)}. Ask the user to run /mcp and authenticate manually.`,
          },
        };
      }
    },
    mapToolResultToToolResultBlockParam(i, a) {
      return {
        tool_use_id: a,
        type: "tool_result",
        content: i.message,
      };
    },
  };
}
function lvp(e) {
  let t = i9(e, "authenticate"),
    n =
      `Complete an in-progress OAuth flow for the \`${e}\` MCP server by submitting the callback URL. Call \`${t}\` first to start the flow and get the authorization URL. ` +
      "After the user authorizes in their browser, the browser is redirected to a `http://localhost:<port>/callback?code=...&state=...` URL \u2014 " +
      "on remote sessions that page fails to load, but the URL in the address bar is still valid. Pass that full URL here as `callback_url`.";
  return {
    name: i9(e, "complete_authentication"),
    isMcp: true,
    mcpInfo: {
      serverName: e,
      toolName: "complete_authentication",
    },
    isEnabled: () => true,
    isConcurrencySafe: () => false,
    isReadOnly: () => false,
    toAutoClassifierInput: () => e,
    userFacingName: () => `${e} - complete authentication (MCP)`,
    maxResultSizeChars: 10000 /* 1e4 */,
    renderToolUseMessage: () => `Complete authentication for ${e} MCP server`,
    async description() {
      return n;
    },
    async prompt() {
      return n;
    },
    get inputSchema() {
      return rvp();
    },
    async checkPermissions(r) {
      return {
        behavior: "allow",
        updatedInput: r,
      };
    },
    async call(r) {
      let { callback_url: o } = r,
        s = Bdt(e);
      if (!s)
        return {
          data: {
            status: "error",
            message: `No OAuth flow is in progress for ${e}. Call \`${t}\` first, then retry with the callback URL.`,
          },
        };
      let i = false;
      try {
        let l = new URL(o);
        i = l.searchParams.has("code") || l.searchParams.has("error");
      } catch {}
      if (!i)
        return {
          data: {
            status: "error",
            message:
              "Invalid callback URL: missing authorization code. Ask the user to paste the full redirect URL from their browser's address bar, including the `?code=...&state=...` query string.",
          },
        };
      let a = Fdt(e);
      s(o);
      try {
        return (
          await a,
          {
            data: {
              status: "success",
              message: `Authentication complete for ${e}. The server's tools should now be available.`,
            },
          }
        );
      } catch (l) {
        if (l instanceof N4)
          return {
            data: {
              status: "error",
              message: `The OAuth flow for ${e} was cancelled (a newer attempt may have superseded it). Call \`${t}\` again to restart.`,
            },
          };
        return {
          data: {
            status: "error",
            message: `Authentication failed for ${e}: ${be(l)}`,
          },
        };
      }
    },
    mapToolResultToToolResultBlockParam(r, o) {
      return {
        tool_use_id: o,
        type: "tool_result",
        content: r.message,
      };
    },
  };
}
var nvp, rvp;
