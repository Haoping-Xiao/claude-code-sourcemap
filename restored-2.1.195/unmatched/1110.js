// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oNr
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js
// class=new  jaccard=0.0028  score=1  fileCov=0.0028
// note: nearest: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js (0.0028); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var oNr = E(() => {
  Zs();
  Ei();
  Ti();
  vVs = R(yo(), 1);
  Q_n = class Q_n extends xr.classBuilder().ep(Pr).m(function (e, t, n, r) {
    return [vVs.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetCustomModelDeployment", {}).n("BedrockClient", "GetCustomModelDeploymentCommand").sc(B5s).build() {};
});
var wVs, Z_n;