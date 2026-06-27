// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module S9
// matched 2.1.88 source: src/utils/secureStorage/macOsKeychainHelpers.ts
// class=partial  jaccard=0.2023  score=0.933  fileCov=0.2052
// note: low-confidence suggestion: src/utils/secureStorage/macOsKeychainHelpers.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module S9] deps: Rc, fn
U7s = require("crypto"), ZSn = require("os"), F7s = require("path");
Pld = /^[a-zA-Z0-9._-]+$/;
sle = {
  cache: {
    data: null,
    cachedAt: 0
  },
  generation: 0,
  readInFlight: null
};
async function G7s() {}
function KB(e) {
  return e.slice(-20);
}