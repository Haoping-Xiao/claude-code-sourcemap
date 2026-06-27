// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module S$r
// matched 2.1.88 source: node_modules/@smithy/core/dist-cjs/submodules/schema/index.js
// class=new  jaccard=0.0498  score=0.7909  fileCov=0.0505
// note: nearest: node_modules/@smithy/core/dist-cjs/submodules/schema/index.js (0.0498); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function Mhn(e, t) {
  if (t == null) return t;
  let n = YNs.NormalizedSchema.of(e);
  if (n.getMergedTraits().sensitive) return E$r;
  if (n.isListSchema()) {
    if (!!n.getValueSchema().getMergedTraits().sensitive) return E$r;
  } else if (n.isMapSchema()) {
    if (!!n.getKeySchema().getMergedTraits().sensitive || !!n.getValueSchema().getMergedTraits().sensitive) return E$r;
  } else if (n.isStructSchema() && typeof t === "object") {
    let r = t,
      o = {};
    for (let [s, i] of n.structIterator()) if (r[s] != null) o[s] = Mhn(i, r[s]);
    return o;
  }
  return t;
}
var YNs,
  E$r = "***SensitiveInformation***";