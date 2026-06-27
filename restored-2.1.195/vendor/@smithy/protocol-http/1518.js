// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Gai
// class=vendor  (no 2.1.88 match)
// note: identified by fingerprint: @smithy/protocol-http; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var Wai = () => {};
class _HttpRequest {
  constructor(e) {
    this.method = e.method || "GET", this.hostname = e.hostname || "localhost", this.port = e.port, this.query = e.query || {}, this.headers = e.headers || {}, this.body = e.body, this.protocol = e.protocol ? e.protocol.slice(-1) !== ":" ? `${e.protocol}:` : e.protocol : "https:", this.path = e.path ? e.path.charAt(0) !== "/" ? `/${e.path}` : e.path : "/", this.username = e.username, this.password = e.password, this.fragment = e.fragment;
  }
  static isInstance(e) {
    if (!e) return false;
    let t = e;
    return "method" in t && "protocol" in t && "hostname" in t && "path" in t && typeof t.query === "object" && typeof t.headers === "object";
  }
  clone() {
    let e = new _HttpRequest({
      ...this,
      headers: {
        ...this.headers
      }
    });
    if (e.query) e.query = Yfd(e.query);
    return e;
  }
}
function Yfd(e) {
  return Object.keys(e).reduce((t, n) => {
    let r = e[n];
    return {
      ...t,
      [n]: Array.isArray(r) ? [...r] : r
    };
  }, {});
}
var qai = () => {};