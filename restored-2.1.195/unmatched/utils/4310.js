// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Nhl
// matched 2.1.88 source: src/utils/permissions/PermissionMode.ts
// class=new  jaccard=0.0356  score=0.1932  fileCov=0.0418
// note: nearest: src/utils/permissions/PermissionMode.ts (0.0356); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Nhl = E(() => {
  ft();
  UTo();
  dn();
  yC();
  xht();
  er();
  Lo();
  je();
  Cp();
  At();
  Bi();
  Ao();
  vM();
  qJ();
  cAe();
  T0o();
  NDe();
  d9t();
  hN();
  v7n();
  dMe();
  A0o();
  hP();
  Rhl();
  L0o();
  YI();
  ty();
});
function rzt() {
  if (!Jl()) return false;
  if (Oe.CLAUDE_CODE_REMOTE) return false;
  if (!WE()) return false;
  if (!Lg().hasUsedRemoteSession || !Dt().hasRemoteEnvironment) return false;
  return at("tengu_neapolitan", false);
}
function Bhl() {
  return Jte() || qf($t()) !== null;
}
async function Uhl() {
  let e = $t(),
    t = await ub(e);
  if (t === "HEAD") return;
  if (await vRt(t, e)) return t;
  T(`[remote agent] local branch '${t}' is not pushed to origin; remote agent will run against the repository's default branch`);
  return;
}
function Fhl(e) {
  if (e === "bubble") return;
  if (e === "bypassPermissions") return "auto";
  return e;
}