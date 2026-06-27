// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yLe
// matched 2.1.88 source: src/utils/sessionStart.ts
// class=modified  jaccard=0.3638  score=0.7033  fileCov=0.4298
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module yLe] deps: ih
rF = Mi();
function Sca() {
  let e = Hao;
  return ((Hao = void 0), e);
}
function Aut() {
  let e = Tao;
  return ((Tao = void 0), e);
}
async function processSessionStartHooks(
  e,
  { sessionId: t, sessionTitle: n, agentType: r, model: o, forceSyncExecution: s } = {},
) {
  if (lc("hooks")) return [];
  let i = [],
    a = [],
    l = [],
    c,
    u = false;
  if (N_() && (Tl() || R7() === null))
    T(
      Tl()
        ? "Skipping plugin hooks - safe mode disables plugins (managed settings-file hooks still run)"
        : "Skipping plugin hooks - allowManagedHooksOnly is enabled and no managed plugins",
    );
  else
    try {
      await pet("load_plugin_hooks", () => bSe());
    } catch (p) {
      let f = p instanceof Error ? p.message : String(p),
        m = "";
      if (
        f.includes("Failed to clone") ||
        f.includes("network") ||
        f.includes("ETIMEDOUT") ||
        f.includes("ENOTFOUND")
      )
        m = "This appears to be a network issue. Check your internet connection and try again.";
      else if (f.includes("Permission denied") || f.includes("EACCES") || f.includes("EPERM"))
        m = "This appears to be a permissions issue. Check file permissions on ~/.claude/plugins/";
      else if (
        f.includes("Invalid") ||
        f.includes("parse") ||
        f.includes("JSON") ||
        f.includes("schema")
      )
        m =
          "This appears to be a configuration issue. Check your plugin settings in .claude/settings.json";
      else
        m = "Please fix the plugin configuration or remove problematic plugins from your settings.";
      T(
        `Warning: Failed to load plugin hooks. SessionStart hooks from plugins will not execute. Error: ${f}. ${m}`,
        {
          level: "error",
        },
      );
    }
  let d = r ?? TO();
  for await (let p of qjt(e, t, n, d, o, void 0, void 0, s)) {
    if (p.message) i.push(p.message);
    if (p.additionalContexts && p.additionalContexts.length > 0) a.push(...p.additionalContexts);
    if (p.initialUserMessage) Hao = p.initialUserMessage;
    if (p.sessionTitle) c = p.sessionTitle;
    if (p.watchPaths && p.watchPaths.length > 0) l.push(...p.watchPaths);
    if (p.reloadSkills) u = true;
  }
  if (u) (W0(), KW(), rF.emit(), xe("hook_session_start_reload_skills"));
  if (((Tao = e === "startup" || e === "resume" ? c : void 0), l.length > 0)) yca(l);
  if (a.length > 0) {
    let p = ai({
      type: "hook_additional_context",
      content: a,
      hookName: "SessionStart",
      toolUseID: "SessionStart",
      hookEvent: "SessionStart",
    });
    i.push(p);
  }
  return i;
}
async function processSetupHooks(e, { forceSyncExecution: t } = {}) {
  if (lc("hooks")) return [];
  let n = [],
    r = [];
  if (N_() && (Tl() || R7() === null))
    T(
      Tl()
        ? "Skipping plugin hooks - safe mode disables plugins (managed settings-file hooks still run)"
        : "Skipping plugin hooks - allowManagedHooksOnly is enabled and no managed plugins",
    );
  else
    try {
      await bSe();
    } catch (o) {
      let s = o instanceof Error ? o.message : String(o);
      T(
        `Warning: Failed to load plugin hooks. Setup hooks from plugins will not execute. Error: ${s}`,
        {
          level: "warn",
        },
      );
    }
  for await (let o of Vjt(e, void 0, void 0, t)) {
    if (o.message) n.push(o.message);
    if (o.additionalContexts && o.additionalContexts.length > 0) r.push(...o.additionalContexts);
  }
  if (r.length > 0) {
    let o = ai({
      type: "hook_additional_context",
      content: r,
      hookName: "Setup",
      toolUseID: "Setup",
      hookEvent: "Setup",
    });
    n.push(o);
  }
  return n;
}
var Hao, Tao;
