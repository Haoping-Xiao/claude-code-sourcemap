// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IUr
// matched 2.1.88 source: node_modules/@smithy/smithy-client/dist-cjs/index.js
// class=new  jaccard=0.0103  score=1  fileCov=0.0103
// note: nearest: node_modules/@smithy/smithy-client/dist-cjs/index.js (0.0103); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var IUr = E(() => {
  K7s();
  rXs();
  oXs();
  sXs();
  iXs();
  aXs();
  dXs();
  pXs();
  fXs();
  gXs();
  EXs();
  AXs();
  wXs();
  CXs();
  xXs();
  kXs();
  MXs();
  $Xs();
  NXs();
  UXs();
  FXs();
  jXs();
  GXs();
  WXs();
  qXs();
  VXs();
  zXs();
  KXs();
  YXs();
  XXs();
  JXs();
  QXs();
  ZXs();
  eJs();
  nJs();
  rJs();
  oJs();
  sJs();
  iJs();
  aJs();
  lJs();
  cJs();
});
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