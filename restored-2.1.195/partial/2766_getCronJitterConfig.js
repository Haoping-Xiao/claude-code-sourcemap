// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module N8
// matched 2.1.88 source: src/utils/cronTasks.ts
// class=partial  jaccard=0.2031  score=0.7078  fileCov=0.2216
// note: low-confidence suggestion: src/utils/cronTasks.ts; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var N8 = E(() => {
  ft();
  vX();
  je();
  At();
  ys();
  YS();
  Rd();
  vn();
  Jt();
  Gra = require("crypto"), Wra = require("fs"), MOn = require("fs/promises"), $On = require("path"), uop = /^\*\/\d+ \* \* \* \*$/, dop = $On.join(".claude", "scheduled_tasks.json");
  O8 = {
    recurringFrac: 0.5,
    recurringCapMs: 1800000,
    oneShotMaxMs: 90000,
    oneShotFloorMs: 0,
    oneShotMinuteMod: 30,
    recurringMaxAgeMs: 604800000,
    cacheLeadMs: 15000
  };
});
var Kra = {};
_t(Kra, {
  getCronJitterConfig: () => getCronJitterConfig
});
function getCronJitterConfig() {
  let e = T7("tengu_kairos_cron_config", O8, pop),
    t = mop().safeParse(e);
  return t.success ? t.data : O8;
}
var pop = 60000,
  xoo = 1800000,
  fop = 2592000000,
  mop;