// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qvt
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Qvt = E(() => {
  sK();
  AR();
});
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