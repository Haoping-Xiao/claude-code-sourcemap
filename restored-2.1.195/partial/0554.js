// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vdn
// matched 2.1.88 source: node_modules/axios/lib/adapters/http.js
// class=partial  jaccard=0.0645  score=0.9447  fileCov=0.0647
// note: low-confidence suggestion: node_modules/axios/lib/adapters/http.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Vdn = E(() => {
  i_s();
  l_s();
  XH();
});
function Vxr(e) {
  if (!e || typeof e !== "string") return 0;
  if (!e.startsWith("data:")) return 0;
  let t = e.indexOf(",");
  if (t < 0) return 0;
  let n = e.slice(5, t),
    r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let {
      length: s,
      length: i
    } = r;
    for (let p = 0; p < i; p++) if (r.charCodeAt(p) === 37 && p + 2 < i) {
      let f = r.charCodeAt(p + 1),
        m = r.charCodeAt(p + 2);
      if ((f >= 48 && f <= 57 || f >= 65 && f <= 70 || f >= 97 && f <= 102) && (m >= 48 && m <= 57 || m >= 65 && m <= 70 || m >= 97 && m <= 102)) s -= 2, p += 2;
    }
    let a = 0,
      l = i - 1,
      c = p => p >= 2 && r.charCodeAt(p - 2) === 37 && r.charCodeAt(p - 1) === 51 && (r.charCodeAt(p) === 68 || r.charCodeAt(p) === 100);
    if (l >= 0) {
      if (r.charCodeAt(l) === 61) a++, l--;else if (c(l)) a++, l -= 3;
    }
    if (a === 1 && l >= 0) {
      if (r.charCodeAt(l) === 61) a++;else if (c(l)) a++;
    }
    let d = Math.floor(s / 4) * 3 - (a || 0);
    return d > 0 ? d : 0;
  }
  return Buffer.byteLength(r, "utf8");
}
class b_s {
  constructor() {
    this.sessions = Object.create(null);
  }
  getSession(e, t) {
    t = Object.assign({
      sessionTimeout: 1000
    }, t);
    let n = this.sessions[e];
    if (n) {
      let c = n.length;
      for (let u = 0; u < c; u++) {
        let [d, p] = n[u];
        if (!d.destroyed && !d.closed && Yxr.default.isDeepStrictEqual(p, t)) return d;
      }
    }
    let r = Kxr.default.connect(e, t),
      o,
      s = () => {
        if (o) return;
        o = !0;
        let c = n,
          u = c.length,
          d = u;
        while (d--) if (c[d][0] === r) {
          if (u === 1) delete this.sessions[e];else c.splice(d, 1);
          if (!r.closed) r.close();
          return;
        }
      },
      i = r.request,
      {
        sessionTimeout: a
      } = t;
    if (a != null) {
      let c,
        u = 0;
      r.request = function () {
        let d = i.apply(this, arguments);
        if (u++, c) clearTimeout(c), c = null;
        return d.once("close", () => {
          if (! --u) c = setTimeout(() => {
            c = null, s();
          }, a);
        }), d;
      };
    }
    r.once("close", s);
    let l = [r, t];
    return n ? n.push(l) : n = this.sessions[e] = [l], r;
  }
}
function LSu(e, t) {
  if (e.beforeRedirects.proxy) e.beforeRedirects.proxy(e);
  if (e.beforeRedirects.config) e.beforeRedirects.config(e, t);
}
function S_s(e, t, n) {
  let r = t;
  if (!r && r !== !1) {
    let o = Eys(n);
    if (o) {
      if (!qxr(n)) r = new URL(o);
    }
  }
  if (r) {
    if (r.username) r.auth = (r.username || "") + ":" + (r.password || "");
    if (r.auth) {
      if (Boolean(r.auth.username || r.auth.password)) r.auth = (r.auth.username || "") + ":" + (r.auth.password || "");else if (typeof r.auth === "object") throw new Wi("Invalid proxy authorization", Wi.ERR_BAD_OPTION, {
        proxy: r
      });
      let i = Buffer.from(r.auth, "utf8").toString("base64");
      e.headers["Proxy-Authorization"] = "Basic " + i;
    }
    e.headers.host = e.hostname + (e.port ? ":" + e.port : "");
    let o = r.hostname || r.host;
    if (e.hostname = o, e.host = o, e.port = r.port, e.path = n, r.protocol) e.protocol = r.protocol.includes(":") ? r.protocol : `${r.protocol}:`;
  }
  e.beforeRedirects.proxy = function (s) {
    S_s(s, t, s.href);
  };
}
var g_s,
  h_s,
  Kxr,
  Yxr,
  zxr,
  y_s,
  _he,
  nY,
  __s,
  c_s,
  CSu,
  u_s,
  ISu,
  xSu,
  kSu,
  d_s,
  zdn,
  p_s,
  f_s = (e, [t, n]) => (e.on("end", n).on("error", n), t),
  RSu,
  DSu,
  PSu = e => new Promise((t, n) => {
    let r,
      o,
      s = (l, c) => {
        if (o) return;
        o = !0, r && r(l, c);
      },
      i = l => {
        s(l), t(l);
      },
      a = l => {
        s(l, !0), n(l);
      };
    e(i, a, l => r = l).catch(a);
  }),
  MSu = ({
    address: e,
    family: t
  }) => {
    if (!or.isString(e)) throw TypeError("address must be a string");
    return {
      address: e,
      family: t || (e.indexOf(".") < 0 ? 6 : 4)
    };
  },
  m_s = (e, t) => MSu(or.isObject(e) ? e : {
    address: e,
    family: t
  }),
  $Su,
  E_s;