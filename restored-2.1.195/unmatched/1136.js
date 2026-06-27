// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Tbn
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js
// class=new  jaccard=0.0028  score=1  fileCov=0.0028
// note: nearest: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js (0.0028); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Tbn = E(() => {
  Zs();
  Ei();
  Ti();
  JVs = R(yo(), 1);
  ont = class ont extends xr.classBuilder().ep(Pr).m(function (e, t, n, r) {
    return [JVs.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListImportedModels", {}).n("BedrockClient", "ListImportedModelsCommand").sc(dqs).build() {};
});
var QVs, snt;