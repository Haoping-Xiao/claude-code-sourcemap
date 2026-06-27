// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module clc
// matched 2.1.88 source: src/utils/readEditContext.ts
// class=modified (alt of src/utils/readEditContext.ts)  jaccard=0.4356  score=1  fileCov=0.4356
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var clc = E(() => {
  Lo();
  Jt();
  ((alc = require("fs/promises")), (llc = require("path")));
});
var ylc = {};
_t(ylc, {
  isChromeMcpToolName: () => isChromeMcpToolName,
  isAutoModeAllowlistedTool: () => isAutoModeAllowlistedTool,
});
function isChromeMcpToolName(e) {
  return ocr.some((t) => e.startsWith(t));
}
function glc(e) {
  return Qnm.has(String(e?.action));
}
function isAutoModeAllowlistedTool(e, t) {
  if (znm.has(e)) return !0;
  if (Ynm.has(e)) return !0;
  if (Xnm.has(e)) return glc(t);
  if (Jnm.has(e)) {
    let n = t?.actions;
    if (!Array.isArray(n) || n.length === 0) return !1;
    return n.every(glc);
  }
  return !1;
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
