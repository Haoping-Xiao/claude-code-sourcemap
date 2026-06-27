// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Q9
// matched 2.1.88 source: src/tools/FileReadTool/FileReadTool.ts
// class=modified (alt of src/tools/FileReadTool/FileReadTool.ts)  jaccard=0.0093  score=0.0431  fileCov=0.0118
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Q9] deps: Qi, wr, Bi, YS
((W$i = require("fs/promises")),
  (q$i = Cn(async () => {
    let { code: e } = await $n("test", ["-f", "/.dockerenv"]);
    return e === 0;
  })));
z$i = Cn(async () => {
  let [e, t] = await Promise.all([q$i(), Oe.hasInternetAccess()]);
  return ((czr = (e || V$i() || process.env.IS_SANDBOX === "1") && !t), czr);
});
_$d = Cn(async () => {
  let [e, t] = await Promise.all([z$i(), Oe.probeInternalNetworkAccess()]);
  return ((uzr = e && t === null && !K$i()), uzr);
});
W$i.stat("/lib/libc.musl-x86_64.so.1").then(
  () => {
    dzr = true;
  },
  () => {
    dzr = false;
  },
);
h1 = {
  ...Oe,
  terminal: H$d(),
  getIsDocker: q$i,
  getIsBubblewrapSandbox: V$i,
  getIsContainedNoInternet: z$i,
  getIsContainedNoInternetCached: y$d,
  passesAntDspEnvGate: _$d,
  passesAntDspEnvGateCached: b$d,
  isRootOutsideDeliberateSandbox: K$i,
  isMuslEnvironment: S$d,
  isAndroidEnvironment: E$d,
  getTerminalWithJetBrainsDetectionAsync: A$d,
  initJetBrainsDetection: pzr,
};
function xM(e) {
  if (e === void 0) return;
  if (e.startsWith("repl_main_thread") || e === "sdk") return "main";
  if (e.startsWith("agent:") || e === "hook_agent") return "subagent";
  return "auxiliary";
}
function y3e(e) {
  return e === void 0 || xM(e) === "main";
}
function fzr(e) {
  let t = e.indexOf(":");
  return t > 0 ? e.slice(0, t) : void 0;
}
function Bh(e) {
  if (e?.startsWith("agent:custom:")) return "agent:custom";
  return e;
}
function gzr(e, t) {
  Q$i.set(e, t);
}
function skn(e, t) {
  if (!RZe() || md()) return;
  if (!Number.isFinite(t) || t <= 0) return;
  let n = Cst.get(t);
  if (n && !n.dead) return;
  (Z$i++,
    Cst.set(t, {
      kind: e,
      peakRssBytes: isBlockedDevicePath(t) ?? 0,
      dead: false,
    }));
}
function eOi(e) {
  let t = Cst.get(e);
  if (t) t.dead = true;
}
function hzr() {
  if (Cst.size === 0) return;
  for (let [e, t] of Cst) {
    if (t.dead) continue;
    let n = isBlockedDevicePath(e);
    if (n === void 0) t.dead = true;
    else if (n > t.peakRssBytes) t.peakRssBytes = n;
  }
}
function isBlockedDevicePath(filePath) {
  try {
    let t = mzr.readFileSync(`/proc/${filePath}/statm`, "utf8"),
      n = Number(t.split(" ")[1]);
    return Number.isFinite(n) ? n * v$d() : void 0;
  } catch {
    return;
  }
}
function v$d() {
  if (Z1t !== void 0) return Z1t;
  try {
    let e = mzr.readFileSync("/proc/self/statm", "utf8"),
      t = Number(e.split(" ")[1]);
    Z1t = t > 0 ? Math.round(process.memoryUsage().rss / t) : 4096;
  } catch {
    Z1t = 4096;
  }
  return Z1t;
}
function w$d(e) {
  let t = process.memoryUsage(),
    n = {
      uptime_s: Math.round(process.uptime()),
      final_rss_bytes: t.rss,
      final_heap_used_bytes: t.heapUsed,
      final_external_bytes: t.external,
      final_array_buffers_bytes: t.arrayBuffers,
      peak_rss_bytes: Math.max(e.rss, t.rss),
      peak_heap_used_bytes: Math.max(e.heapUsed, t.heapUsed),
      peak_external_bytes: Math.max(e.external, t.external),
      constrained_memory_bytes: process.constrainedMemory?.() || void 0,
    };
  for (let [s, i] of Q$i)
    try {
      let a = i();
      if (((n[`attr_${s}_entries`] = a.entries), a.bytes !== void 0))
        n[`attr_${s}_bytes`] = a.bytes;
    } catch {}
  hzr();
  let r = 0,
    o = {};
  for (let s of Cst.values())
    ((r += s.peakRssBytes), (o[s.kind] = (o[s.kind] ?? 0) + s.peakRssBytes));
  ((n.child_count = Z$i), (n.child_rss_bytes_total = r));
  for (let s of T$d) if (o[s] !== void 0) n[`child_${s}_rss_bytes`] = o[s];
  return n;
}
function I$d(e) {
  if (J$i) return;
  J$i = true;
  try {
    G("tengu_sdk_memory_summary", w$d(e()));
  } catch {}
}
function nOi(e) {
  if (X$i) return;
  ((X$i = true), (C$d = Ci(() => I$d(e))));
}
var mzr,
  Q$i,
  T$d,
  Cst,
  Z$i = 0,
  Z1t,
  X$i = false,
  J$i = false,
  C$d;
