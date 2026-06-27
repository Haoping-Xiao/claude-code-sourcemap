// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xDa
// matched 2.1.88 source: src/services/lsp/LSPClient.ts
// class=modified  jaccard=0.6944  score=0.9246  fileCov=0.736
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: createLSPClient
// [unwrapped __commonJS module xDa] (exports=qe_, module=IDa)
var qe_ = {};
var IDa = {
  exports: qe_,
};
IDa.exports = CDa();
function createLSPClient(serverName, onCrash) {
  let n,
    r,
    o,
    s = false,
    i = false,
    a,
    l = false,
    c = [],
    u = [];
  function d() {
    if (i) throw a || Error(`LSP server ${serverName} failed to start`);
  }
  return {
    get capabilities() {
      return o;
    },
    get isInitialized() {
      return s;
    },
    async start(p, f, m) {
      try {
        if (
          ((n = kDa.spawn(p, f, {
            stdio: ["pipe", "pipe", "pipe"],
            env: {
              ...DM(),
              ...m?.env,
            },
            cwd: m?.cwd,
            windowsHide: true,
          })),
          !n.stdout || !n.stdin)
        )
          throw Error("LSP server process stdio not available");
        let g = n;
        if (
          (await new Promise((b, _) => {
            let S = () => {
                (v(), b());
              },
              A = (C) => {
                (v(), _(C));
              },
              v = () => {
                (g.removeListener("spawn", S), g.removeListener("error", A));
              };
            (g.once("spawn", S), g.once("error", A));
          }),
          g.pid)
        )
          (skn("lsp", g.pid),
            g.once("close", () => {
              if (g.pid) eOi(g.pid);
            }));
        if (n.stderr)
          n.stderr.on("data", (b) => {
            let _ = b.toString().trim();
            if (_) T(`[LSP SERVER ${serverName}] ${_}`);
          });
        (n.on("error", (b) => {
          if (!l)
            ((i = true),
              (a = b),
              T(`LSP server ${serverName} failed to start: ${b.message}`, {
                level: "error",
              }));
        }),
          n.on("exit", (b, _) => {
            if (b !== 0 && b !== null && !l) {
              ((s = false), (i = false), (a = void 0));
              let S = Error(`LSP server ${serverName} crashed with exit code ${b}`);
              (T(`LSP server ${serverName} crashed with exit code ${b}`, {
                level: "error",
              }),
                onCrash?.(S));
            }
          }),
          n.stdin.on("error", (b) => {
            if (!l) T(`LSP server ${serverName} stdin error: ${b.message}`);
          }));
        let h = new CDe.StreamMessageReader(n.stdout),
          y = new CDe.StreamMessageWriter(n.stdin);
        ((r = CDe.createMessageConnection(h, y)),
          r.onError(([b, _, S]) => {
            if (!l)
              ((i = true),
                (a = b),
                T(`LSP server ${serverName} connection error: ${b.message}`, {
                  level: "error",
                }));
          }),
          r.onClose(() => {
            if (!l) ((s = false), T(`LSP server ${serverName} connection closed`));
          }),
          r.listen(),
          r
            .trace(CDe.Trace.Verbose, {
              log: (b) => {
                T(`[LSP PROTOCOL ${serverName}] ${b}`);
              },
            })
            .catch((b) => {
              T(`Failed to enable tracing for ${serverName}: ${b.message}`);
            }));
        for (let { method: b, handler: _ } of c)
          (r.onNotification(b, _), T(`Applied queued notification handler for ${serverName}.${b}`));
        c.length = 0;
        for (let { method: b, handler: _ } of u)
          (r.onRequest(b, _), T(`Applied queued request handler for ${serverName}.${b}`));
        ((u.length = 0), T(`LSP client started for ${serverName}`));
      } catch (g) {
        if (Vo(g))
          T(`LSP server ${serverName} failed to start: ${be(g)}`, {
            level: "error",
          });
        else
          i6(
            Error(`LSP server ${serverName} failed to start: ${be(g)}`),
            "LSP server failed to start",
          );
        throw g;
      }
    },
    async initialize(p) {
      if (!r) throw Error("LSP client not started");
      d();
      try {
        let f = await r.sendRequest("initialize", p);
        return (
          (o = f.capabilities),
          await r.sendNotification("initialized", {}),
          (s = true),
          T(`LSP server ${serverName} initialized`),
          f
        );
      } catch (f) {
        throw (
          T(`LSP server ${serverName} initialize failed: ${f.message}`, {
            level: "error",
          }),
          f
        );
      }
    },
    async sendRequest(p, f) {
      if (!r) throw Error("LSP client not started");
      if ((d(), !s)) throw Error("LSP server not initialized");
      try {
        return await r.sendRequest(p, f);
      } catch (m) {
        throw (
          T(`LSP server ${serverName} request ${p} failed: ${m.message}`, {
            level: "error",
          }),
          m
        );
      }
    },
    async sendNotification(p, f) {
      if (!r) throw Error("LSP client not started");
      d();
      try {
        await r.sendNotification(p, f);
      } catch (m) {
        T(`LSP server ${serverName} notification ${p} failed (continuing): ${m.message}`, {
          level: "error",
        });
      }
    },
    onNotification(p, f) {
      if (!r) {
        (c.push({
          method: p,
          handler: f,
        }),
          T(`Queued notification handler for ${serverName}.${p} (connection not ready)`));
        return;
      }
      (d(), r.onNotification(p, f));
    },
    onRequest(p, f) {
      if (!r) {
        (u.push({
          method: p,
          handler: f,
        }),
          T(`Queued request handler for ${serverName}.${p} (connection not ready)`));
        return;
      }
      (d(), r.onRequest(p, f));
    },
    async stop() {
      let p;
      l = true;
      try {
        if (r) (await r.sendRequest("shutdown", {}), await r.sendNotification("exit", {}));
      } catch (f) {
        let m = f;
        (T(`LSP server ${serverName} stop failed: ${m.message}`, {
          level: "error",
        }),
          (p = m));
      } finally {
        if (r) {
          try {
            r.dispose();
          } catch (f) {
            T(`Connection disposal failed for ${serverName}: ${be(f)}`);
          }
          r = void 0;
        }
        if (n) {
          if ((n.removeAllListeners("error"), n.removeAllListeners("exit"), n.stdin))
            n.stdin.removeAllListeners("error");
          if (n.stderr) n.stderr.removeAllListeners("data");
          try {
            n.kill();
          } catch (f) {
            T(`Process kill failed for ${serverName} (may already be dead): ${be(f)}`);
          }
          n = void 0;
        }
        if (((s = false), (o = void 0), (l = false), p)) ((i = true), (a = p));
        T(`LSP client stopped for ${serverName}`);
      }
      if (p) throw p;
    },
  };
}
var kDa, CDe;
