// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LPs
// matched 2.1.88 source: node_modules/@smithy/is-array-buffer/dist-cjs/index.js
// class=partial  jaccard=0.209  score=1  fileCov=0.209
// note: low-confidence suggestion: node_modules/@smithy/is-array-buffer/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module LPs] (exports=RPs)
var RPs = {};
var I3u = e => typeof ArrayBuffer === "function" && e instanceof ArrayBuffer || Object.prototype.toString.call(e) === "[object ArrayBuffer]";
RPs.isArrayBuffer = I3u;