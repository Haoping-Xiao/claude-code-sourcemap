// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uSl
// matched 2.1.88 source: src/tools/ScheduleCronTool/CronDeleteTool.ts
// class=modified  jaccard=0.6129  score=0.9488  fileCov=0.6338
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: CronListTool
// [unwrapped __esm module uSl] deps: Xr, ii, N8, Sj, WW, _Xn
((ghf = ve(() =>
  H.strictObject({
    id: H.string().describe("Job ID returned by CronCreate."),
  }),
)),
  (hhf = ve(() =>
    H.object({
      id: H.string(),
    }),
  )),
  (yhf = ti({
    name: m4,
    searchHint: "cancel a scheduled cron job",
    maxResultSizeChars: 100000 /* 1e5 */,
    shouldDefer: true,
    get inputSchema() {
      return ghf();
    },
    get outputSchema() {
      return hhf();
    },
    isEnabled() {
      return a$();
    },
    toAutoClassifierInput(e) {
      return e.id;
    },
    async description() {
      return Zoo;
    },
    async prompt() {
      return eso(iSe());
    },
    getPath() {
      return eSe();
    },
    async validateInput(e) {
      let n = (await Mue()).find((o) => o.id === e.id);
      if (!n)
        return {
          result: false,
          message: `No scheduled job with id '${e.id}'`,
          errorCode: 1,
        };
      let r = w0();
      if (r && n.agentId !== r.agentId)
        return {
          result: false,
          message: `Cannot delete cron job '${e.id}': owned by another agent`,
          errorCode: 2,
        };
      return {
        result: true,
      };
    },
    async call({ id: e }) {
      return (
        await Pue([e]),
        {
          data: {
            id: e,
          },
        }
      );
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return {
        tool_use_id: t,
        type: "tool_result",
        content: `Cancelled job ${e.id}.`,
      };
    },
    renderToolUseMessage: nSl,
    renderToolResultMessage: rSl,
  })));
var _hf, bhf, CronListTool;
