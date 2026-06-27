// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LVr
// matched 2.1.88 source: node_modules/gtoken/build/src/index.js
// class=partial  jaccard=0.0863  score=1  fileCov=0.0863
// note: low-confidence suggestion: node_modules/gtoken/build/src/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var LVr = Q(Ywn => {
  Object.defineProperty(Ywn, "__esModule", {
    value: !0
  });
  Ywn.GoogleToken = void 0;
  var WId = p1(),
    iTi = oTi(),
    qId = sTi();
  class aTi {
    tokenOptions;
    tokenHandler;
    constructor(e) {
      if (this.tokenOptions = e || {}, this.tokenOptions.transporter = this.tokenOptions.transporter || {
        request: t => (0, WId.request)(t)
      }, !this.tokenOptions.iss) this.tokenOptions.iss = this.tokenOptions.email;
      if (typeof this.tokenOptions.scope === "object") this.tokenOptions.scope = this.tokenOptions.scope.join(" ");
      this.tokenHandler = new iTi.TokenHandler(this.tokenOptions);
    }
    get expiresAt() {
      return this.tokenHandler.tokenExpiresAt;
    }
    get accessToken() {
      return this.tokenHandler.token?.access_token;
    }
    get idToken() {
      return this.tokenHandler.token?.id_token;
    }
    get tokenType() {
      return this.tokenHandler.token?.token_type;
    }
    get refreshToken() {
      return this.tokenHandler.token?.refresh_token;
    }
    hasExpired() {
      return this.tokenHandler.hasExpired();
    }
    isTokenExpiring() {
      return this.tokenHandler.isTokenExpiring();
    }
    getToken(e, t = {
      forceRefresh: !1
    }) {
      let n;
      if (typeof e === "function") n = e;else if (typeof e === "object") t = e;
      let r = this.tokenHandler.getToken(t.forceRefresh ?? !1);
      if (n) r.then(o => n(null, o), n);
      return r;
    }
    revokeToken(e) {
      if (!this.accessToken) return Promise.reject(Error("No token to revoke."));
      let t = (0, qId.revokeToken)(this.accessToken, this.tokenOptions.transporter);
      if (e) t.then(() => e(), e);
      this.tokenHandler = new iTi.TokenHandler(this.tokenOptions);
    }
    get googleTokenOptions() {
      return this.tokenOptions;
    }
  }
  Ywn.GoogleToken = aTi;
});