// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module j9t
// matched 2.1.88 source: src/utils/fileOperationAnalytics.ts
// class=modified  jaccard=0.4332  score=1  fileCov=0.4332
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module j9t] deps: ft, Lo, sa, P3e, dr
eyt = require("path");
function ief(e) {
  return kh(Dvo.createHash("sha256").update(e).digest("hex").slice(0, 16));
}
function aef(e) {
  return kh(Dvo.createHash("sha256").update(e).digest("hex"));
}
function Soe(e) {
  let t = {
    operation: $e(e.operation),
    tool: $e(e.tool),
    filePathHash: ief(e.filePath),
  };
  if (e.content !== void 0 && e.content.length <= lef) t.contentHash = aef(e.content);
  if (e.type !== void 0) t.type = $e(e.type);
  G("tengu_file_operation", t);
}
var Dvo,
  lef = 102400;
