// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mjc
// matched 2.1.88 source: node_modules/@mixmark-io/domino/lib/NavigatorID.js
// class=partial  jaccard=0.0628  score=0.2544  fileCov=0.077
// note: low-confidence suggestion: node_modules/@mixmark-io/domino/lib/NavigatorID.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module mjc] deps: wm
fjc = ODm;
function NDm() {
  return typeof WebSocketPair !== "undefined" || typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers" || typeof EdgeRuntime !== "undefined" && EdgeRuntime === "vercel";
}
function hjc(e, t) {
  let n = new gjc(e, t);
  return async function (r, o) {
    return n.getKey(r, o);
  };
}
var gjc;