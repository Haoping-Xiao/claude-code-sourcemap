// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $In
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var $In = Q(MIn => {
  Object.defineProperty(MIn, "__esModule", {
    value: true
  });
  MIn.NonRecordingSpan = void 0;
  var uLd = PIn();
  class uCi {
    constructor(e = uLd.INVALID_SPAN_CONTEXT) {
      this._spanContext = e;
    }
    spanContext() {
      return this._spanContext;
    }
    setAttribute(e, t) {
      return this;
    }
    setAttributes(e) {
      return this;
    }
    addEvent(e, t) {
      return this;
    }
    addLink(e) {
      return this;
    }
    addLinks(e) {
      return this;
    }
    setStatus(e) {
      return this;
    }
    updateName(e) {
      return this;
    }
    end(e) {}
    isRecording() {
      return false;
    }
    recordException(e, t) {}
  }
  MIn.NonRecordingSpan = uCi;
});