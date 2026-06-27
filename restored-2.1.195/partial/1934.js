// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Iqr
// matched 2.1.88 source: node_modules/@azure/identity/dist/esm/credentials/azurePowerShellCredential.js
// class=partial  jaccard=0.2445  score=0.5398  fileCov=0.3088
// note: low-confidence suggestion: node_modules/@azure/identity/dist/esm/credentials/azurePowerShellCredential.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Iqr = E(() => {
  OD();
  UE();
  Mle();
  $D();
  tAi();
  l1();
  Zye = zp("AzurePowerShellCredential");
  sAi = {
    login: "Run Connect-AzAccount to login",
    installed: "The specified module 'Az.Accounts' with version '2.2.0' was not loaded because no valid module file was found in any module directory"
  }, wqr = {
    login: "Please run 'Connect-AzAccount' from PowerShell to authenticate before using this credential.",
    installed: `The 'Az.Account' module >= 2.2.0 is not installed. Install the Azure Az PowerShell module with: "Install-Module -Name Az -Scope CurrentUser -Repository PSGallery -Force".`,
    troubleshoot: "To troubleshoot, visit https://aka.ms/azsdk/js/identity/powershellcredential/troubleshoot."
  }, Cqr = [oAi("pwsh")];
  if (rAi) Cqr.push(oAi("powershell"));
});
class HOt {
  constructor(...e) {
    this._sources = [], this._sources = e;
  }
  async getToken(e, t = {}) {
    let {
      token: n
    } = await this.getTokenInternal(e, t);
    return n;
  }
  async getTokenInternal(e, t = {}) {
    let n = null,
      r,
      o = [];
    return Hy.withSpan("ChainedTokenCredential.getToken", t, async s => {
      for (let i = 0; i < this._sources.length && n === null; i++) try {
        n = await this._sources[i].getToken(e, s), r = this._sources[i];
      } catch (a) {
        if (a.name === "CredentialUnavailableError" || a.name === "AuthenticationRequiredError") o.push(a);else throw xqr.getToken.info(uh(e, a)), a;
      }
      if (!n && o.length > 0) {
        let i = new _Mt(o, "ChainedTokenCredential authentication failed.");
        throw xqr.getToken.info(uh(e, i)), i;
      }
      if (xqr.getToken.info(`Result for ${r.constructor.name}: ${YR(e)}`), n === null) throw new hl("Failed to retrieve a valid token");
      return {
        token: n,
        successfulCredential: r
      };
    });
  }
}
var xqr;