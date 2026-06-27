// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cPt
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock/dist-cjs/auth/httpAuthSchemeProvider.js
// class=partial  jaccard=0.1196  score=1  fileCov=0.1196
// note: low-confidence suggestion: node_modules/@aws-sdk/client-bedrock/dist-cjs/auth/httpAuthSchemeProvider.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var cPt = E(() => {
  kD();
  OUr();
  E9();
  CQs();
  NQs();
  cEn = R(Ghe(), 1), BQs = R(Whe(), 1), UQs = R(qhe(), 1), uEn = R(zae(), 1), FQs = R(Dx(), 1), Mnt = R(yd(), 1), jQs = R(ME(), 1), GQs = R(Jhe(), 1), WQs = R(yo(), 1), dEn = R(zO(), 1);
  pye = class pye extends aPt {
    config;
    constructor(...[e]) {
      let t = wQs(e || {});
      super(t);
      this.initConfig = t;
      let n = OJs(t),
        r = uEn.resolveUserAgentConfig(n),
        o = dEn.resolveRetryConfig(r),
        s = FQs.resolveRegionConfig(o),
        i = cEn.resolveHostHeaderConfig(s),
        a = WQs.resolveEndpointConfig(i),
        l = $Js(a),
        c = OQs(l, e?.extensions || []);
      this.config = c, this.middlewareStack.use(jQs.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(uEn.getUserAgentPlugin(this.config)), this.middlewareStack.use(dEn.getRetryPlugin(this.config)), this.middlewareStack.use(GQs.getContentLengthPlugin(this.config)), this.middlewareStack.use(cEn.getHostHeaderPlugin(this.config)), this.middlewareStack.use(BQs.getLoggerPlugin(this.config)), this.middlewareStack.use(UQs.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(Mnt.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: PJs,
        identityProviderConfigProvider: async u => new Mnt.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": u.credentials
        })
      })), this.middlewareStack.use(Mnt.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  };
});
var RD;