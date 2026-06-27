// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vGt
// matched 2.1.88 source: src/commands/insights.ts
// class=new  jaccard=0.0032  score=0.305  fileCov=0.0033
// note: nearest: src/commands/insights.ts (0.0032); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var vGt = E(() => {
  Un();
  At();
  Uh();
  MM();
  VDa = require("fs/promises"), gJ = require("path"), hmo = ["team", "logs", "sessions", "proposals"];
});
function L2n(e, t) {
  let n = $_e(e),
    r = !n && Nqe() && zDa(e);
  if (!n && !r) return null;
  let o = YJe(t);
  if (o.length === 0) return null;
  let s = o.map(i => i.label).join(", ");
  if (n) return `Content contains potential secrets (${s}) and cannot be written to team memory. Team memory is shared with all repository collaborators. Remove the sensitive content and try again.`;
  return `Content contains potential secrets (${s}) and cannot be written to memory. Memory is synced to your account. Remove the sensitive content and try again.`;
}