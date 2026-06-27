// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module EMi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var EMi = Q(bst => {
  Object.defineProperty(bst, "__esModule", {
    value: true
  });
  bst.isUrlIgnored = bst.urlMatches = void 0;
  function SMi(e, t) {
    if (typeof t === "string") return e === t;else return !!e.match(t);
  }
  bst.urlMatches = SMi;
  function VPd(e, t) {
    if (!t) return false;
    for (let n of t) if (SMi(e, n)) return true;
    return false;
  }
  bst.isUrlIgnored = VPd;
});