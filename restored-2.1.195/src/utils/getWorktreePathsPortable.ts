// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jkr
// matched 2.1.88 source: src/utils/getWorktreePathsPortable.ts
// class=modified  jaccard=0.7199  score=1  fileCov=0.7199
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Jkr = E(() => {
  ((gPu = /^(?:\s*<[a-z][\w-]*[\s>]|\[Request interrupted by user[^\]]*\])/),
    (hPu = /<command-name>(.*?)<\/command-name>/));
});
async function e9(e) {
  let t = JZe("git");
  if (t === null) return [];
  try {
    let { stdout: n } = await yPu(t, ["worktree", "list", "--porcelain"], {
      cwd: e,
      timeout: 5000,
      windowsHide: !0,
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
