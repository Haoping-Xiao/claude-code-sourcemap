// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vbl
// matched 2.1.88 source: src/tools/ExitWorktreeTool/ExitWorktreeTool.ts
// class=modified (alt of src/tools/ExitWorktreeTool/ExitWorktreeTool.ts)  jaccard=0.0884  score=0.4266  fileCov=0.1003
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module vbl] deps: commands/add-dir/validation.ts, hooks/useTerminalSize.ts
cfe = R(se(), 1);
async function countWorktreeChanges(worktreePath, originalHeadCommit) {
  let status = await $n(go(), ["-C", worktreePath, "status", "--porcelain"]);
  if (status.code !== 0) return null;
  let r = On(
    status.stdout.split(`
`),
    (i) => i.trim() !== "",
  );
  if (!originalHeadCommit) return null;
  let o = await $n(go(), [
    "-C",
    worktreePath,
    "rev-list",
    "--count",
    `${originalHeadCommit}..HEAD`,
  ]);
  if (o.code !== 0) return null;
  let s = parseInt(o.stdout.trim(), 10) || 0;
  return {
    changedFiles: r,
    commits: s,
  };
}
async function Cbl(e, t, n) {
  let r = e,
    o = false;
  try {
    Uy(e);
  } catch (i) {
    let a = false;
    try {
      await Ibl.realpath(e);
    } catch (l) {
      a = wn(l);
    }
    if (!a) throw i;
    ((o = true), (r = ""));
    for (let l of [n, xbl.homedir(), vU()])
      try {
        (Uy(l), (r = l));
        break;
      } catch {}
    if (!r) throw i;
    T(`ExitWorktree: original directory "${e}" no longer exists; session cwd recovered to "${r}"`);
  }
  let s = o && r === n;
  if (!o || s) {
    if ((_D(r), t)) (Hge(r), Rke());
  }
  return (
    fq(null),
    k$e(),
    ak(),
    gS.cache.clear?.(),
    mY(),
    bS()?.refreshGitBranch?.(),
    {
      restoredCwd: r,
      originalCwdMissing: o,
      fellBackToWorktree: s,
    }
  );
}
function TRo(e, t) {
  if (!t.originalCwdMissing) return `Session is now back in ${e}.`;
  let n = `The original directory ${e} no longer exists, so the session is now in ${t.restoredCwd}.`;
  return t.fellBackToWorktree ? n : `${n} Consider restarting Claude from an existing directory.`;
}
var Ibl, xbl, Xgf, Jgf, kbl;
