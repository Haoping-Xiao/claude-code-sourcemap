// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $3o
// matched 2.1.88 source: src/utils/listSessionsImpl.ts
// class=new  jaccard=0.0312  score=1  fileCov=0.0312
// note: nearest: src/utils/listSessionsImpl.ts (0.0312); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module $3o] deps: @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/path.ts, utils/fsOperations.ts
FZl = require("fs/promises");
async function qZl(e, t = {}) {
  let n = FS(e);
  if (!n) return;
  let r = await rCe(n, t.dir);
  if (!r) return;
  let o = await Wpn(r.filePath);
  if (!o) return;
  return fbt(n, o, r.projectPath) ?? void 0;
}