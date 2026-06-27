// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dEo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var dEo = Q(I5n => {
  Object.defineProperty(I5n, "__esModule", {
    value: !0
  });
  I5n.loggingErrorHandler = void 0;
  var $qp = qi();
  function Oqp() {
    return e => {
      $qp.diag.error(Nqp(e));
    };
  }
  I5n.loggingErrorHandler = Oqp;
  function Nqp(e) {
    if (typeof e === "string") return e;else return JSON.stringify(Bqp(e));
  }
  function Bqp(e) {
    let t = {},
      n = e;
    while (n !== null) Object.getOwnPropertyNames(n).forEach(r => {
      if (t[r]) return;
      let o = n[r];
      if (o) t[r] = String(o);
    }), n = Object.getPrototypeOf(n);
    return t;
  }
});