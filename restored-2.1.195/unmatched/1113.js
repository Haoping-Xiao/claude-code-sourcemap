// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aNr
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js
// class=new  jaccard=0.0028  score=1  fileCov=0.0028
// note: nearest: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js (0.0028); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var aNr = E(() => {
  Zs();
  Ei();
  Ti();
  IVs = R(yo(), 1);
  tbn = class tbn extends xr.classBuilder().ep(Pr).m(function (e, t, n, r) {
    return [IVs.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetFoundationModel", {}).n("BedrockClient", "GetFoundationModelCommand").sc(F5s).build() {};
});
var xVs, nbn;