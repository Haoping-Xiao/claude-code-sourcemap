// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fys
// matched 2.1.88 source: node_modules/axios/lib/platform/node/index.js
// class=vendor  jaccard=0.2082  score=0.2944  fileCov=0.4156
// note: identified by fingerprint: axios; 5 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: origin, navigator, hasStandardBrowserWebWorkerEnv, hasStandardBrowserEnv, hasBrowserEnv
// [unwrapped __esm module fys] deps: axios/lib/platform/node/index.js, axios/lib/helpers/toFormData.js
uys = R(require("crypto")), dys = {
  DIGIT: cys,
  ALPHA: mxr,
  ALPHA_DIGIT: mxr + mxr.toUpperCase() + cys
}, pys = {
  isNode: true,
  classes: {
    URLSearchParams: ays,
    FormData: Ldn,
    Blob: typeof Blob !== "undefined" && Blob || null
  },
  ALPHABET: dys,
  generateString: pbu,
  protocols: ["http", "https", "file", "data"]
};
var hasBrowserEnv, navigator, hasStandardBrowserEnv, hasStandardBrowserWebWorkerEnv, origin;