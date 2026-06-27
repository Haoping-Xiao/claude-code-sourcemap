// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ire
// matched 2.1.88 source: src/services/mcp/client.ts
// class=new  jaccard=0.0024  score=0.4802  fileCov=0.0024
// note: nearest: src/services/mcp/client.ts (0.0024); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Ire = E(() => {
  Un();
});
function o6() {
  let e = Oe.MCP_TIMEOUT;
  return e && e > 0 ? e : 30000;
}
function nIa() {
  let e = Oe.MCP_CONNECT_TIMEOUT_MS;
  return e && e > 0 ? e : 5000;
}