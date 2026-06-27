// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xht
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
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