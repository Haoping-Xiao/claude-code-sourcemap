// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uui
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var uui = Q(LHn => {
  Object.defineProperty(LHn, "__esModule", {
    value: !0
  });
  LHn.uint32ArrayFrom = void 0;
  function imd(e) {
    if (!Uint32Array.from) {
      var t = new Uint32Array(e.length),
        n = 0;
      while (n < e.length) t[n] = e[n], n += 1;
      return t;
    }
    return Uint32Array.from(e);
  }
  LHn.uint32ArrayFrom = imd;
});