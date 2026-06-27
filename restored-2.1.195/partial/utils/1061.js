// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FGs
// matched 2.1.88 source: node_modules/@smithy/protocol-http/dist-cjs/index.js
// class=partial  jaccard=0.0739  score=1  fileCov=0.0739
// note: low-confidence suggestion: node_modules/@smithy/protocol-http/dist-cjs/index.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module FGs] deps: @smithy/util-buffer-from/dist-cjs/index.js, utils/proxy.ts, @smithy/smithy-client/dist-cjs/index.js, @aws-sdk/client-bedrock/dist-cjs/runtimeConfig.js, @aws-sdk/client-bedrock/dist-cjs/auth/httpAuthSchemeProvider.js, @aws-sdk/client-bedrock/dist-cjs/auth/httpAuthSchemeProvider.js
Vtt = R(eT(), 1), Fyn = R(Zhe(), 1), HIe = R(Dx(), 1), MGs = R(yd(), 1), $Gs = R(eye(), 1), jyn = R(zO(), 1), AIe = R(RB(), 1), Gyn = R(PG(), 1), OGs = R(tye(), 1), NGs = R(Kae(), 1), BGs = R(sye(), 1);
var jGs = e => ({
    setHttpHandler(t) {
      e.httpHandler = t;
    },
    httpHandler() {
      return e.httpHandler;
    },
    updateHttpClientConfig(t, n) {
      e.httpHandler?.updateHttpClientConfig(t, n);
    },
    httpHandlerConfigs() {
      return e.httpHandler.httpHandlerConfigs();
    }
  }),
  GGs = e => ({
    httpHandler: e.httpHandler()
  });
var WGs = () => {};
var qGs = () => {};
var VGs = () => {};
var zGs = () => {};