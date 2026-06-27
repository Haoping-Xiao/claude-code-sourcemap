// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LEl
// matched 2.1.88 source: src/tools/shared/spawnMultiAgent.ts
// class=new  jaccard=0.0251  score=0.1309  fileCov=0.0301
// note: nearest: src/tools/shared/spawnMultiAgent.ts (0.0251); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var LEl = E(() => {
  S_();
  CXn();
  $S();
  xht();
  hN();
  hP();
  Mp();
});
async function DEl(e) {
  let t = await Moe(e);
  return t?.taskKind === "in_process_teammate" ? t : null;
}
async function PEl({
  resumableAgentId: e,
  prompt: t,
  senderName: n,
  meta: r,
  fallbackName: o,
  toolUseContext: s
}) {
  let i = r.name ?? o,
    a = r.teamName ?? rp(s.getAppState().teamContext);
  if (!i || !a) throw Le("swarm_in_process_resume", "no_team_context"), Error("Cannot resume teammate: no team is active in this session");
  let l,
    c = await M$e(e);
  if (!c || c.messages.length === 0) l = "no_transcript";
  let u = c ? r8e(o8e(Hht(c.messages))) : [],
    d = eFn(s.contentReplacementState, u, c?.contentReplacements ?? []),
    p;
  if (r.customAgentType) {
    let m = s.options.agentDefinitions.activeAgents.find(g => g.agentType === r.customAgentType);
    if (m && F6e(m)) p = m;else l = "agent_type_unresolved", p = {
      agentType: r.customAgentType,
      whenToUse: "",
      tools: [],
      getSystemPrompt: () => "",
      source: "projectSettings"
    };
  }
  await k9t(i, m => kF(m.text), a).catch(m => T(`[resumeInProcessTeammate] stale protocol-frame drop failed: ${m}`));
  let f = await $ht({
    name: i,
    teamName: a,
    prompt: t,
    description: r.description,
    color: r.color,
    planModeRequired: r.planModeRequired ?? !1,
    model: r.model,
    permissionMode: r.permissionMode !== void 0 && r.permissionMode !== "bypassPermissions" && yM.includes(r.permissionMode) ? r.permissionMode : void 0,
    resumableAgentId: e
  }, s);
  if (!f.ok) throw Le("swarm_in_process_resume", "spawn_failed"), T(`[resumeInProcessTeammate] spawn failed: ${f.error}`), Error("Failed to respawn in-process teammate");
  if (await Lpe(a, m => {
    if (m.members.some(g => g.agentId === f.agentId)) return !1;
    m.members.push({
      agentId: f.agentId,
      name: i,
      color: r.color,
      agentType: r.customAgentType,
      planModeRequired: r.planModeRequired,
      joinedAt: Date.now(),
      tmuxPaneId: "in-process",
      cwd: $t(),
      subscriptions: [],
      backendType: "in-process"
    });
  }).catch(m => T(`[resumeInProcessTeammate] team file re-add failed (ad-hoc team?): ${m}`)), s.agentLifecycle.setTeammate(f.agentId, {
    name: i,
    color: r.color,
    agentType: r.customAgentType,
    tmuxSessionName: "in-process",
    tmuxPaneId: "in-process",
    cwd: $t(),
    spawnedAt: Date.now()
  }), ibt({
    identity: f.identity,
    taskId: f.taskId,
    prompt: t,
    initialFrom: n,
    description: r.description,
    agentDefinition: p,
    model: r.model,
    teammateContext: f.teammateContext,
    toolUseContext: {
      ...s,
      messages: []
    },
    abortController: f.abortController,
    resumeMessages: u,
    resumeReplacementState: d
  }), T(`[resumeInProcessTeammate] Resumed ${f.agentId} with ${u.length} prior messages`), l) It("swarm_in_process_resume", l);else xe("swarm_in_process_resume");
  return {
    agentId: f.agentId,
    taskId: f.taskId,
    resumedMessageCount: u.length
  };
}