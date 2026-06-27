// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YJa
// matched 2.1.88 source: src/services/api/errorUtils.ts
// class=modified (alt of src/services/api/errorUtils.ts)  jaccard=0.1739  score=1  fileCov=0.1739
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var YJa = E(() => {
  zb();
  Ye();
  ps();
  Rx();
  vy();
  je();
  At();
  drt();
  BCn();
  Fy();
  EC();
  ((Q9n = R(lt(), 1)),
    (ght = R(rt(), 1)),
    (Of = R(se(), 1)),
    (AJp = new Set([
      "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
      "UNABLE_TO_GET_ISSUER_CERT",
      "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
      "DEPTH_ZERO_SELF_SIGNED_CERT",
      "SELF_SIGNED_CERT_IN_CHAIN",
      "CERT_UNTRUSTED",
    ])));
  TJp = ve(() =>
    dt.object({
      device_authorization_endpoint: dt.string().optional(),
      token_endpoint: dt.string().optional(),
    }),
  );
  vJp = ve(() =>
    dt.object({
      device_code: dt.string(),
      user_code: dt.string(),
      verification_uri: dt.string(),
      verification_uri_complete: dt.string().optional(),
      expires_in: dt.number(),
      interval: dt.number().optional(),
    }),
  );
});
var rMe;
