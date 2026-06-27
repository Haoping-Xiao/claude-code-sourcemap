// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Dbe
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Dbe = E(() => {
  U_ = hZd();
});
function qlt(e, t, n) {
  if (t === n) return !0;
  if (e == pr.BYTES) {
    if (!(t instanceof Uint8Array) || !(n instanceof Uint8Array)) return !1;
    if (t.length !== n.length) return !1;
    for (let r = 0; r < t.length; r++) if (t[r] !== n[r]) return !1;
    return !0;
  }
  switch (e) {
    case pr.UINT64:
    case pr.FIXED64:
    case pr.INT64:
    case pr.SFIXED64:
    case pr.SINT64:
      return t == n;
  }
  return !1;
}
function zne(e, t) {
  switch (e) {
    case pr.STRING:
      return "";
    case pr.BOOL:
      return !1;
    case pr.DOUBLE:
    case pr.FLOAT:
      return 0;
    case pr.INT64:
    case pr.UINT64:
    case pr.SFIXED64:
    case pr.FIXED64:
    case pr.SINT64:
      return t ? "0" : U_.zero;
    case pr.BYTES:
      return new Uint8Array(0);
    default:
      return 0;
  }
}
function SQi(e, t) {
  switch (e) {
    case pr.BOOL:
      return t === !1;
    case pr.STRING:
      return t === "";
    case pr.BYTES:
      return t instanceof Uint8Array && !t.byteLength;
    default:
      return t == 0;
  }
}