// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module F1r
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js
// class=new  jaccard=0.0028  score=1  fileCov=0.0028
// note: nearest: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js (0.0028); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var F1r = E(() => {
  Zs();
  Ei();
  Ti();
  lVs = R(yo(), 1);
  M_n = class M_n extends xr.classBuilder().ep(Pr).m(function (e, t, n, r) {
    return [lVs.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteGuardrail", {}).n("BedrockClient", "DeleteGuardrailCommand").sc(A5s).build() {};
});
var cVs, $_n;