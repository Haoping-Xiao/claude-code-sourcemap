// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hP
// matched 2.1.88 source: src/utils/swarm/spawnInProcess.ts
// class=modified  jaccard=0.3097  score=0.5187  fileCov=0.4345
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module hP] deps: services/analytics/index.ts, dn, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, constants/files.ts, utils/git.ts, utils/sequential.ts, utils/fsOperations.ts, utils/concurrentSessions.ts, utils/swarm/teamHelpers.ts, utils/swarm/backends/detection.ts
((Pht = require("fs")), (Rpe = require("fs/promises")), (Dht = require("path")));
lZp = {
  realpath: false,
  retries: {
    retries: 10,
    minTimeout: 5,
    maxTimeout: 100,
  },
  onCompromised: () => {},
};
function hZp(e, t) {
  if (t) return "plan";
  if (e === "plan" || e === "dontAsk") return "default";
  return e;
}
async function spawnInProcessTeammate(config, context) {
  let { name: n, teamName: r, prompt: o, color: s, planModeRequired: i, model: a } = config,
    { taskRegistry: l } = context,
    c = pte(n, r),
    u = iN("in_process_teammate"),
    d = config.resumableAgentId ?? rM(n);
  T(`[spawnInProcessTeammate] Spawning ${c} (taskId: ${u})`);
  try {
    let p = Sl(),
      f = Rt(),
      m = {
        agentId: c,
        agentName: n,
        teamName: r,
        color: s,
        planModeRequired: i,
        parentSessionId: f,
        resumableAgentId: d,
      },
      g = LAn({
        agentId: c,
        agentName: n,
        teamName: r,
        color: s,
        planModeRequired: i,
        parentSessionId: f,
        abortController: p,
      });
    if (zSe()) bFn(c, n, f);
    let h = config.description ?? `${o.substring(0, 50)}${o.length > 50 ? "..." : ""}`,
      y = {
        ...LT(u, "in_process_teammate", h, context.toolUseId),
        type: "in_process_teammate",
        status: "running",
        identity: m,
        prompt: config.description ?? o,
        model: a,
        abortController: p,
        awaitingPlanApproval: false,
        permissionMode: config.permissionMode ?? hZp(Fr(context).mode, i),
        isIdle: false,
        shutdownRequested: false,
        lastReportedToolCount: 0,
        lastReportedTokenCount: 0,
        pendingUserMessages: [],
      };
    l.register(y);
    let b = context.getAppState(),
      _ = b.agentNameRegistry.get(n);
    if (_ !== d) {
      let S = _ !== void 0 ? b.tasks[_] : void 0,
        v =
          _ !== void 0 &&
          (S?.status === "running" ||
            El(S) ||
            Object.values(b.tasks).some(
              (C) => uE(C) && C.status === "running" && C.identity.resumableAgentId === _,
            ))
            ? context.agentLifecycle.allocateName(n)
            : n;
      if (v !== n)
        T(
          `[spawnInProcessTeammate] name "${n}" already routes to live ${_}; registry entry uses "${v}" instead`,
        );
      context.agentLifecycle.registerName(v, d);
    }
    return (
      T(`[spawnInProcessTeammate] Registered ${c} in AppState`),
      xe("swarm_in_process_spawn"),
      {
        ok: true,
        agentId: c,
        identity: m,
        taskId: u,
        abortController: p,
        teammateContext: g,
      }
    );
  } catch (p) {
    let f = p instanceof Error ? p.message : "Unknown error during spawn";
    return (
      T(`[spawnInProcessTeammate] Failed to spawn ${c}: ${f}`),
      Le("swarm_in_process_spawn", "spawn_failed"),
      {
        ok: false,
        agentId: c,
        error: f,
      }
    );
  }
}
function killInProcessTeammate(taskId, setAppState, n) {
  let r = false,
    o = null,
    s = null,
    i,
    a;
  if (
    (setAppState.update(taskId, (l) => {
      if (l.status !== "running") return l;
      return (
        (o = l.identity.teamName),
        (s = l.identity.agentId),
        (i = l.toolUseId),
        (a = l.description),
        l.abortController?.abort(),
        (r = true),
        l.onIdleCallbacks?.forEach((c) => c()),
        {
          ...l,
          status: "killed",
          notified: true,
          endTime: Date.now(),
          onIdleCallbacks: [],
          pendingUserMessages: [],
          abortController: void 0,
          currentWorkAbortController: void 0,
          evictAfter: void 0,
        }
      );
    }),
    r && s)
  )
    n((l) => {
      if (!l.teamContext?.teammates?.[s]) return l;
      let { [s]: c, ...u } = l.teamContext.teammates;
      return {
        ...l,
        teamContext: {
          ...l.teamContext,
          teammates: u,
        },
      };
    });
  if (o && s) m9t(o, s);
  if (r)
    (jy(taskId),
      xf(taskId, "stopped", {
        toolUseId: i,
        summary: a,
      }),
      setTimeout((l, c) => l.evictTerminal(c), Oht, setAppState, taskId));
  if (s) _qe(s);
  return (xe("swarm_in_process_kill"), r);
}
