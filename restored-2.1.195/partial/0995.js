// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module q$r
// matched 2.1.88 source: node_modules/@aws-sdk/client-sts/dist-cjs/STSClient.js
// class=partial  jaccard=0.1257  score=1  fileCov=0.1257
// note: low-confidence suggestion: node_modules/@aws-sdk/client-sts/dist-cjs/STSClient.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var q$r = Q(Ott => {
  Object.defineProperty(Ott, "__esModule", {
    value: !0
  });
  Ott.STSClient = Ott.__Client = void 0;
  var PFs = Ghe(),
    P8u = Whe(),
    M8u = qhe(),
    MFs = zae(),
    $8u = Dx(),
    Q$r = yd(),
    O8u = ME(),
    N8u = Jhe(),
    B8u = yo(),
    $Fs = zO(),
    NFs = fj();
  Object.defineProperty(Ott, "__Client", {
    enumerable: !0,
    get: function () {
      return NFs.Client;
    }
  });
  var OFs = W$r(),
    U8u = V$r(),
    F8u = CFs(),
    j8u = DFs();
  class BFs extends NFs.Client {
    config;
    constructor(...[e]) {
      let t = (0, F8u.getRuntimeConfig)(e || {});
      super(t);
      this.initConfig = t;
      let n = (0, U8u.resolveClientEndpointParameters)(t),
        r = (0, MFs.resolveUserAgentConfig)(n),
        o = (0, $Fs.resolveRetryConfig)(r),
        s = (0, $8u.resolveRegionConfig)(o),
        i = (0, PFs.resolveHostHeaderConfig)(s),
        a = (0, B8u.resolveEndpointConfig)(i),
        l = (0, OFs.resolveHttpAuthSchemeConfig)(a),
        c = (0, j8u.resolveRuntimeExtensions)(l, e?.extensions || []);
      this.config = c, this.middlewareStack.use((0, O8u.getSchemaSerdePlugin)(this.config)), this.middlewareStack.use((0, MFs.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, $Fs.getRetryPlugin)(this.config)), this.middlewareStack.use((0, N8u.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, PFs.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, P8u.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, M8u.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, Q$r.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
        httpAuthSchemeParametersProvider: OFs.defaultSTSHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async u => new Q$r.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": u.credentials
        })
      })), this.middlewareStack.use((0, Q$r.getHttpSigningPlugin)(this.config));
    }
    destroy() {
      super.destroy();
    }
  }
  Ott.STSClient = BFs;
});