// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KLr
// matched 2.1.88 source: node_modules/@smithy/querystring-builder/dist-cjs/index.js
// class=partial  jaccard=0.1858  score=1  fileCov=0.1858
// note: low-confidence suggestion: node_modules/@smithy/querystring-builder/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module KLr] (exports=jCs)
var jCs = {};
var zLr = FCs();
function TNu(e) {
  let t = [];
  for (let n of Object.keys(e).sort()) {
    let r = e[n];
    if (n = zLr.escapeUri(n), Array.isArray(r)) for (let o = 0, s = r.length; o < s; o++) t.push(`${n}=${zLr.escapeUri(r[o])}`);else {
      let o = n;
      if (r || typeof r === "string") o += `=${zLr.escapeUri(r)}`;
      t.push(o);
    }
  }
  return t.join("&");
}
jCs.buildQueryString = TNu;