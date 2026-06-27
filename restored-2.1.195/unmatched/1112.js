// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iNr
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js
// class=new  jaccard=0.0028  score=1  fileCov=0.0028
// note: nearest: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js (0.0028); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var iNr = E(() => {
  Zs();
  Ei();
  Ti();
  CVs = R(yo(), 1);
  ebn = class ebn extends xr.classBuilder().ep(Pr).m(function (e, t, n, r) {
    return [CVs.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetFoundationModelAvailability", {}).n("BedrockClient", "GetFoundationModelAvailabilityCommand").sc(j5s).build() {};
});
var IVs, tbn;