// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qpc
// matched 2.1.88 source: src/upstreamproxy/relay.ts
// class=modified  jaccard=0.1301  score=0.185  fileCov=0.305
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module qpc]
mNe = require("fs/promises");
function Y9o(e) {
  let t = e.length,
    n = [],
    r = t;
  while (r > 127) (n.push((r & 127) | 128), (r >>>= 7));
  n.push(r);
  let o = new Uint8Array(1 + n.length + t);
  return ((o[0] = 10), o.set(n, 1), o.set(e, 1 + n.length), o);
}
function Jpc(e, t = 0) {
  let n = [16, e];
  if (t !== 0) n.push(24, t);
  return new Uint8Array(n);
}
function z9o(e, t, n) {
  let r = 0,
    o = 0,
    s = t;
  while (s < e.length) {
    let i = e[s];
    if (((r += (i & 127) * 2 ** o), s++, (i & 128) === 0))
      return {
        value: r,
        next: s,
      };
    if (((o += 7), o > n)) return null;
  }
  return null;
}
function Hlm(e) {
  let t = {
      data: e.subarray(0, 0),
      control: Ypc,
      version: 0,
    },
    n = 0;
  while (n < e.length) {
    let r = z9o(e, n, zpc);
    if (!r) return null;
    let o = Math.floor(r.value / 8),
      s = r.value & 7;
    switch (((n = r.next), s)) {
      case 0: {
        let i = z9o(e, n, zpc);
        if (!i) return null;
        if (((n = i.next), o === 2)) t.control = i.value;
        else if (o === 3) t.version = i.value;
        break;
      }
      case 1:
        if (n + 8 > e.length) return null;
        n += 8;
        break;
      case 2: {
        let i = z9o(e, n, Alm);
        if (!i) return null;
        if (((n = i.next), n + i.value > e.length)) return null;
        if (o === 1) t.data = e.subarray(n, n + i.value);
        n += i.value;
        break;
      }
      case 5:
        if (n + 4 > e.length) return null;
        n += 4;
        break;
      default:
        return null;
    }
  }
  return t;
}
function PTe(e, t, n, r) {
  if (
    (e.failures.push({
      ts: new Date().toISOString(),
      kind: t,
      detail: n,
      host: r,
    }),
    e.failures.length > Tlm)
  )
    e.failures.shift();
}
function Qpc(e, t, n, r, o) {
  e.write(
    `HTTP/1.1 ${t} ${n}\r
Content-Type: ${r}\r
Content-Length: ${Buffer.byteLength(o)}\r
Connection: close\r
\r
` + o,
  );
}
function e7e(e, t, n, r) {
  Qpc(
    e,
    t,
    n,
    "text/plain; charset=utf-8",
    `agent-proxy relay: ${r}
GET /__agentproxy/status on this proxy port shows proxy state and recent failures.
`,
  );
}
function vlm(e, t, n) {
  return {
    connectBuf: Buffer.alloc(0),
    pending: [],
    pendingBytes: 0,
    wsOpen: false,
    established: false,
    closed: false,
    connectLine: "",
    clientProcess: jpc,
    wsAttempt: 0,
    paused: false,
    limits: e,
    pool: t,
    finSeen: false,
    localClosed: false,
    ctx: n,
  };
}
async function startUpstreamProxyRelay(opts) {
  let t = "Basic " + Buffer.from(`${opts.sessionId}:${opts.token}`).toString("base64"),
    n = `Bearer ${opts.token}`,
    r = {
      ...Elm,
      ...opts.limits,
    },
    o = startBunRelay(opts.wsUrl, t, n, r, {
      statusProvider: opts.statusProvider,
      failures: [],
    });
  return (T(`[agent-proxy] relay listening on 127.0.0.1:${o.port}`), o);
}
function startBunRelay(wsUrl, authHeader, wsAuthHeader, r, o) {
  let s = [],
    i = Bun.listen({
      hostname: "127.0.0.1",
      port: 0,
      socket: {
        open(a) {
          ((a.data = {
            ...vlm(r, s, o),
            writeBuf: [],
            endAfterDrain: false,
            destroyAfterDrain: false,
          }),
            Wpc(a.remotePort, a.localPort)
              .catch(() => Gpc)
              .then((l) => {
                a.data.clientProcess = l;
              }));
        },
        data(a, l) {
          let c = a.data;
          if (c.closed) return;
          Clm(
            {
              write: (d) => {
                let p = typeof d === "string" ? Buffer.from(d, "utf8") : d;
                if (c.writeBuf.length > 0) {
                  c.writeBuf.push(p);
                  return;
                }
                let f = a.write(p);
                if (f < p.length) c.writeBuf.push(p.subarray(f));
              },
              end: () => {
                if (c.writeBuf.length > 0) {
                  c.endAfterDrain = true;
                  return;
                }
                a.end();
              },
              destroy: () => {
                if (c.writeBuf.length > 0) {
                  c.destroyAfterDrain = true;
                  return;
                }
                a.terminate();
              },
            },
            c,
            l,
            wsUrl,
            authHeader,
            wsAuthHeader,
          );
        },
        drain(a) {
          let l = a.data;
          while (l.writeBuf.length > 0) {
            let c = l.writeBuf[0],
              u = a.write(c);
            if (u < c.length) {
              l.writeBuf[0] = c.subarray(u);
              return;
            }
            l.writeBuf.shift();
          }
          if (l.destroyAfterDrain) {
            ((l.destroyAfterDrain = false), a.terminate());
            return;
          }
          if (l.endAfterDrain) ((l.endAfterDrain = false), a.end());
        },
        close(a) {
          let l = a.data;
          if (tfc(l)) return;
          if (
            l.wsMeta?.v2 &&
            l.established &&
            !l.finSeen &&
            !l.closed &&
            !l.localClosed &&
            l.ws?.readyState === WebSocket.OPEN
          ) {
            ((l.localClosed = true), (l.finCloseTimer = setTimeout(Nlm, l.limits.finGraceMs, l)));
            return;
          }
          MTe(l);
        },
        error(a, l) {
          (T(`[agent-proxy] client socket error: ${l.message}`), MTe(a.data));
        },
      },
    });
  return {
    port: i.port,
    stop: () => {
      (Llm(s), i.stop(true));
    },
  };
}
function Clm(e, t, n, r, o, s) {
  if (!t.ws) {
    if (((t.connectBuf = Buffer.concat([t.connectBuf, n])), t.connectBuf[0] === 22)) {
      (T("[agent-proxy] client sent TLS to the relay port (HTTPS_PROXY must be an http:// URL)", {
        level: "warn",
      }),
        Le("agent_proxy_request", "agent_proxy_request_tls_to_relay"),
        PTe(
          t.ctx,
          "tls_to_relay",
          "client opened TLS to the relay port; HTTPS_PROXY must be an http:// URL pointing at this port",
        ),
        (t.closed = true),
        e.end());
      return;
    }
    let i = t.connectBuf.indexOf(`\r
\r
`);
    if (i === -1) {
      if (t.connectBuf.length > 8192)
        ((t.closed = true),
          e7e(
            e,
            400,
            "Bad Request",
            "request headers exceeded 8 KiB before the end of the CONNECT request",
          ),
          e.end(),
          Le("agent_proxy_request", "agent_proxy_request_header_too_long"),
          PTe(t.ctx, "header_too_long", "headers exceeded 8 KiB"));
      return;
    }
    let a = t.connectBuf.subarray(0, i).toString("utf8"),
      l = bi(
        a,
        `\r
`,
      );
    if (!l.match(/^CONNECT\s+(\S+)\s+HTTP\/1\.[01]$/i)) {
      if (/^GET\s+\/__agentproxy\/status(\?\S*)?\s+HTTP\/1\.[01]$/i.test(l)) {
        let m = {
          ...(t.ctx.statusProvider?.() ?? {}),
          recentRelayFailures: t.ctx.failures,
        };
        (Qpc(
          e,
          200,
          "OK",
          "application/json",
          De(m, null, 2) +
            `
`,
        ),
          (t.closed = true),
          e.end());
        return;
      }
      ((t.closed = true),
        e7e(
          e,
          405,
          "Method Not Allowed",
          "this proxy only accepts HTTPS CONNECT tunnels. Plain-HTTP/absolute-form requests are not supported \u2014 common causes are axios releases before 1.16.1 (broken HTTPS proxy handling) or a tool configured with HTTP_PROXY pointing at this relay.",
        ),
        e.end(),
        Le("agent_proxy_request", "agent_proxy_request_not_connect"));
      let [d = "", p = ""] = l.split(/\s+/),
        f = d;
      try {
        let m = new URL(p);
        f = `${d} ${m.protocol}//${m.host}`;
      } catch {}
      PTe(t.ctx, "not_connect", `non-CONNECT request: ${f.slice(0, 120)}`);
      return;
    }
    let u = t.connectBuf.subarray(i + 4);
    if (u.length > 0) Kpc(e, t, Buffer.from(u));
    ((t.connectBuf = Buffer.alloc(0)), xlm(e, t, l, r, o, s));
    return;
  }
  if (!t.wsOpen || t.paused) {
    Kpc(e, t, Buffer.from(n));
    return;
  }
  ((t.redialEligible = false), X9o(t.ws, n), efc(t));
}
function Kpc(e, t, n) {
  if (
    (t.pending.push(n), (t.pendingBytes += n.length), t.pendingBytes > t.limits.pendingBytesCap)
  ) {
    if (
      (T(
        `[agent-proxy] pending buffer cap (${t.limits.pendingBytesCap}) exceeded; aborting request`,
        {
          level: "warn",
        },
      ),
      Le("agent_proxy_request", "agent_proxy_request_pending_overflow"),
      (t.closed = true),
      !t.established)
    )
      (e7e(
        e,
        502,
        "Bad Gateway",
        "too much request data buffered while the upstream tunnel was unavailable (pending buffer cap exceeded)",
      ),
        e.end(),
        PTe(
          t.ctx,
          "pending_overflow",
          "pending buffer cap exceeded before the tunnel was established",
          t.connectLine.split(" ")[1],
        ));
    else if (t.wsMeta?.v2) e.destroy();
    else e.end();
    MTe(t);
  }
}
function efc(e) {
  if (e.paused || !e.ws) return;
  if (e.ws.bufferedAmount > e.limits.sendHighWater)
    ((e.paused = true), (e.drainTimer = setInterval(Ilm, e.limits.drainPollMs, e)));
}
function Ilm(e) {
  let t = e.ws;
  if (!t || t.readyState !== WebSocket.OPEN || e.closed) {
    dTt(e);
    return;
  }
  if (t.bufferedAmount > e.limits.sendLowWater) return;
  while (e.pending.length > 0 && t.bufferedAmount <= e.limits.sendHighWater) {
    let n = e.pending.shift();
    ((e.pendingBytes -= n.length), (e.redialEligible = false), X9o(t, n));
  }
  if (e.pending.length === 0) ((e.paused = false), dTt(e));
}
function dTt(e) {
  if (e.drainTimer) (clearInterval(e.drainTimer), (e.drainTimer = void 0));
}
function xlm(e, t, n, r, o, s) {
  t.connectLine = n;
  let i = klm(t);
  if (i) {
    ((t.ws = i.ws), (t.wsOpen = true), (t.pinger = i.pinger), (t.wsMeta = i.meta));
    let a = t.pending.slice();
    t.redialEligible = true;
    let l = false,
      c = (u) => {
        if (l || t.closed) return;
        if (
          ((l = true),
          (t.redialEligible = false),
          T(`[agent-proxy] pooled ws failed before response (${u}); falling through to fresh dial`),
          t.openTimer)
        )
          (clearTimeout(t.openTimer), (t.openTimer = void 0));
        if (((t.pooledDeadline = void 0), t.pinger)) (clearInterval(t.pinger), (t.pinger = void 0));
        i.ws.onopen = i.ws.onmessage = i.ws.onerror = i.ws.onclose = null;
        try {
          i.ws.close();
        } catch {}
        ((t.ws = void 0),
          (t.wsOpen = false),
          (t.wsMeta = void 0),
          dTt(t),
          (t.paused = false),
          (t.pending = [...a, ...t.pending]),
          (t.pendingBytes = t.pending.reduce((d, p) => d + p.length, 0)),
          openTunnel(e, t, r, o, s));
      };
    ((t.pooledDeadline = () => {
      if (((t.openTimer = void 0), t.closed || t.established)) return;
      if (t.redialEligible) {
        c("pooled ws unresponsive");
        return;
      }
      ((t.closed = true),
        Le("agent_proxy_request", "agent_proxy_request_ws_error"),
        e7e(
          e,
          502,
          "Bad Gateway",
          "the pooled tunnel to the CCR agent-proxy became unresponsive before a response was received",
        ),
        e.end(),
        PTe(
          t.ctx,
          "ws_error",
          "pooled tunnel unresponsive before first response",
          t.connectLine.split(" ")[1],
        ),
        MTe(t));
    }),
      (t.openTimer = setTimeout(Olm, t.limits.openTimeoutMs, t)),
      nfc(e, t, i.ws, c),
      rfc(t, i.ws, o));
    return;
  }
  openTunnel(e, t, r, o, s);
}
function klm(e) {
  let { pool: t, limits: n } = e;
  while (t.length > 0) {
    let r = t.pop();
    if (r.ws.readyState !== WebSocket.OPEN) {
      clearInterval(r.pinger);
      continue;
    }
    if (
      Date.now() - r.idleSince > n.poolIdleTtlMs ||
      Date.now() - r.meta.openedAt > n.poolMaxAgeMs
    ) {
      clearInterval(r.pinger);
      try {
        r.ws.close();
      } catch {}
      continue;
    }
    return r;
  }
  return;
}
function tfc(e) {
  let { ws: t, wsMeta: n } = e;
  if (
    !t ||
    !n?.v2 ||
    !e.finSeen ||
    t.readyState !== WebSocket.OPEN ||
    !e.established ||
    e.closed ||
    !e.pinger ||
    e.pool.length >= e.limits.poolMax ||
    Date.now() - n.openedAt > e.limits.poolMaxAgeMs
  )
    return false;
  (dTt(e), (t.onmessage = null), (t.onerror = null));
  let r = e.pool;
  return (
    (t.onclose = () => Rlm(r, t)),
    r.push({
      ws: t,
      pinger: e.pinger,
      idleSince: Date.now(),
      meta: n,
    }),
    (e.ws = void 0),
    (e.pinger = void 0),
    (e.wsMeta = void 0),
    true
  );
}
function Rlm(e, t) {
  let n = e.findIndex((r) => r.ws === t);
  if (n >= 0) (clearInterval(e[n].pinger), e.splice(n, 1));
}
function Llm(e) {
  for (let t of e) {
    (clearInterval(t.pinger), (t.ws.onclose = null));
    try {
      t.ws.close();
    } catch {}
  }
  e.length = 0;
}
function nfc(e, t, n, r) {
  ((n.onmessage = (o) => {
    let s =
        o.data instanceof ArrayBuffer
          ? new Uint8Array(o.data)
          : new Uint8Array(Buffer.from(o.data)),
      i = Hlm(s);
    if (!i) return;
    if (i.control !== Ypc) {
      Dlm(e, t, n, i);
      return;
    }
    if (i.data.length > 0) {
      if (t.localClosed) return;
      if (!t.established) {
        t.established = true;
        let a = Buffer.from(i.data.subarray(0, 16))
          .toString("utf8")
          .match(/^HTTP\/1\.[01] ([45]\d\d)/);
        if (a)
          PTe(
            t.ctx,
            "connect_rejected",
            `gateway answered ${a[1]} to CONNECT (policy denial or upstream failure)`,
            t.connectLine.split(" ")[1],
          );
        if (((t.redialEligible = false), t.pooledDeadline)) {
          if (t.openTimer) (clearTimeout(t.openTimer), (t.openTimer = void 0));
          t.pooledDeadline = void 0;
        }
        xe("agent_proxy_request");
      }
      e.write(i.data);
    }
  }),
    (n.onerror = (o) => {
      let s = "message" in o ? String(o.message) : "websocket error";
      if ((T(`[agent-proxy] ws error: ${s}`), t.closed)) return;
      if (r && t.redialEligible && !t.established) {
        r(`ws error: ${s}`);
        return;
      }
      if (((t.closed = true), !t.established))
        (Le("agent_proxy_request", "agent_proxy_request_ws_error"),
          e7e(
            e,
            502,
            "Bad Gateway",
            `the WebSocket tunnel to the CCR agent-proxy reported an error (${s.slice(0, 120)})`,
          ),
          e.end(),
          PTe(
            t.ctx,
            "ws_error",
            `tunnel error before response: ${s.slice(0, 120)}`,
            t.connectLine.split(" ")[1],
          ));
      else if (t.wsMeta?.v2) e.destroy();
      else e.end();
      MTe(t);
    }),
    (n.onclose = () => {
      if (t.closed) return;
      if (r && t.redialEligible && !t.established) {
        r("closed before response");
        return;
      }
      if (((t.closed = true), !t.established))
        (Le("agent_proxy_request", "agent_proxy_request_ws_error"),
          e7e(
            e,
            502,
            "Bad Gateway",
            "the WebSocket tunnel to the CCR agent-proxy closed before a response was received",
          ),
          e.end(),
          PTe(t.ctx, "ws_error", "tunnel closed before response", t.connectLine.split(" ")[1]));
      else if (t.wsMeta?.v2) e.destroy();
      else e.end();
      MTe(t);
    }));
}
function Dlm(e, t, n, r) {
  if (r.control === _lm) {
    if (t.wsMeta && r.version === Xpc)
      ((t.wsMeta.v2 = true), T("[agent-proxy] tunnel protocol v2 negotiated"));
    return;
  }
  if (!t.wsMeta?.v2) return;
  if (r.control === blm) {
    Plm(e, t, n);
    return;
  }
}
function Plm(e, t, n) {
  if (t.closed || t.finSeen) return;
  if (((t.finSeen = true), t.finCloseTimer))
    (clearTimeout(t.finCloseTimer), (t.finCloseTimer = void 0));
  if (!t.localClosed) e.end();
  if ((dTt(t), t.openTimer)) (clearTimeout(t.openTimer), (t.openTimer = void 0));
  ((t.pooledDeadline = void 0),
    (t.paused = false),
    (t.pending = []),
    (t.pendingBytes = 0),
    n.send(Jpc(Slm)));
  let r = tfc(t);
  if (((t.closed = true), !r)) MTe(t);
}
function rfc(e, t, n) {
  let r = `${e.connectLine}\r
Proxy-Authorization: ${n}\r
X-Agent-Proxy-Client-Process: ${e.clientProcess}\r
\r
`;
  t.send(Y9o(Buffer.from(r, "utf8")));
  for (let o of e.pending) X9o(t, o);
  ((e.pending = []), (e.pendingBytes = 0), efc(e));
}
function openTunnel(sock, st, connectLine, wsUrl, authHeader) {
  let s = {
      "Content-Type": "application/proto",
      Authorization: authHeader,
    },
    i = new globalThis.WebSocket(connectLine, {
      headers: s,
      proxy: h9(connectLine),
      tls: HY() || void 0,
    });
  ((i.binaryType = "arraybuffer"), (st.ws = i), (st.wsOpen = false), (st.wsMeta = void 0));
  let a = () => {
      i.onopen = i.onmessage = i.onerror = i.onclose = null;
      try {
        i.close();
      } catch {}
    },
    l = (c) => {
      if (st.closed) return;
      if (st.openTimer) (clearTimeout(st.openTimer), (st.openTimer = void 0));
      if ((a(), st.wsAttempt++, st.wsAttempt < st.limits.openMaxAttempts)) {
        let u = st.limits.openBackoffBaseMs * 2 ** (st.wsAttempt - 1);
        (T(
          `[agent-proxy] ws open failed (${c}); retry ${st.wsAttempt}/${st.limits.openMaxAttempts - 1} in ${u}ms`,
        ),
          (st.openTimer = setTimeout(openTunnel, u, sock, st, connectLine, wsUrl, authHeader)));
        return;
      }
      (T(`[agent-proxy] ws open failed (${c}); attempts exhausted`),
        (st.closed = true),
        Le("agent_proxy_request", "agent_proxy_request_ws_error"),
        e7e(
          sock,
          502,
          "Bad Gateway",
          `could not open the WebSocket tunnel to the CCR agent-proxy (${c.slice(0, 120)}) after ${st.limits.openMaxAttempts} attempts`,
        ),
        sock.end(),
        PTe(
          st.ctx,
          "ws_open_failed",
          `tunnel open failed after ${st.limits.openMaxAttempts} attempts: ${c.slice(0, 120)}`,
          st.connectLine.split(" ")[1],
        ),
        MTe(st));
    };
  ((st.failOrRetry = l),
    (st.openTimer = setTimeout($lm, st.limits.openTimeoutMs, st)),
    (i.onopen = () => {
      if (st.closed) return;
      if (st.openTimer) (clearTimeout(st.openTimer), (st.openTimer = void 0));
      ((st.failOrRetry = void 0),
        (st.wsOpen = true),
        (st.wsMeta = {
          v2: false,
          openedAt: Date.now(),
        }),
        nfc(sock, st, i),
        i.send(Jpc(ylm, Xpc)),
        rfc(st, i, wsUrl),
        (st.pinger = setInterval(Mlm, hlm, i)));
    }),
    (i.onerror = (c) => {
      let u = "message" in c ? String(c.message) : "websocket error";
      (T(`[agent-proxy] ws error: ${u}`), l(u));
    }),
    (i.onclose = () => l("closed before open")));
}
function Mlm(e) {
  if (e.readyState === WebSocket.OPEN) e.send(Y9o(new Uint8Array(0)));
}
function $lm(e) {
  if (e.ws && e.ws.readyState === WebSocket.CONNECTING)
    (T("[agent-proxy] ws open timeout"), e.failOrRetry?.("handshake timeout"));
}
function Olm(e) {
  e.pooledDeadline?.();
}
function Nlm(e) {
  if (((e.finCloseTimer = void 0), e.finSeen || e.closed)) return;
  MTe(e);
}
function X9o(e, t) {
  if (e.readyState !== WebSocket.OPEN) return;
  for (let n = 0; n < t.length; n += Vpc) {
    let r = t.subarray(n, n + Vpc);
    e.send(Y9o(r));
  }
}
function MTe(e) {
  if (!e) return;
  if (((e.closed = true), e.pinger)) clearInterval(e.pinger);
  if (e.openTimer) (clearTimeout(e.openTimer), (e.openTimer = void 0));
  if (e.finCloseTimer) (clearTimeout(e.finCloseTimer), (e.finCloseTimer = void 0));
  if (
    (dTt(e),
    (e.pending = []),
    (e.pendingBytes = 0),
    (e.failOrRetry = void 0),
    (e.redialEligible = false),
    (e.pooledDeadline = void 0),
    e.ws && e.ws.readyState <= WebSocket.OPEN)
  )
    try {
      e.ws.close();
    } catch {}
  e.ws = void 0;
}
var Vpc = 524288,
  hlm = 30000,
  Ypc = 0,
  ylm = 1,
  _lm = 2,
  blm = 3,
  Slm = 4,
  Xpc = 2,
  Elm,
  Alm = 28,
  zpc = 63,
  Tlm = 20;
