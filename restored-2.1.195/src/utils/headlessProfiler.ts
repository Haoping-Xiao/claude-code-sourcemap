// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bPo
// matched 2.1.88 source: src/utils/headlessProfiler.ts
// class=modified  jaccard=0.4851  score=0.6486  fileCov=0.658
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function ATf() {
  let e = oG(),
    t = e.getEntriesByType("mark");
  for (let n of t) if (n.name.startsWith(MARK_PREFIX)) e.clearMarks(n.name);
}
function headlessProfilerStartTurn() {
  if (!Ir()) return;
  if (!SPo) return;
  if ((cSt++, ATf(), oG().mark(`${MARK_PREFIX}turn_start`), SQn))
    T(`[headlessProfiler] Started turn ${cSt}`);
}
function headlessProfilerCheckpoint(name) {
  if (!Ir()) return;
  if (!SPo) return;
  let t = oG();
  if ((t.mark(`${MARK_PREFIX}${name}`), SQn))
    T(`[headlessProfiler] Checkpoint: ${name} at ${t.now().toFixed(1)}ms`);
}
function logHeadlessProfilerTurn() {
  if (!Ir()) return;
  if (!SPo) return;
  let n = oG()
    .getEntriesByType("mark")
    .filter((u) => u.name.startsWith(MARK_PREFIX));
  if (n.length === 0) return;
  let r = new Map();
  for (let u of n) {
    let d = u.name.slice(MARK_PREFIX.length);
    r.set(d, u.startTime);
  }
  let o = r.get("turn_start");
  if (o === void 0) return;
  let s = {
    turn_number: cSt,
  };
  if (cSt === 0)
    for (let [u, [d, p]] of Object.entries({
      load_initial_messages_ms: ["before_loadInitialMessages", "after_loadInitialMessages"],
      system_prompt_ms: ["before_getSystemPrompt", "after_getSystemPrompt"],
      streaming_setup_ms: ["before_runHeadlessStreaming", "stdin_listen_started"],
      stdin_wait_ms: ["stdin_listen_started", "run_entry"],
    })) {
      let f = r.get(d),
        m = r.get(p);
      if (f !== void 0 && m !== void 0 && m > f) s[u] = Math.round(m - f);
    }
  let i = r.get("system_message_yielded");
  if (i !== void 0 && cSt === 0) s.time_to_system_message_ms = Math.round(i);
  let a = r.get("query_started");
  if (a !== void 0) s.time_to_query_start_ms = Math.round(a - o);
  let l = r.get("first_chunk");
  if (l !== void 0) s.time_to_first_response_ms = Math.round(l - o);
  let c = r.get("api_request_sent");
  if (a !== void 0 && c !== void 0) s.query_overhead_ms = Math.round(c - a);
  if (((s.checkpoint_count = n.length), process.env.CLAUDE_CODE_ENTRYPOINT))
    s.entrypoint = process.env.CLAUDE_CODE_ENTRYPOINT;
  if (rIl) G("tengu_headless_latency", s);
  if (SQn) T(`[headlessProfiler] Turn ${cSt} metrics: ${De(s)}`);
}
var SQn,
  ETf = 0.05,
  rIl,
  SPo,
  MARK_PREFIX = "headless_",
  cSt = -1;
