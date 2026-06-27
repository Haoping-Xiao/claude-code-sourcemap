// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kvs
// matched 2.1.88 source: src/services/remoteManagedSettings/syncCacheState.ts
// class=modified  jaccard=0.1047  score=1  fileCov=0.1047
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module kvs] deps: Evs, IRr
((uOu = kfn(function (e, t) {
  return e == null ? {} : Svs(e, t);
})),
  (Rfn = uOu));
function wet(e) {
  (($Rt = e), n_());
}
function Lvs() {
  (($Rt = null), (xRr = void 0), (kRr = false));
}
function Dvs() {
  kRr = true;
}
function Pvs() {
  return kRr;
}
function Mae(e) {
  return ((xRr = e), e);
}
function Ihe() {
  return;
}
function Lfn() {
  return Ihe() ?? Rvs.join(tr(), SETTINGS_FILENAME);
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
  if (!Ihe() && xRr !== true) return null;
  if ($Rt) return $Rt;
  let e = pOu();
  if (e) return (($Rt = e), n_(), e);
  return null;
}
var Rvs,
  SETTINGS_FILENAME = "remote-settings.json",
  $Rt = null,
  xRr,
  kRr = false;
