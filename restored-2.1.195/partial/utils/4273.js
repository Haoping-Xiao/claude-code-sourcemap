// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vko
// matched 2.1.88 source: src/utils/plugins/loadPluginAgents.ts
// class=partial  jaccard=0.0985  score=0.4108  fileCov=0.1146
// note: low-confidence suggestion: src/utils/plugins/loadPluginAgents.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Vko] deps: lodash-es/memoize.js, dn, node-fetch/lib/index.js, utils/pdfUtils.ts, p-map/index.js, utils/debug.ts, utils/fsOperations.ts, utils/plugins/loadPluginAgents.ts
Pml = require("path");
n7n = Cn(async () => {
  let {
      enabled: e,
      errors: t
    } = await mp(),
    n = [];
  if (t.length > 0) T(`Plugin loading errors: ${t.map(o => iS(o)).join(", ")}`);
  let r = null;
  for (let o of e) {
    let s = new Set();
    if (o.workflowsPath) try {
      let i = await Dml(o.workflowsPath, o.name, o.source, o.manifest, s);
      if (n.push(...i), i.length > 0) T(`Loaded ${i.length} workflows from plugin ${o.name} default directory`);
    } catch (i) {
      r = "plugin_load_workflows_dir_failed", T(`Failed to load workflows from plugin ${o.name} default directory: ${i}`, {
        level: "error"
      });
    }
    if (o.workflowsPaths) for (let i of o.workflowsPaths) try {
      let l = await qt().stat(i);
      if (l.isDirectory()) {
        let c = await Dml(i, o.name, o.source, o.manifest, s);
        if (n.push(...c), c.length > 0) T(`Loaded ${c.length} workflows from plugin ${o.name} custom path: ${i}`);
      } else if (l.isFile() && i.endsWith(".js")) {
        let c = await Mml(i, o.name, o.source, o.manifest, s);
        if (c) n.push(c), T(`Loaded workflow from plugin ${o.name} custom file: ${i}`);
      }
    } catch (a) {
      r = "plugin_load_workflows_path_failed", T(`Failed to load workflows from plugin ${o.name} custom path ${i}: ${a}`, {
        level: "error"
      });
    }
  }
  if (T(`Total plugin workflows loaded: ${n.length}`), r) Le("plugin_load_workflows", r);else xe("plugin_load_workflows");
  return n;
});
function r7n(e, t, n) {
  Oml.push({
    source: "built-in",
    ...t,
    script: e,
    hidden: n?.hidden
  });
}
function zko() {
  if (G6()) return [];
  return Oml;
}
var Oml;