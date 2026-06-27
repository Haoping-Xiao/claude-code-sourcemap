// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module j9t
// matched 2.1.88 source: src/utils/fileOperationAnalytics.ts
// class=modified  jaccard=0.2421  score=1  fileCov=0.2421
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var j9t = E(() => {
  ft();
  Lo();
  sa();
  P3e();
  dr();
  eyt = require("path");
});
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
