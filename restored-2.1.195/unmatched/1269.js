// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UBr
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/index.js
// class=new  jaccard=0.0083  score=1  fileCov=0.0083
// note: nearest: node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/index.js (0.0083); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var UBr = E(() => {
  HM();
  OY();
  rte();
  ZYs = R(yo(), 1);
  vSn = class vSn extends Nw.classBuilder().ep(WR).m(function (e, t, n, r) {
    return [ZYs.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
  }).s("AmazonBedrockFrontendService", "ConverseStream", {
    eventStream: {
      output: !0
    }
  }).n("BedrockRuntimeClient", "ConverseStreamCommand").sc(GYs).build() {};
});
var e7s, wSn;