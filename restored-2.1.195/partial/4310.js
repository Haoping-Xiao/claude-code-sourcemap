// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Nhl
// matched 2.1.88 source: src/utils/permissions/PermissionMode.ts
// class=partial  jaccard=0.0697  score=0.3086  fileCov=0.0826
// note: low-confidence suggestion: src/utils/permissions/PermissionMode.ts; 0 renamed
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
  if (!Jl()) return !1;
  if (Oe.CLAUDE_CODE_REMOTE) return !1;
  if (!WE()) return !1;
  if (!Lg().hasUsedRemoteSession || !Dt().hasRemoteEnvironment) return !1;
  return at("tengu_neapolitan", !1);
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