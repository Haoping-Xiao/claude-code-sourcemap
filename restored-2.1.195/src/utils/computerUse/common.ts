// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Tzr
// matched 2.1.88 source: src/utils/computerUse/common.ts
// class=modified  jaccard=0.1386  score=0.4767  fileCov=0.1635
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Tzr] deps: services/analytics/index.ts, utils/debug.ts, utils/errors.ts, utils/log.ts, dn, services/analytics/growthbook.ts, utils/debug.ts, services/mcp/officialRegistry.ts
lOi = ["commercial", "gsuite", "enterprise", "health"];
Hzr = L$d();
function fOi() {
  let e = process.env.__CFBundleIdentifier;
  if (e) return e;
  return $$d[Oe.terminal ?? ""] ?? null;
}
function uke(e) {
  return hc(e) === COMPUTER_USE_MCP_SERVER_NAME;
}
var COMPUTER_USE_MCP_SERVER_NAME = "computer-use",
  CLI_HOST_BUNDLE_ID = "com.anthropic.claude-code.cli-no-window",
  $$d,
  ckn;
