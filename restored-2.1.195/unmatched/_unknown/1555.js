// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lui
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lui = Q(kHn => {
  Object.defineProperty(kHn, "__esModule", {
    value: true
  });
  kHn.isEmptyData = void 0;
  function omd(e) {
    if (typeof e === "string") return e.length === 0;
    return e.byteLength === 0;
  }
  kHn.isEmptyData = omd;
});