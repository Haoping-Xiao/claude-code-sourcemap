// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dSn
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/index.js
// class=new  jaccard=0.0277  score=1  fileCov=0.0277
// note: nearest: node_modules/@aws-sdk/client-bedrock-runtime/dist-cjs/index.js (0.0277); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module dSn] deps: GNr, @smithy/smithy-client/dist-cjs/index.js, c6s, @aws-sdk/client-bedrock/dist-cjs/auth/httpAuthSchemeProvider.js, @aws-sdk/client-bedrock-runtime/dist-cjs/index.js, @aws-sdk/client-sts/dist-cjs/endpoint/EndpointParameters.js, @smithy/protocol-http/dist-cjs/index.js, fYs
lSn = R(Ghe(), 1), mYs = R(Whe(), 1), gYs = R(qhe(), 1), cSn = R(zae(), 1), hYs = R(Dx(), 1), bnt = R(yd(), 1), yYs = R(ME(), 1), _Ys = R(Jhe(), 1), bYs = R(yo(), 1), uSn = R(zO(), 1);
Snt = class Snt extends UDt {
  config;
  constructor(...[e]) {
    let t = tYs(e || {});
    super(t);
    this.initConfig = t;
    let n = nKs(t),
      r = cSn.resolveUserAgentConfig(n),
      o = uSn.resolveRetryConfig(r),
      s = hYs.resolveRegionConfig(o),
      i = lSn.resolveHostHeaderConfig(s),
      a = bYs.resolveEndpointConfig(i),
      l = l6s(a),
      c = tKs(l),
      u = l8s(c),
      d = s6s(u),
      p = pYs(d, e?.extensions || []);
    this.config = p, this.middlewareStack.use(yYs.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(cSn.getUserAgentPlugin(this.config)), this.middlewareStack.use(uSn.getRetryPlugin(this.config)), this.middlewareStack.use(_Ys.getContentLengthPlugin(this.config)), this.middlewareStack.use(lSn.getHostHeaderPlugin(this.config)), this.middlewareStack.use(mYs.getLoggerPlugin(this.config)), this.middlewareStack.use(gYs.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(bnt.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
      httpAuthSchemeParametersProvider: Zzs,
      identityProviderConfigProvider: async f => new bnt.DefaultIdentityProviderConfig({
        "aws.auth#sigv4": f.credentials,
        "smithy.api#httpBearerAuth": f.token
      })
    })), this.middlewareStack.use(bnt.getHttpSigningPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
};
var xD;