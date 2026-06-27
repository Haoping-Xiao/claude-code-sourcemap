// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dtc
// matched 2.1.88 source: src/bridge/pollConfig.ts
// class=modified (alt of src/bridge/pollConfig.ts)  jaccard=0.4649  score=1  fileCov=0.4649
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module dtc]
_Ht = {
  poll_interval_ms_not_at_capacity: 2000,
  poll_interval_ms_at_capacity: 600000,
  non_exclusive_heartbeat_interval_ms: 0,
  multisession_poll_interval_ms_not_at_capacity: 2000,
  multisession_poll_interval_ms_partial_capacity: 2000,
  multisession_poll_interval_ms_at_capacity: 600000,
  reclaim_older_than_ms: 5000,
  session_keepalive_interval_v2_ms: 120000,
};
function U1e() {
  let e = T7("tengu_bridge_poll_interval_config", _Ht, 300000),
    t = BYf().safeParse(e);
  return t.success ? t.data : _Ht;
}
var ptc, BYf;
