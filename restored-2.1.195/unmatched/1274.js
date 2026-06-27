// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qBr
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/index.js
// class=new  jaccard=0.0083  score=1  fileCov=0.0083
// note: nearest: node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/index.js (0.0083); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var qBr = E(() => {
  HM();
  OY();
  rte();
  o7s = R(yo(), 1);
  kSn = class kSn extends Nw.classBuilder().ep(WR).m(function (e, t, n, r) {
    return [o7s.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
  }).s("AmazonBedrockFrontendService", "InvokeModelWithResponseStream", {
    eventStream: {
      output: !0
    }
  }).n("BedrockRuntimeClient", "InvokeModelWithResponseStreamCommand").sc(KYs).build() {};
});
var s7s, Ent;