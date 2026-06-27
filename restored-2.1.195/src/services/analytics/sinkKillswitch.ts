// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IOi
// matched 2.1.88 source: src/services/analytics/sinkKillswitch.ts
// class=modified  jaccard=0.1774  score=0.427  fileCov=0.2328
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module IOi] deps: Hp, ft, F$i, G$i, oo, er, je, fn, At, Gx, Rd, vn, Jt, H0, kt, Du
((mke = R(Nh(), 1)),
  (COi = require("crypto")),
  (E7 = require("fs/promises")),
  (gkn = R(require("path"))),
  (vOi = COi.randomUUID()));
function S3e(e) {
  return zx(SINK_KILLSWITCH_CONFIG_NAME, {})?.[e] === true;
}
var SINK_KILLSWITCH_CONFIG_NAME = "tengu_frond_boric";
