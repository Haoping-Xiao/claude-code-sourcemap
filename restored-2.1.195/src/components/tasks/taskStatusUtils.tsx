// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rjo
// matched 2.1.88 source: src/components/tasks/taskStatusUtils.tsx
// class=modified  jaccard=0.461  score=0.771  fileCov=0.5341
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module rjo] deps: Ye, ii, Rd
l8l = R(se(), 1);
function isTerminalStatus(status) {
  return status === "completed" || status === "failed" || status === "killed";
}
function getTaskStatusIcon(status, options) {
  let { isIdle: n, awaitingApproval: r, hasError: o, shutdownRequested: s } = options ?? {};
  if (o) return nt.cross;
  if (r) return nt.questionMarkPrefix;
  if (s) return nt.warning;
  if (status === "running") {
    if (n) return nt.ellipsis;
    return nt.play;
  }
  if (status === "completed") return nt.tick;
  if (status === "failed" || status === "killed") return nt.cross;
  if (status === "paused") return nt.hamburger;
  return nt.bullet;
}
function getTaskStatusColor(status, options) {
  let { isIdle: n, awaitingApproval: r, hasError: o, shutdownRequested: s } = options ?? {};
  if (o) return "error";
  if (r) return "warning";
  if (s) return "warning";
  if (n) return "background";
  if (status === "completed") return "success";
  if (status === "failed") return "error";
  if (status === "killed") return "warning";
  if (status === "paused") return "warning";
  return "background";
}
function describeTeammateActivity(e) {
  if (e.shutdownRequested) return "stopping";
  if (e.awaitingPlanApproval) return "awaiting approval";
  if (e.isIdle) return "idle";
  return (
    (e.progress?.recentActivities && j9n(e.progress.recentActivities)) ??
    e.progress?.lastActivity?.activityDescription ??
    "working"
  );
}
function shouldHideTasksFooter(tasks) {
  return (
    wH(tasks) &&
    tasks.type !== "local_workflow" &&
    !(Ozn() && (MF(tasks) || tasks.type === "in_process_teammate"))
  );
}
