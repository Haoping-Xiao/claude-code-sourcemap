// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module c8t
// matched 2.1.88 source: src/tasks/LocalShellTask/killShellTasks.ts
// class=modified  jaccard=0.3495  score=0.6293  fileCov=0.4401
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function killTask(taskId, setAppState) {
  let n,
    r = false;
  if (
    (setAppState.update(taskId, (o) => {
      if (o.status !== "running" || !vT(o)) return o;
      try {
        (T(`LocalShellTask ${taskId} kill requested`),
          o.shellCommand?.kill(),
          o.shellCommand?.cleanup());
      } catch (s) {
        ke(s);
      }
      if (o.cleanupTimeoutId) clearTimeout(o.cleanupTimeoutId);
      return (
        (r = o.notified),
        (n = {
          toolUseId: o.toolUseId,
          description: o.description,
        }),
        {
          ...o,
          status: "killed",
          notified: true,
          shellCommand: null,
          cleanupTimeoutId: void 0,
          endTime: Date.now(),
        }
      );
    }),
    n && !r)
  )
    xf(taskId, "stopped", {
      toolUseId: n.toolUseId,
      summary: n.description,
    });
  jy(taskId);
}
function vrl(e, t) {
  for (let n of Object.values(t.all())) {
    if (n.status !== "running") continue;
    if (n.type === "local_bash") {
      if (n.isBackgrounded && n.agentId === e) return true;
    } else if (n.type === "monitor_mcp" || n.type === "monitor_ws") {
      if (n.agentId === e) return true;
    }
  }
  return false;
}
function killShellTasksForAgent(agentId, getAppState) {
  for (let [n, r] of Object.entries(getAppState.all()))
    if (vT(r) && r.agentId === agentId && r.status === "running")
      (T(`killShellTasksForAgent: killing orphaned shell task ${n} (agent ${agentId} exiting)`),
        killTask(n, getAppState));
  ALe((n) => n.agentId === agentId);
}
