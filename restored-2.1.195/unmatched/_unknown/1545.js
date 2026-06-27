// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module n4r
// matched 2.1.88 source: node_modules/@smithy/signature-v4/dist-cjs/index.js
// class=new  jaccard=0.02  score=1  fileCov=0.02
// note: nearest: node_modules/@smithy/signature-v4/dist-cjs/index.js (0.02); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var r4r = ({
  query: e = {}
}) => {
  let t = [],
    n = {};
  for (let r of Object.keys(e).sort()) {
    if (r.toLowerCase() === _ci) continue;
    t.push(r);
    let o = e[r];
    if (typeof o === "string") n[r] = `${axe(r)}=${axe(o)}`;else if (Array.isArray(o)) n[r] = o.slice(0).reduce((s, i) => s.concat([`${axe(r)}=${axe(i)}`]), []).sort().join("&");
  }
  return t.map(r => n[r]).filter(r => r).join("&");
};