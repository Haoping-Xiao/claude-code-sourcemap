// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jR
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/index.js
// class=new  jaccard=0.0277  score=1  fileCov=0.0277
// note: nearest: node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/index.js (0.0277); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var jR = E(() => {
  Zs();
  YOr();
  Ei();
  FGs();
  QGs();
  qyn = R(Ghe(), 1), ZGs = R(Whe(), 1), eWs = R(qhe(), 1), Vyn = R(zae(), 1), tWs = R(Dx(), 1), ztt = R(yd(), 1), nWs = R(ME(), 1), rWs = R(Jhe(), 1), oWs = R(yo(), 1), zyn = R(zO(), 1);
  ng = class ng extends SDt {
    config;
    constructor(...[e]) {
      let t = UGs(e || {});
      super(t);
      this.initConfig = t;
      let n = nGs(t),
        r = Vyn.resolveUserAgentConfig(n),
        o = zyn.resolveRetryConfig(r),
        s = tWs.resolveRegionConfig(o),
        i = qyn.resolveHostHeaderConfig(s),
        a = oWs.resolveEndpointConfig(i),
        l = tGs(a),
        c = JGs(l, e?.extensions || []);
      this.config = c, this.middlewareStack.use(nWs.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(Vyn.getUserAgentPlugin(this.config)), this.middlewareStack.use(zyn.getRetryPlugin(this.config)), this.middlewareStack.use(rWs.getContentLengthPlugin(this.config)), this.middlewareStack.use(qyn.getHostHeaderPlugin(this.config)), this.middlewareStack.use(ZGs.getLoggerPlugin(this.config)), this.middlewareStack.use(eWs.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(ztt.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: Z3s,
        identityProviderConfigProvider: async u => new ztt.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": u.credentials,
          "smithy.api#httpBearerAuth": u.token
        })
      })), this.middlewareStack.use(ztt.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  };
});
var JO;