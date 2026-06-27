// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Arr
// matched 2.1.88 source: src/commands/plugin/ManagePlugins.tsx
// class=modified (alt of src/commands/plugin/ManagePlugins.tsx)  jaccard=0.0665  score=0.5063  fileCov=0.0711
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: scaleCharsToTokens, getPluginInventory, computePluginTokenCost
// [unwrapped __esm module Arr] deps: utils/debug.ts, utils/errors.ts, utils/fsOperations.ts, utils/sequential.ts, utils/fsOperations.ts, tools/SkillTool/prompt.ts
((djl = require("crypto")), (i1e = require("fs/promises")), (pjl = require("path")));
async function PluginComponentsDisplay(plugin, t) {
  if (t === "builtin") {
    let f = yKi(plugin.name);
    if (!f) throw Error(`Built-in plugin ${plugin.name} not found`);
    return {
      commands: [],
      agents: [],
      skills:
        f.skills?.map((m) => ({
          name: m.name,
        })) ?? [],
      hooks: f.hooks ? Object.keys(f.hooks) : [],
      mcpServers: f.mcpServers ? Object.keys(f.mcpServers) : [],
      lspServers: [],
    };
  }
  let n = U0(t),
    r = Qo(plugin.source).name || plugin.name,
    o = n ? void 0 : (await G$(t)).plugins.find((f) => f.name === r);
  if (!o && !n) throw Error(`Plugin ${r} not found in marketplace ${t}`);
  let [s, i, a] = await Promise.all([
      Sjl([plugin.commandsPath, ...(plugin.commandsPaths ?? [])]),
      Sjl([plugin.agentsPath, ...(plugin.agentsPaths ?? [])]),
      nBf([plugin.skillsPath, ...(plugin.skillsPaths ?? [])]),
    ]),
    l = plugin.hooksConfig ? Object.keys(plugin.hooksConfig) : Hrr(o?.hooks),
    c = plugin.mcpServers ? Object.keys(plugin.mcpServers) : await eBf(plugin.path),
    u = c.length > 0 ? c : Hrr(o?.mcpServers),
    d = plugin.lspServers
      ? Object.keys(plugin.lspServers)
      : (await tBf(plugin.path)).concat(Hrr(plugin.manifest.lspServers)),
    p = d.length > 0 ? Uo(d) : Hrr(o?.lspServers);
  return {
    commands: s,
    agents: i,
    skills: a,
    hooks: l,
    mcpServers: u,
    lspServers: p,
  };
}
async function computePluginTokenCost(e, t, n) {
  let [r, o, s] = await Promise.all([
      Promise.all(
        e.skills.map((u) => rUo(u.path ? jq.join(u.path, "SKILL.md") : void 0, _jl(u, n))),
      ),
      Promise.all(e.agents.map((u) => rUo(u.path, u.name))),
      Promise.all(e.commands.map((u) => rUo(u.path, _jl(u, n)))),
    ]),
    i = [...r, ...o, ...s],
    a = i.map((u) => u.alwaysOn).filter(Boolean).join(`
`),
    l = i.map((u) => u.onInvoke).filter(Boolean).join(`

`),
    c = {};
  for (let u of t) {
    let [d, p] = await Promise.all([bjl(a, u), bjl(l, u)]);
    if (d !== null && p !== null)
      c[u] = {
        always_on: d,
        on_invoke: p,
      };
  }
  return {
    tokens: c,
    inventory: {
      ...e,
      skills: oUo(e.skills, r),
      agents: oUo(e.agents, o),
      commands: oUo(e.commands, s),
    },
  };
}
function scaleCharsToTokens(e, t, n, r = 4) {
  if (n !== void 0 && t > 0) return Math.round((e / t) * n);
  return If(" ".repeat(e), r);
}
function _jl(e, t) {
  if (!t) return e.name;
  return `${t}:${e.name.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
}
async function rUo(e, t) {
  if (!e)
    return {
      alwaysOn: "",
      onInvoke: "",
    };
  let n;
  try {
    n = await Ajl(e, Ejl);
  } catch (l) {
    return (
      getBaseFileNames(e, l),
      {
        alwaysOn: "",
        onInvoke: "",
      }
    );
  }
  let { frontmatter: r, content: o } = Bm(n, e, {
      normalizeKeys: true,
    }),
    s = AU(r.description, t) ?? ffe(o, "Skill"),
    i = r.when_to_use != null ? String(r.when_to_use) : void 0;
  return {
    alwaysOn: cDo({
      name: t,
      description: s,
      whenToUse: i,
    }),
    onInvoke: o.trim(),
  };
}
async function Ajl(e, t) {
  let n = await Hse.open(e, "r");
  try {
    let { size: r } = await n.stat(),
      o = Math.min(r, t),
      s = Buffer.alloc(o),
      { bytesRead: i } = await n.read(s, 0, o, 0);
    return s.toString("utf8", 0, i);
  } finally {
    await n.close();
  }
}
function oUo(e, t) {
  return e.map((n, r) => {
    let o = t[r];
    if (!o) return n;
    return {
      ...n,
      chars: {
        always_on: o.alwaysOn.length,
        on_invoke: o.onInvoke.length,
      },
    };
  });
}
async function bjl(e, t) {
  if (!e) return 0;
  return P5e(
    [
      {
        role: "user",
        content: e,
      },
    ],
    [],
    t,
  );
}
function Hrr(e) {
  return [e]
    .flat()
    .filter((t) => t != null && typeof t === "object")
    .flatMap(Object.keys);
}
async function eBf(e) {
  try {
    let t = await Hse.readFile(jq.join(e, ".mcp.json"), "utf-8"),
      n = Ft(t);
    if (n == null || typeof n !== "object") return [];
    let r = "mcpServers" in n && typeof n.mcpServers === "object" ? n.mcpServers : n;
    return r == null ? [] : Object.keys(r);
  } catch {
    return [];
  }
}
async function tBf(e) {
  try {
    let t = await Hse.readFile(jq.join(e, ".lsp.json"), "utf-8"),
      n = Ft(t);
    if (n == null || typeof n !== "object") return [];
    return Object.keys(n);
  } catch {
    return [];
  }
}
async function Sjl(e) {
  let t = [],
    n = new Set();
  for (let r of e) {
    if (!r) continue;
    let o;
    try {
      o = await Hse.readdir(r, {
        withFileTypes: true,
      });
    } catch (s) {
      getBaseFileNames(r, s);
      continue;
    }
    for (let s of o)
      if (s.isFile() && s.name.endsWith(".md")) {
        let i = jq.join(r, s.name),
          a = jq.resolve(i);
        if (n.has(a)) continue;
        (n.add(a),
          t.push({
            name: jq.basename(s.name, ".md"),
            path: i,
          }));
      }
  }
  return t;
}
async function nBf(e) {
  let t = [],
    n = new Set(),
    r = (o, s) => {
      let i = jq.resolve(s);
      if (n.has(i)) return;
      (n.add(i),
        t.push({
          name: o,
          path: s,
        }));
    };
  for (let o of e) {
    if (!o) continue;
    try {
      let i = jq.join(o, "SKILL.md");
      if ((await Hse.stat(i)).isFile()) {
        let l = "";
        try {
          let c = await Ajl(i, Ejl),
            { frontmatter: u } = Bm(c, i);
          l = typeof u.name === "string" ? u.name.trim() : "";
        } catch {}
        r(l || jq.basename(o), o);
        continue;
      }
    } catch {}
    let s;
    try {
      s = await Hse.readdir(o, {
        withFileTypes: true,
      });
    } catch (i) {
      getBaseFileNames(o, i);
      continue;
    }
    for (let i of s) {
      if (!i.isDirectory() && !i.isSymbolicLink()) continue;
      let a = jq.join(o, i.name);
      try {
        if ((await Hse.stat(jq.join(a, "SKILL.md"))).isFile()) r(i.name, a);
      } catch {}
    }
  }
  return t;
}
function getBaseFileNames(dirPath, t) {
  (T(`Failed to read plugin components from ${dirPath}: ${be(t)}`, {
    level: "error",
  }),
    ke(Zr(t)));
}
var Hse,
  jq,
  Ejl = 1048576;
