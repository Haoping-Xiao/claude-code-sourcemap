// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _k
// matched 2.1.88 source: src/utils/generatedFiles.ts
// class=modified (alt of src/utils/generatedFiles.ts)  jaccard=0.0398  score=0.2161  fileCov=0.0465
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module _k] deps: utils/debug.ts, utils/fileRead.ts, utils/debug.ts, utils/errors.ts, utils/fsOperations.ts, utils/sequential.ts, utils/fsOperations.ts, tools/SkillTool/prompt.ts, utils/plugins/schemas.ts, services/analytics/index.ts, utils/fsOperations.ts, utils/teleport.tsx, utils/settings/changeDetector.ts, utils/settings/settings.ts, utils/plugins/installedPluginsManager.ts, utils/plugins/pluginIdentifier.ts, utils/plugins/loadPluginAgents.ts
lz = require("path");
async function EXCLUDED_FILENAMES(e) {
  let t;
  try {
    t = await kRl.readdir(e);
  } catch (r) {
    if (Vo(r))
      return {
        ran: false,
      };
    throw r;
  }
  let n = new Set(t);
  if (!n.has("package.json"))
    return {
      ran: false,
    };
  for (let r of gxf) {
    if (!n.has(r.lockfile)) continue;
    T(`Installing plugin dependencies: ${r.command} ${r.args.join(" ")} in ${e}`);
    let o = await Gr(r.command, r.args, {
      cwd: e,
      timeout: mxf,
    });
    if (o.code !== 0)
      return {
        ran: true,
        error:
          `Plugin dependency install failed (${r.command}): ${o.stderr || o.stdout || o.error || "no output"}`.slice(
            0,
            500,
          ),
      };
    return (
      T(`Plugin dependency install succeeded (${r.command}) in ${e}`),
      {
        ran: true,
      }
    );
  }
  if (n.has("yarn.lock") || n.has("pnpm-lock.yaml"))
    return {
      ran: false,
      error:
        "Skipped: yarn/pnpm lockfiles are not supported (resolution-time hooks bypass --ignore-scripts). Use bun or npm.",
    };
  return {
    ran: false,
  };
}
var kRl,
  mxf = 60000,
  gxf;
