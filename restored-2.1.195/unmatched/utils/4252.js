// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CYn
// matched 2.1.88 source: src/components/permissions/PowerShellPermissionRequest/PowerShellPermissionRequest.tsx
// class=new  jaccard=0.0453  score=0.3705  fileCov=0.0491
// note: nearest: src/components/permissions/PowerShellPermissionRequest/PowerShellPermissionRequest.tsx (0.0453); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module CYn] deps: dr, fh, wYn, QH
Lfl = new Map();
function wko(e) {
  if (e === Co) return Co;
  if (e === Ss) return Ss;
  return null;
}
function Dfl(e, t) {
  let n = wko(e);
  if (n === null) return null;
  if (t === void 0 || t === "" || /^[\s*]+$/.test(t)) return "bare";
  return (n === Co ? w6t(n, t) : I6t(n, t)) ? "dangerous_prefix" : "scoped";
}
function sdf(e) {
  let t = {},
    n = 0;
  for (let r of odf) for (let o of e[r] ?? []) {
    let {
        toolName: s,
        ruleContent: i
      } = Ig(o),
      a = wko(s);
    if (a === null) continue;
    let l = Dfl(a, i);
    if (l === null) continue;
    let c = `${r}_${a}_${l}`;
    t[c] = (t[c] ?? 0) + 1, n++;
  }
  return t.total_shell_allow_rules = n, t;
}
function Pfl(e) {
  G("tengu_shell_allow_rules_at_init", sdf(e));
}
function IYn(e) {
  for (let t of e) {
    if (t.type !== "addRules" || t.behavior !== "allow") continue;
    for (let n of t.rules) {
      let r = wko(n.toolName);
      if (r === null) continue;
      let o = Dfl(n.toolName, n.ruleContent);
      if (o === null) continue;
      G("tengu_shell_allow_rule_added", {
        toolName: $e(r),
        category: $e(o),
        destination: $e(t.destination)
      });
    }
  }
}
var odf;