// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module B1c
// matched 2.1.88 source: src/utils/computerUse/setup.ts
// class=partial  jaccard=0.2038  score=0.5904  fileCov=0.2373
// note: low-confidence suggestion: src/utils/computerUse/setup.ts; dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: setupComputerUseMCP
// [unwrapped __esm module B1c] deps: ft, IL, bk, hN, hP
$1c = require("fs/promises");
function setupComputerUseMCP() {
  let e = Cqe(ckn, apt()).map(n => i9(S7, n.name)),
    t = dm() ? ["--computer-use-mcp"] : [U1c.join(F1c.fileURLToPath("file:///home/runner/work/claude-cli-internal/claude-cli-internal/src/utils/computerUse/setup.ts"), "..", "cli.js"), "--computer-use-mcp"];
  return {
    mcpConfig: {
      [S7]: {
        type: "stdio",
        command: process.execPath,
        args: t,
        scope: "dynamic"
      }
    },
    allowedTools: e
  };
}
var U1c, F1c;