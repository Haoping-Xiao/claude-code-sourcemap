// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Wml
// matched 2.1.88 source: src/tools/AgentTool/AgentTool.tsx
// class=new  jaccard=0.0403  score=0.1865  fileCov=0.0489
// note: nearest: src/tools/AgentTool/AgentTool.tsx (0.0403); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Wml = E(() => {
  je();
  Jt();
  WAe();
  k6e();
  jml();
});
function Yko(e) {
  let {
      taskId: t,
      workflowRunId: n,
      script: r,
      scriptPath: o,
      args: s,
      meta: i,
      vmScript: a,
      toolUseContext: l,
      canUseTool: c,
      toolUseId: u,
      transcriptDir: d,
      telemetry: p,
      isResume: f
    } = e,
    m = i.description,
    g = i.name;
  if (f) {
    xe("task_local_workflow_resume");
    for (let [S, A] of Object.entries(l.taskRegistry.all())) if (A.type === "local_workflow" && A.workflowRunId === n && A.status !== "running") l.taskRegistry.remove(S);
  }
  let h = Pko({
      taskId: t,
      script: r,
      scriptPath: o,
      summary: m,
      workflowName: g,
      title: i.title,
      phases: i.phases,
      defaultModel: l.options.mainLoopModel,
      workflowRunId: n,
      args: s,
      taskRegistry: l.taskRegistry,
      toolUseId: u,
      startTime: e.startTime
    }),
    y = {
      ...l,
      abortController: h.abortController ?? l.abortController
    },
    b = Gb() - rCt(),
    _ = {
      total: oCt(),
      getTurnSpent: () => Gb() - b
    };
  return (async () => {
    let S = [],
      A = 16,
      v,
      C = () => {
        if (v = void 0, S.length === 0) return;
        let M = S;
        if (S = [], $ko(t, M, l.taskRegistry), !Ir()) return;
        let N = M.filter(q => q.type !== "workflow_log");
        if (N.length === 0) return;
        let B = y.getAppState()?.tasks?.[t];
        if (B?.type !== "local_workflow" || B.status !== "running") return;
        let $ = N.findLast(q => q.type === "workflow_agent");
        vyt({
          taskId: t,
          toolUseId: u,
          description: $ ? $.phaseTitle ? `${$.phaseTitle}: ${$.label}` : $.label : h.description,
          startTime: h.startTime,
          totalTokens: B.totalTokens,
          toolUses: B.totalToolCalls,
          lastToolName: $?.label,
          summary: m,
          workflowProgress: N
        });
      },
      I = await Gml(a, y, c, {
        workflowRunId: n,
        onProgress: M => {
          if (M.type !== "progress") return;
          if (S.push(M.data), !v) v = setTimeout(C, A);
        },
        onAgentController: (M, N) => {
          if (N) h.agentControllers?.set(M, N);else h.agentControllers?.delete(M);
        },
        args: s,
        seedPhaseTitles: i.phases?.map(M => M.title),
        tokenBudget: _,
        journal: new Fko(n)
      });
    if (h_(h.abortController?.signal.reason) === "background") {
      if (v) clearTimeout(v);
      return;
    }
    if (v) clearTimeout(v);
    C();
    let k = y.getAppState()?.tasks?.[t],
      D = (k?.workflowProgress ?? []).filter(M => M.type !== "workflow_log"),
      P = k?.totalTokens ?? 0,
      O = k?.totalToolCalls ?? 0,
      L = h.abortController?.signal.aborted ? "killed" : I.error ? "failed" : "completed";
    if (G("tengu_workflow_completed", {
      workflow_run_id: n,
      workflow_source: $e(p.source),
      workflow_name: p.name,
      workflow_description: p.description,
      status: $e(L),
      agent_count: I.agentCount,
      total_tokens: P,
      total_tool_calls: O,
      duration_ms: I.durationMs
    }), p.source === "built-in") {
      let M = new Map();
      for (let N of k?.workflowProgress ?? []) {
        if (N.type !== "workflow_agent") continue;
        if (N.phaseIndex === void 0 || !N.phaseTitle) continue;
        let B = M.get(N.phaseIndex);
        if (!B) B = {
          title: N.phaseTitle,
          tokens: 0,
          toolCalls: 0,
          durationMs: 0,
          agentCount: 0,
          errorCount: 0,
          skipCount: 0
        }, M.set(N.phaseIndex, B);
        if (B.tokens += N.tokens ?? 0, B.toolCalls += N.toolCalls ?? 0, B.durationMs += N.durationMs ?? 0, B.agentCount += 1, N.state === "error") if (N.error === "skipped by user") B.skipCount += 1;else B.errorCount += 1;
      }
      for (let [N, B] of M) G("tengu_workflow_phase_completed", {
        workflow_run_id: n,
        workflow_source: $e(p.source),
        workflow_name: p.name,
        phase_index: N,
        phase_title: B.title,
        phase_tokens: B.tokens,
        phase_tool_calls: B.toolCalls,
        phase_agent_duration_ms: B.durationMs,
        phase_agent_count: B.agentCount,
        phase_error_count: B.errorCount,
        phase_skip_count: B.skipCount
      });
    }
    if (bml(n, {
      taskId: t,
      script: r,
      scriptPath: o,
      args: s,
      result: I.result,
      agentCount: I.agentCount,
      logs: I.logs,
      durationMs: I.durationMs,
      error: I.error,
      summary: m,
      workflowName: g,
      title: i.title,
      status: L,
      startTime: h.startTime,
      phases: h.phases,
      defaultModel: h.defaultModel,
      workflowProgress: D,
      totalTokens: P,
      totalToolCalls: O
    }), h.abortController?.signal.aborted) return;
    if (I.error) JYn(t, I.error, I.agentCount, I.logs, l.taskRegistry);else Oko(t, I.result, I.agentCount, I.logs, l.taskRegistry);
    QYn({
      taskId: t,
      summary: m,
      status: I.error ? "failed" : "completed",
      error: I.error,
      result: I.result,
      failures: I.failures,
      agentCount: I.agentCount,
      totalTokens: P,
      totalToolCalls: O,
      durationMs: I.durationMs,
      taskRegistry: l.taskRegistry,
      toolUseId: u,
      transcriptDir: d
    });
  })().catch(S => {
    ke(S);
    let A = S instanceof Error ? S.message : String(S),
      v = y.getAppState()?.tasks?.[t],
      C = v?.agentCount ?? 0;
    JYn(t, A, C, v?.logs ?? [], l.taskRegistry), QYn({
      taskId: t,
      summary: m,
      status: "failed",
      error: A,
      agentCount: C,
      totalTokens: v?.totalTokens ?? 0,
      totalToolCalls: v?.totalToolCalls ?? 0,
      durationMs: Date.now() - h.startTime,
      taskRegistry: l.taskRegistry,
      toolUseId: u,
      transcriptDir: d
    });
  }), h;
}
async function Vml(e) {
  let {
      taskId: t,
      workflowRunId: n,
      scriptPath: r,
      argsJson: o,
      startTime: s
    } = e,
    i = await U3e(r);
  if ("error" in i) throw new mi(i.error, "adopted workflow script read failed");
  let a = i.script;
  if (e.scriptSha256 === void 0) throw new mi("workflow was checkpointed without a content pin; resume via the Workflow tool", "adopted workflow missing scriptSha256");
  if (qml.createHash("sha256").update(a).digest("hex") !== e.scriptSha256) throw new mi("script content changed since it was approved; resume via the Workflow tool to re-approve", "adopted workflow scriptSha256 mismatch");
  let l = ZI(a);
  if ("error" in l) throw new mi(`Invalid workflow script: ${l.error}`, "adopted workflow script parse failed");
  let c = K_t(l.scriptBody);
  if (!c.ok) throw new mi(`Workflow script compile failed: ${c.error}`, "adopted workflow script compile failed");
  let u = o !== void 0 ? Ft(o) : void 0;
  for (let d of Object.values(e.toolUseContext.taskRegistry.all())) if (d.type === "local_workflow" && d.workflowRunId === n && d.status === "running") {
    e.toolUseContext.taskRegistry.remove(t);
    return;
  }
  Yko({
    taskId: t,
    workflowRunId: n,
    script: a,
    scriptPath: r,
    args: u,
    meta: l.meta,
    vmScript: c.vmScript,
    toolUseContext: e.toolUseContext,
    canUseTool: e.canUseTool,
    toolUseId: void 0,
    transcriptDir: Foe(n),
    telemetry: {
      source: "adopt",
      name: "custom",
      description: ""
    },
    isResume: true,
    startTime: s
  });
}
var qml;