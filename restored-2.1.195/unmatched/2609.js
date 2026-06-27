// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KPn
// matched 2.1.88 source: src/utils/plugins/pluginLoader.ts
// class=new  jaccard=0.0128  score=0.188  fileCov=0.0136
// note: nearest: src/utils/plugins/pluginLoader.ts (0.0128); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var KPn = E(() => {
  ft();
  dr();
  heo = require("path"), UKi = ["settings.json", "settings.local.json"];
});
function nWe(e, t, n) {
  let r = qKd(t, n);
  if (typeof e !== "object" || e === null || Array.isArray(e)) return {
    ok: !1,
    error: `${r}

Validation errors: manifest must be an object`,
    errors: [{
      path: "",
      message: "manifest must be an object"
    }],
    rawCandidate: null
  };
  let o = {
    ...e
  };
  if (t === "marketplace-entry") delete o.id, delete o.source, delete o.strict;
  let s = new Set(),
    i = [],
    a = o2e().safeParse(o);
  if (a.success && i.length === 0) return {
    ok: !0,
    manifest: a.data,
    rawCandidate: o
  };
  let l = a.success ? [] : a.error.issues.map(d => {
      let p = d.path.length > 0 ? String(d.path[0]) : "",
        f = d.path.join(".");
      return {
        path: s.has(p) ? `experimental.${f}` : f,
        message: d.message
      };
    }),
    c = [...i, ...l],
    u = c.map(d => d.path ? `${d.path}: ${d.message}` : d.message).join(", ");
  return {
    ok: !1,
    error: `${r}

Validation errors: ${u}`,
    errors: c,
    rawCandidate: o,
    manifest: a.success ? a.data : void 0
  };
}
function qKd(e, t) {
  switch (e) {
    case "plugin-json":
      return `Plugin ${t.pluginName} has an invalid manifest file at ${t.manifestPath}.`;
    case "skill-md":
      return `Skill ${t.pluginName} has invalid plugin-manifest frontmatter at ${t.manifestPath}.`;
    case "marketplace-entry":
      return `Marketplace entry ${t.pluginName} has an invalid manifest.`;
  }
}