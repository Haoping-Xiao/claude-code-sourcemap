// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VNo
// matched 2.1.88 source: src/utils/permissions/shadowedRuleDetection.ts
// class=modified  jaccard=0.4596  score=1  fileCov=0.4596
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module VNo] deps: id, uo, Dgt, gz, S4n
((qNl = R(lt(), 1)), (Anr = R(rt(), 1)));
function isSharedSettingSource(e) {
  return e === "projectSettings" || e === "policySettings" || e === "command";
}
function Tnr(e) {
  return COe(e);
}
function generateFixSuggestion(e, t, n) {
  let r = Tnr(t.source),
    o = Tnr(n.source),
    s = t.ruleValue.toolName;
  if (e === "deny")
    return `Remove the "${s}" deny rule from ${r}, or remove the specific allow rule from ${o}`;
  return `Remove the "${s}" ask rule from ${r}, or remove the specific allow rule from ${o}`;
}
function J$f(e, t, n) {
  let { toolName: r, ruleContent: o } = e.ruleValue;
  if (o === void 0)
    return {
      shadowed: false,
    };
  let s = t.find((i) => i.ruleValue.toolName === r && i.ruleValue.ruleContent === void 0);
  if (!s)
    return {
      shadowed: false,
    };
  if (r === Co && n.sandboxAutoAllowEnabled) {
    if (!isSharedSettingSource(s.source))
      return {
        shadowed: false,
      };
  }
  return {
    shadowed: true,
    shadowedBy: s,
    shadowType: "ask",
  };
}
function Q$f(e, t) {
  let { toolName: n, ruleContent: r } = e.ruleValue;
  if (r === void 0)
    return {
      shadowed: false,
    };
  let o = t.find((s) => s.ruleValue.toolName === n && s.ruleValue.ruleContent === void 0);
  if (!o)
    return {
      shadowed: false,
    };
  return {
    shadowed: true,
    shadowedBy: o,
    shadowType: "deny",
  };
}
function detectUnreachableRules(e, t) {
  let n = [],
    r = bHe(e),
    o = kHe(e),
    s = cz(e);
  for (let i of r) {
    let a = Q$f(i, s);
    if (a.shadowed) {
      let c = Tnr(a.shadowedBy.source);
      n.push({
        rule: i,
        reason: `Blocked by "${a.shadowedBy.ruleValue.toolName}" deny rule (from ${c})`,
        shadowedBy: a.shadowedBy,
        shadowType: "deny",
        fix: generateFixSuggestion("deny", a.shadowedBy, i),
      });
      continue;
    }
    let l = J$f(i, o, t);
    if (l.shadowed) {
      let c = Tnr(l.shadowedBy.source);
      n.push({
        rule: i,
        reason: `Shadowed by "${l.shadowedBy.ruleValue.toolName}" ask rule (from ${c})`,
        shadowedBy: l.shadowedBy,
        shadowType: "ask",
        fix: generateFixSuggestion("ask", l.shadowedBy, i),
      });
    }
  }
  return n;
}
