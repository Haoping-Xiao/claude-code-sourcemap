// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fzn
// matched 2.1.88 source: src/components/Settings/Config.tsx
// class=new  jaccard=0.0043  score=1  fileCov=0.0043
// note: nearest: src/components/Settings/Config.tsx (0.0043); dir inferred from dep-graph -> services; 0 renamed
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