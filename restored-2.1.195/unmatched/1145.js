// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ANr
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js
// class=new  jaccard=0.0027  score=1  fileCov=0.0027
// note: nearest: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js (0.0027); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ANr = E(() => {
  Zs();
  Ei();
  Ti();
  i9s = R(yo(), 1);
  Dbn = class Dbn extends xr.classBuilder().ep(Pr).m(function (e, t, n, r) {
    return [i9s.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListTagsForResource", {}).n("BedrockClient", "ListTagsForResourceCommand").sc(Sqs).build() {};
});
var a9s, Pbn;