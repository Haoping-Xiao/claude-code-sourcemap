// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bk
// matched 2.1.88 source: src/utils/tasks.ts
// class=partial  jaccard=0.1069  score=0.936  fileCov=0.1077
// note: low-confidence suggestion: src/utils/tasks.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module bk] deps: Xr, ft, db, je, fn, At, vn, ih, Jt, Mp, Sj
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