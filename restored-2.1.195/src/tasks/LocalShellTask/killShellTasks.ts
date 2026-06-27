// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module c8t
// matched 2.1.88 source: src/tasks/LocalShellTask/killShellTasks.ts
// class=modified  jaccard=0.3495  score=0.6293  fileCov=0.4401
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function yAe(e, t) {
  let n,
    r = false;
  if (
    (t.update(e, (o) => {
      if (o.status !== "running" || !vT(o)) return o;
      try {
        (T(`LocalShellTask ${e} kill requested`),
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
    xf(e, "stopped", {
      toolUseId: n.toolUseId,
      summary: n.description,
    });
  jy(e);
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
function wrl(e, t) {
  for (let [n, r] of Object.entries(t.all()))
    if (vT(r) && r.agentId === e && r.status === "running")
      (T(`killShellTasksForAgent: killing orphaned shell task ${n} (agent ${e} exiting)`),
        yAe(n, t));
  ALe((n) => n.agentId === e);
}
