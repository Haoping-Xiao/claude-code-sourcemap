// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TPc
// matched 2.1.88 source: src/utils/cronTasksLock.ts
// class=modified  jaccard=0.254  score=0.482  fileCov=0.3494
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module TPc] deps: je, At, gM
((hvt = require("fs/promises")),
  (FYo = require("path")),
  (XCm = [
    "**/.claude/scheduled_tasks.lock",
    "**/.claude/scheduled_tasks.json",
    "**/.claude/routines/.state/",
    "**/.claude/worktrees/",
    "**/.claude/checkpoints/",
    "**/.claude/mailbox/",
    "**/.claude/agent-registry.json",
    "**/.claude/agent-memory-local",
    "**/.claude/first-run",
    "**/.claude/assistant-daemon-state.json",
  ]),
  (APc = new Set()));
function Ftn(e) {
  return jtn.join(e ?? rc(), JCm);
}
async function wPc(e) {
  let t;
  try {
    t = await rie.readFile(Ftn(e), "utf8");
  } catch {
    return;
  }
  let n = QCm().safeParse(Ia(t, false));
  return n.success ? n.data : void 0;
}
async function tryCreateExclusive(e, t) {
  let n = Ftn(t),
    r = De(e);
  try {
    return (
      await rie.writeFile(n, r, {
        flag: "wx",
      }),
      true
    );
  } catch (o) {
    let s = on(o);
    if (s === "EEXIST") return false;
    if (s === "ENOENT") {
      await rie.mkdir(jtn.dirname(n), {
        recursive: true,
      });
      try {
        return (
          await rie.writeFile(n, r, {
            flag: "wx",
          }),
          true
        );
      } catch (i) {
        if (on(i) === "EEXIST") return false;
        throw i;
      }
    }
    throw o;
  }
}
function jYo(e) {
  (Yfr?.(),
    (Yfr = Ci(async () => {
      await releaseSchedulerLock(e);
    })));
}
async function tryAcquireSchedulerLock(e) {
  let t = e?.dir;
  await HPc(t ?? rc());
  let n = e?.lockIdentity ?? Rt(),
    r = {
      sessionId: n,
      pid: process.pid,
      procStart: fte(),
      acquiredAt: Date.now(),
    };
  if (await tryCreateExclusive(r, t))
    return (
      (Utn = void 0),
      jYo(e),
      T(`[ScheduledTasks] acquired scheduler lock (PID ${process.pid})`),
      true
    );
  let o = await wPc(t);
  if (o?.sessionId === n) {
    if (o.pid !== process.pid) (await rie.writeFile(Ftn(t), De(r)), jYo(e));
    return true;
  }
  if (o && zR(o.pid) && (await bv(o.pid, o.procStart))) {
    if (Utn !== o.sessionId)
      ((Utn = o.sessionId),
        T(`[ScheduledTasks] scheduler lock held by session ${o.sessionId} (PID ${o.pid})`));
    return false;
  }
  if (o) T(`[ScheduledTasks] recovering stale scheduler lock from PID ${o.pid}`);
  if ((await rie.unlink(Ftn(t)).catch(() => {}), await tryCreateExclusive(r, t)))
    return ((Utn = void 0), jYo(e), true);
  return false;
}
async function releaseSchedulerLock(e) {
  (Yfr?.(), (Yfr = void 0), (Utn = void 0));
  let t = e?.dir,
    n = e?.lockIdentity ?? Rt(),
    r = await wPc(t);
  if (!r || r.sessionId !== n) return;
  try {
    (await rie.unlink(Ftn(t)), T("[ScheduledTasks] released scheduler lock"));
  } catch {}
}
var rie, jtn, JCm, QCm, Yfr, Utn;
