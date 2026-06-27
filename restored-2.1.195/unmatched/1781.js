// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Zb
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Zb = E(() => {
  rhi();
  ohi();
  shi();
  O$t();
  S$t();
  rvn();
  $Tn();
  h$t();
  xGr();
  UTn();
  Ixe();
  yGr();
  ahi();
  Zrt();
  F$t();
  m$t();
  DTn();
  U$t();
  cvn();
  n7();
  fGr();
  not();
  JR();
  C0();
  wxe();
  Bye();
  oT();
  Cxe();
  uhi();
  Krt();
  LWr();
  tvn();
  kxe();
  r4e();
  Jrt();
  OWr();
  gvn(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});
class Pxe {
  static deserializeJSONBlob(e) {
    return !e ? {} : JSON.parse(e);
  }
  static deserializeAccounts(e) {
    let t = {};
    if (e) Object.keys(e).map(function (n) {
      let r = e[n],
        o = {
          homeAccountId: r.home_account_id,
          environment: r.environment,
          realm: r.realm,
          localAccountId: r.local_account_id,
          username: r.username,
          authorityType: r.authority_type,
          name: r.name,
          clientInfo: r.client_info,
          lastModificationTime: r.last_modification_time,
          lastModificationApp: r.last_modification_app,
          tenantProfiles: r.tenantProfiles?.map(i => JSON.parse(i)),
          lastUpdatedAt: Date.now().toString()
        },
        s = new QR();
      o4e.toObject(s, o), t[n] = s;
    });
    return t;
  }
  static deserializeIdTokens(e) {
    let t = {};
    if (e) Object.keys(e).map(function (n) {
      let r = e[n],
        o = {
          homeAccountId: r.home_account_id,
          environment: r.environment,
          credentialType: r.credential_type,
          clientId: r.client_id,
          secret: r.secret,
          realm: r.realm,
          lastUpdatedAt: Date.now().toString()
        };
      t[n] = o;
    });
    return t;
  }
  static deserializeAccessTokens(e) {
    let t = {};
    if (e) Object.keys(e).map(function (n) {
      let r = e[n],
        o = {
          homeAccountId: r.home_account_id,
          environment: r.environment,
          credentialType: r.credential_type,
          clientId: r.client_id,
          secret: r.secret,
          realm: r.realm,
          target: r.target,
          cachedAt: r.cached_at,
          expiresOn: r.expires_on,
          extendedExpiresOn: r.extended_expires_on,
          refreshOn: r.refresh_on,
          keyId: r.key_id,
          tokenType: r.token_type,
          requestedClaims: r.requestedClaims,
          requestedClaimsHash: r.requestedClaimsHash,
          userAssertionHash: r.userAssertionHash,
          lastUpdatedAt: Date.now().toString()
        };
      t[n] = o;
    });
    return t;
  }
  static deserializeRefreshTokens(e) {
    let t = {};
    if (e) Object.keys(e).map(function (n) {
      let r = e[n],
        o = {
          homeAccountId: r.home_account_id,
          environment: r.environment,
          credentialType: r.credential_type,
          clientId: r.client_id,
          secret: r.secret,
          familyId: r.family_id,
          target: r.target,
          realm: r.realm,
          lastUpdatedAt: Date.now().toString()
        };
      t[n] = o;
    });
    return t;
  }
  static deserializeAppMetadata(e) {
    let t = {};
    if (e) Object.keys(e).map(function (n) {
      let r = e[n];
      t[n] = {
        clientId: r.client_id,
        environment: r.environment,
        familyId: r.family_id
      };
    });
    return t;
  }
  static deserializeAllCache(e) {
    return {
      accounts: e.Account ? this.deserializeAccounts(e.Account) : {},
      idTokens: e.IdToken ? this.deserializeIdTokens(e.IdToken) : {},
      accessTokens: e.AccessToken ? this.deserializeAccessTokens(e.AccessToken) : {},
      refreshTokens: e.RefreshToken ? this.deserializeRefreshTokens(e.RefreshToken) : {},
      appMetadata: e.AppMetadata ? this.deserializeAppMetadata(e.AppMetadata) : {}
    };
  }
}