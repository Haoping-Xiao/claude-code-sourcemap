// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UWc
// matched 2.1.88 source: src/tools/AgentTool/agentToolUtils.ts
// class=partial  jaccard=0.0659  score=0.3815  fileCov=0.0738
// note: low-confidence suggestion: src/tools/AgentTool/agentToolUtils.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var UWc = E(() => {
  zb();
  BZ();
  pZo();
  rhr();
  $Wc();
  NWc = require("crypto");
  dOm = ve(() => dt.object({
    scope: dt.discriminatedUnion("type", [dt.object({
      type: dt.literal("user"),
      user_id: dt.string().min(1)
    }), dt.object({
      type: dt.literal("rbac_group"),
      rbac_group_id: dt.string().min(1)
    }), dt.object({
      type: dt.literal("organization")
    })]),
    amount: dt.string().regex(/^\d{1,18}$/, "must be a whole-number decimal string of cents").nullable(),
    period: dt.enum(["daily", "weekly", "monthly"]).default("monthly"),
    currency: dt.literal("USD").optional()
  }));
});
function FWc(e, t) {
  let n = gOm(t),
    r = crn(e ?? "") ? L2r(e ?? "", n) : k2r;
  return R2r(r, n) * 100;
}
function crn(e) {
  let t = mo(e);
  if (Z2e[t] !== void 0) return true;
  let n = Dt().additionalModelCostsCache;
  return n?.[e] !== void 0 || n?.[t] !== void 0;
}
function gOm(e) {
  return {
    input_tokens: e.input_tokens,
    output_tokens: e.output_tokens,
    cache_creation_input_tokens: e.cache_creation_input_tokens ?? 0,
    cache_read_input_tokens: e.cache_read_input_tokens ?? 0,
    cache_creation: null,
    server_tool_use: {
      web_search_requests: e.server_tool_use?.web_search_requests ?? 0,
      web_fetch_requests: 0
    },
    service_tier: null,
    inference_geo: null,
    iterations: null,
    speed: e.speed === "fast" ? "fast" : null
  };
}