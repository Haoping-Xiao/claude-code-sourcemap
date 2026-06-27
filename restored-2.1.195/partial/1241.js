// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SBr
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock/dist-cjs/auth/httpAuthSchemeProvider.js
// class=partial  jaccard=0.1344  score=1  fileCov=0.1344
// note: low-confidence suggestion: node_modules/@aws-sdk/client-bedrock/dist-cjs/auth/httpAuthSchemeProvider.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var SBr = E(() => {
  Qzs = R(eT(), 1), gnt = R(yd(), 1), FDt = R(LB(), 1);
});
var nKs = e => Object.assign(e, {
    useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
    useFipsEndpoint: e.useFipsEndpoint ?? !1,
    defaultSigningName: "bedrock"
  }),
  WR;