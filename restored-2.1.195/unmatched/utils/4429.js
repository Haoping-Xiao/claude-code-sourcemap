// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hze
// matched 2.1.88 source: src/utils/promptShellExecution.ts
// class=new  jaccard=0.0562  score=0.3941  fileCov=0.0615
// note: nearest: src/utils/promptShellExecution.ts (0.0562); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var hze = E(() => {
  RN();
  je();
  At();
  co();
  Gy();
  Bqe();
  K0();
  _m();
  GTl = require("crypto"), jTl = (() => {
    let e;
    return () => {
      if (!e) e = (Jzt(), ro(Xzt)).PowerShellTool;
      return e;
    };
  })(), kSf = /```!\s*\n?([\s\S]*?)\n?```/g, RSf = /(?<=^|\s)!`([^`]+)`/gm;
});
function EJn() {
  if (Oe.CLAUDE_CODE_IS_COWORK) return !0;
  if (yn("policySettings")?.disableSkillShellExecution === !0) return !0;
  return jo().disableSkillShellExecution === !0;
}
function AJn(e) {
  let t = e.replace(DSf, qTl);
  if (t.includes("!`")) {
    let n = D2n(t);
    for (let r of [...n.matchAll(PSf)].reverse()) t = t.slice(0, r.index) + qTl + t.slice(r.index + r[0].length);
  }
  return t;
}
var DSf,
  PSf,
  qTl = "[shell command execution disabled by policy]";