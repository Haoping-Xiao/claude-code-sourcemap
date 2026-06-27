// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jqa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var jqa = Q(Wmt => {
  Object.defineProperty(Wmt, "__esModule", {
    value: !0
  });
  Wmt.globalErrorHandler = Wmt.setGlobalErrorHandler = void 0;
  var Uqp = dEo(),
    Fqa = (0, Uqp.loggingErrorHandler)();
  function Fqp(e) {
    Fqa = e;
  }
  Wmt.setGlobalErrorHandler = Fqp;
  function jqp(e) {
    try {
      Fqa(e);
    } catch {}
  }
  Wmt.globalErrorHandler = jqp;
});