// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module w$i
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var w$i = E(() => {
  g3e = R(Nh(), 1);
});
class Z6r {
  forceFlush() {
    return Promise.resolve();
  }
  onEmit(e, t) {}
  shutdown() {
    return Promise.resolve();
  }
}
class ezr {
  processors;
  forceFlushTimeoutMillis;
  constructor(e, t) {
    this.processors = e, this.forceFlushTimeoutMillis = t;
  }
  async forceFlush() {
    let e = this.forceFlushTimeoutMillis;
    await Promise.all(this.processors.map(t => C$i.callWithTimeout(t.forceFlush(), e)));
  }
  onEmit(e, t) {
    this.processors.forEach(n => n.onEmit(e, t));
  }
  async shutdown() {
    await Promise.all(this.processors.map(e => e.shutdown()));
  }
}
var C$i;