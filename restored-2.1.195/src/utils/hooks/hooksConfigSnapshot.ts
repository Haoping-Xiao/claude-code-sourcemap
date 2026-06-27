// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module L7
// matched 2.1.88 source: src/utils/hooks/hooksConfigSnapshot.ts
// class=modified  jaccard=0.1956  score=0.6046  fileCov=0.2243
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module L7] deps: dr
V1d = new Set(["plugin", "policySettings", "built-in", "builtin", "bundled"]);
function z1d() {
  return {
    initialHooksConfig: null,
  };
}
function BKr() {
  let e = Y1d(),
    t = _Ni.get(e);
  if (!t) ((t = z1d()), _Ni.set(e, t));
  return t;
}
function UKr() {
  let e = yn("policySettings");
  if (e?.disableAllHooks === true) return {};
  if (e?.allowManagedHooksOnly === true || Tl()) return e?.hooks ?? {};
  if (VE("hooks")) return e?.hooks ?? {};
  let t = jo();
  if (t.disableAllHooks === true) return e?.hooks ?? {};
  return t.hooks ?? {};
}
function N_() {
  return Tl() || hce();
}
function hce() {
  let e = yn("policySettings");
  if (e?.allowManagedHooksOnly === true) return true;
  if (jo().disableAllHooks === true && e?.disableAllHooks !== true) return true;
  return false;
}
function Mj() {
  return yn("policySettings")?.disableAllHooks === true;
}
function bNi() {
  (n_(), (BKr().initialHooksConfig = UKr()));
}
function Rke() {
  (n_(), (BKr().initialHooksConfig = UKr()));
}
function CU() {
  let e = BKr();
  if (e.initialHooksConfig === null) (n_(), (e.initialHooksConfig = UKr()));
  return e.initialHooksConfig;
}
var K1d = "cli",
  Y1d = () => K1d,
  _Ni;
