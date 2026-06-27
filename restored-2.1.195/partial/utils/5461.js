// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ydr
// matched 2.1.88 source: src/Task.ts
// class=partial  jaccard=0.1094  score=1  fileCov=0.1094
// note: low-confidence suggestion: src/Task.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ydr = E(() => {
  S_();
  tfe();
  q6e();
  dMe();
  xF();
  rme();
});
function Pen(e) {
  let t = [];
  for (let n of Object.values(e)) {
    if (n.type !== "local_workflow") continue;
    if (n.status === "running" || AC(n.status) && n.evictAfter !== void 0) t.push(n);
  }
  return t.sort((n, r) => n.startTime - r.startTime), t;
}