// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nGo
// matched 2.1.88 source: src/bridge/pollConfig.ts
// class=modified  jaccard=0.5536  score=0.9101  fileCov=0.5856
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var nGo = E(() => {
  Xr();
  Un();
  dtc();
  ((ptc = {
    message: "must be 0 (disabled) or \u2265100ms",
  }),
    (BYf = ve(() =>
      H.object({
        poll_interval_ms_not_at_capacity: H.number().int().min(100),
        poll_interval_ms_at_capacity: H.number()
          .int()
          .refine((e) => e === 0 || e >= 100, ptc),
        non_exclusive_heartbeat_interval_ms: H.number().int().min(0).default(0),
        multisession_poll_interval_ms_not_at_capacity: H.number()
          .int()
          .min(100)
          .default(_Ht.multisession_poll_interval_ms_not_at_capacity),
        multisession_poll_interval_ms_partial_capacity: H.number()
          .int()
          .min(100)
          .default(_Ht.multisession_poll_interval_ms_partial_capacity),
        multisession_poll_interval_ms_at_capacity: H.number()
          .int()
          .refine((e) => e === 0 || e >= 100, ptc)
          .default(_Ht.multisession_poll_interval_ms_at_capacity),
        reclaim_older_than_ms: H.number().int().min(1).default(5000),
        session_keepalive_interval_v2_ms: H.number().int().min(0).default(120000),
      })
        .refine(
          (e) => e.non_exclusive_heartbeat_interval_ms > 0 || e.poll_interval_ms_at_capacity > 0,
          {
            message:
              "at-capacity liveness requires non_exclusive_heartbeat_interval_ms > 0 or poll_interval_ms_at_capacity > 0",
          },
        )
        .refine(
          (e) =>
            e.non_exclusive_heartbeat_interval_ms > 0 ||
            e.multisession_poll_interval_ms_at_capacity > 0,
          {
            message:
              "at-capacity liveness requires non_exclusive_heartbeat_interval_ms > 0 or multisession_poll_interval_ms_at_capacity > 0",
          },
        ),
    )));
});
