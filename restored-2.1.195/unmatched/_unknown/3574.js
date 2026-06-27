// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module G2a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var G2a = Q(tmt => {
  Object.defineProperty(tmt, "__esModule", {
    value: true
  });
  tmt.parseRetryAfterToMills = tmt.isExportRetryable = void 0;
  function dNp(e) {
    return [429, 502, 503, 504].includes(e);
  }
  tmt.isExportRetryable = dNp;
  function pNp(e) {
    if (e == null) return;
    let t = Number.parseInt(e, 10);
    if (Number.isInteger(t)) return t > 0 ? t * 1000 : -1;
    let n = new Date(e).getTime() - Date.now();
    if (n >= 0) return n;
    return 0;
  }
  tmt.parseRetryAfterToMills = pNp;
});