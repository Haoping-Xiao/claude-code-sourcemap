// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KPn
// matched 2.1.88 source: src/utils/plugins/pluginLoader.ts
// class=modified (alt of src/utils/plugins/pluginLoader.ts)  jaccard=0.0184  score=0.2494  fileCov=0.0195
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module KPn] deps: ft, dr
((heo = require("path")), (UKi = ["settings.json", "settings.local.json"]));
function nWe(e, t, n) {
  let r = loadPluginManifest(t, n);
  if (typeof e !== "object" || e === null || Array.isArray(e))
    return {
      ok: false,
      error: `${r}

Validation errors: manifest must be an object`,
      errors: [
        {
          path: "",
          message: "manifest must be an object",
        },
      ],
      rawCandidate: null,
    };
  let o = {
    ...e,
  };
  if (t === "marketplace-entry") (delete o.id, delete o.source, delete o.strict);
  let s = new Set(),
    i = [],
    a = o2e().safeParse(o);
  if (a.success && i.length === 0)
    return {
      ok: true,
      manifest: a.data,
      rawCandidate: o,
    };
  let l = a.success
      ? []
      : a.error.issues.map((d) => {
          let p = d.path.length > 0 ? String(d.path[0]) : "",
            f = d.path.join(".");
          return {
            path: s.has(p) ? `experimental.${f}` : f,
            message: d.message,
          };
        }),
    c = [...i, ...l],
    u = c.map((d) => (d.path ? `${d.path}: ${d.message}` : d.message)).join(", ");
  return {
    ok: false,
    error: `${r}

Validation errors: ${u}`,
    errors: c,
    rawCandidate: o,
    manifest: a.success ? a.data : void 0,
  };
}
function loadPluginManifest(manifestPath, pluginName) {
  switch (manifestPath) {
    case "plugin-json":
      return `Plugin ${pluginName.pluginName} has an invalid manifest file at ${pluginName.manifestPath}.`;
    case "skill-md":
      return `Skill ${pluginName.pluginName} has invalid plugin-manifest frontmatter at ${pluginName.manifestPath}.`;
    case "marketplace-entry":
      return `Marketplace entry ${pluginName.pluginName} has an invalid manifest.`;
  }
}
