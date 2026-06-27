// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Kv
// matched 2.1.88 source: src/services/mcp/utils.ts
// class=modified  jaccard=0.3896  score=0.7044  fileCov=0.4658
// note: deminified; 8 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Kv] deps: Sae, Qi, ghe, Xr, ft, w8, VM, S_e, er, gb, Lo, je, At, ys, Rd, QH, nDe, $g, Xh, vf, hY, L7, dr, lj, Jt, cdo, dn, kt, Yle, a5, sst, MPn, bCe, kst, g$
((oJ = require("fs/promises")), (NSe = require("path")));
ETp = new Set(ldo);
vTp = new Set(["dynamic", "agent", "claudeai"]);
_do = ["enterprise", "local", "user", "project"];
TCa = {
  stdio: YRt,
  sse: qRr,
  http: Kfn,
  "streamable-http": Kfn,
  ws: VRr,
  sdk: zRr,
  "claudeai-proxy": KRr,
};
Z1 = Cn(() => {
  let { config: e } = Rdt({
    filePath: p3t(),
    expandVars: true,
    scope: "enterprise",
  });
  return e !== null;
});
function gk(e) {
  return e.name?.startsWith("mcp__") || e.isMcp === true;
}
function iDe(e) {
  return e.mcpInfo?.serverName ?? (e.name?.startsWith("mcp__") ? e.name.split("__")[1] : void 0);
}
function MUn(e) {
  if (e.type !== "failed") return false;
  let t = e.config.type ?? "";
  if (!CTp.has(t)) return false;
  if (e.errorCode !== void 0) return Tdo.has(e.errorCode);
  return t === "sse";
}
function sde(e, t) {
  let n = `mcp__${hc(t)}__`;
  return e.filter((r) => r.name?.startsWith(n));
}
function $4(e, t) {
  let n = hc(t),
    r = e.name;
  if (!r) return false;
  return r.startsWith(`mcp__${n}__`) || r.startsWith(`${n}:`);
}
function $Un(e, t) {
  return e.filter((n) => $4(n, t) && !(n.type === "prompt" && n.loadedFrom === "mcp"));
}
function OUn(e, t) {
  let n = `mcp__${hc(t)}__`;
  return e.filter((r) => !r.name?.startsWith(n));
}
function $dt(e, t) {
  return e.filter((n) => !$4(n, t));
}
function Odt(e, t) {
  let n = {
    ...e,
  };
  return (delete n[t], n);
}
function hashMcpConfig(config) {
  let { scope: t, pluginSource: n, pluginPath: r, configError: o, ...s } = config,
    i = s;
  if ((delete i.tools, i.type === "stdio" || (i.type === void 0 && "command" in i)))
    ((i.type = "stdio"), (i.args = i.args ?? []));
  let a = De(i, (l, c) => {
    if (c && typeof c === "object" && !Array.isArray(c)) {
      let u = c,
        d = {};
      for (let p of Object.keys(u).sort()) d[p] = u[p];
      return d;
    }
    return c;
  });
  return RCa.createHash("sha256").update(a).digest("hex").slice(0, 16);
}
function DCa(e, t) {
  let n = e.clients.filter((l) => {
    let c = t[l.name];
    if (!c) {
      if (l.config.scope === "dynamic")
        return (sn(l.name, "excludeStalePluginClients: marking stale (removed)"), true);
      return false;
    }
    if (hashMcpConfig(l.config) !== hashMcpConfig(c))
      return (sn(l.name, "excludeStalePluginClients: marking stale (config hash changed)"), true);
    return false;
  });
  if (n.length === 0)
    return {
      ...e,
      stale: [],
    };
  let { tools: r, commands: o, resources: s } = e,
    i = {
      ...e.resourceTemplates,
    };
  for (let l of n)
    ((r = OUn(r, l.name)), (o = $dt(o, l.name)), (s = Odt(s, l.name)), delete i[l.name]);
  let a = new Set(n.map((l) => l.name));
  return {
    clients: e.clients.filter((l) => !a.has(l.name)),
    tools: r,
    commands: o,
    resources: s,
    resourceTemplates: i,
    stale: n,
  };
}
function describeMcpConfigFilePath(scope) {
  switch (scope) {
    case "user":
      return b0();
    case "project":
      return LCa.join($t(), ".mcp.json");
    case "local":
      return `${b0()} [project: ${$t()}]`;
    case "dynamic":
      return "Dynamically configured";
    case "enterprise":
      return p3t();
    case "claudeai":
      return "claude.ai";
    case "agent":
      return "agent frontmatter";
    default:
      return scope;
  }
}
function getScopeLabel(scope) {
  switch (scope) {
    case "local":
      return "Local config (private to you in this project)";
    case "project":
      return "Project config (shared via .mcp.json)";
    case "user":
      return "User config (available in all your projects)";
    case "dynamic":
      return "Dynamic config (from command line)";
    case "enterprise":
      return "Enterprise config (managed by your organization)";
    case "claudeai":
      return "claude.ai config";
    case "agent":
      return "Agent config (from agent frontmatter)";
    default:
      return scope;
  }
}
function ensureConfigScope(scope) {
  if (!scope) return "local";
  if (!WRr().options.includes(scope))
    throw Error(`Invalid scope: ${scope}. Must be one of: ${WRr().options.join(", ")}`);
  return scope;
}
function ensureTransport(type) {
  if (!type) return "stdio";
  if (type === "streamable-http") return "http";
  if (type !== "stdio" && type !== "sse" && type !== "http")
    throw Error(
      `Invalid transport type: ${type}. Must be one of: stdio, sse, http (or streamable-http)`,
    );
  return type;
}
function parseHeaders(headerArray) {
  let t = {};
  for (let n of headerArray) {
    let r = n.indexOf(":");
    if (r === -1)
      throw Error(`Invalid header format: "${n}". Expected format: "Header-Name: value"`);
    let o = n.substring(0, r).trim(),
      s = n.substring(r + 1).trim();
    if (!o) throw Error(`Invalid header: "${n}". Header name cannot be empty.`);
    t[o] = s;
  }
  return t;
}
function g3t(e) {
  let t = jo();
  if (t?.disabledMcpjsonServers?.some((n) => rLr(n, e))) return "rejected";
  if (t?.enabledMcpjsonServers?.some((n) => rLr(n, e)) || t?.enableAllProjectMcpServers)
    return "approved";
  return "pending";
}
function getProjectMcpServerStatus(serverName) {
  let t = g3t(serverName);
  if (t !== "pending") return t;
  if (xCt() && uj() && Om("projectSettings")) return "approved";
  if (Ir() && Om("projectSettings")) return "approved";
  return "pending";
}
function getMcpServerScopeFromToolName(toolName) {
  if (
    !gk({
      name: toolName,
    })
  )
    return null;
  let t = eI(toolName);
  if (!t) return null;
  let n = P4(t.serverName);
  if (!n && t.serverName.startsWith("claude_ai_")) return "claudeai";
  return n?.scope ?? null;
}
function wdo(e) {
  if (!gk(e)) return null;
  return e.mcpInfo?.scope ?? getMcpServerScopeFromToolName(e.name);
}
function xTp(e) {
  return e.type === "stdio" || e.type === void 0;
}
function kTp(e) {
  return e.type === "sse";
}
function RTp(e) {
  return e.type === "http";
}
function LTp(e) {
  return e.type === "ws";
}
function Cdo(e) {
  switch (e.type) {
    case void 0:
    case "stdio":
    case "sse":
    case "http":
    case "sdk":
      return true;
    case "ws":
    case "sse-ide":
    case "ws-ide":
    case "claudeai-proxy":
      return false;
    default:
      return false;
  }
}
function MCa(e) {
  let t = new Map();
  for (let r of e) {
    if (!r.mcpServers?.length) continue;
    for (let o of r.mcpServers) {
      if (typeof o === "string") continue;
      let s = Object.entries(o);
      if (s.length !== 1) continue;
      let [i, a] = s[0],
        l = t.get(i);
      if (l) {
        if (!l.sourceAgents.includes(r.agentType)) l.sourceAgents.push(r.agentType);
      } else
        t.set(i, {
          config: {
            ...a,
            name: i,
          },
          sourceAgents: [r.agentType],
        });
    }
  }
  let n = [];
  for (let [r, { config: o, sourceAgents: s }] of t)
    if (xTp(o))
      n.push({
        name: r,
        sourceAgents: s,
        transport: "stdio",
        command: o.command,
        needsAuth: false,
      });
    else if (kTp(o))
      n.push({
        name: r,
        sourceAgents: s,
        transport: "sse",
        url: o.url,
        needsAuth: true,
      });
    else if (RTp(o))
      n.push({
        name: r,
        sourceAgents: s,
        transport: "http",
        url: o.url,
        needsAuth: true,
      });
    else if (LTp(o))
      n.push({
        name: r,
        sourceAgents: s,
        transport: "ws",
        url: o.url,
        needsAuth: false,
      });
  return n.sort((r, o) => r.name.localeCompare(o.name));
}
function O4(e) {
  return e ? Dd(e) : void 0;
}
function c5(e) {
  return O4(dke(e));
}
var RCa, LCa, CTp, Hdo, Tdo;
