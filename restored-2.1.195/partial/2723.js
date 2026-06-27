// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vno
// matched 2.1.88 source: node_modules/yaml/dist/visit.js
// class=partial  jaccard=0.1458  score=0.5436  fileCov=0.1661
// note: low-confidence suggestion: node_modules/yaml/dist/visit.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Vno = E(() => {
  Qne();
  ERe();
});
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