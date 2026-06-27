// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _pt
// matched 2.1.88 source: src/utils/plugins/lspPluginIntegration.ts
// class=modified  jaccard=0.4506  score=0.8076  fileCov=0.5049
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module _pt] deps: YZe, je, At, Jt, dn, ypt
((rLa = require("crypto")),
  (Pre = new Map()),
  (EDe = new bG({
    max: Gxp,
  })));
function qxp(e, t) {
  let n = ADe.resolve(e),
    r = ADe.resolve(e, t),
    o = ADe.relative(n, r);
  if (o.startsWith("..") || ADe.resolve(o) === o) return null;
  return r;
}
async function Mqe(e, t = []) {
  let n = {},
    r = ADe.join(e.path, ".lsp.json");
  try {
    let o = await Nfo.readFile(r, "utf-8"),
      s = Ft(o),
      i = H.record(H.string(), Det()).safeParse(s);
    if (i.success) Object.assign(n, i.data);
    else {
      let a = `LSP config validation failed for .lsp.json in plugin ${e.name}: ${i.error.message}`;
      (T(a, {
        level: "error",
      }),
        t.push({
          type: "lsp-config-invalid",
          plugin: e.name,
          serverName: ".lsp.json",
          validationError: i.error.message,
          source: e.repository,
        }));
    }
  } catch (o) {
    if (!wn(o)) {
      let s =
        o instanceof Error
          ? `Failed to read/parse .lsp.json in plugin ${e.name}: ${o.message}`
          : `Failed to read/parse .lsp.json file in plugin ${e.name}`;
      (T(s, {
        level: "error",
      }),
        t.push({
          type: "lsp-config-invalid",
          plugin: e.name,
          serverName: ".lsp.json",
          validationError:
            o instanceof Error ? `Failed to parse JSON: ${o.message}` : "Failed to parse JSON file",
          source: e.repository,
        }));
    }
  }
  if (e.manifest.lspServers) {
    let o = await Vxp(e.manifest.lspServers, e, t);
    if (o) Object.assign(n, o);
  }
  return Object.keys(n).length > 0 ? n : void 0;
}
async function Vxp(e, t, n) {
  let r = {},
    o = Array.isArray(e) ? e : [e];
  for (let s of o)
    if (typeof s === "string") {
      let i = qxp(t.path, s);
      if (!i) {
        let a = `Security: Path traversal attempt blocked in plugin ${t.name}: ${s}`;
        (T(a, {
          level: "error",
        }),
          n.push({
            type: "lsp-config-invalid",
            plugin: t.name,
            serverName: s,
            validationError: "Invalid path: must be relative and within plugin directory",
            source: t.repository,
          }));
        continue;
      }
      try {
        let a = await Nfo.readFile(i, "utf-8"),
          l = Ft(a),
          c = H.record(H.string(), Det()).safeParse(l);
        if (c.success) Object.assign(r, c.data);
        else {
          let u = `LSP config validation failed for ${s} in plugin ${t.name}: ${c.error.message}`;
          (T(u, {
            level: "error",
          }),
            n.push({
              type: "lsp-config-invalid",
              plugin: t.name,
              serverName: s,
              validationError: c.error.message,
              source: t.repository,
            }));
        }
      } catch (a) {
        let l =
          a instanceof Error
            ? `Failed to read/parse LSP config from ${s} in plugin ${t.name}: ${a.message}`
            : `Failed to read/parse LSP config file ${s} in plugin ${t.name}`;
        (T(l, {
          level: "error",
        }),
          n.push({
            type: "lsp-config-invalid",
            plugin: t.name,
            serverName: s,
            validationError:
              a instanceof Error
                ? `Failed to parse JSON: ${a.message}`
                : "Failed to parse JSON file",
            source: t.repository,
          }));
      }
    } else
      for (let [i, a] of Object.entries(s)) {
        let l = Det().safeParse(a);
        if (l.success) r[i] = l.data;
        else {
          let c = `LSP config validation failed for inline server "${i}" in plugin ${t.name}: ${l.error.message}`;
          (T(c, {
            level: "error",
          }),
            n.push({
              type: "lsp-config-invalid",
              plugin: t.name,
              serverName: i,
              validationError: l.error.message,
              source: t.repository,
            }));
        }
      }
  return Object.keys(r).length > 0 ? r : void 0;
}
function zxp(e, t, n, r) {
  let o = [],
    s = (l) => {
      let c = vre(l, t);
      if (n) c = $Se(c, n);
      let { expanded: u, missingVars: d } = gre(c);
      return (o.push(...d), u);
    },
    i = {
      ...e,
    };
  if (i.command) i.command = s(i.command);
  if (i.args) i.args = i.args.map((l) => s(l));
  let a = {
    CLAUDE_PLUGIN_ROOT: t.path,
    CLAUDE_PLUGIN_DATA: Rue(t.source),
    CLAUDE_PROJECT_DIR: rc(),
    ...(i.env || {}),
  };
  for (let [l, c] of Object.entries(a))
    if (l !== "CLAUDE_PLUGIN_ROOT" && l !== "CLAUDE_PLUGIN_DATA" && l !== "CLAUDE_PROJECT_DIR")
      a[l] = s(c);
  if (((i.env = a), i.workspaceFolder)) i.workspaceFolder = s(i.workspaceFolder);
  if (o.length > 0) {
    let c = `Missing environment variables in plugin LSP config: ${Uo(o).join(", ")}`;
    T(c, {
      level: "error",
    });
  }
  return i;
}
function p2n(e) {
  let t = [],
    n = new Map();
  for (let r of e) {
    if (!r.enabled || !r.lspServers) continue;
    for (let [o, s] of Object.entries(r.lspServers)) {
      if (!s.extensionToLanguage) continue;
      let i = `plugin:${r.name}:${o}`;
      for (let a of Object.keys(s.extensionToLanguage)) {
        let l = a.toLowerCase(),
          c = n.get(l);
        if (c === void 0) n.set(l, i);
        else if (c !== i)
          t.push({
            type: "lsp-extension-conflict",
            source: r.source,
            plugin: r.name,
            serverName: o,
            extension: l,
            activeServer: c,
          });
      }
    }
  }
  return t;
}
function Kxp(e, t) {
  let n = {};
  for (let [r, o] of Object.entries(e)) {
    let s = `plugin:${t}:${r}`;
    n[s] = {
      ...o,
      scope: "dynamic",
      source: t,
    };
  }
  return n;
}
async function cLa(e, t = []) {
  if (!e.enabled) return;
  let n = e.lspServers || (await Mqe(e, t));
  if (!n) return;
  let r = e.manifest.userConfig ? m$(Tre(e)) : void 0,
    o = {};
  for (let [s, i] of Object.entries(n)) o[s] = zxp(i, e, r, t);
  return Kxp(o, e.name);
}
var Nfo, ADe;
