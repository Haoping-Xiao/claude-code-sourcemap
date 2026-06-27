// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Val
// matched 2.1.88 source: src/tasks/pillLabel.ts
// class=modified  jaccard=0.5028  score=0.5918  fileCov=0.7697
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Val]
qal = ["Baked", "Brewed", "Churned", "Cogitated", "Cooked", "Crunched", "Saut\xE9ed", "Worked"];
function l_t(e) {
  let t = e[0];
  if (!t) return null;
  let n = e.length;
  if (e.every((r) => r.type === t.type))
    switch (t.type) {
      case "local_bash": {
        let r = On(e, (i) => i.type === "local_bash" && i.kind === "monitor"),
          o = n - r,
          s = [];
        if (o > 0) s.push(o === 1 ? "1 shell" : `${o} shells`);
        if (r > 0) s.push(r === 1 ? "1 monitor" : `${r} monitors`);
        return s.join(", ");
      }
      case "in_process_teammate": {
        let r = new Set(e.map((o) => (o.type === "in_process_teammate" ? o.identity.teamName : "")))
          .size;
        return r === 1 ? "1 team" : `${r} teams`;
      }
      case "local_agent":
        return n === 1 ? "1 local agent" : `${n} local agents`;
      case "remote_agent": {
        if (n === 1 && t.isUltraplan)
          switch (t.ultraplanPhase) {
            case "plan_ready":
              return `${BO} ultraplan ready`;
            case "needs_input":
              return `${mv} ultraplan needs your input`;
            default:
              return `${mv} ultraplan`;
          }
        if (e.every((r) => r.type === "remote_agent" && r.remoteTaskType === "remote-workflow"))
          return n === 1
            ? `${mv} 1 remote dynamic workflow`
            : `${mv} ${n} remote dynamic workflows`;
        return n === 1 ? `${mv} 1 cloud session` : `${mv} ${n} cloud sessions`;
      }
      case "local_workflow":
        return n === 1 ? "1 background dynamic workflow" : `${n} background dynamic workflows`;
      case "monitor_mcp":
      case "monitor_ws":
        return n === 1 ? "1 monitor" : `${n} monitors`;
      case "mcp_task": {
        let o = at("tengu_copper_thistle", false) ? "job" : "task";
        return n === 1 ? `1 MCP ${o}` : `${n} MCP ${o}s`;
      }
      case "dream":
        return "dreaming";
    }
  return `${n} background ${n === 1 ? "task" : "tasks"}`;
}
function zal(e) {
  if (e.length !== 1) return false;
  let t = e[0];
  return t.type === "remote_agent" && t.isUltraplan === true && t.ultraplanPhase !== void 0;
}
