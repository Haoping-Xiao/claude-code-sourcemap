// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PDe
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var PDe = E(() => {
  Xr();
});
function hF(e = H.number()) {
  return H.preprocess(t => {
    if (typeof t === "string") {
      let n = t.trim();
      if (/^[-+]?\d+(\.\d+)?$/.test(n)) {
        let r = Number(n);
        if (Number.isFinite(r)) return r;
      }
    }
    return t;
  }, e);
}