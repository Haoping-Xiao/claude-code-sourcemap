// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jkr
// matched 2.1.88 source: src/utils/getWorktreePathsPortable.ts
// class=modified  jaccard=0.3867  score=0.7168  fileCov=0.4565
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Jkr]
((gPu = /^(?:\s*<[a-z][\w-]*[\s>]|\[Request interrupted by user[^\]]*\])/),
  (hPu = /<command-name>(.*?)<\/command-name>/));
async function e9(e) {
  let t = JZe("git");
  if (t === null) return [];
  try {
    let { stdout: n } = await yPu(t, ["worktree", "list", "--porcelain"], {
      cwd: e,
      timeout: 5000,
      windowsHide: true,
    });
    if (!n) return [];
    return n
      .split(
        `
`,
      )
      .filter((r) => r.startsWith("worktree "))
      .map((r) => o_(r.slice(9)));
  } catch {
    return [];
  }
}
var WEs, qEs, yPu;
