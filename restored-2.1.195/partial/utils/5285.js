// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vic
// matched 2.1.88 source: src/components/tasks/BackgroundTask.tsx
// class=partial  jaccard=0.1702  score=0.4599  fileCov=0.2128
// note: low-confidence suggestion: src/components/tasks/BackgroundTask.tsx; dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module vic] deps: ft, $S, sp, _a, pQ
Dlr = require("crypto");
function BackgroundTask(e) {
  let t = [];
  for (let n of Object.values(e)) {
    if (!wH(n)) continue;
    let r = {
      id: n.id,
      type: DOo[n.type] ?? n.type,
      status: n.status,
      description: SUe(n.description, B5o)
    };
    switch (n.type) {
      case "local_bash":
        r.command = SUe(n.command, B5o);
        break;
      case "local_agent":
        r.agent_type = n.agentType;
        break;
      case "monitor_mcp":
        r.server = n.server, r.tool = n.tool;
        break;
      case "mcp_task":
        r.server = n.serverName, r.tool = n.toolName;
        break;
      case "local_workflow":
        r.name = n.workflowName;
        break;
      case "in_process_teammate":
      case "remote_agent":
      case "dream":
      case "monitor_ws":
        break;
    }
    t.push(r);
  }
  return t;
}
function Cic(e = Hw()) {
  return e.map(t => ({
    id: t.id,
    schedule: t.cron,
    recurring: t.recurring ?? false,
    prompt: SUe(t.prompt, B5o)
  }));
}
var B5o = 1000;