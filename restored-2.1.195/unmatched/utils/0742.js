// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dr
// matched 2.1.88 source: src/utils/settings/settings.ts
// class=new  jaccard=0.0378  score=0.8507  fileCov=0.0381
// note: nearest: src/utils/settings/settings.ts (0.0378); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module dr] deps: utils/cwd.ts, @modelcontextprotocol/sdk/dist/esm/types.js, services/analytics/index.ts, dn, utils/debug.ts, utils/debug.ts, utils/errors.ts, utils/nativeInstaller/download.ts, utils/platform.ts, utils/fsOperations.ts, jsonc-parser/lib/esm/impl/parser.js, utils/settings/constants.ts, utils/sequential.ts, utils/platform.ts, utils/fsOperations.ts, @ant/claude-for-chrome-mcp/src/mcpSocketClient.ts, utils/settings/changeDetector.ts, Cfn, utils/settings/managedPath.ts, mCe, utils/settings/mdm/settings.ts, utils/settings/settings.ts, Sx, Sx, utils/settings/mdm/rawRead.ts, components/Feedback.tsx, utils/settings/types.ts, utils/settings/mdm/rawRead.ts, utils/settings/mdm/rawRead.ts
jae = require("path");
jo = Dr;
U1u = ve(() => H.object({
  allow: H.array(H.string()).optional(),
  soft_deny: H.array(H.string()).optional(),
  hard_deny: H.array(H.string()).optional(),
  deny: H.array(H.string()).optional(),
  environment: H.array(H.string()).optional()
})), fCs = ["userSettings", "localSettings", "flagSettings", "policySettings"];