// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _ro
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var _ro = E(() => {
  Zta();
  mna();
  bLt();
  X$n();
  Qtp = [Do("hostMatches", [Pu.STRING, Pu.STRING], Pu.BOOL, (e, t) => GLr(e, t)), Do("hostMatchesAny", [Pu.STRING, $8(Pu.STRING)], Pu.BOOL, (e, t) => {
    let n = [];
    for (let r of t) {
      if (typeof r !== "string") throw Error("hostMatchesAny: non-string pattern in list");
      n.push(r);
    }
    return WLr(e, n);
  }), Do("inCIDR", [Pu.STRING, Pu.STRING], Pu.BOOL, (e, t) => zet(e, t))];
  enp = Ztp();
});