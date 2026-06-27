// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hze
// matched 2.1.88 source: src/utils/promptShellExecution.ts
// class=modified  jaccard=0.068  score=0.2614  fileCov=0.0842
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module hze] deps: RN, je, At, co, Gy, Bqe, K0, _m
((GTl = require("crypto")),
  (jTl = (() => {
    let e;
    return () => {
      if (!e) e = (Jzt(), ro(Xzt)).PowerShellTool;
      return e;
    };
  })()),
  (kSf = /```!\s*\n?([\s\S]*?)\n?```/g),
  (RSf = /(?<=^|\s)!`([^`]+)`/gm));
function EJn() {
  if (Oe.CLAUDE_CODE_IS_COWORK) return true;
  if (yn("policySettings")?.disableSkillShellExecution === true) return true;
  return jo().disableSkillShellExecution === true;
}
function AJn(e) {
  let t = e.replace(DSf, qTl);
  if (t.includes("!`")) {
    let n = D2n(t);
    for (let r of [...n.matchAll(PSf)].reverse())
      t = t.slice(0, r.index) + qTl + t.slice(r.index + r[0].length);
  }
  return t;
}
var DSf,
  PSf,
  qTl = "[shell command execution disabled by policy]";
