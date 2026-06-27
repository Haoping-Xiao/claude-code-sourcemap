// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Oka
// matched 2.1.88 source: node_modules/@modelcontextprotocol/sdk/dist/esm/client/streamableHttp.js
// class=partial  jaccard=0.0655  score=1  fileCov=0.0655
// note: low-confidence suggestion: node_modules/@modelcontextprotocol/sdk/dist/esm/client/streamableHttp.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Oka = E(() => {
  ft();
  er();
  je();
  At();
  Bi();
  vn();
  Jt();
  dn();
  kt();
  $ka = require("path");
});
function V3t(e) {
  if (e instanceof sL) return !0;
  if (e instanceof Error && !(e instanceof gi) && "code" in e) {
    if (e.code === 403) return !e.message.includes("Server returned 403 after trying upscoping");
    if (e.code === 401) return !e.message.includes("Server returned 401 after successful authentication");
  }
  return !1;
}