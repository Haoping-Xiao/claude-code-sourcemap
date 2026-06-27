// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZUt
// matched 2.1.88 source: src/tools/SkillTool/SkillTool.ts
// class=modified (alt of src/tools/SkillTool/SkillTool.ts)  jaccard=0.0366  score=0.7346  fileCov=0.0371
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var ZUt = E(() => {
  gKi = Symbol("skip");
});
function K0e(e, t, n) {
  if (typeof n !== "function") return;
  Object.defineProperty(e, t, {
    get: n,
    enumerable: true,
    configurable: true,
  });
}
function hKi(e) {
  return e.endsWith(`@${JGe}`);
}
function yKi(e) {
  return reo.get(e);
}
function oeo() {
  let e = jo(),
    t = [],
    n = [];
  for (let [r, o] of reo) {
    if (o.isAvailable && !o.isAvailable()) continue;
    let s = `${r}@${JGe}`,
      i = e?.enabledPlugins?.[s],
      a = i !== void 0 ? i === true : (o.defaultEnabled ?? true),
      l = {
        name: r,
        manifest: {
          name: r,
          description: o.description,
          version: o.version,
        },
        path: JGe,
        source: s,
        repository: s,
        enabled: a,
        isBuiltin: true,
        hooksConfig: o.hooks,
        mcpServers: o.mcpServers,
      };
    if (a) t.push(l);
    else n.push(l);
  }
  return {
    enabled: t,
    disabled: n,
  };
}
function _Ki() {
  let { enabled: e } = oeo(),
    t = [];
  for (let n of e) {
    let r = reo.get(n.name);
    if (!r?.skills) continue;
    for (let o of r.skills) t.push(AKd(o));
  }
  return t;
}
function AKd(e) {
  let t = {
    type: "prompt",
    name: e.name,
    description: typeof e.description === "function" ? "" : e.description,
    hasUserSpecifiedDescription: true,
    allowedTools: e.allowedTools ?? [],
    argumentHint: typeof e.argumentHint === "function" ? void 0 : e.argumentHint,
    whenToUse: typeof e.whenToUse === "function" ? void 0 : e.whenToUse,
    subcommands: e.subcommands,
    model: e.model,
    disableModelInvocation: e.disableModelInvocation ?? false,
    userInvocable: e.userInvocable ?? true,
    contentLength: 0,
    source: "bundled",
    loadedFrom: "bundled",
    hooks: e.hooks,
    context: e.context,
    agent: e.agent,
    isEnabled: e.isEnabled ?? (() => true),
    isHidden: !(e.userInvocable ?? true),
    progressMessage: "running",
    getPromptForCommand: e.getPromptForCommand,
  };
  return (
    K0e(t, "description", e.description),
    K0e(t, "argumentHint", e.argumentHint),
    K0e(t, "whenToUse", e.whenToUse),
    t
  );
}
var reo,
  JGe = "builtin";
