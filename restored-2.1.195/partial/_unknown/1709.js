// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qmi
// matched 2.1.88 source: node_modules/@azure/core-client/dist/esm/deserializationPolicy.js
// class=partial  jaccard=0.0797  score=0.5592  fileCov=0.0851
// note: low-confidence suggestion: node_modules/@azure/core-client/dist/esm/deserializationPolicy.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Qmi = E(() => {
  Hle();
  vTn();
  PMt();
  Xhd = ["application/json", "text/json"], Jhd = ["application/xml", "application/atom+xml"];
});
function Zmi(e) {
  let t = new Set();
  for (let n in e.responses) {
    let r = e.responses[n];
    if (r.bodyMapper && r.bodyMapper.type.name === kye.Stream) t.add(Number(n));
  }
  return t;
}
function Tle(e) {
  let {
      parameterPath: t,
      mapper: n
    } = e,
    r;
  if (typeof t === "string") r = t;else if (Array.isArray(t)) r = t.join(".");else r = n.serializedName;
  return r;
}