// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module I$i
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var I$i = E(() => {
  C$i = R(Nh(), 1);
});
class tzr {
  resource;
  forceFlushTimeoutMillis;
  logRecordLimits;
  processors;
  loggers = new Map();
  activeProcessor;
  registeredLogRecordProcessors = [];
  constructor(e, t, n, r) {
    if (this.resource = e, this.forceFlushTimeoutMillis = t, this.logRecordLimits = n, this.processors = r, r.length > 0) this.registeredLogRecordProcessors = r, this.activeProcessor = new ezr(this.registeredLogRecordProcessors, this.forceFlushTimeoutMillis);else this.activeProcessor = new Z6r();
  }
}