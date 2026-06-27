// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YJa
// matched 2.1.88 source: src/services/api/errorUtils.ts
// class=modified (alt of src/services/api/errorUtils.ts)  jaccard=0.1063  score=0.3974  fileCov=0.1268
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module YJa] deps: zod/v4/classic/schemas.js, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, utils/env.ts, @mixmark-io/domino/lib/htmlelts.js, utils/debug.ts, utils/errors.ts, utils/sleep.ts, bridge/bridgeMain.ts, components/design-system/Dialog.tsx, @anthropic-ai/bedrock-sdk/client.mjs
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
var rMe;
