// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Z4e
// matched 2.1.88 source: src/services/mcp/auth.ts
// class=new  jaccard=0.0068  score=0.7438  fileCov=0.0068
// note: nearest: src/services/mcp/auth.ts (0.0068); 0 renamed
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
    return !1;
  }
}
function yIn(e) {
  if (y7() && e.oauth?.xaa) return !0;
  if (e.headersHelper || e.headers && Object.keys(e.headers).length > 0) return !0;
  if (X9(e.url)) return !0;
  return !1;
}
function _In(e, t) {
  return e3e(e) || X9(e.url) && Jl() && t;
}
function bIn(e, t, n) {
  if (yIn(t)) return !1;
  let r = n?.[wv(e, t)];
  return r !== void 0 && !r.accessToken && !r.refreshToken && r.discoveryState?.oauthMetadataFound === !0;
}
function jwi(e, t, n) {
  if (yIn(t)) return !1;
  let r = n?.[wv(e, t)];
  return r !== void 0 && !!r.accessToken && !r.refreshToken && r.expiresAt !== void 0 && r.expiresAt < Date.now();
}
var Fwi, IRd;