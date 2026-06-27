// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IJo
// matched 2.1.88 source: node_modules/pngjs/lib/sync-reader.js
// class=partial  jaccard=0.0869  score=0.4064  fileCov=0.0995
// note: low-confidence suggestion: node_modules/pngjs/lib/sync-reader.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module IJo] (exports=azH, module=qjc)
var azH = {};
var qjc = {
  exports: azH
};
var XDm = /(\w+)=("[^"]*")/g;
qjc.exports = e => {
  let t = {};
  try {
    while (XDm.exec(e) !== null) if (RegExp.$1 && RegExp.$2) t[RegExp.$1] = RegExp.$2.slice(1, -1);
  } catch (n) {}
  return t;
};