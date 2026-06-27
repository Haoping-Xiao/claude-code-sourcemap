// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VBo
// matched 2.1.88 source: src/commands/plugin/pluginDetailsHelpers.tsx
// class=modified  jaccard=0.3041  score=0.3589  fileCov=0.6657
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module VBo] deps: @xmldom/xmldom/lib/entities.js, hooks/useTerminalSize.ts, commands/plugin/ManagePlugins.tsx
((D2l = R(lt(), 1)), (arr = R(se(), 1)));
function crr(e) {
  return [
    ["Commands", e.commands.map((n) => n.name)],
    ["Agents", e.agents.map((n) => n.name)],
    ["Skills", e.skills.map((n) => n.name)],
    ["Hooks", e.hooks ?? []],
    ["MCP Servers", e.mcpServers ?? []],
    ["LSP Servers", e.lspServers ?? []],
  ].filter(([, n]) => n.length > 0);
}
function extractGitHubRepo(plugin) {
  if (
    plugin.entry.source &&
    typeof plugin.entry.source === "object" &&
    "source" in plugin.entry.source &&
    plugin.entry.source.source === "github" &&
    typeof plugin.entry.source === "object" &&
    "repo" in plugin.entry.source
  )
    return plugin.entry.source.repo;
  return null;
}
function buildPluginDetailsMenuOptions(hasHomepage, githubRepo) {
  let n = [
    {
      label: "Install for you (user scope)",
      action: "install-user",
    },
    {
      label: "Install for all collaborators on this repository (project scope)",
      action: "install-project",
    },
    {
      label: "Install for you, in this repo only (local scope)",
      action: "install-local",
    },
  ];
  if (hasHomepage)
    n.push({
      label: "Open homepage",
      action: "homepage",
    });
  if (githubRepo)
    n.push({
      label: "View on GitHub",
      action: "github",
    });
  return (
    n.push({
      label: "Back to plugin list",
      action: "back",
    }),
    n
  );
}
function PluginSelectionKeyHint(t0) {
  let t = BEt.c(12),
    { hasSelection: n, canToggle: r, canView: o } = t0,
    s;
  if (t[0] !== n)
    ((s =
      n &&
      XL.jsx(mr, {
        action: "plugin:install",
        context: "Plugin",
        fallback: "i",
        description: "install",
        bold: true,
      })),
      (t[0] = n),
      (t[1] = s));
  else s = t[1];
  let i;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((i = XL.jsx(w, {
      children: "Type to search",
    })),
      (t[2] = i));
  else i = t[2];
  let a;
  if (t[3] !== r)
    ((a =
      r &&
      XL.jsx(mr, {
        action: "plugin:toggle",
        context: "Plugin",
        fallback: "Space",
        description: "toggle",
      })),
      (t[3] = r),
      (t[4] = a));
  else a = t[4];
  let l;
  if (t[5] !== o)
    ((l =
      o &&
      XL.jsx(mr, {
        action: "select:accept",
        context: "Select",
        fallback: "Enter",
        description: "view",
      })),
      (t[5] = o),
      (t[6] = l));
  else l = t[6];
  let c;
  if (t[7] === Symbol.for("react.memo_cache_sentinel"))
    ((c = XL.jsx(mr, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back",
    })),
      (t[7] = c));
  else c = t[7];
  let u;
  if (t[8] !== s || t[9] !== a || t[10] !== l)
    ((u = XL.jsx(U, {
      marginTop: 1,
      children: XL.jsx(w, {
        dimColor: true,
        italic: true,
        children: XL.jsxs(Tn, {
          children: [s, i, a, l, c],
        }),
      }),
    })),
      (t[8] = s),
      (t[9] = a),
      (t[10] = l),
      (t[11] = u));
  else u = t[11];
  return u;
}
function drr(e) {
  let t = BEt.c(4),
    { pluginId: n } = e,
    r = M2l(n);
  if (!r?.last_updated) return null;
  let o;
  if (t[0] !== r.last_updated) ((o = HNf(r.last_updated)), (t[0] = r.last_updated), (t[1] = o));
  else o = t[1];
  let s = o;
  if (s === void 0) return null;
  let i;
  if (t[2] !== s)
    ((i = XL.jsxs(w, {
      dimColor: true,
      children: ["Last updated: ", s],
    })),
      (t[2] = s),
      (t[3] = i));
  else i = t[3];
  return i;
}
function M2l(e) {
  let t = BEt.c(3),
    [n, r] = urr.useState(null),
    o,
    s;
  if (t[0] !== e)
    ((o = () => {
      r(null);
      let i = false;
      return (
        jBo(e)
          .then((a) => {
            if (!i) r(a ?? null);
          })
          .catch(ANf),
        () => {
          i = true;
        }
      );
    }),
      (s = [e]),
      (t[0] = e),
      (t[1] = o),
      (t[2] = s));
  else ((o = t[1]), (s = t[2]));
  return (urr.useEffect(o, s), n);
}
function ANf() {}
function HNf(e) {
  let t = new Date(e);
  if (Number.isNaN(t.getTime())) return;
  return t.toLocaleDateString(void 0, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
function prr(e) {
  let t = BEt.c(4),
    { plugin: n } = e,
    r = M2l(n.pluginId),
    o;
  if (t[0] !== r || t[1] !== n.entry) {
    let s = r?.components ? crr(r.components) : [],
      i;
    if (t[3] === Symbol.for("react.memo_cache_sentinel"))
      ((i = XL.jsx(w, {
        bold: true,
        children: "Will install:",
      })),
        (t[3] = i));
    else i = t[3];
    ((o = XL.jsxs(U, {
      flexDirection: "column",
      marginBottom: 1,
      children: [
        i,
        s.length > 0
          ? s.map(TNf)
          : XL.jsx(vNf, {
              entry: n.entry,
            }),
      ],
    })),
      (t[0] = r),
      (t[1] = n.entry),
      (t[2] = o));
  } else o = t[2];
  return o;
}
function TNf(e) {
  let [t, n] = e;
  return XL.jsxs(
    w,
    {
      dimColor: true,
      children: ["\xB7 ", t, ": ", n.join(", ")],
    },
    t,
  );
}
function vNf(e) {
  let t = BEt.c(11),
    { entry: n } = e,
    r,
    o;
  if (
    t[0] !== n.agents ||
    t[1] !== n.commands ||
    t[2] !== n.hooks ||
    t[3] !== n.lspServers ||
    t[4] !== n.mcpServers ||
    t[5] !== n.skills ||
    t[6] !== n.source
  ) {
    o = Symbol.for("react.early_return_sentinel");
    e: {
      let i = [
        ["Commands", NEt(n.commands)],
        ["Agents", NEt(n.agents)],
        ["Skills", NEt(n.skills)],
        ["Hooks", NEt(n.hooks)],
        ["MCP Servers", NEt(n.mcpServers)],
        ["LSP Servers", NEt(n.lspServers)],
      ].filter(CNf);
      if (i.length === 0) {
        let a =
            typeof n.source === "object"
              ? "\xB7 Component summary not available for remote plugin"
              : "\xB7 Components will be discovered at installation",
          l;
        if (t[9] !== a)
          ((l = XL.jsx(w, {
            dimColor: true,
            children: a,
          })),
            (t[9] = a),
            (t[10] = l));
        else l = t[10];
        o = l;
        break e;
      }
      r = XL.jsx(XL.Fragment, {
        children: i.map(wNf),
      });
    }
    ((t[0] = n.agents),
      (t[1] = n.commands),
      (t[2] = n.hooks),
      (t[3] = n.lspServers),
      (t[4] = n.mcpServers),
      (t[5] = n.skills),
      (t[6] = n.source),
      (t[7] = r),
      (t[8] = o));
  } else ((r = t[7]), (o = t[8]));
  if (o !== Symbol.for("react.early_return_sentinel")) return o;
  return r;
}
function wNf(e) {
  let [t, n] = e;
  return XL.jsxs(
    w,
    {
      dimColor: true,
      children: ["\xB7 ", t, ": ", n.join(", ")],
    },
    t,
  );
}
function CNf(e) {
  let [, t] = e;
  return t.length > 0;
}
function NEt(e) {
  if (typeof e === "string") return [e];
  if (Array.isArray(e))
    return e.flatMap((t) =>
      typeof t === "string" ? [t] : t && typeof t === "object" ? Object.keys(t) : [],
    );
  if (e && typeof e === "object") return Object.keys(e);
  return [];
}
var BEt, urr, XL;
