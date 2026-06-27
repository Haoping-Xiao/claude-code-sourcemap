// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iza
// matched 2.1.88 source: src/services/oauth/auth-code-listener.ts
// class=modified  jaccard=0.5109  score=0.7798  fileCov=0.597
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module iza] deps: dn, kt, Rc, vn, H0
sza = require("http");
lAo = class lAo {
  localServer;
  port = 0;
  promiseResolver = null;
  promiseRejecter = null;
  expectedState = null;
  pendingResponse = null;
  callbackPath;
  constructor(e = "/callback") {
    ((this.localServer = sza.createServer()), (this.callbackPath = e));
  }
  async start(e) {
    return new Promise((t, n) => {
      (this.localServer.once("error", (r) => {
        (Le("oauth_callback_listener", "oauth_callback_server_start_failed"),
          n(Error(`Failed to start OAuth callback server: ${r.message}`)));
      }),
        this.localServer.listen(e ?? 0, "127.0.0.1", () => {
          let r = this.localServer.address();
          ((this.port = r.port), t(this.port));
        }));
    });
  }
  getPort() {
    return this.port;
  }
  hasPendingResponse() {
    return this.pendingResponse !== null;
  }
  async waitForAuthorization(e, t) {
    return new Promise((n, r) => {
      ((this.promiseResolver = n),
        (this.promiseRejecter = r),
        (this.expectedState = e),
        this.startLocalListener(t));
    });
  }
  handleSuccessRedirect(e, t) {
    if (!this.pendingResponse) return;
    if (t) {
      (t(this.pendingResponse, e),
        (this.pendingResponse = null),
        G("tengu_oauth_automatic_redirect", {
          custom_handler: true,
        }));
      return;
    }
    let n = hj(e) ? $s().CLAUDEAI_SUCCESS_URL : $s().CONSOLE_SUCCESS_URL;
    (this.pendingResponse.writeHead(302, {
      Location: n,
    }),
      this.pendingResponse.end(),
      (this.pendingResponse = null),
      G("tengu_oauth_automatic_redirect", {}));
  }
  handleErrorRedirect() {
    if (!this.pendingResponse) return;
    let e = $s().CLAUDEAI_SUCCESS_URL;
    (this.pendingResponse.writeHead(302, {
      Location: e,
    }),
      this.pendingResponse.end(),
      (this.pendingResponse = null),
      G("tengu_oauth_automatic_redirect_error", {}));
  }
  startLocalListener(e) {
    (this.localServer.on("request", this.handleRedirect.bind(this)),
      this.localServer.on("error", this.handleError.bind(this)),
      e());
  }
  handleRedirect(e, t) {
    let n = new URL(e.url || "", `http://${e.headers.host || "localhost"}`);
    if (n.pathname !== this.callbackPath) {
      (t.writeHead(404), t.end());
      return;
    }
    let r = n.searchParams.get("code") ?? void 0,
      o = n.searchParams.get("state") ?? void 0;
    this.validateAndRespond(r, o, t);
  }
  validateAndRespond(e, t, n) {
    if (!e) {
      (Le("oauth_callback_listener", "oauth_callback_no_code"),
        n.writeHead(400),
        n.end("Authorization code not found"),
        this.reject(Error("No authorization code received")));
      return;
    }
    if (t !== this.expectedState) {
      (Le("oauth_callback_listener", "oauth_callback_state_mismatch"),
        n.writeHead(400),
        n.end("Invalid state parameter"),
        this.reject(Error("Invalid state parameter")));
      return;
    }
    ((this.pendingResponse = n), xe("oauth_callback_listener"), this.resolve(e));
  }
  handleError(e) {
    (Le("oauth_callback_listener", "oauth_callback_server_error"),
      ke(e),
      this.close(),
      this.reject(e));
  }
  resolve(e) {
    if (this.promiseResolver)
      (this.promiseResolver(e), (this.promiseResolver = null), (this.promiseRejecter = null));
  }
  reject(e) {
    if (this.promiseRejecter)
      (this.promiseRejecter(e), (this.promiseResolver = null), (this.promiseRejecter = null));
  }
  close() {
    if (this.pendingResponse) this.handleErrorRedirect();
    if (this.localServer) (this.localServer.removeAllListeners(), this.localServer.close());
  }
  [Symbol.dispose]() {
    this.close();
  }
};
function cAo(e) {
  return e.toString("base64").replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}
function aza() {
  return cAo(Wqt.randomBytes(32));
}
function lza(e) {
  let t = Wqt.createHash("sha256");
  return (t.update(e), cAo(t.digest()));
}
function cza() {
  return cAo(Wqt.randomBytes(32));
}
var Wqt;
