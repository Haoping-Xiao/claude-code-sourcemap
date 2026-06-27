// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aui
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var aui = Q(xHn => {
  Object.defineProperty(xHn, "__esModule", {
    value: true
  });
  xHn.convertToBuffer = void 0;
  var tmd = Njr(),
    nmd = typeof Buffer !== "undefined" && Buffer.from ? function (e) {
      return Buffer.from(e, "utf8");
    } : tmd.fromUtf8;
  function rmd(e) {
    if (e instanceof Uint8Array) return e;
    if (typeof e === "string") return nmd(e);
    if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    return new Uint8Array(e);
  }
  xHn.convertToBuffer = rmd;
});