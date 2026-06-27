// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module h7n
// matched 2.1.88 source: src/services/mcp/client.ts
// class=new  jaccard=0.012  score=0.1474  fileCov=0.0129
// note: nearest: src/services/mcp/client.ts (0.012); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var h7n = E(() => {
  sr();
  Agl = require("dns"), d0o = require("net");
});
async function Wpf(e, t) {
  let n = new URL(e),
    r = n.hostname.replace(/^\[|\]$/g, "");
  if (wgl.isIP(r)) return {
    url: e,
    tls: t.tls
  };
  let o;
  try {
    o = await vgl.lookup(r, {
      all: true
    });
  } catch (a) {
    throw new y7n(`could not resolve ${r}: ${Zr(a).message}`);
  }
  if (o.length === 0) throw new y7n(`could not resolve ${r}`);
  for (let {
    address: a
  } of o) if (Q_t(a)) throw new y7n(`${r} resolves to ${a}, which is in a private, link-local, or cloud-metadata range`);
  if (t.proxy) return {
    url: e,
    tls: t.tls
  };
  if (n.protocol === "wss:") return {
    url: e,
    tls: t.tls
  };
  let s = o.find(a => a.family === 4) ?? o[0],
    i = n.host;
  return n.hostname = s.family === 6 ? `[${s.address}]` : s.address, {
    url: n.toString(),
    headers: {
      Host: i
    },
    tls: t.tls
  };
}
function qpf(e) {
  if (Array.isArray(e)) return e.reduce((t, n) => t + n.length, 0);
  if (e instanceof ArrayBuffer) return e.byteLength;
  return e.length;
}
async function Igl(e, t) {
  let {
      description: n,
      timeout_ms: r,
      persistent: o
    } = e,
    {
      url: s,
      protocols: i
    } = e.ws,
    {
      toolUseId: a,
      taskRegistry: l
    } = t,
    c = gyt(t),
    u = iN("monitor_ws"),
    p = $6n({
      description: n,
      agentId: c,
      taskRef: {
        id: u
      },
      killTask: () => _Ae(u, l, {
        quiet: true
      })
    }),
    f = h9(s),
    m = await Wpf(s, {
      proxy: f,
      tls: HY()
    }),
    g = new Cgl.default(m.url, i, {
      proxy: f,
      headers: m.headers,
      tls: m.tls,
      maxPayload: p0o
    });
  g.on("message", (b, _) => {
    let S = l.all()[u];
    if (!S || S.status !== "running") return;
    let A = qpf(b);
    if (A > p0o) {
      sq(n, `[Dropped ${A}-byte frame (exceeds ${p0o}); closing]`, u, {
        isHousekeeping: true,
        agentId: c
      }), _Ae(u, l, {
        quiet: true
      });
      return;
    }
    if (_) {
      p.onData(`[binary frame, ${A} bytes]
`);
      return;
    }
    p.onData(b.toString("utf8") + `
`);
  }), g.on("error", b => {
    let _ = l.all()[u];
    if (!_ || _.status !== "running") return;
    sq(n, `[WebSocket error: ${b.message}]`, u, {
      isHousekeeping: true,
      agentId: c
    });
  }), g.on("close", (b, _) => {
    p.finish();
    let S = l.all()[u];
    if (!S || S.status !== "running") return;
    let A = _.length ? ` ${_.toString("utf8")}` : "";
    sq(n, `[WebSocket closed: ${b}${A}]`, u, {
      isHousekeeping: true,
      agentId: c
    }), _Ae(u, l, {
      quiet: true
    });
  });
  let h = o ? void 0 : setTimeout((b, _, S, A, v) => {
      if (b.isKilled()) return;
      sq(_, "[Monitor timed out \u2014 re-arm if needed.]", S, {
        isHousekeeping: true,
        agentId: A
      }), _Ae(S, v, {
        quiet: true
      });
    }, r, p, n, u, c, l),
    y = {
      ...LT(u, "monitor_ws", n, a),
      type: "monitor_ws",
      status: "running",
      url: s,
      timeoutId: h,
      agentId: c
    };
  return l.register(y), Rrl(u, g), VAe(c, `monitor:${u}`, l), {
    data: {
      taskId: u,
      timeoutMs: o ? 0 : r,
      persistent: o
    }
  };
}
var vgl,
  wgl,
  Cgl,
  y7n,
  p0o = 1048576;