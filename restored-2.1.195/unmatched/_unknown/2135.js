// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module EMi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var EMi = Q(bst => {
  Object.defineProperty(bst, "__esModule", {
    value: !0
  });
  bst.isUrlIgnored = bst.urlMatches = void 0;
  function SMi(e, t) {
    if (typeof t === "string") return e === t;else return !!e.match(t);
  }
  bst.urlMatches = SMi;
  function VPd(e, t) {
    if (!t) return !1;
    for (let n of t) if (SMi(e, n)) return !0;
    return !1;
  }
  bst.isUrlIgnored = VPd;
});