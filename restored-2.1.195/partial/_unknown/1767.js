// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Zgi
// matched 2.1.88 source: node_modules/@azure/msal-common/dist/client/BaseClient.mjs
// class=partial  jaccard=0.0943  score=0.5982  fileCov=0.1007
// note: low-confidence suggestion: node_modules/@azure/msal-common/dist/client/BaseClient.mjs; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Zgi = E(() => {
  n7(); /*! @azure/msal-common v15.13.1 2025-10-29 */
  ivn = class ivn extends Op {
    constructor(e, t, n) {
      super(e.errorCode, e.errorMessage, e.subError);
      Object.setPrototypeOf(this, ivn.prototype), this.name = "NetworkError", this.error = e, this.httpStatus = t, this.responseHeaders = n;
    }
  };
});
class lU {
  constructor(e, t) {
    this.config = Fgi(e), this.logger = new JG(this.config.loggerOptions, PTn, Grt), this.cryptoUtils = this.config.cryptoInterface, this.cacheManager = this.config.storageInterface, this.networkClient = this.config.networkInterface, this.serverTelemetryManager = this.config.serverTelemetryManager, this.authority = this.config.authOptions.authority, this.performanceClient = t;
  }
  createTokenRequestHeaders(e) {
    let t = {};
    if (t[rT.CONTENT_TYPE] = vo.URL_FORM_CONTENT_TYPE, !this.config.systemOptions.preventCorsPreflight && e) switch (e.type) {
      case Hj.HOME_ACCOUNT_ID:
        try {
          let n = xle(e.credential);
          t[rT.CCS_HEADER] = `Oid:${n.uid}@${n.utid}`;
        } catch (n) {
          this.logger.verbose("Could not parse home account ID for CCS Header: " + n);
        }
        break;
      case Hj.UPN:
        t[rT.CCS_HEADER] = `UPN: ${e.credential}`;
        break;
    }
    return t;
  }
  async executePostToTokenEndpoint(e, t, n, r, o, s) {
    if (s) this.performanceClient?.addQueueMeasurement(s, o);
    let i = await this.sendPostRequest(r, e, {
      body: t,
      headers: n
    }, o);
    if (this.config.serverTelemetryManager && i.status < 500 && i.status !== 429) this.config.serverTelemetryManager.clearTelemetryCache();
    return i;
  }
  async sendPostRequest(e, t, n, r) {
    qye.preProcess(this.cacheManager, e, r);
    let o;
    try {
      o = await dh(this.networkClient.sendPostRequestAsync.bind(this.networkClient), ao.NetworkClientSendPostRequestAsync, this.logger, this.performanceClient, r)(t, n);
      let s = o.headers || {};
      this.performanceClient?.addFields({
        refreshTokenSize: o.body.refresh_token?.length || 0,
        httpVerToken: s[rT.X_MS_HTTP_VERSION] || "",
        requestId: s[rT.X_MS_REQUEST_ID] || ""
      }, r);
    } catch (s) {
      if (s instanceof ivn) {
        let i = s.responseHeaders;
        if (i) this.performanceClient?.addFields({
          httpVerToken: i[rT.X_MS_HTTP_VERSION] || "",
          requestId: i[rT.X_MS_REQUEST_ID] || "",
          contentTypeHeader: i[rT.CONTENT_TYPE] || void 0,
          contentLengthHeader: i[rT.CONTENT_LENGTH] || void 0,
          httpStatus: s.httpStatus
        }, r);
        throw s.error;
      }
      if (s instanceof Op) throw s;else throw ts(Dje);
    }
    return qye.postProcess(this.cacheManager, e, o, r), o;
  }
  async updateAuthority(e, t) {
    this.performanceClient?.addQueueMeasurement(ao.UpdateTokenEndpointAuthority, t);
    let n = `https://${e}/${this.authority.tenant}/`,
      r = await RWr(n, this.networkClient, this.cacheManager, this.authority.options, this.logger, t, this.performanceClient);
    this.authority = r;
  }
  createTokenQueryParameters(e) {
    let t = new Map();
    if (e.embeddedClientId) Gye(t, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
    if (e.tokenQueryParameters) jye(t, e.tokenQueryParameters);
    return d4e(t, e.correlationId), i4e(t, e.correlationId, this.performanceClient), kle(t);
  }
}