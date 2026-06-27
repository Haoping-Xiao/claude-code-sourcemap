// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qqr
// matched 2.1.88 source: src/services/api/client.ts
// class=new  jaccard=0.0338  score=0.1886  fileCov=0.0395
// note: nearest: src/services/api/client.ts (0.0338); dir inferred from dep-graph -> constants; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Qqr = E(() => {
  SAi();
  ROt();
  TAi();
  OK();
  OK();
  xAi();
  Jqr = class Jqr extends G2 {
    constructor({
      awsRegion: e,
      baseURL: t,
      apiKey: n,
      awsAccessKey: r = null,
      awsSecretAccessKey: o = null,
      awsSessionToken: s = null,
      awsProfile: i,
      providerChainResolver: a = null,
      workspaceId: l,
      skipAuth: c = false,
      ...u
    } = {}) {
      let d = e ?? bot("AWS_REGION") ?? bot("AWS_DEFAULT_REGION"),
        p = t ?? bot("ANTHROPIC_AWS_BASE_URL") ?? (d ? `https://aws-external-anthropic.${d}.api.aws` : void 0);
      if (!p && !c) throw new ui("No AWS region or base URL found. Set `awsRegion` in the constructor, the `AWS_REGION` / `AWS_DEFAULT_REGION` environment variable, or provide a `baseURL` / `ANTHROPIC_AWS_BASE_URL` environment variable.");
      let f = n != null;
      if (r != null !== (o != null)) throw new ui("`awsAccessKey` and `awsSecretAccessKey` must be provided together. You provided only one.");
      let g = r != null && o != null,
        h = i != null,
        y;
      if (f) y = n;else if (!g && !h) y = bot("ANTHROPIC_AWS_API_KEY") ?? void 0;
      let b = l ?? bot("ANTHROPIC_AWS_WORKSPACE_ID");
      if (!b && !c) throw new ui("No workspace ID found. Set `workspaceId` in the constructor or the `ANTHROPIC_AWS_WORKSPACE_ID` environment variable.");
      super({
        apiKey: y,
        baseURL: p,
        ...u,
        defaultHeaders: Xqr([{
          "anthropic-workspace-id": b
        }, u.defaultHeaders])
      });
      this.skipAuth = false, this.awsRegion = d, this.awsAccessKey = r, this.awsSecretAccessKey = o, this.awsSessionToken = s, this.awsProfile = i ?? null, this.providerChainResolver = a, this.workspaceId = b, this.skipAuth = c, this._useSigV4 = y == null;
    }
    async authHeaders(e) {
      if (this.skipAuth) return;
      if (!this._useSigV4) return super.authHeaders(e);
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
      let o = await IAi(e, {
        url: t,
        regionName: r,
        serviceName: Wwd,
        awsAccessKey: this.awsAccessKey,
        awsSecretAccessKey: this.awsSecretAccessKey,
        awsSessionToken: this.awsSessionToken,
        awsProfile: this.awsProfile,
        providerChainResolver: this.providerChainResolver
      });
      e.headers = Xqr([o, e.headers]).values;
    }
  };
});
var kAi = {};
_t(kAi, {
  default: () => Jqr,
  BaseAnthropic: () => ah,
  AnthropicAws: () => Jqr
});