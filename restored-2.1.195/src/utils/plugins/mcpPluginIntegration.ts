// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module i5
// matched 2.1.88 source: src/utils/plugins/mcpPluginIntegration.ts
// class=modified  jaccard=0.479  score=0.6313  fileCov=0.6649
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var i5 = E(() => {
  Qi();
  Gwe();
  ft();
  je();
  At();
  SG();
  R9();
  dr();
  vdt();
  B1();
  ((m$ = Cn((e) => {
    let n = jo().pluginConfigs?.[e]?.options ?? {},
      o = wl().read()?.pluginSecrets?.[e] ?? {};
    return {
      ...n,
      ...o,
    };
  })),
    (lTp = oRt(async (e) => {
      let n = jo().pluginConfigs?.[e]?.options ?? {},
        o = (await wl().readAsync())?.pluginSecrets?.[e] ?? {};
      return {
        ...n,
        ...o,
      };
    })));
});
async function mCa(e, t, n) {
  try {
    T(`Loading MCP servers from MCPB: ${t}`);
    let r = e.repository,
      o = await c3t(t, e.path, r, (a) => {
        T(`MCPB [${e.name}]: ${a}`);
      });
    if ("status" in o && o.status === "needs-config")
      return (
        T(
          `MCPB ${t} requires user configuration. ` +
            `User can configure via: /plugin \u2192 Manage plugins \u2192 ${e.name} \u2192 Configure`,
        ),
        null
      );
    let s = o,
      i = s.manifest.name;
    return (
      T(`Loaded MCP server "${i}" from MCPB (extracted to ${s.extractedPath})`),
      {
        [i]: s.mcpConfig,
      }
    );
  } catch (r) {
    let o = be(r);
    T(`Failed to load MCPB ${t}: ${o}`, {
      level: "error",
    });
    let s = e.repository;
    if (t.startsWith("http") && (o.includes("download") || o.includes("network")))
      n.push({
        type: "mcpb-download-failed",
        source: s,
        plugin: e.name,
        url: t,
        reason: o,
      });
    else if (o.includes("manifest") || o.includes("user configuration"))
      n.push({
        type: "mcpb-invalid-manifest",
        source: s,
        plugin: e.name,
        mcpbPath: t,
        validationError: o,
      });
    else
      n.push({
        type: "mcpb-extract-failed",
        source: s,
        plugin: e.name,
        mcpbPath: t,
        reason: o,
      });
    return null;
  }
}
async function wre(e, t = []) {
  if (Oe.CLAUDE_CODE_SKIP_PLUGIN_MCP_SERVERS) {
    T(
      `Skipping plugin MCP server discovery for "${e.name}" (CLAUDE_CODE_SKIP_PLUGIN_MCP_SERVERS is set)`,
    );
    return;
  }
  if (e.skipMcpDiscovery) return {};
  let n = {},
    r = _lt(e),
    o = (i) => {
      if (!r) return !1;
      if (n6(i))
        return (
          T(
            `Skipping MCPB source "${i}" for project-scope @skills-dir plugin "${e.name}": repo-supplied plugins must declare MCP servers inline or via a local in-dir .mcp.json (no pre-approval download).`,
            {
              level: "warn",
            },
          ),
          !0
        );
      if (kae(i) || i.split(/[/\\]/).some((a) => /^\.\. [ .]*$/.test(a)))
        return (
          T(
            `Skipping out-of-directory MCP source "${i}" for project-scope @skills-dir plugin "${e.name}": repo-supplied plugins may only reference files inside the plugin directory.`,
            {
              level: "warn",
            },
          ),
          !0
        );
      return !1;
    },
    s = await ido(e.path, ".mcp.json");
  if (s)
    n = {
      ...n,
      ...s,
    };
  if (e.manifest.mcpServers) {
    let i = e.manifest.mcpServers;
    if (typeof i === "string") {
      if (o(i));
      else if (n6(i)) {
        let a = await mCa(e, i, t);
        if (a)
          n = {
            ...n,
            ...a,
          };
      } else {
        let a = await ido(e.path, i);
        if (a)
          n = {
            ...n,
            ...a,
          };
      }
    } else if (Array.isArray(i)) {
      let a = await Promise.all(
        i.map(async (l) => {
          try {
            if (typeof l === "string") {
              if (o(l)) return null;
              if (n6(l)) return await mCa(e, l, t);
              return await ido(e.path, l);
            }
            return l;
          } catch (c) {
            return (
              T(`Failed to load MCP servers from spec for plugin ${e.name}: ${c}`, {
                level: "error",
              }),
              null
            );
          }
        }),
      );
      for (let l of a)
        if (l)
          n = {
            ...n,
            ...l,
          };
    } else
      n = {
        ...n,
        ...i,
      };
  }
  return Object.keys(n).length > 0 ? n : void 0;
}
async function ido(e, t) {
  let n = qt(),
    r = gCa.join(e, t),
    o;
  try {
    o = await n.readFile(r, {
      encoding: "utf-8",
    });
  } catch (s) {
    if (wn(s)) return null;
    return (
      T(`Failed to load MCP servers from ${r}: ${s}`, {
        level: "error",
      }),
      null
    );
  }
  try {
    let s = Ft(o),
      i = s.mcpServers || s,
      a = {};
    for (let [l, c] of Object.entries(i)) {
      let u = Nae().safeParse(c);
      if (u.success) a[l] = u.data;
      else
        T(`Invalid MCP server config for ${l} in ${r}: ${u.error.message}`, {
          level: "error",
        });
    }
    return a;
  } catch (s) {
    return (
      T(`Failed to load MCP servers from ${r}: ${s}`, {
        level: "error",
      }),
      null
    );
  }
}
function ado(e) {
  let t = e.manifest.channels;
  if (!t || t.length === 0) return [];
  let n = e.repository,
    r = [];
  for (let o of t) {
    if (!o.userConfig || Object.keys(o.userConfig).length === 0) continue;
    let s = rqe(n, o.server) ?? {};
    if (!eDe(s, o.userConfig).valid)
      r.push({
        server: o.server,
        displayName: tDe(o.displayName) ?? o.server,
        configSchema: o.userConfig,
      });
  }
  return r;
}
function cTp(e, t, n, r) {
  let o = {};
  for (let [s, i] of Object.entries(e)) {
    let a = `plugin:${t}:${s}`,
      l = {
        ...i,
        scope: "dynamic",
        pluginSource: n,
        pluginPath: r,
      };
    o[a] = l;
  }
  return o;
}
function uTp(e, t) {
  let n = e.manifest.userConfig,
    o = e.manifest.channels?.find((a) => a.server === t)?.userConfig;
  if (!n && !o) return;
  let s = n ? m$(Tre(e)) : void 0,
    i = o ? (rqe(e.repository, t) ?? void 0) : void 0;
  return fCa(
    {
      ...s,
      ...i,
    },
    {
      ...n,
      ...o,
    },
  );
}
function pTp(e, t, n, r, o, s) {
  let i = [],
    a,
    l,
    c = [],
    u = (p) => {
      let f = vre(p, t);
      if (n) f = $Se(f, n);
      let { expanded: m, missingVars: g } = gre(f);
      return (i.push(...g), m);
    },
    d;
  switch (e.type) {
    case void 0:
    case "stdio": {
      let p = {
        ...e,
      };
      if (p.command) p.command = u(p.command);
      if (p.args) p.args = p.args.map((m) => u(m));
      let f = {
        CLAUDE_PLUGIN_ROOT: t.path,
        CLAUDE_PLUGIN_DATA: Rue(t.source),
        ...(p.env || {}),
      };
      for (let [m, g] of Object.entries(f)) if (!dTp.has(m)) f[m] = u(g);
      ((p.env = f), (d = p));
      break;
    }
    case "sse":
    case "http":
    case "ws": {
      let p = {
        ...e,
      };
      l = p.url;
      let f = i.length;
      if (p.url) p.url = u(p.url);
      if (((c = i.slice(f)), p.headers)) {
        let m = {};
        for (let [g, h] of Object.entries(p.headers)) m[g] = u(h);
        p.headers = m;
      }
      if (p.headersHelper) p.headersHelper = u(p.headersHelper);
      d = p;
      break;
    }
    case "sse-ide":
    case "ws-ide":
    case "sdk":
    case "claudeai-proxy":
      d = e;
      break;
  }
  if (r && i.length > 0) {
    let f = Uo(i).join(", ");
    if (
      (T(`Missing environment variables in plugin MCP config: ${f}`, {
        level: "warn",
      }),
      o && s)
    )
      r.push({
        type: "mcp-config-invalid",
        source: t.source,
        plugin: o,
        serverName: s,
        validationError: `Missing environment variables: ${f}`,
      });
  }
  if ((d.type === "sse" || d.type === "http" || d.type === "ws") && "url" in d) {
    let p = !1;
    try {
      (new URL(d.url), (p = !0));
    } catch {}
    if (!p) {
      if (
        ((a =
          c.length > 0
            ? `Missing environment variables: ${Uo(c).join(", ")}`
            : l?.includes("${user_config.")
              ? `URL is unset or invalid \u2014 open /plugin manage and configure ${o ?? "the plugin"} options`
              : `Plugin ${o ?? t.source} has an invalid MCP url`),
        c.length === 0 && r && o && s)
      )
        r.push({
          type: "mcp-config-invalid",
          source: t.source,
          plugin: o,
          serverName: s,
          validationError: a,
        });
    }
  }
  return a
    ? {
        ...d,
        configError: a,
      }
    : d;
}
async function TUn(e, t = []) {
  if (!e.enabled) return;
  let n = e.mcpServers || (await wre(e, t));
  if (!n) return;
  let r = {};
  for (let [o, s] of Object.entries(n)) {
    let i = uTp(e, o);
    try {
      r[o] = pTp(s, e, i, t, e.name, o);
    } catch (a) {
      t?.push({
        type: "generic-error",
        source: o,
        plugin: e.name,
        error: be(a),
      });
    }
  }
  return cTp(r, e.name, e.source, e.path);
}
var gCa, ldo, dTp;
