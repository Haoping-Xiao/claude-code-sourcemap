// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kii
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var kii = Q(uHn => {
  Object.defineProperty(uHn, "__esModule", {
    value: !0
  });
  uHn.isEmptyData = void 0;
  function Bfd(e) {
    if (typeof e === "string") return e.length === 0;
    return e.byteLength === 0;
  }
  uHn.isEmptyData = Bfd;
});