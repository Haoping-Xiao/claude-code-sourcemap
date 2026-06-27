// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uza
// matched 2.1.88 source: src/services/oauth/index.ts
// class=modified  jaccard=0.5334  score=0.7373  fileCov=0.6586
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module uza]
Wqt = require("crypto");
class I6 {
  codeVerifier;
  authCodeListener = null;
  port = null;
  manualAuthCodeResolver = null;
  constructor() {
    this.codeVerifier = aza();
  }
  async startOAuthFlow(e, t) {
    ((this.authCodeListener = new lAo()), (this.port = await this.authCodeListener.start()));
    let n = lza(this.codeVerifier),
      r = cza(),
      o = {
        codeChallenge: n,
        state: r,
        port: this.port,
        loginWithClaudeAi: t?.loginWithClaudeAi,
        inferenceOnly: t?.inferenceOnly,
        orgUUID: t?.orgUUID,
        loginHint: t?.loginHint,
        loginMethod: t?.loginMethod,
        oauthClient: t?.oauthClient,
      },
      s = jSn({
        ...o,
        isManual: true,
      }),
      i = jSn({
        ...o,
        isManual: false,
      }),
      a = await this.waitForAuthorizationCode(r, async () => {
        if (t?.skipBrowserOpen) await e(s, i);
        else (await e(s), await ac(i));
      }),
      l = this.authCodeListener?.hasPendingResponse() ?? false;
    G("tengu_oauth_auth_code_received", {
      automatic: l,
    });
    try {
      let c = await hUr(
          a,
          r,
          this.codeVerifier,
          this.port,
          !l,
          t?.expiresIn,
          t?.oauthClient?.clientId,
        ),
        u = t?.skipProfileFetch ? null : await GSn(c.access_token);
      if (l) {
        let d = rPt(c.scope),
          p = t?.successRedirectUrl;
        if (p)
          this.authCodeListener?.handleSuccessRedirect(d, (f) => {
            (f.writeHead(302, {
              Location: p,
            }),
              f.end());
          });
        else this.authCodeListener?.handleSuccessRedirect(d);
      }
      return (
        xe("oauth_login"),
        this.formatTokens(
          c,
          u?.subscriptionType ?? null,
          u?.rateLimitTier ?? null,
          u?.rawProfile,
          t?.oauthClient?.clientId,
        )
      );
    } catch (c) {
      if ((Le("oauth_login", "oauth_login_failed"), l))
        this.authCodeListener?.handleErrorRedirect();
      if (!t?.inferenceOnly && !t?.oauthClient)
        ZGe({
          action: "login",
          success: false,
          authMethod: "oauth",
          error: c,
        });
      throw c;
    } finally {
      this.authCodeListener?.close();
    }
  }
  async waitForAuthorizationCode(e, t) {
    return new Promise((n, r) => {
      ((this.manualAuthCodeResolver = n),
        this.authCodeListener
          ?.waitForAuthorization(e, t)
          .then((o) => {
            ((this.manualAuthCodeResolver = null), n(o));
          })
          .catch((o) => {
            ((this.manualAuthCodeResolver = null), r(o));
          }));
    });
  }
  handleManualAuthCodeInput(e) {
    if (this.manualAuthCodeResolver)
      (this.manualAuthCodeResolver(e.authorizationCode),
        (this.manualAuthCodeResolver = null),
        this.authCodeListener?.close());
  }
  formatTokens(e, t, n, r, o) {
    return {
      accessToken: e.access_token,
      refreshToken: e.refresh_token,
      expiresAt: Date.now() + e.expires_in * 1000,
      scopes: rPt(e.scope),
      subscriptionType: t,
      rateLimitTier: n,
      profile: r,
      clientId: o,
      tokenAccount: e.account
        ? {
            uuid: e.account.uuid,
            emailAddress: e.account.email_address,
            organizationUuid: e.organization?.uuid,
          }
        : void 0,
    };
  }
  cleanup() {
    (this.authCodeListener?.close(), (this.manualAuthCodeResolver = null));
  }
}
