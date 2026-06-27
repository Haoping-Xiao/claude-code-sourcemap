// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Cwo
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Cwo]
J6_ = Grl(!1);
function Iwo() {
  return tnf;
}
var tnf = "";
function Eyt(e, t, n) {
  if (!e?.length) return [...t];
  let r = !1,
    o = [];
  for (let s of e) {
    if (s === "$defaults") {
      if (!r) o.push(...t), r = !0;
      continue;
    }
    o.push(n(s));
  }
  return o;
}
function Ayt(e, t) {
  return Eyt(e, t.length > 0 ? [t] : [], n => `- ${n}`).join(`
`);
}
function xwo(e) {
  if (e.length === 0) return "";
  return `- User Deny Rules: The user has configured these permission deny rules: ${e.map(n => `\`${n}\``).join(", ")}. Each rule names a tool and (optionally) an argument pattern that is already hard-blocked for that tool. ` + "Block the action if it accomplishes the same effect via a different tool \u2014 e.g. using Bash with " + "`python -c`, `sed -i`, `cat >`, heredocs, or similar to write or edit a file that an Edit/Write/MultiEdit deny rule covers, or otherwise routing around a deny rule by switching tools. The named tool itself is enforced separately; your job here is to catch circumvention.";
}
var Syt = "$defaults";