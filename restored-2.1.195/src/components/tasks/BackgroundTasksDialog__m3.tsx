// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module k6e
// matched 2.1.88 source: src/components/tasks/BackgroundTasksDialog.tsx
// class=modified (alt of src/components/tasks/BackgroundTasksDialog.tsx)  jaccard=0.0296  score=0.0649  fileCov=0.0517
// note: deminified; 13 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var k6e = E(() => {
  Jt();
  WAe();
  zYn = R(require("vm"));
  Ndf = `(() => {
      const NOW_ERR = ${De($df)};
      const RANDOM_ERR = ${De(Odf)};
      Math.random = function random() { throw new Error(RANDOM_ERR) };
      const RealDate = Date;
      RealDate.now = function now() { throw new Error(NOW_ERR) };
      function ShimDate(...a) {
        if (!new.target) throw new Error(NOW_ERR); // bare Date() \u2192 now-string
        if (a.length === 0) throw new Error(NOW_ERR);
        return Reflect.construct(RealDate, a, new.target);
      }
      ShimDate.now = RealDate.now;
      ShimDate.parse = RealDate.parse;
      ShimDate.UTC = RealDate.UTC;
      ShimDate.prototype = RealDate.prototype;
      // Close the (new Date(x)).constructor backdoor to RealDate.now \u2014 point
      // .constructor at the shim, then freeze RealDate so it can't be undone.
      RealDate.prototype.constructor = ShimDate;
      Object.freeze(RealDate);
      globalThis.Date = ShimDate;
    })()`;
});
function uml(e) {
  let { parse: t } = qYn(),
    n = Dko(),
    r = false;
  try {
    let o = t(e, {
      ecmaVersion: "latest",
      sourceType: "module",
      allowAwaitOutsideFunction: true,
      allowReturnOutsideFunction: true,
    });
    n.simple(o, {
      MemberExpression(s) {
        if (s.computed || s.object.type !== "Identifier" || s.property.type !== "Identifier")
          return;
        let i = s.object.name,
          a = s.property.name;
        if ((i === "Date" && a === "now") || (i === "Math" && a === "random")) r = true;
      },
      NewExpression(s) {
        if (s.callee.type === "Identifier" && s.callee.name === "Date" && s.arguments.length === 0)
          r = true;
      },
    });
  } catch {
    return false;
  }
  return r;
}
var Bko = {};
_t(Bko, {
  updateWorkflowProgressBatch: () => updateWorkflowProgressBatch,
  skipWorkflowAgent: () => skipWorkflowAgent,
  retryWorkflowAgent: () => retryWorkflowAgent,
  registerWorkflowTask: () => registerWorkflowTask,
  registerAdoptedWorkflowTask: () => registerAdoptedWorkflowTask,
  pauseWorkflowTask: () => pauseWorkflowTask,
  killWorkflowTask: () => killWorkflowTask,
  isLocalWorkflowTask: () => isLocalWorkflowTask,
  failWorkflowTask: () => failWorkflowTask,
  enqueueWorkflowNotification: () => enqueueWorkflowNotification,
  completeWorkflowTask: () => completeWorkflowTask,
  buildResumePrompt: () => buildResumePrompt,
  LocalWorkflowTask: () => LocalWorkflowTask,
});
function registerWorkflowTask({
  taskId: e,
  script: t,
  scriptPath: n,
  args: r,
  summary: o,
  workflowName: s,
  title: i,
  phases: a,
  defaultModel: l,
  workflowRunId: c,
  taskRegistry: u,
  toolUseId: d,
  startTime: p,
}) {
  Iht(e);
  let f = Sl(0),
    m = {
      ...LT(e, "local_workflow", o ?? "Dynamic workflow", d),
      ...(p !== void 0 && {
        startTime: p,
      }),
      type: "local_workflow",
      status: "running",
      script: t,
      scriptPath: n,
      args: r,
      prompt: t,
      summary: o,
      workflowName: s,
      title: i,
      phases: a,
      defaultModel: l,
      workflowRunId: c,
      workflowProgress: [],
      progressVersion: 0,
      agentCount: 0,
      totalTokens: 0,
      totalToolCalls: 0,
      logs: [],
      abortController: f,
      agentControllers: new Map(),
    };
  return (u.register(m), m);
}
function isLocalWorkflowTask(e) {
  return e?.type === "local_workflow";
}
function registerAdoptedWorkflowTask(e, t) {
  let n = LT(e.taskId, "local_workflow", e.description, void 0),
    r = {
      ...n,
      startTime: e.startTime ?? n.startTime,
      type: "local_workflow",
      status: "paused",
      script: "",
      scriptPath: e.scriptPath,
      prompt: "",
      workflowRunId: e.workflowRunId,
      workflowProgress: [],
      progressVersion: 0,
      agentCount: 0,
      totalTokens: 0,
      totalToolCalls: 0,
      logs: [],
      notified: true,
    };
  t.register(r);
}
function updateWorkflowProgressBatch(e, t, n) {
  if (t.length === 0) return;
  n.update(e, (r) => {
    if (r.status !== "running") return r;
    let o = [...r.workflowProgress],
      s = new Map();
    for (let u = 0; u < o.length; u++) {
      let d = o[u];
      if (d.type === "workflow_agent" || d.type === "workflow_phase")
        s.set(`${d.type}:${d.index}`, u);
    }
    let i = r.agentCount,
      a = false;
    for (let u of t)
      if (u.type === "workflow_agent" || u.type === "workflow_phase") {
        let d = `${u.type}:${u.index}`,
          p = s.get(d);
        if (p !== void 0) o[p] = u;
        else (s.set(d, o.length), o.push(u));
        if (u.type === "workflow_agent" && u.state === "start") i = Math.max(i, u.index);
      } else (o.push(u), (a = true));
    if (a && o.length > dml * 2) {
      let u = o.length - dml,
        d = [];
      for (let p = 0; p < o.length; p++) {
        let f = o[p];
        if (u > 0 && f.type === "workflow_log") {
          u--;
          continue;
        }
        d.push(f);
      }
      o = d;
    }
    let l = 0,
      c = 0;
    for (let u of o)
      if (u.type === "workflow_agent") {
        if (u.tokens) l += u.tokens;
        if (u.toolCalls) c += u.toolCalls;
      }
    return {
      ...r,
      workflowProgress: o,
      progressVersion: r.progressVersion + t.length,
      agentCount: i,
      totalTokens: l,
      totalToolCalls: c,
    };
  });
}
function XYn(e, t, n, r) {
  let o = null;
  return (
    t.update(e, (s) => {
      if (s.status !== "running") return s;
      ((o = s), s.abortController?.abort());
      let i = Date.now();
      return {
        ...s,
        ...r,
        status: n,
        endTime: i,
        ...(AC(n) && {
          evictAfter: i + nfe,
        }),
        abortController: void 0,
        agentControllers: void 0,
      };
    }),
    o
  );
}
function completeWorkflowTask(e, t, n, r, o) {
  let s = XYn(e, o, "completed", {
    result: t,
    agentCount: n,
    logs: r,
  });
  if (s)
    (pml
      .writeFile(
        s.outputFile,
        De(
          {
            summary: s.summary,
            agentCount: n,
            logs: r,
            result: t,
            workflowProgress: s.workflowProgress.filter((i) => i.type !== "workflow_log"),
            totalTokens: s.totalTokens,
            totalToolCalls: s.totalToolCalls,
          },
          null,
          2,
        ),
      )
      .catch((i) =>
        T(`Failed to write workflow output for ${e}: ${i instanceof Error ? i.message : i}`),
      ),
      xe("task_local_workflow"));
}
function failWorkflowTask(e, t, n, r, o) {
  let s = XYn(e, o, "failed", {
    error: t,
    agentCount: n,
    logs: r,
  });
  if ((jy(e), s)) Le("task_local_workflow", "task_local_workflow_failed");
}
function pauseWorkflowTask(e, t) {
  return (
    XYn(e, t, "paused", {
      notified: true,
    }) !== null
  );
}
function buildResumePrompt(e) {
  let t = e.args !== void 0 ? `, args: ${De(e.args)}` : "";
  return `Resume the paused workflow by calling: Workflow({scriptPath: '${e.scriptPath}', resumeFromRunId: '${e.workflowRunId}'${t}}) \u2014 completed agents return cached results.`;
}
function killWorkflowTask(e, t) {
  let n = XYn(e, t, "killed", {
    notified: true,
  });
  if (n)
    (jy(e),
      xf(e, "stopped", {
        toolUseId: n.toolUseId,
        summary: n.description,
      }));
  return n !== null;
}
function fml(e, t, n, r) {
  let o = false;
  if (
    (r.update(e, (s) => {
      if (s.status !== "running") return s;
      let i = s.agentControllers?.get(t);
      if (i && !i.signal.aborted) (i.abort(new DOMException(n, "AbortError")), (o = true));
      return s;
    }),
    o)
  )
    xe(n === "user-skip" ? "task_local_workflow_skip_agent" : "task_local_workflow_retry_agent");
  return o;
}
function skipWorkflowAgent(e, t, n) {
  return fml(e, t, "user-skip", n);
}
function retryWorkflowAgent(e, t, n) {
  return fml(e, t, "user-retry", n);
}
function enqueueWorkflowNotification({
  taskId: e,
  summary: t,
  status: n,
  result: r,
  failures: o,
  error: s,
  agentCount: i,
  totalTokens: a,
  totalToolCalls: l,
  durationMs: c,
  taskRegistry: u,
  toolUseId: d,
  transcriptDir: p,
  scriptPath: f,
  workflowRunId: m,
  args: g,
}) {
  let h = false;
  if (
    (u.update(e, (k) => {
      if (k.notified) return k;
      return (
        (h = true),
        {
          ...k,
          notified: true,
        }
      );
    }),
    !h)
  )
    return;
  u.abortSpeculation();
  let y = t ?? "Dynamic workflow",
    b =
      n === "completed"
        ? `Dynamic workflow "${y}" completed`
        : n === "failed"
          ? `Dynamic workflow "${y}" failed: ${s || "Unknown error"}`
          : `Dynamic workflow "${y}" was stopped`,
    _ = "";
  if (n === "failed" || n === "killed") {
    let k = [];
    if (f && m) {
      let D = g !== void 0 ? `, args: ${De(g)}` : "";
      k.push(
        `To resume after editing the script, call: Workflow({scriptPath: '${f}', resumeFromRunId: '${m}'${D}})`,
      );
    }
    if (p) k.push(`Agent transcripts: ${p}`);
    if (k.length > 0)
      _ = `
<recovery>${k.join(`
`)}</recovery>`;
  }
  let S = jm(e),
    A = d
      ? `
<${YC}>${d}</${YC}>`
      : "",
    v = "";
  if (n === "completed" && r !== void 0) {
    let k = ec(De(r)),
      D = 8000;
    if (k.length > 8000)
      v = `
<result>${k.slice(0, 8000)}
... (truncated ${k.length - 8000} chars, full result in ${S})</result>`;
    else
      v = `
<result>${k}</result>`;
  }
  let C = o?.length
      ? `
<failures>${ec(
          o.join(`
`),
        )}</failures>`
      : "",
    x = `
<usage><agent_count>${i}</agent_count><subagent_tokens>${a}</subagent_tokens><tool_uses>${l}</tool_uses><duration_ms>${c}</duration_ms></usage>`,
    I = `<${Oc}>
<${Dp}>${e}</${Dp}>${A}
<${pM}>${S}</${pM}>
<${up}>${n}</${up}>
<${Zu}>${ec(b)}</${Zu}>${_}${v}${C}${x}
</${Oc}>`;
  Ad({
    value: I,
    mode: "task-notification",
    agentId: ls(),
    priority: "next",
    taskId: e,
  });
}
var pml,
  dml = 500,
  LocalWorkflowTask;
