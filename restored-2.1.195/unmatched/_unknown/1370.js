// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tFr
// matched 2.1.88 source: node_modules/@smithy/core/dist-cjs/submodules/schema/index.js
// class=new  jaccard=0.0498  score=0.7909  fileCov=0.0505
// note: nearest: node_modules/@smithy/core/dist-cjs/submodules/schema/index.js (0.0498); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var tFr = E(() => {
  OZs();
  VZs();
  zZs();
  KZs();
  YZs();
  XZs();
  eei();
  tei();
  nei();
  oei();
  uei();
  dei();
  gei();
  hei();
  _ei();
  bei();
  Tei();
  vei();
  Cei();
  xei();
  kei();
  Rei();
  Lei();
  Dei();
  Pei();
  Mei();
  $ei();
  Oei();
  Nei();
  Bei();
  Uei();
  Fei();
  jei();
  Gei();
  qei();
  Vei();
  zei();
  Kei();
  Yei();
  Xei();
  Jei();
  Qei();
});
function IEn(e, t) {
  if (t == null) return t;
  let n = Zei.NormalizedSchema.of(e);
  if (n.getMergedTraits().sensitive) return nFr;
  if (n.isListSchema()) {
    if (!!n.getValueSchema().getMergedTraits().sensitive) return nFr;
  } else if (n.isMapSchema()) {
    if (!!n.getKeySchema().getMergedTraits().sensitive || !!n.getValueSchema().getMergedTraits().sensitive) return nFr;
  } else if (n.isStructSchema() && typeof t === "object") {
    let r = t,
      o = {};
    for (let [s, i] of n.structIterator()) if (r[s] != null) o[s] = IEn(i, r[s]);
    return o;
  }
  return t;
}
var Zei,
  nFr = "***SensitiveInformation***";