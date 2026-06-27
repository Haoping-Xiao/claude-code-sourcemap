// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module S$o
// matched 2.1.88 source: src/utils/plugins/officialMarketplaceGcs.ts
// class=partial  jaccard=0.1715  score=0.7189  fileCov=0.1838
// note: low-confidence suggestion: src/utils/plugins/officialMarketplaceGcs.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module S$o] deps: services/analytics/index.ts, utils/debug.ts, w4t, utils/debug.ts, utils/systemDirectories.ts, utils/errors.ts
W$ = require("fs/promises"), ose = require("path");
YIf = new Set(["ENOSPC", "EACCES", "EPERM", "EXDEV", "EBUSY", "ENOENT", "ENOTDIR", "EROFS", "EMFILE", "ENAMETOOLONG"]);
function ter() {
  let e = yr(),
    t = t9(qf(e) ?? e);
  return Dt().projects?.[t]?.hasTrustDialogAccepted === true;
}