// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tP
// matched 2.1.88 source: src/services/api/errors.ts
// class=modified (alt of src/services/api/errors.ts)  jaccard=0.0093  score=0.1211  fileCov=0.01
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module tP] deps: utils/errors.ts, gtoken/build/src/index.js, constants/betas.ts, utils/http.ts, bridge/bridgeApi.ts, utils/config.ts, utils/messages.ts, utils/agentContext.ts, bridge/jwtUtils.ts, utils/status.tsx, utils/imageValidation.ts, services/analytics/index.ts, utils/imageResizer.ts, main.tsx, main.tsx, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/profilerBase.ts, utils/imageResizer.ts, utils/imageValidation.ts, utils/fsOperations.ts, utils/debug.ts, fb, services/api/errorUtils.ts, Ijt, services/api/errors.ts
((blp = [
  "could not process image",
  "image exceeds",
  "image dimensions exceed",
  "image does not match the provided media type",
  "image cannot be empty",
  "exceeds api limit",
  "images exceed the api limit",
  "unable to resize image",
  "unable to compress image",
  "image file is empty",
]),
  (Slp = [
    "could not process pdf",
    "pdf pages",
    "the pdf specified was not valid",
    "the pdf specified is password protected",
    "pdf cannot be empty",
    "too much media",
  ]));
function Llp(e, t, n, r) {
  var o = e.length,
    s = n + (r ? 1 : -1);
  while (r ? s-- : ++s < o) if (t(e[s], s, e)) return s;
  return -1;
}
var Yaa;
