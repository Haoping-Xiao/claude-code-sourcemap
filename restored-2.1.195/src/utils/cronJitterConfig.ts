// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module N8
// matched 2.1.88 source: src/utils/cronJitterConfig.ts
// class=modified  jaccard=0.4541  score=0.6937  fileCov=0.5679
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: getCronJitterConfig
// [unwrapped __esm module N8] deps: ft, vX, je, At, ys, YS, Rd, vn, Jt
((Gra = require("crypto")),
  (Wra = require("fs")),
  (MOn = require("fs/promises")),
  ($On = require("path")),
  (uop = /^\*\/\d+ \* \* \* \*$/),
  (dop = $On.join(".claude", "scheduled_tasks.json")));
O8 = {
  recurringFrac: 0.5,
  recurringCapMs: 1800000,
  oneShotMaxMs: 90000,
  oneShotFloorMs: 0,
  oneShotMinuteMod: 30,
  recurringMaxAgeMs: 604800000,
  cacheLeadMs: 15000,
};
var Kra = {};
function getCronJitterConfig() {
  let e = T7("tengu_kairos_cron_config", O8, pop),
    t = mop().safeParse(e);
  return t.success ? t.data : O8;
}
var pop = 60000,
  xoo = 1800000,
  fop = 2592000000,
  mop;
