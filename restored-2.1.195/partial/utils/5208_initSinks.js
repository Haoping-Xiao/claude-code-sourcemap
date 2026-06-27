// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module j1e
// matched 2.1.88 source: src/bridge/bridgePointer.ts
// class=partial  jaccard=0.0854  score=0.5525  fileCov=0.0918
// note: low-confidence suggestion: src/bridge/bridgePointer.ts; dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module j1e] deps: Xr, je, At, BFe, jS, Jt
yme = require("fs/promises"), Vir = require("path"), zYf = ve(() => H.object({
  sessionId: H.string(),
  environmentId: H.string(),
  source: H.enum(["standalone", "repl"]),
  pid: H.number().optional(),
  procStart: H.string().optional()
}));
var bHt = {};
_t(bHt, {
  initSinks: () => initSinks
});
function initSinks() {
  C3o(), Iqe();
}