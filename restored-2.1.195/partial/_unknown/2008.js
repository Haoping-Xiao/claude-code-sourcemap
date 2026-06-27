// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wTi
// matched 2.1.88 source: node_modules/google-auth-library/build/src/auth/defaultawssecuritycredentialssupplier.js
// class=partial  jaccard=0.11  score=0.2404  fileCov=0.1686
// note: low-confidence suggestion: node_modules/google-auth-library/build/src/auth/defaultawssecuritycredentialssupplier.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var wTi = Q(pCn => {
  Object.defineProperty(pCn, "__esModule", {
    value: true
  });
  pCn.DefaultAwsSecurityCredentialsSupplier = void 0;
  var dCn = F9();
  class vTi {
    regionUrl;
    securityCredentialsUrl;
    imdsV2SessionTokenUrl;
    additionalGaxiosOptions;
    constructor(e) {
      this.regionUrl = e.regionUrl, this.securityCredentialsUrl = e.securityCredentialsUrl, this.imdsV2SessionTokenUrl = e.imdsV2SessionTokenUrl, this.additionalGaxiosOptions = e.additionalGaxiosOptions;
    }
    async getAwsRegion(e) {
      if (this.#r) return this.#r;
      let t = new Headers();
      if (!this.#r && this.imdsV2SessionTokenUrl) t.set("x-aws-ec2-metadata-token", await this.#e(e.transporter));
      if (!this.regionUrl) throw RangeError('Unable to determine AWS region due to missing "options.credential_source.region_url"');
      let n = {
        ...this.additionalGaxiosOptions,
        url: this.regionUrl,
        method: "GET",
        responseType: "text",
        headers: t
      };
      dCn.AuthClient.setMethodName(n, "getAwsRegion");
      let r = await e.transporter.request(n);
      return r.data.substr(0, r.data.length - 1);
    }
    async getAwsSecurityCredentials(e) {
      if (this.#o) return this.#o;
      let t = new Headers();
      if (this.imdsV2SessionTokenUrl) t.set("x-aws-ec2-metadata-token", await this.#e(e.transporter));
      let n = await this.#t(t, e.transporter),
        r = await this.#n(n, t, e.transporter);
      return {
        accessKeyId: r.AccessKeyId,
        secretAccessKey: r.SecretAccessKey,
        token: r.Token
      };
    }
    async #e(e) {
      let t = {
        ...this.additionalGaxiosOptions,
        url: this.imdsV2SessionTokenUrl,
        method: "PUT",
        responseType: "text",
        headers: {
          "x-aws-ec2-metadata-token-ttl-seconds": "300"
        }
      };
      return dCn.AuthClient.setMethodName(t, "#getImdsV2SessionToken"), (await e.request(t)).data;
    }
    async #t(e, t) {
      if (!this.securityCredentialsUrl) throw Error('Unable to determine AWS role name due to missing "options.credential_source.url"');
      let n = {
        ...this.additionalGaxiosOptions,
        url: this.securityCredentialsUrl,
        method: "GET",
        responseType: "text",
        headers: e
      };
      return dCn.AuthClient.setMethodName(n, "#getAwsRoleName"), (await t.request(n)).data;
    }
    async #n(e, t, n) {
      let r = {
        ...this.additionalGaxiosOptions,
        url: `${this.securityCredentialsUrl}/${e}`,
        headers: t,
        responseType: "json"
      };
      return dCn.AuthClient.setMethodName(r, "#retrieveAwsSecurityCredentials"), (await n.request(r)).data;
    }
    get #r() {
      return process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || null;
    }
    get #o() {
      if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) return {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        token: process.env.AWS_SESSION_TOKEN
      };
      return null;
    }
  }
  pCn.DefaultAwsSecurityCredentialsSupplier = vTi;
});