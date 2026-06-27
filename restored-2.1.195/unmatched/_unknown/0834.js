// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vRs
// matched 2.1.88 source: node_modules/@smithy/smithy-client/dist-cjs/index.js
// class=new  jaccard=0.0103  score=1  fileCov=0.0103
// note: nearest: node_modules/@smithy/smithy-client/dist-cjs/index.js (0.0103); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var vRs = E(() => {
  TRs = R(ZH(), 1);
});
function Tgn(e, t) {
  if (t == null) return t;
  let n = wRs.NormalizedSchema.of(e);
  if (n.getMergedTraits().sensitive) return tPr;
  if (n.isListSchema()) {
    if (!!n.getValueSchema().getMergedTraits().sensitive) return tPr;
  } else if (n.isMapSchema()) {
    if (!!n.getKeySchema().getMergedTraits().sensitive || !!n.getValueSchema().getMergedTraits().sensitive) return tPr;
  } else if (n.isStructSchema() && typeof t === "object") {
    let r = t,
      o = {};
    for (let [s, i] of n.structIterator()) if (r[s] != null) o[s] = Tgn(i, r[s]);
    return o;
  }
  return t;
}
var wRs,
  tPr = "***SensitiveInformation***";