// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CPc
// matched 2.1.88 source: src/utils/cronScheduler.ts
// class=modified  jaccard=0.3953  score=0.5505  fileCov=0.5838
// note: deminified; 3 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var CPc = E(() => {
  Xr();
  ft();
  TPc();
  fd();
  je();
  At();
  YS();
  Rd();
  Jt();
  ((rie = require("fs/promises")),
    (jtn = require("path")),
    (JCm = jtn.join(".claude", "scheduled_tasks.lock")),
    (QCm = ve(() =>
      H.object({
        sessionId: H.string(),
        pid: H.number(),
        procStart: H.string().optional(),
        acquiredAt: H.number(),
      }),
    )));
});
var RPc = {};
_t(RPc, {
  isRecurringTaskAged: () => isRecurringTaskAged,
  createCronScheduler: () => createCronScheduler,
  buildMissedTaskNotification: () => buildMissedTaskNotification,
});
function isRecurringTaskAged(e, t, n) {
  if (n === 0) return !1;
  return Boolean(e.recurring && !e.permanent && t - e.createdAt >= n);
}
function createCronScheduler(e) {
  let {
      onFire: t,
      isLoading: n,
      assistantMode: r = !1,
      onFireTask: o,
      onMissed: s,
      dir: i,
      lockIdentity: a,
      getJitterConfig: l,
      isKilled: c,
      filter: u,
      getExtraTasks: d,
    } = e,
    p =
      i || a
        ? {
            dir: i,
            lockIdentity: a,
          }
        : void 0,
    f = i !== void 0 ? a : Rt(),
    m = [],
    g = [],
    h = new Map(),
    y = new Set(),
    b = new Set(),
    _ = null,
    S = null,
    A = null,
    v = null,
    C = !1,
    x = !1,
    I = new Map();
  function k(M, N) {
    if (!zR(M)) return (I.delete(M), !0);
    if (N === void 0) return !1;
    let B = Date.now(),
      $ = I.get(M);
    if (!$ || B - $.at >= 60000)
      (($ = {
        at: B,
        token: Hye(M),
      }),
        I.set(M, $));
    return $.token !== void 0 && $.token !== N;
  }
  function D(M) {
    if (M.createdBySessionId === void 0) return x;
    if (M.createdBySessionId === f) return !0;
    return x && (M.createdByPid === void 0 || k(M.createdByPid, M.createdByProcStart));
  }
  async function P(M) {
    let N = await vct(i),
      B = d ? await d().catch((V) => (T(`[ScheduledTasks] getExtraTasks failed: ${V}`), [])) : [];
    if (C) return;
    if (((m = N), (g = B), !M)) return;
    let $ = !1;
    for (let V of N)
      if (f !== void 0 && V.createdBySessionId === f && V.createdByPid !== process.pid)
        ((V.createdByPid = process.pid), (V.createdByProcStart = fte()), ($ = !0));
    if ($) await B2t(N, i).catch((V) => T(`[ScheduledTasks] failed to refresh task pids: ${V}`));
    let q = Date.now(),
      W = zra(N, q).filter((V) => !V.recurring && !y.has(V.id) && (!u || u(V)) && D(V));
    if (W.length > 0) {
      for (let V of W) (y.add(V.id), h.set(V.id, 1 / 0));
      if (
        (G("tengu_scheduled_task_missed", {
          count: W.length,
          taskIds: W.map((V) => V.id).join(","),
        }),
        s)
      )
        s(W);
      else t(buildMissedTaskNotification(W));
      (Pue(
        W.map((V) => V.id),
        i,
      ).catch((V) => T(`[ScheduledTasks] failed to remove missed tasks: ${V}`)),
        T(`[ScheduledTasks] surfaced ${W.length} missed one-shot task(s)`));
    }
  }
  function O() {
    if (c?.()) return;
    if (n() && !r) return;
    let M = Date.now(),
      N = new Set(),
      B = [],
      $ = l?.() ?? O8;
    function q(W, V) {
      if (u && !u(W)) return;
      if ((N.add(W.id), b.has(W.id))) return;
      let Y = h.get(W.id);
      if (Y === void 0)
        ((Y = W.recurring
          ? (U2t(W.cron, W.lastFiredAt ?? W.createdAt, W.id, $) ?? 1 / 0)
          : (NOn(W.cron, W.createdAt, W.id, $) ?? 1 / 0)),
          h.set(W.id, Y),
          T(
            `[ScheduledTasks] scheduled ${W.id} for ${Y === 1 / 0 ? "never" : new Date(Y).toISOString()}`,
          ));
      if (M < Y) return;
      if (
        (T(`[ScheduledTasks] firing ${W.id}${W.recurring ? " (recurring)" : ""}`),
        G("tengu_scheduled_task_fire", {
          recurring: W.recurring ?? !1,
          taskId: W.id,
          autonomousLoopDefault: eIm.isLoopDefaultSentinel(W.prompt),
        }),
        o)
      )
        o(W);
      else t(W.prompt);
      let z = isRecurringTaskAged(W, M, $.recurringMaxAgeMs);
      if (z) {
        let K = Math.floor((M - W.createdAt) / 1000 / 60 / 60);
        (T(
          `[ScheduledTasks] recurring task ${W.id} aged out (${K}h since creation), deleting after final fire`,
        ),
          G("tengu_scheduled_task_expired", {
            taskId: W.id,
            ageHours: K,
          }));
      }
      if (W.recurring && !z) {
        let K = U2t(W.cron, M, W.id, $) ?? 1 / 0;
        if ((h.set(W.id, K), !V)) B.push(W.id);
      } else if (V) (IK([W.id]), h.delete(W.id));
      else
        (b.add(W.id),
          h.set(W.id, 1 / 0),
          Pue([W.id], i)
            .catch((K) => T(`[ScheduledTasks] failed to remove task ${W.id}: ${K}`))
            .finally(() => b.delete(W.id)));
    }
    for (let W of m) if (D(W)) q(W, !1);
    if (B.length > 0) {
      for (let W of B) b.add(W);
      qra(B, M, i)
        .catch((W) => T(`[ScheduledTasks] failed to persist lastFiredAt: ${W}`))
        .finally(() => {
          for (let W of B) b.delete(W);
        });
    }
    if (i === void 0) for (let W of Hw()) q(W, !0);
    for (let W of g) q(W, !0);
    if (N.size === 0) {
      h.clear();
      return;
    }
    for (let W of h.keys()) if (!N.has(W)) h.delete(W);
  }
  async function L() {
    if (C) return;
    if (_) (clearInterval(_), (_ = null));
    let { default: M } = await Promise.resolve().then(() => (Ece(), ZBi));
    if (C) return;
    if (((x = await GYo(p).catch(() => !1)), C)) {
      if (x) ((x = !1), Gtn(p));
      return;
    }
    if (!x)
      ((A = setInterval(() => {
        GYo(p)
          .then((B) => {
            if (C) {
              if (B) Gtn(p);
              return;
            }
            if (B) {
              if (((x = !0), A)) (clearInterval(A), (A = null));
            }
          })
          .catch((B) =>
            T(String(B), {
              level: "error",
            }),
          );
      }, nIm)),
        A.unref?.());
    P(!0).then(O);
    let N = eSe(i);
    ((v = M.watch(N, {
      persistent: !1,
      ignoreInitial: !0,
      awaitWriteFinish: {
        stabilityThreshold: tIm,
      },
      ignorePermissionErrors: !0,
    })),
      v.on("error", (B) =>
        T(`[ScheduledTasks] watcher error: ${B}`, {
          level: "warn",
        }),
      ),
      v.on("add", () => void P(!1)),
      v.on("change", () => void P(!1)),
      v.on("unlink", () => {
        if (!C) ((m = []), h.clear());
      }),
      (S = setInterval(O, IPc)),
      S.unref?.());
  }
  return {
    start() {
      if (((C = !1), i !== void 0)) {
        (T(`[ScheduledTasks] scheduler start() \u2014 dir=${i}, hasTasks=${OOn(i)}`), L());
        return;
      }
      if (
        (T(`[ScheduledTasks] scheduler start() \u2014 enabled=${mJe()}, hasTasks=${OOn()}`),
        !mJe() && (r || d !== void 0 || OOn()))
      )
        lee(!0);
      if (mJe()) {
        L();
        return;
      }
      ((_ = setInterval(
        (M) => {
          if (mJe()) M();
        },
        IPc,
        L,
      )),
        _.unref?.());
    },
    stop() {
      if (((C = !0), _)) (clearInterval(_), (_ = null));
      if (S) (clearInterval(S), (S = null));
      if (A) (clearInterval(A), (A = null));
      if ((v?.close(), (v = null), x)) ((x = !1), Gtn(p));
    },
    getNextFireTime() {
      let M = 1 / 0;
      for (let N of h.values()) if (N < M) M = N;
      return M === 1 / 0 ? null : M;
    },
    checkNow() {
      O();
    },
  };
}
function buildMissedTaskNotification(e) {
  let t = e.length > 1,
    n = `The following one-shot scheduled task${t ? "s were" : " was"} missed while Claude was not running. ${t ? "They have" : "It has"} already been removed from .claude/scheduled_tasks.json.

Do NOT execute ${t ? "these prompts" : "this prompt"} yet. First use the AskUserQuestion tool to ask whether to run ${t ? "each one" : "it"} now. Only execute if the user confirms.`,
    r = e.map((o) => {
      let s = `[${r$(o.cron)}, created ${new Date(o.createdAt).toLocaleString()}]`,
        i = (o.prompt.match(/`+/g) ?? []).reduce((l, c) => Math.max(l, c.length), 0),
        a = "`".repeat(Math.max(3, i + 1));
      return `${s}
${a}
${o.prompt}
${a}`;
    });
  return `${n}

${r.join(`

`)}`;
}
var eIm,
  IPc = 1000,
  tIm = 300,
  nIm = 5000;
