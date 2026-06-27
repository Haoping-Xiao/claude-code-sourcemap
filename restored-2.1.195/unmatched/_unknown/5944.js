// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Njc
// matched 2.1.88 source: src/services/mcp/xaaIdpLogin.ts
// class=new  jaccard=0.0152  score=0.3451  fileCov=0.0156
// note: nearest: src/services/mcp/xaaIdpLogin.ts (0.0152); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Njc = Q((tzH, Ojc) => {
  var {
      strict: SJo
    } = require("assert"),
    {
      createHash: Rnn
    } = require("crypto"),
    {
      format: Mjc
    } = require("util"),
    WDm = Pjc(),
    EJo;
  if (Buffer.isEncoding("base64url")) EJo = e => e.toString("base64url");else {
    let e = t => t.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    EJo = t => e(t.toString("base64"));
  }
  function qDm(e, t) {
    switch (e) {
      case "HS256":
      case "RS256":
      case "PS256":
      case "ES256":
      case "ES256K":
        return Rnn("sha256");
      case "HS384":
      case "RS384":
      case "PS384":
      case "ES384":
        return Rnn("sha384");
      case "HS512":
      case "RS512":
      case "PS512":
      case "ES512":
        return Rnn("sha512");
      case "EdDSA":
        switch (t) {
          case "Ed25519":
            return Rnn("sha512");
          case "Ed448":
            if (!WDm) throw TypeError("Ed448 *_hash calculation is not supported in your Node.js runtime version");
            return Rnn("shake256", {
              outputLength: 114
            });
          default:
            throw TypeError("unrecognized or invalid EdDSA curve provided");
        }
      default:
        throw TypeError("unrecognized or invalid JWS algorithm provided");
    }
  }
  function $jc(e, t, n) {
    let r = qDm(t, n).update(e).digest();
    return EJo(r.slice(0, r.length / 2));
  }
  function VDm(e, t, n, r, o) {
    if (typeof e.claim !== "string" || !e.claim) throw TypeError("names.claim must be a non-empty string");
    if (typeof e.source !== "string" || !e.source) throw TypeError("names.source must be a non-empty string");
    SJo(typeof t === "string" && t, `${e.claim} must be a non-empty string`), SJo(typeof n === "string" && n, `${e.source} must be a non-empty string`);
    let s, i;
    try {
      s = $jc(n, r, o);
    } catch (a) {
      i = Mjc("%s could not be validated (%s)", e.claim, a.message);
    }
    i = i || Mjc("%s mismatch, expected %s, got: %s", e.claim, s, t), SJo.equal(s, t, i);
  }
  Ojc.exports = {
    validate: VDm,
    generate: $jc
  };
});