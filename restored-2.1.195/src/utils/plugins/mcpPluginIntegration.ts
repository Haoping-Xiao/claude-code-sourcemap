// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module i5
// matched 2.1.88 source: src/utils/plugins/mcpPluginIntegration.ts
// class=modified  jaccard=0.379  score=0.6645  fileCov=0.4687
// note: deminified; 6 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module i5] deps: Qi, Gwe, ft, je, At, SG, R9, dr, vdt, B1
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
async function loadMcpServersFromMcpb(plugin, mcpbPath, errors) {
  try {
    T(`Loading MCP servers from MCPB: ${mcpbPath}`);
    let r = plugin.repository,
      o = await c3t(mcpbPath, plugin.path, r, (a) => {
        T(`MCPB [${plugin.name}]: ${a}`);
      });
    if ("status" in o && o.status === "needs-config")
      return (
        T(
          `MCPB ${mcpbPath} requires user configuration. ` +
            `User can configure via: /plugin \u2192 Manage plugins \u2192 ${plugin.name} \u2192 Configure`,
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
    T(`Failed to load MCPB ${mcpbPath}: ${o}`, {
      level: "error",
    });
    let s = plugin.repository;
    if (mcpbPath.startsWith("http") && (o.includes("download") || o.includes("network")))
      errors.push({
        type: "mcpb-download-failed",
        source: s,
        plugin: plugin.name,
        url: mcpbPath,
        reason: o,
      });
    else if (o.includes("manifest") || o.includes("user configuration"))
      errors.push({
        type: "mcpb-invalid-manifest",
        source: s,
        plugin: plugin.name,
        mcpbPath: mcpbPath,
        validationError: o,
      });
    else
      errors.push({
        type: "mcpb-extract-failed",
        source: s,
        plugin: plugin.name,
        mcpbPath: mcpbPath,
        reason: o,
      });
    return null;
  }
}
async function loadPluginMcpServers(plugin, t = []) {
  if (Oe.CLAUDE_CODE_SKIP_PLUGIN_MCP_SERVERS) {
    T(
      `Skipping plugin MCP server discovery for "${plugin.name}" (CLAUDE_CODE_SKIP_PLUGIN_MCP_SERVERS is set)`,
    );
    return;
  }
  if (plugin.skipMcpDiscovery) return {};
  let n = {},
    r = _lt(plugin),
    o = (i) => {
      if (!r) return false;
      if (n6(i))
        return (
          T(
            `Skipping MCPB source "${i}" for project-scope @skills-dir plugin "${plugin.name}": repo-supplied plugins must declare MCP servers inline or via a local in-dir .mcp.json (no pre-approval download).`,
            {
              level: "warn",
            },
          ),
          true
        );
      if (kae(i) || i.split(/[/\\]/).some((a) => /^\.\. [ .]*$/.test(a)))
        return (
          T(
            `Skipping out-of-directory MCP source "${i}" for project-scope @skills-dir plugin "${plugin.name}": repo-supplied plugins may only reference files inside the plugin directory.`,
            {
              level: "warn",
            },
          ),
          true
        );
      return false;
    },
    s = await loadMcpServersFromFile(plugin.path, ".mcp.json");
  if (s)
    n = {
      ...n,
      ...s,
    };
  if (plugin.manifest.mcpServers) {
    let i = plugin.manifest.mcpServers;
    if (typeof i === "string") {
      if (o(i));
      else if (n6(i)) {
        let a = await loadMcpServersFromMcpb(plugin, i, t);
        if (a)
          n = {
            ...n,
            ...a,
          };
      } else {
        let a = await loadMcpServersFromFile(plugin.path, i);
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
              if (n6(l)) return await loadMcpServersFromMcpb(plugin, l, t);
              return await loadMcpServersFromFile(plugin.path, l);
            }
            return l;
          } catch (c) {
            return (
              T(`Failed to load MCP servers from spec for plugin ${plugin.name}: ${c}`, {
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
async function loadMcpServersFromFile(pluginPath, relativePath) {
  let n = qt(),
    r = gCa.join(pluginPath, relativePath),
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
function addPluginScopeToServers(servers, pluginName, pluginSource, r) {
  let o = {};
  for (let [s, i] of Object.entries(servers)) {
    let a = `plugin:${pluginName}:${s}`,
      l = {
        ...i,
        scope: "dynamic",
        pluginSource: pluginSource,
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
function resolvePluginMcpEnvironment(config, plugin, userConfig, errors, pluginName, serverName) {
  let i = [],
    a,
    l,
    c = [],
    u = (p) => {
      let f = vre(p, plugin);
      if (userConfig) f = $Se(f, userConfig);
      let { expanded: m, missingVars: g } = gre(f);
      return (i.push(...g), m);
    },
    d;
  switch (config.type) {
    case void 0:
    case "stdio": {
      let p = {
        ...config,
      };
      if (p.command) p.command = u(p.command);
      if (p.args) p.args = p.args.map((m) => u(m));
      let f = {
        CLAUDE_PLUGIN_ROOT: plugin.path,
        CLAUDE_PLUGIN_DATA: Rue(plugin.source),
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
        ...config,
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
      d = config;
      break;
  }
  if (errors && i.length > 0) {
    let f = Uo(i).join(", ");
    if (
      (T(`Missing environment variables in plugin MCP config: ${f}`, {
        level: "warn",
      }),
      pluginName && serverName)
    )
      errors.push({
        type: "mcp-config-invalid",
        source: plugin.source,
        plugin: pluginName,
        serverName: serverName,
        validationError: `Missing environment variables: ${f}`,
      });
  }
  if ((d.type === "sse" || d.type === "http" || d.type === "ws") && "url" in d) {
    let p = false;
    try {
      (new URL(d.url), (p = true));
    } catch {}
    if (!p) {
      if (
        ((a =
          c.length > 0
            ? `Missing environment variables: ${Uo(c).join(", ")}`
            : l?.includes("${user_config.")
              ? `URL is unset or invalid \u2014 open /plugin manage and configure ${pluginName ?? "the plugin"} options`
              : `Plugin ${pluginName ?? plugin.source} has an invalid MCP url`),
        c.length === 0 && errors && pluginName && serverName)
      )
        errors.push({
          type: "mcp-config-invalid",
          source: plugin.source,
          plugin: pluginName,
          serverName: serverName,
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
async function extractMcpServersFromPlugins(plugins, t = []) {
  if (!plugins.enabled) return;
  let n = plugins.mcpServers || (await loadPluginMcpServers(plugins, t));
  if (!n) return;
  let r = {};
  for (let [o, s] of Object.entries(n)) {
    let i = uTp(plugins, o);
    try {
      r[o] = resolvePluginMcpEnvironment(s, plugins, i, t, plugins.name, o);
    } catch (a) {
      t?.push({
        type: "generic-error",
        source: o,
        plugin: plugins.name,
        error: be(a),
      });
    }
  }
  return addPluginScopeToServers(r, plugins.name, plugins.source, plugins.path);
}
var gCa, ldo, dTp;
