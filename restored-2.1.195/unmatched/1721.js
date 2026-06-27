// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Cgi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Cgi = E(() => {
  r3r();
  dGr();
  Cyd = {
    cachePluginControl: npi,
    nativeBrokerPluginControl: rpi,
    vsCodeCredentialControl: wgi
  };
});
class Cje {
  static serializeJSONBlob(e) {
    return JSON.stringify(e);
  }
  static serializeAccounts(e) {
    let t = {};
    return Object.keys(e).map(function (n) {
      let r = e[n];
      t[n] = {
        home_account_id: r.homeAccountId,
        environment: r.environment,
        realm: r.realm,
        local_account_id: r.localAccountId,
        username: r.username,
        authority_type: r.authorityType,
        name: r.name,
        client_info: r.clientInfo,
        last_modification_time: r.lastModificationTime,
        last_modification_app: r.lastModificationApp,
        tenantProfiles: r.tenantProfiles?.map(o => JSON.stringify(o))
      };
    }), t;
  }
  static serializeIdTokens(e) {
    let t = {};
    return Object.keys(e).map(function (n) {
      let r = e[n];
      t[n] = {
        home_account_id: r.homeAccountId,
        environment: r.environment,
        credential_type: r.credentialType,
        client_id: r.clientId,
        secret: r.secret,
        realm: r.realm
      };
    }), t;
  }
  static serializeAccessTokens(e) {
    let t = {};
    return Object.keys(e).map(function (n) {
      let r = e[n];
      t[n] = {
        home_account_id: r.homeAccountId,
        environment: r.environment,
        credential_type: r.credentialType,
        client_id: r.clientId,
        secret: r.secret,
        realm: r.realm,
        target: r.target,
        cached_at: r.cachedAt,
        expires_on: r.expiresOn,
        extended_expires_on: r.extendedExpiresOn,
        refresh_on: r.refreshOn,
        key_id: r.keyId,
        token_type: r.tokenType,
        requestedClaims: r.requestedClaims,
        requestedClaimsHash: r.requestedClaimsHash,
        userAssertionHash: r.userAssertionHash
      };
    }), t;
  }
  static serializeRefreshTokens(e) {
    let t = {};
    return Object.keys(e).map(function (n) {
      let r = e[n];
      t[n] = {
        home_account_id: r.homeAccountId,
        environment: r.environment,
        credential_type: r.credentialType,
        client_id: r.clientId,
        secret: r.secret,
        family_id: r.familyId,
        target: r.target,
        realm: r.realm
      };
    }), t;
  }
  static serializeAppMetadata(e) {
    let t = {};
    return Object.keys(e).map(function (n) {
      let r = e[n];
      t[n] = {
        client_id: r.clientId,
        environment: r.environment,
        family_id: r.familyId
      };
    }), t;
  }
  static serializeAllCache(e) {
    return {
      Account: this.serializeAccounts(e.accounts),
      IdToken: this.serializeIdTokens(e.idTokens),
      AccessToken: this.serializeAccessTokens(e.accessTokens),
      RefreshToken: this.serializeRefreshTokens(e.refreshTokens),
      AppMetadata: this.serializeAppMetadata(e.appMetadata)
    };
  }
}