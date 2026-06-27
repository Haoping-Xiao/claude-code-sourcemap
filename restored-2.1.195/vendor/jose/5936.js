// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Sjc
// matched 2.1.88 source: node_modules/node-forge/lib/util.js
// class=vendor  jaccard=0.0113  score=0.1683  fileCov=0.012
// note: identified by fingerprint: jose; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function Ejc(e) {
  if (typeof e !== "string") throw new sD("JWTs must use Compact JWS serialization, JWT must be a string");
  let {
    1: t,
    length: n
  } = e.split(".");
  if (n === 5) throw new sD("Only JWTs using Compact JWS serialization can be decoded");
  if (n !== 3) throw new sD("Invalid JWT");
  if (!t) throw new sD("JWTs must contain a payload");
  let r;
  try {
    r = knn(t);
  } catch (s) {
    throw new sD("Failed to base64url decode the payload");
  }
  let o;
  try {
    o = JSON.parse(fx.decode(r));
  } catch (s) {
    throw new sD("Failed to parse the decoded payload as JSON");
  }
  if (!eb(o)) throw new sD("Invalid JWT Claims Set");
  return o;
}