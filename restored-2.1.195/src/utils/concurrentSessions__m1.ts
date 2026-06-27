// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ld
// matched 2.1.88 source: src/utils/concurrentSessions.ts
// class=modified (alt of src/utils/concurrentSessions.ts)  jaccard=0.092  score=0.6407  fileCov=0.097
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Ld] deps: zod/v4/classic/schemas.js, services/analytics/index.ts, utils/debug.ts, fb, utils/debugFilter.ts, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, constants/files.ts, utils/teammateContext.ts, utils/platform.ts, utils/fsOperations.ts, utils/concurrentSessions.ts
(($An = require("fs")),
  (sU = require("fs/promises")),
  (Tye = require("path")),
  (kpd = ve(() =>
    dt.object({
      pid: dt.number(),
      sessionId: dt.string(),
      cwd: dt.string().optional(),
      startedAt: dt.number(),
      version: dt.string().optional(),
      kind: dt.enum(["interactive", "bg", "daemon", "daemon-worker"]),
    }),
  )),
  (Qoi = []));
njr = Promise.resolve();
var UAn;
