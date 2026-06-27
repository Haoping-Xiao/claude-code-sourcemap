// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tCn
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var tCn = Q(eCn => {
  Object.defineProperty(eCn, "__esModule", {
    value: true
  });
  eCn.StsCredentials = void 0;
  var oxd = p1(),
    sxd = F9(),
    pTi = BVr(),
    ixd = kte();
  class UVr extends pTi.OAuthClientAuthHandler {
    #e;
    constructor(e = {
      tokenExchangeEndpoint: ""
    }, t) {
      if (typeof e !== "object" || e instanceof URL) e = {
        tokenExchangeEndpoint: e,
        clientAuthentication: t
      };
      super(e);
      this.#e = e.tokenExchangeEndpoint;
    }
    async exchangeToken(e, t, n) {
      let r = {
          grant_type: e.grantType,
          resource: e.resource,
          audience: e.audience,
          scope: e.scope?.join(" "),
          requested_token_type: e.requestedTokenType,
          subject_token: e.subjectToken,
          subject_token_type: e.subjectTokenType,
          actor_token: e.actingParty?.actorToken,
          actor_token_type: e.actingParty?.actorTokenType,
          options: n && JSON.stringify(n)
        },
        o = {
          ...UVr.RETRY_CONFIG,
          url: this.#e.toString(),
          method: "POST",
          headers: t,
          data: new URLSearchParams((0, ixd.removeUndefinedValuesInObject)(r)),
          responseType: "json"
        };
      sxd.AuthClient.setMethodName(o, "exchangeToken"), this.applyClientAuthenticationOptions(o);
      try {
        let s = await this.transporter.request(o),
          i = s.data;
        return i.res = s, i;
      } catch (s) {
        if (s instanceof oxd.GaxiosError && s.response) throw (0, pTi.getErrorFromOAuthErrorResponse)(s.response.data, s);
        throw s;
      }
    }
  }
  eCn.StsCredentials = UVr;
});