// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vq
// matched 2.1.88 source: src/utils/plugins/marketplaceHelpers.ts
// class=modified  jaccard=0.3396  score=0.8696  fileCov=0.3578
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module vq] deps: utils/sessionStorage.ts, constants/outputStyles.ts, tools/AgentTool/loadAgentsDir.ts, memdir/memoryAge.ts, services/PromptSuggestion/speculation.ts, utils/debug.ts, utils/errors.ts, utils/sequential.ts, utils/plugins/walkPluginMarkdown.ts, utils/generatedFiles.ts, utils/plugins/loadPluginAgents.ts, utils/plugins/loadPluginCommands.ts, utils/plugins/loadPluginHooks.ts, utils/plugins/zipCache.ts, utils/plugins/loadPluginAgents.ts, utils/plugins/mcpPluginIntegration.ts, utils/plugins/cacheUtils.ts
((nse = require("fs/promises")),
  (IYt = require("path")),
  (UIf = (Vko(), ro($ml)).clearPluginWorkflowCache));
function formatFailureDetails(failures, includeReasons) {
  let r = failures
      .slice(0, 2)
      .map((i) => {
        let a = i.reason || i.error || "unknown error";
        return includeReasons ? `${i.name} (${a})` : i.name;
      })
      .join(includeReasons ? "; " : ", "),
    o = failures.length - 2,
    s = o > 0 ? ` and ${o} more` : "";
  return `${r}${s}`;
}
function getMarketplaceSourceDisplay(source) {
  switch (source.source) {
    case "github":
      return source.repo;
    case "url":
      return source.url;
    case "git":
      return source.url;
    case "directory":
      return source.path;
    case "file":
      return source.path;
    case "settings":
      return `settings:${source.name}`;
    default:
      return "Unknown source";
  }
}
function MQ(e, t) {
  return `${e}@${t}`;
}
async function rse(e) {
  let t = [],
    n = [];
  for (let [r, o] of Object.entries(e)) {
    if (!_H(o.source)) continue;
    let s = null;
    try {
      s = await G$(r);
    } catch (i) {
      let a = i instanceof Error ? i.message : String(i);
      (n.push({
        name: r,
        error: a,
      }),
        T(`Failed to load plugin marketplace ${r}: ${a}`, {
          level: "error",
        }));
    }
    t.push({
      name: r,
      config: o,
      data: s,
    });
  }
  return {
    marketplaces: t,
    failures: n,
  };
}
function formatMarketplaceLoadingErrors(failures, successCount) {
  if (failures.length === 0) return null;
  if (successCount > 0)
    return {
      type: "warning",
      message:
        failures.length === 1
          ? `Warning: Failed to load marketplace '${failures[0].name}': ${failures[0].error}`
          : `Warning: Failed to load ${failures.length} marketplaces: ${zIf(failures)}`,
    };
  return {
    type: "error",
    message: `Failed to load all marketplaces. Errors: ${KIf(failures)}`,
  };
}
function zIf(e) {
  return e.map((t) => t.name).join(", ");
}
function KIf(e) {
  return e.map((t) => `${t.name}: ${t.error}`).join("; ");
}
function formatSourceForDisplay(source) {
  switch (source.source) {
    case "github":
      return `github:${source.repo}${source.ref ? `@${source.ref}` : ""}`;
    case "url":
      return source.url;
    case "git":
      return `git:${source.url}${source.ref ? `@${source.ref}` : ""}`;
    case "npm":
      return `npm:${source.package}`;
    case "file":
      return `file:${source.path}`;
    case "directory":
      return `dir:${source.path}`;
    case "hostPattern":
      return `hostPattern:${source.hostPattern}`;
    case "pathPattern":
      return `pathPattern:${source.pathPattern}`;
    case "skills-dir":
      return "skills-dir";
    case "settings":
      return `settings:${source.name} (${source.plugins.length} ${bn(source.plugins.length, "plugin")})`;
    default:
      return "unknown source";
  }
}
async function detectEmptyMarketplaceReason({
  configuredMarketplaceCount: e,
  failedMarketplaceCount: t,
}) {
  if (!(await sWe())) return "git-not-installed";
  let r = _5();
  if (r !== null) {
    if (r.length === 0) return "all-blocked-by-policy";
    if (e === 0) return "policy-restricts-sources";
  }
  if (e === 0) return "no-marketplaces-configured";
  if (t > 0 && t === e) return "all-marketplaces-failed";
  return "all-plugins-installed";
}
