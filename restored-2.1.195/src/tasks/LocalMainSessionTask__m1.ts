// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CXn
// matched 2.1.88 source: src/tasks/LocalMainSessionTask.ts
// class=modified (alt of src/tasks/LocalMainSessionTask.ts)  jaccard=0.0657  score=0.3082  fileCov=0.0771
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module CXn] deps: services/analytics/index.ts, utils/telemetry/betaSessionTracing.ts, dn, tasks/LocalShellTask/killShellTasks.ts, U1, utils/ShellCommand.ts, tools/ScheduleCronTool/prompt.ts, google-auth-library/build/src/crypto/node/crypto.js, screens/REPL.tsx, utils/teammateContext.ts, utils/debug.ts, utils/sequential.ts, fast-xml-parser/lib/fxp.cjs, utils/stats.ts, utils/plans.ts, Task.ts
((xEl = require("crypto")),
  (hyf = {
    agentType: "main-session",
    whenToUse: "Main session query",
    source: "userSettings",
    getSystemPrompt: () => "",
  }));
async function REl(e, t, n) {
  if (typeof t === "string") {
    if (e === Q5)
      return {
        kind: "main",
      };
    let s =
      (Object.values(n.teamContext?.teammates ?? {}).some((i) => i.name === e)
        ? void 0
        : n.agentNameRegistry.get(e)) ?? jns(e);
    if (s) {
      let i = n.tasks[s];
      if (El(i) && !Fzt(i)) {
        if (i.status === "running")
          return {
            kind: "agent-live",
            agentId: s,
          };
        if (i.stoppedByUser)
          return {
            kind: "agent-stopped-by-user",
          };
        return {
          kind: "agent-stopped",
          agentId: s,
          status: i.status,
        };
      }
      return {
        kind: "agent-evicted",
        agentId: s,
      };
    }
  }
  if (typeof t === "string" || t.type !== "shutdown_response") {
    let r = rp(n.teamContext);
    if (r && e !== Hd) {
      let o = Object.values(n.teamContext?.teammates ?? {}).some((i) => i.name === e),
        s = o ? null : await hoe(r);
      if (!o && s && !s.members.some((i) => i.name === e)) {
        let i = s.members.map((l) => l.name),
          a = Npe(
            e,
            i.map((l) => ({
              name: l,
            })),
            {
              maxEditDistance: 2,
            },
          );
        return {
          kind: "team-unknown",
          teamName: r,
          names: i,
          suggestion: a,
        };
      }
    }
  }
  return {
    kind: "mailbox",
  };
}
