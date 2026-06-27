// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Sbn
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js
// class=new  jaccard=0.0028  score=1  fileCov=0.0028
// note: nearest: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js (0.0028); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Sbn = E(() => {
  Zs();
  Ei();
  Ti();
  zVs = R(yo(), 1);
  nnt = class nnt extends xr.classBuilder().ep(Pr).m(function (e, t, n, r) {
    return [zVs.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListEvaluationJobs", {}).n("BedrockClient", "ListEvaluationJobsCommand").sc(aqs).build() {};
});
var KVs, Ebn;