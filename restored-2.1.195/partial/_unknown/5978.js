// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sK
// matched 2.1.88 source: src/bridge/workSecret.ts
// class=partial  jaccard=0.0616  score=0.4661  fileCov=0.0663
// note: low-confidence suggestion: src/bridge/workSecret.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var sK = E(() => {
  rXe = new TextEncoder(), oK = new TextDecoder();
});
function _Qo(e) {
  if (Uint8Array.prototype.toBase64) return e.toBase64();
  let t = 32768,
    n = [];
  for (let r = 0; r < e.length; r += t) n.push(String.fromCharCode.apply(null, e.subarray(r, r + t)));
  return btoa(n.join(""));
}
function Lgr(e) {
  if (Uint8Array.fromBase64) return Uint8Array.fromBase64(e);
  let t = atob(e),
    n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n;
}
function ege(e) {
  if (Uint8Array.fromBase64) return Uint8Array.fromBase64(typeof e === "string" ? e : oK.decode(e), {
    alphabet: "base64url"
  });
  let t = e;
  if (t instanceof Uint8Array) t = oK.decode(t);
  t = t.replace(/-/g, "+").replace(/_/g, "/");
  try {
    return Lgr(t);
  } catch {
    throw TypeError("The input to be decoded is not correctly encoded.");
  }
}
function ER(e) {
  let t = e;
  if (typeof t === "string") t = rXe.encode(t);
  if (Uint8Array.prototype.toBase64) return t.toBase64({
    alphabet: "base64url",
    omitPadding: true
  });
  return _Qo(t).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}