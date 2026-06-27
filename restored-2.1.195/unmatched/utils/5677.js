// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sYo
// matched 2.1.88 source: src/utils/messages.ts
// class=new  jaccard=0.0104  score=0.1662  fileCov=0.011
// note: nearest: src/utils/messages.ts (0.0104); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var sYo = E(() => {
  Vb();
  ft();
  np();
  yC();
  je();
  vn();
  b0c();
  y4t();
  bm();
  OI();
  dn();
  wUn();
  oYo = new WeakMap();
});
function svt(e, t) {
  try {
    let n = Evm(e);
    wvm(n), Hvm(n, t), Tvm(n, t), vvm(n, t);
  } catch (n) {
    ke(n);
  }
}
function Evm(e) {
  let t = [],
    n = new Map(),
    r = new Set(),
    o = new Map(),
    s = new Map(),
    i = new Map(),
    a = new Set(),
    l = new Set();
  for (let c of e) if (c.type === "assistant") {
    let u = c.message.content;
    if (!Array.isArray(u)) continue;
    let d = Date.parse(c.timestamp);
    for (let p of u) {
      if (p.type !== "tool_use") continue;
      let f = iYo(p.input) ? p.input : {};
      if (p.name === DI) t.push({
        toolUseId: p.id,
        input: f,
        createdAt: d
      });else if (p.name === m4) {
        if (typeof f.id === "string") r.add(f.id);
      }
    }
  } else if (c.type === "user") {
    A0c(Avm(c.message.content), a);
    let u = c.message.content;
    if (!Array.isArray(u)) continue;
    let d = c.toolUseResult;
    if (!iYo(d)) continue;
    for (let p of u) if (p.type === "tool_result" && !p.is_error) {
      n.set(p.tool_use_id, d);
      let f = typeof d.backgroundTaskId === "string" && typeof d.stdout === "string" ? d.backgroundTaskId : typeof d.taskId === "string" && typeof d.timeoutMs === "number" ? d.taskId : void 0;
      if (f !== void 0) s.set(f, {
        taskId: f,
        toolUseId: p.tool_use_id
      });
      if (typeof d.task_id === "string" && typeof d.task_type === "string") l.add(d.task_id);
      if (d.status === "async_launched" && d.taskType === "local_workflow" && typeof d.taskId === "string" && typeof d.error !== "string") i.set(d.taskId, {
        taskId: d.taskId,
        toolUseId: p.tool_use_id,
        workflowName: typeof d.workflowName === "string" ? d.workflowName : void 0,
        runId: typeof d.runId === "string" ? d.runId : void 0
      });
    }
    if (d.status === "async_launched" && typeof d.agentId === "string" && typeof d.description === "string") o.set(d.agentId, {
      agentId: d.agentId,
      description: d.description,
      outputFile: typeof d.outputFile === "string" ? d.outputFile : void 0
    });
  } else if (c.type === "attachment" && c.attachment.type === "queued_command" && typeof c.attachment.prompt === "string") A0c(c.attachment.prompt, a);
  return {
    calls: t,
    results: n,
    deletedCronIds: r,
    asyncAgents: o,
    bgShells: s,
    workflows: i,
    notifiedTaskIds: a,
    stoppedTaskIds: l
  };
}
function A0c(e, t) {
  if (!e.includes(bvm) || !e.includes(Svm)) return;
  for (let n of e.matchAll(_vm)) if (n[1]) t.add(n[1]);
}
function Avm(e) {
  if (typeof e === "string") return e;
  return e.map(t => iYo(t) && typeof t.text === "string" ? t.text : "").join(`
`);
}
function Hvm({
  asyncAgents: e,
  notifiedTaskIds: t
}, n) {
  let r = 0;
  for (let o of e.values()) {
    if (t.has(o.agentId) || n.get(o.agentId)) continue;
    r++;
    let s = o.outputFile ? `
<${pM}>${ec(o.outputFile)}</${pM}>` : "";
    Ad({
      value: `<${Oc}>
<${Dp}>${ec(o.agentId)}</${Dp}>${s}
<${up}>failed</${up}>
<${Zu}>Background agent "${ec(o.description)}" was running when the previous Claude Code process exited and did not complete. Its in-process state was lost. Check its worktree/output for partial work before assuming the task landed.</${Zu}>
</${Oc}>`,
      agentId: ls(),
      mode: "task-notification",
      priority: "next"
    });
  }
  if (r > 0) It("task_local_agent", "orphaned_on_resume"), T(`resume: ${r} background agent(s) orphaned by previous process exit`);
}
function Tvm({
  bgShells: e,
  notifiedTaskIds: t,
  stoppedTaskIds: n
}, r) {
  let o = 0;
  for (let s of e.values()) {
    if (t.has(s.taskId) || n.has(s.taskId) || r.get(s.taskId)) continue;
    o++;
    let i = "No completion record was found for this background shell command from the previous session. It may have been stopped (via the UI, Monitor timeout, or agent teardown \u2014 these leave no transcript marker), or it may have been running when the previous Claude Code process exited. Check the output file for partial results before assuming it completed.";
    Ad({
      value: `<${Oc}>
<${Dp}>${ec(s.taskId)}</${Dp}>
<${YC}>${ec(s.toolUseId)}</${YC}>
<${up}>stopped</${up}>
<${Zu}>${i}</${Zu}>
</${Oc}>`,
      agentId: ls(),
      mode: "task-notification",
      priority: "next"
    }), xf(s.taskId, "stopped", {
      toolUseId: s.toolUseId,
      summary: i
    });
  }
  if (o > 0) It("task_local_shell", "orphaned_on_resume"), T(`resume: ${o} background shell command(s) orphaned by previous process exit`);
}
function vvm({
  workflows: e,
  notifiedTaskIds: t,
  stoppedTaskIds: n
}, r) {
  let o = 0;
  for (let s of e.values()) {
    if (t.has(s.taskId) || n.has(s.taskId) || r.get(s.taskId)) continue;
    o++;
    let i = s.workflowName ? ` "${s.workflowName}"` : "",
      a = s.runId ? ` To pick up where it left off, relaunch with Workflow({scriptPath, resumeFromRunId: "${s.runId}"}) \u2014 completed agent() calls return cached.` : "",
      l = `No completion record was found for background workflow${i} from the previous session. It may have been stopped (via the UI or TaskStop \u2014 these leave no transcript marker), or it may have been running when the previous Claude Code process exited.${a}`;
    Ad({
      value: `<${Oc}>
<${Dp}>${ec(s.taskId)}</${Dp}>
<${YC}>${ec(s.toolUseId)}</${YC}>
<${up}>stopped</${up}>
<${Zu}>${ec(l)}</${Zu}>
</${Oc}>`,
      agentId: ls(),
      mode: "task-notification",
      priority: "next"
    }), xf(s.taskId, "stopped", {
      toolUseId: s.toolUseId,
      summary: l
    });
  }
  if (o > 0) It("task_local_workflow", "orphaned_on_resume"), T(`resume: ${o} background workflow(s) orphaned by previous process exit`);
}
function wvm({
  calls: e,
  results: t,
  deletedCronIds: n
}) {
  if (!a$()) return;
  let r = Date.now(),
    o = MRe(),
    s = new Set(Hw().map(a => a.id)),
    i = 0;
  for (let a of e) {
    let l = t.get(a.toolUseId);
    if (!l || typeof l.id !== "string") continue;
    if (l.durable === !0) continue;
    if (n.has(l.id) || s.has(l.id)) continue;
    let c = a.input.cron,
      u = a.input.prompt;
    if (typeof c !== "string" || typeof u !== "string") continue;
    let d = l.recurring !== !1;
    if (d) {
      if (o.recurringMaxAgeMs !== 0 && r - a.createdAt >= o.recurringMaxAgeMs) continue;
    } else {
      let p = NOn(c, a.createdAt, l.id, o);
      if (p === null || p < r) continue;
    }
    Rge({
      id: l.id,
      cron: c,
      prompt: u,
      createdAt: a.createdAt,
      recurring: d
    }), i++;
  }
  if (i > 0) lee(!0), T(`resume: resurrected ${i} session cron task(s)`);
}
function iYo(e) {
  return typeof e === "object" && e !== null;
}
var _vm, bvm, Svm;