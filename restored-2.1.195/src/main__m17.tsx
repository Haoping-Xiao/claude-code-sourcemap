// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module X6l
// matched 2.1.88 source: src/main.tsx
// class=modified (alt of src/main.tsx)  jaccard=0.0038  score=0.1452  fileCov=0.0039
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module X6l] deps: je, At, Is
K6l = require("path");
async function w1e(e = {}) {
  let { cmd: t, prefixArgs: n } = e.launcher ?? CF(),
    r = ML(),
    o = e.extraArgs ?? [],
    s;
  if (e.args) s = e.args;
  else if (
    e.freshIfNoTranscript &&
    (!r ||
      !(await Q6l.stat(r).then(
        (c) => c.size > 0,
        () => false,
      )))
  )
    s = o;
  else s = ["--resume", Rt(), ...o];
  (xWt(),
    dVe(),
    d4n(),
    await Promise.all([
      vc(IC(), 30000, "flush timeout (relaunch)").catch(() => {}),
      vc(EJe(), 2000, "cleanup timeout")
        .catch(() => {})
        .then(() => vc(fVe(), 1000, "analytics flush timeout").catch(() => {})),
    ]),
    e.preSpawn?.());
  let i = {
    ...process.env,
  };
  (delete i.CLAUDE_CODE_TUI_JUST_SWITCHED,
    delete i.CLAUDE_BRIDGE_REATTACH_SESSION,
    delete i.CLAUDE_BRIDGE_REATTACH_SEQ,
    delete i.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY,
    Object.assign(i, e.env));
  for (let c of e.dropEnv ?? []) delete i[c];
  let a = Ljo();
  Y6l(t, [t, ...n, ...s], i, a);
  for (let c of ["SIGINT", "SIGTERM", "SIGHUP"])
    (process.removeAllListeners(c), process.on(c, () => {}));
  let l = J6l.spawnSync(t, [...n, ...s], {
    stdio: "inherit",
    env: i,
    cwd: a,
  });
  if ((process.removeAllListeners("beforeExit"), process.removeAllListeners("exit"), l.error))
    (process.stderr.write(`Failed to relaunch Claude Code: ${l.error.message}
`),
      sv("relaunch_spawn_error"),
      process.exit(1));
  if (l.signal)
    (process.removeAllListeners(l.signal),
      process.kill(process.pid, l.signal),
      process.exit(128 + (Z6l.constants.signals[l.signal] ?? 0)));
  process.exit(l.status ?? (l.signal ? 1 : 0));
}
function Ljo() {
  let e = ML(),
    t = yr();
  if (e && ezl.dirname(e) === Jh(t)) return t;
  return rc();
}
var J6l, Q6l, Z6l, ezl;
