// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module n6o
// matched 2.1.88 source: src/hooks/useMemoryUsage.ts
// class=modified  jaccard=0.2627  score=0.3506  fileCov=0.5114
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var n6o = E(() => {
  Ye();
  uo();
  ((yhc = R(lt(), 1)), (t6o = R(se(), 1)));
});
function bhc() {
  let [e, t] = Yur.useState(null),
    n = Yur.useRef("normal");
  return (
    Gc(() => {
      let r, o;
      try {
        ({ heapUsed: r, rss: o } = process.memoryUsage());
      } catch (i) {
        T(
          `[useMemoryUsage] process.memoryUsage() failed: ${i instanceof Error ? i.message : String(i)}`,
          {
            level: "error",
          },
        );
        return;
      }
      let s = r >= mdm ? "critical" : r >= fdm ? "high" : "normal";
      if (_hc[s] > _hc[n.current])
        (G("tengu_memory_threshold_crossed", {
          rss_mb: Math.round(o / 1024 / 1024),
          heap_used_mb: Math.round(r / 1024 / 1024),
          status: $e(s),
        }),
          (n.current = s));
      t((i) => {
        if (s === "normal") return i === null ? i : null;
        return {
          heapUsed: r,
          status: s,
        };
      });
    }, 10000 /* 1e4 */),
    e
  );
}
var Yur,
  fdm = 1610612736,
  mdm = 2684354560,
  _hc;
