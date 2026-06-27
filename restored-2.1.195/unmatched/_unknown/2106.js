// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mIi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var mIi = Q(hst => {
  Object.defineProperty(hst, "__esModule", {
    value: true
  });
  hst.globalErrorHandler = hst.setGlobalErrorHandler = void 0;
  var DDd = w6r(),
    fIi = (0, DDd.loggingErrorHandler)();
  function PDd(e) {
    fIi = e;
  }
  hst.setGlobalErrorHandler = PDd;
  function MDd(e) {
    try {
      fIi(e);
    } catch {}
  }
  hst.globalErrorHandler = MDd;
});