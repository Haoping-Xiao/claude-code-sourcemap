// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module w6r
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var w6r = Q(nxn => {
  Object.defineProperty(nxn, "__esModule", {
    value: !0
  });
  nxn.loggingErrorHandler = void 0;
  var xDd = qi();
  function kDd() {
    return e => {
      xDd.diag.error(RDd(e));
    };
  }
  nxn.loggingErrorHandler = kDd;
  function RDd(e) {
    if (typeof e === "string") return e;else return JSON.stringify(LDd(e));
  }
  function LDd(e) {
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