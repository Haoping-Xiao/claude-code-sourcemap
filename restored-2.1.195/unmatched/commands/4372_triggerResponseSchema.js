// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Sl
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> commands; 3 renamed
// ─────────────────────────────────────────────────────────────────────────
var _Sl = E(() => {
  ql();
  Ye();
  sr();
  Dzt = R(se(), 1);
});
var ESl = {};
_t(ESl, {
  triggerResponseSchema: () => triggerResponseSchema,
  buildScheduleSummary: () => buildScheduleSummary,
  RemoteTriggerTool: () => RemoteTriggerTool
});
function buildScheduleSummary(e, t = new Date()) {
  let n = e.enabled ?? true,
    r = [],
    o = e.next_run_at ? new Date(e.next_run_at) : void 0;
  if (o && !Number.isNaN(o.getTime())) {
    let s = oae(o, {
        now: t
      }),
      i = o.toISOString().replace(/\.\d{3}Z$/, "Z"),
      a = e.run_once_at ? "runs once" : e.cron_expression ? `next run (cron ${e.cron_expression})` : "next run";
    if (n) {
      if (r.push(`\u2192 Scheduled: ${a} ${s} (${i} UTC)`), e.run_once_at && o.getTime() < t.getTime()) r.push("\u26A0 next_run_at is in the past \u2014 confirm the date/timezone is intended.");
    } else r.push(`\u2192 Disabled (next run would be ${s}, ${i} UTC)`);
  }
  if (e.id) r.push(`\u2192 View/manage: ${$s().CLAUDE_AI_ORIGIN}/code/routines/${e.id}`);
  return r.length ? r.join(`
`) : void 0;
}
var Ehf, Ahf, triggerResponseSchema, RemoteTriggerTool;