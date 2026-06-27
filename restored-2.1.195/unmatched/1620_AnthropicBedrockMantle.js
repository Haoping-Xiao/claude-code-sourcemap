// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Wdi
// matched 2.1.88 source: src/utils/managedEnvConstants.ts
// class=new  jaccard=0.0252  score=0.27  fileCov=0.0271
// note: nearest: src/utils/managedEnvConstants.ts (0.0252); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Wdi = E(() => {
  W4r();
  UHn();
  OK();
  NJe();
  Gdi();
  K4r = class K4r extends ah {
    constructor({
      awsRegion: e,
      baseURL: t,
      apiKey: n,
      awsAccessKey: r = null,
      awsSecretAccessKey: o = null,
      awsSessionToken: s = null,
      awsProfile: i,
      providerChainResolver: a = null,
      skipAuth: l = !1,
      ...c
    } = {}) {
      let u = e ?? Cye("AWS_REGION") ?? Cye("AWS_DEFAULT_REGION"),
        d = t ?? Cye("ANTHROPIC_BEDROCK_MANTLE_BASE_URL") ?? (u ? `https://bedrock-mantle.${u}.api.aws/anthropic` : void 0);
      if (!d) throw new ui("No AWS region or base URL found. Set `awsRegion` in the constructor, the `AWS_REGION` / `AWS_DEFAULT_REGION` environment variable, or provide a `baseURL` / `ANTHROPIC_BEDROCK_MANTLE_BASE_URL` environment variable.");
      let p = n != null;
      if (r != null !== (o != null)) throw new ui("`awsAccessKey` and `awsSecretAccessKey` must be provided together. You provided only one.");
      let m = r != null && o != null,
        g = i != null,
        h;
      if (p) h = n;else if (!m && !g) h = Cye("AWS_BEARER_TOKEN_BEDROCK") ?? void 0;
      super({
        apiKey: h,
        baseURL: d,
        ...c
      });
      this.messages = new j2(this), this.beta = pgd(this), this.skipAuth = !1, this.awsRegion = u, this.awsAccessKey = r, this.awsSecretAccessKey = o, this.awsSessionToken = s, this.awsProfile = i ?? null, this.providerChainResolver = a, this.skipAuth = l, this._useSigV4 = h == null;
    }
    async authHeaders(e) {
      if (this.skipAuth) return;
      if (!this._useSigV4) return vrt([{
        Authorization: `Bearer ${this.apiKey}`
      }]);
      return;
    }
    validateHeaders() {}
    async prepareRequest(e, {
      url: t,
      options: n
    }) {
      if (this.skipAuth || !this._useSigV4) return;
      let r = this.awsRegion;
      if (!r) throw new ui("No AWS region found. Set `awsRegion` in the constructor or the `AWS_REGION` / `AWS_DEFAULT_REGION` environment variable.");
      let o = await jdi(e, {
        url: t,
        regionName: r,
        serviceName: dgd,
        awsAccessKey: this.awsAccessKey,
        awsSecretAccessKey: this.awsSecretAccessKey,
        awsSessionToken: this.awsSessionToken,
        awsProfile: this.awsProfile,
        providerChainResolver: this.providerChainResolver
      });
      e.headers = vrt([o, e.headers]).values;
    }
  };
});
var Eje = {};
_t(Eje, {
  default: () => V4r,
  BaseAnthropic: () => ah,
  AnthropicBedrockMantle: () => K4r,
  AnthropicBedrock: () => V4r
});