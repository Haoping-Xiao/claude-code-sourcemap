// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GUa
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var GUa = E(() => {
  Hp();
  Rc();
  jUa();
  ft();
  oo();
  er();
  je();
  At();
  Gx();
  Jt();
  MVe = R(Nh(), 1), Pyo = R(e5t(), 1);
});
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
  shutDown = !1;
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
    if (this.shutDown = !0, this.buffer = [], this.delegate) await this.delegate.shutdown();
  }
}
class Nyo {
  delegate;
  buffer = [];
  shutDown = !1;
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
    if (this.shutDown = !0, this.buffer = [], this.delegate) await this.delegate.shutdown();
  }
}
var $yo,
  WUa = 64,
  qUa;