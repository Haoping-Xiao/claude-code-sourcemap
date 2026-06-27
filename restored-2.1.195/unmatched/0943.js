// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module S$r
// matched 2.1.88 source: node_modules/@smithy/smithy-client/dist-cjs/index.js
// class=new  jaccard=0.0103  score=1  fileCov=0.0103
// note: nearest: node_modules/@smithy/smithy-client/dist-cjs/index.js (0.0103); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var S$r = E(() => {
  D1s();
  j1s();
  G1s();
  W1s();
  q1s();
  V1s();
  X1s();
  J1s();
  Q1s();
  eNs();
  iNs();
  aNs();
  dNs();
  pNs();
  mNs();
  gNs();
  SNs();
  ENs();
  HNs();
  vNs();
  wNs();
  CNs();
  INs();
  xNs();
  kNs();
  RNs();
  LNs();
  DNs();
  PNs();
  MNs();
  $Ns();
  ONs();
  NNs();
  BNs();
  FNs();
  jNs();
  GNs();
  WNs();
  qNs();
  VNs();
  zNs();
  KNs();
});
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