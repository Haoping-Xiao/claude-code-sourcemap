// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vdc
// matched 2.1.88 source: src/cli/handlers/mcp.tsx
// class=modified  jaccard=0.2892  score=0.3831  fileCov=0.5412
// note: deminified; 7 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Vdc] deps: bCe, je, At, Rd, Is
((ZYe = require("fs/promises")), (Gdc = require("os")), (O9o = require("path")));
var lNe = {};
_t(lNe, {
  mcpServeHandler: () => mcpServeHandler,
  mcpResetChoicesHandler: () => mcpResetChoicesHandler,
  mcpRemoveHandler: () => mcpRemoveHandler,
  mcpListHandler: () => mcpListHandler,
  mcpGetHandler: () => mcpGetHandler,
  mcpAddJsonHandler: () => mcpAddJsonHandler,
  mcpAddFromDesktopHandler: () => mcpAddFromDesktopHandler,
});
function nam(e) {
  let t = e?.issues;
  if (Array.isArray(t) && t.length > 0) {
    let n = t[0],
      r = typeof n.message === "string" ? n.message : be(e),
      o = Array.isArray(n.path) && n.path.length > 0 ? ` (at ${n.path.join(".")})` : "",
      s = t.length > 1 ? ` (+${t.length - 1} more)` : "";
    return r + o + s;
  }
  return be(e).replace(/\s+/g, " ").trim();
}
async function Jdc(e, t) {
  try {
    let n = await aP(e, t);
    if (n.type === "connected") {
      if (n.capabilities.tools)
        try {
          await n.client.listTools(void 0, {
            timeout: 5000,
          });
        } catch (r) {
          if (V3t(r))
            return {
              status: "! Needs authentication",
            };
          return {
            status: "! Connected \xB7 tools fetch failed",
            issue: nam(r),
          };
        }
      return {
        status: `${nt.tick} Connected`,
      };
    } else if (n.type === "needs-auth")
      return {
        status: "! Needs authentication",
      };
    else
      return {
        status: `${nt.cross} Failed to connect`,
      };
  } catch (n) {
    return {
      status: `${nt.cross} Connection error`,
    };
  }
}
async function mcpServeHandler({ debug: e, verbose: t }) {
  let n = Xdc.cwd();
  await my("tengu_mcp_start", {});
  try {
    await Ydc.stat(n);
  } catch (r) {
    if (Vo(r))
      return (
        await Qu("cli_mcp_serve", "cli_mcp_serve_cwd_missing"),
        yg(`Error: Directory ${n} does not exist`)
      );
    throw r;
  }
  try {
    let { setup: r } = await Promise.resolve().then(() => (Zcr(), Qcr));
    await r(n, "default", false, false, void 0, false);
    let { SandboxManager: o } = await Promise.resolve().then(() => (lg(), Rro)),
      s = o.getSandboxUnavailableReason();
    if (s) {
      if (o.isSandboxRequired())
        return (
          await Qu("cli_mcp_serve", "cli_mcp_serve_sandbox_required_unavailable"),
          yg(
            `Error: sandbox required but unavailable: ${s}
` + "  sandbox.failIfUnavailable is set \u2014 refusing to start without a working sandbox.",
          )
        );
      process.stderr.write(`
\u26A0 Sandbox disabled: ${s}
  Commands will run WITHOUT sandboxing. Network and filesystem restrictions will NOT be enforced.

`);
    }
    let { startMCPServer: i } = await Promise.resolve().then(() => (jdc(), Fdc));
    (await i(n, e ?? false, t ?? false), await uv("cli_mcp_serve"));
  } catch (r) {
    return (
      await Qu("cli_mcp_serve", "cli_mcp_serve_start_failed"),
      yg(`Error: Failed to start MCP server: ${r}`)
    );
  }
}
async function mcpRemoveHandler(e, t, n) {
  let r = P4(t),
    o = async () => {
      if (r && (r.type === "sse" || r.type === "http"))
        try {
          (await zUn(t, r), await KCa(t, r));
        } catch (a) {
          T(`mcp remove: secure-storage cleanup for "${t}" failed: ${be(a)}`, {
            level: "warn",
          });
        }
    },
    s;
  try {
    if (n.scope) {
      let a = Ndt(n.scope);
      (await my("tengu_mcp_delete", {
        name: t,
        scope: $e(a),
      }),
        await PUn(t, a),
        await o(),
        (s = a));
    } else {
      let a = Lg(),
        l = Dt(),
        c = await xdt().catch(() => ({})),
        u = Object.hasOwn(c, t),
        d = [];
      if (a.mcpServers?.[t]) d.push("local");
      if (u) d.push("project");
      if (l.mcpServers?.[t]) d.push("user");
      if (d.length === 0) {
        let p = [
          ...Object.keys(a.mcpServers ?? {}),
          ...Object.keys(c),
          ...Object.keys(l.mcpServers ?? {}),
        ];
        return (await Qu("cli_mcp_remove", "cli_mcp_remove_not_found"), yg(C9o(t, Uo(p))));
      } else if (d.length === 1) {
        let p = d[0];
        (await my("tengu_mcp_delete", {
          name: t,
          scope: $e(p),
        }),
          await PUn(t, p),
          await o(),
          (s = p));
      } else {
        (process.stderr.write(`MCP server "${t}" exists in multiple scopes:
`),
          d.forEach((f) => {
            process.stderr.write(`  - ${h3t(f)} (${cF(f)})
`);
          }));
        let p = d.map((f) => xy("mcp remove", t, `-s ${f}`)).filter((f) => f !== null);
        if (p.length > 0)
          (process.stderr.write(`
To remove from a specific scope, use:
`),
            p.forEach((f) =>
              process.stderr.write(`  ${f}
`),
            ));
        else
          process.stderr.write(`
Specify a scope with -s to remove from a specific one.
`);
        return (await Qu("cli_mcp_remove", "cli_mcp_remove_ambiguous_scope"), yg());
      }
    }
  } catch (a) {
    return (await Qu("cli_mcp_remove", "cli_mcp_remove_failed"), yg(be(a)));
  }
  await uv("cli_mcp_remove");
  let i = n.scope ? t : `"${t}"`;
  (e.render(
    TS.jsx(V_, {
      children: TS.jsxs(U, {
        flexDirection: "column",
        children: [
          TS.jsxs(w, {
            children: ["Removed MCP server ", i, " from ", s, " config"],
          }),
          TS.jsxs(w, {
            children: ["File modified: ", cF(s)],
          }),
        ],
      }),
    }),
  ),
    await e.waitUntilExit());
}
function Qdc(e) {
  let t = new Map(),
    n = {};
  for (let [r, o] of Object.entries(e))
    if (
      o.scope === "local" ||
      o.scope === "user" ||
      o.scope === "project" ||
      o.scope === "enterprise"
    ) {
      let s = t.get(o.scope);
      if (!s)
        ((s = bT(o.scope, {
          expandVars: false,
        }).servers),
          t.set(o.scope, s));
      n[r] = s[r] ?? o;
    } else n[r] = Vge(o);
  return n;
}
function sam({ name: e, server: t, status: n }) {
  if (t.type === "sse") return `${e}: ${t.url} (SSE) - ${n}`;
  if (t.type === "http") return `${e}: ${t.url} (HTTP) - ${n}`;
  if (t.type === "claudeai-proxy") return `${e}: ${t.url} - ${n}`;
  if (!t.type || t.type === "stdio") {
    let r = Array.isArray(t.args) ? t.args : [];
    return `${e}: ${t.command} ${r.join(" ")} - ${n}`;
  }
  return null;
}
function iam(e) {
  let t = Kdc.c(10),
    { promise: n } = e,
    r = eur.use(n),
    o,
    s,
    i;
  if (t[0] !== r) {
    let c = r.map(sam).filter(aam);
    ((s = V_),
      (o = w),
      (i = c.join(`
`)),
      (t[0] = r),
      (t[1] = o),
      (t[2] = s),
      (t[3] = i));
  } else ((o = t[1]), (s = t[2]), (i = t[3]));
  let a;
  if (t[4] !== o || t[5] !== i)
    ((a = TS.jsx(o, {
      children: i,
    })),
      (t[4] = o),
      (t[5] = i),
      (t[6] = a));
  else a = t[6];
  let l;
  if (t[7] !== s || t[8] !== a)
    ((l = TS.jsx(s, {
      children: a,
    })),
      (t[7] = s),
      (t[8] = a),
      (t[9] = l));
  else l = t[9];
  return l;
}
function aam(e) {
  return e !== null;
}
async function mcpListHandler(e) {
  (await my("tengu_mcp_list", {}),
    await oV({
      hasDynamicMcpConfig: false,
    }));
  let { servers: t, pendingProjectServers: n } = await M4({
    includePendingProjectServers: true,
  });
  await uv("cli_mcp_list");
  let r = TS.jsx(SEt, {});
  if (Object.keys(t).length === 0) {
    (e.render(
      TS.jsx(V_, {
        children: TS.jsxs(U, {
          flexDirection: "column",
          children: [
            TS.jsx(w, {
              children: "No MCP servers configured. Use `claude mcp add` to add a server.",
            }),
            r,
          ],
        }),
      }),
    ),
      await e.waitUntilExit(),
      await ki(0));
    return;
  }
  let o = Qdc(t),
    s = C8(
      Object.entries(t),
      async ([i, a]) => ({
        name: i,
        server: o[i] ?? a,
        status: n.has(i) ? Zdc : (await Jdc(i, a)).status,
      }),
      {
        concurrency: hpt(),
      },
    );
  (e.render(
    TS.jsx(eur.Suspense, {
      fallback: TS.jsxs(w, {
        children: [
          "Checking MCP server health\u2026",
          `

`,
        ],
      }),
      children: TS.jsxs(U, {
        flexDirection: "column",
        children: [
          TS.jsx(iam, {
            promise: s,
          }),
          r,
        ],
      }),
    }),
  ),
    await e.waitUntilExit(),
    await ki(0));
}
async function mcpGetHandler(e, t) {
  (await my("tengu_mcp_get", {
    name: t,
  }),
    await oV({
      hasDynamicMcpConfig: false,
    }));
  let {
      servers: n,
      pendingProjectServers: r,
      rejectedProjectServers: o,
    } = await M4({
      includePendingProjectServers: true,
      includeRejectedProjectServers: true,
    }),
    s = n[t] ?? null,
    i = r.has(t) ? "pending" : o.has(t) ? "rejected" : null;
  if (!s) {
    await Qu("cli_mcp_get", "cli_mcp_get_not_found");
    let f = Object.keys(n).filter((m) => !r.has(m) && !o.has(m));
    return yg(Vcr(t, f, r.size > 0));
  }
  let a =
      i === "pending"
        ? {
            status: Zdc,
          }
        : i === "rejected"
          ? {
              status: lam,
            }
          : await Jdc(t, s),
    l =
      Qdc({
        [t]: s,
      })[t] ?? s,
    c = [
      `${t}:`,
      `  Scope: ${h3t(s.scope)}`,
      `  Status: ${a.status}`,
      ...(a.issue ? [`  Issue: ${a.issue}`] : []),
    ];
  if ((s.type === "sse" || s.type === "http") && (l.type === "sse" || l.type === "http")) {
    if ((c.push(`  Type: ${s.type}`), c.push(`  URL: ${l.url}`), l.headers)) {
      c.push("  Headers:");
      for (let [f, m] of Object.entries(l.headers)) c.push(`    ${f}: ${m}`);
    }
    if (s.oauth?.clientId || s.oauth?.callbackPort) {
      let f = [];
      if (s.oauth.clientId) {
        if ((f.push("client_id configured"), (await YUn(t, s))?.clientSecret))
          f.push("client_secret configured");
      }
      if (s.oauth.callbackPort) f.push(`callback_port ${s.oauth.callbackPort}`);
      c.push(`  OAuth: ${f.join(", ")}`);
    }
  } else if (s.type === "stdio" && l.type === "stdio") {
    (c.push("  Type: stdio"), c.push(`  Command: ${l.command}`));
    let f = Array.isArray(l.args) ? l.args : [];
    if ((c.push(`  Args: ${f.join(" ")}`), l.env)) {
      c.push("  Environment:");
      for (let [m, g] of Object.entries(l.env)) c.push(`    ${m}=${g}`);
    }
  }
  if (s.timeout !== void 0)
    c.push(
      `  Timeout: ${s.timeout}ms${s.timeout < 1000 ? " (ignored: below 1000ms minimum)" : ""}`,
    );
  let d =
      s.scope === "local" || s.scope === "project" || s.scope === "user"
        ? xy("mcp remove", t, `-s ${s.scope}`)
        : null,
    p = null;
  if (d) p = `To remove this server, run: ${d}`;
  else if (
    s.scope === "user" ||
    s.scope === "project" ||
    s.scope === "local" ||
    s.scope === "enterprise"
  )
    p = `To remove this server, edit ${cF(s.scope)}`;
  if (p) (c.push(""), c.push(p));
  (await uv("cli_mcp_get"),
    e.render(
      TS.jsx(V_, {
        children: TS.jsx(w, {
          children: c.join(`
`),
        }),
      }),
    ),
    await e.waitUntilExit(),
    await ki(0));
}
async function mcpAddJsonHandler(e, t, n, r) {
  let o, s;
  try {
    o = Ndt(r.scope);
    let i = Ia(n, false);
    if (i === null)
      T("mcp add-json: user-provided JSON was empty, invalid, or null", {
        level: "error",
      });
    let l =
      r.clientSecret &&
      i &&
      typeof i === "object" &&
      "type" in i &&
      (i.type === "sse" || i.type === "http" || i.type === "streamable-http") &&
      "url" in i &&
      typeof i.url === "string" &&
      "oauth" in i &&
      i.oauth &&
      typeof i.oauth === "object" &&
      "clientId" in i.oauth
        ? await _3t()
        : void 0;
    if (
      (await BSe(t, i, o),
      (s = i && typeof i === "object" && "type" in i ? String(i.type || "stdio") : "stdio"),
      s === "streamable-http")
    )
      s = "http";
    if (
      l &&
      i &&
      typeof i === "object" &&
      "type" in i &&
      (i.type === "sse" || i.type === "http" || i.type === "streamable-http") &&
      "url" in i &&
      typeof i.url === "string"
    ) {
      let u = await b3t(
        t,
        {
          type: i.type === "sse" ? "sse" : "http",
          url: i.url,
        },
        l,
      );
      if (!u.success)
        process.stderr
          .write(`Server added, but the client secret could not be stored${u.warning ? ` (${u.warning})` : ""}. Re-run with --client-secret once secure storage is available.
`);
    }
    await my("tengu_mcp_add", {
      scope: $e(o),
      source: We("json"),
      type: s,
    });
  } catch (i) {
    return (await Qu("cli_mcp_add_json", "cli_mcp_add_json_failed"), yg(be(i)));
  }
  (await uv("cli_mcp_add_json"),
    e.render(
      TS.jsx(V_, {
        children: TS.jsxs(w, {
          children: ["Added ", s, " MCP server ", t, " to ", o, " config"],
        }),
      }),
    ),
    await e.waitUntilExit());
}
async function mcpAddFromDesktopHandler(e) {
  try {
    let t = Ndt(e.scope),
      n = Vt();
    await my("tengu_mcp_add", {
      scope: $e(t),
      platform: $e(n),
      source: We("desktop"),
    });
    let { readClaudeDesktopMcpServers: r } = await Promise.resolve().then(() => (Vdc(), qdc)),
      o = await r();
    if (Object.keys(o).length === 0)
      return (
        await uv("cli_mcp_add_from_desktop"),
        nV(
          "No MCP servers found in Claude Desktop configuration or configuration file does not exist.",
        )
      );
    await uv("cli_mcp_add_from_desktop");
    let { unmount: s } = await b8(
      TS.jsx(AH, {
        children: TS.jsx(TT, {
          children: TS.jsx(fdc, {
            servers: o,
            scope: t,
            onDone: () => {
              s();
            },
          }),
        }),
      }),
      {
        exitOnCtrlC: true,
        patchConsole: false,
      },
    );
  } catch (t) {
    return (await Qu("cli_mcp_add_from_desktop", "cli_mcp_add_from_desktop_failed"), yg(be(t)));
  }
}
async function mcpResetChoicesHandler(e) {
  if (
    (await my("tengu_mcp_reset_mcpjson_choices", {}),
    !RZt(["enabledMcpjsonServers", "disabledMcpjsonServers", "enableAllProjectMcpServers"]))
  )
    return (
      $Ye(
        "Error: Failed to reset project choices: legacy approvals in ~/.claude.json could not be cleared (is the file writable?). Nothing was changed.",
      ),
      await Qu("cli_mcp_reset_choices", "cli_mcp_reset_choices_projectconfig_delete_failed"),
      await lVe(),
      ws()
    );
  let n = yn("localSettings");
  if (
    n
      ? n.enabledMcpjsonServers !== void 0 ||
        n.disabledMcpjsonServers !== void 0 ||
        n.enableAllProjectMcpServers !== void 0
      : LCe().length > 0
  ) {
    if (n !== null && LCe().length > 0)
      return (
        $Ye(
          "Error: Failed to reset project choices: settings.local.json carries validation warnings, and rewriting it would delete the warned entries \u2014 run /doctor and fix them, then re-run (legacy approvals in ~/.claude.json were cleared; local settings were not)",
        ),
        await Qu("cli_mcp_reset_choices", "cli_mcp_reset_choices_settings_warnings_blocked"),
        await lVe(),
        ws()
      );
    let { error: s } = io("localSettings", {
      enabledMcpjsonServers: void 0,
      disabledMcpjsonServers: void 0,
      enableAllProjectMcpServers: void 0,
    });
    if (s)
      return (
        $Ye(
          `Error: Failed to reset project choices: ${s.message} (legacy approvals in ~/.claude.json were cleared; local settings were not)`,
        ),
        await Qu("cli_mcp_reset_choices", "cli_mcp_reset_choices_settings_write_failed"),
        await lVe(),
        ws()
      );
  }
  await uv("cli_mcp_reset_choices");
  let o = null;
  try {
    let s = VE("mcp");
    if (!Z1()) {
      let { serverNames: i, pluginServerNames: a, rootServers: l } = await v9o(),
        c = (f) => ACe(f, a.has(f)),
        u = [],
        d = [],
        p = 0;
      for (let f of i) {
        if (s && !a.has(f)) continue;
        let m = g3t(f);
        if (m === "approved") {
          if (mk(f)) continue;
          let g = l[f];
          if (g && !rde(f, g)) continue;
          u.push(c(f));
        } else if (m === "rejected") d.push(c(f));
        else p++;
      }
      o = {
        autoApprovedServers: u,
        stillRejectedServers: d,
        pendingCount: p,
        gatingErrors: $Vn().length,
      };
    }
  } catch (s) {
    (T(`mcp reset-project-choices: post-reset disclosure scan failed: ${be(s)}`, {
      level: "warn",
    }),
      (o = null));
  }
  (e.render(
    TS.jsx(V_, {
      children: TS.jsxs(U, {
        flexDirection: "column",
        children: [
          TS.jsx(w, {
            children:
              "Project-scoped (.mcp.json) server approvals and rejections stored for this project have been reset.",
          }),
          o &&
            o.autoApprovedServers.length > 0 &&
            TS.jsx(w, {
              children: zdc(
                o.autoApprovedServers,
                "is still approved by other settings and will connect automatically without prompting.",
                "are still approved by other settings and will connect automatically without prompting.",
              ),
            }),
          o &&
            o.stillRejectedServers.length > 0 &&
            TS.jsx(w, {
              children: zdc(
                o.stillRejectedServers,
                "remains rejected by other settings and will not prompt.",
                "remain rejected by other settings and will not prompt.",
              ),
            }),
          o &&
            o.pendingCount > 0 &&
            (o.gatingErrors > 0
              ? TS.jsx(w, {
                  children:
                    "Settings errors are currently blocking the approval prompt \u2014 run /doctor and fix them, then restart Claude Code to be prompted.",
                })
              : TS.jsx(w, {
                  children: "You will be prompted for approval next time you start Claude Code.",
                })),
        ],
      }),
    }),
  ),
    await e.waitUntilExit());
}
function zdc(e, t, n) {
  return e.length === 1 ? `1 server (${e[0]}) ${t}` : `${e.length} servers (${e.join(", ")}) ${n}`;
}
var Kdc,
  Ydc,
  Xdc,
  eur,
  TS,
  Zdc = "\u23F8 Pending approval (run `claude` to approve)",
  lam;
