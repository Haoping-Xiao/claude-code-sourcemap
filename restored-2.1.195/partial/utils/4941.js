// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module M2o
// matched 2.1.88 source: src/utils/crossProjectResume.ts
// class=partial  jaccard=0.2468  score=0.6611  fileCov=0.2825
// note: low-confidence suggestion: src/utils/crossProjectResume.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module M2o] deps: utils/telemetry/betaSessionTracing.ts, tools/BashTool/sedValidation.ts, tools/FileReadTool/FileReadTool.ts, tools/GrepTool/GrepTool.ts, utils/teammateContext.ts, CAt, utils/debug.ts, utils/claudemd.ts, @growthbook/growthbook/dist/esm/core.mjs, utils/sequential.ts, utils/messageQueueManager.ts, utils/messages.ts, utils/agentContext.ts, utils/file.ts, utils/permissions/permissionSetup.ts, utils/plans.ts, utils/fsOperations.ts, @smithy/eventstream-serde-config-resolver/dist-cjs/index.js, utils/agenticSessionSearch.ts
Wor = require("path"), NGf = [L$, Vg];
function $2o() {
  return Vt() === "windows" ? ";" : "&&";
}
function Vor(e, t, n) {
  let r = yr();
  if (!t || !e.projectPath || e.projectPath === r) return {
    isCrossProject: false
  };
  if (n.some(a => e.projectPath === a || e.projectPath.startsWith(a + BVl.sep))) return {
    isCrossProject: true,
    isSameRepoWorktree: true,
    projectPath: e.projectPath
  };
  let s = qg(e);
  return {
    isCrossProject: true,
    isSameRepoWorktree: false,
    command: `cd ${ja([e.projectPath])} ${$2o()} claude --resume ${s}`,
    projectPath: e.projectPath
  };
}
var BVl;