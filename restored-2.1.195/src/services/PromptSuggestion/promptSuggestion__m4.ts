// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Enc
// matched 2.1.88 source: src/services/PromptSuggestion/promptSuggestion.ts
// class=modified (alt of src/services/PromptSuggestion/promptSuggestion.ts)  jaccard=0.0085  score=0.0768  fileCov=0.0095
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module Enc] deps: dn, _nc, Lze
Snc = R(se(), 1);
var shouldFilterSuggestion = async (suggestion, promptId) => {
  let n = suggestion.trim();
  if (n === "") {
    let o = promptId.options.activeGoal;
    if (!o)
      return {
        type: "text",
        value: "No goal set. Usage: `/goal <condition>`",
      };
    let s =
        o.iterations === 0 ? "not yet evaluated" : `${o.iterations} ${bn(o.iterations, "turn")}`,
      i = o.lastReason
        ? `
${HIl(o.lastReason)}`
        : "";
    return {
      type: "text",
      value: `Goal active: ${o.condition} (${s})${i}`,
    };
  }
  if (CQn(n)) {
    let o = fSt(promptId);
    return {
      type: "text",
      value: o === null ? "No goal set" : `Goal cleared: ${o}`,
    };
  }
  if (n.length > uSt)
    return (
      It("goal_set", "too_long"),
      {
        type: "text",
        value: `Goal condition is limited to ${uSt} characters (got ${n.length})`,
      }
    );
  let r = pSt(n, promptId);
  if (r !== null)
    return {
      type: "text",
      value: r,
    };
  return {
    type: "query",
    value: `Goal set: ${n}`,
    prompt: IQn(n),
  };
};
