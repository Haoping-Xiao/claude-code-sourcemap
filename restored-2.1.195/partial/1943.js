// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pAi
// matched 2.1.88 source: node_modules/@azure/identity/dist/esm/credentials/authorizationCodeCredential.js
// class=partial  jaccard=0.1684  score=1  fileCov=0.1684
// note: low-confidence suggestion: node_modules/@azure/identity/dist/esm/credentials/authorizationCodeCredential.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var pAi = E(() => {
  $D();
  Hle();
  vwn();
  OMt();
  OD();
  UE();
  c7 = zp(Cte);
});
class jqr {
  constructor(e, t, n, r, o, s) {
    if (XR(fAi, e), this.clientSecret = n, typeof o === "string") this.authorizationCode = r, this.redirectUri = o;else this.authorizationCode = n, this.redirectUri = r, this.clientSecret = void 0, s = o;
    this.tenantId = e, this.additionallyAllowedTenantIds = Gw(s === null || s === void 0 ? void 0 : s.additionallyAllowedTenants), this.msalClient = uU(t, e, Object.assign(Object.assign({}, s), {
      logger: fAi,
      tokenCredentialOptions: s !== null && s !== void 0 ? s : {}
    }));
  }
  async getToken(e, t = {}) {
    return Hy.withSpan(`${this.constructor.name}.getToken`, t, async n => {
      let r = Ev(this.tenantId, n, this.additionallyAllowedTenantIds);
      n.tenantId = r;
      let o = N9(e);
      return this.msalClient.getTokenByAuthorizationCode(o, this.redirectUri, this.authorizationCode, this.clientSecret, Object.assign(Object.assign({}, n), {
        disableAutomaticAuthentication: this.disableAutomaticAuthentication
      }));
    });
  }
}
var fAi;