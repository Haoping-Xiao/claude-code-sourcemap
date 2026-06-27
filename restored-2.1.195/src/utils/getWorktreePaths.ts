// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Y4
// matched 2.1.88 source: src/utils/getWorktreePaths.ts
// class=modified  jaccard=0.4904  score=0.8486  fileCov=0.5374
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Y4] deps: services/api/promptCacheBreakDetection.ts, services/analytics/index.ts, dom-mutator/dist/dom-mutator.cjs.production.min.js, utils/debug.ts, hooks/useIdeLogging.ts, utils/debug.ts, main.tsx, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/nativeInstaller/download.ts, utils/sequential.ts, utils/plans.ts, components/Settings/Config.tsx
((jQa = require("crypto")),
  (IH = require("fs/promises")),
  (U6 = require("path")),
  (GQa = require("util")));
async function getWorktreePaths(cwd) {
  let t = Date.now(),
    { stdout: n, code: r } = await Gr(go(), ["worktree", "list", "--porcelain"], {
      cwd: cwd,
      preserveOutputOnError: false,
    }),
    o = Date.now() - t;
  if (r !== 0)
    return (
      G("tengu_worktree_detection", {
        duration_ms: o,
        worktree_count: 0,
        success: false,
      }),
      []
    );
  let s = n
    .split(
      `
`,
    )
    .filter((l) => l.startsWith("worktree "))
    .map((l) => o_(l.slice(9)));
  G("tengu_worktree_detection", {
    duration_ms: o,
    worktree_count: s.length,
    success: true,
  });
  let i = s.find((l) => cwd === l || cwd.startsWith(l + zQa.sep)),
    a = s.filter((l) => l !== i).sort((l, c) => l.localeCompare(c));
  return i ? [i, ...a] : a;
}
var zQa;
