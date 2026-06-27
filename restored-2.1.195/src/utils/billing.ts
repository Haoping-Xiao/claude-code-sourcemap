// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Tnt
// matched 2.1.88 source: src/utils/billing.ts
// class=modified  jaccard=0.4426  score=0.8181  fileCov=0.4909
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Tnt = E(() => {
  kt();
  je();
  Mm();
  At();
  Jt();
});
function BSn() {
  if (Oe.DISABLE_COST_WARNINGS) return false;
  let e = bo();
  if (e && zB()) return true;
  if (e) return false;
  let t = aI(),
    n = nPt();
  if (!t.hasToken && !n) return false;
  let r = Dt(),
    o = r.oauthAccount?.organizationRole,
    s = r.oauthAccount?.workspaceRole;
  if (!o || !s) return false;
  return ["admin", "billing"].includes(o) || ["workspace_admin", "workspace_billing"].includes(s);
}
function eH() {
  if (w7s !== null) return w7s;
  if (!bo()) return false;
  let e = Di();
  if (e === "max" || e === "pro") return true;
  let n = Dt().oauthAccount?.organizationRole;
  return !!n && ["admin", "billing", "owner", "primary_owner"].includes(n);
}
function zB() {
  return Lc()?.billingType === "usage_based";
}
var w7s = null;
