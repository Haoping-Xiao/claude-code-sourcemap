// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DOc
// matched 2.1.88 source: src/main.tsx
// class=modified (alt of src/main.tsx)  jaccard=0.0067  score=0.1372  fileCov=0.007
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var DOc = E(() => {
  Rm();
  je();
});
function MOc(e) {
  let { regularMcpConfigs: t, claudeaiConfigPromise: n, state: r } = e,
    o = ml(process.env.MCP_CONNECTION_NONBLOCKING)
      ? false
      : ut(process.env.MCP_CONNECTION_NONBLOCKING) || (e.nonBlocking ?? false);
  r_r(o);
  let s = o,
    i = cv(t, (u) => u.alwaysLoad === true),
    a = cv(t, (u) => u.alwaysLoad !== true),
    l = Object.keys(i).length > 0;
  async function c() {
    (pa("before_mcp_connect_user"), pa("before_mcp_connect_connector"));
    let u = Promise.all([
        ...(l
          ? [H7o(false, () => T7o(i, "regular-required", r), "--mcp-config alwaysLoad servers")]
          : []),
        H7o(o, () => T7o(a, "regular", r, s), "--mcp-config servers"),
      ]).then(() => pa("after_mcp_connect_user")),
      d = H7o(
        o,
        () =>
          n.then((p) =>
            Mxm({
              claudeaiConfigs: p,
              regularMcpConfigs: t,
              state: r,
              deferConnect: s,
            }),
          ),
        "claude.ai connectors",
      ).then(() => pa("after_mcp_connect_connector"));
    await Promise.all([u, d]);
  }
  return {
    connect: c,
  };
}
function T7o(e, t, n, r = false) {
  let o = Object.keys(e);
  if (o.length === 0) return [];
  n.applyMcpUpdate((l) => ({
    ...l,
    clients: [
      ...l.clients,
      ...Object.entries(e).map(([c, u]) => ({
        name: c,
        type: "pending",
        config: u,
      })),
    ],
  }));
  let s = new Map(),
    i = o.map((l) => new Promise((c) => s.set(l, c))),
    a = () =>
      void Dqe((l) => {
        (_mr(n, l), Mka(), s.get(l.client.name)?.());
      }, e)
        .catch((l) => T(`[MCP] ${t} connect error: ${l}`))
        .finally(() => {
          for (let l of s.values()) l();
          v7o(e, n).catch((l) => T(`[MCP] ${t} retry error: ${l}`));
        });
  if (r) setImmediate(a);
  else a();
  return i;
}
function _mr(e, t) {
  let { client: n, tools: r, commands: o } = t,
    s;
  (e.applyMcpUpdate((i) => {
    let a = i.clients.find((l) => l.name === n.name);
    if (!a || !Lqe(a.config, n.config)) {
      if (n.type === "connected")
        (sn(
          n.name,
          a
            ? "applyConnectionResult: disposing orphaned connect (slot config changed mid-flight)"
            : "applyConnectionResult: disposing orphaned connect (slot removed mid-flight)",
        ),
          (s = () => {
            (n.cleanup().catch(() => {}), ST(n.name, n.config).catch(() => {}));
          }));
      return i;
    }
    return {
      ...i,
      clients: i.clients.map((l) => (l.name === n.name ? n : l)),
      tools: oE([...i.tools, ...r], "name"),
      commands: oE([...i.commands, ...o], "name"),
    };
  }),
    s?.());
}
async function v7o(e, t) {
  let n = Object.entries(e),
    r = () =>
      n.filter(([s]) => {
        let i = t.getClients().find((a) => a.name === s);
        return i !== void 0 && MUn(i);
      });
  if (r().length === 0) return;
  for (let s of Pxm) {
    await Nn(s);
    let i = r();
    if (i.length === 0) {
      T("[MCP] Retry: all remote servers recovered, stopping");
      return;
    }
    T(`[MCP] Retry: ${i.length} transiently-failed remote server(s) after ${s}ms backoff`);
    for (let [a, l] of i) aP.cache.delete(kqe(a, l));
    await Dqe((a) => _mr(t, a), Object.fromEntries(i));
  }
  let o = r();
  if (o.length > 0)
    T(
      `[MCP] Retry: ${o.length} remote server(s) still failed after all retries: ${o.map(([s]) => s).join(", ")}`,
    );
}
async function H7o(e, t, n) {
  if (e) {
    (Promise.resolve(t()).catch(() => {}), T(`[MCP] ${n} running fully async (nonblocking)`));
    return;
  }
  let r = t(),
    o = Date.now(),
    s;
  if (Array.isArray(r)) s = r;
  else {
    let c,
      u = await Promise.race([
        r,
        new Promise((d) => {
          c = setTimeout((p) => p("deadline"), POc, d);
        }),
      ]);
    if ((clearTimeout(c), u === "deadline")) {
      (r.catch(() => {}),
        T(
          `[MCP] ${n} config fetch not ready after ${POc}ms \u2014 proceeding; background connection continues`,
        ));
      return;
    }
    s = u;
  }
  let i = nIa(),
    a = Math.max(0, i - (Date.now() - o)),
    l = await JRa(s, a);
  if (l > 0)
    T(
      `[MCP] ${n}: ${l}/${s.length} not ready after ${i}ms \u2014 proceeding; background connection continues`,
    );
}
async function Mxm(e) {
  let { claudeaiConfigs: t, regularMcpConfigs: n, state: r, deferConnect: o } = e;
  if (Object.keys(t).length > 0) {
    let l = new Set();
    for (let u of Object.values(t)) {
      let d = ode(u);
      if (d) l.add(d);
    }
    let c = new Set();
    for (let [u, d] of Object.entries(n)) {
      if (!u.startsWith("plugin:")) continue;
      let p = ode(d);
      if (p && l.has(p)) c.add(u);
    }
    if (c.size > 0) {
      T(
        `[MCP] Lazy dedup: suppressing ${c.size} plugin server(s) that duplicate claude.ai connectors: ${[...c].join(", ")}`,
      );
      for (let u of r.getClients()) {
        if (!c.has(u.name) || u.type !== "connected") continue;
        ((u.client.onclose = void 0), ST(u.name, u.config).catch(() => {}));
      }
      r.applyMcpUpdate((u) => {
        let { clients: d, tools: p, commands: f, resources: m } = u;
        ((d = d.filter((g) => !c.has(g.name))),
          (p = p.filter((g) => !g.mcpInfo || !c.has(g.mcpInfo.serverName))));
        for (let g of c) ((f = $dt(f, g)), (m = Odt(m, g)));
        return {
          ...u,
          clients: d,
          tools: p,
          commands: f,
          resources: m,
        };
      });
    }
  }
  let s = cv(n, (l, c) => !c.startsWith("plugin:")),
    { servers: i, suppressed: a } = await Ldt(t, s);
  return (
    r.applyMcpUpdate((l) =>
      f3t(l.suppressedClaudeAiConnectors ?? [], a)
        ? l
        : {
            ...l,
            suppressedClaudeAiConnectors: a,
          },
    ),
    T7o(i, "claudeai", r, o)
  );
}
var POc = 1000,
  Pxm;
