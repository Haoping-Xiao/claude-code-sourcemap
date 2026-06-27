// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bk
// matched 2.1.88 source: src/utils/tasks.ts
// class=partial  jaccard=0.1069  score=0.936  fileCov=0.1077
// note: low-confidence suggestion: src/utils/tasks.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module bk] deps: @modelcontextprotocol/sdk/dist/esm/types.js, services/analytics/index.ts, utils/authFileDescriptor.ts, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/sequential.ts, bootstrap/state.ts, utils/fsOperations.ts, utils/concurrentSessions.ts, utils/teammate.ts
gOa = require("fs/promises"), pft = require("path"), hOa = Mi();
_Oa = hOa.subscribe;
rVe = ve(() => H.enum(["pending", "in_progress", "completed"])), UDp = ve(() => H.object({
  id: H.string(),
  subject: H.string(),
  description: H.string(),
  activeForm: H.string().optional(),
  owner: H.string().optional(),
  status: rVe(),
  blocks: H.array(H.string()),
  blockedBy: H.array(H.string()),
  metadata: H.record(H.string(), H.unknown()).optional()
})), pWt = {
  retries: {
    retries: 30,
    minTimeout: 5,
    maxTimeout: 100
  },
  onCompromised: e => ke(e)
};
var qDp, VDp, hft;