// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FDa
// matched 2.1.88 source: src/services/lsp/manager.ts
// class=modified  jaccard=0.4034  score=0.6558  fileCov=0.5118
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var FDa = E(() => {
  je();
  At();
  Jt();
  dn();
  kt();
  _pt();
  ypt();
  BDa = require("url");
});
function $kp() {
  let e,
    t = "not-started",
    n,
    r = 0,
    o;
  function s() {
    if (t === "failed") return;
    return e;
  }
  function i() {
    if (t === "failed")
      return {
        status: "failed",
        error: n || Error("Initialization failed"),
      };
    if (t === "not-started")
      return {
        status: "not-started",
      };
    if (t === "pending")
      return {
        status: "pending",
      };
    return {
      status: "success",
    };
  }
  function a() {
    if (t === "failed") return false;
    let p = s();
    if (!p) return false;
    let f = p.getAllServers();
    if (f.size === 0) return false;
    for (let m of f.values()) if (m.state !== "error") return true;
    return false;
  }
  async function l() {
    if (t === "success" || t === "failed") return;
    if (t === "pending" && o) await o;
  }
  function c() {
    if (lc("lspServers")) return;
    if ((T("[LSP MANAGER] initializeLspServerManager() called"), e !== void 0 && t !== "failed")) {
      T("[LSP MANAGER] Already initialized or initializing, skipping");
      return;
    }
    if (t === "failed") ((e = void 0), (n = void 0));
    ((e = ODa()), (t = "pending"), T("[LSP MANAGER] Created manager instance, state=pending"));
    let p = ++r;
    (T(`[LSP MANAGER] Starting async initialization (generation ${p})`),
      (o = e
        .initialize()
        .then(() => {
          if (p === r) {
            if (
              ((t = "success"), T("LSP server manager initialized successfully"), xe("lsp_init"), e)
            )
              UDa(e);
          }
        })
        .catch((f) => {
          if (p === r)
            ((t = "failed"),
              (n = f),
              (e = void 0),
              i6(f, "Failed to initialize LSP server manager"),
              T(`Failed to initialize LSP server manager: ${be(f)}`),
              Le("lsp_init", "lsp_init_failed"));
        })));
  }
  function u() {
    if (t === "not-started") return;
    if ((T("[LSP MANAGER] reinitializeLspServerManager() called"), e))
      e.shutdown().catch((p) => {
        T(`[LSP MANAGER] old instance shutdown during reinit failed: ${be(p)}`);
      });
    ((e = void 0), (t = "not-started"), (n = void 0), c());
  }
  async function d() {
    if (e === void 0) return;
    try {
      (await e.shutdown(), T("LSP server manager shut down successfully"), xe("lsp_shutdown"));
    } catch (p) {
      (It("lsp_shutdown", "lsp_shutdown_failed"),
        T(`Failed to shutdown LSP server manager: ${be(p)}`, {
          level: "error",
        }));
    } finally {
      ((e = void 0), (t = "not-started"), (n = void 0), (o = void 0), r++);
    }
  }
  return {
    get: s,
    getStatus: i,
    isConnected: a,
    waitForInitialization: l,
    initialize: c,
    reinitialize: u,
    shutdown: d,
  };
}
var Oqe, IDe, kpt, jDa, GDa, WDa, I2n, qDa;
