// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module g3c
// matched 2.1.88 source: node_modules/@modelcontextprotocol/sdk/dist/esm/client/auth.js
// class=new  jaccard=0.0585  score=0.1857  fileCov=0.0788
// note: nearest: node_modules/@modelcontextprotocol/sdk/dist/esm/client/auth.js (0.0585); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var g3c = Q((kzH, m3c) => {
  var {
      inspect: d3c
    } = require("util"),
    pQo = require("url"),
    {
      RPError: uQo
    } = Xme(),
    dMm = cQo(),
    Igr = l3c(),
    p3c = ygr(),
    pMm = u3c(),
    f3c = zvt(),
    fMm = Nnn(),
    {
      keystore: mMm
    } = qJo(),
    gMm = ["https://login.microsoftonline.com/common/.well-known/openid-configuration", "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration", "https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration", "https://login.microsoftonline.com/consumers/v2.0/.well-known/openid-configuration"],
    dQo = Symbol(),
    hMm = {
      claim_types_supported: ["normal"],
      claims_parameter_supported: !1,
      grant_types_supported: ["authorization_code", "implicit"],
      request_parameter_supported: !1,
      request_uri_parameter_supported: !0,
      require_request_uri_registration: !1,
      response_modes_supported: ["query", "fragment"],
      token_endpoint_auth_methods_supported: ["client_secret_basic"]
    };
  class fQo {
    #e;
    constructor(e = {}) {
      let t = e[dQo];
      delete e[dQo], ["introspection", "revocation"].forEach(r => {
        if (e[`${r}_endpoint`] && e[`${r}_endpoint_auth_methods_supported`] === void 0 && e[`${r}_endpoint_auth_signing_alg_values_supported`] === void 0) {
          if (e.token_endpoint_auth_methods_supported) e[`${r}_endpoint_auth_methods_supported`] = e.token_endpoint_auth_methods_supported;
          if (e.token_endpoint_auth_signing_alg_values_supported) e[`${r}_endpoint_auth_signing_alg_values_supported`] = e.token_endpoint_auth_signing_alg_values_supported;
        }
      }), this.#e = new Map(), Object.entries(e).forEach(([r, o]) => {
        if (this.#e.set(r, o), !this[r]) Object.defineProperty(this, r, {
          get() {
            return this.#e.get(r);
          },
          enumerable: !0
        });
      }), Igr.set(this.issuer, this);
      let n = dMm(this, t);
      Object.defineProperties(this, {
        Client: {
          value: n,
          enumerable: !0
        },
        FAPI1Client: {
          value: class extends n {},
          enumerable: !0
        },
        FAPI2Client: {
          value: class extends n {},
          enumerable: !0
        }
      });
    }
    get metadata() {
      return fMm(Object.fromEntries(this.#e.entries()));
    }
    static async webfinger(e) {
      let t = pMm(e),
        {
          host: n
        } = pQo.parse(t),
        r = `https://${n}/.well-known/webfinger`,
        o = await f3c.call(this, {
          method: "GET",
          url: r,
          responseType: "json",
          searchParams: {
            resource: t,
            rel: "http://openid.net/specs/connect/1.0/issuer"
          },
          headers: {
            Accept: "application/json"
          }
        }),
        s = p3c(o),
        i = Array.isArray(s.links) && s.links.find(c => typeof c === "object" && c.rel === "http://openid.net/specs/connect/1.0/issuer" && c.href);
      if (!i) throw new uQo({
        message: "no issuer found in webfinger response",
        body: s
      });
      if (typeof i.href !== "string" || !i.href.startsWith("https://")) throw new uQo({
        printf: ["invalid issuer location %s", i.href],
        body: s
      });
      let a = i.href;
      if (Igr.has(a)) return Igr.get(a);
      let l = await this.discover(a);
      if (l.issuer !== a) throw Igr.del(l.issuer), new uQo("discovered issuer mismatch, expected %s, got: %s", a, l.issuer);
      return l;
    }
    static async discover(e) {
      let t = yMm(e),
        n = await f3c.call(this, {
          method: "GET",
          responseType: "json",
          url: t,
          headers: {
            Accept: "application/json"
          }
        }),
        r = p3c(n);
      return new fQo({
        ...hMm,
        ...r,
        [dQo]: !!gMm.find(o => t.startsWith(o))
      });
    }
    async reloadJwksUri() {
      await mMm.call(this, !0);
    }
    [d3c.custom]() {
      return `${this.constructor.name} ${d3c(this.metadata, {
        depth: 1 / 0,
        colors: process.stdout.isTTY,
        compact: !1,
        sorted: !0
      })}`;
    }
  }
  function yMm(e) {
    let t = pQo.parse(e);
    if (t.pathname.includes("/.well-known/")) return e;else {
      let n;
      if (t.pathname.endsWith("/")) n = `${t.pathname}.well-known/openid-configuration`;else n = `${t.pathname}/.well-known/openid-configuration`;
      return pQo.format({
        ...t,
        pathname: n
      });
    }
  }
  m3c.exports = fQo;
});