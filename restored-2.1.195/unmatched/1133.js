// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SNr
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js
// class=new  jaccard=0.0028  score=1  fileCov=0.0028
// note: nearest: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js (0.0028); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var SNr = E(() => {
  Zs();
  Ei();
  Ti();
  KVs = R(yo(), 1);
  Ebn = class Ebn extends xr.classBuilder().ep(Pr).m(function (e, t, n, r) {
    return [KVs.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListFoundationModelAgreementOffers", {}).n("BedrockClient", "ListFoundationModelAgreementOffersCommand").sc(lqs).build() {};
});
var YVs, Abn;