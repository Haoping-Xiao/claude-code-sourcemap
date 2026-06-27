// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eer
// matched 2.1.88 source: src/utils/plugins/loadPluginAgents.ts
// class=modified (alt of src/utils/plugins/loadPluginAgents.ts)  jaccard=0.1864  score=0.7863  fileCov=0.1963
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module eer] deps: lodash-es/memoize.js, services/analytics/metadata.ts, dn, tools/FileEditTool/constants.ts, utils/markdownConfigLoader.ts, tools/GlobTool/prompt.ts, types/plugin.ts, p-map/index.js, utils/debug.ts, utils/tempfile.ts, hooks/useSettings.ts, utils/fsOperations.ts, utils/markdownConfigLoader.ts, utils/plugins/loadPluginAgents.ts, utils/plugins/mcpPluginIntegration.ts, utils/plugins/loadPluginCommands.ts
((fLl = require("path")), (dLl = ["user", "project", "local"]));
FYt = Cn(async () => {
  let { enabled: e, errors: t } = await mp();
  if (t.length > 0) T(`Plugin loading errors: ${t.map((s) => iS(s)).join(", ")}`);
  let n = null,
    o = (
      await Promise.all(
        e.map(async (s) => {
          let i = new Set(),
            a = [];
          if (s.agentsPath)
            try {
              let l = await pLl(s.agentsPath, s.name, s.source, s.path, s.manifest, i);
              if ((a.push(...l), l.length > 0))
                T(`Loaded ${l.length} agents from plugin ${s.name} default directory`);
            } catch (l) {
              ((n = "plugin_load_agents_dir_failed"),
                T(`Failed to load agents from plugin ${s.name} default directory: ${l}`, {
                  level: "error",
                }));
            }
          if (s.agentsPaths) {
            let l = await Promise.all(
              s.agentsPaths.map(async (c) => {
                try {
                  let d = await qt().stat(c);
                  if (d.isDirectory()) {
                    let p = await pLl(c, s.name, s.source, s.path, s.manifest, i);
                    if (p.length > 0)
                      T(`Loaded ${p.length} agents from plugin ${s.name} custom path: ${c}`);
                    return p;
                  } else if (d.isFile() && c.endsWith(".md")) {
                    let p = await mLl(c, s.name, [], s.source, s.path, s.manifest, i);
                    if (p) return (T(`Loaded agent from plugin ${s.name} custom file: ${c}`), [p]);
                  }
                  return [];
                } catch (u) {
                  return (
                    (n = "plugin_load_agents_path_failed"),
                    T(`Failed to load agents from plugin ${s.name} custom path ${c}: ${u}`, {
                      level: "error",
                    }),
                    []
                  );
                }
              }),
            );
            for (let c of l) a.push(...c);
          }
          return a;
        }),
      )
    ).flat();
  if ((T(`Total plugin agents loaded: ${o.length}`), n)) Le("plugin_load_agents", n);
  else xe("plugin_load_agents");
  return o;
});
var kfS, RfS;
