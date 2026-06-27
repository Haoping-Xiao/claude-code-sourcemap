// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ql
// matched 2.1.88 source: src/commands/add-dir/validation.ts
// class=modified  jaccard=0.4637  score=0.6161  fileCov=0.652
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ql] deps: Ye, WLn
((qJr = R(lt(), 1)), (X5i = R(rt(), 1)), (VJr = R(rt(), 1)), (tbe = R(se(), 1)));
zJr = X5i.createContext(false);
async function validateDirectoryForWorkspace(directoryPath, permissionContext) {
  if (!directoryPath)
    return {
      resultType: "emptyPath",
    };
  let n = oUt.resolve(ds(directoryPath));
  try {
    if (!(await Q5i.stat(n)).isDirectory())
      return {
        resultType: "notADirectory",
        directoryPath: directoryPath,
        absolutePath: n,
      };
  } catch (s) {
    let i = on(s);
    if (i === "ENOENT" || i === "ENOTDIR" || i === "EACCES" || i === "EPERM")
      return {
        resultType: "pathNotFound",
        directoryPath: directoryPath,
        absolutePath: n,
      };
    throw s;
  }
  let r = jj(permissionContext),
    o = yr();
  for (let s of r)
    if (
      dL(n, s, {
        caseFold: false,
      })
    )
      return {
        resultType: "alreadyInWorkingDirectory",
        directoryPath: directoryPath,
        workingDir: s,
        isExactMatch: oUt.resolve(s) === n,
        isOriginalCwd: s === o,
      };
  return {
    resultType: "success",
    absolutePath: n,
  };
}
function addDirHelpMessage(result) {
  switch (result.resultType) {
    case "emptyPath":
      return "Please provide a directory path.";
    case "pathNotFound":
      return `Path ${wt.bold(result.absolutePath)} was not found.`;
    case "notADirectory": {
      let t = oUt.dirname(result.absolutePath);
      return `${wt.bold(result.directoryPath)} is not a directory. Did you mean to add the parent directory ${wt.bold(t)}?`;
    }
    case "alreadyInWorkingDirectory": {
      let t = wt.bold(result.directoryPath);
      if (result.isExactMatch)
        return result.isOriginalCwd
          ? `${t} is already the current working directory.`
          : `${t} is already added as a working directory.`;
      let n = result.isOriginalCwd
        ? "the current working directory"
        : "the additional working directory";
      return `${t} is already accessible within ${n} ${wt.bold(result.workingDir)}.`;
    }
    case "success":
      return `Added ${wt.bold(result.absolutePath)} as a working directory.`;
  }
}
var Q5i, oUt;
