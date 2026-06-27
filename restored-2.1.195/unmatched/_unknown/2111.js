// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module C6r
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var C6r = Q(ixn => {
  Object.defineProperty(ixn, "__esModule", {
    value: true
  });
  ixn.createConstMap = void 0;
  function UDd(e) {
    let t = {},
      n = e.length;
    for (let r = 0; r < n; r++) {
      let o = e[r];
      if (o) t[String(o).toUpperCase().replace(/[-.]/g, "_")] = o;
    }
    return t;
  }
  ixn.createConstMap = UDd;
});