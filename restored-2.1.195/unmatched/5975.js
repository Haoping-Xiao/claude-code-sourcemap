// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module E3c
// matched 2.1.88 source: node_modules/@azure/msal-common/dist/constants/AADServerParamKeys.mjs
// class=new  jaccard=0.0309  score=0.1301  fileCov=0.0389
// note: nearest: node_modules/@azure/msal-common/dist/constants/AADServerParamKeys.mjs (0.0309); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var E3c = Q((RzH, S3c) => {
  var h3c = require("url"),
    {
      format: _Mm
    } = require("util"),
    y3c = Nnn(),
    {
      RPError: _3c,
      OPError: bMm
    } = Xme(),
    {
      BaseClient: SMm
    } = cQo(),
    {
      random: mQo,
      codeChallenge: EMm
    } = Mnn(),
    AMm = ggr(),
    {
      resolveResponseType: HMm,
      resolveRedirectUri: TMm
    } = UJo();
  function vMm(e, t, n = {}) {
    if (e) this.error(e);else if (!t) this.fail(n);else this.success(t, n);
  }
  function b3c({
    client: e,
    params: t = {},
    passReqToCallback: n = !1,
    sessionKey: r,
    usePKCE: o = !0,
    extras: s = {}
  } = {}, i) {
    if (!(e instanceof SMm)) throw TypeError("client must be an instance of openid-client Client");
    if (typeof i !== "function") throw TypeError("verify callback must be a function");
    if (!e.issuer || !e.issuer.issuer) throw TypeError("client must have an issuer with an identifier");
    if (this._client = e, this._issuer = e.issuer, this._verify = i, this._passReqToCallback = n, this._usePKCE = o, this._key = r || `oidc:${h3c.parse(this._issuer.issuer).hostname}`, this._params = y3c(t), delete this._params.state, delete this._params.nonce, this._extras = y3c(s), !this._params.response_type) this._params.response_type = HMm.call(e);
    if (!this._params.redirect_uri) this._params.redirect_uri = TMm.call(e);
    if (!this._params.scope) this._params.scope = "openid";
    if (this._usePKCE === !0) {
      let a = Array.isArray(this._issuer.code_challenge_methods_supported) ? this._issuer.code_challenge_methods_supported : !1;
      if (a && a.includes("S256")) this._usePKCE = "S256";else if (a && a.includes("plain")) this._usePKCE = "plain";else if (a) throw TypeError("neither code_challenge_method supported by the client is supported by the issuer");else this._usePKCE = "S256";
    } else if (typeof this._usePKCE === "string" && !["plain", "S256"].includes(this._usePKCE)) throw TypeError(`${this._usePKCE} is not valid/implemented PKCE code_challenge_method`);
    this.name = h3c.parse(e.issuer.issuer).hostname;
  }
  b3c.prototype.authenticate = function (t, n) {
    (async () => {
      let r = this._client;
      if (!t.session) throw TypeError("authentication requires session support");
      let o = r.callbackParams(t),
        s = this._key,
        {
          0: i,
          length: a
        } = Object.keys(o);
      if (a === 0 || a === 1 && i === "iss") {
        let S = {
          state: mQo(),
          ...this._params,
          ...n
        };
        if (!S.nonce && S.response_type.includes("id_token")) S.nonce = mQo();
        if (t.session[s] = AMm(S, "nonce", "state", "max_age", "response_type"), this._usePKCE && S.response_type.includes("code")) {
          let A = mQo();
          switch (t.session[s].code_verifier = A, this._usePKCE) {
            case "S256":
              S.code_challenge = EMm(A), S.code_challenge_method = "S256";
              break;
            case "plain":
              S.code_challenge = A;
              break;
          }
        }
        this.redirect(r.authorizationUrl(S));
        return;
      }
      let l = t.session[s];
      if (Object.keys(l || {}).length === 0) throw Error(_Mm('did not find expected authorization request details in session, req.session["%s"] is %j', s, l));
      let {
        state: c,
        nonce: u,
        max_age: d,
        code_verifier: p,
        response_type: f
      } = l;
      try {
        delete t.session[s];
      } catch (S) {}
      let m = {
          redirect_uri: this._params.redirect_uri,
          ...n
        },
        g = {
          state: c,
          nonce: u,
          max_age: d,
          code_verifier: p,
          response_type: f
        },
        h = await r.callback(m.redirect_uri, o, g, this._extras),
        y = this._passReqToCallback,
        b = this._verify.length > (y ? 3 : 2) && r.issuer.userinfo_endpoint,
        _ = [h, vMm.bind(this)];
      if (b) {
        if (!h.access_token) throw new _3c({
          message: "expected access_token to be returned when asking for userinfo in verify callback",
          tokenset: h
        });
        let S = await r.userinfo(h);
        _.splice(1, 0, S);
      }
      if (y) _.unshift(t);
      this._verify(..._);
    })().catch(r => {
      if (r instanceof bMm && r.error !== "server_error" && !r.error.startsWith("invalid") || r instanceof _3c) this.fail(r);else this.error(r);
    });
  };
  S3c.exports = b3c;
});