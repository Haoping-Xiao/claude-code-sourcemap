// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HXn
// matched 2.1.88 source: node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFromFile.js
// class=new  jaccard=0.0458  score=0.1564  fileCov=0.0608
// note: nearest: node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFromFile.js (0.0458); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module HXn] deps: services/analytics/index.ts, constants/oauth.ts, @modelcontextprotocol/sdk/dist/esm/server/auth/errors.js, utils/staticRender.tsx, utils/debug.ts, main.tsx, utils/errors.ts, utils/errors.ts, utils/secureStorage/macOsKeychainHelpers.ts
YSl = require("fs/promises"), XSl = require("path");
function vbt() {
  if (!Us("allow_design_sync")) return false;
  if (Vi()) return false;
  if (Jl()) return true;
  return at("tengu_slate_quill", false);
}