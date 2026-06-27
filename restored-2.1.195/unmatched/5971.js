// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cQo
// matched 2.1.88 source: src/services/mcp/auth.ts
// class=new  jaccard=0.0255  score=0.0615  fileCov=0.0417
// note: nearest: src/services/mcp/auth.ts (0.0255); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var cQo = Q((CzH, lQo) => {
  var {
      inspect: z4c
    } = require("util"),
    WPm = require("http"),
    VJo = require("crypto"),
    {
      strict: zJo
    } = require("assert"),
    rQo = require("querystring"),
    oQo = require("url"),
    {
      URL: K4c,
      URLSearchParams: Y4c
    } = require("url"),
    fV = (fgr(), ro(pgr)),
    KJo = Njc(),
    i3c = Ujc(),
    qPm = Gjc(),
    wgr = Lnn(),
    X4c = CJo(),
    VPm = IJo(),
    {
      assertSigningAlgValuesSupport: J4c,
      assertIssuerConfiguration: OZ
    } = mgr(),
    sQo = ggr(),
    tBe = Dnn(),
    ZNe = ygr(),
    pV = kJo(),
    {
      OPError: YJo,
      RPError: Ku
    } = Xme(),
    XJo = Pnn(),
    {
      random: Q4c
    } = Mnn(),
    JJo = zvt(),
    {
      CLOCK_TOLERANCE: lie
    } = Egr(),
    {
      keystores: QJo
    } = Tgr(),
    zPm = OJo(),
    Z4c = Nnn(),
    {
      authenticatedPost: Fnn,
      resolveResponseType: KPm,
      resolveRedirectUri: YPm
    } = UJo(),
    {
      queryKeyStore: e3c
    } = qJo(),
    XPm = V4c(),
    [t3c, JPm] = process.version.slice(1).split(".").map(e => parseInt(e, 10)),
    QPm = t3c >= 17 || t3c === 16 && JPm >= 9,
    ZJo = Symbol(),
    n3c = Symbol(),
    r3c = Symbol();
  function eBe(e) {
    return sQo(e, "access_token", "code", "error_description", "error_uri", "error", "expires_in", "id_token", "iss", "response", "session_state", "state", "token_type");
  }
  function eQo(e, t = "Bearer") {
    return `${t} ${e}`;
  }
  function tQo(e) {
    let t = oQo.parse(e);
    if (!t.search) return {};
    return rQo.parse(t.search.substring(1));
  }
  function ZPm(e, t, n) {
    if (e[n] === void 0) throw new Ku({
      message: `missing required JWT property ${n}`,
      jwt: t
    });
  }
  function Cgr(e) {
    let t = {
      client_id: this.client_id,
      scope: "openid",
      response_type: KPm.call(this),
      redirect_uri: YPm.call(this),
      ...e
    };
    return Object.entries(t).forEach(([n, r]) => {
      if (r === null || r === void 0) delete t[n];else if (n === "claims" && typeof r === "object") t[n] = JSON.stringify(r);else if (n === "resource" && Array.isArray(r)) t[n] = r;else if (typeof r !== "string") t[n] = String(r);
    }), t;
  }
  function o3c(e) {
    if (!tBe(e) || !Array.isArray(e.keys) || e.keys.some(t => !tBe(t) || !("kty" in t))) throw TypeError("jwks must be a JSON Web Key Set formatted object");
    return zPm.fromJWKS(e, {
      onlyPrivate: !0
    });
  }
  function eMm(e, t) {
    try {
      let n = e.issuer.token_endpoint_auth_methods_supported;
      if (!n.includes(t.token_endpoint_auth_method)) {
        if (n.includes("client_secret_post")) t.token_endpoint_auth_method = "client_secret_post";
      }
    } catch (n) {}
  }
  function tMm(e, t, n) {
    if (!t.token_endpoint_auth_method) eMm(e, n);
    if (t.redirect_uri) {
      if (t.redirect_uris) throw TypeError("provide a redirect_uri or redirect_uris, not both");
      n.redirect_uris = [t.redirect_uri], delete n.redirect_uri;
    }
    if (t.response_type) {
      if (t.response_types) throw TypeError("provide a response_type or response_types, not both");
      n.response_types = [t.response_type], delete n.response_type;
    }
  }
  function nMm(e, t, n) {
    if (!t[`${e}_endpoint`]) return;
    let {
        token_endpoint_auth_method: r,
        token_endpoint_auth_signing_alg: o
      } = n,
      s = `${e}_endpoint_auth_method`,
      i = `${e}_endpoint_auth_signing_alg`;
    if (n[s] === void 0 && n[i] === void 0) {
      if (r !== void 0) n[s] = r;
      if (o !== void 0) n[i] = o;
    }
  }
  class aQo {
    #e;
    #t;
    #n;
    #r;
    constructor(e, t, n = {}, r, o) {
      if (this.#e = new Map(), this.#t = e, this.#n = t, typeof n.client_id !== "string" || !n.client_id) throw TypeError("client_id is required");
      let s = {
        grant_types: ["authorization_code"],
        id_token_signed_response_alg: "RS256",
        authorization_signed_response_alg: "RS256",
        response_types: ["code"],
        token_endpoint_auth_method: "client_secret_basic",
        ...(this.fapi1() ? {
          grant_types: ["authorization_code", "implicit"],
          id_token_signed_response_alg: "PS256",
          authorization_signed_response_alg: "PS256",
          response_types: ["code id_token"],
          tls_client_certificate_bound_access_tokens: !0,
          token_endpoint_auth_method: void 0
        } : void 0),
        ...(this.fapi2() ? {
          id_token_signed_response_alg: "PS256",
          authorization_signed_response_alg: "PS256",
          token_endpoint_auth_method: void 0
        } : void 0),
        ...n
      };
      if (this.fapi()) switch (s.token_endpoint_auth_method) {
        case "self_signed_tls_client_auth":
        case "tls_client_auth":
          break;
        case "private_key_jwt":
          if (!r) throw TypeError("jwks is required");
          break;
        case void 0:
          throw TypeError("token_endpoint_auth_method is required");
        default:
          throw TypeError("invalid or unsupported token_endpoint_auth_method");
      }
      if (this.fapi2()) {
        if (s.tls_client_certificate_bound_access_tokens && s.dpop_bound_access_tokens) throw TypeError("either tls_client_certificate_bound_access_tokens or dpop_bound_access_tokens must be set to true");
        if (!s.tls_client_certificate_bound_access_tokens && !s.dpop_bound_access_tokens) throw TypeError("either tls_client_certificate_bound_access_tokens or dpop_bound_access_tokens must be set to true");
      }
      if (tMm(this, n, s), J4c("token", this.issuer, s), ["introspection", "revocation"].forEach(i => {
        nMm(i, this.issuer, s), J4c(i, this.issuer, s);
      }), Object.entries(s).forEach(([i, a]) => {
        if (this.#e.set(i, a), !this[i]) Object.defineProperty(this, i, {
          get() {
            return this.#e.get(i);
          },
          enumerable: !0
        });
      }), r !== void 0) {
        let i = o3c.call(this, r);
        QJo.set(this, i);
      }
      if (o != null && o.additionalAuthorizedParties) this.#r = Z4c(o.additionalAuthorizedParties);
      this[lie] = 0;
    }
    authorizationUrl(e = {}) {
      if (!tBe(e)) throw TypeError("params must be a plain object");
      OZ(this.issuer, "authorization_endpoint");
      let t = new K4c(this.issuer.authorization_endpoint);
      for (let [n, r] of Object.entries(Cgr.call(this, e))) if (Array.isArray(r)) {
        t.searchParams.delete(n);
        for (let o of r) t.searchParams.append(n, o);
      } else t.searchParams.set(n, r);
      return t.href.replace(/\+/g, "%20");
    }
    authorizationPost(e = {}) {
      if (!tBe(e)) throw TypeError("params must be a plain object");
      let t = Cgr.call(this, e),
        n = Object.keys(t).map(r => `<input type="hidden" name="${r}" value="${t[r]}"/>`).join(`
`);
      return `<!DOCTYPE html>
<head>
<title>Requesting Authorization</title>
</head>
<body onload="javascript:document.forms[0].submit()">
<form method="post" action="${this.issuer.authorization_endpoint}">
  ${n}
</form>
</body>
</html>`;
    }
    endSessionUrl(e = {}) {
      OZ(this.issuer, "end_session_endpoint");
      let {
          0: t,
          length: n
        } = this.post_logout_redirect_uris || [],
        {
          post_logout_redirect_uri: r = n === 1 ? t : void 0
        } = e,
        o;
      if ({
        id_token_hint: o,
        ...e
      } = e, o instanceof pV) {
        if (!o.id_token) throw TypeError("id_token not present in TokenSet");
        o = o.id_token;
      }
      let s = oQo.parse(this.issuer.end_session_endpoint),
        i = X4c(tQo(this.issuer.end_session_endpoint), e, {
          post_logout_redirect_uri: r,
          client_id: this.client_id
        }, {
          id_token_hint: o
        });
      return Object.entries(i).forEach(([a, l]) => {
        if (l === null || l === void 0) delete i[a];
      }), s.search = null, s.query = i, oQo.format(s);
    }
    callbackParams(e) {
      let t = e instanceof WPm.IncomingMessage || e && e.method && e.url;
      if (typeof e !== "string" && !t) throw TypeError("#callbackParams only accepts string urls, http.IncomingMessage or a lookalike");
      if (t) switch (e.method) {
        case "GET":
          return eBe(tQo(e.url));
        case "POST":
          if (e.body === void 0) throw TypeError("incoming message body missing, include a body parser prior to this method call");
          switch (typeof e.body) {
            case "object":
            case "string":
              if (Buffer.isBuffer(e.body)) return eBe(rQo.parse(e.body.toString("utf-8")));
              if (typeof e.body === "string") return eBe(rQo.parse(e.body));
              return eBe(e.body);
            default:
              throw TypeError("invalid IncomingMessage body object");
          }
        default:
          throw TypeError("invalid IncomingMessage method");
      } else return eBe(tQo(e));
    }
    async callback(e, t, n = {}, {
      exchangeBody: r,
      clientAssertionPayload: o,
      DPoP: s
    } = {}) {
      let i = eBe(t);
      if (n.jarm && !("response" in t)) throw new Ku({
        message: "expected a JARM response",
        checks: n,
        params: i
      });else if ("response" in t) {
        let l = await this.decryptJARM(i.response);
        i = await this.validateJARM(l);
      }
      if (this.default_max_age && !n.max_age) n.max_age = this.default_max_age;
      if (i.state && !n.state) throw TypeError("checks.state argument is missing");
      if (!i.state && n.state) throw new Ku({
        message: "state missing from the response",
        checks: n,
        params: i
      });
      if (n.state !== i.state) throw new Ku({
        printf: ["state mismatch, expected %s, got: %s", n.state, i.state],
        checks: n,
        params: i
      });
      if ("iss" in i) {
        if (OZ(this.issuer, "issuer"), i.iss !== this.issuer.issuer) throw new Ku({
          printf: ["iss mismatch, expected %s, got: %s", this.issuer.issuer, i.iss],
          params: i
        });
      } else if (this.issuer.authorization_response_iss_parameter_supported && !("id_token" in i) && !("response" in t)) throw new Ku({
        message: "iss missing from the response",
        params: i
      });
      if (i.error) throw new YJo(i);
      let a = {
        code: ["code"],
        id_token: ["id_token"],
        token: ["access_token", "token_type"]
      };
      if (n.response_type) {
        for (let l of n.response_type.split(" ")) if (l === "none") {
          if (i.code || i.id_token || i.access_token) throw new Ku({
            message: 'unexpected params encountered for "none" response',
            checks: n,
            params: i
          });
        } else for (let c of a[l]) if (!i[c]) throw new Ku({
          message: `${c} missing from response`,
          checks: n,
          params: i
        });
      }
      if (i.id_token) {
        let l = new pV(i);
        if (await this.decryptIdToken(l), await this.validateIdToken(l, n.nonce, "authorization", n.max_age, n.state), !i.code) return l;
      }
      if (i.code) {
        let l = await this.grant({
          ...r,
          grant_type: "authorization_code",
          code: i.code,
          redirect_uri: e,
          code_verifier: n.code_verifier
        }, {
          clientAssertionPayload: o,
          DPoP: s
        });
        if (await this.decryptIdToken(l), await this.validateIdToken(l, n.nonce, "token", n.max_age), i.session_state) l.session_state = i.session_state;
        return l;
      }
      return new pV(i);
    }
    async oauthCallback(e, t, n = {}, {
      exchangeBody: r,
      clientAssertionPayload: o,
      DPoP: s
    } = {}) {
      let i = eBe(t);
      if (n.jarm && !("response" in t)) throw new Ku({
        message: "expected a JARM response",
        checks: n,
        params: i
      });else if ("response" in t) {
        let l = await this.decryptJARM(i.response);
        i = await this.validateJARM(l);
      }
      if (i.state && !n.state) throw TypeError("checks.state argument is missing");
      if (!i.state && n.state) throw new Ku({
        message: "state missing from the response",
        checks: n,
        params: i
      });
      if (n.state !== i.state) throw new Ku({
        printf: ["state mismatch, expected %s, got: %s", n.state, i.state],
        checks: n,
        params: i
      });
      if ("iss" in i) {
        if (OZ(this.issuer, "issuer"), i.iss !== this.issuer.issuer) throw new Ku({
          printf: ["iss mismatch, expected %s, got: %s", this.issuer.issuer, i.iss],
          params: i
        });
      } else if (this.issuer.authorization_response_iss_parameter_supported && !("id_token" in i) && !("response" in t)) throw new Ku({
        message: "iss missing from the response",
        params: i
      });
      if (i.error) throw new YJo(i);
      if (typeof i.id_token === "string" && i.id_token.length) throw new Ku({
        message: "id_token detected in the response, you must use client.callback() instead of client.oauthCallback()",
        params: i
      });
      delete i.id_token;
      let a = {
        code: ["code"],
        token: ["access_token", "token_type"]
      };
      if (n.response_type) for (let l of n.response_type.split(" ")) {
        if (l === "none") {
          if (i.code || i.id_token || i.access_token) throw new Ku({
            message: 'unexpected params encountered for "none" response',
            checks: n,
            params: i
          });
        }
        if (a[l]) {
          for (let c of a[l]) if (!i[c]) throw new Ku({
            message: `${c} missing from response`,
            checks: n,
            params: i
          });
        }
      }
      if (i.code) {
        let l = await this.grant({
          ...r,
          grant_type: "authorization_code",
          code: i.code,
          redirect_uri: e,
          code_verifier: n.code_verifier
        }, {
          clientAssertionPayload: o,
          DPoP: s
        });
        if (typeof l.id_token === "string" && l.id_token.length) throw new Ku({
          message: "id_token detected in the response, you must use client.callback() instead of client.oauthCallback()",
          params: i
        });
        return delete l.id_token, l;
      }
      return new pV(i);
    }
    async decryptIdToken(e) {
      if (!this.id_token_encrypted_response_alg) return e;
      let t = e;
      if (t instanceof pV) {
        if (!t.id_token) throw TypeError("id_token not present in TokenSet");
        t = t.id_token;
      }
      let n = this.id_token_encrypted_response_alg,
        r = this.id_token_encrypted_response_enc,
        o = await this.decryptJWE(t, n, r);
      if (e instanceof pV) return e.id_token = o, e;
      return o;
    }
    async validateJWTUserinfo(e) {
      let t = this.userinfo_signed_response_alg;
      return this.validateJWT(e, t, []);
    }
    async decryptJARM(e) {
      if (!this.authorization_encrypted_response_alg) return e;
      let t = this.authorization_encrypted_response_alg,
        n = this.authorization_encrypted_response_enc;
      return this.decryptJWE(e, t, n);
    }
    async decryptJWTUserinfo(e) {
      if (!this.userinfo_encrypted_response_alg) return e;
      let t = this.userinfo_encrypted_response_alg,
        n = this.userinfo_encrypted_response_enc;
      return this.decryptJWE(e, t, n);
    }
    async decryptJWE(e, t, n = "A128CBC-HS256") {
      let r = JSON.parse(wgr.decode(e.split(".")[0]));
      if (r.alg !== t) throw new Ku({
        printf: ["unexpected JWE alg received, expected %s, got: %s", t, r.alg],
        jwt: e
      });
      if (r.enc !== n) throw new Ku({
        printf: ["unexpected JWE enc received, expected %s, got: %s", n, r.enc],
        jwt: e
      });
      let o = i => new TextDecoder().decode(i.plaintext),
        s;
      if (t.match(/^(?:RSA|ECDH)/)) {
        let i = await QJo.get(this),
          a = fV.decodeProtectedHeader(e);
        for (let l of i.all({
          ...a,
          use: "enc"
        })) if (s = await fV.compactDecrypt(e, await l.keyObject(a.alg)).then(o, () => {}), s) break;
      } else s = await fV.compactDecrypt(e, this.secretForAlg(t === "dir" ? n : t)).then(o, () => {});
      if (!s) throw new Ku({
        message: "failed to decrypt JWE",
        jwt: e
      });
      return s;
    }
    async validateIdToken(e, t, n, r, o) {
      let s = e,
        i = this.id_token_signed_response_alg;
      if (s instanceof pV) {
        if (!s.id_token) throw TypeError("id_token not present in TokenSet");
        s = s.id_token;
      }
      s = String(s);
      let l = XJo(),
        {
          protected: c,
          payload: u,
          key: d
        } = await this.validateJWT(s, i);
      if (typeof r === "number" || r !== r3c && this.require_auth_time) {
        if (!u.auth_time) throw new Ku({
          message: "missing required JWT property auth_time",
          jwt: s
        });
        if (typeof u.auth_time !== "number") throw new Ku({
          message: "JWT auth_time claim must be a JSON numeric value",
          jwt: s
        });
      }
      if (typeof r === "number" && u.auth_time + r < l - this[lie]) throw new Ku({
        printf: ["too much time has elapsed since the last End-User authentication, max_age %i, auth_time: %i, now %i", r, u.auth_time, l - this[lie]],
        now: l,
        tolerance: this[lie],
        auth_time: u.auth_time,
        jwt: s
      });
      if (t !== n3c && (u.nonce || t !== void 0) && u.nonce !== t) throw new Ku({
        printf: ["nonce mismatch, expected %s, got: %s", t, u.nonce],
        jwt: s
      });
      if (n === "authorization") {
        if (!u.at_hash && e.access_token) throw new Ku({
          message: "missing required property at_hash",
          jwt: s
        });
        if (!u.c_hash && e.code) throw new Ku({
          message: "missing required property c_hash",
          jwt: s
        });
        if (this.fapi1()) {
          if (!u.s_hash && (e.state || o)) throw new Ku({
            message: "missing required property s_hash",
            jwt: s
          });
        }
        if (u.s_hash) {
          if (!o) throw TypeError('cannot verify s_hash, "checks.state" property not provided');
          try {
            KJo.validate({
              claim: "s_hash",
              source: "state"
            }, u.s_hash, o, c.alg, d.jwk && d.jwk.crv);
          } catch (p) {
            throw new Ku({
              message: p.message,
              jwt: s
            });
          }
        }
      }
      if (this.fapi() && u.iat < l - 3600) throw new Ku({
        printf: ["JWT issued too far in the past, now %i, iat %i", l, u.iat],
        now: l,
        tolerance: this[lie],
        iat: u.iat,
        jwt: s
      });
      if (e.access_token && u.at_hash !== void 0) try {
        KJo.validate({
          claim: "at_hash",
          source: "access_token"
        }, u.at_hash, e.access_token, c.alg, d.jwk && d.jwk.crv);
      } catch (p) {
        throw new Ku({
          message: p.message,
          jwt: s
        });
      }
      if (e.code && u.c_hash !== void 0) try {
        KJo.validate({
          claim: "c_hash",
          source: "code"
        }, u.c_hash, e.code, c.alg, d.jwk && d.jwk.crv);
      } catch (p) {
        throw new Ku({
          message: p.message,
          jwt: s
        });
      }
      return e;
    }
    async validateJWT(e, t, n = ["iss", "sub", "aud", "exp", "iat"]) {
      let r = this.issuer.issuer === "https://self-issued.me",
        o = XJo(),
        s,
        i;
      try {
        ({
          header: s,
          payload: i
        } = qPm(e, {
          complete: !0
        }));
      } catch (l) {
        throw new Ku({
          printf: ["failed to decode JWT (%s: %s)", l.name, l.message],
          jwt: e
        });
      }
      if (s.alg !== t) throw new Ku({
        printf: ["unexpected JWT alg received, expected %s, got: %s", t, s.alg],
        jwt: e
      });
      if (r) n = [...n, "sub_jwk"];
      if (n.forEach(ZPm.bind(void 0, i, e)), i.iss !== void 0) {
        let l = this.issuer.issuer;
        if (this.#n) l = this.issuer.issuer.replace("{tenantid}", i.tid);
        if (i.iss !== l) throw new Ku({
          printf: ["unexpected iss value, expected %s, got: %s", l, i.iss],
          jwt: e
        });
      }
      if (i.iat !== void 0) {
        if (typeof i.iat !== "number") throw new Ku({
          message: "JWT iat claim must be a JSON numeric value",
          jwt: e
        });
      }
      if (i.nbf !== void 0) {
        if (typeof i.nbf !== "number") throw new Ku({
          message: "JWT nbf claim must be a JSON numeric value",
          jwt: e
        });
        if (i.nbf > o + this[lie]) throw new Ku({
          printf: ["JWT not active yet, now %i, nbf %i", o + this[lie], i.nbf],
          now: o,
          tolerance: this[lie],
          nbf: i.nbf,
          jwt: e
        });
      }
      if (i.exp !== void 0) {
        if (typeof i.exp !== "number") throw new Ku({
          message: "JWT exp claim must be a JSON numeric value",
          jwt: e
        });
        if (o - this[lie] >= i.exp) throw new Ku({
          printf: ["JWT expired, now %i, exp %i", o - this[lie], i.exp],
          now: o,
          tolerance: this[lie],
          exp: i.exp,
          jwt: e
        });
      }
      if (i.aud !== void 0) {
        if (Array.isArray(i.aud)) {
          if (i.aud.length > 1 && !i.azp) throw new Ku({
            message: "missing required JWT property azp",
            jwt: e
          });
          if (!i.aud.includes(this.client_id)) throw new Ku({
            printf: ["aud is missing the client_id, expected %s to be included in %j", this.client_id, i.aud],
            jwt: e
          });
        } else if (i.aud !== this.client_id) throw new Ku({
          printf: ["aud mismatch, expected %s, got: %s", this.client_id, i.aud],
          jwt: e
        });
      }
      if (i.azp !== void 0) {
        let l = this.#r;
        if (typeof l === "string") l = [this.client_id, l];else if (Array.isArray(l)) l = [this.client_id, ...l];else l = [this.client_id];
        if (!l.includes(i.azp)) throw new Ku({
          printf: ["azp mismatch, got: %s", i.azp],
          jwt: e
        });
      }
      let a;
      if (r) {
        try {
          zJo(tBe(i.sub_jwk));
          let l = await fV.importJWK(i.sub_jwk, s.alg);
          zJo.equal(l.type, "public"), a = [{
            keyObject() {
              return l;
            }
          }];
        } catch (l) {
          throw new Ku({
            message: "failed to use sub_jwk claim as an asymmetric JSON Web Key",
            jwt: e
          });
        }
        if ((await fV.calculateJwkThumbprint(i.sub_jwk)) !== i.sub) throw new Ku({
          message: "failed to match the subject with sub_jwk",
          jwt: e
        });
      } else if (s.alg.startsWith("HS")) a = [this.secretForAlg(s.alg)];else if (s.alg !== "none") a = await e3c.call(this.issuer, {
        ...s,
        use: "sig"
      });
      if (!a && s.alg === "none") return {
        protected: s,
        payload: i
      };
      for (let l of a) {
        let c = await fV.compactVerify(e, l instanceof Uint8Array ? l : await l.keyObject(s.alg)).catch(() => {});
        if (c) return {
          payload: i,
          protected: c.protectedHeader,
          key: l
        };
      }
      throw new Ku({
        message: "failed to validate JWT signature",
        jwt: e
      });
    }
    async refresh(e, {
      exchangeBody: t,
      clientAssertionPayload: n,
      DPoP: r
    } = {}) {
      let o = e;
      if (o instanceof pV) {
        if (!o.refresh_token) throw TypeError("refresh_token not present in TokenSet");
        o = o.refresh_token;
      }
      let s = await this.grant({
        ...t,
        grant_type: "refresh_token",
        refresh_token: String(o)
      }, {
        clientAssertionPayload: n,
        DPoP: r
      });
      if (s.id_token) {
        if (await this.decryptIdToken(s), await this.validateIdToken(s, n3c, "token", r3c), e instanceof pV && e.id_token) {
          let i = e.claims().sub,
            a = s.claims().sub;
          if (a !== i) throw new Ku({
            printf: ["sub mismatch, expected %s, got: %s", i, a],
            jwt: s.id_token
          });
        }
      }
      return s;
    }
    async requestResource(e, t, {
      method: n,
      headers: r,
      body: o,
      DPoP: s,
      tokenType: i = s ? "DPoP" : t instanceof pV ? t.token_type : "Bearer"
    } = {}, a) {
      if (t instanceof pV) {
        if (!t.access_token) throw TypeError("access_token not present in TokenSet");
        t = t.access_token;
      }
      if (!t) throw TypeError("no access token provided");else if (typeof t !== "string") throw TypeError("invalid access token provided");
      let l = {
          headers: {
            Authorization: eQo(t, i),
            ...r
          },
          body: o
        },
        c = !!this.tls_client_certificate_bound_access_tokens,
        u = await JJo.call(this, {
          ...l,
          responseType: "buffer",
          method: n,
          url: e
        }, {
          accessToken: t,
          mTLS: c,
          DPoP: s
        }),
        d = u.headers["www-authenticate"];
      if (a !== ZJo && d && d.toLowerCase().startsWith("dpop ") && VPm(d).error === "use_dpop_nonce") return this.requestResource(e, t, {
        method: n,
        headers: r,
        body: o,
        DPoP: s,
        tokenType: i
      });
      return u;
    }
    async userinfo(e, {
      method: t = "GET",
      via: n = "header",
      tokenType: r,
      params: o,
      DPoP: s
    } = {}) {
      OZ(this.issuer, "userinfo_endpoint");
      let i = {
        tokenType: r,
        method: String(t).toUpperCase(),
        DPoP: s
      };
      if (i.method !== "GET" && i.method !== "POST") throw TypeError("#userinfo() method can only be POST or a GET");
      if (n === "body" && i.method !== "POST") throw TypeError("can only send body on POST");
      let a = !!(this.userinfo_signed_response_alg || this.userinfo_encrypted_response_alg);
      if (a) i.headers = {
        Accept: "application/jwt"
      };else i.headers = {
        Accept: "application/json"
      };
      let l = !!this.tls_client_certificate_bound_access_tokens,
        c;
      if (l && this.issuer.mtls_endpoint_aliases) c = this.issuer.mtls_endpoint_aliases.userinfo_endpoint;
      if (c = new K4c(c || this.issuer.userinfo_endpoint), n === "body") i.headers.Authorization = void 0, i.headers["Content-Type"] = "application/x-www-form-urlencoded", i.body = new Y4c(), i.body.append("access_token", e instanceof pV ? e.access_token : e);
      if (o) if (i.method === "GET") Object.entries(o).forEach(([p, f]) => {
        c.searchParams.append(p, f);
      });else if (i.body) Object.entries(o).forEach(([p, f]) => {
        i.body.append(p, f);
      });else i.body = new Y4c(), i.headers["Content-Type"] = "application/x-www-form-urlencoded", Object.entries(o).forEach(([p, f]) => {
        i.body.append(p, f);
      });
      if (i.body) i.body = i.body.toString();
      let u = await this.requestResource(c, e, i),
        d = ZNe(u, {
          bearer: !0
        });
      if (a) {
        if (!/^application\/jwt/.test(u.headers["content-type"])) throw new Ku({
          message: "expected application/jwt response from the userinfo_endpoint",
          response: u
        });
        let p = u.body.toString(),
          f = await this.decryptJWTUserinfo(p);
        if (!this.userinfo_signed_response_alg) try {
          d = JSON.parse(f), zJo(tBe(d));
        } catch (m) {
          throw new Ku({
            message: "failed to parse userinfo JWE payload as JSON",
            jwt: f
          });
        } else ({
          payload: d
        } = await this.validateJWTUserinfo(f));
      } else try {
        d = JSON.parse(u.body);
      } catch (p) {
        throw Object.defineProperty(p, "response", {
          value: u
        }), p;
      }
      if (e instanceof pV && e.id_token) {
        let p = e.claims().sub;
        if (d.sub !== p) throw new Ku({
          printf: ["userinfo sub mismatch, expected %s, got: %s", p, d.sub],
          body: d,
          jwt: e.id_token
        });
      }
      return d;
    }
    encryptionSecret(e) {
      let t = e <= 256 ? "sha256" : e <= 384 ? "sha384" : e <= 512 ? "sha512" : !1;
      if (!t) throw Error("unsupported symmetric encryption key derivation");
      return VJo.createHash(t).update(this.client_secret).digest().slice(0, e / 8);
    }
    secretForAlg(e) {
      if (!this.client_secret) throw TypeError("client_secret is required");
      if (/^A(\d{3})(?:GCM)?KW$/.test(e)) return this.encryptionSecret(parseInt(RegExp.$1, 10));
      if (/^A(\d{3})(?:GCM|CBC-HS(\d{3}))$/.test(e)) return this.encryptionSecret(parseInt(RegExp.$2 || RegExp.$1, 10));
      return new TextEncoder().encode(this.client_secret);
    }
    async grant(e, {
      clientAssertionPayload: t,
      DPoP: n
    } = {}, r) {
      OZ(this.issuer, "token_endpoint");
      let o = await Fnn.call(this, "token", {
          form: e,
          responseType: "json"
        }, {
          clientAssertionPayload: t,
          DPoP: n
        }),
        s;
      try {
        s = ZNe(o);
      } catch (i) {
        if (r !== ZJo && i instanceof YJo && i.error === "use_dpop_nonce") return this.grant(e, {
          clientAssertionPayload: t,
          DPoP: n
        }, ZJo);
        throw i;
      }
      return new pV(s);
    }
    async deviceAuthorization(e = {}, {
      exchangeBody: t,
      clientAssertionPayload: n,
      DPoP: r
    } = {}) {
      OZ(this.issuer, "device_authorization_endpoint"), OZ(this.issuer, "token_endpoint");
      let o = Cgr.call(this, {
          client_id: this.client_id,
          redirect_uri: null,
          response_type: null,
          ...e
        }),
        s = await Fnn.call(this, "device_authorization", {
          responseType: "json",
          form: o
        }, {
          clientAssertionPayload: n,
          endpointAuthMethod: "token"
        }),
        i = ZNe(s);
      return new XPm({
        client: this,
        exchangeBody: t,
        clientAssertionPayload: n,
        response: i,
        maxAge: e.max_age,
        DPoP: r
      });
    }
    async revoke(e, t, {
      revokeBody: n,
      clientAssertionPayload: r
    } = {}) {
      if (OZ(this.issuer, "revocation_endpoint"), t !== void 0 && typeof t !== "string") throw TypeError("hint must be a string");
      let o = {
        ...n,
        token: e
      };
      if (t) o.token_type_hint = t;
      let s = await Fnn.call(this, "revocation", {
        form: o
      }, {
        clientAssertionPayload: r
      });
      ZNe(s, {
        body: !1
      });
    }
    async introspect(e, t, {
      introspectBody: n,
      clientAssertionPayload: r
    } = {}) {
      if (OZ(this.issuer, "introspection_endpoint"), t !== void 0 && typeof t !== "string") throw TypeError("hint must be a string");
      let o = {
        ...n,
        token: e
      };
      if (t) o.token_type_hint = t;
      let s = await Fnn.call(this, "introspection", {
        form: o,
        responseType: "json"
      }, {
        clientAssertionPayload: r
      });
      return ZNe(s);
    }
    static async register(e, t = {}) {
      let {
        initialAccessToken: n,
        jwks: r,
        ...o
      } = t;
      if (OZ(this.issuer, "registration_endpoint"), r !== void 0 && !(e.jwks || e.jwks_uri)) {
        let a = await o3c.call(this, r);
        e.jwks = a.toJWKS();
      }
      let s = await JJo.call(this, {
          headers: {
            Accept: "application/json",
            ...(n ? {
              Authorization: eQo(n)
            } : void 0)
          },
          responseType: "json",
          json: e,
          url: this.issuer.registration_endpoint,
          method: "POST"
        }),
        i = ZNe(s, {
          statusCode: 201,
          bearer: !0
        });
      return new this(i, r, o);
    }
    get metadata() {
      return Z4c(Object.fromEntries(this.#e.entries()));
    }
    static async fromUri(e, t, n, r) {
      let o = await JJo.call(this, {
          method: "GET",
          url: e,
          responseType: "json",
          headers: {
            Authorization: eQo(t),
            Accept: "application/json"
          }
        }),
        s = ZNe(o, {
          bearer: !0
        });
      return new this(s, n, r);
    }
    async requestObject(e = {}, {
      sign: t = this.request_object_signing_alg || "none",
      encrypt: {
        alg: n = this.request_object_encryption_alg,
        enc: r = this.request_object_encryption_enc || "A128CBC-HS256"
      } = {}
    } = {}) {
      if (!tBe(e)) throw TypeError("requestObject must be a plain object");
      let o,
        s,
        i = XJo(),
        a = {
          alg: t,
          typ: "oauth-authz-req+jwt"
        },
        l = JSON.stringify(X4c({}, e, {
          iss: this.client_id,
          aud: this.issuer.issuer,
          client_id: this.client_id,
          jti: Q4c(),
          iat: i,
          exp: i + 300,
          ...(this.fapi() ? {
            nbf: i
          } : void 0)
        }));
      if (t === "none") o = [wgr.encode(JSON.stringify(a)), wgr.encode(l), ""].join(".");else {
        let u = t.startsWith("HS");
        if (u) s = this.secretForAlg(t);else {
          let d = await QJo.get(this);
          if (!d) throw TypeError(`no keystore present for client, cannot sign using alg ${t}`);
          if (s = d.get({
            alg: t,
            use: "sig"
          }), !s) throw TypeError(`no key to sign with found for alg ${t}`);
        }
        o = await new fV.CompactSign(new TextEncoder().encode(l)).setProtectedHeader({
          ...a,
          kid: u ? void 0 : s.jwk.kid
        }).sign(u ? s : await s.keyObject(t));
      }
      if (!n) return o;
      let c = {
        alg: n,
        enc: r,
        cty: "oauth-authz-req+jwt"
      };
      if (c.alg.match(/^(RSA|ECDH)/)) [s] = await e3c.call(this.issuer, {
        alg: c.alg,
        use: "enc"
      }, {
        allowMulti: !0
      });else s = this.secretForAlg(c.alg === "dir" ? c.enc : c.alg);
      return new fV.CompactEncrypt(new TextEncoder().encode(o)).setProtectedHeader({
        ...c,
        kid: s instanceof Uint8Array ? void 0 : s.jwk.kid
      }).encrypt(s instanceof Uint8Array ? s : await s.keyObject(c.alg));
    }
    async pushedAuthorizationRequest(e = {}, {
      clientAssertionPayload: t
    } = {}) {
      OZ(this.issuer, "pushed_authorization_request_endpoint");
      let n = {
          ...("request" in e ? e : Cgr.call(this, e)),
          client_id: this.client_id
        },
        r = await Fnn.call(this, "pushed_authorization_request", {
          responseType: "json",
          form: n
        }, {
          clientAssertionPayload: t,
          endpointAuthMethod: "token"
        }),
        o = ZNe(r, {
          statusCode: 201
        });
      if (!("expires_in" in o)) throw new Ku({
        message: "expected expires_in in Pushed Authorization Successful Response",
        response: r
      });
      if (typeof o.expires_in !== "number") throw new Ku({
        message: "invalid expires_in value in Pushed Authorization Successful Response",
        response: r
      });
      if (!("request_uri" in o)) throw new Ku({
        message: "expected request_uri in Pushed Authorization Successful Response",
        response: r
      });
      if (typeof o.request_uri !== "string") throw new Ku({
        message: "invalid request_uri value in Pushed Authorization Successful Response",
        response: r
      });
      return o;
    }
    get issuer() {
      return this.#t;
    }
    [z4c.custom]() {
      return `${this.constructor.name} ${z4c(this.metadata, {
        depth: 1 / 0,
        colors: process.stdout.isTTY,
        compact: !1,
        sorted: !0
      })}`;
    }
    fapi() {
      return this.fapi1() || this.fapi2();
    }
    fapi1() {
      return this.constructor.name === "FAPI1Client";
    }
    fapi2() {
      return this.constructor.name === "FAPI2Client";
    }
    async validateJARM(e) {
      let t = this.authorization_signed_response_alg,
        {
          payload: n
        } = await this.validateJWT(e, t, ["iss", "exp", "aud"]);
      return eBe(n);
    }
    async dpopProof(e, t, n) {
      if (!tBe(e)) throw TypeError("payload must be a plain object");
      let r;
      if (i3c(t)) r = t;else if (t[Symbol.toStringTag] === "CryptoKey") r = t;else if (fV.cryptoRuntime === "node:crypto") r = VJo.createPrivateKey(t);else throw TypeError("unrecognized crypto runtime");
      if (r.type !== "private") throw TypeError('"DPoP" option must be a private key');
      let o = iQo.call(this, r, t);
      if (!o) throw TypeError("could not determine DPoP JWS Algorithm");
      return new fV.SignJWT({
        ath: n ? wgr.encode(VJo.createHash("sha256").update(n).digest()) : void 0,
        ...e
      }).setProtectedHeader({
        alg: o,
        typ: "dpop+jwt",
        jwk: await rMm(r, t)
      }).setIssuedAt().setJti(Q4c()).sign(r);
    }
  }
  function s3c(e) {
    switch (e.algorithm.name) {
      case "Ed25519":
      case "Ed448":
        return "EdDSA";
      case "ECDSA":
        {
          switch (e.algorithm.namedCurve) {
            case "P-256":
              return "ES256";
            case "P-384":
              return "ES384";
            case "P-521":
              return "ES512";
            default:
              break;
          }
          break;
        }
      case "RSASSA-PKCS1-v1_5":
        return `RS${e.algorithm.hash.name.slice(4)}`;
      case "RSA-PSS":
        return `PS${e.algorithm.hash.name.slice(4)}`;
      default:
        throw TypeError("unsupported DPoP private key");
    }
  }
  var iQo;
  if (fV.cryptoRuntime === "node:crypto") {
    let t = function (a, l, c) {
        if (typeof l === "object" && l.format === "jwk" && l.key && l.key.alg) return l.key.alg;
        if (Array.isArray(c)) {
          let u = c.filter(RegExp.prototype.test.bind(e));
          if (a.asymmetricKeyType === "rsa-pss") u = u.filter(d => d.startsWith("PS"));
          return ["PS256", "PS384", "PS512", "RS256", "RS384", "RS384"].find(d => u.includes(d));
        }
        return "PS256";
      },
      i = function (a, l) {
        switch (typeof l === "object" && typeof l.key === "object" && l.key.crv) {
          case "P-256":
            return "ES256";
          case "secp256k1":
            return "ES256K";
          case "P-384":
            return "ES384";
          case "P-512":
            return "ES512";
          default:
            break;
        }
        let c = a.export({
            format: "der",
            type: "pkcs8"
          }),
          u = c[1] < 128 ? 17 : 18,
          d = c[u],
          p = c.slice(u + 1, u + 1 + d);
        if (p.equals(n)) return "ES256";
        if (p.equals(r)) return "ES384";
        if (p.equals(o)) return "ES512";
        if (p.equals(s)) return "ES256K";
        throw TypeError("unsupported DPoP private key curve");
      };
    oMm = t, sMm = i, iQo = function (a, l) {
      if (l[Symbol.toStringTag] === "CryptoKey") return s3c(a);
      switch (a.asymmetricKeyType) {
        case "ed25519":
        case "ed448":
          return "EdDSA";
        case "ec":
          return i(a, l);
        case "rsa":
        case QPm && "rsa-pss":
          return t(a, l, this.issuer.dpop_signing_alg_values_supported);
        default:
          throw TypeError("unsupported DPoP private key");
      }
    };
    let e = /^(?:RS|PS)(?:256|384|512)$/,
      n = Buffer.from([42, 134, 72, 206, 61, 3, 1, 7]),
      r = Buffer.from([43, 129, 4, 0, 34]),
      o = Buffer.from([43, 129, 4, 0, 35]),
      s = Buffer.from([43, 129, 4, 0, 10]);
  } else iQo = s3c;
  var oMm,
    sMm,
    nQo = new WeakMap();
  async function rMm(e, t) {
    if (fV.cryptoRuntime === "node:crypto" && typeof t === "object" && typeof t.key === "object" && t.format === "jwk") return sQo(t.key, "kty", "crv", "x", "y", "e", "n");
    if (nQo.has(t)) return nQo.get(t);
    let n = sQo(await fV.exportJWK(e), "kty", "crv", "x", "y", "e", "n");
    if (i3c(t) || fV.cryptoRuntime === "WebCryptoAPI") nQo.set(t, n);
    return n;
  }
  lQo.exports = (e, t = !1) => class extends aQo {
    constructor(...r) {
      super(e, t, ...r);
    }
    static get issuer() {
      return e;
    }
  };
  lQo.exports.BaseClient = aQo;
});