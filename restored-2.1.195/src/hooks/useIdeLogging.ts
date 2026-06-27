// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ggc
// matched 2.1.88 source: src/hooks/useIdeLogging.ts
// class=modified  jaccard=0.3533  score=0.7726  fileCov=0.3943
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Ggc] deps: utils/debug.ts, @modelcontextprotocol/sdk/dist/esm/types.js, utils/ide.ts
((Fgc = R(rt(), 1)),
  (qum = ve(() =>
    H.object({
      method: H.literal("log_event"),
      params: H.object({
        eventName: H.string(),
        eventData: H.object({}).passthrough(),
      }),
    }),
  )));
function Wgc() {
  let [e, t] = Our.useState(null);
  return (
    Our.useEffect(
      () => (
        Jho(
          (n) =>
            new Promise((r) => {
              t({
                settings: n,
                resolve: (o) => {
                  (t(null), r(o));
                },
              });
            }),
        ),
        () => Jho(null)
      ),
      [],
    ),
    e
  );
}
var Our;
