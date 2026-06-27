// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tEi
// matched 2.1.88 source: node_modules/@azure/msal-node/dist/client/ManagedIdentityApplication.mjs
// class=partial  jaccard=0.1883  score=1  fileCov=0.1883
// note: low-confidence suggestion: node_modules/@azure/msal-node/dist/client/ManagedIdentityApplication.mjs; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var tEi = E(() => {
  jSi();
  zSi();
  KSi();
  QSi();
  ZSi();
  sot();
  Tv();
  eEi();
  g4e(); /*! @azure/msal-node v3.8.1 2025-10-29 */
});
class Ple {
  constructor(e) {
    this.config = Lhi(e || {}), this.logger = new JG(this.config.system.loggerOptions, pwn, vte);
    let t = {
      canonicalAuthority: vo.DEFAULT_AUTHORITY
    };
    if (!Ple.nodeStorage) Ple.nodeStorage = new y4e(this.logger, this.config.managedIdentityId.id, jrt, t);
    this.networkClient = this.config.system.networkClient, this.cryptoProvider = new zye();
    let n = {
      protocolMode: aU.AAD,
      knownAuthorities: [UWr],
      cloudDiscoveryMetadata: "",
      authorityMetadata: ""
    };
    this.fakeAuthority = new BD(UWr, this.networkClient, Ple.nodeStorage, n, this.logger, this.cryptoProvider.createNewGuid(), void 0, !0), this.fakeClientCredentialClient = new E4e({
      authOptions: {
        clientId: this.config.managedIdentityId.id,
        authority: this.fakeAuthority
      }
    }), this.managedIdentityClient = new Yye(this.logger, Ple.nodeStorage, this.networkClient, this.cryptoProvider, this.config.disableInternalRetries), this.hashUtils = new h4e();
  }
  async acquireToken(e) {
    if (!e.resource) throw jE(Wrt.urlEmptyError);
    let t = {
      forceRefresh: e.forceRefresh,
      resource: e.resource.replace("/.default", ""),
      scopes: [e.resource.replace("/.default", "")],
      authority: this.fakeAuthority.canonicalAuthority,
      correlationId: this.cryptoProvider.createNewGuid(),
      claims: e.claims,
      clientCapabilities: this.config.clientCapabilities
    };
    if (t.forceRefresh) return this.acquireTokenFromManagedIdentity(t, this.config.managedIdentityId, this.fakeAuthority);
    let [n, r] = await this.fakeClientCredentialClient.getCachedAuthenticationResult(t, this.config, this.cryptoProvider, this.fakeAuthority, Ple.nodeStorage);
    if (t.claims) {
      let o = this.managedIdentityClient.getManagedIdentitySource();
      if (n && Qvd.includes(o)) {
        let s = this.hashUtils.sha256(n.accessToken).toString(c1.HEX);
        t.revokedTokenSha256Hash = s;
      }
      return this.acquireTokenFromManagedIdentity(t, this.config.managedIdentityId, this.fakeAuthority);
    }
    if (n) {
      if (r === oH.PROACTIVELY_REFRESHED) {
        this.logger.info("ClientCredentialClient:getCachedAuthenticationResult - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.");
        let o = !0;
        await this.acquireTokenFromManagedIdentity(t, this.config.managedIdentityId, this.fakeAuthority, o);
      }
      return n;
    } else return this.acquireTokenFromManagedIdentity(t, this.config.managedIdentityId, this.fakeAuthority);
  }
  async acquireTokenFromManagedIdentity(e, t, n, r) {
    return this.managedIdentityClient.sendManagedIdentityTokenRequest(e, t, n, r);
  }
  getManagedIdentitySource() {
    return Yye.sourceName || this.managedIdentityClient.getManagedIdentitySource();
  }
}
var Qvd;