// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vno
// matched 2.1.88 source: node_modules/@smithy/core/dist-cjs/submodules/cbor/index.js
// class=new  jaccard=0.0194  score=0.191  fileCov=0.0212
// note: nearest: node_modules/@smithy/core/dist-cjs/submodules/cbor/index.js (0.0194); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function QFt(e) {
  if (hue(e)) return new zea(e);
  return new Vea(e);
}
function Fbe(e) {
  return typeof e === "object" && e !== null && Kno in e;
}
function qea(e, t) {
  if ($1(t)) t = t.value;
  switch (e.mapKey) {
    case pr.SINT32:
    case pr.INT32:
    case pr.FIXED32:
    case pr.UINT32:
    case pr.SFIXED32:
      if (typeof t === "bigint") return Number(t);
      return t;
    case pr.SINT64:
    case pr.INT64:
    case pr.FIXED64:
    case pr.UINT64:
    case pr.SFIXED64:
      if (t === "number" && Number.isInteger(t)) return BigInt(t);
      return t;
    default:
      return t;
  }
}
function zno(e, t) {
  return JFt(e.mapKey, t);
}
function N$n(e, t) {
  switch (e.mapKind) {
    case "enum":
      return BigInt(t);
    case "message":
      return e2t(t);
    case "scalar":
      return JFt(e.scalar, t);
  }
}
var Kno, Vea, zea, kSy;