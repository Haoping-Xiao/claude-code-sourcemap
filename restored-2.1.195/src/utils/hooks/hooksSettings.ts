// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oKl
// matched 2.1.88 source: src/utils/hooks/hooksSettings.ts
// class=modified  jaccard=0.5145  score=0.8519  fileCov=0.565
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module oKl] deps: oo
((aVf = {
  type: "local-jsx",
  name: "privacy-settings",
  description: "View and update your privacy settings",
  isEnabled: () => Y4e(),
  requires: {
    ink: true,
  },
  load: () => Promise.resolve().then(() => (rKl(), nKl)),
}),
  (Jjo = aVf));
function getHookDisplayText(hook) {
  switch (hook.type) {
    case "command":
      return hook.args ? [hook.command, ...hook.args].join(" ") : hook.command;
    case "prompt":
      return hook.prompt;
    case "agent":
      return hook.prompt;
    case "http":
      return hook.url;
    case "mcp_tool":
      return `${hook.server}/${hook.tool}`;
    case "callback":
      return "callback";
    case "function":
      return "function";
  }
}
function o2(e) {
  if ("statusMessage" in e && e.statusMessage) return e.statusMessage;
  return getHookDisplayText(e);
}
function iKl(e) {
  let t = [];
  if (yn("policySettings")?.allowManagedHooksOnly !== true) {
    let i = OO,
      a = new Set();
    for (let l of i) {
      let c = xg(l);
      if (c) {
        let d = sKl.resolve(c);
        if (a.has(d)) continue;
        a.add(d);
      }
      let u = yn(l);
      if (!u?.hooks) continue;
      for (let [d, p] of Object.entries(u.hooks))
        for (let f of p)
          for (let m of f.hooks)
            t.push({
              event: d,
              config: m,
              matcher: f.matcher,
              source: l,
            });
    }
  }
  let o = Rt(),
    s = XMe(e, o);
  for (let [i, a] of s.entries())
    for (let l of a)
      for (let c of l.hooks)
        t.push({
          event: i,
          config: c,
          matcher: l.matcher,
          source: "sessionHook",
        });
  return t;
}
function hookSourceDescriptionDisplayString(source) {
  switch (source) {
    case "userSettings":
      return "User settings (~/.claude/settings.json)";
    case "projectSettings":
      return "Project settings (.claude/settings.json)";
    case "localSettings":
      return "Local settings (.claude/settings.local.json)";
    case "pluginHook":
      return "Plugin hooks (~/.claude/plugins/*/hooks/hooks.json)";
    case "sessionHook":
      return "Session hooks (in-memory, temporary)";
    case "builtinHook":
      return "Built-in hooks (registered internally by Claude Code)";
    default:
      return source;
  }
}
function hookSourceHeaderDisplayString(source) {
  switch (source) {
    case "userSettings":
      return "User Settings";
    case "projectSettings":
      return "Project Settings";
    case "localSettings":
      return "Local Settings";
    case "pluginHook":
      return "Plugin Hooks";
    case "sessionHook":
      return "Session Hooks";
    case "builtinHook":
      return "Built-in Hooks";
    default:
      return source;
  }
}
function hookSourceInlineDisplayString(source) {
  switch (source) {
    case "userSettings":
      return "User";
    case "projectSettings":
      return "Project";
    case "localSettings":
      return "Local";
    case "pluginHook":
      return "Plugin";
    case "sessionHook":
      return "Session";
    case "builtinHook":
      return "Built-in";
    default:
      return source;
  }
}
function cKl(e, t, n) {
  let r = DRt.reduce((o, s, i) => ((o[s] = i), o), {});
  return [...e].sort((o, s) => {
    let i = t[n]?.[o] || [],
      a = t[n]?.[s] || [],
      l = Uo(i.map((f) => f.source)),
      c = Uo(a.map((f) => f.source)),
      u = (f) => (f === "pluginHook" || f === "builtinHook" ? 999 : r[f]),
      d = Math.min(...l.map(u)),
      p = Math.min(...c.map(u));
    if (d !== p) return d - p;
    return o.localeCompare(s);
  });
}
var sKl;
