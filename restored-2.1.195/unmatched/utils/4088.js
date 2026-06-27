// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fzn
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var fzn = E(() => {
  Un();
  pzn = R(rt(), 1);
});
function mzn(e, t) {
  for (let n of [e, t]) {
    if (n == null) continue;
    if (KS(n) || (nU(n) ?? xa(n))) return n;
  }
  return Uw();
}
function $yt() {
  let e = Ht(o => o.mainLoopModel),
    t = Ht(o => o.mainLoopModelForSession),
    n = t6e(),
    r = G_();
  return sCo.useMemo(() => mzn(t, e), [t, e, n, r]);
}
function kH() {
  let e = Ht(o => o.mainLoopModel),
    t = Ht(o => o.mainLoopModelForSession),
    n = t6e(),
    r = G_();
  return sCo.useMemo(() => zo(mzn(t, e)), [t, e, n, r]);
}
var sCo;