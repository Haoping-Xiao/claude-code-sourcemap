// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module X2a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var X2a = Q(aGn => {
  Object.defineProperty(aGn, "__esModule", {
    value: true
  });
  aGn.createHttpExporterTransport = void 0;
  var bNp = K2a();
  class Y2a {
    _parameters;
    _utils = null;
    constructor(e) {
      this._parameters = e;
    }
    async send(e, t) {
      let {
          agent: n,
          request: r
        } = await this._loadUtils(),
        o = await this._parameters.headers();
      return new Promise(s => {
        (0, bNp.sendWithHttp)(r, this._parameters.url, o, this._parameters.compression, this._parameters.userAgent, n, e, i => {
          s(i);
        }, t);
      });
    }
    shutdown() {}
    async _loadUtils() {
      let e = this._utils;
      if (e === null) {
        let t = new URL(this._parameters.url).protocol,
          [n, r] = await Promise.all([this._parameters.agentFactory(t), SNp(t)]);
        e = this._utils = {
          agent: n,
          request: r
        };
      }
      return e;
    }
  }
  async function SNp(e) {
    let t = e === "http:" ? import("http") : import("https"),
      {
        request: n
      } = await t;
    return n;
  }
  function ENp(e) {
    return new Y2a(e);
  }
  aGn.createHttpExporterTransport = ENp;
});