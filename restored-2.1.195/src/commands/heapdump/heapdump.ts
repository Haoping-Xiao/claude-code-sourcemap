// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module y4o
// matched 2.1.88 source: src/commands/heapdump/heapdump.ts
// class=modified  jaccard=0.0589  score=0.0635  fileCov=0.4482
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module y4o] deps: services/analytics/index.ts, utils/debug.ts, utils/debug.ts, utils/errors.ts, utils/nativeInstaller/download.ts, utils/fsOperations.ts, utils/sequential.ts, utils/platform.ts, utils/fsOperations.ts
((q7l = require("fs")),
  (eHt = require("fs/promises")),
  (g4o = require("path")),
  (Xsr = require("v8")));
async function call() {
  let e = await h4o();
  if (!e.success)
    return {
      type: "text",
      value: `Failed to create heap dump: ${e.error}`,
    };
  let t = [e.heapPath, e.diagPath, "", Y9f(e.diagnostics)];
  return (
    t.push(
      "",
      "Open the .heapsnapshot in Chrome DevTools \u2192 Memory \u2192 Load to inspect retainers.",
    ),
    {
      type: "text",
      value: t.join(`
`),
    }
  );
}
function Y9f(e) {
  let { memoryUsage: t, resourceUsage: n, analysis: r } = e,
    o = t.external - t.arrayBuffers,
    s = Math.max(0, t.rss - t.heapTotal - t.external),
    i =
      t.heapTotal > t.external + s
        ? "\u2014 most memory is JS heap (inspect the .heapsnapshot)"
        : "\u2014 most memory is native (NOT in the .heapsnapshot)",
    a = r.potentialLeaks.length
      ? r.potentialLeaks.map((l) => `  \u26A0 ${l}`).join(`
`)
      : "  (no obvious leak indicators)";
  return [
    `RSS ${tHt(t.rss)} (peak ${tHt(n.maxRSS)}) ${i}`,
    `  JS heap        ${tHt(t.heapTotal).padStart(8)}  in snapshot`,
    `  array buffers  ${tHt(t.arrayBuffers).padStart(8)}  not in snapshot`,
    `  other external ${tHt(o).padStart(8)}  not in snapshot`,
    `  unaccounted    ${tHt(s).padStart(8)}  not in snapshot (code/JIT/stacks/allocator)`,
    a,
  ].join(`
`);
}
function tHt(e) {
  return `${(e / 1073741824).toFixed(2)} GB`;
}
