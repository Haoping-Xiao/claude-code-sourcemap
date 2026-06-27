// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $7
// matched 2.1.88 source: src/utils/pdfUtils.ts
// class=modified  jaccard=0.4421  score=0.9184  fileCov=0.4601
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module $7] deps: ft, Rm, Lo, je, At, ys, jS
((_0n = require("fs/promises")), (uit = require("path")));
function rYr(e) {
  let t = e.trim();
  if (!t) return null;
  if (t.endsWith("-")) {
    let s = parseInt(t.slice(0, -1), 10);
    if (isNaN(s) || s < 1) return null;
    return {
      firstPage: s,
      lastPage: 1 / 0,
    };
  }
  let n = t.indexOf("-");
  if (n === -1) {
    let s = parseInt(t, 10);
    if (isNaN(s) || s < 1) return null;
    return {
      firstPage: s,
      lastPage: s,
    };
  }
  let r = parseInt(t.slice(0, n), 10),
    o = parseInt(t.slice(n + 1), 10);
  if (isNaN(r) || isNaN(o) || r < 1 || o < 1 || o < r) return null;
  return {
    firstPage: r,
    lastPage: o,
  };
}
function dit() {
  return !As().toLowerCase().includes("claude-3-haiku");
}
function pit(e) {
  let t = e.startsWith(".") ? e.slice(1) : e;
  return ANd.has(t.toLowerCase());
}
var ANd;
