// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iit
// matched 2.1.88 source: src/utils/plugins/schemas.ts
// class=new  jaccard=0.0154  score=0.4709  fileCov=0.0156
// note: nearest: src/utils/plugins/schemas.ts (0.0154); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var iit = E(() => {
  Xr();
  je();
  Jt();
  SNi = ve(() => H.string().min(1).refine(X1d, {
    message: "path must be path-absolute and must not override the host"
  })), Z1d = ve(() => H.union([SNi(), H.object({
    path: SNi(),
    mode: H.enum(["rw", "ro"]).default("rw"),
    scope: H.enum(["user", "team"]).default("team"),
    mount: H.string().min(1).refine(e => /^[A-Za-z0-9_-]+$/.test(e), {
      message: Q1d
    }).optional(),
    promptIndex: H.string().min(1).refine(GKr, {
      message: "promptIndex segments must match [A-Za-z0-9._-]+ and must not be . or .."
    }).optional(),
    promptIndexMaxBytes: H.number().int().positive().optional()
  })]));
});
var D_e, _ce, M3e, $j;