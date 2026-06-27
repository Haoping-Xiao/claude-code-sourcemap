// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BKt
// matched 2.1.88 source: node_modules/@modelcontextprotocol/sdk/dist/esm/types.js
// class=new  jaccard=0.0234  score=0.2572  fileCov=0.0251
// note: nearest: node_modules/@modelcontextprotocol/sdk/dist/esm/types.js (0.0234); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module BKt] deps: @modelcontextprotocol/sdk/dist/esm/types.js
LQ = Dy({
  kind: "refusal_fallback_prompt",
  payload: ve(() => H.object({
    originalModel: H.string(),
    fallbackModel: H.string(),
    apiRefusalCategory: H.string().nullable().optional(),
    guidanceText: H.string().optional(),
    retractedMessageUuids: H.array(H.string()).optional().describe("Wire uuids of the already-streamed messages this refusal concerns. Evict on RESOLUTION (your own response \u2014 any choice \u2014 or control_cancel_request retirement), never on receipt; a turn torn down mid-dialog keeps the partials. Eviction is idempotent.")
  })),
  result: ve(() => H.enum(["retry_fallback", "edit_prompt", "cancelled"])),
  default: "cancelled"
});
async function fIl(e, t, n, r, o, s) {
  let i = {
    messages: e,
    systemPrompt: t,
    userContext: n,
    systemContext: r,
    toolUseContext: o,
    querySource: s
  };
  for (let a of TTf) try {
    await a(i);
  } catch (l) {
    ke(Zr(l));
  }
}
var TTf;