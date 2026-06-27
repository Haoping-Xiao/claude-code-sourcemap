// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uEc
// matched 2.1.88 source: src/utils/swarm/reconnection.ts
// class=modified  jaccard=0.5615  score=0.8308  fileCov=0.6341
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function computeInitialTeamContext() {
  let e = ije();
  if (!e?.teamName || !e?.agentName) {
    T("[Reconnection] computeInitialTeamContext: No teammate context set (not a teammate)");
    return;
  }
  let { teamName: t, agentId: n, agentName: r } = e,
    o = J4(t);
  if (!o) {
    ke(
      Rh(
        Error(`[computeInitialTeamContext] Could not read team file for ${t}`),
        "[computeInitialTeamContext] Could not read team file",
      ),
    );
    return;
  }
  let s = goe(t),
    i = !n;
  return (
    T(
      `[Reconnection] Computed initial team context for ${i ? "leader" : `teammate ${r}`} in team ${t}`,
    ),
    {
      teamName: t,
      teamFilePath: s,
      leadAgentId: o.leadAgentId,
      selfAgentId: n,
      selfAgentName: r,
      isLeader: i,
      teammates: {},
    }
  );
}
function initializeTeammateContextFromSession(setAppState, teamName, agentName) {
  let r = J4(teamName);
  if (!r) {
    T(
      `[initializeTeammateContextFromSession] Could not read team file for ${teamName} (agent: ${agentName}) \u2014 team may have been disbanded`,
      {
        level: "error",
      },
    );
    return;
  }
  let o = r.members.find((a) => a.name === agentName);
  if (!o)
    T(`[Reconnection] Member ${agentName} not found in team ${teamName} - may have been removed`);
  let s = o?.agentId,
    i = goe(teamName);
  (setAppState((a) => ({
    ...a,
    teamContext: {
      teamName: teamName,
      teamFilePath: i,
      leadAgentId: r.leadAgentId,
      selfAgentId: s,
      selfAgentName: agentName,
      isLeader: false,
      teammates: {},
    },
  })),
    T(
      `[Reconnection] Initialized agent context from session for ${agentName} in team ${teamName}`,
    ));
}
