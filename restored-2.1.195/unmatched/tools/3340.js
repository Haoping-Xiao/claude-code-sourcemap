// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ymo
// matched 2.1.88 source: node_modules/convert-to-spaces/dist/index.js
// class=new  jaccard=0.0588  score=0.0671  fileCov=0.3215
// note: nearest: node_modules/convert-to-spaces/dist/index.js (0.0588); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function D2n(e) {
  return e.replace(/`[^`\n]+`/g, (t, n) => {
    let r = e[n - 1];
    return r === "!" || r === "`" ? t : "`" + Ff(" ", t.length - 2) + "`";
  });
}
function c6(e) {
  return e.replace(/`!/g, "` !").replace(/!`/g, "! `").replace(/(^|\s)!/gm, "$1\\!");
}