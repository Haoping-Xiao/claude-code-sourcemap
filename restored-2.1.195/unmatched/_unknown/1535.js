// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rci
// matched 2.1.88 source: node_modules/@smithy/util-middleware/dist-cjs/index.js
// class=new  jaccard=0.0589  score=1  fileCov=0.0589
// note: nearest: node_modules/@smithy/util-middleware/dist-cjs/index.js (0.0589); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Vjr = e => {
  if (typeof e === "function") return e;
  let t = Promise.resolve(e);
  return () => t;
};