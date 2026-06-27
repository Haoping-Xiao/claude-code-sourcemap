// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SBr
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/index.js
// class=new  jaccard=0.0045  score=1  fileCov=0.0045
// note: nearest: node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/index.js (0.0045); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var SBr = E(() => {
  Qzs = R(eT(), 1), gnt = R(yd(), 1), FDt = R(LB(), 1);
});
var nKs = e => Object.assign(e, {
    useDualstackEndpoint: e.useDualstackEndpoint ?? false,
    useFipsEndpoint: e.useFipsEndpoint ?? false,
    defaultSigningName: "bedrock"
  }),
  WR;