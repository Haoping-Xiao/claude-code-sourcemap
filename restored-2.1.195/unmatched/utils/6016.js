// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module awt
// matched 2.1.88 source: src/services/mcp/xaa.ts
// class=new  jaccard=0.0375  score=0.1675  fileCov=0.046
// note: nearest: src/services/mcp/xaa.ts (0.0375); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var awt = E(() => {
  fn();
  BZ();
  Kgr = require("dns"), Ygr = R(QQo(), 1), ZGc = require("tls");
  y$m = new Set(["metadata.google.internal", "metadata.goog", "metadata"]);
});
function _$m(e) {
  for (let t of [e.jwks_uri, e.token_endpoint, e.userinfo_endpoint]) if (t && !UZ(t)) throw Error(`OIDC discovery returned a blocked endpoint: ${t}`);
}
async function nWc(e) {
  let t = e.ca_cert_pem ? Buffer.from(e.ca_cert_pem) : void 0,
    n = (i, a) => ({
      ...a,
      lookup: eWc,
      ...(t && {
        ca: t
      })
    });
  gQo[xgr.http_options] = n;
  let r = await gQo.discover(e.discovery_url ?? e.issuer);
  _$m(r.metadata);
  let o = r.metadata.token_endpoint_auth_methods_supported,
    s = new r.Client({
      client_id: e.client_id,
      client_secret: e.client_secret,
      response_types: ["code"],
      token_endpoint_auth_method: e.token_endpoint_auth_method ?? (o && !o.includes("client_secret_post") ? "client_secret_basic" : "client_secret_post"),
      ...(e.id_token_signed_response_alg && {
        id_token_signed_response_alg: e.id_token_signed_response_alg
      })
    }, void 0, e.additional_authorized_parties ? {
      additionalAuthorizedParties: e.additional_authorized_parties
    } : void 0);
  if (s[xgr.http_options] = n, e.clock_skew_seconds !== void 0) s[xgr.clock_tolerance] = e.clock_skew_seconds;
  return s;
}
function rWc(e, t) {
  let n = e.email_verified;
  if (n !== void 0 && n !== !0 && n !== "true") throw Error("id_token email is not verified");
  if (!t?.length) return;
  let r = e.email;
  if (typeof r !== "string" || !r.includes("@")) throw Error("id_token missing email claim \u2014 configure your IdP to include `email` " + "in the id_token, or set oidc.email_claim if it uses a different claim name");
  let o = r.slice(r.lastIndexOf("@") + 1).toLowerCase();
  if (!t.includes(o)) throw Error("email domain not allowed");
}
function oWc(e, t) {
  if (!t?.length) return;
  let n = new Set(t);
  if (!e?.some(r => n.has(r))) throw Error("user is not a member of an allowed group");
}
function Xgr(e, t) {
  if (!t.startsWith("/")) return e[t];
  let n = e;
  for (let r of t.slice(1).split("/")) {
    if (n === null || typeof n !== "object") return;
    let o = r.replace(/~1/g, "/").replace(/~0/g, "~");
    n = n[o];
  }
  return n;
}
function Jgr(e, t) {
  let n = Array.isArray(t) ? t : [t];
  for (let r of n) {
    let o = Xgr(e, r);
    if (o !== void 0 && o !== null) return o;
  }
  return;
}