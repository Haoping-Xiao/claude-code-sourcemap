// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module A7o
// matched 2.1.88 source: node_modules/@anthropic-ai/sandbox-runtime/dist/utils/debug.js
// class=partial  jaccard=0.0891  score=0.2752  fileCov=0.1164
// note: low-confidence suggestion: node_modules/@anthropic-ai/sandbox-runtime/dist/utils/debug.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module A7o] deps: services/analytics/index.ts, main.tsx, utils/deepLink/terminalLauncher.ts, utils/debug.ts, utils/errors.ts, utils/fsOperations.ts, utils/settings/constants.ts, @ant/claude-for-chrome-mcp/src/mcpSocketClient.ts, utils/attachments.ts, proxy-from-env/index.js, utils/settings/changeDetector.ts, Sx
bOc = require("fs");
function TOc() {
  return !Js();
}
function vOc(e) {
  for (let t of e) T(`Invalid setting skipped without dialog (automated session): ${t.file ?? "settings"}: ${t.path}: ${t.message}`, {
    level: "error"
  });
}