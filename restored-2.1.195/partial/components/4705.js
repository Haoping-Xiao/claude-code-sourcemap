// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qNo
// matched 2.1.88 source: src/services/mcp/types.ts
// class=partial  jaccard=0.2262  score=0.7517  fileCov=0.2445
// note: low-confidence suggestion: src/services/mcp/types.ts; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var qNo = E(() => {
  Ye();
  hse();
  xoe();
  jNl = R(lt(), 1), Mq = R(se(), 1);
});
function VL(e, t) {
  if (t <= 0) return;
  T(`${t} setup ${bn(t, "issue")}: ${e} (run /doctor for details)`, {
    level: "info"
  });
}
function K7t(e, t) {
  if (e.config.type === "claudeai-proxy") return t(e.name);
  return e.config.type !== "sse-ide" && e.config.type !== "ws-ide";
}
function GNl(e, t) {
  return On(e, n => n.type === "needs-auth" && K7t(n, t));
}
function WNl(e, t) {
  let n = [];
  for (let r of e) {
    if (r.type !== "failed" && r.type !== "needs-auth") continue;
    if (K7t(r, t)) n.push(r);
  }
  return n;
}