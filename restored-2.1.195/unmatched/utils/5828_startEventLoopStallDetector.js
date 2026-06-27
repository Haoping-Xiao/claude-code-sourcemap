// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module g1c
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var g1c = E(() => {
  dn();
  c_();
  At();
  Jt();
  b8n();
});
var _1c = {};
_t(_1c, {
  startEventLoopStallDetector: () => startEventLoopStallDetector,
  sampleRss: () => sampleRss
});
function sampleRss() {
  try {
    let e = process.memoryUsage();
    return {
      rss_mb: Math.round(e.rss / 1024 / 1024),
      heap_used_mb: Math.round(e.heapUsed / 1024 / 1024),
      ext_mb: Math.round(e.external / 1024 / 1024)
    };
  } catch (e) {
    return T(`[event-loop-stall] process.memoryUsage() failed: ${e instanceof Error ? e.message : String(e)}`, {
      level: "error"
    }), null;
  }
}
function startEventLoopStallDetector() {
  if (I7o !== null) return;
  x7o = Date.now(), T(`[event-loop-stall] detector started (interval=${enn}ms, threshold=${h1c}ms)`), I7o = setInterval(() => {
    let e = Date.now(),
      t = e - x7o,
      n = t - enn;
    if (Uxm++, n > h1c) {
      k7o++, R7o += n;
      let r = n > Bxm,
        o = sampleRss();
      if (T(`[event-loop-stall] blocked for ${n}ms (expected ${enn}ms, actual ${t}ms). Total stalls: ${k7o}, cumulative: ${R7o}ms${r ? " [likely sleep/wake]" : ""}` + (o ? ` rss=${o.rss_mb}MB heap=${o.heap_used_mb}MB ext=${o.ext_mb}MB` : ""), {
        level: "warn"
      }), G("tengu_event_loop_stall", {
        stall_duration_ms: n,
        expected_interval_ms: enn,
        actual_interval_ms: t,
        total_stalls: k7o,
        cumulative_stall_ms: R7o,
        likely_sleep: r,
        ...o
      }), r) Cu.get(process.stdout)?.reassertTerminalModes();
    }
    x7o = e;
  }, enn), I7o.unref();
}
var enn = 200,
  h1c = 500,
  Bxm = 5000,
  I7o = null,
  x7o = 0,
  k7o = 0,
  R7o = 0,
  Uxm = 0;