// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Kmc
// matched 2.1.88 source: src/components/tasks/BackgroundTasksDialog.tsx
// class=partial  jaccard=0.0601  score=0.3089  fileCov=0.0695
// note: low-confidence suggestion: src/components/tasks/BackgroundTasksDialog.tsx; dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Kmc = E(() => {
  Ye();
  Mp();
  R6();
  EC();
  Vmc();
  zmc = R(lt(), 1), ZN = R(se(), 1);
});
function NTe(e) {
  return Vm(xc(e).replace(/\s+/g, " ").trim(), Bcm);
}
function Ymc(e) {
  let t = [];
  for (let n of Object.values(e)) {
    let r = Ucm.has(n.status);
    switch (n.type) {
      case "local_agent":
      case "in_process_teammate":
        t.push({
          id: n.id,
          kind: "agent",
          label: NTe(n.description),
          startedAt: n.startTime,
          doneAt: n.endTime,
          failed: r || void 0
        });
        break;
      case "local_workflow":
        {
          let o = n.workflowProgress.filter(Fcm);
          if (o.length === 0) {
            t.push({
              id: n.id,
              kind: "workflow",
              label: NTe(n.title ?? n.workflowName ?? n.description),
              startedAt: n.startTime,
              doneAt: n.endTime,
              failed: r || void 0
            });
            break;
          }
          for (let s of o) t.push({
            id: s.agentId ?? `${n.id}:${s.index}`,
            kind: "workflow",
            label: NTe(s.label),
            group: s.phaseTitle,
            startedAt: s.startedAt ?? s.queuedAt ?? n.startTime,
            doneAt: s.state === "done" || s.state === "error" ? s.lastProgressAt ?? (s.startedAt !== void 0 && s.durationMs !== void 0 ? s.startedAt + s.durationMs : void 0) : void 0,
            failed: s.state === "error" || void 0
          });
          break;
        }
      case "local_bash":
        t.push({
          id: n.id,
          kind: n.kind === "monitor" ? "monitor" : "shell",
          label: NTe(n.kind === "monitor" ? n.description : n.command),
          startedAt: n.startTime,
          doneAt: n.endTime,
          failed: r || n.result !== void 0 && n.result.code !== 0 || void 0
        });
        break;
      case "monitor_mcp":
        t.push({
          id: n.id,
          kind: "monitor",
          label: NTe(n.description || `${n.server} \xB7 ${n.tool}`),
          startedAt: n.startTime,
          doneAt: n.endTime,
          failed: r || void 0
        });
        break;
      case "monitor_ws":
        t.push({
          id: n.id,
          kind: "monitor",
          label: NTe(n.description || n.url),
          startedAt: n.startTime,
          doneAt: n.endTime,
          failed: r || void 0
        });
        break;
      case "mcp_task":
        t.push({
          id: n.id,
          kind: "mcp",
          label: NTe(n.statusMessage ?? `${n.serverName} \xB7 ${n.toolName}`),
          startedAt: n.startTime,
          doneAt: n.endTime,
          failed: r || n.mcpStatus === "failed" || void 0
        });
        break;
      case "remote_agent":
      case "dream":
        break;
    }
  }
  return t;
}
function Fcm(e) {
  return e.type === "workflow_agent";
}
function Xmc(e) {
  if (!e || e.length === 0) return [];
  return e.map(t => ({
    id: `todo:${eCe(t.content).toString(36)}`,
    kind: "todo",
    label: NTe(t.status === "in_progress" ? t.activeForm : t.content),
    startedAt: t.status === "pending" ? void 0 : 0,
    doneAt: t.status === "completed" ? 0 : void 0
  }));
}
function Jmc(e) {
  if (!e || e.length === 0) return [];
  return e.map(t => ({
    id: `todo:${t.id}`,
    kind: "todo",
    label: NTe(t.status === "in_progress" ? t.activeForm ?? t.subject : t.subject),
    startedAt: t.status === "pending" ? void 0 : 0,
    doneAt: t.status === "completed" ? 0 : void 0
  }));
}
var Bcm = 200,
  Ucm;