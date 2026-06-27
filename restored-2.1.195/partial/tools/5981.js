// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qvt
// matched 2.1.88 source: node_modules/pkce-challenge/dist/index.node.js
// class=partial  jaccard=0.0895  score=0.4068  fileCov=0.1029
// note: low-confidence suggestion: node_modules/pkce-challenge/dist/index.node.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function O3(e, t) {
  if (e) throw TypeError(`${t} can only be called once`);
}
function N3(e, t, n) {
  try {
    return ege(e);
  } catch {
    throw new n(`Failed to base64url decode the ${t}`);
  }
}
async function P3c(e, t) {
  let n = `SHA-${e.slice(-3)}`;
  return new Uint8Array(await crypto.subtle.digest(n, t));
}
var D3c;