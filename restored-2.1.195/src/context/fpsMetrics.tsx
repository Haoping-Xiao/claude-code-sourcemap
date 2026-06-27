// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hur
// matched 2.1.88 source: src/context/fpsMetrics.tsx
// class=modified  jaccard=0.3533  score=0.7187  fileCov=0.41
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Hur] deps: utils/messages.ts, services/analytics/index.ts, B7t, env-paths/index.js, utils/diff.ts, query.ts, dn, services/analytics/growthbook.ts, utils/debug.ts, fb, utils/markdownConfigLoader.ts, services/api/errors.ts, utils/sessionStorage.ts, utils/semver.ts, utils/bash/ast.ts, tasks/stopTask.ts, tools/ScheduleCronTool/prompt.ts, tools/SyntheticOutputTool/SyntheticOutputTool.ts, types/permissions.ts, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/claudemd.ts, utils/sequential.ts, components/tasks/RemoteSessionDetailDialog.tsx, components/HelpV2/HelpV2.tsx, utils/crypto.ts, utils/messages.ts, utils/file.ts, L3e, utils/markdownConfigLoader.ts, utils/fsOperations.ts, services/PromptSuggestion/speculation.ts, node-fetch/lib/index.js, fast-xml-parser/lib/fxp.cjs, utils/plans.ts, commands/rename/generateSessionName.ts, utils/stream.ts, components/permissions/ExitPlanModePermissionRequest/ExitPlanModePermissionRequest.tsx, cli/print.ts
((Sur = require("crypto")), (Eur = require("fs/promises")));
function tmc(e) {
  let t = Zfc.c(3),
    { getFpsMetrics: n, children: r } = e,
    o;
  if (t[0] !== r || t[1] !== n)
    ((o = rmc.jsx(emc.Provider, {
      value: n,
      children: r,
    })),
      (t[0] = r),
      (t[1] = n),
      (t[2] = o));
  else o = t[2];
  return o;
}
function nmc() {
  return Tur.useContext(emc);
}
var Zfc, Tur, rmc, emc;
