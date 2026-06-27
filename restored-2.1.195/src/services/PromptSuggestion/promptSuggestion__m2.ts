// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _nc
// matched 2.1.88 source: src/services/PromptSuggestion/promptSuggestion.ts
// class=modified (alt of src/services/PromptSuggestion/promptSuggestion.ts)  jaccard=0.0119  score=0.1394  fileCov=0.0129
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module _nc] deps: ft, Bs, vi, B_, Ko, gm, Xa, Ye, uo, es, sr, Lze
(($Go = R(lt(), 1)), (hnc = R(rt(), 1)), (LC = R(se(), 1)));
var Snc,
  shouldFilterSuggestion = async (e, t, n) => {
    let r = n.trim();
    if (r === "")
      return Snc.jsx(ync, {
        messages: t.messages,
        onDone: () =>
          e(void 0, {
            display: "skip",
          }),
      });
    if (CQn(r)) {
      let s = fSt(t);
      return (
        e(s === null ? "No goal set" : `Goal cleared: ${s}`, {
          display: "system",
        }),
        null
      );
    }
    if (r.length > uSt)
      return (
        It("goal_set", "too_long"),
        e(`Goal condition is limited to ${uSt} characters (got ${r.length})`, {
          display: "system",
        }),
        null
      );
    let o = pSt(r, t);
    if (o !== null)
      return (
        e(o, {
          display: "system",
        }),
        null
      );
    return (
      e(`Goal set: ${r}`, {
        shouldQuery: true,
        metaMessages: [IQn(r)],
      }),
      null
    );
  };
