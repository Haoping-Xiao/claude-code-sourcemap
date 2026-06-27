// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jin
// matched 2.1.88 source: src/utils/startupProfiler.ts
// class=modified  jaccard=0.3121  score=0.4989  fileCov=0.4546
// note: deminified; 7 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var jis = {};
_t(jis, {
  profileReport: () => profileReport,
  profileCheckpoint: () => profileCheckpoint,
  logStartupPerf: () => logStartupPerf,
  isDetailedProfilingEnabled: () => isDetailedProfilingEnabled,
  getStartupPerfLogPath: () => getStartupPerfLogPath,
  getStartupPerfJsonPath: () => getStartupPerfJsonPath,
  addStartupContext: () => addStartupContext,
});
function addStartupContext(e) {
  if (!ZIt) return;
  Object.assign(Nis, e);
}
function profileCheckpoint(e, { once: t = false } = {}) {
  if (!ZIt) return false;
  if (t) {
    if (Ris.has(e)) return false;
    Ris.add(e);
  }
  if ((oG().mark(e), QIt)) gAr.push(process.memoryUsage());
  return true;
}
function Lis() {
  if (!QIt) return "Startup profiling not enabled";
  let t = oG().getEntriesByType("mark");
  if (t.length === 0) return "No profiling checkpoints recorded";
  let n = [];
  (n.push("=".repeat(80)), n.push("STARTUP PROFILING REPORT"), n.push("=".repeat(80)), n.push(""));
  let r = 0;
  for (let [s, i] of t.entries())
    (n.push(Xin(i.startTime, i.startTime - r, i.name, gAr[s], 8, 7)), (r = i.startTime));
  let o = t.at(-1);
  return (
    n.push(""),
    n.push(`Total startup time: ${gee(o?.startTime ?? 0)}ms`),
    n.push("=".repeat(80)),
    n.join(`
`)
  );
}
function profileReport() {
  if (Dis) {
    if (!Pis)
      ((Pis = true),
        logStartupPerf({
          late: true,
        }),
        $is());
    return;
  }
  ((Dis = true),
    logStartupPerf({
      late: false,
    }),
    $is());
}
function $is() {
  if (!QIt) return;
  let e = getStartupPerfLogPath(),
    t = JIt.dirname(e);
  (qt().mkdirSync(t),
    fwe(e, Lis(), {
      encoding: "utf8",
      flush: true,
    }));
  let o = oG().getEntriesByType("mark");
  (fwe(
    getStartupPerfJsonPath(),
    JSON.stringify(
      {
        metadata:
          Fis({
            late: false,
          }) ?? {},
        marks: o.map((s) => ({
          name: s.name,
          startTime: s.startTime,
        })),
        memory: gAr,
        nodeBootMs: fAr,
      },
      null,
      2,
    ),
    {
      encoding: "utf8",
      flush: true,
    },
  ),
    T("Startup profiling report:"),
    T(Lis()));
}
function isDetailedProfilingEnabled() {
  return QIt;
}
function getStartupPerfLogPath() {
  return JIt.join(tr(), "startup-perf", `${Rt()}.txt`);
}
function getStartupPerfJsonPath() {
  return JIt.join(tr(), "startup-perf", `${Rt()}.json`);
}
function Fis({ late: e }) {
  let n = oG().getEntriesByType("mark");
  if (n.length === 0) return null;
  let r = new Map();
  for (let d of n) r.set(d.name, d.startTime);
  let o = r.get("main_after_run"),
    s = {},
    i = 0,
    a = 0;
  for (let [d, [p, f]] of Object.entries(O7c)) {
    if (e && Mis.has(d)) continue;
    let m = r.get(p),
      g = r.get(f);
    if (m !== void 0 && g !== void 0) {
      let h = Math.round(g - m);
      if (((s[`${d}_ms`] = h), i++, !e)) Mis.add(d);
      if (!N7c.has(d) && (o === void 0 || g <= o)) a += h;
    }
  }
  if (e) {
    if (i === 0) return null;
    s.late = true;
  } else s.late = false;
  let l = s.total_time_ms;
  if (typeof l === "number") s.gap_unaccounted_ms = Math.max(0, l - a);
  ((s.free_mem_mb = Math.round(pAr.default.freemem() / 1048576)),
    (s.load_avg_1m = Math.round((pAr.default.loadavg()[0] ?? 0) * 100) / 100),
    (s.checkpoint_count = n.length));
  let c = process.env.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (c) s.ccr_session_id = c;
  if (fAr !== void 0) s.node_boot_ms = fAr;
  let u = Number.parseInt(
    process.env.CCR_SPAWN_TIMESTAMP_MS ?? process.env.CLAUDE_CODE_SPAWN_TIMESTAMP_MS ?? "",
    10,
  );
  if (Number.isFinite(u) && kis !== void 0) s.spawn_to_first_checkpoint_ms = Math.round(kis - u);
  return (Object.assign(s, Nis), s);
}
function logStartupPerf(
  { late: e } = {
    late: false,
  },
) {
  if (!Ois) return;
  let t = Fis({
    late: e,
  });
  if (t === null) return;
  G("tengu_startup_perf", t);
}
var pAr,
  JIt,
  QIt,
  $7c = 0.005,
  Ois,
  ZIt,
  gAr,
  O7c,
  N7c,
  kis,
  fAr,
  Nis,
  Ris,
  Dis = false,
  Pis = false,
  Mis;
