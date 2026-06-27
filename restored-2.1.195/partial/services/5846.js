// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sXo
// matched 2.1.88 source: src/cli/transports/transportUtils.ts
// class=partial  jaccard=0.2215  score=1  fileCov=0.2215
// note: low-confidence suggestion: src/cli/transports/transportUtils.ts; dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var sXo = E(() => {
  Un();
});
function sUc(e, t = {}, n, r) {
  let o = new oUc.URL(e.href);
  if (o.protocol === "wss:") o.protocol = "https:";else if (o.protocol === "ws:") o.protocol = "http:";
  return o.pathname = o.pathname.replace(/\/$/, "") + "/worker/events/stream", new fen(o, t, n, r);
}
var oUc;