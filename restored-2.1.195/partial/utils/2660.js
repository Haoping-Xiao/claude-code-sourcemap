// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Blt
// matched 2.1.88 source: node_modules/undici/lib/core/request.js
// class=partial  jaccard=0.0744  score=0.1704  fileCov=0.1167
// note: low-confidence suggestion: node_modules/undici/lib/core/request.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Blt = E(() => {
  OW = require("net"), gXi = require("tls"), OMn = require("url"), WJd = new Set(["connection", "keep-alive", "proxy-authenticate", "proxy-authorization", "proxy-connection", "te", "trailer", "transfer-encoding", "upgrade"]);
  VJd = (() => {
    let e = new OW.BlockList();
    return e.addSubnet("127.0.0.0", 8, "ipv4"), e.addAddress("::1", "ipv6"), e.addSubnet("::ffff:127.0.0.0", 104, "ipv6"), e;
  })();
});
function _Xi(e) {
  return e.length >= 3 && e[0] === 22 && e[1] === 3 && e[2] <= 3;
}
function AXi(e, t) {
  if (t.length >= 3) return Promise.resolve({
    isTLS: _Xi(t),
    head: t
  });
  return new Promise(n => {
    let r = t,
      o = () => {
        e.removeListener("data", s), e.removeListener("close", o), n({
          isTLS: _Xi(r),
          head: r
        });
      },
      s = i => {
        if (e.pause(), r = r.length ? Buffer.concat([r, i]) : i, r.length >= 3) return o();
        e.resume();
      };
    e.on("data", s), e.once("close", o);
  });
}
function HXi(e, t, n, r, o, s) {
  let i = xto(e, s.hostname),
    a = UMn.createServer({
      ALPNProtocols: ["http/1.1"],
      cert: i.certPem,
      key: i.keyPem,
      SNICallback: (u, d) => {
        try {
          d(null, fXi(e, u || s.hostname));
        } catch (p) {
          d(p);
        }
      }
    });
  a.on("request", (u, d) => {
    KJd(t, n, u, d, s);
  }), a.on("tlsClientError", (u, d) => {
    Bo(`[tls-terminate] client TLS error for ${s.hostname}: ${u.message}`, {
      level: "error"
    }), d.destroy();
  }), a.on("upgrade", (u, d) => {
    Bo("[tls-terminate] upgrade request refused", {
      level: "warn"
    }), d.destroy();
  });
  let l = JJd(),
    c = () => {
      a.close(), bXi.unlink(l, () => {});
    };
  a.on("error", u => {
    Bo(`[tls-terminate] inner server listen failed: ${u.message}`, {
      level: "error"
    }), r.destroy(), c();
  }), a.listen(l, () => {
    let u = FMn.connect({
      path: l
    });
    u.on("error", d => {
      Bo(`[tls-terminate] inner loopback failed: ${d.message}`, {
        level: "error"
      }), r.destroy(), c();
    }), u.once("connect", () => {
      if (o.length) u.write(o);
      r.pipe(u), u.pipe(r);
    }), r.on("error", () => u.destroy()), r.once("close", () => {
      u.destroy(), c();
    }), u.once("close", () => r.destroy());
  }), a.unref();
}
async function KJd(e, t, n, r, o) {
  let s = YJd(n.url),
    i = n;
  if (e) {
    let c = new AbortController();
    r.once("close", () => c.abort());
    let u = o.port === 443 ? o.hostname : `${o.hostname}:${o.port}`,
      d = await tMn(e, n, r, `https://${u}${s}`, c.signal);
    if (d === null) return;
    i = d;
  }
  let a = pRe(n.headers);
  delete a.host, t?.(a, o.hostname);
  let l = UMn.request({
    host: o.hostname,
    port: o.port,
    path: s,
    method: n.method,
    headers: a,
    ...(FMn.isIP(o.hostname) ? {} : {
      servername: o.hostname
    }),
    ...(o.upstreamCA ? {
      ca: o.upstreamCA
    } : {}),
    agent: !1
  }, c => {
    r.writeHead(c.statusCode ?? 502, pRe(c.headers)), c.pipe(r);
  });
  l.on("error", c => {
    if (Bo(`[tls-terminate] upstream ${o.hostname}:${o.port} failed: ${c.message}`, {
      level: "error"
    }), !r.headersSent) r.writeHead(502, {
      "Content-Type": "text/plain"
    }), r.end("Bad Gateway");else r.destroy();
  }), r.on("close", () => l.destroy()), i.pipe(l);
}
function YJd(e) {
  let t = e ?? "/";
  if (t.startsWith("/")) return t;
  try {
    let n = new URL(t);
    return `${n.pathname}${n.search}` || "/";
  } catch {
    return t;
  }
}
function JJd() {
  return EXi.join(SXi.tmpdir(), `srt-tt-${process.pid}-${(XJd++).toString(36)}.sock`);
}
var UMn,
  FMn,
  bXi,
  SXi,
  EXi,
  XJd = 0;