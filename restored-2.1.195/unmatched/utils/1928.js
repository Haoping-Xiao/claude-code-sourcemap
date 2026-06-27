// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Aqr
// matched 2.1.88 source: node_modules/@azure/identity/dist/esm/credentials/managedIdentityCredential/index.js
// class=new  jaccard=0.0235  score=0.5216  fileCov=0.024
// note: nearest: node_modules/@azure/identity/dist/esm/credentials/managedIdentityCredential/index.js (0.0235); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Aqr = E(() => {
  Tje();
  hwn();
  OMt();
  $D();
  bwn();
  pEi();
  UE();
  l1();
  fEi();
  zEi();
  O9 = zp("ManagedIdentityCredential");
});
function N9(e) {
  return Array.isArray(e) ? e : [e];
}
function yot(e, t) {
  if (!e.match(/^[0-9a-zA-Z-_.:/]+$/)) {
    let n = Error("Invalid scope was specified by the user or calling client");
    throw t.getToken.info(uh(e, n)), n;
  }
}
function Cwn(e) {
  return e.replace(/\/.default$/, "");
}