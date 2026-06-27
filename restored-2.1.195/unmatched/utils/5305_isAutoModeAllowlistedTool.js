// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module clc
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0023  score=0.4203  fileCov=0.0023
// note: nearest: src/cli/print.ts (0.0023); dir inferred from dep-graph -> utils; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: isChromeMcpToolName, isAutoModeAllowlistedTool
// [unwrapped __esm module clc] deps: Lo, Jt
alc = require("fs/promises"), llc = require("path");
var ylc = {};
function isChromeMcpToolName(e) {
  return ocr.some(t => e.startsWith(t));
}
function glc(e) {
  return Qnm.has(String(e?.action));
}
function isAutoModeAllowlistedTool(e, t) {
  if (znm.has(e)) return true;
  if (Ynm.has(e)) return true;
  if (Xnm.has(e)) return glc(t);
  if (Jnm.has(e)) {
    let n = t?.actions;
    if (!Array.isArray(n) || n.length === 0) return false;
    return n.every(glc);
  }
  return false;
}
var ulc = null,
  dlc,
  plc = null,
  flc = null,
  mlc = null,
  Vnm,
  znm,
  ocr,
  Ynm,
  Xnm,
  Jnm,
  Qnm;