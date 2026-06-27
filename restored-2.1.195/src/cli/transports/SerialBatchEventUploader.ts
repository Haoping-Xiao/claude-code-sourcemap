// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ygc
// matched 2.1.88 source: src/cli/transports/SerialBatchEventUploader.ts
// class=modified  jaccard=0.7302  score=0.8634  fileCov=0.8257
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var ygc = E(() => {
  ft();
  je();
  At();
  ys();
  co();
  y_();
  _a();
  jS();
  Jt();
  ggc = require("fs/promises");
});
class k8o {
  _active = false;
  _pending = [];
  get active() {
    return this._active;
  }
  get pendingCount() {
    return this._pending.length;
  }
  start() {
    this._active = true;
  }
  end() {
    return ((this._active = false), this._pending.splice(0));
  }
  enqueue(...e) {
    if (!this._active) return false;
    return (this._pending.push(...e), true);
  }
  drop() {
    this._active = false;
    let e = this._pending.length;
    return ((this._pending.length = 0), e);
  }
  deactivate() {
    this._active = false;
  }
}
class uen {
  pending = [];
  pendingAtClose = 0;
  draining = false;
  closed = false;
  backpressureResolvers = [];
  sleepResolve = null;
  flushResolvers = [];
  droppedBatches = 0;
  config;
  constructor(e) {
    this.config = e;
  }
  get droppedBatchCount() {
    return this.droppedBatches;
  }
  get pendingCount() {
    return this.closed ? this.pendingAtClose : this.pending.length;
  }
  async enqueue(e) {
    if (this.closed) return;
    let t = Array.isArray(e) ? e : [e];
    if (t.length === 0) return;
    while (this.pending.length + t.length > this.config.maxQueueSize && !this.closed)
      await new Promise((n) => {
        this.backpressureResolvers.push(n);
      });
    if (this.closed) return;
    (this.pending.push(...t), this.drain());
  }
  flush() {
    if (this.pending.length === 0 && !this.draining) return Promise.resolve();
    return (
      this.drain(),
      new Promise((e) => {
        this.flushResolvers.push(e);
      })
    );
  }
  close() {
    if (this.closed) return;
    ((this.closed = true),
      (this.pendingAtClose = this.pending.length),
      (this.pending = []),
      this.sleepResolve?.(),
      (this.sleepResolve = null));
    for (let e of this.backpressureResolvers) e();
    this.backpressureResolvers = [];
    for (let e of this.flushResolvers) e();
    this.flushResolvers = [];
  }
  async drain() {
    if (this.draining || this.closed) return;
    this.draining = true;
    let e = 0;
    try {
      while (this.pending.length > 0 && !this.closed) {
        let t = this.takeBatch();
        if (t.length === 0) continue;
        try {
          (await this.config.send(t), (e = 0));
        } catch (n) {
          if (
            (e++,
            this.config.maxConsecutiveFailures !== void 0 &&
              e >= this.config.maxConsecutiveFailures)
          ) {
            (this.droppedBatches++,
              this.config.onBatchDropped?.(t.length, e),
              (e = 0),
              this.releaseBackpressure());
            continue;
          }
          this.pending = t.concat(this.pending);
          let r = n instanceof s7e ? n.retryAfterMs : void 0;
          await this.sleep(this.retryDelay(e, r));
          continue;
        }
        this.releaseBackpressure();
      }
    } finally {
      if (((this.draining = false), this.pending.length === 0)) {
        for (let t of this.flushResolvers) t();
        this.flushResolvers = [];
      }
    }
  }
  takeBatch() {
    let { maxBatchSize: e, maxBatchBytes: t } = this.config;
    if (t === void 0) return this.pending.splice(0, e);
    let n = 0,
      r = 0;
    while (r < this.pending.length && r < e) {
      let o;
      try {
        o = Buffer.byteLength(De(this.pending[r]));
      } catch {
        this.pending.splice(r, 1);
        continue;
      }
      if (r > 0 && n + o > t) break;
      ((n += o), r++);
    }
    return this.pending.splice(0, r);
  }
  retryDelay(e, t) {
    let n = Math.random() * this.config.jitterMs;
    if (t !== void 0)
      return Math.max(this.config.baseDelayMs, Math.min(t, this.config.maxDelayMs)) + n;
    return Math.min(this.config.baseDelayMs * 2 ** (e - 1), this.config.maxDelayMs) + n;
  }
  releaseBackpressure() {
    let e = this.backpressureResolvers;
    this.backpressureResolvers = [];
    for (let t of e) t();
  }
  sleep(e) {
    return new Promise((t) => {
      ((this.sleepResolve = t),
        setTimeout(
          (n, r) => {
            ((n.sleepResolve = null), r());
          },
          e,
          this,
          t,
        ));
    });
  }
}
var s7e;
