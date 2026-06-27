// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eMc
// matched 2.1.88 source: src/utils/permissions/permissionSetup.ts
// class=new  jaccard=0.0102  score=0.2544  fileCov=0.0105
// note: nearest: src/utils/permissions/permissionSetup.ts (0.0102); dir inferred from dep-graph -> _root; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var eMc = E(() => {
  JYo();
  fn();
});
function tMc(e = process.env) {
  let t = [];
  for (let n in e) if ((n.startsWith("CLAUDE_CODE_") || n.startsWith("ANTHROPIC_")) && !EIm.has(n) && e[n] !== void 0 && e[n] !== "") t.push(n);
  return t.sort();
}
function nMc(e) {
  let t = Dr(),
    n = [];
  for (let r of wcr) {
    if (AIm.has(r)) continue;
    let s = (Nst.includes(r) ? t[r] : void 0) ?? e[r],
      i = I7[r];
    if (s === void 0 || TIm(s, i)) continue;
    n.push(r);
  }
  return n;
}
function rMc(e) {
  let t = [];
  for (let n of HIm) if (e[n] !== void 0) t.push(n);
  if (e.permissions?.defaultMode !== void 0) t.push("permissions.defaultMode");
  if (e.worktree?.baseRef !== void 0) t.push("worktree.baseRef");
  return t.sort();
}
function oMc(e, t) {
  let n = [];
  for (let r in e) if (t(r) === "cli") n.push(r);
  return n.sort();
}
function TIm(e, t) {
  if (e === t) return true;
  if (typeof e === "object" && e !== null) return Object.keys(e).length === 0;
  return false;
}
var EIm, AIm, HIm;