// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jEn
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock/dist-cjs/auth/httpAuthSchemeProvider.js
// class=partial  jaccard=0.1196  score=1  fileCov=0.1196
// note: low-confidence suggestion: node_modules/@aws-sdk/client-bedrock/dist-cjs/auth/httpAuthSchemeProvider.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var jEn = E(() => {
  pb();
  uFr();
  _v();
  uni();
  Eni();
  BEn = R(Ghe(), 1), Ani = R(Whe(), 1), Hni = R(qhe(), 1), UEn = R(zae(), 1), Tni = R(Dx(), 1), Unt = R(yd(), 1), vni = R(ME(), 1), wni = R(Jhe(), 1), Cni = R(yo(), 1), FEn = R(zO(), 1);
  K2e = class K2e extends CEn {
    config;
    constructor(...[e]) {
      let t = cni(e || {});
      super(t);
      this.initConfig = t;
      let n = vti(t),
        r = UEn.resolveUserAgentConfig(n),
        o = FEn.resolveRetryConfig(r),
        s = Tni.resolveRegionConfig(o),
        i = BEn.resolveHostHeaderConfig(s),
        a = Cni.resolveEndpointConfig(i),
        l = Tti(a),
        c = Sni(l, e?.extensions || []);
      this.config = c, this.middlewareStack.use(vni.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(UEn.getUserAgentPlugin(this.config)), this.middlewareStack.use(FEn.getRetryPlugin(this.config)), this.middlewareStack.use(wni.getContentLengthPlugin(this.config)), this.middlewareStack.use(BEn.getHostHeaderPlugin(this.config)), this.middlewareStack.use(Ani.getLoggerPlugin(this.config)), this.middlewareStack.use(Hni.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(Unt.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: Ati,
        identityProviderConfigProvider: async u => new Unt.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": u.credentials
        })
      })), this.middlewareStack.use(Unt.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  };
});
var XB;