// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ger
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0019  score=0.6549  fileCov=0.0019
// note: nearest: src/screens/REPL.tsx (0.0019); dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module Ger] deps: services/analytics/index.ts, utils/claudeInChrome/common.ts, utils/debug.ts, fb, services/mcp/client.ts, tasks/LocalShellTask/LocalShellTask.tsx, google-auth-library/build/src/crypto/node/crypto.js, state/AppStateStore.ts, utils/debug.ts, utils/worktree.ts, utils/sequential.ts, utils/permissions/filesystem.ts, utils/Shell.ts, utils/stats.ts, commands/add-dir/index.ts, utils/plans.ts, mVe, Task.ts, constants/prompts.ts, commands/clear/conversation.ts
QDl = require("crypto");
var call = async (e, t) => {
  let n = e.trim() || void 0;
  for await (let r of r7t({
    ...t,
    clearedSessionTitle: n
  })) t.onQueryEvent?.(r);
  return {
    type: "text",
    value: ""
  };
};