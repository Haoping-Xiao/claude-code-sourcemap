// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vGt
// matched 2.1.88 source: src/services/teamMemorySync/teamMemSecretGuard.ts
// class=modified  jaccard=0.102  score=0.2528  fileCov=0.146
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module vGt] deps: Un, At, Uh, MM
((VDa = require("fs/promises")),
  (gJ = require("path")),
  (hmo = ["team", "logs", "sessions", "proposals"]));
function L2n(e, t) {
  let n = $_e(e),
    r = !n && Nqe() && zDa(e);
  if (!n && !r) return null;
  let o = YJe(t);
  if (o.length === 0) return null;
  let s = o.map((i) => i.label).join(", ");
  if (n)
    return `Content contains potential secrets (${s}) and cannot be written to team memory. Team memory is shared with all repository collaborators. Remove the sensitive content and try again.`;
  return `Content contains potential secrets (${s}) and cannot be written to memory. Memory is synced to your account. Remove the sensitive content and try again.`;
}
