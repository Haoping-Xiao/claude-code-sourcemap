// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bJt
// matched 2.1.88 source: src/main.tsx
// class=new  jaccard=0.0024  score=0.3195  fileCov=0.0024
// note: nearest: src/main.tsx (0.0024); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bJt = E(() => {
  ft();
  FK();
  fd();
  X6l();
  Yp();
  QEe();
  y_();
  _a();
  J6l = require("child_process"), Q6l = require("fs/promises"), Z6l = require("os"), ezl = require("path");
});
function vsr(e, t) {
  let n = Array.from(e.additionalWorkingDirectories.values()).filter(a => a.source === "cliArg" || a.source === "session").map(a => a.path),
    r = [],
    o = !1;
  for (let a of zBe()) if (o) o = !1;else if (a === "--add-dir") o = !0;else r.push(a);
  let s = typeof t === "string" && vke(),
    i = e.isBypassPermissionsModeAvailable && !r.includes("--allow-dangerously-skip-permissions");
  return [...r, ...(i ? ["--allow-dangerously-skip-permissions"] : []), ...n.flatMap(a => ["--add-dir", a]), ...(s ? ["--effort", t] : []), "--permission-mode", e.mode];
}