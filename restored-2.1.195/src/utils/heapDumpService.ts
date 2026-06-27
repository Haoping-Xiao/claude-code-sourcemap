// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module W7l
// matched 2.1.88 source: src/utils/heapDumpService.ts
// class=modified  jaccard=0.5485  score=0.6441  fileCov=0.787
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var W7l = E(() => {
  ((V9f = {
    description: "Restore the code and/or conversation to a previous point",
    name: "rewind",
    aliases: ["checkpoint", "undo"],
    argumentHint: "",
    type: "local",
    supportsNonInteractive: false,
    load: () => Promise.resolve().then(() => j7l),
  }),
    (G7l = V9f));
});
var z7l = {};
_t(z7l, {
  performHeapDump: () => performHeapDump,
  captureMemoryDiagnostics: () => captureMemoryDiagnostics,
});
async function captureMemoryDiagnostics(e, t = 0) {
  let n = process.memoryUsage(),
    r = Xsr.getHeapStatistics(),
    o = process.resourceUsage(),
    s = process.uptime(),
    i;
  try {
    i = Xsr.getHeapSpaceStatistics();
  } catch {}
  let a = process._getActiveHandles().length,
    l = process._getActiveRequests().length,
    c;
  try {
    c = (await eHt.readdir("/proc/self/fd")).length;
  } catch {}
  let u;
  try {
    u = await eHt.readFile("/proc/self/smaps_rollup", "utf8");
  } catch {}
  let d, p, f;
  try {
    let { heapStats: b } = await import("bun:jsc"),
      _ = b(true);
    ((d = _.objectTypeCounts), (p = _.protectedObjectTypeCounts), (f = _.mimalloc || void 0));
  } catch {}
  let m = n.rss - n.heapUsed,
    g = s > 0 ? n.rss / s : 0,
    h = (g * 3600) / 1048576,
    y = [];
  if (r.number_of_detached_contexts > 0)
    y.push(`${r.number_of_detached_contexts} detached context(s) - possible iframe/context leak`);
  if (a > 100) y.push(`${a} active handles - possible timer/socket leak`);
  if (m > n.heapUsed)
    y.push("Native memory > heap - leak may be in native addons (node-pty, sharp, etc.)");
  if (h > 100) y.push(`High memory growth rate: ${h.toFixed(1)} MB/hour`);
  if (c && c > 500) y.push(`${c} open file descriptors - possible file/socket leak`);
  return {
    timestamp: new Date().toISOString(),
    sessionId: Rt(),
    trigger: e,
    dumpNumber: t,
    uptimeSeconds: s,
    memoryUsage: {
      heapUsed: n.heapUsed,
      heapTotal: n.heapTotal,
      external: n.external,
      arrayBuffers: n.arrayBuffers,
      rss: n.rss,
    },
    memoryGrowthRate: {
      bytesPerSecond: g,
      mbPerHour: h,
    },
    v8HeapStats: {
      heapSizeLimit: r.heap_size_limit,
      mallocedMemory: r.malloced_memory,
      peakMallocedMemory: r.peak_malloced_memory,
      detachedContexts: r.number_of_detached_contexts,
      nativeContexts: r.number_of_native_contexts,
    },
    v8HeapSpaces: i?.map((b) => ({
      name: b.space_name,
      size: b.space_size,
      used: b.space_used_size,
      available: b.space_available_size,
    })),
    resourceUsage: {
      maxRSS: o.maxRSS * (Vt() === "macos" ? 1 : 1024),
      userCPUTime: o.userCPUTime,
      systemCPUTime: o.systemCPUTime,
    },
    activeHandles: a,
    activeRequests: l,
    openFileDescriptors: c,
    analysis: {
      potentialLeaks: y,
      recommendation:
        y.length > 0
          ? `WARNING: ${y.length} potential leak indicator(s) found. See potentialLeaks array.`
          : "No obvious leak indicators. Check heap snapshot for retained objects.",
    },
    smapsRollup: u,
    objectTypeCounts: d,
    protectedObjectTypeCounts: p,
    mimalloc: f,
    platform: "linux",
    nodeVersion: process.version,
    ccVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
    }.VERSION,
  };
}
async function performHeapDump(e = "manual", t = 0) {
  try {
    let n = Rt(),
      r = await captureMemoryDiagnostics(e, t),
      o = (d) => (d / 1024 / 1024 / 1024).toFixed(3);
    T(`[HeapDump] Memory state:
  heapUsed: ${o(r.memoryUsage.heapUsed)} GB (in snapshot)
  external: ${o(r.memoryUsage.external)} GB (NOT in snapshot)
  rss: ${o(r.memoryUsage.rss)} GB (total process)
  ${r.analysis.recommendation}`);
    let s = lAs();
    await qt().mkdir(s);
    let i = t > 0 ? `-dump${t}` : "",
      a = `${n}${i}.heapsnapshot`,
      l = `${n}${i}-diagnostics.json`,
      c = g4o.join(s, a),
      u = g4o.join(s, l);
    return (
      await eHt.writeFile(u, De(r, null, 2), {
        mode: 384,
      }),
      T(`[HeapDump] Diagnostics written to ${u}`),
      await z9f(c),
      T(`[HeapDump] Heap dump written to ${c}`),
      G("tengu_heap_dump", {
        triggerManual: e === "manual",
        triggerAuto15GB: e === "auto-1.5GB",
        dumpNumber: t,
        success: true,
      }),
      {
        success: true,
        heapPath: c,
        diagPath: u,
        diagnostics: r,
      }
    );
  } catch (n) {
    let r = Zr(n);
    if (gd(r))
      T(`[HeapDump] Failed to write dump: ${r.message}`, {
        level: "error",
      });
    else ke(r);
    return (
      G("tengu_heap_dump", {
        triggerManual: e === "manual",
        triggerAuto15GB: e === "auto-1.5GB",
        dumpNumber: t,
        success: false,
      }),
      {
        success: false,
        error: r.message,
      }
    );
  }
}
async function z9f(e) {
  (q7l.writeFileSync(e, Bun.generateHeapSnapshot("v8", "arraybuffer"), {
    mode: 384,
  }),
    Bun.gc(true));
}
var q7l, eHt, g4o, Xsr;
