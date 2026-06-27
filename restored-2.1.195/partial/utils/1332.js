// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CQs
// matched 2.1.88 source: node_modules/@smithy/protocol-http/dist-cjs/index.js
// class=partial  jaccard=0.0739  score=1  fileCov=0.0739
// note: low-confidence suggestion: node_modules/@smithy/protocol-http/dist-cjs/index.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module CQs] deps: @smithy/util-buffer-from/dist-cjs/index.js, utils/proxy.ts, @aws-sdk/nested-clients/dist-cjs/submodules/sts/runtimeConfig.js, @aws-sdk/client-sts/dist-cjs/auth/httpAuthSchemeProvider.js, @aws-sdk/client-sts/dist-cjs/auth/httpAuthSchemeProvider.js
Pnt = R(eT(), 1), sEn = R(Zhe(), 1), FIe = R(Dx(), 1), EQs = R(yd(), 1), AQs = R(eye(), 1), iEn = R(zO(), 1), UIe = R(RB(), 1), aEn = R(PG(), 1), HQs = R(tye(), 1), TQs = R(Kae(), 1), vQs = R(sye(), 1);
var IQs = e => ({
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
  xQs = e => ({
    httpHandler: e.httpHandler()
  });
var kQs = () => {};
var RQs = () => {};
var LQs = () => {};
var DQs = () => {};