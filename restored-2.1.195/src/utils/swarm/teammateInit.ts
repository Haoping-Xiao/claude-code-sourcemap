// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Lzo
// matched 2.1.88 source: src/utils/swarm/teammateInit.ts
// class=modified  jaccard=0.5926  score=0.9737  fileCov=0.6023
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function initializeTeammateHooks(e, t, n) {
  let { teamName: r, agentId: o, agentName: s } = n,
    i = J4(r);
  if (!i) {
    T(`[TeammateInit] Team file not found for team: ${r}`);
    return;
  }
  let a = i.leadAgentId;
  if (i.teamAllowedPaths && i.teamAllowedPaths.length > 0) {
    T(`[TeammateInit] Found ${i.teamAllowedPaths.length} team-wide allowed path(s)`);
    for (let u of i.teamAllowedPaths) {
      let d = u.path.startsWith("/") ? `/${u.path}/**` : `${u.path}/**`;
      (T(
        `[TeammateInit] Applying team permission: ${u.toolName} allowed in ${u.path} (rule: ${d})`,
      ),
        e((p) => ({
          ...p,
          toolPermissionContext: My(p.toolPermissionContext, {
            type: "addRules",
            rules: [
              {
                toolName: u.toolName,
                ruleContent: d,
              },
            ],
            behavior: "allow",
            destination: "session",
          }),
        })));
    }
  }
  let c = i.members.find((u) => u.agentId === a)?.name || "team-lead";
  if (o === a) {
    T("[TeammateInit] This agent is the team leader - skipping idle notification hook");
    return;
  }
  (T(`[TeammateInit] Registering Stop hook for teammate ${s} to notify leader ${c}`),
    Wll(
      e,
      t,
      "Stop",
      "",
      async (u, d) => {
        g9t(r, s, false);
        let p = E9t(s, {
          idleReason: "available",
          summary: R9t(u),
        });
        return (
          await fg(c, {
            from: s,
            text: De(p),
            timestamp: new Date().toISOString(),
            color: Sv(),
          }),
          T(`[TeammateInit] Sent idle notification to leader ${c}`),
          true
        );
      },
      "Failed to send idle notification to team leader",
      {
        timeout: 10000 /* 1e4 */,
      },
    ));
}
