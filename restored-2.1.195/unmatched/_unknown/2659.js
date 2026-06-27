// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mXi
// matched 2.1.88 source: src/services/oauth/crypto.ts
// class=new  jaccard=0.0431  score=0.0472  fileCov=0.332
// note: nearest: src/services/oauth/crypto.ts (0.0431); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var mXi = E(() => {
  uXi = R(MMn(), 1), dXi = require("net"), pXi = require("tls"), {
    pki: $Mn,
    md: OJd,
    random: NJd,
    util: BJd
  } = uXi.default;
});
function kto(e) {
  let t = e?.http ?? process.env.HTTP_PROXY ?? process.env.http_proxy ?? void 0,
    n = e?.https ?? process.env.HTTPS_PROXY ?? process.env.https_proxy ?? t,
    r = e?.noProxy ?? process.env.NO_PROXY ?? process.env.no_proxy ?? "";
  if (!t && !n) return;
  let o = a => {
      if (!a) return;
      let c = /^[a-z][a-z0-9+.-]*:\/\//i.test(a) ? a : `http://${a}`;
      try {
        let u = new OMn.URL(c);
        if (u.protocol !== "http:" && u.protocol !== "https:" || !u.hostname) throw Error("unsupported scheme or empty host");
        return u;
      } catch {
        Bo(`Invalid parent proxy URL, ignoring: ${zJd(a)}`, {
          level: "error"
        });
        return;
      }
    },
    s = o(t),
    i = o(n);
  if (!s && !i) return;
  return {
    httpUrl: s,
    httpsUrl: i,
    noProxy: qJd(r)
  };
}
function qJd(e) {
  let t = {
    all: false,
    suffixes: [],
    cidr: new OW.BlockList()
  };
  for (let n of e.split(",")) {
    if (n = n.trim(), !n) continue;
    if (n === "*") {
      t.all = true;
      continue;
    }
    let r = n.indexOf("/");
    if (r !== -1) {
      let a = n.slice(0, r),
        l = n.slice(r + 1),
        c = OW.isIP(a);
      if (c && l !== "" && /^\d+$/.test(l)) {
        let u = Number(l),
          d = c === 6 ? 128 : 32;
        if (u >= 0 && u <= d) {
          try {
            t.cidr.addSubnet(a, u, c === 6 ? "ipv6" : "ipv4");
          } catch {}
          continue;
        }
      }
      continue;
    }
    let o = n.toLowerCase(),
      s = /^\[([^\]]+)\](?::\d+)?$/.exec(o);
    if (s) o = s[1];
    if (o.startsWith("*.")) o = o.slice(1);
    let i = OW.isIP(o);
    if (!i) {
      let a = o.lastIndexOf(":");
      if (a !== -1 && /^\d+$/.test(o.slice(a + 1))) o = o.slice(0, a);
    } else try {
      t.cidr.addAddress(o, i === 6 ? "ipv6" : "ipv4");
      continue;
    } catch {}
    t.suffixes.push(o);
  }
  return t;
}
function IFt(e, t) {
  let n = qne(t.toLowerCase().replace(/\.$/, ""));
  if (n === "localhost") return true;
  let r = OW.isIP(n);
  if (r) {
    if (VJd.check(n, r === 6 ? "ipv6" : "ipv4")) return true;
  }
  if (e.noProxy.all) return true;
  if (r) {
    if (e.noProxy.cidr.check(n, r === 6 ? "ipv6" : "ipv4")) return true;
  }
  for (let o of e.noProxy.suffixes) if (o.startsWith(".")) {
    if (n === o.slice(1) || n.endsWith(o)) return true;
  } else if (n === o || n.endsWith("." + o)) return true;
  return false;
}
function xFt(e, t) {
  if (t.isHttps) return e.httpsUrl ?? e.httpUrl;
  return e.httpUrl;
}
function Rto(e) {
  let {
      destHost: t,
      destPort: n
    } = e,
    r = qne(t);
  if (!kFt(r)) return Promise.reject(Error(`Invalid destination host for CONNECT: ${JSON.stringify(t)}`));
  if (!Number.isInteger(n) || n < 1 || n > 65535) return Promise.reject(Error(`Invalid destination port: ${n}`));
  let o = OW.isIP(r) === 6 ? `[${r}]:${n}` : `${r}:${n}`;
  return new Promise((s, i) => {
    let a = e.dial(),
      l = false,
      c = d => {
        if (l) return;
        l = true, a.destroy(), i(d);
      },
      u = () => c(Error("Proxy closed during CONNECT handshake"));
    a.setTimeout(e.timeoutMs ?? hXi, () => c(Error("CONNECT handshake timed out"))), a.once("error", c), a.once("close", u), a.once(e.readyEvent, () => {
      a.write(`CONNECT ${o} HTTP/1.1\r
Host: ${o}\r
` + (e.authHeader ? `Proxy-Authorization: ${e.authHeader}\r
` : "") + `\r
`);
      let d = "",
        p = f => {
          d += f.toString("latin1");
          let m = d.indexOf(`\r
\r
`);
          if (m === -1) {
            if (d.length > 16384) c(Error("CONNECT response header too large"));
            return;
          }
          a.pause(), a.removeListener("data", p);
          let g = d.slice(0, d.indexOf(`\r
`));
          if (!/^HTTP\/1\.[01] 2\d\d(?:\s|$)/.test(g)) return c(Error(`Proxy refused CONNECT: ${g.trim()}`));
          let h = d.slice(m + 4);
          if (h.length) a.unshift(Buffer.from(h, "latin1"));
          l = true, a.setTimeout(0), a.removeListener("error", c), a.removeListener("close", u), s(a);
        };
      a.on("data", p);
    });
  });
}
function NMn(e, t, n) {
  let r = qne(e.hostname),
    o = Number(e.port) || (e.protocol === "https:" ? 443 : 80),
    s = e.protocol === "https:";
  return Rto({
    destHost: t,
    destPort: n,
    authHeader: Lto(e),
    readyEvent: s ? "secureConnect" : "connect",
    dial: () => s ? gXi.connect({
      host: r,
      port: o,
      ...(OW.isIP(r) ? {} : {
        servername: r
      })
    }) : OW.connect(o, r)
  });
}
function Lto(e) {
  if (!e.username && !e.password) return;
  try {
    let t = `${decodeURIComponent(e.username)}:${decodeURIComponent(e.password)}`;
    return `Basic ${Buffer.from(t).toString("base64")}`;
  } catch {
    let t = `${e.username}:${e.password}`;
    return `Basic ${Buffer.from(t).toString("base64")}`;
  }
}
function pRe(e) {
  let t = new Set(),
    n = e.connection;
  if (n) for (let o of String(n).split(",")) t.add(o.trim().toLowerCase());
  let r = {};
  for (let [o, s] of Object.entries(e)) {
    let i = o.toLowerCase();
    if (!WJd.has(i) && !t.has(i)) r[o] = s;
  }
  return r;
}
function qne(e) {
  return e.startsWith("[") && e.endsWith("]") ? e.slice(1, -1) : e;
}
function Dto(e) {
  if (!e) return "-";
  if (!e.username && !e.password) return e.href;
  let t = new OMn.URL(e.href);
  return t.username = "***", t.password = "***", t.href;
}
function zJd(e) {
  return e.replace(/\/\/[^@/]*@/, "//***:***@");
}
function kFt(e) {
  if (!e || e.length > 255) return false;
  let t = qne(e);
  if (t.includes("%")) return false;
  if (OW.isIP(t)) return true;
  return /^[A-Za-z0-9._-]+$/.test(t);
}
function yXi(e) {
  try {
    let t = qne(e),
      n = OW.isIP(t) === 6 ? `[${t}]` : t,
      r = new OMn.URL(`http://${n}/`).hostname;
    return qne(r).replace(/\.$/, "");
  } catch {
    return;
  }
}
function BMn(e, t, n = hXi) {
  return new Promise((r, o) => {
    let s = OW.connect(t, e),
      i = false,
      a = l => {
        if (i) return;
        if (i = true, s.setTimeout(0), l) s.destroy(), o(l);else r(s);
      };
    s.setTimeout(n, () => a(Error("connect timed out"))), s.once("connect", () => a()), s.once("error", a), s.once("close", () => a(Error("socket closed before connect")));
  });
}
var OW,
  gXi,
  OMn,
  hXi = 30000,
  WJd,
  VJd;