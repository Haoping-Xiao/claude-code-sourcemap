// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wOe
// matched 2.1.88 source: src/utils/sideQuestion.ts
// class=modified  jaccard=0.3125  score=0.3603  fileCov=0.7023
// note: deminified; 7 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: runSideQuestion, resetBtwHistory, getBtwHistory, findBtwTriggerPositions, createBtwHistoryState, clearBtwHistory, appendBtwHistory, _setGlobalBtwHistoryStateForTesting
// [unwrapped __esm module wOe] deps: ft, Wit, Kit, Tne
((vOe = R(rt(), 1)), (W$o = R(se(), 1)));
Rq = nkf;
function findBtwTriggerPositions(e) {
  let t = [],
    n = e.matchAll(rkf);
  for (let r of n)
    if (r.index !== void 0)
      t.push({
        word: r[0],
        start: r.index,
        end: r.index + r[0].length,
      });
  return t;
}
function createBtwHistoryState() {
  return {
    history: [],
  };
}
function skf(e) {
  Qze = e;
}
function getBtwHistory() {
  return Qze.history;
}
function clearBtwHistory() {
  Qze.history = [];
}
function resetBtwHistory(e) {
  Qze.history = e;
}
function appendBtwHistory(e, t) {
  Qze.history = [
    ...Qze.history,
    {
      question: e,
      response: t,
    },
  ].slice(-okf);
}
async function runSideQuestion({
  question: e,
  cacheSafeParams: t,
  parentController: n,
  onRetry: r,
  threadHistory: o = true,
}) {
  let s = `<system-reminder>This is a side question from the user. You must answer this question directly in a single response.

IMPORTANT CONTEXT:
- You are a separate, lightweight agent spawned to answer this one question
- The main agent is NOT interrupted - it continues working independently in the background
- You share the conversation context but are a completely separate instance
- Do NOT reference being interrupted or what you were "previously doing" - that framing is incorrect

CRITICAL CONSTRAINTS:
- You have NO tools available - you cannot read files, run commands, search, or take any actions
- This is a one-off response - there will be no follow-up turns
- You can ONLY provide information based on what you already know from the conversation context
- NEVER say things like "Let me try...", "I'll now...", "Let me check...", or promise to take any action
- If you don't know the answer, say so - do not offer to look it up or investigate

Simply answer the question with the information you have.</system-reminder>

${e}`,
    i = n ? c$(n) : Sl(),
    a = o
      ? Qze.history.flatMap((l) => [
          Rn({
            content: l.question,
          }),
          dE({
            content: l.response,
          }),
        ])
      : [];
  try {
    let l = await dk({
        promptMessages: [
          ...a,
          Rn({
            content: s,
          }),
        ],
        cacheSafeParams: t,
        canUseTool: async () => ({
          behavior: "deny",
          message: "Side questions cannot use tools",
          decisionReason: {
            type: "other",
            reason: "side_question",
          },
        }),
        querySource: "side_question",
        forkLabel: "side_question",
        maxTurns: 1,
        skipCacheWrite: true,
        skipTranscript: true,
        overrides: {
          abortController: i,
        },
        onMessage: r
          ? (d) => {
              if (KLl(d))
                r({
                  retryAttempt: d.retryAttempt,
                  maxRetries: d.maxRetries,
                  retryInMs: d.retryInMs,
                  status: d.error.status,
                });
            }
          : void 0,
      }),
      { response: c, synthetic: u } = akf(l.messages);
    if (o && c && !u) appendBtwHistory(e, c);
    return {
      response: c,
      synthetic: u,
      usage: l.totalUsage,
    };
  } catch (l) {
    if (l instanceof tf || i.signal.aborted)
      return {
        response: null,
        synthetic: false,
        usage: xb,
        aborted: true,
      };
    throw l;
  }
}
function akf(e) {
  let t = e.flatMap((r) => (r.type === "assistant" ? r.message.content : []));
  if (t.length > 0) {
    let r = zl(
      t,
      `

`,
    ).trim();
    if (r)
      return {
        response: r,
        synthetic: false,
      };
    let o = t.find((s) => s.type === "tool_use");
    if (o)
      return {
        response: `(The model tried to call ${"name" in o ? o.name : "a tool"} instead of answering directly. Try rephrasing or ask in the main conversation.)`,
        synthetic: true,
      };
  }
  let n = e.find(KLl);
  if (n)
    return {
      response: `(API error: ${n.error.formatted})`,
      synthetic: true,
    };
  return {
    response: null,
    synthetic: false,
  };
}
function KLl(e) {
  return e.type === "system" && "subtype" in e && e.subtype === "api_error";
}
var rkf,
  okf = 20,
  Qze;
