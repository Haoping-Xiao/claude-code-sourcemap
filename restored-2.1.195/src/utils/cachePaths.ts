// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Epn
// matched 2.1.88 source: src/utils/cachePaths.ts
// class=modified  jaccard=0.5707  score=1  fileCov=0.5707
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Epn] deps: cli/print.ts, utils/fsOperations.ts
((eRt = require("path")), (bpn = Ukr("claude-cli")));
LFe = {
  baseLogs: () => eRt.join(bpn.cache, Spn(qt().cwd())),
  errors: () => eRt.join(bpn.cache, Spn(qt().cwd()), "errors"),
  messages: () => eRt.join(bpn.cache, Spn(qt().cwd()), "messages"),
  mcpLogs: (e) => eRt.join(bpn.cache, Spn(qt().cwd()), `mcp-logs-${ZSs(e)}`),
};
function Apn(e) {
  return e.replace(eEs, "").trim() || e;
}
function FZe(e) {
  return e.replace(eEs, "").trim();
}
function tEs(e) {
  return e.replace(LDu, "").trim();
}
var eEs, LDu;
