// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module umi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var umi = E(() => {
  cmi = R(lmi(), 1), STn = cmi.state;
});
function Lhd() {
  return {
    end: () => {},
    isRecording: () => false,
    recordException: () => {},
    setAttribute: () => {},
    setStatus: () => {},
    addEvent: () => {}
  };
}
function Dhd() {
  return {
    createRequestHeaders: () => ({}),
    parseTraceparentHeader: () => {
      return;
    },
    startSpan: (e, t) => ({
      span: Lhd(),
      tracingContext: ami({
        parentContext: t.tracingContext
      })
    }),
    withContext(e, t, ...n) {
      return t(...n);
    }
  };
}
function kMt() {
  if (!STn.instrumenterImplementation) STn.instrumenterImplementation = Dhd();
  return STn.instrumenterImplementation;
}