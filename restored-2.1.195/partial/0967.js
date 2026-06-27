// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iDt
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock/dist-cjs/auth/httpAuthSchemeProvider.js
// class=partial  jaccard=0.1196  score=1  fileCov=0.1196
// note: low-confidence suggestion: node_modules/@aws-sdk/client-bedrock/dist-cjs/auth/httpAuthSchemeProvider.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var iDt = E(() => {
  LY();
  x$r();
  Ctt();
  iUs();
  yUs();
  Vhn = R(Ghe(), 1), _Us = R(Whe(), 1), bUs = R(qhe(), 1), zhn = R(zae(), 1), SUs = R(Dx(), 1), xtt = R(yd(), 1), EUs = R(ME(), 1), AUs = R(Jhe(), 1), HUs = R(yo(), 1), Khn = R(zO(), 1);
  iye = class iye extends Phn {
    config;
    constructor(...[e]) {
      let t = sUs(e || {});
      super(t);
      this.initConfig = t;
      let n = EBs(t),
        r = zhn.resolveUserAgentConfig(n),
        o = Khn.resolveRetryConfig(r),
        s = SUs.resolveRegionConfig(o),
        i = Vhn.resolveHostHeaderConfig(s),
        a = HUs.resolveEndpointConfig(i),
        l = SBs(a),
        c = hUs(l, e?.extensions || []);
      this.config = c, this.middlewareStack.use(EUs.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(zhn.getUserAgentPlugin(this.config)), this.middlewareStack.use(Khn.getRetryPlugin(this.config)), this.middlewareStack.use(AUs.getContentLengthPlugin(this.config)), this.middlewareStack.use(Vhn.getHostHeaderPlugin(this.config)), this.middlewareStack.use(_Us.getLoggerPlugin(this.config)), this.middlewareStack.use(bUs.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(xtt.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: _Bs,
        identityProviderConfigProvider: async u => new xtt.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": u.credentials
        })
      })), this.middlewareStack.use(xtt.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  };
});
var aye;