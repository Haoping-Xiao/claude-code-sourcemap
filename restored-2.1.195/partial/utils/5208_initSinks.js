// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module j1e
// matched 2.1.88 source: src/bridge/bridgePointer.ts
// class=partial  jaccard=0.0854  score=0.5525  fileCov=0.0918
// note: low-confidence suggestion: src/bridge/bridgePointer.ts; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: initSinks
// [unwrapped __esm module j1e] deps: @modelcontextprotocol/sdk/dist/esm/types.js, utils/debug.ts, utils/errors.ts, utils/sessionStoragePortable.ts, utils/path.ts, utils/fsOperations.ts
yme = require("fs/promises"), Vir = require("path"), zYf = ve(() => H.object({
  sessionId: H.string(),
  environmentId: H.string(),
  source: H.enum(["standalone", "repl"]),
  pid: H.number().optional(),
  procStart: H.string().optional()
}));
function initSinks() {
  C3o(), Iqe();
}