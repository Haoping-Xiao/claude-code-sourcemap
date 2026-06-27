// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module z8s
// matched 2.1.88 source: node_modules/@smithy/protocol-http/dist-cjs/index.js
// class=partial  jaccard=0.2267  score=0.5086  fileCov=0.2902
// note: low-confidence suggestion: node_modules/@smithy/protocol-http/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var z8s = E(() => {
  V8s = {
    step: "initialize",
    name: "injectSessionIdMiddleware",
    tags: ["WEBSOCKET", "EVENT_STREAM"],
    override: !0
  };
});
var K8s = () => {};
var Y8s = () => {};
var X8s = () => {};
class O2e {
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
    let t = new O2e({
      ...e,
      headers: {
        ...e.headers
      }
    });
    if (t.query) t.query = god(t.query);
    return t;
  }
  static isInstance(e) {
    if (!e) return !1;
    let t = e;
    return "method" in t && "protocol" in t && "hostname" in t && "path" in t && typeof t.query === "object" && typeof t.headers === "object";
  }
  clone() {
    return O2e.clone(this);
  }
}
function god(e) {
  return Object.keys(e).reduce((t, n) => {
    let r = e[n];
    return {
      ...t,
      [n]: Array.isArray(r) ? [...r] : r
    };
  }, {});
}
var J8s = () => {};