// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hbn
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js
// class=new  jaccard=0.0028  score=1  fileCov=0.0028
// note: nearest: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js (0.0028); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var hbn = E(() => {
  Zs();
  Ei();
  Ti();
  GVs = R(yo(), 1);
  Qtt = class Qtt extends xr.classBuilder().ep(Pr).m(function (e, t, n, r) {
    return [GVs.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListAutomatedReasoningPolicyTestCases", {}).n("BedrockClient", "ListAutomatedReasoningPolicyTestCasesCommand").sc(rqs).build() {};
});
var WVs, Ztt;