// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module l8t
// matched 2.1.88 source: src/services/compact/compact.ts
// class=new  jaccard=0.0114  score=0.2979  fileCov=0.0118
// note: nearest: src/services/compact/compact.ts (0.0114); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var l8t = E(() => {
  ft();
  fn();
  Jt();
  Erl = require("crypto"), hwo = require("fs"), L6n = require("path");
  Btf = ["model", "system", "tools", "max_tokens", "thinking", "output_config", "context_management", "metadata"], gwo = [], R6n = new Map();
});
function qtf(e, t, n) {
  let r = t.compactMetadata.preservedMessages;
  if (!r) return null;
  let o = (r.allUuids ?? r.uuids).map(s => e.find(i => i.uuid === s) ?? n?.find(i => i.uuid === s)).filter(s => s !== void 0).map($8e);
  return o.length > 0 ? {
    preserved: o,
    anchorUuid: r.anchorUuid
  } : null;
}
function Bpe(e, t, n, r) {
  if (pA(t)) {
    let o = qtf(e, t, r);
    if (o === null) return null;
    let s = new Set(o.preserved.map(a => a.uuid)),
      i = e.filter(a => !s.has(a.uuid));
    if (e.length = 0, e.push(...i), o.anchorUuid === t.uuid) return e.push(...o.preserved), null;
    return o;
  }
  if (n?.anchorUuid === t.uuid) return e.push(...n.preserved), null;
  return n;
}