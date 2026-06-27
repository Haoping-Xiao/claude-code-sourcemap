// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DHe
// matched 2.1.88 source: src/services/mcp/useManageMCPConnections.ts
// class=new  jaccard=0.0101  score=0.4123  fileCov=0.0102
// note: nearest: src/services/mcp/useManageMCPConnections.ts (0.0101); dir inferred from dep-graph -> utils; 3 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: skillIndexCacheKey, getSkillIndex, clearSkillIndexCache
// [unwrapped __esm module DHe] deps: services/analytics/index.ts, dn, services/analytics/growthbook.ts, utils/http.ts, utils/config.ts, utils/debug.ts, main.tsx, @anthropic-ai/sdk/internal/utils/uuid.mjs, constants/files.ts, utils/sequential.ts, utils/platform.ts, utils/fsOperations.ts, utils/claudeInChrome/common.ts, cli/print.ts, utils/claudeInChrome/setup.ts
_se = require("fs/promises"), OFl = require("os"), tZ = require("path"), pBo = require("url"), MFl = `${fBo}.json`;
function skillIndexCacheKey(e, t) {
  return `${hKt()}:${G6()}:${e}:${(t ?? []).map(n => n.name).sort().join(",")}`;
}
function clearSkillIndexCache() {
  getSkillIndex.cache?.clear?.();
}
var getSkillIndex;