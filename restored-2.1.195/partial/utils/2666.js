// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zXi
// matched 2.1.88 source: src/utils/git/gitignore.ts
// class=partial  jaccard=0.1356  score=1  fileCov=0.1356
// note: low-confidence suggestion: src/utils/git/gitignore.ts; dir inferred from dep-graph -> utils; 0 renamed
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
  if (typeof globalThis.Bun < "u") return globalThis.Bun.which(e);
  let t = KXi.spawnSync("which", [e], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
    timeout: 1000
  });
  if (t.status === 0 && t.stdout) return t.stdout.trim();
  return null;
}
var KXi;