// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fys
// matched 2.1.88 source: src/utils/crypto.ts
// class=unchanged (alt of src/utils/crypto.ts)  jaccard=1  score=1  fileCov=1
// note: deminified; 5 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var fys = E(() => {
  lys();
  uxr();
  ((uys = R(require("crypto"))),
    (dys = {
      DIGIT: cys,
      ALPHA: mxr,
      ALPHA_DIGIT: mxr + mxr.toUpperCase() + cys,
    }),
    (pys = {
      isNode: true,
      classes: {
        URLSearchParams: ays,
        FormData: Ldn,
        Blob: (typeof Blob !== "undefined" && Blob) || null,
      },
      ALPHABET: dys,
      generateString: pbu,
      protocols: ["http", "https", "file", "data"],
    }));
});
var yxr = {};
_t(yxr, {
  origin: () => origin,
  navigator: () => navigator,
  hasStandardBrowserWebWorkerEnv: () => hasStandardBrowserWebWorkerEnv,
  hasStandardBrowserEnv: () => hasStandardBrowserEnv,
  hasBrowserEnv: () => hasBrowserEnv,
});
var hasBrowserEnv, navigator, hasStandardBrowserEnv, hasStandardBrowserWebWorkerEnv, origin;
