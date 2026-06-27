// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Lii
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Lii = Q(pHn => {
  Object.defineProperty(pHn, "__esModule", {
    value: !0
  });
  pHn.uint32ArrayFrom = void 0;
  function Ffd(e) {
    if (!Uint32Array.from) {
      var t = new Uint32Array(e.length),
        n = 0;
      while (n < e.length) t[n] = e[n], n += 1;
      return t;
    }
    return Uint32Array.from(e);
  }
  pHn.uint32ArrayFrom = Ffd;
});