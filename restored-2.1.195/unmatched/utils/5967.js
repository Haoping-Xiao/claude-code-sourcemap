// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UJo
// matched 2.1.88 source: node_modules/@modelcontextprotocol/sdk/dist/esm/client/auth.js
// class=new  jaccard=0.0333  score=0.1188  fileCov=0.0441
// note: nearest: node_modules/@modelcontextprotocol/sdk/dist/esm/client/auth.js (0.0333); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var UJo = Q((TzH, R4c) => {
  var I4c = (fgr(), ro(pgr)),
    {
      RPError: BJo
    } = Xme(),
    {
      assertIssuerConfiguration: vPm
    } = mgr(),
    {
      random: wPm
    } = Mnn(),
    CPm = Pnn(),
    IPm = zvt(),
    {
      keystores: xPm
    } = Tgr(),
    kPm = C4c(),
    x4c = e => encodeURIComponent(e).replace(/%20/g, "+");
  async function RPm(e, t) {
    let n = this[`${e}_endpoint_auth_signing_alg`];
    if (!n) vPm(this.issuer, `${e}_endpoint_auth_signing_alg_values_supported`);
    if (this[`${e}_endpoint_auth_method`] === "client_secret_jwt") {
      if (!n) {
        let s = this.issuer[`${e}_endpoint_auth_signing_alg_values_supported`];
        n = Array.isArray(s) && s.find(i => /^HS(?:256|384|512)/.test(i));
      }
      if (!n) throw new BJo(`failed to determine a JWS Algorithm to use for ${this[`${e}_endpoint_auth_method`]} Client Assertion`);
      return new I4c.CompactSign(Buffer.from(JSON.stringify(t))).setProtectedHeader({
        alg: n
      }).sign(this.secretForAlg(n));
    }
    let r = await xPm.get(this);
    if (!r) throw TypeError("no client jwks provided for signing a client assertion with");
    if (!n) {
      let s = this.issuer[`${e}_endpoint_auth_signing_alg_values_supported`];
      n = Array.isArray(s) && s.find(i => r.get({
        alg: i,
        use: "sig"
      }));
    }
    if (!n) throw new BJo(`failed to determine a JWS Algorithm to use for ${this[`${e}_endpoint_auth_method`]} Client Assertion`);
    let o = r.get({
      alg: n,
      use: "sig"
    });
    if (!o) throw new BJo(`no key found in client jwks to sign a client assertion with using alg ${n}`);
    return new I4c.CompactSign(Buffer.from(JSON.stringify(t))).setProtectedHeader({
      alg: n,
      kid: o.jwk && o.jwk.kid
    }).sign(await o.keyObject(n));
  }
  async function k4c(e, {
    clientAssertionPayload: t
  } = {}) {
    switch (this[`${e}_endpoint_auth_method`]) {
      case "self_signed_tls_client_auth":
      case "tls_client_auth":
      case "none":
        return {
          form: {
            client_id: this.client_id
          }
        };
      case "client_secret_post":
        if (typeof this.client_secret !== "string") throw TypeError("client_secret_post client authentication method requires a client_secret");
        return {
          form: {
            client_id: this.client_id,
            client_secret: this.client_secret
          }
        };
      case "private_key_jwt":
      case "client_secret_jwt":
        {
          let r = CPm(),
            o = await RPm.call(this, e, {
              iat: r,
              exp: r + 60,
              jti: wPm(),
              iss: this.client_id,
              sub: this.client_id,
              aud: this.issuer.issuer,
              ...t
            });
          return {
            form: {
              client_id: this.client_id,
              client_assertion: o,
              client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer"
            }
          };
        }
      case "client_secret_basic":
        {
          if (typeof this.client_secret !== "string") throw TypeError("client_secret_basic client authentication method requires a client_secret");
          let r = `${x4c(this.client_id)}:${x4c(this.client_secret)}`;
          return {
            headers: {
              Authorization: `Basic ${Buffer.from(r).toString("base64")}`
            }
          };
        }
      default:
        throw TypeError(`missing, or unsupported, ${e}_endpoint_auth_method`);
    }
  }
  function LPm() {
    let {
      length: e,
      0: t
    } = this.response_types;
    if (e === 1) return t;
    return;
  }
  function DPm() {
    let {
      length: e,
      0: t
    } = this.redirect_uris || [];
    if (e === 1) return t;
    return;
  }
  async function PPm(e, t, {
    clientAssertionPayload: n,
    endpointAuthMethod: r = e,
    DPoP: o
  } = {}) {
    let s = await k4c.call(this, r, {
        clientAssertionPayload: n
      }),
      i = kPm(t, s),
      a = this[`${r}_endpoint_auth_method`].includes("tls_client_auth") || e === "token" && this.tls_client_certificate_bound_access_tokens,
      l;
    if (a && this.issuer.mtls_endpoint_aliases) l = this.issuer.mtls_endpoint_aliases[`${e}_endpoint`];
    if (l = l || this.issuer[`${e}_endpoint`], "form" in i) {
      for (let [c, u] of Object.entries(i.form)) if (typeof u > "u") delete i.form[c];
    }
    return IPm.call(this, {
      ...i,
      method: "POST",
      url: l,
      headers: {
        ...(e !== "revocation" ? {
          Accept: "application/json"
        } : void 0),
        ...i.headers
      }
    }, {
      mTLS: a,
      DPoP: o
    });
  }
  R4c.exports = {
    resolveResponseType: LPm,
    resolveRedirectUri: DPm,
    authFor: k4c,
    authenticatedPost: PPm
  };
});