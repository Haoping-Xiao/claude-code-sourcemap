// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rhi
// matched 2.1.88 source: node_modules/@azure/msal-common/dist/client/AuthorizationCodeClient.mjs
// class=partial  jaccard=0.099  score=1  fileCov=0.099
// note: low-confidence suggestion: node_modules/@azure/msal-common/dist/client/AuthorizationCodeClient.mjs; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var rhi = E(() => {
  O$t();
  Zrt();
  r4e();
  oT();
  Jrt();
  qTn();
  F$t();
  Cxe();
  JR();
  Ixe();
  mvn();
  kxe();
  zrt();
  S$t();
  wxe();
  Ete();
  Wye();
  gvn();
  svn();
  C0();
  Bye(); /*! @azure/msal-common v15.13.1 2025-10-29 */
  hvn = class hvn extends lU {
    constructor(e, t) {
      super(e, t);
      this.includeRedirectUri = !0, this.oidcDefaultScopes = this.config.authOptions.authority.options.OIDCOptions?.defaultScopes;
    }
    async acquireToken(e, t) {
      if (this.performanceClient?.addQueueMeasurement(ao.AuthClientAcquireToken, e.correlationId), !e.code) throw ts(Uje);
      let n = D9(),
        r = await dh(this.executeTokenRequest.bind(this), ao.AuthClientExecuteTokenRequest, this.logger, this.performanceClient, e.correlationId)(this.authority, e),
        o = r.headers?.[rT.X_MS_REQUEST_ID],
        s = new qx(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient);
      return s.validateTokenResponse(r.body), dh(s.handleServerTokenResponse.bind(s), ao.HandleServerTokenResponse, this.logger, this.performanceClient, e.correlationId)(r.body, this.authority, n, e, t, void 0, void 0, void 0, o);
    }
    getLogoutUri(e) {
      if (!e) throw jE(Zje);
      let t = this.createLogoutUrlQueryString(e);
      return sf.appendQueryString(this.authority.endSessionEndpoint, t);
    }
    async executeTokenRequest(e, t) {
      this.performanceClient?.addQueueMeasurement(ao.AuthClientExecuteTokenRequest, t.correlationId);
      let n = this.createTokenQueryParameters(t),
        r = sf.appendQueryString(e.tokenEndpoint, n),
        o = await dh(this.createTokenRequestBody.bind(this), ao.AuthClientCreateTokenRequestBody, this.logger, this.performanceClient, t.correlationId)(t),
        s = void 0;
      if (t.clientInfo) try {
        let l = Vrt(t.clientInfo, this.cryptoUtils.base64Decode);
        s = {
          credential: `${l.uid}${Lye.CLIENT_INFO_SEPARATOR}${l.utid}`,
          type: Hj.HOME_ACCOUNT_ID
        };
      } catch (l) {
        this.logger.verbose("Could not parse client info for CCS Header: " + l);
      }
      let i = this.createTokenRequestHeaders(s || t.ccsCredential),
        a = rot(this.config.authOptions.clientId, t);
      return dh(this.executePostToTokenEndpoint.bind(this), ao.AuthorizationCodeClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, t.correlationId)(r, o, i, a, t.correlationId, ao.AuthorizationCodeClientExecutePostToTokenEndpoint);
    }
    async createTokenRequestBody(e) {
      this.performanceClient?.addQueueMeasurement(ao.AuthClientCreateTokenRequestBody, e.correlationId);
      let t = new Map();
      if (l4e(t, e.embeddedClientId || e.tokenBodyParameters?.[Rle] || this.config.authOptions.clientId), !this.includeRedirectUri) {
        if (!e.redirectUri) throw jE(Kje);
      } else c4e(t, e.redirectUri);
      if (a4e(t, e.scopes, !0, this.oidcDefaultScopes), AWr(t, e.code), A$t(t, this.config.libraryInfo), H$t(t, this.config.telemetry.application), D$t(t), this.serverTelemetryManager && !WTn(this.config)) L$t(t, this.serverTelemetryManager);
      if (e.codeVerifier) TWr(t, e.codeVerifier);
      if (this.config.clientCredentials.clientSecret) v$t(t, this.config.clientCredentials.clientSecret);
      if (this.config.clientCredentials.clientAssertion) {
        let r = this.config.clientCredentials.clientAssertion;
        w$t(t, await wj(r.assertion, this.config.authOptions.clientId, e.resourceRequestUri)), C$t(t, r.assertionType);
      }
      if (I$t(t, XG.AUTHORIZATION_CODE_GRANT), p4e(t), e.authenticationScheme === Rg.POP) {
        let r = new f4e(this.cryptoUtils, this.performanceClient),
          o;
        if (!e.popKid) o = (await dh(r.generateCnf.bind(r), ao.PopTokenGenerateCnf, this.logger, this.performanceClient, e.correlationId)(e, this.logger)).reqCnfString;else o = this.cryptoUtils.encodeKid(e.popKid);
        k$t(t, o);
      } else if (e.authenticationScheme === Rg.SSH) if (e.sshJwk) R$t(t, e.sshJwk);else throw jE(Nye);
      if (!sH.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) u4e(t, e.claims, this.config.authOptions.clientCapabilities);
      let n = void 0;
      if (e.clientInfo) try {
        let r = Vrt(e.clientInfo, this.cryptoUtils.base64Decode);
        n = {
          credential: `${r.uid}${Lye.CLIENT_INFO_SEPARATOR}${r.utid}`,
          type: Hj.HOME_ACCOUNT_ID
        };
      } catch (r) {
        this.logger.verbose("Could not parse client info for CCS Header: " + r);
      } else n = e.ccsCredential;
      if (this.config.systemOptions.preventCorsPreflight && n) switch (n.type) {
        case Hj.HOME_ACCOUNT_ID:
          try {
            let r = xle(n.credential);
            Fye(t, r);
          } catch (r) {
            this.logger.verbose("Could not parse home account ID for CCS Header: " + r);
          }
          break;
        case Hj.UPN:
          xxe(t, n.credential);
          break;
      }
      if (e.embeddedClientId) Gye(t, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
      if (e.tokenBodyParameters) jye(t, e.tokenBodyParameters);
      if (e.enableSpaAuthorizationCode && (!e.tokenBodyParameters || !e.tokenBodyParameters[YTn])) jye(t, {
        [YTn]: "1"
      });
      return i4e(t, e.correlationId, this.performanceClient), kle(t);
    }
    createLogoutUrlQueryString(e) {
      let t = new Map();
      if (e.postLogoutRedirectUri) yWr(t, e.postLogoutRedirectUri);
      if (e.correlationId) d4e(t, e.correlationId);
      if (e.idTokenHint) _Wr(t, e.idTokenHint);
      if (e.state) T$t(t, e.state);
      if (e.logoutHint) vWr(t, e.logoutHint);
      if (e.extraQueryParameters) jye(t, e.extraQueryParameters);
      if (this.config.authOptions.instanceAware) x$t(t);
      return kle(t, this.config.authOptions.encodeExtraQueryParams, e.extraQueryParameters);
    }
  };
});
var S_d = 300,
  oot;