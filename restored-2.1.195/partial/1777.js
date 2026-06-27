// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ohi
// matched 2.1.88 source: node_modules/@azure/msal-common/dist/client/RefreshTokenClient.mjs
// class=partial  jaccard=0.0866  score=1  fileCov=0.0866
// note: low-confidence suggestion: node_modules/@azure/msal-common/dist/client/RefreshTokenClient.mjs; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ohi = E(() => {
  qTn();
  O$t();
  Zrt();
  r4e();
  oT();
  Jrt();
  F$t();
  mvn();
  Cxe();
  wxe();
  JR();
  not();
  kxe();
  Ixe();
  S$t();
  zrt();
  U$t();
  Ete();
  Wye();
  gvn();
  svn();
  cvn();
  Bye();
  C0(); /*! @azure/msal-common v15.13.1 2025-10-29 */
  oot = class oot extends lU {
    constructor(e, t) {
      super(e, t);
    }
    async acquireToken(e) {
      this.performanceClient?.addQueueMeasurement(ao.RefreshTokenClientAcquireToken, e.correlationId);
      let t = D9(),
        n = await dh(this.executeTokenRequest.bind(this), ao.RefreshTokenClientExecuteTokenRequest, this.logger, this.performanceClient, e.correlationId)(e, this.authority),
        r = n.headers?.[rT.X_MS_REQUEST_ID],
        o = new qx(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
      return o.validateTokenResponse(n.body), dh(o.handleServerTokenResponse.bind(o), ao.HandleServerTokenResponse, this.logger, this.performanceClient, e.correlationId)(n.body, this.authority, t, e, void 0, void 0, !0, e.forceCache, r);
    }
    async acquireTokenByRefreshToken(e) {
      if (!e) throw jE(Qje);
      if (this.performanceClient?.addQueueMeasurement(ao.RefreshTokenClientAcquireTokenByRefreshToken, e.correlationId), !e.account) throw ts(Pye);
      if (this.cacheManager.isAppMetadataFOCI(e.account.environment)) try {
        return await dh(this.acquireTokenWithCachedRefreshToken.bind(this), ao.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, !0);
      } catch (n) {
        let r = n instanceof P9 && n.errorCode === Rxe,
          o = n instanceof vj && n.errorCode === BMt.INVALID_GRANT_ERROR && n.subError === BMt.CLIENT_MISMATCH_ERROR;
        if (r || o) return dh(this.acquireTokenWithCachedRefreshToken.bind(this), ao.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, !1);else throw n;
      }
      return dh(this.acquireTokenWithCachedRefreshToken.bind(this), ao.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, !1);
    }
    async acquireTokenWithCachedRefreshToken(e, t) {
      this.performanceClient?.addQueueMeasurement(ao.RefreshTokenClientAcquireTokenWithCachedRefreshToken, e.correlationId);
      let n = Ygi(this.cacheManager.getRefreshToken.bind(this.cacheManager), ao.CacheManagerGetRefreshToken, this.logger, this.performanceClient, e.correlationId)(e.account, t, e.correlationId, void 0, this.performanceClient);
      if (!n) throw pvn(Rxe);
      if (n.expiresOn && eot(n.expiresOn, e.refreshTokenExpirationOffsetSeconds || S_d)) throw this.performanceClient?.addFields({
        rtExpiresOnMs: Number(n.expiresOn)
      }, e.correlationId), pvn(B$t);
      let r = {
        ...e,
        refreshToken: n.secret,
        authenticationScheme: e.authenticationScheme || Rg.BEARER,
        ccsCredential: {
          credential: e.account.homeAccountId,
          type: Hj.HOME_ACCOUNT_ID
        }
      };
      try {
        return await dh(this.acquireToken.bind(this), ao.RefreshTokenClientAcquireToken, this.logger, this.performanceClient, e.correlationId)(r);
      } catch (o) {
        if (o instanceof P9) {
          if (this.performanceClient?.addFields({
            rtExpiresOnMs: Number(n.expiresOn)
          }, e.correlationId), o.subError === Lxe) {
            this.logger.verbose("acquireTokenWithRefreshToken: bad refresh token, removing from cache");
            let s = this.cacheManager.generateCredentialKey(n);
            this.cacheManager.removeRefreshToken(s, e.correlationId);
          }
        }
        throw o;
      }
    }
    async executeTokenRequest(e, t) {
      this.performanceClient?.addQueueMeasurement(ao.RefreshTokenClientExecuteTokenRequest, e.correlationId);
      let n = this.createTokenQueryParameters(e),
        r = sf.appendQueryString(t.tokenEndpoint, n),
        o = await dh(this.createTokenRequestBody.bind(this), ao.RefreshTokenClientCreateTokenRequestBody, this.logger, this.performanceClient, e.correlationId)(e),
        s = this.createTokenRequestHeaders(e.ccsCredential),
        i = rot(this.config.authOptions.clientId, e);
      return dh(this.executePostToTokenEndpoint.bind(this), ao.RefreshTokenClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, e.correlationId)(r, o, s, i, e.correlationId, ao.RefreshTokenClientExecutePostToTokenEndpoint);
    }
    async createTokenRequestBody(e) {
      this.performanceClient?.addQueueMeasurement(ao.RefreshTokenClientCreateTokenRequestBody, e.correlationId);
      let t = new Map();
      if (l4e(t, e.embeddedClientId || e.tokenBodyParameters?.[Rle] || this.config.authOptions.clientId), e.redirectUri) c4e(t, e.redirectUri);
      if (a4e(t, e.scopes, !0, this.config.authOptions.authority.options.OIDCOptions?.defaultScopes), I$t(t, XG.REFRESH_TOKEN_GRANT), p4e(t), A$t(t, this.config.libraryInfo), H$t(t, this.config.telemetry.application), D$t(t), this.serverTelemetryManager && !WTn(this.config)) L$t(t, this.serverTelemetryManager);
      if (HWr(t, e.refreshToken), this.config.clientCredentials.clientSecret) v$t(t, this.config.clientCredentials.clientSecret);
      if (this.config.clientCredentials.clientAssertion) {
        let n = this.config.clientCredentials.clientAssertion;
        w$t(t, await wj(n.assertion, this.config.authOptions.clientId, e.resourceRequestUri)), C$t(t, n.assertionType);
      }
      if (e.authenticationScheme === Rg.POP) {
        let n = new f4e(this.cryptoUtils, this.performanceClient),
          r;
        if (!e.popKid) r = (await dh(n.generateCnf.bind(n), ao.PopTokenGenerateCnf, this.logger, this.performanceClient, e.correlationId)(e, this.logger)).reqCnfString;else r = this.cryptoUtils.encodeKid(e.popKid);
        k$t(t, r);
      } else if (e.authenticationScheme === Rg.SSH) if (e.sshJwk) R$t(t, e.sshJwk);else throw jE(Nye);
      if (!sH.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) u4e(t, e.claims, this.config.authOptions.clientCapabilities);
      if (this.config.systemOptions.preventCorsPreflight && e.ccsCredential) switch (e.ccsCredential.type) {
        case Hj.HOME_ACCOUNT_ID:
          try {
            let n = xle(e.ccsCredential.credential);
            Fye(t, n);
          } catch (n) {
            this.logger.verbose("Could not parse home account ID for CCS Header: " + n);
          }
          break;
        case Hj.UPN:
          xxe(t, e.ccsCredential.credential);
          break;
      }
      if (e.embeddedClientId) Gye(t, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
      if (e.tokenBodyParameters) jye(t, e.tokenBodyParameters);
      return i4e(t, e.correlationId, this.performanceClient), kle(t);
    }
  };
});
var yvn;