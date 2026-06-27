// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module t2t
// matched 2.1.88 source: node_modules/yaml/dist/parse/parser.js
// class=new  jaccard=0.0287  score=0.4448  fileCov=0.0298
// note: nearest: node_modules/yaml/dist/parse/parser.js (0.0287); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var t2t = E(() => {
  ERe();
  ZFt();
  nct();
  TWe();
  Qne();
  B$n();
  SX();
  _ue();
});
function CWe(e) {
  if (gue(e)) return new rta(e);
  return new nta(e);
}
function tta(...e) {
  return new ota(e);
}
function Gbe(e) {
  return typeof e === "object" && e !== null && U$n in e;
}
function eta(e, t) {
  switch (e.listKind) {
    case "enum":
      return BigInt(t);
    case "message":
      return e2t(t);
    case "scalar":
      return JFt(e.scalar, t);
  }
}
var U$n, nta, rta, ota, JSy;