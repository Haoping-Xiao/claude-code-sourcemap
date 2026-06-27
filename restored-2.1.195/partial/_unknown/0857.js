// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BLs
// matched 2.1.88 source: node_modules/@smithy/util-uri-escape/dist-cjs/index.js
// class=partial  jaccard=0.1474  score=0.6955  fileCov=0.1575
// note: low-confidence suggestion: node_modules/@smithy/util-uri-escape/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module BLs] (exports=hPr)
var hPr = {};
var NLs = e => encodeURIComponent(e).replace(/[!'()*]/g, Eju),
  Eju = e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`,
  Aju = e => e.split("/").map(NLs).join("/");
hPr.escapeUri = NLs;
hPr.escapeUriPath = Aju;