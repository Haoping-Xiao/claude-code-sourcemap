// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Cre
// matched 2.1.88 source: src/services/mcp/auth.ts
// class=modified  jaccard=0.0269  score=0.322  fileCov=0.0286
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Cre = E(() => {
  oke();
  h8r();
  H1t();
  Hp();
  Sae();
  Rc();
  db();
  vy();
  At();
  vn();
  Is();
  Mh();
  R9();
  S9();
  Jt();
  dn();
  kt();
  gSe();
  cco();
  Yle();
  I8r();
  R8r();
  g$();
  BCa();
  Z4e();
  ((VUn = require("crypto")),
    (WCa = require("http")),
    (qCa = require("path")),
    (VCa = require("url")),
    (qTp = new Set([...que, ...out, "ETIMEDOUT"])));
  KTp = ["state", "nonce", "code_challenge", "code_verifier", "code"];
  YTp = new Set(["invalid_refresh_token", "expired_refresh_token", "token_expired"]);
  N4 = class N4 extends Error {
    constructor() {
      super("Authentication was cancelled");
      this.name = "AuthenticationCancelledError";
    }
  };
  ((UUn = new Map()), (FUn = new Map()));
  jUn = new Map();
  ((QTp = [
    "login.microsoftonline.com",
    "login.microsoftonline.us",
    "login.partner.microsoftonline.cn",
    "login.chinacloudapi.cn",
  ]),
    (ZTp = [".b2clogin.com", ".ciamlogin.com"]));
});
function XCa(e) {
  return e.toLowerCase().replace(/\.$/, "");
}
function tvp() {
  let e = at("tengu_mcp_local_oauth_blocked_hosts", {
      hosts: YCa,
    }),
    t = YCa;
  if (e !== null && typeof e === "object" && "hosts" in e && Array.isArray(e.hosts)) {
    let n = e.hosts.filter((r) => typeof r === "string");
    if (n.length > 0) t = n;
  }
  return new Set(t.map(XCa));
}
function JCa(e) {
  if (!e) return false;
  try {
    let t = XCa(new URL(e).hostname);
    return tvp().has(t);
  } catch {
    return false;
  }
}
function QCa(e, t = {}) {
  let n =
      `"${e}" is Anthropic-hosted and doesn't support local OAuth. ` +
      "Connect it via Settings \u2192 Connectors on claude.ai (requires " +
      "`claude login`), then it'll be available here automatically.",
    o =
      t.scope === "local" || t.scope === "project" || t.scope === "user"
        ? xy("mcp remove", e)
        : null;
  return o ? `${n} Remove the stale entry with: \`${o}\`` : n;
}
var YCa;
