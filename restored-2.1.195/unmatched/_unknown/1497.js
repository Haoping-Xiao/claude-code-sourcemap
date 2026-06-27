// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xii
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xii = Q(cHn => {
  Object.defineProperty(cHn, "__esModule", {
    value: !0
  });
  cHn.convertToBuffer = void 0;
  var $fd = Njr(),
    Ofd = typeof Buffer < "u" && Buffer.from ? function (e) {
      return Buffer.from(e, "utf8");
    } : $fd.fromUtf8;
  function Nfd(e) {
    if (e instanceof Uint8Array) return e;
    if (typeof e === "string") return Ofd(e);
    if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    return new Uint8Array(e);
  }
  cHn.convertToBuffer = Nfd;
});