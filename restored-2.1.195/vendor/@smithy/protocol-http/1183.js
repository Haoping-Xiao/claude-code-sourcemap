// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NDt
// matched 2.1.88 source: node_modules/@smithy/protocol-http/dist-cjs/index.js
// class=vendor  jaccard=0.1975  score=0.6942  fileCov=0.2164
// note: identified by fingerprint: @smithy/protocol-http; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
function l8s(e) {
  let {
      signer: t,
      signer: n
    } = e,
    r = Object.assign(e, {
      eventSigner: t,
      messageSigner: n
    }),
    o = r.eventStreamPayloadHandlerProvider(r);
  return Object.assign(r, {
    eventStreamPayloadHandler: o
  });
}
var c8s = () => {};
var u8s = () => {};
var d8s = () => {};
class _HttpRequest {
  method;
  protocol;
  hostname;
  port;
  path;
  query;
  headers;
  username;
  password;
  fragment;
  body;
  constructor(e) {
    this.method = e.method || "GET", this.hostname = e.hostname || "localhost", this.port = e.port, this.query = e.query || {}, this.headers = e.headers || {}, this.body = e.body, this.protocol = e.protocol ? e.protocol.slice(-1) !== ":" ? `${e.protocol}:` : e.protocol : "https:", this.path = e.path ? e.path.charAt(0) !== "/" ? `/${e.path}` : e.path : "/", this.username = e.username, this.password = e.password, this.fragment = e.fragment;
  }
  static clone(e) {
    let t = new _HttpRequest({
      ...e,
      headers: {
        ...e.headers
      }
    });
    if (t.query) t.query = Zrd(t.query);
    return t;
  }
  static isInstance(e) {
    if (!e) return false;
    let t = e;
    return "method" in t && "protocol" in t && "hostname" in t && "path" in t && typeof t.query === "object" && typeof t.headers === "object";
  }
  clone() {
    return _HttpRequest.clone(this);
  }
}
function Zrd(e) {
  return Object.keys(e).reduce((t, n) => {
    let r = e[n];
    return {
      ...t,
      [n]: Array.isArray(r) ? [...r] : r
    };
  }, {});
}
var p8s = () => {};