// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YUr
// matched 2.1.88 source: node_modules/@aws-sdk/client-sts/dist-cjs/index.js
// class=new  jaccard=0.0286  score=1  fileCov=0.0286
// note: nearest: node_modules/@aws-sdk/client-sts/dist-cjs/index.js (0.0286); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var YUr = E(() => {
  kD();
  E9();
  UY();
  dZs = R(yo(), 1);
  AEn = class AEn extends tT.classBuilder().ep(Ux).m(function (e, t, n, r) {
    return [dZs.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "GetFederationToken", {}).n("STSClient", "GetFederationTokenCommand").sc(eZs).build() {};
});
var pZs, HEn;