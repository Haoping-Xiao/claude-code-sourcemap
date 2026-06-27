// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kpi
// matched 2.1.88 source: node_modules/@azure/core-client/dist/esm/pipeline.js
// class=partial  jaccard=0.1251  score=0.6342  fileCov=0.1348
// note: low-confidence suggestion: node_modules/@azure/core-client/dist/esm/pipeline.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var kpi = E(() => {
  xpi = new Set(["Deserialize", "Serialize", "Retry", "Sign"]);
});
function EMt(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e) && !(e instanceof RegExp) && !(e instanceof Date);
}
function vje(e) {
  if (EMt(e)) {
    let t = typeof e.name === "string",
      n = typeof e.message === "string";
    return t && n;
  }
  return false;
}
var h3r = () => {};
var Rpi, Lpi;