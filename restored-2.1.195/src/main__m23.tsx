// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bJt
// matched 2.1.88 source: src/main.tsx
// class=modified (alt of src/main.tsx)  jaccard=0.0022  score=0.2429  fileCov=0.0022
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module bJt] deps: ft, FK, fd, X6l, Yp, QEe, y_, _a
((J6l = require("child_process")),
  (Q6l = require("fs/promises")),
  (Z6l = require("os")),
  (ezl = require("path")));
function vsr(e, t) {
  let n = Array.from(e.additionalWorkingDirectories.values())
      .filter((a) => a.source === "cliArg" || a.source === "session")
      .map((a) => a.path),
    r = [],
    o = false;
  for (let a of zBe())
    if (o) o = false;
    else if (a === "--add-dir") o = true;
    else r.push(a);
  let s = typeof t === "string" && vke(),
    i = e.isBypassPermissionsModeAvailable && !r.includes("--allow-dangerously-skip-permissions");
  return [
    ...r,
    ...(i ? ["--allow-dangerously-skip-permissions"] : []),
    ...n.flatMap((a) => ["--add-dir", a]),
    ...(s ? ["--effort", t] : []),
    "--permission-mode",
    e.mode,
  ];
}
