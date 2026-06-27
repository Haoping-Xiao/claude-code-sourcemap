// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DUc
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0063  score=0.421  fileCov=0.0064
// note: nearest: src/cli/print.ts (0.0063); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module DUc] deps: kt, jc, pXo, C5e
ELm = new Set(["tengu_message_rated", "tengu_feedback_survey_event"]);
function PUc({
  requestedAgent: e,
  agents: t,
  systemPrompt: n,
  preAgentSystemPrompt: r
}) {
  if (e != null && typeof e !== "string") return {
    ok: false,
    error: "agent must be a string or null"
  };
  let o = typeof e === "string" && e !== "" ? e : void 0,
    s = o ? t.find(p => p.agentType === o) : void 0;
  if (o && !s) return {
    ok: false,
    error: `Agent "${o}" not found`
  };
  let i = TO(),
    a = i ? t.find(p => p.agentType === i) : void 0;
  if (a?.model && a.model !== "inherit" && r_() === zo(a.model)) py(void 0);
  let l = C_r();
  if (l && a?.model && a.model !== "inherit" && l.previousOverride === zo(a.model)) I_r(s?.model && s.model !== "inherit" ? zo(s.model) : void 0);
  if (VTe(o, void 0, {
    activeAgents: t,
    allAgents: t
  }), s) FYe(s.agentType);
  let c = a !== void 0 && !Sh(a) && n === a.getSystemPrompt(),
    u = r !== void 0 || c,
    d = s && !Sh(s) ? s.getSystemPrompt() : void 0;
  if (d && (!n || u)) return {
    ok: true,
    agentDefinition: s,
    systemPrompt: d,
    preAgentSystemPrompt: r ?? {
      value: c ? void 0 : n
    }
  };
  if (u) return {
    ok: true,
    agentDefinition: s,
    systemPrompt: r ? r.value : void 0,
    preAgentSystemPrompt: void 0
  };
  return {
    ok: true,
    agentDefinition: s,
    systemPrompt: n,
    preAgentSystemPrompt: r
  };
}