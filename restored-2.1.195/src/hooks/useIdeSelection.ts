// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module AAc
// matched 2.1.88 source: src/hooks/useIdeSelection.ts
// class=modified  jaccard=0.1079  score=0.1622  fileCov=0.2438
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var AAc = E(() => {
  vn();
  Xr();
  aE();
  ((otn = R(rt(), 1)),
    (_ym = ve(() =>
      H.object({
        method: H.literal("selection_changed"),
        params: H.object({
          selection: H.object({
            start: H.object({
              line: H.number(),
              character: H.number(),
            }),
            end: H.object({
              line: H.number(),
              character: H.number(),
            }),
          })
            .nullable()
            .optional(),
          text: H.string().optional(),
          filePath: H.string().optional(),
        }),
      }),
    )));
});
function HAc(e, t) {
  switch (e.kind) {
    case "background_hint":
      return stn.background_hint(e, t);
    case "bash_mode_progress":
      return stn.bash_mode_progress(e, t);
    case "it2_setup_prompt":
      return stn.it2_setup_prompt(e, t);
    case "computer_use_approval":
      return stn.computer_use_approval(e, t);
    case "agent_progress":
      return stn.agent_progress(e, t);
    default: {
      let n = e;
      return null;
    }
  }
}
var qzo, stn;
