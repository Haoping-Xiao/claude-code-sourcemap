// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module a5
// matched 2.1.88 source: src/services/mcp/config.ts
// class=modified  jaccard=0.3224  score=0.4808  fileCov=0.4946
// note: deminified; 34 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: unwrapCcrProxyUrl, suppressedConnectorsEqual, shouldSkipClaudeAiFetchForEnterpriseLockdown, shouldAllowManagedMcpServersOnly, setMcpServerEnabled, removeMcpConfig, readRawMcpJsonServersFromCwd, parseMcpConfigFromFilePath, parseMcpConfig, isMcpServerDisabled, isMcpServerDenied, isMcpServerBlockedAtConnectTime, isMcpServerAllowedByPolicy, isBuiltinInProcessMcpServer, getMcpServerSignature, getMcpScopeConflicts, getMcpConfigsByScope, getMcpConfigByName, getEnterpriseMcpFilePath, ge …
// [unwrapped __esm module a5] deps: Hp, iu, Qi, TM, Rc, kt, oo, er, gb, je, fn, Gx, Ls, qd, dr, dn, pdo, bCe
yTp = new Set(["ECONNABORTED", "ECONNRESET", "ECONNREFUSED", "ETIMEDOUT", "EAI_AGAIN"]);
rDe = Cn(async () => {
  let e = 0;
  oqe = void 0;
  try {
    let t = ml(process.env.ENABLE_CLAUDEAI_MCP_SERVERS),
      n = l2e();
    if (t || n)
      return (
        T(`[claudeai-mcp] Disabled via ${t ? "env var" : "disableClaudeAiConnectors setting"}`),
        G("tengu_claudeai_mcp_eligibility", {
          state: t ? We("disabled_env_var") : We("disabled_setting"),
        }),
        {}
      );
    if (lc("mcpClaudeAi"))
      return (
        T("[claudeai-mcp] Disabled in safe mode"),
        G("tengu_claudeai_mcp_eligibility", {
          state: We("safe_mode"),
        }),
        {}
      );
    if (!Jl())
      return (
        T("[claudeai-mcp] Disabled on third-party provider"),
        G("tengu_claudeai_mcp_eligibility", {
          state: We("third_party_provider"),
        }),
        {}
      );
    if (!bo()) {
      if (
        (T("[claudeai-mcp] Disabled: API-key auth precedence active"),
        G("tengu_claudeai_mcp_eligibility", {
          state: We("api_key_precedence"),
        }),
        Ws()?.scopes?.includes("user:mcp_servers"))
      )
        oqe = {
          level: "warn",
          message:
            "claude.ai connectors are disabled because ANTHROPIC_API_KEY or another auth source is set and takes precedence over your claude.ai login \xB7 Unset it to load your organization's connectors",
        };
      return {};
    }
    await ch();
    let r = Ws();
    if (!r?.accessToken)
      return (
        T("[claudeai-mcp] No access token"),
        G("tengu_claudeai_mcp_eligibility", {
          state: We("no_oauth_token"),
        }),
        {}
      );
    if (!r.scopes?.includes("user:mcp_servers")) {
      let p = process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE
        ? "[claudeai-mcp] inference token lacks user:mcp_servers scope \u2014 claude.ai org connectors disabled (locally-configured MCP servers in managed-mcp.json / .claude.json / .mcp.json are NOT affected by this check)"
        : `[claudeai-mcp] Missing user:mcp_servers scope (scopes=${r.scopes?.join(",") || "none"})`;
      return (
        T(p),
        G("tengu_claudeai_mcp_eligibility", {
          state: We("missing_scope"),
        }),
        {}
      );
    }
    let s = `${$s().BASE_API_URL}/v1/mcp_servers?limit=1000`;
    T(`[claudeai-mcp] Fetching from ${s}`);
    let i = () =>
        oL(() =>
          po.get(s, {
            headers: {
              Authorization: `Bearer ${Ws()?.accessToken ?? r.accessToken}`,
              "Content-Type": "application/json",
              "anthropic-beta": g2r.header,
              "anthropic-version": "2023-06-01",
              ..._Ca(),
            },
            timeout: ECa,
          }),
        ),
      a = Date.now(),
      l;
    while (true) {
      e++;
      try {
        l = await i();
        break;
      } catch (p) {
        if (e >= ACa || !_Tp(p)) throw p;
        let f = mTp * gTp ** (e - 1);
        if (Date.now() - a + f + ECa >= hTp)
          throw (T(`[claudeai-mcp] Retry budget exhausted after ${e} attempt(s)`), p);
        let m = po.isAxiosError(p) ? (p.response?.status ?? p.code ?? "unknown") : "unknown";
        (T(`[claudeai-mcp] Transient fetch error (${m}), retrying in ${f}ms (attempt ${e}/${ACa})`),
          await Nn(f));
      }
    }
    let c = new Map();
    for (let p of l.data.data) {
      let f = STp(p.url),
        m = c.get(f);
      if (m) {
        T(`[claudeai-mcp] Dropping duplicate upstream ${f}: keeping ${m.id}, dropping ${p.id}`);
        continue;
      }
      c.set(f, p);
    }
    let u = {},
      d = new Set();
    for (let p of c.values()) {
      let f = `claude.ai ${p.display_name}`,
        m = f,
        g = hc(m),
        h = 1;
      while (d.has(g)) (h++, (m = `${f} (${h})`), (g = hc(m)));
      if (h > 1)
        T(
          `[claudeai-mcp] Display-name collision on distinct upstreams: "${m}" (${p.id}, ${p.url})`,
        );
      (d.add(g),
        (u[m] = {
          type: "claudeai-proxy",
          url: p.url,
          id: p.id,
          displayName: p.display_name,
          iconUrl: p.icon_url,
          scope: "claudeai",
          toolPermissions: bTp(p.tools),
          stateless: p.stateless,
          cachedInitResponse: p.cached_init_response,
        }));
    }
    return (
      T(`[claudeai-mcp] Fetched ${Object.keys(u).length} servers`),
      G("tengu_claudeai_mcp_eligibility", {
        state: We("eligible"),
      }),
      xe("mcp_claudeai_fetch_configs"),
      u
    );
  } catch (t) {
    let n = po.isAxiosError(t) ? String(t.response?.status ?? t.code ?? "unknown") : "unknown";
    return (
      T(`[claudeai-mcp] Fetch failed (${n}) after ${e} attempt(s)`),
      G("tengu_claudeai_mcp_eligibility", {
        state: We("fetch_failed"),
        status: n,
        attempts: e,
      }),
      Le("mcp_claudeai_fetch_configs", "fetch_failed"),
      rDe.cache.clear?.(),
      {}
    );
  }
});
function getEnterpriseMcpFilePath() {
  return NSe.join(QC(), "managed-mcp.json");
}
function lF() {
  return Object.create(null);
}
function RUn(e, t) {
  let n = lF();
  if (e)
    for (let [r, o] of Object.entries(e))
      n[r] = {
        ...o,
        scope: t,
      };
  return n;
}
async function writeMcpjsonFile(config) {
  let t = NSe.join($t(), ".mcp.json"),
    n;
  try {
    n = (await oJ.stat(t)).mode;
  } catch (s) {
    if (on(s) !== "ENOENT") throw s;
  }
  let r = `${t}.tmp.${process.pid}.${Date.now()}`,
    o = await oJ.open(r, "w", n ?? 420);
  try {
    (await o.writeFile(De(config, null, 2), {
      encoding: "utf8",
    }),
      await o.datasync());
  } finally {
    await o.close();
  }
  try {
    if (n !== void 0) await oJ.chmod(r, n);
    await oJ.rename(r, t);
  } catch (s) {
    try {
      await oJ.unlink(r);
    } catch {}
    throw s;
  }
}
function LUn(e) {
  if (e.type !== void 0 && e.type !== "stdio") return null;
  let t = e;
  return [t.command, ...(t.args ?? [])];
}
function CCa(e, t) {
  if (e.length !== t.length) return false;
  return e.every((n, r) => n === t[r]);
}
function sDe(e) {
  return gre(e).expanded;
}
function DUn(e) {
  return "url" in e ? e.url : null;
}
function unwrapCcrProxyUrl(url) {
  if (!wzr.some((t) => url.includes(t))) return url;
  try {
    return new URL(url).searchParams.get("mcp_url") || url;
  } catch {
    return url;
  }
}
function getMcpServerSignature(config, t) {
  let n = LUn(config);
  if (n) {
    if (t?.includeEnv === false) return `stdio:${De(n)}`;
    let s = Object.entries(config.env ?? {})
        .filter(([a]) => !ETp.has(a))
        .sort(([a], [l]) => (a < l ? -1 : a > l ? 1 : 0)),
      i = s.length > 0 ? `:${De(Object.fromEntries(s))}` : "";
    return `stdio:${De(n)}${i}`;
  }
  let r = DUn(config);
  if (r) return `url:${unwrapCcrProxyUrl(r)}`;
  return null;
}
function dedupPluginMcpServers(pluginServers, manualServers) {
  let n = new Map();
  for (let [i, a] of Object.entries(manualServers)) {
    let l = getMcpServerSignature(a, {
      includeEnv: false,
    });
    if (l && !n.has(l)) n.set(l, i);
  }
  let r = {},
    o = [],
    s = new Map();
  for (let [i, a] of Object.entries(pluginServers)) {
    let l = getMcpServerSignature(a);
    if (l === null) {
      r[i] = a;
      continue;
    }
    let c = getMcpServerSignature(a, {
        includeEnv: false,
      }),
      u = c !== null ? n.get(c) : void 0;
    if (u !== void 0) {
      (T(`Suppressing plugin MCP server "${i}": duplicates manually-configured "${u}"`),
        o.push({
          name: i,
          duplicateOf: u,
        }));
      continue;
    }
    let d = s.get(l);
    if (d !== void 0) {
      (T(`Suppressing plugin MCP server "${i}": duplicates earlier plugin server "${d}"`),
        o.push({
          name: i,
          duplicateOf: d,
        }));
      continue;
    }
    (s.set(l, i), (r[i] = a));
  }
  return {
    servers: r,
    suppressed: o,
  };
}
function ATp(e) {
  let t = DUn(e);
  if (t) return unwrapCcrProxyUrl(t);
  let n = LUn(e);
  if (n) return n.join(" ");
  return e.type ?? "unknown";
}
function getMcpScopeConflicts(e) {
  let t = new Map();
  for (let { scope: r, servers: o } of e)
    for (let [s, i] of Object.entries(o)) {
      let a = getMcpServerSignature(i, {
        includeEnv: false,
      });
      if (!a) continue;
      let l = t.get(s);
      if (!l) t.set(s, (l = []));
      l.push({
        scope: r,
        sig: a,
        endpoint: ATp(i),
      });
    }
  let n = [];
  for (let [r, o] of t) {
    if (o.length < 2) continue;
    if (new Set(o.map((i) => i.sig)).size < 2) continue;
    let s = o.map((i) => xy("mcp remove", r, `-s ${i.scope}`)).filter((i) => i !== null);
    n.push({
      path: `mcpServers.${r}`,
      message: `Server "${r}" is defined in multiple scopes with different endpoints: ${o.map((i) => `${i.scope} (${i.endpoint})`).join(", ")}. OAuth tokens are stored per endpoint, so authenticating in one context will not carry over.`,
      severity: "warning",
      suggestion:
        s.length > 0
          ? `Keep the correct endpoint and remove the others: ${s.map((i) => `\`${i}\``).join(" or ")}`
          : "Keep the correct endpoint and remove the others from the scopes listed above.",
      mcpErrorMetadata: {
        scope: o[0].scope,
        serverName: r,
        severity: "warning",
      },
    });
  }
  return n;
}
function suppressedConnectorsEqual(e, t) {
  return (
    e.length === t.length &&
    e.every(
      (n, r) =>
        n.name === t[r]?.name &&
        n.duplicateOf === t[r]?.duplicateOf &&
        n.duplicateOfScope === t[r]?.duplicateOfScope,
    )
  );
}
async function dedupClaudeAiMcpServers(claudeAiServers, manualServers) {
  let n = await hIn(),
    r = new Map();
  for (let [i, a] of Object.entries(manualServers)) {
    if (isMcpServerDisabled(i)) continue;
    if ((a.type === "sse" || a.type === "http") && (bIn(i, a, n) || jwi(i, a, n))) continue;
    let l = getMcpServerSignature(a);
    if (l && !r.has(l))
      r.set(l, {
        name: i,
        scope: a.scope,
      });
  }
  let o = {},
    s = [];
  for (let [i, a] of Object.entries(claudeAiServers)) {
    let l = getMcpServerSignature(a),
      c = l !== null ? r.get(l) : void 0;
    if (c !== void 0) {
      (T(`Suppressing claude.ai connector "${i}": duplicates manually-configured "${c.name}"`),
        s.push({
          name: i,
          duplicateOf: c.name,
          duplicateOfScope: c.scope,
        }));
      continue;
    }
    o[i] = a;
  }
  return {
    servers: o,
    suppressed: s,
  };
}
function getMcpAllowlistSettings() {
  if (shouldAllowManagedMcpServersOnly()) return yn("policySettings") ?? {};
  return Dr();
}
function TTp() {
  return Dr();
}
function isMcpServerDenied(e, t) {
  let n = TTp();
  if (!n.deniedMcpServers) return false;
  for (let r of n.deniedMcpServers) if ($et(r) && r.serverName === e) return true;
  if (t) {
    let r = LUn(t);
    if (r) {
      let s = r.map(sDe);
      for (let i of n.deniedMcpServers) if (dmn(i) && CCa(i.serverCommand.map(sDe), s)) return true;
    }
    let o = DUn(t);
    if (o) {
      let s = sDe(o);
      for (let i of n.deniedMcpServers) if (pmn(i) && d3t(s, sDe(i.serverUrl))) return true;
    }
  }
  return false;
}
function isMcpServerAllowedByPolicy(e, t) {
  if (isMcpServerDenied(e, t)) return false;
  let n = getMcpAllowlistSettings();
  if (!n.allowedMcpServers) return true;
  if (n.allowedMcpServers.length === 0) return false;
  let r = n.allowedMcpServers.some(dmn),
    o = n.allowedMcpServers.some(pmn);
  if (t) {
    let s = LUn(t),
      i = DUn(t);
    if (s) {
      if (r) {
        let a = s.map(sDe);
        for (let l of n.allowedMcpServers)
          if (dmn(l) && CCa(l.serverCommand.map(sDe), a)) return true;
        return false;
      } else {
        for (let a of n.allowedMcpServers) if ($et(a) && a.serverName === e) return true;
        return false;
      }
    } else if (i) {
      if (o) {
        let a = sDe(i);
        for (let l of n.allowedMcpServers) if (pmn(l) && d3t(a, sDe(l.serverUrl))) return true;
        return false;
      } else {
        for (let a of n.allowedMcpServers) if ($et(a) && a.serverName === e) return true;
        return false;
      }
    } else {
      for (let a of n.allowedMcpServers) if ($et(a) && a.serverName === e) return true;
      return false;
    }
  }
  for (let s of n.allowedMcpServers) if ($et(s) && s.serverName === e) return true;
  return false;
}
function isBuiltinInProcessMcpServer(e) {
  return bbe(e) || uke(e);
}
function filterMcpServersByPolicy(e) {
  let t = {},
    n = [];
  for (let [r, o] of Object.entries(e)) {
    let s = o;
    if (s.type === "sdk" || isMcpServerAllowedByPolicy(r, s)) t[r] = o;
    else n.push(r);
  }
  return {
    allowed: t,
    blocked: n,
  };
}
function isMcpServerBlockedAtConnectTime(e, t) {
  if (!vTp.has(t.scope)) return false;
  if (t.scope === "claudeai" && l2e()) return true;
  if (t.type === "sdk") return false;
  if (isBuiltinInProcessMcpServer(e) || t.type === "sse-ide" || t.type === "ws-ide")
    return isMcpServerDenied(e, t);
  return !isMcpServerAllowedByPolicy(e, t);
}
function filterDynamicMcpServersByPolicy(e) {
  if (!e)
    return {
      configs: {},
      blocked: [],
    };
  let t = {},
    n = [];
  for (let [r, o] of Object.entries(e))
    if (isMcpServerBlockedAtConnectTime(r, o)) n.push(r);
    else t[r] = o;
  return {
    configs: t,
    blocked: n,
  };
}
function expandEnvVars(config) {
  let t = [];
  function n(o) {
    let { expanded: s, missingVars: i } = gre(o);
    return (t.push(...i), s);
  }
  let r;
  switch (config.type) {
    case void 0:
    case "stdio": {
      let o = config;
      r = {
        ...o,
        command: n(o.command),
        args: o.args.map(n),
        env: o.env ? xw(o.env, n) : void 0,
      };
      break;
    }
    case "sse":
    case "http":
    case "ws": {
      let o = config;
      r = {
        ...o,
        url: n(o.url),
        headers: o.headers ? xw(o.headers, n) : void 0,
      };
      break;
    }
    case "sse-ide":
    case "ws-ide":
      r = config;
      break;
    case "sdk":
      r = config;
      break;
    case "claudeai-proxy":
      r = config;
      break;
  }
  return {
    expanded: r,
    missingVars: Uo(t),
  };
}
async function addMcpConfig(name, config, scope) {
  if (name.match(/[^a-zA-Z0-9_-]/))
    throw Error(
      `Invalid name ${name}. Names can only contain letters, numbers, hyphens, and underscores.`,
    );
  if (bbe(name)) throw Error(`Cannot add MCP server "${name}": this name is reserved.`);
  if (uke(name)) throw Error(`Cannot add MCP server "${name}": this name is reserved.`);
  if (name === Met) throw Error(`Cannot add MCP server "${name}": this name is reserved.`);
  if (doesEnterpriseMcpConfigExist())
    throw Error(
      "Cannot add MCP server: enterprise MCP configuration is active and has exclusive control over MCP servers",
    );
  let r = Nae().safeParse(config);
  if (!r.success) {
    let s = r.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join(", ");
    throw Error(`Invalid configuration: ${s}`);
  }
  let o = r.data;
  if (isMcpServerDenied(name, o))
    throw Error(
      `Cannot add MCP server "${name}": server is explicitly blocked by enterprise policy`,
    );
  if (!isMcpServerAllowedByPolicy(name, o))
    throw Error(`Cannot add MCP server "${name}": not allowed by enterprise policy`);
  switch (scope) {
    case "project": {
      let s = await readRawMcpJsonServersFromCwd();
      if (Object.hasOwn(s, name)) throw Error(`MCP server ${name} already exists in .mcp.json`);
      break;
    }
    case "user": {
      if (Dt().mcpServers?.[name]) throw Error(`MCP server ${name} already exists in user config`);
      break;
    }
    case "local": {
      if (Lg().mcpServers?.[name]) throw Error(`MCP server ${name} already exists in local config`);
      break;
    }
    case "dynamic":
      throw Error("Cannot add MCP server to scope: dynamic");
    case "enterprise":
      throw Error("Cannot add MCP server to scope: enterprise");
    case "claudeai":
      throw Error("Cannot add MCP server to scope: claudeai");
  }
  switch (scope) {
    case "project": {
      let s = await readRawMcpJsonServersFromCwd();
      s[name] = o;
      try {
        await writeMcpjsonFile({
          mcpServers: s,
        });
      } catch (i) {
        throw (
          Le("mcp_config_add", "mcp_config_write_failed"),
          Error(`Failed to write to .mcp.json: ${i}`)
        );
      }
      break;
    }
    case "user": {
      gn((s) => ({
        ...s,
        mcpServers: {
          ...s.mcpServers,
          [name]: o,
        },
      }));
      break;
    }
    case "local": {
      pH((s) => ({
        ...s,
        mcpServers: {
          ...s.mcpServers,
          [name]: o,
        },
      }));
      break;
    }
    default:
      throw Error(`Cannot add MCP server to scope: ${scope}`);
  }
  xe("mcp_config_add");
}
async function removeMcpConfig(name, scope) {
  switch (scope) {
    case "project": {
      let n = await readRawMcpJsonServersFromCwd();
      if (!Object.hasOwn(n, name)) throw Error(`No MCP server named "${name}" in .mcp.json`);
      delete n[name];
      try {
        await writeMcpjsonFile({
          mcpServers: n,
        });
      } catch (r) {
        throw (
          Le("mcp_config_remove", "mcp_config_write_failed"),
          Error(`Failed to remove from .mcp.json: ${r}`)
        );
      }
      break;
    }
    case "user": {
      if (!Dt().mcpServers?.[name]) throw Error(`No MCP server named "${name}" in user scope`);
      gn((r) => {
        let { [name]: o, ...s } = r.mcpServers ?? {};
        return {
          ...r,
          mcpServers: s,
        };
      });
      break;
    }
    case "local": {
      if (!Lg().mcpServers?.[name]) throw Error(`No MCP server named "${name}" in local scope`);
      pH((r) => {
        let { [name]: o, ...s } = r.mcpServers ?? {};
        return {
          ...r,
          mcpServers: s,
        };
      });
      break;
    }
    default:
      throw Error(`Cannot remove MCP server from scope: ${scope}`);
  }
  xe("mcp_config_remove");
}
async function readRawMcpJsonServersFromCwd() {
  let e = NSe.join($t(), ".mcp.json"),
    t;
  try {
    t = await oJ.readFile(e, "utf8");
  } catch (r) {
    if (on(r) === "ENOENT") return {};
    throw r;
  }
  if (!t.trim()) return {};
  let n = H.object({
    mcpServers: H.record(H.string(), H.unknown()).default({}),
  }).safeParse(Ia(t, false));
  if (!n.success)
    throw Error(".mcp.json is malformed (not valid JSON, or mcpServers is not an object)");
  return n.data.mcpServers;
}
function getMcpConfigsByScope(scope, { expandVars: t = true } = {}) {
  if (da())
    return {
      servers: lF(),
      errors: [],
    };
  let n = {
    project: "projectSettings",
    user: "userSettings",
    local: "localSettings",
  };
  if (scope in n && !Om(n[scope]))
    return {
      servers: lF(),
      errors: [],
    };
  switch (scope) {
    case "project": {
      let r = lF(),
        o = [],
        s = [],
        i = yr();
      while (i !== NSe.parse(i).root) (s.push(i), (i = NSe.dirname(i)));
      for (let a of s.reverse()) {
        let l = NSe.join(a, ".mcp.json"),
          { config: c, errors: u } = parseMcpConfigFromFilePath({
            filePath: l,
            expandVars: t,
            scope: "project",
          });
        if (!c) {
          let d = u.filter((p) => !p.message.startsWith("MCP config file not found"));
          if (d.length > 0)
            (T(`MCP config errors for ${l}: ${De(d.map((p) => p.message))}`, {
              level: "error",
            }),
              o.push(...d));
          continue;
        }
        if (c.mcpServers) Object.assign(r, RUn(c.mcpServers, scope));
        if (u.length > 0) o.push(...u);
      }
      return {
        servers: r,
        errors: o,
      };
    }
    case "user": {
      let r = Dt().mcpServers;
      if (!r)
        return {
          servers: lF(),
          errors: [],
        };
      let { config: o, errors: s } = parseMcpConfig({
        configObject: {
          mcpServers: r,
        },
        expandVars: t,
        scope: "user",
      });
      return {
        servers: RUn(o?.mcpServers, scope),
        errors: s,
      };
    }
    case "local": {
      let r = Lg().mcpServers;
      if (!r)
        return {
          servers: lF(),
          errors: [],
        };
      let { config: o, errors: s } = parseMcpConfig({
        configObject: {
          mcpServers: r,
        },
        expandVars: t,
        scope: "local",
      });
      return {
        servers: RUn(o?.mcpServers, scope),
        errors: s,
      };
    }
    case "enterprise": {
      let r = getEnterpriseMcpFilePath(),
        { config: o, errors: s } = parseMcpConfigFromFilePath({
          filePath: r,
          expandVars: t,
          scope: "enterprise",
        });
      if (!o) {
        let i = s.filter((a) => !a.message.startsWith("MCP config file not found"));
        if (i.length > 0)
          return (
            T(`Enterprise MCP config errors for ${r}: ${De(i.map((a) => a.message))}`, {
              level: "error",
            }),
            {
              servers: lF(),
              errors: i,
            }
          );
        return {
          servers: lF(),
          errors: [],
        };
      }
      return {
        servers: RUn(o.mcpServers, scope),
        errors: s,
      };
    }
  }
}
function getMcpConfigByName(e) {
  let { servers: t } = getMcpConfigsByScope("enterprise");
  if (VE("mcp")) return t[e] ?? null;
  let { servers: n } = getMcpConfigsByScope("user"),
    { servers: r } = getMcpConfigsByScope("project"),
    { servers: o } = getMcpConfigsByScope("local");
  if (t[e]) return t[e];
  if (o[e]) return o[e];
  if (r[e] && aqe(e) === "approved") return r[e];
  if (n[e]) return n[e];
  return null;
}
async function getClaudeCodeMcpConfigs(e = {}, t = {}) {
  if (lc("mcpAutoDiscovered"))
    return {
      servers: lF(),
      pendingProjectServers: new Set(),
      rejectedProjectServers: new Set(),
      errors: [],
      warnings: [],
    };
  let { servers: n } = getMcpConfigsByScope("enterprise");
  if (doesEnterpriseMcpConfigExist()) {
    let I = lF();
    for (let [k, D] of Object.entries(n)) {
      if (!isMcpServerAllowedByPolicy(k, D)) continue;
      I[k] = D;
    }
    return {
      servers: I,
      pendingProjectServers: new Set(),
      rejectedProjectServers: new Set(),
      errors: [],
      warnings: [],
    };
  }
  let r = VE("mcp"),
    o = {
      servers: lF(),
    },
    { servers: s } = r ? o : getMcpConfigsByScope("user"),
    { servers: i } = r ? o : getMcpConfigsByScope("project"),
    { servers: a } = r ? o : getMcpConfigsByScope("local"),
    l = r ? lF() : SIn(),
    c = lF(),
    u = t.pluginLoadResult ?? (await mp()),
    d = [],
    p = [];
  if (u.errors.length > 0)
    for (let I of u.errors)
      if (
        I.type === "mcp-config-invalid" ||
        I.type === "mcpb-download-failed" ||
        I.type === "mcpb-extract-failed" ||
        I.type === "mcpb-invalid-manifest"
      ) {
        let k = `Plugin MCP loading error - ${I.type}: ${iS(I)}`;
        T(k, {
          level: "error",
        });
      } else {
        let k = I.type;
        T(`Plugin not available for MCP: ${I.source} - error type: ${k}`);
      }
  let f = new Set(),
    m = new Set(),
    g = t.includePendingProjectServers || t.includeRejectedProjectServers ? g3t : aqe,
    h = await Promise.all(
      u.enabled.map(async (I) => {
        let k = await TUn(I, d);
        if (!k || !_lt(I)) return k;
        return cv(k, (D, P) => {
          let O = g(P);
          if (O === "approved") return true;
          if (O === "pending" && t.includePendingProjectServers) return (f.add(P), true);
          if (O === "rejected" && t.includeRejectedProjectServers) return (m.add(P), true);
          return false;
        });
      }),
    );
  for (let I of h) if (I) Object.assign(c, I);
  if (d.length > 0)
    for (let I of d) {
      let k = `Plugin MCP server error - ${I.type}: ${iS(I)}`;
      T(k, {
        level: "error",
      });
    }
  let y = lF();
  for (let [I, k] of Object.entries(i)) {
    let D = g(I);
    if (D === "approved") {
      y[I] = k;
      continue;
    }
    if (I in a || I in s || I in c || l[I]) continue;
    if (D === "pending" && t.includePendingProjectServers) ((y[I] = k), f.add(I));
    else if (D === "rejected" && t.includeRejectedProjectServers) ((y[I] = k), m.add(I));
  }
  let b = {};
  for (let [I, k] of Object.entries({
    ...l,
    ...s,
    ...y,
    ...a,
    ...e,
  }))
    if (!isMcpServerDisabled(I) && !f.has(I) && !m.has(I) && isMcpServerAllowedByPolicy(I, k))
      b[I] = k;
  let _ = {},
    S = {};
  for (let [I, k] of Object.entries(c))
    if (isMcpServerDisabled(I) || f.has(I) || m.has(I) || !isMcpServerAllowedByPolicy(I, k))
      S[I] = k;
    else _[I] = k;
  let { servers: A, suppressed: v } = dedupPluginMcpServers(_, b);
  Object.assign(A, S);
  for (let { name: I, duplicateOf: k } of v) {
    let D = I.split(":");
    if (D[0] !== "plugin" || D.length < 3) continue;
    p.push({
      type: "mcp-server-suppressed-duplicate",
      source: I,
      plugin: D[1],
      serverName: D.slice(2).join(":"),
      duplicateOf: k,
    });
  }
  let C = Object.assign({}, l, A, s, y, a),
    x = lF();
  for (let [I, k] of Object.entries(C)) {
    if (!isMcpServerAllowedByPolicy(I, k)) continue;
    x[I] = k;
  }
  for (let I of [f, m])
    for (let k of I) {
      let D = x[k]?.scope;
      if (D !== "project" && D !== "dynamic") I.delete(k);
    }
  return {
    servers: x,
    pendingProjectServers: f,
    rejectedProjectServers: m,
    errors: d,
    warnings: p,
  };
}
async function getAllMcpConfigs(e = {}) {
  if (shouldSkipClaudeAiFetchForEnterpriseLockdown()) return getClaudeCodeMcpConfigs({}, e);
  let t = rDe(),
    {
      servers: n,
      pendingProjectServers: r,
      rejectedProjectServers: o,
      errors: s,
      warnings: i,
    } = await getClaudeCodeMcpConfigs({}, e),
    { allowed: a } = filterMcpServersByPolicy((await t) ?? {});
  xUn();
  let l =
      e.includePendingProjectServers || e.includeRejectedProjectServers
        ? cv(n, (d, p) => !r.has(p) && !o.has(p))
        : n,
    { servers: c } = await dedupClaudeAiMcpServers(a, l),
    u = Object.assign(lF(), c, n);
  for (let d of [r, o]) for (let p of d) if (Object.hasOwn(c, p)) ((u[p] = c[p]), d.delete(p));
  return {
    servers: u,
    pendingProjectServers: r,
    rejectedProjectServers: o,
    errors: s,
    warnings: i,
  };
}
async function getConnectablePluginMcpServerNames(e = {}) {
  if (zve()) return new Set();
  let t = await Ado(),
    { servers: n } = await getClaudeCodeMcpConfigs(e, {
      pluginLoadResult: t,
    }),
    r = new Set();
  for (let [o, s] of Object.entries(n)) if (s.pluginSource !== void 0) r.add(o);
  return r;
}
function parseMcpConfig(params) {
  let { configObject: t, expandVars: n, scope: r, filePath: o } = params,
    s = H.object({
      mcpServers: H.record(H.string(), H.unknown()),
    }).safeParse(t);
  if (!s.success) {
    let c = t !== null && typeof t === "object" && "servers" in t && !("mcpServers" in t);
    return {
      config: null,
      errors: s.error.issues.map((u) => ({
        ...(o && {
          file: o,
        }),
        path: u.path.join("."),
        message: c
          ? 'Missing "mcpServers" \u2014 found "servers" instead. Claude Code reads MCP servers from the "mcpServers" key.'
          : u.message,
        ...(c && {
          suggestion: `Rename the top-level "servers" key to "mcpServers" in ${o ?? "your MCP config"}.`,
        }),
        mcpErrorMetadata: {
          scope: r,
          severity: "fatal",
        },
      })),
    };
  }
  let i = [],
    a = {};
  function l(c, u, d) {
    i.push({
      ...(o && {
        file: o,
      }),
      path: `mcpServers.${c}`,
      message: u,
      ...(d && {
        suggestion: d,
      }),
      mcpErrorMetadata: {
        scope: r,
        serverName: c,
        severity: "warning",
      },
    });
  }
  for (let [c, u] of Object.entries(s.data.mcpServers)) {
    let d =
        u && typeof u === "object" && "type" in u && typeof u.type === "string" ? u.type : "stdio",
      p = Object.hasOwn(TCa, d) ? TCa[d] : void 0;
    if (!p) {
      l(
        c,
        `Skipped \u2014 unknown MCP server type "${d}" for server "${c}"`,
        "Valid types are: stdio, sse, http (or streamable-http), ws, sdk",
      );
      continue;
    }
    let f = p().safeParse(u);
    if (!f.success) {
      let h = f.error.issues
        .map((y) => {
          let b = y.message.replace(/^Invalid input: /, "");
          return `${y.path.join(".") || "(root)"}: ${b}`;
        })
        .join("; ");
      l(c, `Skipped \u2014 invalid MCP server config for "${c}": ${h}`);
      continue;
    }
    let m = f.data;
    if (mlt(c) && m.type !== "sdk") {
      l(
        c,
        `"${c}" is a reserved MCP server name and was not loaded`,
        `Rename this server in your MCP config \u2014 "${c}" is reserved for internal use`,
      );
      continue;
    }
    let g = m;
    if (n) {
      let { expanded: h, missingVars: y } = expandEnvVars(m);
      if (y.length > 0)
        l(
          c,
          `Missing environment variables: ${y.join(", ")}`,
          `Set the following environment variables: ${y.join(", ")}`,
        );
      g = h;
    }
    a[c] = g;
  }
  return {
    config: {
      mcpServers: a,
    },
    errors: i,
  };
}
function parseMcpConfigFromFilePath(params) {
  let { filePath: t, expandVars: n, scope: r } = params,
    o = qt(),
    s;
  try {
    s = o.readFileSync(t, {
      encoding: "utf8",
    });
  } catch (a) {
    if (on(a) === "ENOENT")
      return {
        config: null,
        errors: [
          {
            file: t,
            path: "",
            message: `MCP config file not found: ${t}`,
            suggestion: "Check that the file path is correct",
            mcpErrorMetadata: {
              scope: r,
              severity: "fatal",
            },
          },
        ],
      };
    return (
      T(`MCP config read error for ${t} (scope=${r}): ${a}`, {
        level: "error",
      }),
      Le("mcp_config_parse", "mcp_config_read_failed"),
      {
        config: null,
        errors: [
          {
            file: t,
            path: "",
            message: `Failed to read file: ${a}`,
            suggestion: "Check file permissions and ensure the file exists",
            mcpErrorMetadata: {
              scope: r,
              severity: "fatal",
            },
          },
        ],
      }
    );
  }
  let i = Ia(s, false);
  if (!i)
    return (
      T(
        `MCP config is not valid JSON: ${t} (scope=${r}, length=${s.length}, first100=${De(s.slice(0, 100))})`,
        {
          level: "error",
        },
      ),
      Le("mcp_config_parse", "mcp_config_invalid_json"),
      {
        config: null,
        errors: [
          {
            file: t,
            path: "",
            message: "MCP config is not a valid JSON",
            suggestion: "Fix the JSON syntax errors in the file",
            mcpErrorMetadata: {
              scope: r,
              severity: "fatal",
            },
          },
        ],
      }
    );
  return (
    xe("mcp_config_parse"),
    parseMcpConfig({
      configObject: i,
      expandVars: n,
      scope: r,
      filePath: t,
    })
  );
}
function shouldSkipClaudeAiFetchForEnterpriseLockdown() {
  if (!doesEnterpriseMcpConfigExist()) return false;
  if (zee().some((e) => e.allowAllClaudeAiMcps === true)) return false;
  return true;
}
function shouldAllowManagedMcpServersOnly() {
  return yn("policySettings")?.allowManagedMcpServersOnly === true;
}
function areMcpConfigsAllSdkType(e) {
  return Object.values(e).every((t) => t.type === "sdk");
}
function areMcpConfigsAllowedWithEnterpriseMcpConfig(configs) {
  return Object.values(configs).every((t) => t.type === "sdk" && t.name === "claude-vscode");
}
function gdo(e) {
  return e === S7;
}
function isMcpServerDisabled(e) {
  let t = Lg();
  if (gdo(e)) return !(t.enabledMcpServers || []).includes(e);
  return (t.disabledMcpServers || []).includes(e);
}
function vCa(e, t, n) {
  if (e.includes(t) === n) return e;
  return n ? [...e, t] : e.filter((o) => o !== t);
}
function setMcpServerEnabled(name, enabled) {
  let n = gdo(name) && isMcpServerDisabled(name) === enabled;
  if (
    (pH((r) => {
      if (gdo(name)) {
        let i = r.enabledMcpServers || [],
          a = vCa(i, name, enabled);
        if (a === i) return r;
        return {
          ...r,
          enabledMcpServers: a,
        };
      }
      let o = r.disabledMcpServers || [],
        s = vCa(o, name, !enabled);
      if (s === o) return r;
      return {
        ...r,
        disabledMcpServers: s,
      };
    }),
    n)
  )
    G("tengu_builtin_mcp_toggle", {
      serverName: name,
      enabled: enabled,
    });
  xe("mcp_server_toggle");
}
var oJ, NSe, ETp, vTp, MCP_SETTINGS_SCOPES, TCa, doesEnterpriseMcpConfigExist;
