// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sF
// matched 2.1.88 source: src/services/api/claude.ts
// class=new  jaccard=0.0018  score=1  fileCov=0.0018
// note: nearest: src/services/api/claude.ts (0.0018); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var sF = E(() => {
  kt();
});
function Nao(e, t) {
  let n = Object.create(null),
    r = 0;
  for (let o of e) {
    let s = t(o, r++);
    if (n[s] === void 0) n[s] = [];
    n[s].push(o);
  }
  return n;
}
function V0(e) {
  return e.agentId === ls();
}