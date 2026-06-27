// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OIn
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var OIn = Q(Jle => {
  Object.defineProperty(Jle, "__esModule", {
    value: !0
  });
  Jle.wrapSpanContext = Jle.isSpanContextValid = Jle.isValidSpanId = Jle.isValidTraceId = void 0;
  var pCi = PIn(),
    _Ld = $In(),
    bLd = /^([0-9a-f]{32})$/i,
    SLd = /^[0-9a-f]{16}$/i;
  function fCi(e) {
    return bLd.test(e) && e !== pCi.INVALID_TRACEID;
  }
  Jle.isValidTraceId = fCi;
  function mCi(e) {
    return SLd.test(e) && e !== pCi.INVALID_SPANID;
  }
  Jle.isValidSpanId = mCi;
  function ELd(e) {
    return fCi(e.traceId) && mCi(e.spanId);
  }
  Jle.isSpanContextValid = ELd;
  function ALd(e) {
    return new _Ld.NonRecordingSpan(e);
  }
  Jle.wrapSpanContext = ALd;
});