// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uni
// matched 2.1.88 source: node_modules/@smithy/protocol-http/dist-cjs/index.js
// class=partial  jaccard=0.0739  score=1  fileCov=0.0739
// note: low-confidence suggestion: node_modules/@smithy/protocol-http/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module uni] deps: @smithy/util-buffer-from/dist-cjs/index.js, utils/proxy.ts, @aws-sdk/client-cognito-identity/dist-cjs/runtimeConfig.js, @aws-sdk/client-cognito-identity/dist-cjs/auth/httpAuthSchemeProvider.js, @aws-sdk/client-cognito-identity/dist-cjs/auth/httpAuthSchemeProvider.js
PEn = R(eT(), 1), MEn = R(Zhe(), 1), WIe = R(Dx(), 1), sni = R(eye(), 1), $En = R(zO(), 1), GIe = R(RB(), 1), OEn = R(PG(), 1), ini = R(tye(), 1), ani = R(Kae(), 1), lni = R(sye(), 1);
var dni = e => ({
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
  pni = e => ({
    httpHandler: e.httpHandler()
  });
var fni = () => {};
var mni = () => {};
var gni = () => {};
var hni = () => {};