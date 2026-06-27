// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mjc
// matched 2.1.88 source: src/utils/env.ts
// class=new  jaccard=0.0119  score=0.4586  fileCov=0.0121
// note: nearest: src/utils/env.ts (0.0119); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var mjc = E(() => {
  wm();
  fjc = ODm;
});
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