// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ydr
// matched 2.1.88 source: src/utils/task/framework.ts
// class=new  jaccard=0.0489  score=0.7601  fileCov=0.0496
// note: nearest: src/utils/task/framework.ts (0.0489); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function Pen(e) {
  let t = [];
  for (let n of Object.values(e)) {
    if (n.type !== "local_workflow") continue;
    if (n.status === "running" || AC(n.status) && n.evictAfter !== void 0) t.push(n);
  }
  return t.sort((n, r) => n.startTime - r.startTime), t;
}