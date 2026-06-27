// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kAt
// matched 2.1.88 source: src/utils/background/remote/remoteSession.ts
// class=modified (alt of src/utils/background/remote/remoteSession.ts)  jaccard=0.0817  score=0.5445  fileCov=0.0877
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var kAt = E(() => {
  kt();
  s9l();
  F2o();
  JJ();
  VDe();
  Lo();
  BR();
  Bi();
  sa();
  G9t();
  Mx();
  Jt();
  CTo();
  gP();
  MMe();
});
async function RAt() {
  let [e, t] = await Promise.all([$O(), _U("tengu_ccr_bundle_seed_enabled")]),
    n = Tu($t()) !== null && (ut(process.env.CCR_ENABLE_BUNDLE) || t);
  if (!n)
    return {
      cloneViable: false,
      bundleSeedEnabled: n,
    };
  return {
    cloneViable: e !== null && (!$m(e.host) || (await oVe(e.owner, e.name))),
    bundleSeedEnabled: n,
  };
}
