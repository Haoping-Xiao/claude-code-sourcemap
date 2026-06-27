// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iKn
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0054  score=1  fileCov=0.0054
// note: nearest: src/cli/print.ts (0.0054); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var iKn = E(() => {
  Xa();
  Un();
});
function $8t({
  tasks: e,
  queuedCommands: t = []
}) {
  let n = new Set(),
    r = new Set(),
    o = s => {
      if (MF(s) && s.isBackgrounded) n.add(s.id);else if (s.type === "local_workflow") r.add(s.id);
    };
  for (let s of Object.values(e)) if (s.status === "running" || AC(s.status) && !s.notified) o(s);
  for (let s of t) {
    if (s.mode !== "task-notification" || !V0(s) || s.taskId === void 0) continue;
    let i = e[s.taskId];
    if (i) o(i);
  }
  return {
    pendingAgents: n.size,
    pendingWorkflows: r.size
  };
}
function Kal({
  tasks: e,
  queuedCommands: t = [],
  turnDurationMs: n,
  turnStartTime: r,
  now: o,
  backgroundWaitStartTime: s
}) {
  let {
    pendingAgents: i,
    pendingWorkflows: a
  } = $8t({
    tasks: e,
    queuedCommands: t
  });
  if (i > 0 || a > 0) return {
    durationMs: n,
    pendingBackgroundAgentCount: i > 0 ? i : void 0,
    pendingWorkflowCount: a > 0 ? a : void 0,
    backgroundWaitStartTime: s ?? r
  };
  return {
    durationMs: s !== null ? o - s : n,
    pendingBackgroundAgentCount: void 0,
    pendingWorkflowCount: void 0,
    backgroundWaitStartTime: null
  };
}