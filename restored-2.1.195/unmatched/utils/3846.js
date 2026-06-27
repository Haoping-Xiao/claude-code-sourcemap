// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FEe
// matched 2.1.88 source: src/utils/plugins/zipCacheAdapters.ts
// class=new  jaccard=0.0516  score=0.2812  fileCov=0.0595
// note: nearest: src/utils/plugins/zipCacheAdapters.ts (0.0516); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module FEe] deps: dn, services/analytics/growthbook.ts, utils/debug.ts, services/analytics/firstPartyEventLoggingExporter.ts, w4t, utils/env.ts, utils/config.ts, utils/debug.ts, main.tsx, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, constants/files.ts, utils/fsOperations.ts, utils/gracefulShutdown.ts, utils/sequential.ts, uAo, utils/platform.ts, utils/log.ts, utils/settings/settings.ts, utils/autoUpdater.ts, utils/fsOperations.ts
Tza = require("fs"), Hk = require("fs/promises"), H9e = require("os"), x6 = require("path"), T9e = R(Uj(), 1);
vza = class vza extends NIt {};
function Mza() {
  return Pza.join(tr(), ".last-update-result.json");
}
async function w9e(e) {
  try {
    await qs().atomicWrite(Mza(), De(e));
  } catch (t) {
    T(`Failed to record update result: ${t}`, {
      level: "error"
    });
  }
}
async function vVn() {
  let e;
  try {
    e = await qs().read(Mza());
  } catch (t) {
    if (!wn(t)) T(`Failed to read update result: ${t}`, {
      level: "error"
    });
    return null;
  }
  try {
    let t = Gzp().safeParse(Ft(e));
    return t.success ? t.data : null;
  } catch {
    return null;
  }
}
var Pza, Gzp;