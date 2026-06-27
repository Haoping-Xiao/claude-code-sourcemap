// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Z4e
// class=vendor  (no 2.1.88 match)
// note: identified by fingerprint: axios; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Z4e] deps: utils/browser.ts, @modelcontextprotocol/sdk/dist/esm/shared/auth.js, @mixmark-io/domino/lib/htmlelts.js, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/sequential.ts, utils/platform.ts, utils/proxy.ts, utils/errors.ts, utils/settings/settings.ts, utils/fsOperations.ts, dn, services/mcp/oauthPort.ts, services/mcp/xaaIdpLogin.ts
Dwi = require("crypto"), Pwi = require("http"), Mwi = require("url");
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