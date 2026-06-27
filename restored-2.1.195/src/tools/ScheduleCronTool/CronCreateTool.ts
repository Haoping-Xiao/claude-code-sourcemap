// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lSl
// matched 2.1.88 source: src/tools/ScheduleCronTool/CronCreateTool.ts
// class=modified  jaccard=0.6659  score=0.9731  fileCov=0.6784
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: CronDeleteTool
// [unwrapped __esm module lSl] deps: Xr, ft, ii, vX, N8, PDe, Sj, WW, _Xn
((phf = ve(() =>
  H.strictObject({
    cron: H.string().describe(
      'Standard 5-field cron expression in local time: "M H DoM Mon DoW" (e.g. "*/5 * * * *" = every 5 minutes, "30 14 28 2 *" = Feb 28 at 2:30pm local once).',
    ),
    prompt: H.string().describe("The prompt to enqueue at each fire time."),
    recurring: Y0(H.boolean().optional()).describe(
      `true (default) = fire on every cron match until deleted or auto-expired after ${ire} days. false = fire once at the next match, then auto-delete. Use false for "remind me at X" one-shot requests with pinned minute/hour/dom/month.`,
    ),
    durable: Y0(H.boolean().optional()).describe(
      "true = persist to .claude/scheduled_tasks.json and survive restarts. false (default) = in-memory only, dies when this Claude session ends. Use true only when the user asks the task to survive across sessions.",
    ),
  }),
)),
  (fhf = ve(() =>
    H.object({
      id: H.string(),
      humanSchedule: H.string(),
      recurring: H.boolean(),
      durable: H.boolean().optional(),
    }),
  )),
  (mhf = ti({
    name: DI,
    searchHint: "schedule a recurring or one-shot prompt",
    maxResultSizeChars: 100000 /* 1e5 */,
    shouldDefer: true,
    get inputSchema() {
      return phf();
    },
    get outputSchema() {
      return fhf();
    },
    isEnabled() {
      return a$();
    },
    toAutoClassifierInput(e) {
      return `${e.cron}: ${e.prompt}`;
    },
    async description() {
      return Joo(iSe());
    },
    async prompt() {
      return Qoo(iSe());
    },
    getPath() {
      return eSe();
    },
    async validateInput(e) {
      if (!F1(e.cron))
        return {
          result: false,
          message: `Invalid cron expression '${e.cron}'. Expected 5 fields: M H DoM Mon DoW.`,
          errorCode: 1,
        };
      if (Tct(e.cron, Date.now()) === null)
        return {
          result: false,
          message: `Cron expression '${e.cron}' does not match any calendar date in the next year.`,
          errorCode: 2,
        };
      if ((await Mue()).length >= iSl)
        return {
          result: false,
          message: `Too many scheduled jobs (max ${iSl}). Cancel one first.`,
          errorCode: 3,
        };
      if (e.durable && w0())
        return {
          result: false,
          message:
            "durable crons are not supported for teammates (teammates do not persist across sessions)",
          errorCode: 4,
        };
      return {
        result: true,
      };
    },
    async call({ cron: e, prompt: t, recurring: n = true, durable: r = false }) {
      let o = r && iSe(),
        s = await wct(e, t, n, o, w0()?.agentId);
      return (
        lee(true),
        {
          data: {
            id: s,
            humanSchedule: r$(e),
            recurring: n,
            durable: o,
          },
        }
      );
    },
    mapToolResultToToolResultBlockParam(e, t) {
      let n = e.durable
        ? "Persisted to .claude/scheduled_tasks.json"
        : "Session-only (not written to disk, dies when Claude exits)";
      return {
        tool_use_id: t,
        type: "tool_result",
        content: e.recurring
          ? `Scheduled recurring job ${e.id} (${e.humanSchedule}). ${n}. Auto-expires after ${ire} days. Use CronDelete to cancel sooner.`
          : `Scheduled one-shot task ${e.id} (${e.humanSchedule}). ${n}. It will fire once then auto-delete.`,
      };
    },
    renderToolUseMessage: eSl,
    renderToolResultMessage: tSl,
  })));
var cSl = {};
var ghf, hhf, CronDeleteTool;
