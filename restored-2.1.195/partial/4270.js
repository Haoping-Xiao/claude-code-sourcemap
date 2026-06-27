// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jko
// matched 2.1.88 source: src/utils/transcriptSearch.ts
// class=partial  jaccard=0.1778  score=0.7824  fileCov=0.1871
// note: low-confidence suggestion: src/utils/transcriptSearch.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var jko = E(() => {
  je();
  At();
  D6e();
  Aml = require("crypto"), Y_t = require("fs/promises"), e7n = require("path");
});
function t7n(e) {
  if (typeof e !== "object" || e === null) return "";
  let t = e;
  for (let n of ["command", "file_path", "path", "pattern", "query", "prompt"]) {
    let r = t[n];
    if (typeof r === "string") return $a(r.replace(/\s+/g, " ").trim(), 60);
  }
  for (let n of Object.values(t)) if (typeof n === "string") return $a(n.replace(/\s+/g, " ").trim(), 60);
  return "";
}