// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module C5e
// matched 2.1.88 source: src/hooks/useIdeLogging.ts
// class=modified (alt of src/hooks/useIdeLogging.ts)  jaccard=0.2529  score=0.4454  fileCov=0.3692
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module C5e] deps: utils/debug.ts, @modelcontextprotocol/sdk/dist/esm/types.js, services/analytics/growthbook.ts, utils/debug.ts
Oao = ve(() =>
  H.object({
    method: H.literal("log_event"),
    params: H.object({
      eventName: H.string(),
      eventData: H.object({}).passthrough(),
    }),
  }),
);
function Xca(e) {
  return e?.kind === "human";
}
function YW(e) {
  return e === void 0 || e.kind === "human";
}
function Y1(e) {
  return e === void 0 || e.kind === "human" || e.kind === "auto-continuation";
}
function ESe(e) {
  return e.type === "user" && !e.isMeta && e.toolUseResult === void 0;
}
function xut(e) {
  return (
    e.type === "user" &&
    !e.isMeta &&
    e.toolUseResult === void 0 &&
    !e.isCompactSummary &&
    YW(e.origin)
  );
}
function Jca(e, t) {
  if (t === 0) return;
  G("tengu_human_origin_presumed", {
    consumer: $e(e),
    count_bucket: $e(t === 1 ? "1" : t <= 5 ? "2-5" : "6+"),
  });
}
