// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module v7n
// matched 2.1.88 source: src/utils/swarm/backends/InProcessBackend.ts
// class=modified  jaccard=0.7794  score=1  fileCov=0.7794
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var v7n = E(() => {
  Hde();
  X6();
  rvo();
  S7n();
  L6t();
  sbt();
  dn();
  kt();
  ZU();
  pre();
  c8t();
  pMe();
  S_();
  SAe();
  S$();
  $S();
  swo();
  co();
  bH();
  xF();
  u$();
  fp();
  og();
  Il();
  je();
  ik();
  co();
  Ao();
  $I();
  Gy();
  tA();
  Jt();
  bk();
  Sj();
  YI();
  Xdt();
  K0();
  hN();
  J_t();
  hP();
});
class thl {
  type = "in-process";
  context = null;
  setContext(e) {
    this.context = e;
  }
  async isAvailable() {
    return !0;
  }
  async spawn(e) {
    if (!this.context)
      return (
        T(`[InProcessBackend] spawn() called without context for ${e.name}`),
        {
          success: !1,
          agentId: `${e.name}@${e.teamName}`,
          error: "InProcessBackend not initialized. Call setContext() before spawn().",
        }
      );
    T(`[InProcessBackend] spawn() called for ${e.name}`);
    let t = await $ht(
      {
        name: e.name,
        teamName: e.teamName,
        prompt: e.prompt,
        color: e.color,
        planModeRequired: e.planModeRequired ?? !1,
      },
      this.context,
    );
    if (!t.ok)
      return {
        success: !1,
        agentId: t.agentId,
        error: t.error,
      };
    return (
      ibt({
        identity: t.identity,
        taskId: t.taskId,
        prompt: e.prompt,
        teammateContext: t.teammateContext,
        toolUseContext: {
          ...this.context,
          messages: [],
        },
        abortController: t.abortController,
        model: e.model,
        systemPrompt: e.systemPrompt,
        systemPromptMode: e.systemPromptMode,
        allowedTools: e.permissions,
        allowPermissionPrompts: e.allowPermissionPrompts,
      }),
      T(`[InProcessBackend] Started agent execution for ${t.agentId}`),
      {
        success: !0,
        agentId: t.agentId,
        taskId: t.taskId,
        abortController: t.abortController,
      }
    );
  }
  async sendMessage(e, t) {
    T(`[InProcessBackend] sendMessage() to ${e}: ${t.text.substring(0, 50)}...`);
    let n = qPt(e);
    if (!n)
      throw (
        T(`[InProcessBackend] Invalid agentId format: ${e}`),
        Error(`Invalid agentId format: ${e}. Expected format: agentName@teamName`)
      );
    let { agentName: r, teamName: o } = n;
    (await fg(
      r,
      {
        text: t.text,
        from: t.from,
        color: t.color,
        timestamp: t.timestamp ?? new Date().toISOString(),
      },
      o,
    ),
      T(`[InProcessBackend] sendMessage() completed for ${e}`));
  }
  async terminate(e, t) {
    if ((T(`[InProcessBackend] terminate() called for ${e}: ${t}`), !this.context))
      return (T(`[InProcessBackend] terminate() failed: no context set for ${e}`), !1);
    let n = this.context.getAppState(),
      r = uAe(e, n.tasks);
    if (!r) return (T(`[InProcessBackend] terminate() failed: task not found for ${e}`), !1);
    if (r.shutdownRequested)
      return (T(`[InProcessBackend] terminate(): shutdown already requested for ${e}`), !0);
    let o = `shutdown-${e}-${Date.now()}`,
      s = jht({
        requestId: o,
        from: "team-lead",
        reason: t,
      }),
      i = r.identity.agentName;
    return (
      await fg(
        i,
        {
          from: "team-lead",
          text: De(s),
          timestamp: new Date().toISOString(),
        },
        r.identity.teamName,
      ),
      ael(r.id, this.context.taskRegistry),
      T(`[InProcessBackend] terminate() sent shutdown request to ${e}`),
      !0
    );
  }
  async kill(e) {
    if ((T(`[InProcessBackend] kill() called for ${e}`), !this.context))
      return (T(`[InProcessBackend] kill() failed: no context set for ${e}`), !1);
    let t = this.context.getAppState(),
      n = uAe(e, t.tasks);
    if (!n) return (T(`[InProcessBackend] kill() failed: task not found for ${e}`), !1);
    let r = uMe(n.id, this.context.taskRegistry, this.context.setAppState);
    return (T(`[InProcessBackend] kill() ${r ? "succeeded" : "failed"} for ${e}`), r);
  }
  async isActive(e) {
    if ((T(`[InProcessBackend] isActive() called for ${e}`), !this.context))
      return (T(`[InProcessBackend] isActive() failed: no context set for ${e}`), !1);
    let t = this.context.getAppState(),
      n = uAe(e, t.tasks);
    if (!n) return (T(`[InProcessBackend] isActive(): task not found for ${e}`), !1);
    let r = n.status === "running",
      o = n.abortController?.signal.aborted ?? !0,
      s = r && !o;
    return (T(`[InProcessBackend] isActive() for ${e}: ${s} (running=${r}, aborted=${o})`), s);
  }
}
function nhl() {
  return new thl();
}
