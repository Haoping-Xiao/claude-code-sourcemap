// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dBr
// matched 2.1.88 source: node_modules/@smithy/core/dist-cjs/submodules/schema/index.js
// class=new  jaccard=0.0498  score=0.7909  fileCov=0.0505
// note: nearest: node_modules/@smithy/core/dist-cjs/submodules/schema/index.js (0.0498); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
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