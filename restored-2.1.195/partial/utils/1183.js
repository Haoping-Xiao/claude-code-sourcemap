// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NDt
// matched 2.1.88 source: node_modules/@smithy/protocol-http/dist-cjs/index.js
// class=partial  jaccard=0.1975  score=0.6942  fileCov=0.2164
// note: low-confidence suggestion: node_modules/@smithy/protocol-http/dist-cjs/index.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var NDt = E(() => {
  Kyn();
  jR();
  H9s();
  T9s();
  i8s();
  a8s();
  JOr();
});
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
class L2e {
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
    let t = new L2e({
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
    return L2e.clone(this);
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