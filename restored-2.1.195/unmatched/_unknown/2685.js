// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Dbe
// matched 2.1.88 source: node_modules/node-forge/lib/util.js
// class=new  jaccard=0.0119  score=0.1482  fileCov=0.0128
// note: nearest: node_modules/node-forge/lib/util.js (0.0119); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Dbe = E(() => {
  U_ = hZd();
});
function qlt(e, t, n) {
  if (t === n) return true;
  if (e == pr.BYTES) {
    if (!(t instanceof Uint8Array) || !(n instanceof Uint8Array)) return false;
    if (t.length !== n.length) return false;
    for (let r = 0; r < t.length; r++) if (t[r] !== n[r]) return false;
    return true;
  }
  switch (e) {
    case pr.UINT64:
    case pr.FIXED64:
    case pr.INT64:
    case pr.SFIXED64:
    case pr.SINT64:
      return t == n;
  }
  return false;
}
function zne(e, t) {
  switch (e) {
    case pr.STRING:
      return "";
    case pr.BOOL:
      return false;
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
      return t === false;
    case pr.STRING:
      return t === "";
    case pr.BYTES:
      return t instanceof Uint8Array && !t.byteLength;
    default:
      return t == 0;
  }
}