// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jjr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Jjr = E(() => {
  Xjr();
});
var lxe = e => {
  if (typeof e === "string") return cMt(e);
  if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  return new Uint8Array(e);
};