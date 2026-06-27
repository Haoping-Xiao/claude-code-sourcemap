// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module g2s
// matched 2.1.88 source: node_modules/@smithy/protocol-http/dist-cjs/index.js
// class=partial  jaccard=0.2164  score=1  fileCov=0.2164
// note: low-confidence suggestion: node_modules/@smithy/protocol-http/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var g2s = E(() => {
  JUs();
  oOr = R(UR(), 1), sOr = R(by(), 1), p2s = R(ej(), 1);
});
var h2s = () => {};
var y2s = () => {};
var _2s = () => {};
class mDt {
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
    let t = new mDt({
      ...e,
      headers: {
        ...e.headers
      }
    });
    if (t.query) t.query = izu(t.query);
    return t;
  }
  static isInstance(e) {
    if (!e) return false;
    let t = e;
    return "method" in t && "protocol" in t && "hostname" in t && "path" in t && typeof t.query === "object" && typeof t.headers === "object";
  }
  clone() {
    return mDt.clone(this);
  }
}
function izu(e) {
  return Object.keys(e).reduce((t, n) => {
    let r = e[n];
    return {
      ...t,
      [n]: Array.isArray(r) ? [...r] : r
    };
  }, {});
}
var b2s = () => {};