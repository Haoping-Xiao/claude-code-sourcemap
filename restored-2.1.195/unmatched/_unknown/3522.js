// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QUa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var QUa = Q(I3n => {
  Object.defineProperty(I3n, "__esModule", {
    value: !0
  });
  I3n.OTLPExporterBase = void 0;
  class JUa {
    _delegate;
    constructor(e) {
      this._delegate = e;
    }
    export(e, t) {
      this._delegate.export(e, t);
    }
    forceFlush() {
      return this._delegate.forceFlush();
    }
    shutdown() {
      return this._delegate.shutdown();
    }
  }
  I3n.OTLPExporterBase = JUa;
});