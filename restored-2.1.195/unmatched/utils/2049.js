// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Z4e
// matched 2.1.88 source: node_modules/undici/lib/web/fetch/util.js
// class=new  jaccard=0.0265  score=0.3345  fileCov=0.0279
// note: nearest: node_modules/undici/lib/web/fetch/util.js (0.0265); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Z4e = E(() => {
  oke();
  H1t();
  vy();
  fn();
  At();
  vn();
  Is();
  Mh();
  R9();
  dr();
  Jt();
  dn();
  I8r();
  R8r();
  Dwi = require("crypto"), Pwi = require("http"), Mwi = require("url");
});
async function hIn() {
  return (await wl().readAsync())?.mcpOAuth;
}
function wv(e, t) {
  let n = De({
      type: t.type,
      url: t.url,
      headers: t.headers || {}
    }),
    r = Fwi.createHash("sha256").update(n).digest("hex").substring(0, 16);
  return `${e}|${r}`;
}
function e3e(e) {
  return Object.keys(e.headers ?? {}).some(t => t.toLowerCase() === "authorization");
}
function X9(e) {
  try {
    let t = new URL(e);
    return t.protocol === "https:" && Ant(t.href) && IRd.some(n => t.pathname.startsWith(n));
  } catch {
    return false;
  }
}
function yIn(e) {
  if (y7() && e.oauth?.xaa) return true;
  if (e.headersHelper || e.headers && Object.keys(e.headers).length > 0) return true;
  if (X9(e.url)) return true;
  return false;
}
function _In(e, t) {
  return e3e(e) || X9(e.url) && Jl() && t;
}
function bIn(e, t, n) {
  if (yIn(t)) return false;
  let r = n?.[wv(e, t)];
  return r !== void 0 && !r.accessToken && !r.refreshToken && r.discoveryState?.oauthMetadataFound === true;
}
function jwi(e, t, n) {
  if (yIn(t)) return false;
  let r = n?.[wv(e, t)];
  return r !== void 0 && !!r.accessToken && !r.refreshToken && r.expiresAt !== void 0 && r.expiresAt < Date.now();
}
var Fwi, IRd;