// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zvt
// matched 2.1.88 source: node_modules/axios/lib/adapters/http.js
// class=new  jaccard=0.0562  score=0.2128  fileCov=0.0709
// note: nearest: node_modules/axios/lib/adapters/http.js (0.0562); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var zvt = Q((bzH, MJo) => {
  var fPm = require("assert"),
    mPm = require("querystring"),
    gPm = require("http"),
    hPm = require("https"),
    {
      once: m4c
    } = require("events"),
    {
      URL: yPm
    } = require("url"),
    _Pm = Sgr(),
    DJo = p4c(),
    {
      RPError: bPm
    } = Xme(),
    h4c = ggr(),
    {
      deep: PJo
    } = CJo(),
    {
      HTTP_OPTIONS: SPm
    } = Egr(),
    Hgr,
    EPm = /^[\x21\x23-\x5B\x5D-\x7E]+$/,
    y4c = ["agent", "ca", "cert", "crl", "headers", "key", "lookup", "passphrase", "pfx", "timeout"],
    _4c = (e, t) => {
      Hgr = PJo({}, e.length ? h4c(t, ...e) : t, Hgr);
    };
  _4c([], {
    headers: {
      "User-Agent": `${DJo.name}/${DJo.version} (${DJo.homepage})`,
      "Accept-Encoding": "identity"
    },
    timeout: 3500
  });
  function Agr(e, t, n) {
    if (n) e.removeHeader("content-type"), e.setHeader("content-type", n);
    if (t) e.removeHeader("content-length"), e.setHeader("content-length", Buffer.byteLength(t)), e.write(t);
    e.end();
  }
  var g4c = new _Pm({
    max: 100
  });
  MJo.exports = async function (t, {
    accessToken: n,
    mTLS: r = !1,
    DPoP: o
  } = {}) {
    let s;
    try {
      s = new yPm(t.url), delete t.url, fPm(/^(https?:)$/.test(s.protocol));
    } catch (h) {
      throw TypeError("only valid absolute URLs can be requested");
    }
    let i = this[SPm],
      a = t,
      l = `${s.origin}${s.pathname}`;
    if (o && "dpopProof" in this) a.headers = a.headers || {}, a.headers.DPoP = await this.dpopProof({
      htu: `${s.origin}${s.pathname}`,
      htm: t.method || "GET",
      nonce: g4c.get(l)
    }, o, n);
    let c;
    if (i) c = h4c(i.call(this, s, PJo({}, a, Hgr)), ...y4c);
    if (a = PJo({}, c, a, Hgr), r && !a.pfx && !(a.key && a.cert)) throw TypeError("mutual-TLS certificate and key not set");
    if (a.searchParams) for (let [h, y] of Object.entries(a.searchParams)) s.searchParams.delete(h), s.searchParams.set(h, y);
    let u, d, p, f;
    ({
      form: d,
      responseType: u,
      json: p,
      body: f,
      ...a
    } = a);
    for (let [h, y] of Object.entries(a.headers || {})) if (y === void 0) delete a.headers[h];
    let m,
      g = (s.protocol === "https:" ? hPm.request : gPm.request)(s.href, a);
    return (async () => {
      if (p) Agr(g, JSON.stringify(p), "application/json");else if (d) Agr(g, mPm.stringify(d), "application/x-www-form-urlencoded");else if (f) Agr(g, f);else Agr(g);
      if ([m] = await Promise.race([m4c(g, "response"), m4c(g, "timeout")]), !m) throw g.destroy(), new bPm(`outgoing request timed out after ${a.timeout}ms`);
      let h = [];
      for await (let y of m) h.push(y);
      if (h.length) switch (u) {
        case "json":
          {
            Object.defineProperty(m, "body", {
              get() {
                let y = Buffer.concat(h);
                try {
                  y = JSON.parse(y);
                } catch (b) {
                  throw Object.defineProperty(b, "response", {
                    value: m
                  }), b;
                } finally {
                  Object.defineProperty(m, "body", {
                    value: y,
                    configurable: !0
                  });
                }
                return y;
              },
              configurable: !0
            });
            break;
          }
        case void 0:
        case "buffer":
          {
            Object.defineProperty(m, "body", {
              get() {
                let y = Buffer.concat(h);
                return Object.defineProperty(m, "body", {
                  value: y,
                  configurable: !0
                }), y;
              },
              configurable: !0
            });
            break;
          }
        default:
          throw TypeError("unsupported responseType request option");
      }
      return m;
    })().catch(h => {
      if (m) Object.defineProperty(h, "response", {
        value: m
      });
      throw h;
    }).finally(() => {
      let h = m && m.headers["dpop-nonce"];
      if (h && EPm.test(h)) g4c.set(l, h);
    });
  };
  MJo.exports.setDefaults = _4c.bind(void 0, y4c);
});