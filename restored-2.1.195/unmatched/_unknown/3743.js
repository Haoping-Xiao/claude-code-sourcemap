// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CVa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var CVa = Q(zmt => {
  Object.defineProperty(zmt, "__esModule", {
    value: true
  });
  zmt.isUrlIgnored = zmt.urlMatches = void 0;
  function wVa(e, t) {
    if (typeof t === "string") return e === t;else return !!e.match(t);
  }
  zmt.urlMatches = wVa;
  function WVp(e, t) {
    if (!t) return false;
    for (let n of t) if (wVa(e, n)) return true;
    return false;
  }
  zmt.isUrlIgnored = WVp;
});