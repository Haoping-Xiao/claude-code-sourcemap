// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FCs
// matched 2.1.88 source: node_modules/@smithy/util-uri-escape/dist-cjs/index.js
// class=partial  jaccard=0.1474  score=0.6955  fileCov=0.1575
// note: low-confidence suggestion: node_modules/@smithy/util-uri-escape/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module FCs] (exports=VLr)
var VLr = {};
var UCs = e => encodeURIComponent(e).replace(/[!'()*]/g, ANu),
  ANu = e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`,
  HNu = e => e.split("/").map(UCs).join("/");
VLr.escapeUri = UCs;
VLr.escapeUriPath = HNu;