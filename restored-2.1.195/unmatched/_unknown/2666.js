// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zXi
// matched 2.1.88 source: src/utils/worktree.ts
// class=new  jaccard=0.0181  score=0.7886  fileCov=0.0182
// note: nearest: src/utils/worktree.ts (0.0181); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var zXi = E(() => {
  jXi = R(MMn(), 1), yWe = require("fs"), GXi = require("fs/promises"), WXi = require("os"), Flt = require("path"), {
    pki: Ult,
    md: tQd,
    random: nQd,
    util: rQd
  } = jXi.default;
});
function kbe(e) {
  if (typeof globalThis.Bun !== "undefined") return globalThis.Bun.which(e);
  let t = KXi.spawnSync("which", [e], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
    timeout: 1000
  });
  if (t.status === 0 && t.stdout) return t.stdout.trim();
  return null;
}
var KXi;