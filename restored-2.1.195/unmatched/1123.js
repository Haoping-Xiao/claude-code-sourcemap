// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yNr
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js
// class=new  jaccard=0.0028  score=1  fileCov=0.0028
// note: nearest: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js (0.0028); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var yNr = E(() => {
  Zs();
  Ei();
  Ti();
  NVs = R(yo(), 1);
  dbn = class dbn extends xr.classBuilder().ep(Pr).m(function (e, t, n, r) {
    return [NVs.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetPromptRouter", {}).n("BedrockClient", "GetPromptRouterCommand").sc(Q5s).build() {};
});
var BVs, pbn;