// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module I8s
// matched 2.1.88 source: node_modules/sharp/lib/input.js
// class=new  jaccard=0.0109  score=0.8757  fileCov=0.0109
// note: nearest: node_modules/sharp/lib/input.js (0.0109); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module I8s] deps: C8s
eod = typeof Buffer !== "undefined" && Buffer.from ? function (e) {
  return Buffer.from(e, "utf8");
} : qNr;
function KNr(e) {
  if (typeof e === "string") return e.length === 0;
  return e.byteLength === 0;
}
function YNr(e) {
  return new Uint8Array([(e & 4278190080) >> 24, (e & 16711680) >> 16, (e & 65280) >> 8, e & 255]);
}
function XNr(e) {
  if (!Uint32Array.from) {
    var t = new Uint32Array(e.length),
      n = 0;
    while (n < e.length) t[n] = e[n], n += 1;
    return t;
  }
  return Uint32Array.from(e);
}