// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module g$e
// matched 2.1.88 source: src/tools/AgentTool/agentToolUtils.ts
// class=new  jaccard=0.0379  score=0.2986  fileCov=0.0416
// note: nearest: src/tools/AgentTool/agentToolUtils.ts (0.0379); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var g$e = E(() => {
  xb = {
    input_tokens: 0,
    cache_creation_input_tokens: 0,
    cache_read_input_tokens: 0,
    output_tokens: 0,
    server_tool_use: {
      web_search_requests: 0,
      web_fetch_requests: 0
    },
    service_tier: "standard",
    cache_creation: {
      ephemeral_1h_input_tokens: 0,
      ephemeral_5m_input_tokens: 0
    },
    inference_geo: "",
    iterations: [],
    speed: "standard"
  };
});
function Vdf(e) {
  return L6e.join(_ml(), `${e}.json`);
}
function _ml() {
  let e = M2() ?? Jh(yr());
  return L6e.join(e, Rt(), "workflows");
}
function Foe(e) {
  let t = M2() ?? Jh(yr());
  return L6e.join(t, Rt(), "subagents", "workflows", e);
}
async function bml(e, t) {
  try {
    let n = {
        runId: e,
        timestamp: new Date().toISOString(),
        ...t
      },
      r = Vdf(e);
    await h$e.mkdir(L6e.dirname(r), {
      recursive: !0,
      mode: 448
    }), await h$e.writeFile(r, De(n), {
      encoding: "utf8",
      mode: 384
    });
  } catch (n) {
    T(`Failed to write workflow snapshot ${e}: ${n instanceof Error ? n.message : n}`);
  }
}
async function Sml() {
  let e = _ml(),
    t;
  try {
    t = await h$e.readdir(e);
  } catch {
    return [];
  }
  let n = (await Promise.all(t.filter(r => r.endsWith(".json")).map(async r => {
    try {
      let o = await h$e.readFile(L6e.join(e, r), "utf8"),
        s = Ft(o),
        i = s.runId ?? r.replace(/\.json$/, "");
      return {
        runId: i,
        taskId: s.taskId ?? i,
        timestamp: s.timestamp ?? new Date(0).toISOString(),
        script: s.script ?? "",
        scriptPath: s.scriptPath,
        args: s.args,
        result: s.result,
        agentCount: s.agentCount ?? 0,
        logs: s.logs ?? [],
        durationMs: s.durationMs ?? 0,
        error: s.error,
        summary: s.summary,
        workflowName: s.workflowName,
        title: s.title,
        status: s.status ?? (s.error ? "failed" : "completed"),
        startTime: s.startTime ?? (Date.parse(s.timestamp ?? "") || 0),
        phases: s.phases,
        defaultModel: s.defaultModel,
        workflowProgress: s.workflowProgress ?? [],
        totalTokens: s.totalTokens ?? 0,
        totalToolCalls: s.totalToolCalls ?? 0
      };
    } catch (o) {
      return T(`Failed to parse workflow snapshot ${r}: ${o instanceof Error ? o.message : o}`), null;
    }
  }))).filter(r => r !== null);
  return n.sort((r, o) => o.startTime - r.startTime), n;
}
var h$e, L6e;