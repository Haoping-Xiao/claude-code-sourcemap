// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GUa
// matched 2.1.88 source: node_modules/@opentelemetry/otlp-exporter-base/build/src/otlp-export-delegate.js
// class=partial  jaccard=0.0875  score=0.4214  fileCov=0.0995
// note: low-confidence suggestion: node_modules/@opentelemetry/otlp-exporter-base/build/src/otlp-export-delegate.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module GUa] deps: Hp, Rc, jUa, ft, oo, er, je, At, Gx, Jt
MVe = R(Nh(), 1), Pyo = R(e5t(), 1);
function VUa(e) {
  return {
    code: $yo.ExportResultCode.FAILED,
    error: Error(e)
  };
}
function zUa() {}
class Oyo {
  delegate;
  buffer = [];
  shutDown = false;
  setDelegate(e) {
    if (this.shutDown) {
      e.shutdown().catch(() => {});
      return;
    }
    this.delegate = e;
    let t = this.buffer;
    this.buffer = [];
    for (let n of t) e.export(n, zUa);
  }
  export(e, t) {
    if (this.shutDown) {
      t(VUa("Exporter has been shut down"));
      return;
    }
    if (this.delegate) {
      this.delegate.export(e, t);
      return;
    }
    if (this.buffer.length >= WUa) this.buffer.shift();
    this.buffer.push(e), t(qUa);
  }
  async forceFlush() {
    if (this.delegate?.forceFlush) await this.delegate.forceFlush();
  }
  async shutdown() {
    if (this.shutDown = true, this.buffer = [], this.delegate) await this.delegate.shutdown();
  }
}
class Nyo {
  delegate;
  buffer = [];
  shutDown = false;
  setDelegate(e) {
    if (this.shutDown) {
      e.shutdown().catch(() => {});
      return;
    }
    this.delegate = e;
    let t = this.buffer;
    this.buffer = [];
    for (let n of t) e.export(n, zUa);
  }
  export(e, t) {
    if (this.shutDown) {
      t(VUa("Exporter has been shut down"));
      return;
    }
    if (this.delegate) {
      this.delegate.export(e, t);
      return;
    }
    if (this.buffer.length >= WUa) this.buffer.shift();
    this.buffer.push(e), t(qUa);
  }
  async shutdown() {
    if (this.shutDown = true, this.buffer = [], this.delegate) await this.delegate.shutdown();
  }
}
var $yo,
  WUa = 64,
  qUa;