// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ld
// matched 2.1.88 source: src/utils/concurrentSessions.ts
// class=modified (alt of src/utils/concurrentSessions.ts)  jaccard=0.208  score=1  fileCov=0.208
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Ld = E(() => {
  zb();
  ft();
  kt();
  fb();
  fd();
  je();
  fn();
  At();
  Bi();
  YS();
  Is();
  Jt();
  Mp();
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
});
var UAn;
