// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QEe
// matched 2.1.88 source: node_modules/commander/lib/command.js
// class=new  jaccard=0.0248  score=0.5131  fileCov=0.0254
// note: nearest: node_modules/commander/lib/command.js (0.0248); 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var QEe = E(() => {
  aEe();
  s8n = require("fs/promises"), V9e = require("path"), i8n = R(Uj(), 1);
});
var z9e = {};
_t(z9e, {
  severTtyInputForRelaunch: () => severTtyInputForRelaunch,
  execRelaunch: () => execRelaunch
});
function severTtyInputForRelaunch() {
  for (let e = 0; e < 32; e++) {
    if (e === 1 || e === 2) continue;
    try {
      if (IQa.isatty(e)) wQa.closeSync(e);
    } catch {}
  }
}
async function execRelaunch() {
  await new Promise(s => setImmediate(s));
  let {
      cmd: e,
      prefixArgs: t
    } = CF(),
    n = process.argv.slice(2),
    r = vQa.spawn(e, [...t, ...n], {
      stdio: "inherit",
      env: process.env
    });
  severTtyInputForRelaunch();
  let o = ["SIGINT", "SIGTERM", "SIGHUP"];
  for (let s of o) process.on(s, () => {
    try {
      r.kill(s);
    } catch {}
  });
  return new Promise(() => {
    r.on("close", (s, i) => {
      let a = i ? 128 + (CQa.constants.signals[i] ?? 0) : 0;
      process.exit(s ?? a);
    }), r.on("error", s => {
      process.stderr.write(`Failed to relaunch Claude Code: ${s.message}
`), sv("relaunch_child_error"), process.exit(1);
    });
  });
}
var vQa, wQa, CQa, IQa;