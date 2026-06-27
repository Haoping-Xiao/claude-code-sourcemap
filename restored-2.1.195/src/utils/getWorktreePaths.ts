// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Y4
// matched 2.1.88 source: src/utils/getWorktreePaths.ts
// class=modified  jaccard=0.4904  score=0.8486  fileCov=0.5374
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Y4 = E(() => {
  b5e();
  ft();
  id();
  kt();
  C5e();
  je();
  wr();
  fn();
  At();
  oc();
  vn();
  _a();
  Fh();
  ((jQa = require("crypto")),
    (IH = require("fs/promises")),
    (U6 = require("path")),
    (GQa = require("util")));
});
async function tAe(e) {
  let t = Date.now(),
    { stdout: n, code: r } = await Gr(go(), ["worktree", "list", "--porcelain"], {
      cwd: e,
      preserveOutputOnError: false,
    }),
    o = Date.now() - t;
  if (r !== 0)
    return (
      G("tengu_worktree_detection", {
        duration_ms: o,
        worktree_count: 0,
        success: false,
      }),
      []
    );
  let s = n
    .split(
      `
`,
    )
    .filter((l) => l.startsWith("worktree "))
    .map((l) => o_(l.slice(9)));
  G("tengu_worktree_detection", {
    duration_ms: o,
    worktree_count: s.length,
    success: true,
  });
  let i = s.find((l) => e === l || e.startsWith(l + zQa.sep)),
    a = s.filter((l) => l !== i).sort((l, c) => l.localeCompare(c));
  return i ? [i, ...a] : a;
}
var zQa;
