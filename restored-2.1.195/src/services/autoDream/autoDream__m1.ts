// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PPo
// matched 2.1.88 source: src/services/autoDream/autoDream.ts
// class=modified (alt of src/services/autoDream/autoDream.ts)  jaccard=0.0201  score=0.2003  fileCov=0.0218
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: buildGitSessionContext
// [unwrapped __esm module PPo] deps: cli/print.ts, utils/messages.ts, tools/SyntheticOutputTool/SyntheticOutputTool.ts, utils/debug.ts, utils/errors.ts, services/teamMemorySync/secretScanner.ts, utils/debug.ts, services/analytics/growthbook.ts, memdir/teamMemPrompts.ts, services/analytics/metadata.ts, utils/readFileInRange.ts, utils/stats.ts, services/analytics/index.ts, dom-mutator/dist/dom-mutator.cjs.production.min.js, VKt, services/autoDream/autoDream.ts, tasks/DreamTask/DreamTask.ts, tasks/DreamTask/DreamTask.ts, utils/markdownConfigLoader.ts, types/plugin.ts, services/extractMemories/prompts.ts
((WIl = require("fs/promises")),
  (qIl = require("path")),
  (GIl = {
    minHours: 24,
    minSessions: 5,
  }));
async function buildGitSessionContext(e, t, n) {
  if (!e)
    return {
      sources: [],
      outcomes: [],
    };
  let { parseGitRemote: r, parseGitHubRepository: o } = await Promise.resolve().then(
      () => (BR(), ARt),
    ),
    { getDefaultBranch: s } = await Promise.resolve().then(() => (sa(), Sfn)),
    i = n || (await s()) || "",
    a = t || i || void 0,
    l = a && a !== i ? [a] : [],
    c = (p, f, m) => ({
      sources: [
        {
          type: "git_repository",
          url: `https://${p}/${f}/${m}`,
          revision: a,
        },
      ],
      outcomes: [
        {
          type: "git_repository",
          git_info: {
            type: "github",
            repo: `${f}/${m}`,
            branches: l,
          },
        },
      ],
    }),
    u = r(e);
  if (u) return c(u.host, u.owner, u.name);
  let d = o(e);
  if (d) {
    let [p, f] = d.split("/");
    if (p && f) return c(JH, p, f);
  }
  return {
    sources: [],
    outcomes: [],
  };
}
