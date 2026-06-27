// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jen
// matched 2.1.88 source: src/skills/loadSkillsDir.ts
// class=new  jaccard=0.0188  score=0.7998  fileCov=0.0188
// note: nearest: src/skills/loadSkillsDir.ts (0.0188); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Jen] deps: services/analytics/index.ts, services/analytics/growthbook.ts, utils/debugFilter.ts, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/fsOperations.ts, utils/file.ts, utils/fsOperations.ts
apr = require("fs/promises"), C3 = require("path"), Zz = {
  filePath: null,
  timestamp: 0
};
function CNe(e) {
  if (e?.hooks && (!VE("hooks") || L_e(e.source))) Rsn(e.hooks);else Rsn(void 0);
}