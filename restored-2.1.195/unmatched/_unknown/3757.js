// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rqn
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var rqn = Q(Xmt => {
  Object.defineProperty(Xmt, "__esModule", {
    value: true
  });
  Xmt.nextGreaterSquare = Xmt.ldexp = void 0;
  function v9p(e, t) {
    if (e === 0 || e === Number.POSITIVE_INFINITY || e === Number.NEGATIVE_INFINITY || Number.isNaN(e)) return e;
    return e * Math.pow(2, t);
  }
  Xmt.ldexp = v9p;
  function w9p(e) {
    return e--, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, e++, e;
  }
  Xmt.nextGreaterSquare = w9p;
});