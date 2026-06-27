// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dBr
// matched 2.1.88 source: node_modules/@smithy/core/dist-cjs/submodules/schema/index.js
// class=new  jaccard=0.0498  score=0.7909  fileCov=0.0505
// note: nearest: node_modules/@smithy/core/dist-cjs/submodules/schema/index.js (0.0498); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var dBr = E(() => {
  m6s();
  H6s();
  T6s();
  v6s();
  w6s();
  C6s();
  R6s();
  L6s();
  D6s();
  M6s();
  F6s();
  j6s();
  V6s();
  z6s();
  Y6s();
  X6s();
  tzs();
  nzs();
  ozs();
  izs();
  azs();
  lzs();
  czs();
  uzs();
  dzs();
  pzs();
  fzs();
  mzs();
  gzs();
  hzs();
  yzs();
  _zs();
  bzs();
  Szs();
  Azs();
  Hzs();
  Tzs();
  vzs();
  wzs();
  Czs();
  Izs();
  xzs();
});
function Zbn(e, t) {
  if (t == null) return t;
  let n = kzs.NormalizedSchema.of(e);
  if (n.getMergedTraits().sensitive) return pBr;
  if (n.isListSchema()) {
    if (!!n.getValueSchema().getMergedTraits().sensitive) return pBr;
  } else if (n.isMapSchema()) {
    if (!!n.getKeySchema().getMergedTraits().sensitive || !!n.getValueSchema().getMergedTraits().sensitive) return pBr;
  } else if (n.isStructSchema() && typeof t === "object") {
    let r = t,
      o = {};
    for (let [s, i] of n.structIterator()) if (r[s] != null) o[s] = Zbn(i, r[s]);
    return o;
  }
  return t;
}
var kzs,
  pBr = "***SensitiveInformation***";