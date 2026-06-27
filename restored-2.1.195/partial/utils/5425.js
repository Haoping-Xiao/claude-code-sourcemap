// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ggc
// matched 2.1.88 source: src/hooks/useIdeLogging.ts
// class=partial  jaccard=0.1906  score=1  fileCov=0.1906
// note: low-confidence suggestion: src/hooks/useIdeLogging.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Ggc = E(() => {
  kt();
  Xr();
  aE();
  Fgc = R(rt(), 1), qum = ve(() => H.object({
    method: H.literal("log_event"),
    params: H.object({
      eventName: H.string(),
      eventData: H.object({}).passthrough()
    })
  }));
});
function Wgc() {
  let [e, t] = Our.useState(null);
  return Our.useEffect(() => (Jho(n => new Promise(r => {
    t({
      settings: n,
      resolve: o => {
        t(null), r(o);
      }
    });
  })), () => Jho(null)), []), e;
}
var Our;