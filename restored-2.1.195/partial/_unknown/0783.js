// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lDr
// matched 2.1.88 source: node_modules/@smithy/protocol-http/dist-cjs/index.js
// class=partial  jaccard=0.2164  score=1  fileCov=0.2164
// note: low-confidence suggestion: node_modules/@smithy/protocol-http/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lDr = E(() => {
  MIs();
  WIs();
  qIs();
  VIs();
  zIs();
  KIs();
  QIs();
  ZIs();
  exs();
  nxs();
  lxs();
  cxs();
  fxs();
  mxs();
  hxs();
  yxs();
  Axs();
  Hxs();
  vxs();
  Cxs();
  Ixs();
  xxs();
  kxs();
  Rxs();
  Lxs();
  Dxs();
  Pxs();
  Mxs();
  $xs();
  Oxs();
  Nxs();
  Bxs();
  Uxs();
  Fxs();
  Gxs();
  Wxs();
  qxs();
  Vxs();
  zxs();
  Kxs();
  Yxs();
  Xxs();
});
var Jxs = () => {};
var Qxs = () => {};
class wLt {
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
    let t = new wLt({
      ...e,
      headers: {
        ...e.headers
      }
    });
    if (t.query) t.query = aBu(t.query);
    return t;
  }
  static isInstance(e) {
    if (!e) return false;
    let t = e;
    return "method" in t && "protocol" in t && "hostname" in t && "path" in t && typeof t.query === "object" && typeof t.headers === "object";
  }
  clone() {
    return wLt.clone(this);
  }
}
function aBu(e) {
  return Object.keys(e).reduce((t, n) => {
    let r = e[n];
    return {
      ...t,
      [n]: Array.isArray(r) ? [...r] : r
    };
  }, {});
}
var Zxs = () => {};