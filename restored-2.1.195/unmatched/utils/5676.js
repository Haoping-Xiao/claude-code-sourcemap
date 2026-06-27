// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module b0c
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0106  score=0.1743  fileCov=0.0111
// note: nearest: src/cli/print.ts (0.0106); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var b0c = E(() => {
  ft();
  db();
  je();
  At();
  jS();
  Jt();
  ovt = require("path");
});
async function wtn(e) {
  try {
    await y0c(e);
  } catch (t) {
    T(`removeMcpTaskMetadata failed: ${String(t)}`);
  }
}
function rYo(e) {
  return e === "completed" || e === "failed" || e === "cancelled";
}
function mvm(e, t, n) {
  let r = oYo.get(e);
  if (!r) r = new Map(), oYo.set(e, r), e.setNotificationHandler(VUe, o => {
    oYo.get(e)?.get(o.params.taskId)?.(o.params.status, o.params.statusMessage);
  });
  return r.set(t, n), () => {
    r.delete(t);
  };
}
function E0c(e) {
  let n = `MCP task ${e.mcpTaskId.slice(0, 8)} (${e.serverName}/${e.toolName}) ${e.status}.`,
    r = e.status === "completed" ? e.resultText ?? "" : e.status === "failed" ? `Task failed: ${e.statusMessage ?? "no detail"}` : "Task was cancelled by the server.";
  return `<${Oc}>
<${Dp}>${e.registryId}</${Dp}>
<${up}>${e.status}</${up}>
<${Zu}>${ec(n)}</${Zu}>
<result>
${ec(r)}
</result>
</${Oc}>`;
}
function gvm(e) {
  return hvm(e).catch(t => ke(t));
}
async function hvm({
  client: e,
  taskRegistry: t,
  taskState: n,
  pollIntervalMs: r
}) {
  let {
      id: o,
      mcpTaskId: s,
      serverName: i,
      toolName: a
    } = n,
    l = n.mcpStatus,
    c = n.statusMessage;
  h0c(o, {
    taskId: o,
    serverName: i,
    toolName: a,
    mcpTaskId: s,
    pollIntervalMs: r,
    spawnedAt: n.startTime,
    toolUseId: n.toolUseId
  }).catch(g => T(`writeMcpTaskMetadata ${o}: ${String(g)}`));
  let u = (g, h) => {
      if (g === l && h === c) return;
      if (rYo(l) && !rYo(g)) return;
      l = g, c = h, t.update(o, y => ({
        ...y,
        mcpStatus: g,
        statusMessage: h
      }));
    },
    d = mvm(e, s, u),
    p = Math.min(Math.max(r ?? uvm, dvm), pvm),
    f = 0,
    m;
  try {
    while (!rYo(l)) {
      if (l === "input_required") try {
        await e.experimental.tasks.getTaskResult(s, z2);
      } catch (h) {
        T(`mcp task ${s} getTaskResult during input_required: ${h}`);
      }
      if (await Nn(p), t.get(o)?.status === "killed") {
        e.experimental.tasks.cancelTask(s).catch(h => T(`mcp task ${s} cancel after kill: ${h}`)), wtn(o);
        return;
      }
      try {
        let h = await e.experimental.tasks.getTask(s);
        f = 0, u(h.status, h.statusMessage);
      } catch (h) {
        if (f++, T(`mcp task ${s} poll failed: ${h}`), f >= fvm) {
          l = "failed", c = `Task polling failed repeatedly: ${String(h)}`, m = "poll_failed_repeatedly";
          break;
        }
      }
    }
    let g;
    if (l === "completed") try {
      let y = ((await e.experimental.tasks.getTaskResult(s, z2)).content ?? []).map(_ => _.type === "text" ? _.text : `[${_.type}]`).join(`
`),
        b = await h4t(y);
      g = typeof b === "string" ? b : y;
    } catch (h) {
      l = "failed", c = `Failed to fetch task result: ${String(h)}`, m = "result_fetch_failed";
    }
    if (t.get(o)?.status === "killed") {
      e.experimental.tasks.cancelTask(s).catch(h => T(`mcp task ${s} cancel after kill: ${h}`)), wtn(o);
      return;
    }
    if (l === "completed") xe("mcp_task_complete");else if (l === "cancelled") Le("mcp_task_complete", "cancelled_by_server");else Le("mcp_task_complete", m ?? "failed");
    t.update(o, h => ({
      ...h,
      status: l === "completed" ? "completed" : "failed",
      mcpStatus: l,
      statusMessage: c,
      endTime: Date.now(),
      notified: true
    })), wtn(o), Ad({
      value: E0c({
        registryId: o,
        mcpTaskId: s,
        serverName: i,
        toolName: a,
        status: l,
        resultText: g,
        statusMessage: c
      }),
      mode: "task-notification",
      agentId: ls(),
      priority: "next"
    });
  } finally {
    d();
  }
}
async function Ctn(e) {
  if (!vUn()) return;
  let t;
  try {
    t = await _0c();
  } catch (n) {
    Le("mcp_task_restore", "list_failed"), T(`restoreMcpTasks list failed: ${String(n)}`);
    return;
  }
  for (let n of t) yvm(n, e).catch(r => T(`restoreMcpTasks ${n.taskId}: ${String(r)}`));
  xe("mcp_task_restore");
}
async function yvm(e, {
  taskRegistry: t,
  getMcpClients: n
}) {
  let r = {
    ...LT(e.taskId, "mcp_task", `${e.serverName}/${e.toolName}`, e.toolUseId),
    type: "mcp_task",
    status: "running",
    serverName: e.serverName,
    toolName: e.toolName,
    mcpTaskId: e.mcpTaskId,
    mcpStatus: "working",
    statusMessage: "reconnecting\u2026",
    pollIntervalMs: e.pollIntervalMs,
    startTime: e.spawnedAt
  };
  t.register(r);
  let o = Date.now() + S0c,
    s,
    i;
  while (Date.now() < o) {
    if (t.get(e.taskId)?.status === "killed") {
      wtn(e.taskId);
      return;
    }
    let a = n().find(l => l.name === e.serverName);
    if (a?.type === "connected") {
      s = a.client;
      break;
    }
    if (a?.type === "failed" || a?.type === "disabled" || a?.type === "needs-auth") {
      i = `server '${e.serverName}' is ${a.type}`;
      break;
    }
    await Nn(500);
  }
  if (!s) {
    i ??= `server '${e.serverName}' did not connect within ${S0c / 1000}s`, t.update(e.taskId, a => ({
      ...a,
      status: "failed",
      mcpStatus: "failed",
      statusMessage: i,
      endTime: Date.now(),
      notified: true
    })), wtn(e.taskId), Ad({
      value: E0c({
        registryId: e.taskId,
        mcpTaskId: e.mcpTaskId,
        serverName: e.serverName,
        toolName: e.toolName,
        status: "failed",
        statusMessage: `Could not reconnect after resume: ${i}`
      }),
      mode: "task-notification",
      agentId: ls(),
      priority: "next"
    });
    return;
  }
  gvm({
    client: s,
    taskRegistry: t,
    taskState: r,
    pollIntervalMs: e.pollIntervalMs
  });
}
var uvm = 2000,
  dvm = 100,
  pvm = 60000,
  fvm = 10,
  S0c = 30000,
  oYo;