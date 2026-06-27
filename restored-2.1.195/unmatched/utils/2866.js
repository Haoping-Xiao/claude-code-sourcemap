// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tA
// matched 2.1.88 source: node_modules/fast-xml-parser/lib/fxp.cjs
// class=new  jaccard=0.0107  score=0.4997  fileCov=0.0108
// note: nearest: node_modules/fast-xml-parser/lib/fxp.cjs (0.0107); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var tA = E(() => {
  ft();
  qao = require("crypto");
  fua = yup, DNn = new Map();
});
function ec(e) {
  return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function ip(e) {
  return ec(e).replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}
function HLe(e, t) {
  return t.replace(new RegExp(`</(?=${e}(?:[>\\s/]|$))`, "gi"), "<\\/");
}
function Yao(e) {
  return e.replace(Sup, t => gua[t] ?? t);
}
function TLe(e) {
  return e.replace(Eup, t => Aup[t] ?? t);
}
var Sup, gua, Eup, Aup;