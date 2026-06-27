// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module L7
// matched 2.1.88 source: src/utils/settings/pluginOnlyPolicy.ts
// class=modified  jaccard=0.7064  score=1  fileCov=0.7064
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var L7 = E(() => {
  dr();
  V1d = new Set(["plugin", "policySettings", "built-in", "builtin", "bundled"]);
});
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
  if (e?.disableAllHooks === !0) return {};
  if (e?.allowManagedHooksOnly === !0 || Tl()) return e?.hooks ?? {};
  if (VE("hooks")) return e?.hooks ?? {};
  let t = jo();
  if (t.disableAllHooks === !0) return e?.hooks ?? {};
  return t.hooks ?? {};
}
function N_() {
  return Tl() || hce();
}
function hce() {
  let e = yn("policySettings");
  if (e?.allowManagedHooksOnly === !0) return !0;
  if (jo().disableAllHooks === !0 && e?.disableAllHooks !== !0) return !0;
  return !1;
}
function Mj() {
  return yn("policySettings")?.disableAllHooks === !0;
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
