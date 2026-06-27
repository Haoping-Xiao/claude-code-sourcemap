// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module O4n
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var O4n = Q(Dft => {
  Object.defineProperty(Dft, "__esModule", {
    value: !0
  });
  Dft.nextGreaterSquare = Dft.ldexp = void 0;
  function NMp(e, t) {
    if (e === 0 || e === Number.POSITIVE_INFINITY || e === Number.NEGATIVE_INFINITY || Number.isNaN(e)) return e;
    return e * Math.pow(2, t);
  }
  Dft.ldexp = NMp;
  function BMp(e) {
    return e--, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, e++, e;
  }
  Dft.nextGreaterSquare = BMp;
});