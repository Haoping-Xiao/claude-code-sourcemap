// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Enc
// matched 2.1.88 source: src/services/PromptSuggestion/promptSuggestion.ts
// class=modified (alt of src/services/PromptSuggestion/promptSuggestion.ts)  jaccard=0.0085  score=0.0768  fileCov=0.0095
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module Enc] deps: dn, _nc, Lze
Snc = R(se(), 1);
var Anc = {};
var call = async (e, t) => {
  let n = e.trim();
  if (n === "") {
    let o = t.options.activeGoal;
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
    let o = fSt(t);
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
  let r = pSt(n, t);
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
