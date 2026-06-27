// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module C5e
// matched 2.1.88 source: src/hooks/useIdeLogging.ts
// class=partial  jaccard=0.1315  score=0.2975  fileCov=0.1906
// note: low-confidence suggestion: src/hooks/useIdeLogging.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var C5e = E(() => {
  je();
  Xr();
  Un();
  kt();
  Oao = ve(() => H.object({
    method: H.literal("log_event"),
    params: H.object({
      eventName: H.string(),
      eventData: H.object({}).passthrough()
    })
  }));
});
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
  return e.type === "user" && !e.isMeta && e.toolUseResult === void 0 && !e.isCompactSummary && YW(e.origin);
}
function Jca(e, t) {
  if (t === 0) return;
  G("tengu_human_origin_presumed", {
    consumer: $e(e),
    count_bucket: $e(t === 1 ? "1" : t <= 5 ? "2-5" : "6+")
  });
}