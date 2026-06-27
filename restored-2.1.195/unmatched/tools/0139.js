// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ksn
// matched 2.1.88 source: node_modules/fflate/esm/index.mjs
// class=new  jaccard=0.0243  score=0.8692  fileCov=0.0244
// note: nearest: node_modules/fflate/esm/index.mjs (0.0243); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Wb = e => {
  if (typeof globalThis.process !== "undefined") return globalThis.process.env?.[e]?.trim() || void 0;
  if (typeof globalThis.Deno !== "undefined") return globalThis.Deno.env?.get?.(e)?.trim() || void 0;
  return;
};
function ios(e) {
  let t = 0;
  for (let o of e) t += o.length;
  let n = new Uint8Array(t),
    r = 0;
  for (let o of e) n.set(o, r), r += o.length;
  return n;
}
function vJe(e) {
  let t;
  return (oos ?? (t = new globalThis.TextEncoder(), oos = t.encode.bind(t)))(e);
}
function vSr(e) {
  let t;
  return (sos ?? (t = new globalThis.TextDecoder(), sos = t.decode.bind(t)))(e);
}
var oos, sos;