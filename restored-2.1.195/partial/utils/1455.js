// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gAn
// matched 2.1.88 source: src/utils/model/modelCapabilities.ts
// class=partial  jaccard=0.1346  score=0.679  fileCov=0.1438
// note: low-confidence suggestion: src/utils/model/modelCapabilities.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module gAn] deps: lodash-es/_createBaseFor.js, lodash-es/memoize.js, @modelcontextprotocol/sdk/dist/esm/types.js, utils/http.ts, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/settings/constants.ts, utils/log.ts, utils/proxy.ts, utils/fsOperations.ts, utils/status.tsx
Roi = require("fs"), fAn = require("fs/promises"), P2r = require("path"), Loi = ve(() => H.object({
  id: H.string(),
  display_name: H.string().optional()
}).strip()), opd = ve(() => H.object({
  baseUrl: H.string(),
  fetchedAt: H.number(),
  models: H.array(Loi())
}));
D2r = Cn(e => {
  try {
    let t = Roi.readFileSync(e, "utf-8"),
      n = opd().safeParse(Ia(t, false));
    return n.success ? n.data : null;
  } catch {
    return null;
  }
}, e => e);
function v0(e) {
  return hye.includes(e);
}
function ya(e) {
  return e.replace(/\[1m\]$/i, "");
}
function tU(e) {
  return spd.includes(e);
}
var hye, spd;