// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IUr
// matched 2.1.88 source: node_modules/@smithy/core/dist-cjs/submodules/schema/index.js
// class=new  jaccard=0.0498  score=0.7909  fileCov=0.0505
// note: nearest: node_modules/@smithy/core/dist-cjs/submodules/schema/index.js (0.0498); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function eEn(e, t) {
  if (t == null) return t;
  let n = uJs.NormalizedSchema.of(e);
  if (n.getMergedTraits().sensitive) return xUr;
  if (n.isListSchema()) {
    if (!!n.getValueSchema().getMergedTraits().sensitive) return xUr;
  } else if (n.isMapSchema()) {
    if (!!n.getKeySchema().getMergedTraits().sensitive || !!n.getValueSchema().getMergedTraits().sensitive) return xUr;
  } else if (n.isStructSchema() && typeof t === "object") {
    let r = t,
      o = {};
    for (let [s, i] of n.structIterator()) if (r[s] != null) o[s] = eEn(i, r[s]);
    return o;
  }
  return t;
}
var uJs,
  xUr = "***SensitiveInformation***";