// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uNr
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js
// class=new  jaccard=0.0028  score=1  fileCov=0.0028
// note: nearest: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js (0.0028); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var uNr = E(() => {
  Zs();
  Ei();
  Ti();
  RVs = R(yo(), 1);
  obn = class obn extends xr.classBuilder().ep(Pr).m(function (e, t, n, r) {
    return [RVs.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetInferenceProfile", {}).n("BedrockClient", "GetInferenceProfileCommand").sc(q5s).build() {};
});
var LVs, sbn;