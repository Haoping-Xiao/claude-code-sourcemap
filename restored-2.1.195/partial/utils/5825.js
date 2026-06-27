// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module p1c
// matched 2.1.88 source: src/server/types.ts
// class=partial  jaccard=0.2445  score=1  fileCov=0.2445
// note: low-confidence suggestion: src/server/types.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var p1c = E(() => {
  Xr();
  Nxm = ve(() => H.object({
    session_id: H.string(),
    ws_url: H.string(),
    work_dir: H.string().optional()
  }));
});