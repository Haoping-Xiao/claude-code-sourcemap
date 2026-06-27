// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WBr
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/index.js
// class=new  jaccard=0.0104  score=1  fileCov=0.0104
// note: nearest: node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/index.js (0.0104); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var WBr = E(() => {
  GNr();
  uBr();
  HM();
  OY();
  rte();
  r7s = R(yo(), 1);
  xSn = class xSn extends Nw.classBuilder().ep(WR).m(function (e, t, n, r) {
    return [r7s.getEndpointPlugin(n, e.getEndpointParameterInstructions()), y8s(n), t6s(n, {
      headerPrefix: "x-amz-bedrock-"
    })];
  }).s("AmazonBedrockFrontendService", "InvokeModelWithBidirectionalStream", {
    eventStream: {
      input: !0,
      output: !0
    }
  }).n("BedrockRuntimeClient", "InvokeModelWithBidirectionalStreamCommand").sc(zYs).build() {};
});
var o7s, kSn;