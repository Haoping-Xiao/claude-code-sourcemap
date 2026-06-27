// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BKt
// matched 2.1.88 source: node_modules/@modelcontextprotocol/sdk/dist/esm/experimental/tasks/interfaces.js
// class=partial  jaccard=0.1093  score=0.1313  fileCov=0.3954
// note: low-confidence suggestion: node_modules/@modelcontextprotocol/sdk/dist/esm/experimental/tasks/interfaces.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var BKt = E(() => {
  Xr();
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