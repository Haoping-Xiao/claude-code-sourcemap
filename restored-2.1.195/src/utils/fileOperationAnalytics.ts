// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module j9t
// matched 2.1.88 source: src/utils/fileOperationAnalytics.ts
// class=modified  jaccard=0.4332  score=1  fileCov=0.4332
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module j9t] deps: ft, Lo, sa, P3e, dr
eyt = require("path");
function ief(e) {
  return kh(Dvo.createHash("sha256").update(e).digest("hex").slice(0, 16));
}
function aef(e) {
  return kh(Dvo.createHash("sha256").update(e).digest("hex"));
}
function logFileOperation(params) {
  let t = {
    operation: $e(params.operation),
    tool: $e(params.tool),
    filePathHash: ief(params.filePath),
  };
  if (params.content !== void 0 && params.content.length <= lef)
    t.contentHash = aef(params.content);
  if (params.type !== void 0) t.type = $e(params.type);
  G("tengu_file_operation", t);
}
var Dvo,
  lef = 102400;
