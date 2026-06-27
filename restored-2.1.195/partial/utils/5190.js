// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aec
// matched 2.1.88 source: node_modules/jsonwebtoken/decode.js
// class=partial  jaccard=0.1995  score=0.7285  fileCov=0.2155
// note: low-confidence suggestion: node_modules/jsonwebtoken/decode.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module aec] deps: utils/listSessionsImpl.ts, utils/path.ts, utils/fsOperations.ts
KJt = require("fs/promises"), Mir = require("path");
function U3o(e) {
  return !!e && typeof e === "object" && cec in e;
}
function uec(e) {
  return e[cec]?.complete;
}
var cec, lec;