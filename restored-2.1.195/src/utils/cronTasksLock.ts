// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TPc
// matched 2.1.88 source: src/utils/cronTasksLock.ts
// class=modified  jaccard=0.254  score=0.482  fileCov=0.3494
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module TPc] deps: utils/debug.ts, utils/errors.ts, utils/teleport.tsx
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
async function tryCreateExclusive(lock, dir) {
  let n = Ftn(dir),
    r = De(lock);
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
async function tryAcquireSchedulerLock(opts) {
  let t = opts?.dir;
  await HPc(t ?? rc());
  let n = opts?.lockIdentity ?? Rt(),
    r = {
      sessionId: n,
      pid: process.pid,
      procStart: fte(),
      acquiredAt: Date.now(),
    };
  if (await tryCreateExclusive(r, t))
    return (
      (Utn = void 0),
      jYo(opts),
      T(`[ScheduledTasks] acquired scheduler lock (PID ${process.pid})`),
      true
    );
  let existing = await wPc(t);
  if (existing?.sessionId === n) {
    if (existing.pid !== process.pid) (await rie.writeFile(Ftn(t), De(r)), jYo(opts));
    return true;
  }
  if (existing && zR(existing.pid) && (await bv(existing.pid, existing.procStart))) {
    if (Utn !== existing.sessionId)
      ((Utn = existing.sessionId),
        T(
          `[ScheduledTasks] scheduler lock held by session ${existing.sessionId} (PID ${existing.pid})`,
        ));
    return false;
  }
  if (existing) T(`[ScheduledTasks] recovering stale scheduler lock from PID ${existing.pid}`);
  if ((await rie.unlink(Ftn(t)).catch(() => {}), await tryCreateExclusive(r, t)))
    return ((Utn = void 0), jYo(opts), true);
  return false;
}
async function releaseSchedulerLock(opts) {
  (Yfr?.(), (Yfr = void 0), (Utn = void 0));
  let t = opts?.dir,
    n = opts?.lockIdentity ?? Rt(),
    r = await wPc(t);
  if (!r || r.sessionId !== n) return;
  try {
    (await rie.unlink(Ftn(t)), T("[ScheduledTasks] released scheduler lock"));
  } catch {}
}
var rie, jtn, JCm, QCm, Yfr, Utn;
