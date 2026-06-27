// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pSl
// matched 2.1.88 source: src/tools/RemoteTriggerTool/RemoteTriggerTool.ts
// class=partial  jaccard=0.0929  score=0.3349  fileCov=0.1139
// note: low-confidence suggestion: src/tools/RemoteTriggerTool/RemoteTriggerTool.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var pSl = E(() => {
  Xr();
  ii();
  vX();
  N8();
  es();
  Sj();
  WW();
  _Xn();
  _hf = ve(() => H.strictObject({})), bhf = ve(() => H.object({
    jobs: H.array(H.object({
      id: H.string(),
      cron: H.string(),
      humanSchedule: H.string(),
      prompt: H.string(),
      recurring: H.boolean().optional(),
      durable: H.boolean().optional()
    }))
  })), Shf = ti({
    name: X2t,
    searchHint: "list active cron jobs",
    maxResultSizeChars: 1e5,
    shouldDefer: !0,
    get inputSchema() {
      return _hf();
    },
    get outputSchema() {
      return bhf();
    },
    isEnabled() {
      return a$();
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    async description() {
      return tso;
    },
    async prompt() {
      return nso(iSe());
    },
    async call() {
      let e = await Mue(),
        t = w0();
      return {
        data: {
          jobs: (t ? e.filter(o => o.agentId === t.agentId) : e).map(o => ({
            id: o.id,
            cron: o.cron,
            humanSchedule: r$(o.cron),
            prompt: o.prompt,
            ...(o.recurring ? {
              recurring: !0
            } : {}),
            ...(o.durable === !1 ? {
              durable: !1
            } : {})
          }))
        }
      };
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return {
        tool_use_id: t,
        type: "tool_result",
        content: e.jobs.length > 0 ? e.jobs.map(n => `${n.id} \u2014 ${n.humanSchedule}${n.recurring ? " (recurring)" : " (one-shot)"}${n.durable === !1 ? " [session-only]" : ""}: ${$a(n.prompt, 80, !0)}`).join(`
`) : "No scheduled jobs."
      };
    },
    renderToolUseMessage: oSl,
    renderToolResultMessage: sSl
  });
});
async function fSl() {
  let e = await Os.get("/v1/code/triggers", {
    auth: "teleport-org",
    headers: {
      "anthropic-beta": wRo
    }
  });
  if (!e.ok) throw Error(e.reason === "no-auth" ? e.detail : `triggers unavailable: ${e.reason}`);
  return e.data.data ?? [];
}
var wRo = "ccr-triggers-2026-01-30";