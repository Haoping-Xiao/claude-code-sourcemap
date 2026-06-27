// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xh
// matched 2.1.88 source: src/utils/plugins/loadPluginAgents.ts
// class=modified  jaccard=0.3179  score=0.6752  fileCov=0.3753
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Xh] deps: lodash-es/memoize.js, tools/SkillTool/SkillTool.ts, services/analytics/index.ts, utils/plugins/pluginStartupCheck.ts, dn, utils/debug.ts, utils/config.ts, utils/debug.ts, main.tsx, utils/errors.ts, constants/files.ts, utils/nativeInstaller/download.ts, utils/fsOperations.ts, utils/git.ts, utils/detectRepository.ts, utils/sequential.ts, utils/file.ts, utils/proxy.ts, utils/telemetry/pluginTelemetry.ts, utils/settings/settings.ts, Sx, utils/settings/types.ts, utils/fsOperations.ts, services/teamMemorySync/secretScanner.ts, utils/plugins/addDirPluginSettings.ts, utils/plugins/pluginLoader.ts, utils/plugins/pluginInstallationHelpers.ts, utils/plugins/officialMarketplace.ts, utils/plugins/fetchTelemetry.ts, protobufjs/src/enum.js, @anthropic-ai/sandbox-runtime/dist/sandbox/http-proxy.js, utils/generatedFiles.ts, utils/plugins/walkPluginMarkdown.ts, utils/settings/pluginOnlyPolicy.ts, utils/plugins/officialMarketplaceGcs.ts, utils/plugins/installedPluginsManager.ts, utils/generatedFiles.ts, tools/SkillTool/prompt.ts, utils/plugins/pluginIdentifier.ts, @opentelemetry/sdk-trace-base/build/src/BasicTracerProvider.js, commands/plugin/ManagePlugins.tsx, her, GRl, utils/plugins/pluginInstallationHelpers.ts, utils/plugins/schemas.ts, utils/claudeCodeHints.ts, utils/plugins/pluginLoader.ts, utils/plugins/marketplaceManager.ts, utils/plugins/cacheUtils.ts
((KRl = require("fs")),
  (cd = require("fs/promises")),
  (Es = require("path")),
  (YRl = require("stream")),
  (XRl = require("stream/promises")));
bxf = new Set(["node_modules", ".orphaned_at", DSt]);
Cxf = ve(() =>
  _M()
    .pick(Object.fromEntries(jRl.map((e) => [e, true])))
    .strip(),
);
iLl = ["agents", "output-styles", "themes", "hooks", "monitors"];
((OT = Cn(async () => {
  let e = await $$o(() =>
    M$o({
      cacheOnly: false,
    }),
  );
  return (mp.cache?.set(void 0, Promise.resolve(e)), e);
})),
  (mp = Cn(async () => {
    if (Oe.CLAUDE_CODE_SYNC_PLUGIN_INSTALL) return OT();
    return $$o(() =>
      M$o({
        cacheOnly: true,
      }),
    );
  })));
async function pLl(e, t, n, r, o, s) {
  let i = [];
  return (
    await PSt(
      e,
      async (a, l) => {
        let c = await loadAgentFromFile(a, t, l, n, r, o, s);
        if (c) i.push(c);
      },
      {
        logLabel: "agents",
      },
    ),
    i
  );
}
async function loadAgentFromFile(
  filePath,
  pluginName,
  namespace,
  sourceName,
  pluginPath,
  pluginManifest,
  loadedPaths,
) {
  let a = qt();
  if (fee(a, filePath, loadedPaths)) return null;
  try {
    let l = await a.readFile(filePath, {
        encoding: "utf-8",
      }),
      { frontmatter: c, content: u } = Bm(l, filePath, {
        normalizeKeys: true,
      }),
      d = (c.name != null ? String(c.name) : void 0) || fLl.basename(filePath).replace(/\.md$/, ""),
      f = [pluginName, ...namespace, d].join(":"),
      m =
        AU(c.description, f) ??
        AU(c.when_to_use, f) ??
        AU(c["when-to-use"], f) ??
        `Agent from ${pluginName} plugin`,
      g = TOe(c.tools),
      h = kQ(c.skills),
      y = c.color,
      b = c.model,
      _;
    if (typeof b === "string" && b.trim().length > 0) {
      let N = b.trim();
      _ = N.toLowerCase() === "inherit" ? "inherit" : N;
    }
    let S = c.background,
      A = S === "true" || S === true ? true : void 0,
      v = vre(u.trim(), {
        path: pluginPath,
        source: sourceName,
      });
    if (pluginManifest.userConfig) v = HUn(v, m$(sourceName), pluginManifest.userConfig);
    let C = c.memory,
      x;
    if (C !== void 0)
      if (dLl.includes(C)) x = C;
      else
        T(
          `Plugin agent file ${filePath} has invalid memory value '${C}'. Valid options: ${dLl.join(", ")}`,
        );
    let k = c.isolation === "worktree" ? "worktree" : void 0,
      D = c.effort,
      P = D !== void 0 ? TU(D) : void 0;
    if (D !== void 0 && P === void 0)
      T(
        `Plugin agent file ${filePath} has invalid effort '${D}'. Valid options: ${xv.join(", ")} or an integer`,
      );
    for (let N of ["permissionMode", "hooks", "mcpServers"])
      if (c[N] !== void 0)
        T(
          `Plugin agent file ${filePath} sets ${N}, which is ignored for plugin agents. Use .claude/agents/ for this level of control.`,
          {
            level: "warn",
          },
        );
    let O = c.maxTurns,
      L = Mkn(O);
    if (O !== void 0 && L === void 0)
      T(`Plugin agent file ${filePath} has invalid maxTurns '${O}'. Must be a positive integer.`);
    let M = c.disallowedTools !== void 0 ? TOe(c.disallowedTools) : void 0;
    if (lu() && x && g !== void 0) {
      let N = new Set(g);
      for (let B of [Wc, ka, Ds]) if (!N.has(B)) g = [...g, B];
    }
    return {
      agentType: f,
      whenToUse: m,
      tools: g,
      ...(M !== void 0 && {
        disallowedTools: M,
      }),
      ...(h !== void 0 && {
        skills: h,
      }),
      getSystemPrompt: () => {
        if (lu() && x) {
          let N = B3e(f, x);
          return (
            v +
            `

` +
            N
          );
        }
        return v;
      },
      source: "plugin",
      color: y,
      model: _,
      filename: d,
      plugin: sourceName,
      ...(A && {
        background: A,
      }),
      ...(x && {
        memory: x,
      }),
      ...(k && {
        isolation: k,
      }),
      ...(P !== void 0 && {
        effort: P,
      }),
      ...(L !== void 0 && {
        maxTurns: L,
      }),
    };
  } catch (l) {
    return (
      T(`Failed to load agent from ${filePath}: ${l}`, {
        level: "error",
      }),
      null
    );
  }
}
function ZZn() {
  FYt.cache?.clear?.();
}
var fLl, dLl, FYt;
