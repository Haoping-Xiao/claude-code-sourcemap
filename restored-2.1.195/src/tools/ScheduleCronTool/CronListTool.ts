// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pSl
// matched 2.1.88 source: src/tools/ScheduleCronTool/CronListTool.ts
// class=modified  jaccard=0.4538  score=0.6605  fileCov=0.5918
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module pSl] deps: @modelcontextprotocol/sdk/dist/esm/types.js, services/mockRateLimits.ts, utils/cronTasks.ts, utils/cronJitterConfig.ts, utils/profilerBase.ts, utils/teammate.ts, utils/cronScheduler.ts, tools.ts
((_hf = ve(() => H.strictObject({}))),
  (bhf = ve(() =>
    H.object({
      jobs: H.array(
        H.object({
          id: H.string(),
          cron: H.string(),
          humanSchedule: H.string(),
          prompt: H.string(),
          recurring: H.boolean().optional(),
          durable: H.boolean().optional(),
        }),
      ),
    }),
  )),
  (Shf = ti({
    name: X2t,
    searchHint: "list active cron jobs",
    maxResultSizeChars: 100000 /* 1e5 */,
    shouldDefer: true,
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
      return true;
    },
    isReadOnly() {
      return true;
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
          jobs: (t ? e.filter((o) => o.agentId === t.agentId) : e).map((o) => ({
            id: o.id,
            cron: o.cron,
            humanSchedule: r$(o.cron),
            prompt: o.prompt,
            ...(o.recurring
              ? {
                  recurring: true,
                }
              : {}),
            ...(o.durable === false
              ? {
                  durable: false,
                }
              : {}),
          })),
        },
      };
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return {
        tool_use_id: t,
        type: "tool_result",
        content:
          e.jobs.length > 0
            ? e.jobs.map(
                (n) =>
                  `${n.id} \u2014 ${n.humanSchedule}${n.recurring ? " (recurring)" : " (one-shot)"}${n.durable === false ? " [session-only]" : ""}: ${$a(n.prompt, 80, true)}`,
              ).join(`
`)
            : "No scheduled jobs.",
      };
    },
    renderToolUseMessage: oSl,
    renderToolResultMessage: sSl,
  })));
async function fSl() {
  let e = await Os.get("/v1/code/triggers", {
    auth: "teleport-org",
    headers: {
      "anthropic-beta": wRo,
    },
  });
  if (!e.ok) throw Error(e.reason === "no-auth" ? e.detail : `triggers unavailable: ${e.reason}`);
  return e.data.data ?? [];
}
var wRo = "ccr-triggers-2026-01-30";
