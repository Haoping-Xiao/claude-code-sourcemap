// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cNr
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js
// class=new  jaccard=0.0028  score=1  fileCov=0.0028
// note: nearest: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js (0.0028); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var cNr = E(() => {
  Zs();
  Ei();
  Ti();
  kVs = R(yo(), 1);
  rbn = class rbn extends xr.classBuilder().ep(Pr).m(function (e, t, n, r) {
    return [kVs.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetImportedModel", {}).n("BedrockClient", "GetImportedModelCommand").sc(W5s).build() {};
});
var RVs, obn;