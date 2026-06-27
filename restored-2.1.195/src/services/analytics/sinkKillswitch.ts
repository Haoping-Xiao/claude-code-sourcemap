// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IOi
// matched 2.1.88 source: src/services/analytics/sinkKillswitch.ts
// class=modified  jaccard=0.1774  score=0.427  fileCov=0.2328
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module IOi] deps: axios/lib/axios.js, services/analytics/index.ts, types/generated/events_mono/claude_code/v1/claude_code_internal_event.ts, types/generated/events_mono/growthbook/v1/growthbook_experiment_event.ts, utils/http.ts, utils/config.ts, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/slashCommandParsing.ts, utils/settings/constants.ts, utils/sequential.ts, utils/fsOperations.ts, @modelcontextprotocol/sdk/dist/esm/server/auth/errors.js, utils/debug.ts, services/analytics/firstPartyEventLoggingExporter.ts
((mke = R(Nh(), 1)),
  (COi = require("crypto")),
  (E7 = require("fs/promises")),
  (gkn = R(require("path"))),
  (vOi = COi.randomUUID()));
function S3e(e) {
  return zx(SINK_KILLSWITCH_CONFIG_NAME, {})?.[e] === true;
}
var SINK_KILLSWITCH_CONFIG_NAME = "tengu_frond_boric";
