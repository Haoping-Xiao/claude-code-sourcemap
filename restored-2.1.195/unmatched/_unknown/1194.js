// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module C8s
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var C8s = E(() => {
  VNr();
  v8s();
  w8s();
});
function zNr(e) {
  if (e instanceof Uint8Array) return e;
  if (typeof e === "string") return eod(e);
  if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  return new Uint8Array(e);
}
var eod;