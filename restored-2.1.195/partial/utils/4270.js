// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jko
// matched 2.1.88 source: src/utils/transcriptSearch.ts
// class=partial  jaccard=0.0907  score=0.6616  fileCov=0.0951
// note: low-confidence suggestion: src/utils/transcriptSearch.ts; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module jko] deps: utils/debug.ts, utils/errors.ts, tools/AgentTool/loadAgentsDir.ts
Aml = require("crypto"), Y_t = require("fs/promises"), e7n = require("path");
function toolUseSearchText(input) {
  if (typeof input !== "object" || input === null) return "";
  let t = input;
  for (let n of ["command", "file_path", "path", "pattern", "query", "prompt"]) {
    let r = t[n];
    if (typeof r === "string") return $a(r.replace(/\s+/g, " ").trim(), 60);
  }
  for (let n of Object.values(t)) if (typeof n === "string") return $a(n.replace(/\s+/g, " ").trim(), 60);
  return "";
}