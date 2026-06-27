// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hbn
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js
// class=new  jaccard=0.0028  score=1  fileCov=0.0028
// note: nearest: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js (0.0028); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Hbn = E(() => {
  Zs();
  Ei();
  Ti();
  XVs = R(yo(), 1);
  rnt = class rnt extends xr.classBuilder().ep(Pr).m(function (e, t, n, r) {
    return [XVs.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListGuardrails", {}).n("BedrockClient", "ListGuardrailsCommand").sc(uqs).build() {};
});
var JVs, ont;