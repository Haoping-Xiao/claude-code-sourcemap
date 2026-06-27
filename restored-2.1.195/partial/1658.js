// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module k3r
// matched 2.1.88 source: node_modules/@typespec/ts-http-runtime/dist/esm/policies/defaultRetryPolicy.js
// class=partial  jaccard=0.1795  score=0.5  fileCov=0.2187
// note: low-confidence suggestion: node_modules/@typespec/ts-http-runtime/dist/esm/policies/defaultRetryPolicy.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var k3r = E(() => {
  C3r();
  oTn();
  ZHn();
  Ggd = QHn("ts-http-runtime retryPolicy");
});
function L3r(e = {}) {
  var t;
  return {
    name: R3r,
    sendRequest: CMt([Vpi(), zpi(e)], {
      maxRetries: (t = e.maxRetries) !== null && t !== void 0 ? t : wMt
    }).sendRequest
  };
}
var R3r = "defaultRetryPolicy";