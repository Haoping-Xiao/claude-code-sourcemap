// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module B1c
// matched 2.1.88 source: src/utils/computerUse/setup.ts
// class=modified  jaccard=0.2038  score=0.5904  fileCov=0.2373
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module B1c] deps: ft, IL, bk, hN, hP
$1c = require("fs/promises");
var j1c = {};
_t(j1c, {
  setupComputerUseMCP: () => setupComputerUseMCP,
});
function setupComputerUseMCP() {
  let e = Cqe(ckn, apt()).map((n) => i9(S7, n.name)),
    t = dm()
      ? ["--computer-use-mcp"]
      : [
          U1c.join(
            F1c.fileURLToPath(
              "file:///home/runner/work/claude-cli-internal/claude-cli-internal/src/utils/computerUse/setup.ts",
            ),
            "..",
            "cli.js",
          ),
          "--computer-use-mcp",
        ];
  return {
    mcpConfig: {
      [S7]: {
        type: "stdio",
        command: process.execPath,
        args: t,
        scope: "dynamic",
      },
    },
    allowedTools: e,
  };
}
var U1c, F1c;
