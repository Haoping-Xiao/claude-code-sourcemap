// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WSe
// matched 2.1.88 source: node_modules/follow-redirects/index.js
// class=new  jaccard=0.0259  score=0.3518  fileCov=0.0272
// note: nearest: node_modules/follow-redirects/index.js (0.0259); dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module WSe] deps: services/analytics/index.ts, services/analytics/growthbook.ts, services/analytics/firstPartyEventLoggingExporter.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/fsOperations.ts, utils/telemetry/pluginTelemetry.ts
xxa = require("crypto");
D3t = new Set(), tpo = new Map();
class Nxa {
  als = new Oxa.AsyncLocalStorage();
  active() {
    return this.als.getStore() ?? $xa.ROOT_CONTEXT;
  }
  with(e, t, n, ...r) {
    let o = n == null ? t : t.bind(n);
    return this.als.run(e, o, ...r);
  }
  enterWith(e) {
    this.als.enterWith(e);
  }
  bind(e, t) {
    if (typeof t === "function") {
      let n = (...r) => this.with(e, () => t(...r));
      return Object.defineProperty(n, "length", {
        configurable: true,
        enumerable: false,
        writable: false,
        value: t.length
      }), n;
    }
    return t;
  }
  enable() {
    return this;
  }
  disable() {
    return this.als.disable(), this;
  }
}
var $xa, Oxa, qSe;