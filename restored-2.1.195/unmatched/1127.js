// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gbn
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js
// class=new  jaccard=0.0028  score=1  fileCov=0.0028
// note: nearest: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js (0.0028); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var gbn = E(() => {
  Zs();
  Ei();
  Ti();
  jVs = R(yo(), 1);
  Jtt = class Jtt extends xr.classBuilder().ep(Pr).m(function (e, t, n, r) {
    return [jVs.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListAutomatedReasoningPolicyBuildWorkflows", {}).n("BedrockClient", "ListAutomatedReasoningPolicyBuildWorkflowsCommand").sc(nqs).build() {};
});
var GVs, Qtt;