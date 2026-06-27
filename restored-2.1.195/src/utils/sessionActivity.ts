// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LL
// matched 2.1.88 source: src/utils/sessionActivity.ts
// class=modified  jaccard=0.2254  score=0.3372  fileCov=0.4045
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module LL] deps: ii, AIo, Qhl, MIo, RN, xMe, $pe, Ppe, I8e, pyt, T6t, q0o, Dyl, v_l, C_l, HU, mRo, hRo, jjn, R8e, N_l, gAe, V9t, fbl, m4t, H3t, I3t, Q1n, Dgo, uwo, Ebl, Rbl, Bbl, Gbl, zbl, Qbl, dre, IX, bk, i$, ZWe, Gy, f6, wr, fn, _m, jv
((Yyf = [
  (lSl(), ro(aSl)).CronCreateTool,
  (uSl(), ro(cSl)).CronDeleteTool,
  (pSl(), ro(dSl)).CronListTool,
]),
  (Xyf = []),
  ($Al = (ASl(), ro(ESl)).RemoteTriggerTool),
  (Jyf = []),
  (UAl = (h0o(), ro(g0o)).MonitorTool),
  (Qyf = (CSl(), ro(wSl)).SendUserFileTool),
  (FAl = (MSl(), ro(PSl)).PushNotificationTool),
  (Zyf = (pEl(), ro(dEl)).DesignSyncTool),
  (e_f = (vEl(), ro(TEl)).ProjectsTool),
  (GAl = (iAl(), ro(sAl)).ArtifactTool),
  (zAl = (l$(), ro(qW))),
  (JAl = (uAl(), ro(cAl)).ShareOnboardingGuideTool),
  (Pbt = (() => ((MAl(), ro(PAl)).initBundledWorkflows(), (i0o(), ro(s0o)).WorkflowTool))()),
  (t_f = ["default"]));
iNi(c3);
function n_f() {
  return {
    activityCallback: null,
    refcount: 0,
    mainLoopRefcount: 0,
    activeReasons: new Map(),
    oldestActivityStartedAt: null,
    heartbeatTimer: null,
    idleTimer: null,
    cleanupHandle: null,
  };
}
function ZAl() {
  let e = hLo(),
    t = gLo.get(e);
  if (!t) ((t = n_f()), gLo.set(e, t));
  return t;
}
function Zzt() {
  return gLo.get(hLo()) ?? null;
}
function startHeartbeatTimer(e) {
  (_Lo(e),
    (e.heartbeatTimer = setInterval(
      (t) => {
        if (
          (In("debug", "session_keepalive_heartbeat", {
            refcount: t.refcount,
          }),
          ut(process.env.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES))
        )
          t.activityCallback?.();
      },
      QAl,
      e,
    )));
}
function startIdleTimer(e) {
  if ((_Lo(e), e.activityCallback === null)) return;
  e.idleTimer = setTimeout(
    (t) => {
      (In("info", "session_idle_30s"), (t.idleTimer = null));
    },
    QAl,
    e,
  );
}
function _Lo(e) {
  if (e.idleTimer !== null) (clearTimeout(e.idleTimer), (e.idleTimer = null));
}
function tHl(e) {
  let t = ZAl();
  if (((t.activityCallback = e), t.refcount > 0 && t.heartbeatTimer === null))
    startHeartbeatTimer(t);
}
function nHl() {
  let e = Zzt();
  if (!e) return;
  if (((e.activityCallback = null), e.heartbeatTimer !== null))
    (clearInterval(e.heartbeatTimer), (e.heartbeatTimer = null));
  _Lo(e);
}
function rHl() {
  let e = Zzt();
  if (e && ut(process.env.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES)) e.activityCallback?.();
}
function oHl() {
  return (Zzt()?.activityCallback ?? null) !== null;
}
function bLo(e) {
  yLo = e;
}
function sHl() {
  return Zzt()?.mainLoopRefcount ?? 0;
}
function startSessionActivity(e, t) {
  let n = ZAl();
  if ((n.refcount++, t === void 0)) (n.mainLoopRefcount++, yLo?.(n.mainLoopRefcount));
  if ((n.activeReasons.set(e, (n.activeReasons.get(e) ?? 0) + 1), n.refcount === 1)) {
    if (
      ((n.oldestActivityStartedAt = Date.now()),
      n.activityCallback !== null && n.heartbeatTimer === null)
    )
      startHeartbeatTimer(n);
  }
  if (n.cleanupHandle === null) {
    let r = hLo();
    n.cleanupHandle = Ci(async () => {
      In("info", "session_activity_at_shutdown", {
        owner_key: r,
        refcount: n.refcount,
        active: Object.fromEntries(n.activeReasons),
        oldest_activity_ms:
          n.refcount > 0 && n.oldestActivityStartedAt !== null
            ? Date.now() - n.oldestActivityStartedAt
            : null,
      });
    });
  }
}
function KXn(e, t) {
  let n = Zzt();
  if (!n) return;
  if (n.refcount > 0) n.refcount--;
  if (t === void 0)
    if (n.mainLoopRefcount > 0) (n.mainLoopRefcount--, yLo?.(n.mainLoopRefcount));
    else
      In("warn", "session_activity_main_loop_underflow", {
        reason: e,
      });
  let r = (n.activeReasons.get(e) ?? 0) - 1;
  if (r > 0) n.activeReasons.set(e, r);
  else n.activeReasons.delete(e);
  if (n.refcount === 0 && n.heartbeatTimer !== null)
    (clearInterval(n.heartbeatTimer), (n.heartbeatTimer = null), startIdleTimer(n));
}
var QAl = 30000,
  r_f = "cli",
  hLo = () => r_f,
  yLo = null,
  gLo;
