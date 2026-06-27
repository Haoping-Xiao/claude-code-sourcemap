// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GF
// matched 2.1.88 source: src/constants/systemPromptSections.ts
// class=partial  jaccard=0.1594  score=1  fileCov=0.1594
// note: low-confidence suggestion: src/constants/systemPromptSections.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function Dk(e, t) {
  return {
    name: e,
    compute: t,
    cacheBreak: false
  };
}
async function mbl(e) {
  let t = $Ct();
  return Promise.all(e.map(async n => {
    if (!n.cacheBreak && t.has(n.name)) return t.get(n.name) ?? null;
    let r = await n.compute();
    return rSr(n.name, r), r;
  }));
}
function k$e() {
  OCt(), UCt();
}