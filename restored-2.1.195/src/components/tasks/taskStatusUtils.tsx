// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rjo
// matched 2.1.88 source: src/components/tasks/taskStatusUtils.tsx
// class=modified  jaccard=0.461  score=0.771  fileCov=0.5341
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module rjo] deps: Ye, ii, Rd
l8l = R(se(), 1);
function KHe(e) {
  return e === "completed" || e === "failed" || e === "killed";
}
function c8l(e, t) {
  let { isIdle: n, awaitingApproval: r, hasError: o, shutdownRequested: s } = t ?? {};
  if (o) return nt.cross;
  if (r) return nt.questionMarkPrefix;
  if (s) return nt.warning;
  if (e === "running") {
    if (n) return nt.ellipsis;
    return nt.play;
  }
  if (e === "completed") return nt.tick;
  if (e === "failed" || e === "killed") return nt.cross;
  if (e === "paused") return nt.hamburger;
  return nt.bullet;
}
function u8l(e, t) {
  let { isIdle: n, awaitingApproval: r, hasError: o, shutdownRequested: s } = t ?? {};
  if (o) return "error";
  if (r) return "warning";
  if (s) return "warning";
  if (n) return "background";
  if (e === "completed") return "success";
  if (e === "failed") return "error";
  if (e === "killed") return "warning";
  if (e === "paused") return "warning";
  return "background";
}
function DAt(e) {
  if (e.shutdownRequested) return "stopping";
  if (e.awaitingPlanApproval) return "awaiting approval";
  if (e.isIdle) return "idle";
  return (
    (e.progress?.recentActivities && j9n(e.progress.recentActivities)) ??
    e.progress?.lastActivity?.activityDescription ??
    "working"
  );
}
function PAt(e) {
  return (
    wH(e) && e.type !== "local_workflow" && !(Ozn() && (MF(e) || e.type === "in_process_teammate"))
  );
}
