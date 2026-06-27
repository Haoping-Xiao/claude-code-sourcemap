// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qir
// matched 2.1.88 source: src/commands/bridge-kick.ts
// class=modified (alt of src/commands/bridge-kick.ts)  jaccard=0.0183  score=0.0339  fileCov=0.0381
// note: deminified; 7 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: startParentWatchdog, runDaemonWorker, registerShutdownHandlers, isShutdownSentinel, httpStatusOf, heartbeatWorkerSchema, WORKER_KINDS
// [unwrapped __esm module Qir] deps: IB, Xr, wQ, dn, NB, T3o
gGo = ve(() =>
  H.object({
    dir: H.string(),
    name: H.string().optional(),
    spawnMode: H.enum(["same-dir", "worktree"]).default("same-dir"),
    capacity: H.number().int().positive().default(32),
    permissionMode: H.enum(yY).optional(),
    sandbox: H.boolean().default(false),
    sessionTimeoutSeconds: H.number().int().positive().optional(),
    createSessionOnStart: H.boolean().default(false),
  }).strict(),
);
var Ltc = {};
async function p7f(e, t, n, r) {
  let { intervalSeconds: o } = heartbeatWorkerSchema().parse(e);
  n(`heartbeat worker started (interval=${o}s)`);
  while (!t.aborted) if ((await Nn(o * 1000, t), !t.aborted)) n("heartbeat");
}
function isShutdownSentinel(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "shutdown";
}
function registerShutdownHandlers(e, t) {
  let n = () => t.abort();
  (e.on("SIGTERM", n),
    e.on("SIGINT", n),
    e.on("message", (r) => {
      if (isShutdownSentinel(r)) t.abort();
    }));
}
async function runDaemonWorker(e) {
  if (!e || !(e in WORKER_KINDS))
    (process.stderr.write(`unknown worker kind: ${e}
`),
      process.exit(2));
  if (e !== "heartbeat" && !lce())
    (process.stderr.write(`worker kind '${e}' is not available.
`),
      process.exit(2));
  let t = WORKER_KINDS[e],
    n = [];
  for await (let a of process.stdin) n.push(a);
  let r;
  try {
    r = Ft(Buffer.concat(n).toString("utf8"));
  } catch (a) {
    (process.stderr.write(`invalid config JSON on stdin: ${be(a)}
`),
      process.exit(2));
  }
  let o = t.schema().safeParse(r.config);
  if (!o.success)
    (process.stderr.write(`config validation failed: ${o.error.message}
`),
      process.exit(2));
  let s = new AbortController();
  (registerShutdownHandlers(process, s), startParentWatchdog(s));
  let i = etc(r.initialAccessToken);
  try {
    await t.run(
      o.data,
      s.signal,
      (a) =>
        process.stdout.write(
          a +
            `
`,
        ),
      i,
    );
  } catch (a) {
    if (httpStatusOf(a) === 429)
      (process.stdout.write(`rate limited (429): ${be(a)}
`),
        process.exit(e4n));
    throw a;
  }
}
function httpStatusOf(e) {
  let t = e;
  for (let n = 0; t != null && n < 8; n++) {
    let r = t.status;
    if (typeof r === "number") return r;
    let o = t.response?.status;
    if (typeof o === "number") return o;
    t = t.cause;
  }
  return;
}
function g7f(e) {
  try {
    return (process.kill(e, 0), true);
  } catch {
    return false;
  }
}
function startParentWatchdog(e, t) {
  let n = {
      ppid: () => process.ppid,
      isAlive: g7f,
      log: (i) =>
        process.stdout.write(
          i +
            `
`,
        ),
      onGone: () => process.exit(0),
      intervalMs: m7f,
      exitGraceMs: 2000,
      ...t,
    },
    r = n.ppid();
  if (r <= 1) return;
  let o = false,
    s = setInterval(() => {
      if (o) return;
      if (!(!n.isAlive(r) || (Vt() !== "windows" && n.ppid() !== r))) return;
      ((o = true),
        clearInterval(s),
        n.log("parent supervisor gone \u2014 exiting"),
        e.abort(),
        setTimeout(n.onGone, n.exitGraceMs).unref());
    }, n.intervalMs);
  return (s.unref(), s);
}
var heartbeatWorkerSchema,
  WORKER_KINDS,
  m7f = 30000;
