// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module U$s
// matched 2.1.88 source: node_modules/@smithy/is-array-buffer/dist-cjs/index.js
// class=partial  jaccard=0.209  score=1  fileCov=0.209
// note: low-confidence suggestion: node_modules/@smithy/is-array-buffer/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var U$s = Q(B$s => {
  var U5u = e => typeof ArrayBuffer === "function" && e instanceof ArrayBuffer || Object.prototype.toString.call(e) === "[object ArrayBuffer]";
  B$s.isArrayBuffer = U5u;
});