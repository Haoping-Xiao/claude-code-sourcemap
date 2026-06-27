// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xht
// matched 2.1.88 source: src/utils/collapseReadSearch.ts
// class=new  jaccard=0.0076  score=1  fileCov=0.0076
// note: nearest: src/utils/collapseReadSearch.ts (0.0076); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xht = E(() => {
  np();
  OI();
});
function C8n(e) {
  return e.mcpInfo?.role === "comms";
}
function kht(e) {
  if (Gv()) return e.filter(t => !C8n(t));
  return e;
}