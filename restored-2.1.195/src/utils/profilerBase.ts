// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module es
// matched 2.1.88 source: src/utils/profilerBase.ts
// class=modified  jaccard=0.3741  score=1  fileCov=0.3741
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function oG() {
  if (!dAr) dAr = require("perf_hooks").performance;
  return dAr;
}
function gee(e) {
  return e.toFixed(3);
}
function formatTimelineLine(totalMs, deltaMs, name, memory, totalPad, deltaPad, i = "") {
  let a = memory ? ` | RSS: ${Ra(memory.rss)}, Heap: ${Ra(memory.heapUsed)}` : "";
  return `[+${gee(totalMs).padStart(totalPad)}ms] (+${gee(deltaMs).padStart(deltaPad)}ms) ${name}${i}${a}`;
}
var dAr = null;
