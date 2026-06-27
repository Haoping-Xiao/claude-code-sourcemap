// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uEc
// matched 2.1.88 source: src/utils/swarm/reconnection.ts
// class=modified  jaccard=0.6125  score=0.8195  fileCov=0.708
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var uEc = E(() => {
  uo();
  ydr();
  rme();
  gq();
  S_();
});
function dEc() {
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
function pEc(e, t, n) {
  let r = J4(t);
  if (!r) {
    T(
      `[initializeTeammateContextFromSession] Could not read team file for ${t} (agent: ${n}) \u2014 team may have been disbanded`,
      {
        level: "error",
      },
    );
    return;
  }
  let o = r.members.find((a) => a.name === n);
  if (!o) T(`[Reconnection] Member ${n} not found in team ${t} - may have been removed`);
  let s = o?.agentId,
    i = goe(t);
  (e((a) => ({
    ...a,
    teamContext: {
      teamName: t,
      teamFilePath: i,
      leadAgentId: r.leadAgentId,
      selfAgentId: s,
      selfAgentName: n,
      isLeader: false,
      teammates: {},
    },
  })),
    T(`[Reconnection] Initialized agent context from session for ${n} in team ${t}`));
}
