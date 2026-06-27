// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kvs
// matched 2.1.88 source: src/services/remoteManagedSettings/syncCacheState.ts
// class=partial  jaccard=0.221  score=1  fileCov=0.221
// note: low-confidence suggestion: src/services/remoteManagedSettings/syncCacheState.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var kvs = E(() => {
  Evs();
  IRr();
  uOu = kfn(function (e, t) {
    return e == null ? {} : Svs(e, t);
  }), Rfn = uOu;
});
function wet(e) {
  $Rt = e, n_();
}
function Lvs() {
  $Rt = null, xRr = void 0, kRr = !1;
}
function Dvs() {
  kRr = !0;
}
function Pvs() {
  return kRr;
}
function Mae(e) {
  return xRr = e, e;
}
function Ihe() {
  return;
}
function Lfn() {
  return Ihe() ?? Rvs.join(tr(), dOu);
}
function pOu() {
  try {
    let e = XC(Lfn()),
      t = Ft(TG(e));
    if (!t || typeof t !== "object" || Array.isArray(t)) return null;
    return t;
  } catch {
    return null;
  }
}
function xhe() {
  if (!Ihe() && xRr !== !0) return null;
  if ($Rt) return $Rt;
  let e = pOu();
  if (e) return $Rt = e, n_(), e;
  return null;
}
var Rvs,
  dOu = "remote-settings.json",
  $Rt = null,
  xRr,
  kRr = !1;