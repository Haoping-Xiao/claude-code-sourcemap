// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bbn
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js
// class=new  jaccard=0.0028  score=1  fileCov=0.0028
// note: nearest: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js (0.0028); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bbn = E(() => {
  Zs();
  Ei();
  Ti();
  VVs = R(yo(), 1);
  tnt = class tnt extends xr.classBuilder().ep(Pr).m(function (e, t, n, r) {
    return [VVs.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListCustomModels", {}).n("BedrockClient", "ListCustomModelsCommand").sc(iqs).build() {};
});
var zVs, nnt;